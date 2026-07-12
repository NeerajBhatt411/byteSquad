import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";
import { getDb } from "@/lib/db";
import { ensureSeeded } from "@/lib/content";
import { DEFAULT_SERVICES } from "@/lib/defaults";
import { requireAdmin } from "@/lib/adminAuth";

export const runtime = "nodejs";

const TECH_KEYS = ["flutter", "react", "nodejs", "express", "kotlin", "java", "wordpress", "figma"];

function revalidateSite() {
  revalidatePath("/", "layout");
}

export async function GET() {
  const unauthorized = await requireAdmin();
  if (unauthorized) return unauthorized;
  try {
    const db = await ensureSeeded("services", DEFAULT_SERVICES);
    const docs = await db.collection("services").find().sort({ order: 1, _id: 1 }).toArray();
    return Response.json({
      status: "success",
      services: docs.map(({ _id, ...rest }) => ({ id: String(_id), ...rest })),
    });
  } catch (err) {
    console.error("Admin services GET failed:", err?.message);
    return Response.json({ status: "error", message: "Could not load services." }, { status: 500 });
  }
}

export async function POST(request) {
  const unauthorized = await requireAdmin();
  if (unauthorized) return unauthorized;
  try {
    const body = await request.json();
    const title = String(body.title || "").trim().slice(0, 120);
    const desc = String(body.desc || "").trim().slice(0, 400);
    const href = String(body.href || "/services").trim().slice(0, 300) || "/services";
    const tech = Array.isArray(body.tech) ? body.tech.filter((t) => TECH_KEYS.includes(t)).slice(0, 4) : [];
    if (!title || !desc) {
      return Response.json({ status: "invalid", message: "Title and description are required." }, { status: 400 });
    }
    const db = await getDb();
    const last = await db.collection("services").find().sort({ order: -1 }).limit(1).toArray();
    const order = (last[0]?.order || 0) + 1;
    const { insertedId } = await db.collection("services").insertOne({ title, desc, href, tech, order });
    revalidateSite();
    return Response.json({ status: "success", id: String(insertedId) });
  } catch (err) {
    console.error("Admin services POST failed:", err?.message);
    return Response.json({ status: "error" }, { status: 500 });
  }
}

export async function DELETE(request) {
  const unauthorized = await requireAdmin();
  if (unauthorized) return unauthorized;
  try {
    const { id } = await request.json();
    const db = await getDb();
    await db.collection("services").deleteOne({ _id: new ObjectId(id) });
    revalidateSite();
    return Response.json({ status: "success" });
  } catch {
    return Response.json({ status: "error" }, { status: 500 });
  }
}
