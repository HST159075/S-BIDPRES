import { Router } from "express";
import { authenticate } from "../middleware/authenticate";
import * as ctrl from "../controllers/user.controller";
export const userRoutes = Router();
userRoutes.get("/profile", authenticate, ctrl.getProfile);
userRoutes.put("/profile", authenticate, ctrl.editProfile);
userRoutes.get("/purchases", authenticate, ctrl.getPurchases);
userRoutes.get("/bids", authenticate, ctrl.getMyBids);
