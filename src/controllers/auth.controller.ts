import { Request, Response, NextFunction } from "express";
import * as authSvc from "../services/auth.service";
import { sendSuccess } from "../lib/response";
import {
  registerSchema,
  sendOTPSchema,
  verifyOTPSchema,
  loginSchema,
  resetPasswordSchema,
} from "../validators/auth.validator";
import { prisma } from "../lib/prisma";
import { auth } from "../auth/auth.config";
import crypto from "crypto";

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const body = registerSchema.parse(req.body);
    const user = await authSvc.registerUser(body);
    sendSuccess(
      res,
      { id: user.id },
      "Registered. Please verify your OTP.",
      201,
    );
  } catch (err) {
    next(err);
  }
};

export const sendOTP = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { email, phone, type } = sendOTPSchema.parse(req.body);
    await authSvc.sendOTP(type === "email" ? email! : phone!, type);
    sendSuccess(res, null, "OTP sent.");
  } catch (err) {
    next(err);
  }
};

export const verifyOTP = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { email, phone, code, type } = verifyOTPSchema.parse(req.body);
    const result = await authSvc.verifyOTP(
      type === "email" ? email! : phone!,
      code,
      type,
    );
    sendSuccess(res, result, "OTP verified.");
  } catch (err) {
    next(err);
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const body = loginSchema.parse(req.body);

    // 1. Validate credentials
    const user = await authSvc.loginUser(body);

    // 2. Create a session manually in DB
    const token = crypto.randomBytes(32).toString("hex");
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days

    await prisma.session.create({
      data: {
        token,
        userId: user.id,
        expiresAt,
        ipAddress: req.ip || "",
        userAgent: req.headers["user-agent"] || "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    // 3. Set cookie + return token in body (both work)
    res.cookie("better-auth.session_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
      path: "/",
    });

    sendSuccess(
      res,
      { id: user.id, role: user.role, token },
      "Login successful.",
    );
  } catch (err) {
    next(err);
  }
};

export const logout = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    // Delete session from DB
    const token =
      req.cookies?.["better-auth.session_token"] ||
      req.headers.authorization?.replace("Bearer ", "");

    if (token) {
      await prisma.session.deleteMany({ where: { token } }).catch(() => {});
    }

    res.clearCookie("better-auth.session_token");
    sendSuccess(res, null, "Logged out.");
  } catch (err) {
    next(err);
  }
};

export const forgotPassword = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { email, phone, type } = sendOTPSchema.parse(req.body);
    await authSvc.sendOTP(type === "email" ? email! : phone!, type);
    sendSuccess(res, null, "Reset OTP sent.");
  } catch (err) {
    next(err);
  }
};

export const resetPassword = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const body = resetPasswordSchema.parse(req.body);
    const result = await authSvc.resetPassword(body);
    sendSuccess(res, result, "Password reset.");
  } catch (err) {
    next(err);
  }
};

export const getMe = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const user = await authSvc.getUserById(req.user!.id);
    sendSuccess(res, user);
  } catch (err) {
    next(err);
  }
};
