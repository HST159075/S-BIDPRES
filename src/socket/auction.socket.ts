import { Server, Socket } from "socket.io";
import {
  ServerToClientEvents,
  ClientToServerEvents,
  InterServerEvents,
  SocketData,
} from "../types/socket.d";
import { logger } from "../lib/logger";
export function registerAuctionSocket(
  _io: Server<
    ClientToServerEvents,
    ServerToClientEvents,
    InterServerEvents,
    SocketData
  >,
  socket: Socket<
    ClientToServerEvents,
    ServerToClientEvents,
    InterServerEvents,
    SocketData
  >,
) {
  socket.on("join:auction", async ({ auctionId }) => {
    await socket.join("auction:" + auctionId);
    logger.info(
      { userId: socket.data.userId, auctionId },
      "Joined auction room",
    );
  });
  socket.on("leave:auction", async ({ auctionId }) => {
    await socket.leave("auction:" + auctionId);
    logger.info({ userId: socket.data.userId, auctionId }, "Left auction room");
  });
}
export const broadcastCountdown = (
  io: Server,
  auctionId: string,
  secondsLeft: number,
) => io.to("auction:" + auctionId).emit("auction:countdown", { secondsLeft });
