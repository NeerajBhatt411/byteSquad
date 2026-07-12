import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";
import { getDb } from "@/lib/db";
import { ensureSeeded } from "@/lib/content";
import { DEFAULT_PRODUCTS } from "@/lib/defaults";
import { requireAdmin } from "@/lib/adminAuth";

export const runtime = "nodejs";

function revalidateSite() {
  revalidatePath("/", "layout");
}

export async function GET() {
  const unauthorized = await requireAdmin();
  if (unauthorized) return unauthorized;
  try {
    const db = await ensureSeeded("products", DEFAULT_PRODUCTS);
    const docs = await db.collection("products").find().sort({ order: 1, _id: 1 }).toArray();
    return Response.json({
      status: "success",
      products: docs.map(({ _id, ...rest }) => ({ id: String(_id), ...rest })),
    });
  } catch (err) {
    console.error("Admin products GET failed:", err?.message);
    return Response.json({ status: "error", message: "Could not load products." }, { status: 500 });
  }
}

export async function POST(request) {
  const unauthorized = await requireAdmin();
  if (unauthorized) return unauthorized;
  try {
    const body = await request.json();
    const name = String(body.name || "").trim().slice(0, 120);
    const desc = String(body.desc || "").trim().slice(0, 400);
    const href = String(body.href || "/contact").trim().slice(0, 300) || "/contact";
    const img = String(body.img || "/menu-icons/crm.svg").trim().slice(0, 500);
    if (!name || !desc) {
      return Response.json({ status: "invalid", message: "Name and description are required." }, { status: 400 });
    }
    const db = await getDb();
    const last = await db.collection("products").find().sort({ order: -1 }).limit(1).toArray();
    const order = (last[0]?.order || 0) + 1;
    const { insertedId } = await db
      .collection("products")
      .insertOne({ name, desc, href, img, tint: "p-crm", order });
    revalidateSite();
    return Response.json({ status: "success", id: String(insertedId) });
  } catch (err) {
    console.error("Admin products POST failed:", err?.message);
    return Response.json({ status: "error" }, { status: 500 });
  }
}

export async function DELETE(request) {
  const unauthorized = await requireAdmin();
  if (unauthorized) return unauthorized;
  try {
    const { id } = await request.json();
    const db = await getDb();
    await db.collection("products").deleteOne({ _id: new ObjectId(id) });
    revalidateSite();
    return Response.json({ status: "success" });
  } catch {
    return Response.json({ status: "error" }, { status: 500 });
  }
}
