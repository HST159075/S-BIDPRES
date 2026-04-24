import { Request, Response, NextFunction } from "express";
import { prisma } from "../lib/prisma";
import { sendSuccess, sendPaginated } from "../lib/response";
import { string } from "better-auth";

const qs = (val: unknown): string | undefined =>
  Array.isArray(val) ? val[0] : typeof val === "string" ? val : undefined;

export const getAllAuctions = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const page = Number(qs(req.query.page)) || 1;
    const limit = Number(qs(req.query.limit)) || 20;
    const skip = (page - 1) * limit;

    const [data, total] = await prisma.$transaction([
      prisma.auction.findMany({
        where: { status: { in: ["live", "scheduled"] } },
        skip,
        take: limit,
        orderBy: { endTime: "asc" },
        include: {
          listing: {
            select: {
              id: true,
              title: true,
              photos: true,
              location: true,
              category: true,
              seller: { select: { name: true, avatar: true } },
            },
          },
        },
      }),
      prisma.auction.count({
        where: { status: { in: ["live", "scheduled"] } },
      }),
    ]);

    sendPaginated(res, data, total, page, limit);
  } catch (err) {
    next(err);
  }
};

export const getOneAuction = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const auction = await prisma.auction.findUnique({
      where: { id: req.params.id as string},
      include: {
        listing: {
          include: {
            seller: { select: { name: true, avatar: true, createdAt: true } },
          },
        },
        bids: {
          orderBy: { createdAt: "desc" },
          take: 5,
          include: { bidder: { select: { name: true, avatar: true } } },
        },
      },
    });

    if (!auction)
      return res
        .status(404)
        .json({ success: false, message: "Auction not found." });
    sendSuccess(res, auction);
  } catch (err) {
    next(err);
  }
};

export const getAuctionBids = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const page = Number(qs(req.query.page)) || 1;
    const limit = Number(qs(req.query.limit)) || 20;
    const skip = (page - 1) * limit;
    const auctionId = req.params.id as string;

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

    sendPaginated(res, data, total, page, limit);
  } catch (err) {
    next(err);
  }
};
