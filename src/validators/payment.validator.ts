import { z } from "zod";

// --- Payment & Delivery Schemas ---
export const initiatePaymentSchema = z.object({
  bidId: z.string().uuid(),
  gateway: z.enum(["sslcommerz", "bkash"]),
});

export const confirmDeliverySchema = z.object({
  auctionId: z.string().uuid(),
});

// --- Listing Schemas ---
// Age base schema define kora hoyeche jate .partial() kaj kore
export const createListingSchema = z.object({
  title: z.string().min(1).max(150),
  description: z.string().min(1).max(3000),
  category: z.enum([
    "electronics",
    "fashion",
    "home",
    "vehicle",
    "sports",
    "books",
    "other",
  ]),
  condition: z.enum(["NEW", "USED", "REFURBISHED"]).optional(),
  brand: z.string().optional(),
  photos: z.array(z.string().url()),
  videoUrl: z.string().url(),
  location: z.string().min(1),
  shippingCost: z.number().min(0),
});

// Ekhon .partial() dile ar error ashbe na
export const updateListingSchema = createListingSchema.partial();

// --- Types ---
export type InitiatePaymentInput = z.infer<typeof initiatePaymentSchema>;
export type ConfirmDeliveryInput = z.infer<typeof confirmDeliverySchema>;
export type CreateListingInput = z.infer<typeof createListingSchema>;
export type UpdateListingInput = z.infer<typeof updateListingSchema>;
