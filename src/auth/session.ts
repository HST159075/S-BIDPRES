import { Request } from "express";
import { auth } from "./auth.config";
export const getCurrentUser = (req: Request) =>
  auth.api
    .getSession({ headers: req.headers as Record<string, string> })
    .then((s) => s?.user ?? null);
export const generateOTP = () =>
  Math.floor(100000 + Math.random() * 900000).toString();
export const isValidEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
export const isValidBDPhone = (v: string) =>
  /^(?:\+88|88)?01[3-9]\d{8}$/.test(v);
