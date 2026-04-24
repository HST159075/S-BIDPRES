import { Response } from "express";
export const sendSuccess = <T>(
  res: Response,
  data: T,
  message = "OK",
  status = 200,
) => res.status(status).json({ success: true, message, data });
export const sendError = (res: Response, message: string, status = 400) =>
  res.status(status).json({ success: false, message });
export const sendPaginated = <T>(
  res: Response,
  data: T[],
  total: number,
  page: number,
  limit: number,
) =>
  res.json({
    success: true,
    data,
    pagination: {
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
      hasNext: page * limit < total,
      hasPrev: page > 1,
    },
  });
