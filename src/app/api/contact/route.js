// Contact form API route.
//
// SMTP email sending is OPTIONAL. If the following environment variables are
// set (e.g. in `.env.local` at the project root, or in your hosting provider's
// env config), submissions are emailed via nodemailer; otherwise the route
// simply logs the submission to the server console so it works out-of-the-box
// in development:
//
//   SMTP_HOST   -> e.g. smtp.gmail.com
//   SMTP_PORT   -> e.g. 587
//   SMTP_USER   -> SMTP username
//   SMTP_PASS   -> SMTP password / app password (NEVER hardcode this)
//   CONTACT_TO  -> destination inbox for contact submissions
//
// No API keys or secrets are hardcoded here.

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_MESSAGE_LENGTH = 5000;

function clean(value, max) {
  if (typeof value !== "string") return "";
  const trimmed = value.trim();
  return typeof max === "number" ? trimmed.slice(0, max) : trimmed;
}

export async function POST(request) {
  try {
    let body = {};
    try {
      body = await request.json();
    } catch {
      body = {};
    }

    // Honeypot: real users never fill the hidden `company` field. If it's set,
    // silently pretend success so bots don't learn they were caught.
    if (clean(body.company)) {
      return Response.json({ status: "success" });
    }

    const name = clean(body.name, 200);
    const email = clean(body.email, 320);
    const phone = clean(body.phone, 50);
    const subject = clean(body.subject, 200);
    const message = clean(body.message, MAX_MESSAGE_LENGTH);

    // Validation: name + message required, email must look valid.
    if (!name || !message) {
      return Response.json(
        { status: "invalid", message: "Please provide your name and a message." },
        { status: 400 }
      );
    }
    if (!EMAIL_RE.test(email)) {
      return Response.json(
        { status: "invalid", message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO } = process.env;
    const smtpConfigured =
      SMTP_HOST && SMTP_PORT && SMTP_USER && SMTP_PASS && CONTACT_TO;

    if (smtpConfigured) {
      try {
        // Dynamic import so a missing `nodemailer` package never breaks the build.
        const nodemailer = await import("nodemailer");
        const createTransport =
          nodemailer.createTransport || nodemailer.default?.createTransport;

        const transporter = createTransport({
          host: SMTP_HOST,
          port: Number(SMTP_PORT),
          secure: Number(SMTP_PORT) === 465,
          auth: { user: SMTP_USER, pass: SMTP_PASS },
        });

        const lines = [
          `Name: ${name}`,
          `Email: ${email}`,
          phone ? `Phone: ${phone}` : null,
          subject ? `Subject: ${subject}` : null,
          "",
          message,
        ].filter((line) => line !== null);

        await transporter.sendMail({
          from: SMTP_USER,
          to: CONTACT_TO,
          replyTo: email,
          subject: subject
            ? `Contact form: ${subject}`
            : `Contact form submission from ${name}`,
          text: lines.join("\n"),
        });
      } catch (mailError) {
        // Never surface mail issues to the client — log and fall back.
        console.error("Contact form: email send failed, logging instead.", mailError);
        console.log("Contact form submission:", { name, email, phone, subject, message });
      }
    } else {
      // No SMTP configured (typical in dev) — just log the submission.
      console.log("Contact form submission (SMTP not configured):", {
        name,
        email,
        phone,
        subject,
        message,
      });
    }

    return Response.json({ status: "success" });
  } catch {
    return Response.json({ status: "error" }, { status: 500 });
  }
}
