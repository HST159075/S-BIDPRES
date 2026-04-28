import bcrypt from "bcryptjs";
import twilio from "twilio";
import { prisma } from "../lib/prisma";
import { setOTP, getOTP, deleteOTP } from "../lib/redis";
import { sendEmailOTP } from "../lib/mailer";
import { generateOTP } from "../auth/session";
import type {
  RegisterInput,
  LoginInput,
  ResetPasswordInput,
} from "../validators/auth.validator";

const tw = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN,
);

export async function registerUser(input: RegisterInput) {
  const { name, email, phone, password } = input;
  if (email) {
    const e = await prisma.user.findUnique({ where: { email } });
    if (e)
      throw Object.assign(new Error("Email already registered."), {
        statusCode: 409,
      });
  }
  if (phone) {
    const p = await prisma.user.findUnique({ where: { phone } });
    if (p)
      throw Object.assign(new Error("Phone already registered."), {
        statusCode: 409,
      });
  }
  const hashed = await bcrypt.hash(password, 12);
  return prisma.user.create({
    data: { name, email, phone, password: hashed, role: "buyer" },
    select: { id: true, name: true, email: true, phone: true, role: true },
  });
}

export async function sendOTP(
  identifier: string,
  type: "email" | "phone",
  name = "User",
) {
  const code = generateOTP();
  const cleanIdentifier = identifier.toLowerCase().trim();
  const key = `${type}:${cleanIdentifier}`;

  await setOTP(key, code, 300);
  console.log(`--- OTP SENT --- Key: ${key} | Code: ${code}`);

  if (type === "email") {
    await sendEmailOTP(cleanIdentifier, code, name);
  } else {
    // ✅ Bangladesh number format fix
    let phoneNumber = cleanIdentifier;
    if (phoneNumber.startsWith("01")) {
      phoneNumber = "+88" + phoneNumber;
    } else if (phoneNumber.startsWith("8801")) {
      phoneNumber = "+" + phoneNumber;
    }
    
    console.log(`[Twilio] Sending to: ${phoneNumber}`);
    
    await tw.messages.create({
      body: `Your BidBD OTP: ${code}. Valid for 5 minutes.`,
      from: process.env.TWILIO_PHONE_NUMBER!,
      to: phoneNumber,
    });
  }
  return { sent: true };
}

export async function verifyOTP(
  identifier: string,
  code: string,
  type: "email" | "phone",
) {
  const cleanIdentifier = identifier.toLowerCase().trim();
  const key = `${type}:${cleanIdentifier}`;
  const saved = await getOTP(key);

  console.log(`--- VERIFY DEBUG ---`);
  console.log(`Looking for Key: ${key}`);
  console.log(`Saved in Redis: ${saved} (Type: ${typeof saved})`);
  console.log(`Input from User: ${code} (Type: ${typeof code})`);

  if (!saved)
    throw Object.assign(new Error("OTP expired. Request a new one."), {
      statusCode: 410,
    });

if (String(saved).trim() !== String(code).trim()) {
    throw Object.assign(new Error("Invalid OTP code."), { statusCode: 400 });
  }

  await prisma.user.updateMany({
    where: type === "email" ? { email: cleanIdentifier } : { phone: cleanIdentifier },
    data: type === "email" ? { emailVerified: true } : { phoneVerified: true },
  });
  await deleteOTP(key);
  return { verified: true };
}

export async function loginUser(input: LoginInput) {
  const user = await prisma.user.findFirst({
    where: { OR: [{ email: input.identifier }, { phone: input.identifier }] },
  });
  if (!user)
    throw Object.assign(new Error("Invalid credentials."), { statusCode: 401 });
  if (user.isBanned)
    throw Object.assign(new Error("Account banned."), { statusCode: 403 });
  if (!(await bcrypt.compare(input.password, user.password)))
    throw Object.assign(new Error("Invalid credentials."), { statusCode: 401 });
  if (!user.emailVerified && !user.phoneVerified)
    throw Object.assign(new Error("Please verify your email or phone first."), {
      statusCode: 403,
    });
  return user;
}

export async function resetPassword(input: ResetPasswordInput) {
  const identifier = input.email || input.phone!;
  const type: "email" | "phone" = input.email ? "email" : "phone";
  await verifyOTP(identifier, input.code, type);
  const hashed = await bcrypt.hash(input.newPassword, 12);
  await prisma.user.updateMany({
    where: type === "email" ? { email: identifier } : { phone: identifier },
    data: { password: hashed },
  });
  return { reset: true };
}

export const getUserById = (id: string) =>
  prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      name: true,
      email: true,
      phone: true,
      emailVerified: true,
      phoneVerified: true,
      role: true,
      avatar: true,
      purchaseCount: true,
      strikeCount: true,
      isBanned: true,
      createdAt: true,
    },
  });
export const updateProfile = (
  id: string,
  data: { name?: string; avatar?: string },
) =>
  prisma.user.update({
    where: { id },
    data,
    select: { id: true, name: true, avatar: true },
  });

// Y9K6ZFJEENFV7EXXWWFE73Q5
