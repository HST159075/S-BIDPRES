import axios from "axios";
import { prisma } from "../lib/prisma";
import { logger } from "../lib/logger";
const COMM = 0.15,
  SANDBOX = process.env.NODE_ENV !== "production";

export async function initiateSSLCommerzPayment(bidId: string, userId: string) {
  const bid = await prisma.bid.findUnique({
    where: { id: bidId },
    include: {
      auction: { include: { listing: { select: { title: true } } } },
      bidder: { select: { name: true, email: true, phone: true } },
    },
  });
  if (!bid)
    throw Object.assign(new Error("Bid not found."), { statusCode: 404 });
  const amount = Number(bid.amount),
    platformFee = +(amount * COMM).toFixed(2),
    sellerAmount = +(amount * (1 - COMM)).toFixed(2);
  const payment = await prisma.payment.create({
    data: {
      bidId,
      userId,
      totalAmount: amount,
      platformFee,
      sellerAmount,
      gateway: "sslcommerz",
      status: "pending",
    },
  });
  const url = SANDBOX
    ? "https://sandbox.sslcommerz.com/gwprocess/v4/api.php"
    : "https://securepay.sslcommerz.com/gwprocess/v4/api.php";
  const resp = await axios.post(
    url,
    new URLSearchParams({
      store_id: process.env.SSLCOMMERZ_STORE_ID!,
      store_passwd: process.env.SSLCOMMERZ_STORE_PASSWORD!,
      total_amount: amount.toString(),
      currency: "BDT",
      tran_id: payment.id,
      success_url: process.env.API_URL + "/api/v1/payments/webhook/ssl/success",
      fail_url: process.env.API_URL + "/api/v1/payments/webhook/ssl/fail",
      cancel_url: process.env.API_URL + "/api/v1/payments/webhook/ssl/cancel",
      cus_name: bid.bidder.name,
      cus_email: bid.bidder.email || "noemail@gmail.com",
      cus_phone: bid.bidder.phone || "01700000000",
      product_name: bid.auction.listing.title,
      product_category: "Auction",
      product_profile: "general",
      shipping_method: "NO",
      num_of_item: "1",
      cus_add1: "Bangladesh",
      cus_city: "Dhaka",
      cus_country: "Bangladesh",
    }),
  );
  if (resp.data.status !== "SUCCESS")
    throw new Error("Failed to initiate SSLCommerz payment.");
  return { paymentUrl: resp.data.GatewayPageURL, paymentId: payment.id };
}

export async function handleSSLCommerzWebhook(body: Record<string, string>) {
  const { tran_id, val_id, status } = body;
  if (!tran_id) throw new Error("Invalid webhook.");
  if (status !== "VALID" && status !== "VALIDATED") {
    await prisma.payment.update({
      where: { id: tran_id },
      data: { status: "failed" },
    });
    throw new Error("Payment failed.");
  }
  await prisma.payment.update({
    where: { id: tran_id },
    data: { status: "held", transactionId: val_id, paidAt: new Date() },
  });
  return { success: true };
}

export async function initiateBkashPayment(bidId: string, userId: string) {
  const bid = await prisma.bid.findUnique({
    where: { id: bidId },
    include: { auction: { include: { listing: { select: { title: true } } } } },
  });
  if (!bid)
    throw Object.assign(new Error("Bid not found."), { statusCode: 404 });
  const amount = Number(bid.amount),
    platformFee = +(amount * COMM).toFixed(2),
    sellerAmount = +(amount * (1 - COMM)).toFixed(2);
  const payment = await prisma.payment.create({
    data: {
      bidId,
      userId,
      totalAmount: amount,
      platformFee,
      sellerAmount,
      gateway: "bkash",
      status: "pending",
    },
  });
  const base = SANDBOX
    ? "https://tokenized.sandbox.bka.sh/v1.2.0-beta/tokenized/checkout"
    : "https://tokenized.pay.bka.sh/v1.2.0-beta/tokenized/checkout";
  const tokenResp = await axios.post(
    base + "/token/grant",
    {
      app_key: process.env.BKASH_APP_KEY,
      app_secret: process.env.BKASH_APP_SECRET,
    },
    {
      headers: {
        username: process.env.BKASH_USERNAME,
        password: process.env.BKASH_PASSWORD,
      },
    },
  );
  const token = tokenResp.data.id_token;
  const payResp = await axios.post(
    base + "/create",
    {
      mode: "0011",
      payerReference: userId,
      callbackURL: process.env.API_URL + "/api/v1/payments/webhook/bkash",
      amount: amount.toString(),
      currency: "BDT",
      intent: "sale",
      merchantInvoiceNumber: payment.id,
    },
    {
      headers: { Authorization: token, "X-App-Key": process.env.BKASH_APP_KEY },
    },
  );
  return { paymentUrl: payResp.data.bkashURL, paymentId: payment.id };
}

export async function handleBkashCallback(query: Record<string, string>) {
  if (query.status !== "success")
    throw Object.assign(new Error("bKash payment failed."), {
      statusCode: 400,
    });
  await prisma.payment.update({
    where: { id: query.merchantInvoiceNumber },
    data: {
      status: "held",
      transactionId: query.paymentID,
      paidAt: new Date(),
    },
  });
  return { success: true };
}

export async function confirmDelivery(auctionId: string, buyerId: string) {
  const auction = await prisma.auction.findUnique({
    where: { id: auctionId },
    include: { listing: { select: { sellerId: true } } },
  });
  if (!auction)
    throw Object.assign(new Error("Auction not found."), { statusCode: 404 });
  if (auction.status !== "ended")
    throw Object.assign(new Error("Auction not ended."), { statusCode: 400 });
  if (auction.winnerId !== buyerId)
    throw Object.assign(new Error("Only the winner can confirm."), {
      statusCode: 403,
    });
  const payment = await prisma.payment.findFirst({
    where: { bid: { auctionId }, status: "held" },
  });
  if (!payment)
    throw Object.assign(new Error("No held payment found."), {
      statusCode: 404,
    });
  await prisma.$transaction([
    prisma.payment.update({
      where: { id: payment.id },
      data: { status: "released", releasedAt: new Date() },
    }),
    prisma.user.update({
      where: { id: buyerId },
      data: { purchaseCount: { increment: 1 } },
    }),
  ]);
  logger.info({ paymentId: payment.id }, "Escrow released");
  return { released: true, sellerAmount: payment.sellerAmount };
}
