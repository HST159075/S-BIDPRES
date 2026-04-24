import { prisma } from "../lib/prisma";
import { sendStrikeEmail } from "../lib/mailer";
import type { AddStrikeInput } from "../validators/admin.validator";
const MAX = 3;
export async function getAllUsers(page = 1, limit = 20, search?: string) {
  const skip = (page - 1) * limit,
    where = search
      ? {
          OR: [
            { name: { contains: search, mode: "insensitive" as const } },
            { email: { contains: search, mode: "insensitive" as const } },
          ],
        }
      : {};
  const [data, total] = await prisma.$transaction([
    prisma.user.findMany({
      where,
      skip,
      take: limit,
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        role: true,
        strikeCount: true,
        isBanned: true,
        purchaseCount: true,
        createdAt: true,
      },
    }),
    prisma.user.count({ where }),
  ]);
  return { data, total, page, limit };
}
export async function addStrike(adminId: string, input: AddStrikeInput) {
  const user = await prisma.user.findUnique({ where: { id: input.userId } });
  if (!user)
    throw Object.assign(new Error("User not found."), { statusCode: 404 });
  if (user.isBanned)
    throw Object.assign(new Error("User already banned."), { statusCode: 400 });
  const n = user.strikeCount + 1,
    ban = n >= MAX;
  await prisma.$transaction([
    prisma.strike.create({
      data: {
        userId: input.userId,
        reason: input.reason,
        description: input.description,
        addedById: adminId,
      },
    }),
    prisma.user.update({
      where: { id: input.userId },
      data: {
        strikeCount: n,
        ...(ban
          ? { isBanned: true, bannedAt: new Date(), bannedReason: "3 strikes" }
          : {}),
      },
    }),
  ]);
  if (user.email)
    await sendStrikeEmail(
      user.email,
      user.name,
      n,
      input.description || input.reason,
    );
  return { strikeCount: n, banned: ban };
}
export const banUser = async (userId: string, reason: string) => {
  const u = await prisma.user.findUnique({ where: { id: userId } });
  if (!u) throw Object.assign(new Error("Not found."), { statusCode: 404 });
  if (u.isBanned)
    throw Object.assign(new Error("Already banned."), { statusCode: 400 });
  await prisma.user.update({
    where: { id: userId },
    data: { isBanned: true, bannedAt: new Date(), bannedReason: reason },
  });
  return { banned: true };
};
export const unbanUser = async (userId: string) => {
  await prisma.user.update({
    where: { id: userId },
    data: { isBanned: false, bannedAt: null, bannedReason: null },
  });
  return { unbanned: true };
};
export async function getPendingApplications(page = 1, limit = 20) {
  const skip = (page - 1) * limit;
  const [data, total] = await prisma.$transaction([
    prisma.sellerApplication.findMany({
      where: { status: "pending" },
      skip,
      take: limit,
      orderBy: { createdAt: "asc" },
      include: {
        user: {
          select: { name: true, email: true, phone: true, purchaseCount: true },
        },
      },
    }),
    prisma.sellerApplication.count({ where: { status: "pending" } }),
  ]);
  return { data, total, page, limit };
}
export async function getPlatformAnalytics() {
  const [u, s, l, a, rev, p] = await prisma.$transaction([
    prisma.user.count(),
    prisma.user.count({ where: { role: "seller" } }),
    prisma.listing.count(),
    prisma.auction.count({ where: { status: "live" } }),
    prisma.payment.aggregate({
      where: { status: "released" },
      _sum: { platformFee: true },
    }),
    prisma.sellerApplication.count({ where: { status: "pending" } }),
  ]);
  return {
    totalUsers: u,
    totalSellers: s,
    totalListings: l,
    activeAuctions: a,
    totalRevenue: rev._sum.platformFee ?? 0,
    pendingApps: p,
  };
}
