import { Router } from "express";
import * as ctrl from "../controllers/auction.controller";

export const auctionRoutes = Router();

auctionRoutes.get("/", ctrl.getAllAuctions);
auctionRoutes.get("/:id", ctrl.getOneAuction);
auctionRoutes.get("/:id/bids", ctrl.getAuctionBids);
