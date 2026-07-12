import { cookies } from "next/headers";
import { createSessionToken, sessionCookieOptions, ADMIN_COOKIE } from "@/lib/adminAuth";

export const runtime = "nodejs";

export async function POST(request) {
  let body = {};
  try {
    body = await request.json();
  } catch {}

  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  const password = typeof body.password === "string" ? body.password : "";

  const validEmail = (process.env.ADMIN_EMAIL || "").trim().toLowerCase();
  const validPassword = process.env.ADMIN_PASSWORD || "";

  if (!validEmail || !validPassword) {
    return Response.json({ status: "error", message: "Admin login is not configured." }, { status: 500 });
  }
  if (email !== validEmail || password !== validPassword) {
    return Response.json({ status: "invalid", message: "Incorrect email or password." }, { status: 401 });
  }

  const token = await createSessionToken(email);
  const cookieStore = await cookies();
  cookieStore.set(ADMIN_COOKIE, token, sessionCookieOptions());
  return Response.json({ status: "success" });
}
