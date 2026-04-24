import { Router } from "express";
import { authenticate } from "../middleware/authenticate";
import { otpRateLimiter, authRateLimiter } from "../middleware/rateLimiter";
import * as ctrl from "../controllers/auth.controller";

export const authRoutes = Router();

authRoutes.post("/register", authRateLimiter, ctrl.register);
authRoutes.post("/send-otp", otpRateLimiter, ctrl.sendOTP);
authRoutes.post("/verify-otp", ctrl.verifyOTP);
authRoutes.post("/login", authRateLimiter, ctrl.login);
authRoutes.post("/forgot-password", otpRateLimiter, ctrl.forgotPassword);
authRoutes.post("/reset-password", ctrl.resetPassword);
authRoutes.post("/logout", authenticate, ctrl.logout);
authRoutes.get("/me", authenticate, ctrl.getMe);
