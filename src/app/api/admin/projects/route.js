import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";
import { getDb } from "@/lib/db";
import { requireAdmin } from "@/lib/adminAuth";

export const runtime = "nodejs";

function revalidateSite() {
  revalidatePath("/", "layout");
}

export async function GET() {
  const unauthorized = await requireAdmin();
  if (unauthorized) return unauthorized;
  try {
    const db = await getDb();
    const docs = await db.collection("projects").find().sort({ order: 1, _id: -1 }).toArray();
    return Response.json({
      status: "success",
      projects: docs.map(({ _id, ...rest }) => ({ id: String(_id), ...rest })),
    });
  } catch (err) {
    console.error("Admin projects GET failed:", err?.message);
    return Response.json({ status: "error", message: "Could not load projects." }, { status: 500 });
  }
}

export async function POST(request) {
  const unauthorized = await requireAdmin();
  if (unauthorized) return unauthorized;
  try {
    const body = await request.json();
    const name = String(body.name || "").trim().slice(0, 120);
    const client = String(body.client || "").trim().slice(0, 120);
    const link = String(body.link || "").trim().slice(0, 500);
    const image = String(body.image || "").trim().slice(0, 800);
    const desc = String(body.desc || "").trim().slice(0, 400);
    if (!name) {
      return Response.json({ status: "invalid", message: "Project name is required." }, { status: 400 });
    }
    const db = await getDb();
    const { insertedId } = await db
      .collection("projects")
      .insertOne({ name, client, link, image, desc, order: Date.now(), createdAt: new Date() });
    revalidateSite();
    return Response.json({ status: "success", id: String(insertedId) });
  } catch (err) {
    console.error("Admin projects POST failed:", err?.message);
    return Response.json({ status: "error" }, { status: 500 });
  }
}

export async function DELETE(request) {
  const unauthorized = await requireAdmin();
  if (unauthorized) return unauthorized;
  try {
    const { id } = await request.json();
    const db = await getDb();
    await db.collection("projects").deleteOne({ _id: new ObjectId(id) });
    revalidateSite();
    return Response.json({ status: "success" });
  } catch {
    return Response.json({ status: "error" }, { status: 500 });
  }
}
