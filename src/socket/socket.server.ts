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
  io = new Server(httpServer, {
    cors: {
      origin: [process.env.WEB_URL || "http://localhost:3000"],
      credentials: true,
    },
    pingTimeout: 60000,
    pingInterval: 25000,
  });
  io.use(async (socket, next) => {
    try {
      const token =
        socket.handshake.auth?.token ||
        socket.handshake.headers?.authorization?.replace("Bearer ", "");
      if (!token) return next(new Error("Unauthorized"));
      const session = await auth.api.getSession({
        headers: { authorization: "Bearer " + token },
      });
      if (!session?.user) return next(new Error("Unauthorized"));
      if (session.user.isBanned) return next(new Error("Account banned"));
      socket.data.userId = session.user.id;
      socket.data.role = session.user.role;
      next();
    } catch {
      next(new Error("Auth error"));
    }
  });
  io.on("connection", (socket) => {
    const { userId } = socket.data;
    logger.info({ userId, socketId: socket.id }, "Socket connected");
    socket.join("user:" + userId);
    registerBidSocket(io, socket);
    registerAuctionSocket(io, socket);
    socket.on("disconnect", () =>
      logger.info({ userId, socketId: socket.id }, "Socket disconnected"),
    );
    socket.on("error", (err) =>
      logger.error({ userId, err: err.message }, "Socket error"),
    );
  });
  logger.info("Socket.io initialized");
  return io;
}
export function getIO() {
  if (!io) throw new Error("Socket.io not initialized");
  return io;
}
