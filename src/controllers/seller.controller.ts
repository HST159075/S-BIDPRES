import { Request, Response, NextFunction } from "express";
import * as sellerSvc from "../services/seller.service";
import { sendSuccess } from "../lib/response";
import {
  sellerApplySchema,
  rejectApplicationSchema,
} from "../validators/seller.validator";

export const apply = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const body = sellerApplySchema.parse(req.body);
    const result = await sellerSvc.applyForSeller(req.user!.id, body);
    sendSuccess(res, result, "Application submitted.", 201);
  } catch (err) {
    next(err);
  }
};
export const getStatus = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await sellerSvc.getApplicationStatus(req.user!.id);
    sendSuccess(res, result);
  } catch (err) {
    next(err);
  }
};
export const approve = async (
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
export const reject = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { reason } = rejectApplicationSchema.parse(req.body);
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
