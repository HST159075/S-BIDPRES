import { Router } from "express";
import multer from "multer";
import { authenticate } from "../middleware/authenticate";
import * as ctrl from "../controllers/upload.controller";
export const uploadRoutes = Router();
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 100 * 1024 * 1024 },
});
uploadRoutes.post(
  "/image",
  authenticate,
  upload.single("file"),
  ctrl.uploadImage,
);
uploadRoutes.post(
  "/video",
  authenticate,
  upload.single("file"),
  ctrl.uploadVideo,
);
uploadRoutes.post(
  "/document",
  authenticate,
  upload.single("file"),
  ctrl.uploadDocument,
);
