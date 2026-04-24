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

  // Allow multiple origins
  const allowedOrigins = [
    process.env.WEB_URL || "http://localhost:3000",
    process.env.MOBILE_URL || "exp://localhost:8081",
    "http://localhost:3000",
    "https://localhost:3000",
  ].filter(Boolean);

  app.use(
    helmet({
      crossOriginResourcePolicy: { policy: "cross-origin" },
    }),
  );

  app.use(
    cors({
      origin: (origin, callback) => {
        // Allow requests with no origin (mobile apps, curl)
        if (!origin) return callback(null, true);
        if (allowedOrigins.includes(origin)) return callback(null, true);
        // Allow any vercel.app subdomain
        if (origin.endsWith(".vercel.app")) return callback(null, true);
        // Allow any onrender.com subdomain
        if (origin.endsWith(".onrender.com")) return callback(null, true);
        callback(new Error(`CORS: ${origin} not allowed`));
      },
      credentials: true,
      methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
      allowedHeaders: [
        "Content-Type",
        "Authorization",
        "Cookie",
        "X-Requested-With",
      ],
      exposedHeaders: ["Set-Cookie"],
    }),
  );

  app.use(cookieParser());
  app.use(
    rateLimit({
      windowMs: 60 * 1000,
      max: 200,
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
