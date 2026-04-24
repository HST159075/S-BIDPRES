import { betterAuth }    from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma }        from "../lib/prisma";

export const auth = betterAuth({
  database: prismaAdapter(prisma, { provider: "postgresql" }),
  secret:   process.env.BETTER_AUTH_SECRET!,
  baseURL:  process.env.BETTER_AUTH_URL!,
  session:  { expiresIn: 60 * 60 * 24 * 7, updateAge: 60 * 60 * 24 },
  user: {
    additionalFields: {
      phone:         { type: "string",  required: false },
      phoneVerified: { type: "boolean", defaultValue: false },
      role:          { type: "string",  defaultValue: "buyer" },
      purchaseCount: { type: "number",  defaultValue: 0 },
      strikeCount:   { type: "number",  defaultValue: 0 },
      isBanned:      { type: "boolean", defaultValue: false },
      avatar:        { type: "string",  required: false },
    },
  },
  emailAndPassword: {
    enabled:                    true,
    requireEmailVerification:   false,
    minPasswordLength:          8,
  },
});

export type Auth = typeof auth;