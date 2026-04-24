import { Request, Response, NextFunction } from "express";
import * as paymentSvc from "../services/payment.service";
import { prisma } from "../lib/prisma";
import { sendSuccess } from "../lib/response";
import {
  initiatePaymentSchema,
  confirmDeliverySchema,
} from "../validators/payment.validator";

export const initiatePayment = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { bidId, gateway } = initiatePaymentSchema.parse(req.body);
    const result =
      gateway === "sslcommerz"
        ? await paymentSvc.initiateSSLCommerzPayment(bidId, req.user!.id)
        : await paymentSvc.initiateBkashPayment(bidId, req.user!.id);
    sendSuccess(res, result, "Payment initiated.");
  } catch (err) {
    next(err);
  }
};
export const sslSuccess = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    await paymentSvc.handleSSLCommerzWebhook(
      req.body as Record<string, string>,
    );
    res.redirect(process.env.WEB_URL + "/payment/success");
  } catch (err) {
    next(err);
  }
};
export const sslFail = (_req: Request, res: Response) =>
  res.redirect(process.env.WEB_URL + "/payment/failed");
export const bkashCallback = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    await paymentSvc.handleBkashCallback(req.query as Record<string, string>);
    res.redirect(process.env.WEB_URL + "/payment/success");
  } catch (err) {
    next(err);
  }
};
export const confirmDelivery = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { auctionId } = confirmDeliverySchema.parse(req.body);
    const result = await paymentSvc.confirmDelivery(auctionId, req.user!.id);
    sendSuccess(res, result, "Delivery confirmed. Payment released.");
  } catch (err) {
    next(err);
  }
};
export const getPaymentHistory = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const payments = await prisma.payment.findMany({
      where: { userId: req.user!.id },
      orderBy: { createdAt: "desc" },
      include: {
        bid: {
          include: {
            auction: { include: { listing: { select: { title: true } } } },
          },
        },
      },
    });
    sendSuccess(res, payments);
  } catch (err) {
    next(err);
  }
};
