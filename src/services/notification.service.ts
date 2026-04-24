import { NotificationType } from "../../generated/prisma";
import { prisma } from "../lib/prisma";
export const createNotification = (d: {
  userId: string;
  type: NotificationType;
  title: string;
  message: string;
  extra?: Record<string, unknown>;
}) =>
  prisma.notification.create({
    data: {
      userId: d.userId,
      type: d.type,
      title: d.title,
      message: d.message,
      data: d.extra as any,
    },
  });
export async function getUserNotifications(
  userId: string,
  page = 1,
  limit = 20,
) {
  const skip = (page - 1) * limit;
  const [data, total, unread] = await prisma.$transaction([
    prisma.notification.findMany({
      where: { userId },
      skip,
      take: limit,
      orderBy: { createdAt: "desc" },
    }),
    prisma.notification.count({ where: { userId } }),
    prisma.notification.count({ where: { userId, isRead: false } }),
  ]);
  return { data, total, unread, page, limit };
}
export const markAllRead = async (userId: string) => {
  await prisma.notification.updateMany({
    where: { userId, isRead: false },
    data: { isRead: true },
  });
  return { done: true };
};
