import { Router } from "express";
import { authenticate } from "../middleware/authenticate";
import { requireRole } from "../middleware/requireRole";
import * as ctrl from "../controllers/admin.controller";

export const adminRoutes = Router();

adminRoutes.use(authenticate, requireRole("admin"));
adminRoutes.get("/users", ctrl.getUsers);
adminRoutes.put("/users/:id/strike", ctrl.addStrike);
adminRoutes.put("/users/:id/ban", ctrl.banUser);
adminRoutes.put("/users/:id/unban", ctrl.unbanUser);
adminRoutes.get("/seller-applications", ctrl.getPendingApps);
adminRoutes.put("/seller-applications/:id/approve", ctrl.approveApp);
adminRoutes.put("/seller-applications/:id/reject", ctrl.rejectApp);
adminRoutes.get("/analytics", ctrl.getAnalytics);
