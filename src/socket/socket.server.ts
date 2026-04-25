import { Server } from "socket.io";
import { Server as HTTPServer } from "http";
import {
  ServerToClientEvents,
  ClientToServerEvents,
  InterServerEvents,
  SocketData,
} from "../types/socket.d";
import { registerBidSocket } from "./bid.socket";
import { registerAuctionSocket } from "./auction.socket";
import { auth } from "../auth/auth.config";
import { logger } from "../lib/logger";

let io: Server<
  ClientToServerEvents,
  ServerToClientEvents,
  InterServerEvents,
  SocketData
>;

export function initSocket(httpServer: HTTPServer) {
 
  const allowedOrigins = [
    "https://bid-press.vercel.app",
    "http://localhost:3000",
    process.env.WEB_URL
  ].filter((o): o is string => Boolean(o));

  io = new Server(httpServer, {
    cors: {
      origin: (origin, callback) => {
       
        
        if (!origin || allowedOrigins.includes(origin) || origin.endsWith(".vercel.app")) {
          callback(null, true);
        } else {
          callback(new Error("CORS: Not allowed by Socket.io"));
        }
      },
      credentials: true,
      methods: ["GET", "POST"]
    },
   
    transports: ["websocket", "polling"], 
    allowEIO3: true,
    pingTimeout: 60000,
    pingInterval: 25000,
  });

  io.use(async (socket, next) => {
    try {
      // টোকেন এক্সট্রাকশন লজিক
      const token =
        socket.handshake.auth?.token ||
        socket.handshake.headers?.authorization?.replace("Bearer ", "");

      if (!token) {
        logger.warn({ socketId: socket.id }, "No token provided for socket");
        return next(new Error("Unauthorized"));
      }

      const session = await auth.api.getSession({
        headers: { authorization: "Bearer " + token },
      });

      if (!session?.user) return next(new Error("Unauthorized"));
      if (session.user.isBanned) return next(new Error("Account banned"));

      socket.data.userId = session.user.id;
      socket.data.role = session.user.role;
      next();
    } catch (err) {
      logger.error({ err }, "Socket authentication error");
      next(new Error("Auth error"));
    }
  });

  io.on("connection", (socket) => {
    const { userId } = socket.data;
    logger.info({ userId, socketId: socket.id, transport: socket.conn.transport.name }, "Socket connected");

    socket.join("user:" + userId);

    registerBidSocket(io, socket);
    registerAuctionSocket(io, socket);

    socket.on("disconnect", (reason) =>
      logger.info({ userId, socketId: socket.id, reason }, "Socket disconnected"),
    );

    socket.on("error", (err) =>
      logger.error({ userId, err: err.message }, "Socket error"),
    );
  });

  logger.info("Socket.io initialized with CORS and Security layers");
  return io;
}

export function getIO() {
  if (!io) throw new Error("Socket.io not initialized");
  return io;
}