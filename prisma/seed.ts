import { PrismaClient } from "../generated/prisma";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  // Super Admin
  const adminPassword = await bcrypt.hash("Admin@1234", 12);
  const admin = await prisma.user.upsert({
    where:  { email: "hsttasin90@gmail.com" },
    update: {},
    create: {
      name:          "Super Admin",
      email:         "hsttasin90@gmail.com",
      password:      adminPassword,
      role:          "admin",
      emailVerified: true,
    },
  });
  console.log("Admin created:", admin.email);

  // Demo Buyer
  const buyerPassword = await bcrypt.hash("Buyer@1234", 12);
  const buyer = await prisma.user.upsert({
    where:  { email: "buyer@demo.com" },
    update: {},
    create: {
      name:          "Demo Buyer",
      email:         "buyer@demo.com",
      password:      buyerPassword,
      role:          "buyer",
      emailVerified: true,
      purchaseCount: 5,
    },
  });
  console.log("Buyer created:", buyer.email);

  // Demo Seller
  const sellerPassword = await bcrypt.hash("Seller@1234", 12);
  const seller = await prisma.user.upsert({
    where:  { email: "seller@demo.com" },
    update: {},
    create: {
      name:          "Demo Seller",
      email:         "seller@demo.com",
      password:      sellerPassword,
      role:          "seller",
      emailVerified: true,
      purchaseCount: 10,
    },
  });
  console.log("Seller created:", seller.email);

  // Demo Listing + Auction
  const existing = await prisma.listing.findFirst({ where: { sellerId: seller.id } });
  if (!existing) {
    const listing = await prisma.listing.create({
      data: {
        sellerId:     seller.id,
        status:       "active",
        title:        "iPhone 15 Pro Max - 256GB",
        description:  "Brand new iPhone 15 Pro Max in Natural Titanium. Sealed box with full warranty.",
        category:     "electronics",
        condition:    "new",
        brand:        "Apple",
        photos:       ["https://via.placeholder.com/800x600", "https://via.placeholder.com/800x600"],
        videoUrl:     "https://via.placeholder.com/video.mp4",
        location:     "Dhaka",
        shippingCost: 100,
        auction: {
          create: {
            startingPrice: 150000,
            bidIncrement:  1000,
            currentPrice:  150000,
            startTime:     new Date(),
            endTime:       new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
            status:        "live",
          },
        },
      },
    });
    console.log("Demo listing created:", listing.title);
  }

  console.log("Seeding complete!");
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });
