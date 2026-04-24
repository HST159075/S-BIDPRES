import cron from "node-cron";
import { prisma } from "../lib/prisma";
import { sendPaymentReminderEmail, sendStrikeEmail } from "../lib/mailer";
import { logger } from "../lib/logger";
export function startNotificationJobs() {
  cron.schedule("0 * * * *", async () => {
    const now = new Date(),
      h24 = new Date(now.getTime() - 86400000),
      h48 = new Date(now.getTime() - 172800000);
    const bids24 = await prisma.bid.findMany({
      where: {
        status: "won",
        payment: { is: null },
        createdAt: { lte: h24, gt: h48 },
      },
      include: {
        bidder: { select: { email: true, name: true } },
        auction: { include: { listing: { select: { title: true } } } },
      },
    });
    for (const b of bids24)
      if (b.bidder.email)
        await sendPaymentReminderEmail(
          b.bidder.email,
          b.bidder.name,
          b.auction.listing.title,
          b.auctionId,
          24,
        );
    const bids48 = await prisma.bid.findMany({
      where: { status: "won", payment: { is: null }, createdAt: { lte: h48 } },
      include: {
        bidder: {
          select: { id: true, email: true, name: true, strikeCount: true },
        },
      },
    });
    for (const b of bids48) {
      const n = b.bidder.strikeCount + 1,
        ban = n >= 3;
      await prisma.$transaction([
        prisma.strike.create({
          data: {
            userId: b.bidderId,
            reason: "non_payment",
            addedById: b.bidderId,
          },
        }),
        prisma.user.update({
          where: { id: b.bidderId },
          data: {
            strikeCount: n,
            ...(ban ? { isBanned: true, bannedAt: new Date() } : {}),
          },
        }),
        prisma.bid.update({
          where: { id: b.id },
          data: { status: "refunded" },
        }),
      ]);
      if (b.bidder.email)
        await sendStrikeEmail(
          b.bidder.email,
          b.bidder.name,
          n,
          "Non-payment after winning auction",
        );
      logger.info({ bidderId: b.bidderId }, "Strike for non-payment");
    }
  });
  logger.info("Notification cron jobs started");
}
