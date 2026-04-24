import express, { Application } from "express";
import http from "http";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import compression from "compression";
import cookieParser from "cookie-parser";
import { rateLimit } from "express-rate-limit";
import { registerRoutes } from "./routes";
import { initSocket } from "./socket/socket.server";
import { errorHandler } from "./middleware/errorHandler";
import { notFound } from "./middleware/notFound";
import { logger } from "./lib/logger";

export async function createApp() {
  const app: Application = express();
  const server = http.createServer(app);

  app.use(helmet());
  app.use(
    cors({
      origin: [
        process.env.WEB_URL || "http://localhost:3000",
        process.env.MOBILE_URL || "exp://localhost:8081",
      ],
      credentials: true,
      methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
      allowedHeaders: ["Content-Type", "Authorization", "Cookie"],
    }),
  );
  app.use(cookieParser());
  app.use(
    rateLimit({
      windowMs: 60 * 1000,
      max: 100,
      message: { success: false, message: "Too many requests." },
      standardHeaders: true,
      legacyHeaders: false,
    }),
  );
  app.use(express.json({ limit: "10mb" }));
  app.use(express.urlencoded({ extended: true }));
  app.use(compression());
  if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

  app.get("/health", (_req, res) =>
    res.json({ status: "ok", timestamp: new Date() }),
  );

  registerRoutes(app);

  app.use(notFound);
  app.use(errorHandler);

  initSocket(server);
  logger.info("Express app created");
  return { app, server };
}
