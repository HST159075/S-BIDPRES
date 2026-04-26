import { Request, Response, NextFunction } from "express";
import * as bidSvc from "../services/bid.service";
import { sendSuccess, sendPaginated } from "../lib/response";
import { placeBidSchema, autoBidSchema } from "../validators/bid.validator";

const qs = (val: unknown): string | undefined =>
  Array.isArray(val) ? val[0] : typeof val === "string" ? val : undefined;

export const placeBid = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const body = placeBidSchema.parse(req.body);
    const result = await bidSvc.placeBid(req.user!.id, body);
    sendSuccess(res, result, "Bid placed.", 201);
  } catch (err) {
    next(err);
  }
};

export const setAutoBid = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { auctionId, maxAmount } = autoBidSchema.parse(req.body);
    const result = await bidSvc.setAutoBidConfig(
      req.user!.id,
      auctionId,
      maxAmount,
    );
    sendSuccess(res, result, "Auto-bid configured.");
  } catch (err) {
    next(err);
  }
};

export const cancelAutoBid = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await bidSvc.cancelAutoBid(
      req.user!.id,
      req.params.auctionId as string,
    );
    sendSuccess(res, result, "Auto-bid cancelled.");
  } catch (err) {
    next(err);
  }
};

export const getMyBids = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const page = Number(qs(req.query.page)) || 1;
    const limit = Number(qs(req.query.limit)) || 20;
    // ✅ getAuctionBids → getUserBids
    const result = await bidSvc.getUserBids(req.user!.id, page, limit);
    sendPaginated(res, result.data, result.total, result.page, result.limit);
  } catch (err) {
    next(err);
  }
};
