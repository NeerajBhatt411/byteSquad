import { ObjectId } from "mongodb";
import { getDb } from "@/lib/db";
import { requireAdmin } from "@/lib/adminAuth";

export const runtime = "nodejs";

export async function GET() {
  const unauthorized = await requireAdmin();
  if (unauthorized) return unauthorized;
  try {
    const db = await getDb();
    const docs = await db.collection("enquiries").find().sort({ createdAt: -1 }).limit(500).toArray();
    return Response.json({
      status: "success",
      enquiries: docs.map(({ _id, ...rest }) => ({ id: String(_id), ...rest })),
    });
  } catch (err) {
    console.error("Admin enquiries GET failed:", err?.message);
    return Response.json({ status: "error", message: "Could not load enquiries." }, { status: 500 });
  }
}

export async function PATCH(request) {
  const unauthorized = await requireAdmin();
  if (unauthorized) return unauthorized;
  try {
    const { id, read } = await request.json();
    const db = await getDb();
    await db.collection("enquiries").updateOne({ _id: new ObjectId(id) }, { $set: { read: Boolean(read) } });
    return Response.json({ status: "success" });
  } catch {
    return Response.json({ status: "error" }, { status: 500 });
  }
}

export async function DELETE(request) {
  const unauthorized = await requireAdmin();
  if (unauthorized) return unauthorized;
  try {
    const { id } = await request.json();
    const db = await getDb();
    await db.collection("enquiries").deleteOne({ _id: new ObjectId(id) });
    return Response.json({ status: "success" });
  } catch {
    return Response.json({ status: "error" }, { status: 500 });
  }
}
