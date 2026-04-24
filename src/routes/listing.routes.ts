import { Router } from "express";
import { authenticate } from "../middleware/authenticate";
import { requireSeller } from "../middleware/requireRole";
import * as ctrl from "../controllers/listing.controller";
export const listingRoutes = Router();
listingRoutes.get("/", ctrl.getAllListings);
listingRoutes.get(
  "/seller/mine",
  authenticate,
  requireSeller,
  ctrl.getMyListings,
);
listingRoutes.get("/:id", ctrl.getOneListing);
listingRoutes.post("/", authenticate, requireSeller, ctrl.createListing);
listingRoutes.put("/:id", authenticate, requireSeller, ctrl.updateListing);
listingRoutes.delete("/:id", authenticate, requireSeller, ctrl.deleteListing);
