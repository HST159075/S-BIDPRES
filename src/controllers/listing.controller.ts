import { Request, Response, NextFunction } from "express";
import * as listingSvc from "../services/listing.service";
import { sendSuccess, sendPaginated } from "../lib/response";
import {
  createListingSchema,
  
} from "../validators/listing.validator";

const qs = (val: unknown): string => {
  if (typeof val === "string") return val;
  if (Array.isArray(val) && typeof val[0] === "string") return val[0];
  return ""; // Return empty string instead of undefined
};
const qn = (val: unknown): number | undefined => {
  const s = qs(val);
  return s ? Number(s) : undefined;
};

export const getAllListings = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await listingSvc.getListings({
      page: qn(req.query.page) || 1,
      limit: qn(req.query.limit) || 20,
      category: qs(req.query.category),
      condition: qs(req.query.condition),
      minPrice: qn(req.query.minPrice),
      maxPrice: qn(req.query.maxPrice),
      search: qs(req.query.search),
      location: qs(req.query.location),
    });
    sendPaginated(res, result.data, result.total, result.page, result.limit);
  } catch (err) {
    next(err);
  }
};

export const getOneListing = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const listing = await listingSvc.getListingById(req.params.id as string);
    sendSuccess(res, listing);
  } catch (err) {
    next(err);
  }
};

export const createListing = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const body = createListingSchema.parse(req.body);
    const listing = await listingSvc.createListing(req.user!.id, body);
    sendSuccess(res, listing, "Listing created.", 201);
  } catch (err) {
    next(err);
  }
};

export const updateListing = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    // updateListingSchema বাদ — সরাসরি req.body নিন
    // কারণ schema-তে auction fields নেই
    const listing = await listingSvc.updateListing(
      req.params.id as string,
      req.user!.id,
      req.body,
    );
    sendSuccess(res, listing, "Listing updated.");
  } catch (err) {
    next(err);
  }
};
export const deleteListing = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await listingSvc.deleteListing(
      req.params.id as string,
      req.user!.id,
    );
    sendSuccess(res, result, "Listing deleted.");
  } catch (err) {
    next(err);
  }
};

export const getMyListings = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const page = qn(req.query.page) || 1;
    const limit = qn(req.query.limit) || 20;
    const result = await listingSvc.getSellerListings(
      req.user!.id,
      page,
      limit,
    );
    sendPaginated(res, result.data, result.total, result.page, result.limit);
  } catch (err) {
    next(err);
  }
};
