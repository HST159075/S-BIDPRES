import { Request, Response, NextFunction } from "express";
import { rateLimit } from "express-rate-limit";
import { redis } from "../lib/redis";
import { sendError } from "../lib/response";

export const otpRateLimiter = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const b = req.body as { email?: string; phone?: string };
  const id = b?.email || b?.phone;
  if (!id) return next();
  const count = await redis.incr("ratelimit:otp:" + id);
  if (count === 1) await redis.expire("ratelimit:otp:" + id, 3600);
  if (count > 5)
    return sendError(res, "Too many OTP requests. Try again in 1 hour.", 429);
  next();
};

export const bidRateLimiter = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (!req.user) return next();
  const count = await redis.incr("ratelimit:bid:" + req.user.id);
  if (count === 1) await redis.expire("ratelimit:bid:" + req.user.id, 2);
  if (count > 3) return sendError(res, "Too many bids. Please wait.", 429);
  next();
};

export const authRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  message: { success: false, message: "Too many attempts." },
});
