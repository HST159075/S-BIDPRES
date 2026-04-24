import { Request, Response, NextFunction } from "express";
import * as notifSvc from "../services/notification.service";
import { sendSuccess, sendPaginated } from "../lib/response";

export const getNotifications = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const q = req.query as Record<string, string>;
    const result = await notifSvc.getUserNotifications(
      req.user!.id,
      Number(q.page) || 1,
      Number(q.limit) || 20,
    );
    sendPaginated(res, result.data, result.total, result.page, result.limit);
  } catch (err) {
    next(err);
  }
};
export const markAllRead = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await notifSvc.markAllRead(req.user!.id);
    sendSuccess(res, result, "All marked as read.");
  } catch (err) {
    next(err);
  }
};
