import { Router } from "express";
import { authenticate } from "../middleware/authenticate";
import { bidRateLimiter } from "../middleware/rateLimiter";
import * as ctrl from "../controllers/bid.controller";
export const bidRoutes = Router();
bidRoutes.post("/", authenticate, bidRateLimiter, ctrl.placeBid);
bidRoutes.post("/auto-bid", authenticate, ctrl.setAutoBid);
bidRoutes.delete("/auto-bid/:auctionId", authenticate, ctrl.cancelAutoBid);
bidRoutes.get("/my", authenticate, ctrl.getMyBids);
