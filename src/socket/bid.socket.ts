import { Server, Socket } from "socket.io";
import {
  ServerToClientEvents,
  ClientToServerEvents,
  InterServerEvents,
  SocketData,
} from "../types/socket.d";
import { placeBid, setAutoBidConfig } from "../services/bid.service";
import { logger } from "../lib/logger";
export function registerBidSocket(
  io: Server<
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
  const { userId } = socket.data;
  socket.on("place:bid", async (data) => {
    try {
      await placeBid(userId, {
        auctionId: data.auctionId,
        amount: data.amount,
        gateway: "sslcommerz",
      });
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Bid failed";
      logger.warn({ userId, data, err: msg }, "Socket bid error");
      socket.emit("bid:outbid", { newAmount: 0, auctionId: data.auctionId });
    }
  });
  socket.on("set:autobid", async (data) => {
    try {
      await setAutoBidConfig(userId, data.auctionId, data.maxAmount);
    } catch (err) {
      logger.warn(
        {
          userId,
          data,
          err: err instanceof Error ? err.message : "Auto-bid failed",
        },
        "Socket auto-bid error",
      );
    }
  });
}
