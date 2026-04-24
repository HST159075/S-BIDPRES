import { z } from "zod";
const bdPhone = z
  .string()
  .regex(/^(?:\+88|88)?01[3-9]\d{8}$/, "Invalid BD phone number");
const strongPassword = z
  .string()
  .min(8)
  .regex(/[A-Z]/, "Must contain uppercase")
  .regex(/[0-9]/, "Must contain a number");
export const registerSchema = z
  .object({
    name: z.string().min(2).max(50),
    email: z.string().email().optional(),
    phone: bdPhone.optional(),
    password: strongPassword,
  })
  .refine((d) => d.email || d.phone, { message: "Email or phone is required" });
export const sendOTPSchema = z.object({
  email: z.string().email().optional(),
  phone: bdPhone.optional(),
  type: z.enum(["email", "phone"]),
});
export const verifyOTPSchema = z.object({
  email: z.string().email().optional(),
  phone: bdPhone.optional(),
  code: z.string().length(6),
  type: z.enum(["email", "phone"]),
});
export const loginSchema = z.object({
  identifier: z.string(),
  password: z.string(),
});
export const resetPasswordSchema = z.object({
  email: z.string().email().optional(),
  phone: bdPhone.optional(),
  code: z.string().length(6),
  newPassword: strongPassword,
});
export type RegisterInput = z.infer<typeof registerSchema>;
export type SendOTPInput = z.infer<typeof sendOTPSchema>;
export type VerifyOTPInput = z.infer<typeof verifyOTPSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
export type ResetPasswordInput = z.infer<typeof resetPasswordSchema>;
