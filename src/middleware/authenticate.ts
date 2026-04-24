import { Request, Response, NextFunction } from "express";
import { prisma } from "../lib/prisma";
import { sendError } from "../lib/response";

export const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    // 1. Cookie থেকে token নিন
    const cookieToken = req.cookies?.["better-auth.session_token"];

    // 2. Authorization header থেকে token নিন
    const bearerToken = req.headers.authorization?.startsWith("Bearer ")
      ? req.headers.authorization.slice(7)
      : null;

    const token = cookieToken || bearerToken;
    if (!token) return sendError(res, "Unauthorized. Please login.", 401);

    // 3. DB তে session খুঁজুন
    const session = await prisma.session.findUnique({ where: { token } });
    if (!session)
      return sendError(res, "Session expired. Please login again.", 401);
    if (new Date(session.expiresAt) < new Date()) {
      await prisma.session.delete({ where: { token } }).catch(() => {});
      return sendError(res, "Session expired. Please login again.", 401);
    }

    // 4. User লোড করুন
    const user = await prisma.user.findUnique({
      where: { id: session.userId },
    });
    if (!user) return sendError(res, "User not found.", 401);
    if (user.isBanned)
      return sendError(res, "Your account has been banned.", 403);

    req.user = user;
    next();
  } catch {
    return sendError(res, "Unauthorized. Please login.", 401);
  }
};
