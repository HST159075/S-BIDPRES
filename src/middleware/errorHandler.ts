import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";
import { logger } from "../lib/logger";
export const errorHandler = (
  err: Error & { statusCode?: number },
  req: Request,
  res: Response,
  _next: NextFunction,
) => {
  logger.error({ err, url: req.url, method: req.method }, "Request error");
  if (err instanceof ZodError)
    return res
      .status(400)
      .json({
        success: false,
        message: "Validation error",
        details: err.errors.map((e) => ({
          field: e.path.join("."),
          message: e.message,
        })),
      });
  const status = err.statusCode || 500;
  const message = status === 500 ? "Internal server error" : err.message;
  return res.status(status).json({ success: false, message });
};
