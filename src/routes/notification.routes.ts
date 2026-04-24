import { Router } from "express";
import { authenticate } from "../middleware/authenticate";
import * as ctrl from "../controllers/notification.controller";

export const notificationRoutes = Router();

notificationRoutes.get("/", authenticate, ctrl.getNotifications);
notificationRoutes.put("/read-all", authenticate, ctrl.markAllRead);
