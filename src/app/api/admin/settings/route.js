import { revalidatePath } from "next/cache";
import { getDb } from "@/lib/db";
import { DEFAULT_FOOTER } from "@/lib/defaults";
import { requireAdmin } from "@/lib/adminAuth";

export const runtime = "nodejs";

const FOOTER_FIELDS = ["address", "email", "phone", "linkedin", "instagram", "youtube", "copyright"];

export async function GET() {
  const unauthorized = await requireAdmin();
  if (unauthorized) return unauthorized;
  try {
    const db = await getDb();
    const doc = await db.collection("settings").findOne({ _id: "footer" });
    const footer = { ...DEFAULT_FOOTER, ...(doc || {}) };
    delete footer._id;
    return Response.json({ status: "success", footer });
  } catch (err) {
    console.error("Admin settings GET failed:", err?.message);
    return Response.json({ status: "error", message: "Could not load settings." }, { status: 500 });
  }
}

export async function PUT(request) {
  const unauthorized = await requireAdmin();
  if (unauthorized) return unauthorized;
  try {
    const body = await request.json();
    const update = {};
    for (const field of FOOTER_FIELDS) {
      if (typeof body[field] === "string") update[field] = body[field].trim().slice(0, 500);
    }
    const db = await getDb();
    await db.collection("settings").updateOne({ _id: "footer" }, { $set: update }, { upsert: true });
    revalidatePath("/", "layout");
    return Response.json({ status: "success" });
  } catch (err) {
    console.error("Admin settings PUT failed:", err?.message);
    return Response.json({ status: "error" }, { status: 500 });
  }
}
