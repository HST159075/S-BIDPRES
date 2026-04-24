import { z } from "zod";
export const addStrikeSchema = z.object({
  userId: z.string().uuid(),
  reason: z.enum(["non_payment", "fraudulent_bid", "admin_manual"]),
  description: z.string().max(500).optional(),
});
export const banUserSchema = z.object({
  userId: z.string().uuid(),
  reason: z.string().min(5).max(300),
});
export type AddStrikeInput = z.infer<typeof addStrikeSchema>;
export type BanUserInput = z.infer<typeof banUserSchema>;
