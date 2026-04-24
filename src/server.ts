import { createApp } from "./app";
import { logger } from "./lib/logger";
import { startAuctionJobs } from "./jobs/auction.job";
import { startNotificationJobs } from "./jobs/notification.job";

const PORT = Number(process.env.PORT) || 5000;
const HOST = "0.0.0.0";

async function start() {
  const { server } = await createApp();

  server.listen(PORT, HOST, () => {
    logger.info(`Server running on http://${HOST}:${PORT}`);
    startAuctionJobs();
    startNotificationJobs();
  });

  process.on("SIGTERM", () => {
    logger.info("SIGTERM received. Shutting down...");
    server.close(() => {
      logger.info("Server closed.");
      process.exit(0);
    });
  });

  process.on("uncaughtException", (err) => {
    logger.error({ err }, "Uncaught exception");
    process.exit(1);
  });

  process.on("unhandledRejection", (reason) => {
    logger.error({ reason }, "Unhandled rejection");
    process.exit(1);
  });
}

start();
