import { Request, Response, NextFunction } from "express";
import { prisma } from "../lib/prisma";
import { updateProfile } from "../services/auth.service";
import { sendSuccess, sendPaginated } from "../lib/response";

export const getProfile = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user!.id },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        role: true,
        avatar: true,
        purchaseCount: true,
        strikeCount: true,
        createdAt: true,
      },
    });
    sendSuccess(res, user);
  } catch (err) {
    next(err);
  }
};
export const editProfile = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { name, avatar } = req.body as { name?: string; avatar?: string };
    const result = await updateProfile(req.user!.id, { name, avatar });
    sendSuccess(res, result, "Profile updated.");
  } catch (err) {
    next(err);
  }
};
export const getPurchases = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const q = req.query as Record<string, string>,
      page = Number(q.page) || 1,
      limit = Number(q.limit) || 20,
      skip = (page - 1) * limit;
    const [data, total] = await prisma.$transaction([
      prisma.payment.findMany({
        where: { userId: req.user!.id, status: "released" },
        skip,
        take: limit,
        orderBy: { createdAt: "desc" },
        include: {
          bid: {
            include: {
              auction: {
                include: { listing: { select: { title: true, photos: true } } },
              },
            },
          },
        },
      }),
      prisma.payment.count({
        where: { userId: req.user!.id, status: "released" },
      }),
    ]);
    sendPaginated(res, data, total, page, limit);
  } catch (err) {
    next(err);
  }
};
export const getMyBids = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const q = req.query as Record<string, string>,
      page = Number(q.page) || 1,
      limit = Number(q.limit) || 20,
      skip = (page - 1) * limit;
    const [data, total] = await prisma.$transaction([
      prisma.bid.findMany({
  where: { bidderId: req.user!.id },
  skip,
  take: limit,
  orderBy: { createdAt: "desc" },
  include: {
    auction: {
      include: { listing: { select: { title: true, photos: true } } },
    },
    payment: { select: { status: true } }, // ✅ payment status include
  },
}),
      prisma.bid.count({ where: { bidderId: req.user!.id } }),
    ]);
    sendPaginated(res, data, total, page, limit);
  } catch (err) {
    next(err);
  }
};
