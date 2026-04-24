import { Router } from "express";
import { authenticate } from "../middleware/authenticate";
import { requireRole } from "../middleware/requireRole";
import * as ctrl from "../controllers/seller.controller";
export const sellerRoutes = Router();
sellerRoutes.post("/apply", authenticate, ctrl.apply);
sellerRoutes.get("/application-status", authenticate, ctrl.getStatus);
sellerRoutes.put(
  "/applications/:id/approve",
  authenticate,
  requireRole("admin"),
  ctrl.approve,
);
sellerRoutes.put(
  "/applications/:id/reject",
  authenticate,
  requireRole("admin"),
  ctrl.reject,
);
