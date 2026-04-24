import cron from "node-cron";
import { prisma } from "../lib/prisma";
import { endAuction } from "../services/bid.service";
import { getIO } from "../socket/socket.server";
import { broadcastCountdown } from "../socket/auction.socket";
import { logger } from "../lib/logger";
export function startAuctionJobs() {
  cron.schedule("* * * * *", async () => {
    const now = new Date();
    const toStart = await prisma.auction.findMany({
      where: { status: "scheduled", startTime: { lte: now } },
      select: { id: true },
    });
    for (const a of toStart) {
      await prisma.auction.update({
        where: { id: a.id },
        data: { status: "live" },
      });
      getIO()
        .to("auction:" + a.id)
        .emit("auction:live", { auctionId: a.id });
      logger.info({ auctionId: a.id }, "Auction started");
    }
    const toEnd = await prisma.auction.findMany({
      where: { status: "live", endTime: { lte: now } },
      select: { id: true },
    });
    for (const a of toEnd) {
      try {
        await endAuction(a.id);
        logger.info({ auctionId: a.id }, "Auction ended");
      } catch (err) {
        logger.error({ auctionId: a.id, err }, "Failed to end auction");
      }
    }
  });
  cron.schedule("*/10 * * * * *", async () => {
    const soon = new Date(Date.now() + 60000);
    const auctions = await prisma.auction.findMany({
      where: { status: "live", endTime: { lte: soon } },
      select: { id: true, endTime: true },
    });
    const io = getIO();
    for (const a of auctions)
      broadcastCountdown(
        io,
        a.id,
        Math.max(0, Math.floor((a.endTime.getTime() - Date.now()) / 1000)),
      );
  });
  logger.info("Auction cron jobs started");
}
