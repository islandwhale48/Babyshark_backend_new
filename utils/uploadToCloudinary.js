import cloudinary from "../config/cloudinary.js";

export const uploadToCloudinary = (buffer, options = {}) => {
  return new Promise((resolve, reject) => {
    const uploadOptions = {
      resource_type: options.resource_type || "auto",
      folder: options.folder || "pitches",
      chunk_size: 6 * 1024 * 1024, // 6MB chunks (CRITICAL for video)
      timeout: 120000,             // 2 minutes
      ...options
    };

    const stream = cloudinary.uploader.upload_stream(
      uploadOptions,
      (error, result) => {
        if (error) {
          console.error("☁️ Cloudinary upload error:", error);
          return reject(error);
        }
        resolve(result);
      }
    );

    stream.end(buffer);
  });
};
