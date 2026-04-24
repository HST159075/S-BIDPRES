import { Request, Response, NextFunction } from "express";
import * as adminSvc from "../services/admin.service";
import * as sellerSvc from "../services/seller.service";
import { sendSuccess, sendPaginated } from "../lib/response";
import { addStrikeSchema, banUserSchema } from "../validators/admin.validator";

// Helper — req.query value কে safely string এ convert করা
const qs = (val: unknown): string | undefined =>
  Array.isArray(val) ? val[0] : typeof val === "string" ? val : undefined;

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const page = Number(qs(req.query.page)) || 1;
    const limit = Number(qs(req.query.limit)) || 20;
    const search = qs(req.query.search);
    const result = await adminSvc.getAllUsers(page, limit, search);
    sendPaginated(res, result.data, result.total, result.page, result.limit);
  } catch (err) {
    next(err);
  }
};

export const addStrike = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const body = addStrikeSchema.parse({ ...req.body, userId: req.params.id });
    const result = await adminSvc.addStrike(req.user!.id, body);
    sendSuccess(res, result, "Strike added.");
  } catch (err) {
    next(err);
  }
};

export const banUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { reason } = banUserSchema.parse({
      ...req.body,
      userId: req.params.id,
    });
    const result = await adminSvc.banUser(req.params.id as string, reason);
    sendSuccess(res, result, "User banned.");
  } catch (err) {
    next(err);
  }
};

export const unbanUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await adminSvc.unbanUser(req.params.id as string);
    sendSuccess(res, result, "User unbanned.");
  } catch (err) {
    next(err);
  }
};

export const getPendingApps = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const page = Number(qs(req.query.page)) || 1;
    const limit = Number(qs(req.query.limit)) || 20;
    const result = await adminSvc.getPendingApplications(page, limit);
    sendPaginated(res, result.data, result.total, result.page, result.limit);
  } catch (err) {
    next(err);
  }
};

export const approveApp = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await sellerSvc.approveApplication(
      req.params.id as string,
      req.user!.id,
    );
    sendSuccess(res, result, "Application approved.");
  } catch (err) {
    next(err);
  }
};

export const rejectApp = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { reason } = req.body as { reason: string };
    const result = await sellerSvc.rejectApplication(
      req.params.id as string,
      req.user!.id,
      reason,
    );
    sendSuccess(res, result, "Application rejected.");
  } catch (err) {
    next(err);
  }
};

export const getAnalytics = async (
  _req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await adminSvc.getPlatformAnalytics();
    sendSuccess(res, result);
  } catch (err) {
    next(err);
  }
};
