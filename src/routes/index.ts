import { Application } from "express";
import { authRoutes } from "./auth.routes";
import { userRoutes } from "./user.routes";
import { sellerRoutes } from "./seller.routes";
import { listingRoutes } from "./listing.routes";
import { auctionRoutes } from "./auction.routes";
import { bidRoutes } from "./bid.routes";
import { paymentRoutes } from "./payment.routes";
import { uploadRoutes } from "./upload.routes";
import { adminRoutes } from "./admin.routes";
import { notificationRoutes } from "./notification.routes";

const API = "/api/v1";

export function registerRoutes(app: Application) {
  
  app.use(API + "/auth", authRoutes);
  app.use(API + "/users", userRoutes);
  app.use(API + "/seller", sellerRoutes);
  app.use(API + "/listings", listingRoutes);
  app.use(API + "/auctions", auctionRoutes);
  app.use(API + "/bids", bidRoutes);
  app.use(API + "/payments", paymentRoutes);
  app.use(API + "/upload", uploadRoutes);
  app.use(API + "/admin", adminRoutes);
  app.use(API + "/notifications", notificationRoutes);
}
