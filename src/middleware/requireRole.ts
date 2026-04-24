import { Request, Response, NextFunction } from "express";
import { UserRole, hasRole } from "../auth/roles";
import { sendError } from "../lib/response";
export const requireRole =
  (role: UserRole) => (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) return sendError(res, "Unauthorized.", 401);
    if (!hasRole(req.user.role as UserRole, role))
      return sendError(res, "Access denied. Requires: " + role, 403);
    next();
  };
export const requireSeller = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (!req.user) return sendError(res, "Unauthorized.", 401);
  if (req.user.role !== "seller" && req.user.role !== "admin")
    return sendError(res, "Seller account required.", 403);
  next();
};
