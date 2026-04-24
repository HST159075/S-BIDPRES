import { z } from "zod";

// 1. Define the raw shape
const listingShape = z.object({
  title: z.string().min(3).max(150),
  description: z.string().min(10).max(3000),
  category: z.enum([
    "electronics",
    "fashion",
    "home",
    "vehicle",
    "sports",
    "books",
    "other",
  ]),
  condition: z.enum(["new", "used", "refurbished"]),
  brand: z.string().max(100).optional(),
  location: z.string().min(2).max(100),
  shippingCost: z.number().min(0),
  startingPrice: z.number().min(1),
  bidIncrement: z.number().min(1),
  startTime: z.string().datetime(),
  endTime: z.string().datetime(),
  photos: z.array(z.string().url()).min(2).max(10),
  videoUrl: z.string().url().optional(),
});

// 2. Create the "Create" schema with refinements
export const createListingSchema = listingShape
  .refine((d) => new Date(d.endTime) > new Date(d.startTime), {
    message: "End time must be after start time",
    path: ["endTime"],
  })
  .refine(
    (d) =>
      new Date(d.endTime).getTime() - new Date(d.startTime).getTime() >=
      3600000,
    { message: "Auction must run at least 1 hour", path: ["endTime"] },
  );

// 3. Create the "Update" schema by calling .partial() on the shape, NOT the refined schema
export const updateListingSchema = listingShape.partial().refine(
  (d) => {
    // We only run the check if BOTH dates are present in the update payload
    if (d.startTime && d.endTime) {
      return new Date(d.endTime) > new Date(d.startTime);
    }
    return true;
  },
  { message: "End time must be after start time", path: ["endTime"] },
);

export type CreateListingInput = z.infer<typeof createListingSchema>;
export type UpdateListingInput = z.infer<typeof updateListingSchema>;
