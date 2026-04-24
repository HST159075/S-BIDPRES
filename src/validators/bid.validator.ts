import { z } from "zod";
export const placeBidSchema = z.object({
  auctionId: z.string().uuid(),
  amount: z.number().min(1),
  gateway: z.enum(["sslcommerz", "bkash"]),
});
export const autoBidSchema = z.object({
  auctionId: z.string().uuid(),
  maxAmount: z.number().min(1),
  gateway: z.enum(["sslcommerz", "bkash"]),
});
export type PlaceBidInput = z.infer<typeof placeBidSchema>;
export type AutoBidInput = z.infer<typeof autoBidSchema>;
