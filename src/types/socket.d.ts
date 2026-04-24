export interface ServerToClientEvents {
  "bid:new": (data: { bidderId: string; amount: number; time: string }) => void;
  "bid:outbid": (data: { newAmount: number; auctionId: string }) => void;
  "auction:ended": (data: {
    winnerId: string | null;
    finalPrice: number;
  }) => void;
  "auction:countdown": (data: { secondsLeft: number }) => void;
  "auction:live": (data: { auctionId: string }) => void;
}
export interface ClientToServerEvents {
  "join:auction": (data: { auctionId: string }) => void;
  "leave:auction": (data: { auctionId: string }) => void;
  "place:bid": (data: { auctionId: string; amount: number }) => void;
  "set:autobid": (data: { auctionId: string; maxAmount: number }) => void;
}
export interface InterServerEvents {
  ping: () => void;
}
export interface SocketData {
  userId: string;
  role: string;
}
