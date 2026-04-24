import { z } from "zod";
export const sellerApplySchema      = z.object({ idCardUrl: z.string().url(), profilePhotoUrl: z.string().url() });
export const rejectApplicationSchema = z.object({ reason: z.string().min(10).max(500) });
export type SellerApplyInput       = z.infer<typeof sellerApplySchema>;
export type RejectApplicationInput = z.infer<typeof rejectApplicationSchema>;
