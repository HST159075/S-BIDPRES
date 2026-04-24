import { v2 as cloudinary } from "cloudinary";
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
function streamUpload(buffer: Buffer, options: object): Promise<string> {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(options, (err, result) => {
      if (err) return reject(err);
      resolve(result!.secure_url);
    });
    stream.end(buffer);
  });
}
export const uploadImage = (buf: Buffer, folder: string) =>
  streamUpload(buf, {
    folder,
    resource_type: "image",
    quality: "auto",
    fetch_format: "auto",
  });
export const uploadVideo = (buf: Buffer, folder: string) =>
  streamUpload(buf, { folder, resource_type: "video" });
export const uploadDocument = (buf: Buffer, folder: string) =>
  streamUpload(buf, { folder, resource_type: "raw" });
export const deleteFile = (publicId: string) =>
  cloudinary.uploader.destroy(publicId);
