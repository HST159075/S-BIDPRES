import { prisma } from "../lib/prisma";
import {
  sendSellerApplicationEmail,
  sendSellerApprovedEmail,
  sendSellerRejectedEmail,
} from "../lib/mailer";
import type { SellerApplyInput } from "../validators/seller.validator";

const REQ = 5;

export async function applyForSeller(userId: string, input: SellerApplyInput) {
  const user = await prisma.user.findUnique({ where: { id: userId } });

  if (!user)
    throw Object.assign(new Error("User not found."), { statusCode: 404 });

  if (user.role === "seller")
    throw Object.assign(new Error("Already a seller."), { statusCode: 409 });

  if (user.purchaseCount < REQ) {
    throw Object.assign(
      new Error(`Need ${REQ} purchases. You have ${user.purchaseCount}.`),
      { statusCode: 403 },
    );
  }

  const ex = await prisma.sellerApplication.findUnique({ where: { userId } });

  if (ex?.status === "pending")
    throw Object.assign(new Error("Application under review."), {
      statusCode: 409,
    });

  if (ex?.status === "approved")
    throw Object.assign(new Error("Already have seller account."), {
      statusCode: 409,
    });

  const app = await prisma.sellerApplication.upsert({
    where: { userId },
    update: {
      status: "pending",
      ...input,
      rejectionReason: null,
      reviewedBy: null,
      reviewedAt: null,
    },
    create: { userId, ...input },
  });

  await sendSellerApplicationEmail({
    applicantName: user.name,
    applicantEmail: user.email ?? undefined,
    applicantPhone: user.phone ?? undefined,
    idCardUrl: input.idCardUrl,
    profilePhotoUrl: input.profilePhotoUrl,
    reviewLink: process.env.WEB_URL + "/admin/seller-applications/" + app.id,
  });

  return app;
}

export const getApplicationStatus = async (userId: string) => {
  const a = await prisma.sellerApplication.findUnique({ where: { userId } });
  if (!a)
    throw Object.assign(new Error("No application found."), {
      statusCode: 404,
    });
  return a;
};

export async function approveApplication(id: string, adminId: string) {
  const app = await prisma.sellerApplication.findUnique({
    where: { id },
    include: { user: true },
  });

  if (!app) throw Object.assign(new Error("Not found."), { statusCode: 404 });

  if (app.status !== "pending")
    throw Object.assign(new Error("Already reviewed."), { statusCode: 400 });

  await prisma.$transaction([
    prisma.sellerApplication.update({
      where: { id },
      data: { status: "approved", reviewedBy: adminId, reviewedAt: new Date() },
    }),
    prisma.user.update({ where: { id: app.userId }, data: { role: "seller" } }),
  ]);

  if (app.user.email)
    await sendSellerApprovedEmail(app.user.email, app.user.name);

  return { approved: true };
}

export async function rejectApplication(
  id: string,
  adminId: string,
  reason: string,
) {
  const app = await prisma.sellerApplication.findUnique({
    where: { id },
    include: { user: true },
  });

  if (!app) throw Object.assign(new Error("Not found."), { statusCode: 404 });

  if (app.status !== "pending")
    throw Object.assign(new Error("Already reviewed."), { statusCode: 400 });

  await prisma.sellerApplication.update({
    where: { id },
    data: {
      status: "rejected",
      reviewedBy: adminId,
      reviewedAt: new Date(),
      rejectionReason: reason,
    },
  });

  if (app.user.email)
    await sendSellerRejectedEmail(app.user.email, app.user.name, reason);

  return { rejected: true };
}
