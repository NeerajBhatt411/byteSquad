import { v2 as cloudinary } from "cloudinary";
import { requireAdmin } from "@/lib/adminAuth";

export const runtime = "nodejs";

const MAX_BYTES = 8 * 1024 * 1024; // 8 MB

export async function POST(request) {
  const unauthorized = await requireAdmin();
  if (unauthorized) return unauthorized;

  const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env;
  if (!CLOUDINARY_CLOUD_NAME || !CLOUDINARY_API_KEY || !CLOUDINARY_API_SECRET) {
    return Response.json({ status: "error", message: "Cloudinary is not configured." }, { status: 500 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get("file");
    if (!file || typeof file.arrayBuffer !== "function") {
      return Response.json({ status: "invalid", message: "No file provided." }, { status: 400 });
    }
    if (!String(file.type).startsWith("image/")) {
      return Response.json({ status: "invalid", message: "Only image files are allowed." }, { status: 400 });
    }
    if (file.size > MAX_BYTES) {
      return Response.json({ status: "invalid", message: "Image must be under 8 MB." }, { status: 400 });
    }

    cloudinary.config({
      cloud_name: CLOUDINARY_CLOUD_NAME,
      api_key: CLOUDINARY_API_KEY,
      api_secret: CLOUDINARY_API_SECRET,
    });

    const buffer = Buffer.from(await file.arrayBuffer());
    const dataUri = `data:${file.type};base64,${buffer.toString("base64")}`;
    const result = await cloudinary.uploader.upload(dataUri, {
      folder: "bytesquad",
      resource_type: "image",
    });

    return Response.json({ status: "success", url: result.secure_url });
  } catch (err) {
    console.error("Admin upload failed:", err?.message);
    return Response.json({ status: "error", message: "Upload failed." }, { status: 500 });
  }
}
