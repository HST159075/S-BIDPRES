import { Decimal } from "../../generated/prisma/runtime/library";
import { prisma } from "../lib/prisma";
import {
  setAuctionPrice,
  setAutoBid,
  getAutoBids,
  removeAutoBid,
} from "../lib/redis";
import { getIO } from "../socket/socket.server";
import { sendOutbidEmail, sendAuctionWonEmail } from "../lib/mailer";
import type { PlaceBidInput } from "../validators/bid.validator";

export async function placeBid(bidderId: string, input: PlaceBidInput) {
  const { auctionId, amount } = input;
  
  const auction = await prisma.auction.findUnique({
    where: { id: auctionId },
    include: { listing: { select: { sellerId: true, title: true } } },
  });
  if (!auction)
    throw Object.assign(new Error("Auction not found."), { statusCode: 404 });
  if (auction.status !== "live")
    throw Object.assign(new Error("Auction is not live."), { statusCode: 400 });
  if (new Date() > auction.endTime)
    throw Object.assign(new Error("Auction has ended."), { statusCode: 400 });
  if (auction.listing.sellerId === bidderId)
    throw Object.assign(new Error("Sellers cannot bid on own listing."), {
      statusCode: 403,
    });
  const minBid = Number(auction.currentPrice) + Number(auction.bidIncrement);
  if (amount < minBid)
    throw Object.assign(
      new Error("Minimum bid is ৳" + minBid.toLocaleString()),
      { statusCode: 400 },
    );
  const prev = await prisma.bid.findFirst({
    where: { auctionId, status: "active" },
    include: { bidder: { select: { email: true, name: true } } },
  });
  const [bid] = await prisma.$transaction([
    prisma.bid.create({
      data: { auctionId, bidderId, amount, status: "active" },
    }),
    prisma.auction.update({
      where: { id: auctionId },
      data: { currentPrice: amount },
    }),
    ...(prev
      ? [
          prisma.bid.update({
            where: { id: prev.id },
            data: { status: "outbid" },
          }),
        ]
      : []),
  ]);
  await setAuctionPrice(auctionId, amount);
  const io = getIO();
  io.to("auction:" + auctionId).emit("bid:new", {
    bidderId,
    amount,
    time: new Date().toISOString(),
  });
  if (prev && prev.bidderId !== bidderId) {
    io.to("user:" + prev.bidderId).emit("bid:outbid", {
      newAmount: amount,
      auctionId,
    });
    if (prev.bidder.email)
      await sendOutbidEmail(
        prev.bidder.email,
        prev.bidder.name,
        auction.listing.title,
        amount,
        auctionId,
      );
  }
  await triggerAutoBids(auctionId, bidderId, amount, auction.bidIncrement);
  return bid;
}

async function triggerAutoBids(
  auctionId: string,
  lastBidderId: string,
  lastAmount: number,
  inc: Decimal,
) {
  const autobids = await getAutoBids(auctionId);
  if (!autobids) return;
  for (const [bId, maxStr] of Object.entries(autobids)) {
    if (bId === lastBidderId) continue;
    const max = parseFloat(maxStr),
      next = lastAmount + Number(inc);
    if (next <= max) {
      await placeBid(bId, { auctionId, amount: next, gateway: "sslcommerz" });
      break;
    } else {
      await removeAutoBid(auctionId, bId);
      getIO()
        .to("user:" + bId)
        .emit("bid:outbid", { newAmount: lastAmount, auctionId });
    }
  }
}

export async function setAutoBidConfig(
  bidderId: string,
  auctionId: string,
  maxAmount: number,
) {
  const auction = await prisma.auction.findUnique({ where: { id: auctionId } });
  if (!auction)
    throw Object.assign(new Error("Auction not found."), { statusCode: 404 });
  if (auction.status !== "live")
    throw Object.assign(new Error("Auction not live."), { statusCode: 400 });
  const cur = Number(auction.currentPrice);
  if (maxAmount <= cur)
    throw Object.assign(new Error("Max must exceed current price ৳" + cur), {
      statusCode: 400,
    });
  await setAutoBid(auctionId, bidderId, maxAmount);
  const highest = await prisma.bid.findFirst({
    where: { auctionId, status: "active" },
  });
  if (!highest || highest.bidderId !== bidderId) {
    const next = cur + Number(auction.bidIncrement);
    if (next <= maxAmount)
      await placeBid(bidderId, {
        auctionId,
        amount: next,
        gateway: "sslcommerz",
      });
  }
  return { set: true };
}

export const cancelAutoBid = async (bidderId: string, auctionId: string) => {
  await removeAutoBid(auctionId, bidderId);
  return { cancelled: true };
};

export async function getAuctionBids(auctionId: string, page = 1, limit = 20) {
  const skip = (page - 1) * limit;
  const [data, total] = await prisma.$transaction([
    prisma.bid.findMany({
      where: { auctionId },
      skip,
      take: limit,
      orderBy: { createdAt: "desc" },
      include: { bidder: { select: { name: true, avatar: true } } },
    }),
    prisma.bid.count({ where: { auctionId } }),
  ]);
  return { data, total, page, limit };
}


export async function endAuction(auctionId: string) {
  const auction = await prisma.auction.findUnique({
    where: { id: auctionId },
    include: { listing: { select: { title: true } } },
  });
  if (!auction)
    throw Object.assign(new Error("Auction not found."), { statusCode: 404 });
  if (auction.status === "ended") return auction;
  const winner = await prisma.bid.findFirst({
    where: { auctionId, status: "active" },
    orderBy: { amount: "desc" },
    include: { bidder: { select: { email: true, name: true } } },
  });
  await prisma.$transaction([
    prisma.auction.update({
      where: { id: auctionId },
      data: {
        status: "ended",
        winnerId: winner?.bidderId,
        finalPrice: winner?.amount ?? null,
      },
    }),
    prisma.listing.updateMany({
      where: { auction: { id: auctionId } },
      data: { status: "ended" },
    }),
    ...(winner
      ? [
          prisma.bid.update({
            where: { id: winner.id },
            data: { status: "won" },
          }),
        ]
      : []),
  ]);
  getIO()
    .to("auction:" + auctionId)
    .emit("auction:ended", {
      winnerId: winner?.bidderId ?? null,
      finalPrice: Number(winner?.amount ?? 0),
    });
  if (winner?.bidder.email)
    await sendAuctionWonEmail(
      winner.bidder.email,
      winner.bidder.name,
      auction.listing.title,
      Number(winner.amount),
      auctionId,
    );
  return auction;
}

