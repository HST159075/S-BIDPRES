import { uploadImage, uploadVideo, uploadDocument } from "../lib/cloudinary";
const MB = 1024 * 1024;
export async function handleImageUpload(
  buffer: Buffer,
  mimetype: string,
  folder: string,
) {
  if (!["image/jpeg", "image/png", "image/webp"].includes(mimetype))
    throw new Error("Only JPG, PNG, WebP allowed.");
  if (buffer.length > 5 * MB) throw new Error("Image must be under 5MB.");
  return { url: await uploadImage(buffer, "auction/" + folder) };
}
export async function handleVideoUpload(
  buffer: Buffer,
  mimetype: string,
  folder: string,
) {
  if (!mimetype.startsWith("video/"))
    throw new Error("Only video files allowed.");
  if (buffer.length > 100 * MB) throw new Error("Video must be under 100MB.");
  return { url: await uploadVideo(buffer, "auction/" + folder) };
}
export async function handleDocumentUpload(
  buffer: Buffer,
  mimetype: string,
  folder: string,
) {
  if (mimetype !== "application/pdf")
    throw new Error("Only PDF files allowed.");
  if (buffer.length > 10 * MB) throw new Error("Document must be under 10MB.");
  return { url: await uploadDocument(buffer, "auction/" + folder) };
}
