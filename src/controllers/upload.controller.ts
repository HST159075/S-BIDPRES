import { Request, Response, NextFunction } from "express";
import * as uploadSvc from "../services/upload.service";
import { sendSuccess } from "../lib/response";

export const uploadImage = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    if (!req.file)
      return res
        .status(400)
        .json({ success: false, message: "No file uploaded." });
    const result = await uploadSvc.handleImageUpload(
      req.file.buffer,
      req.file.mimetype,
      (req.query.folder as string) || "general",
    );
    sendSuccess(res, result, "Image uploaded.", 201);
  } catch (err) {
    next(err);
  }
};
export const uploadVideo = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    if (!req.file)
      return res
        .status(400)
        .json({ success: false, message: "No file uploaded." });
    const result = await uploadSvc.handleVideoUpload(
      req.file.buffer,
      req.file.mimetype,
      (req.query.folder as string) || "general",
    );
    sendSuccess(res, result, "Video uploaded.", 201);
  } catch (err) {
    next(err);
  }
};
export const uploadDocument = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    if (!req.file)
      return res
        .status(400)
        .json({ success: false, message: "No file uploaded." });
    const result = await uploadSvc.handleDocumentUpload(
      req.file.buffer,
      req.file.mimetype,
      (req.query.folder as string) || "documents",
    );
    sendSuccess(res, result, "Document uploaded.", 201);
  } catch (err) {
    next(err);
  }
};
