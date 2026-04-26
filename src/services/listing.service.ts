import { prisma } from "../lib/prisma";
import type {
  CreateListingInput,
  UpdateListingInput,
} from "../validators/listing.validator";
export async function createListing(
  sellerId: string,
  input: CreateListingInput,
) {
  const {
    startingPrice,
    bidIncrement,
    startTime,
    endTime,
    videoUrl = "",
    ...rest
  } = input;
  return prisma.listing.create({
    data: {
      sellerId,
      ...rest,
      videoUrl,
      status: "active",
      auction: {
        create: {
          startingPrice,
          bidIncrement,
          currentPrice: startingPrice,
          startTime: new Date(startTime),
          endTime: new Date(endTime),
          status: new Date(startTime) <= new Date() ? "live" : "scheduled",
        },
      },
    },
    include: { auction: true },
  });
}
export async function getListings(q: {
  page?: number;
  limit?: number;
  category?: string;
  condition?: string;
  minPrice?: number;
  maxPrice?: number;
  search?: string;
  location?: string;
}) {
  const page = q.page || 1,
    limit = q.limit || 20,
    skip = (page - 1) * limit;
  const where: Record<string, unknown> = {
    status: "active",
    auction: { status: { in: ["scheduled", "live"] } },
  };
  if (q.category) where.category = q.category;
  if (q.condition) where.condition = q.condition;
  if (q.location)
    where.location = { contains: q.location, mode: "insensitive" };
  if (q.search) where.title = { contains: q.search, mode: "insensitive" };
  const [data, total] = await prisma.$transaction([
    prisma.listing.findMany({
      where,
      skip,
      take: limit,
      orderBy: { createdAt: "desc" },
      include: {
        auction: {
          select: { currentPrice: true, endTime: true, status: true },
        },
        seller: { select: { name: true, avatar: true } },
      },
    }),
    prisma.listing.count({ where }),
  ]);
  return { data, total, page, limit };
}
export async function getListingById(id: string) {
  const l = await prisma.listing.findUnique({
    where: { id },
    include: {
      auction: {
        include: {
          bids: {
            orderBy: { createdAt: "desc" },
            take: 10,
            include: { bidder: { select: { name: true, avatar: true } } },
          },
        },
      },
      seller: { select: { name: true, avatar: true, createdAt: true } },
    },
  });
  if (!l)
    throw Object.assign(new Error("Listing not found."), { statusCode: 404 });
  return l;
}

export async function updateListing(
  id: string,
  sellerId: string,
  input: UpdateListingInput,
  isAdmin = false,
) {
  const l = await prisma.listing.findUnique({ where: { id } });
  if (!l)
    throw Object.assign(new Error("Listing not found."), { statusCode: 404 });
  if (!isAdmin && l.sellerId !== sellerId)
    throw Object.assign(new Error("Not your listing."), { statusCode: 403 });
  if (l.status === "ended")
    throw Object.assign(new Error("Cannot update ended listing."), {
      statusCode: 400,
    });

  const { startingPrice, bidIncrement, startTime, endTime, ...listingData } = input;

  // Listing update
  const updated = await prisma.listing.update({
    where: { id },
    data: listingData,
  });

  // Auction update আলাদাভাবে
  if (startingPrice !== undefined || bidIncrement !== undefined || startTime || endTime) {
    await prisma.auction.updateMany({
      where: { listingId: id },
      data: {
        ...(startingPrice !== undefined && { startingPrice, currentPrice: startingPrice }),
        ...(bidIncrement !== undefined && { bidIncrement }),
        ...(startTime && { startTime: new Date(startTime) }),
        ...(endTime && { endTime: new Date(endTime) }),
      },
    });
  }

  return updated;
}

export async function deleteListing(
  id: string,
  sellerId: string,
  isAdmin = false,
) {
  const l = await prisma.listing.findUnique({
    where: { id },
    include: { auction: true },
  });
  if (!l)
    throw Object.assign(new Error("Listing not found."), { statusCode: 404 });
  if (!isAdmin && l.sellerId !== sellerId)
    throw Object.assign(new Error("Not your listing."), { statusCode: 403 });
  if (l.auction?.status === "live")
    throw Object.assign(new Error("Cannot delete live auction."), {
      statusCode: 400,
    });
  await prisma.listing.delete({ where: { id } });
  return { deleted: true };
}
export async function getSellerListings(
  sellerId: string,
  page = 1,
  limit = 20,
) {
  const skip = (page - 1) * limit;
  const [data, total] = await prisma.$transaction([
    prisma.listing.findMany({
      where: { sellerId },
      skip,
      take: limit,
      orderBy: { createdAt: "desc" },
      include: { auction: true },
    }),
    prisma.listing.count({ where: { sellerId } }),
  ]);
  return { data, total, page, limit };
}
