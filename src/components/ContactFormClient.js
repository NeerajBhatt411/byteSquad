"use client";

import { useState } from "react";

const SERVICES = [
  "App Development", "Web Development", "Backend Development", "UI/UX Design",
  "E-commerce", "Custom Software", "WordPress", "ERP Solutions",
  "White-Label — Taxi App", "White-Label — OTT / Streaming", "White-Label — Dating App",
  "White-Label — CRM", "White-Label — School Management", "White-Label — LMS",
  "Not sure yet",
];

export default function ContactFormClient() {
  const [status, setStatus] = useState("idle"); // idle | sending | ok | error
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const service = (data.get("service") || "").toString();

    const payload = {
      name: (data.get("name") || "").toString(),
      email: (data.get("email") || "").toString(),
      phone: (data.get("phone") || "").toString(),
      subject: service ? `New enquiry — ${service}` : "New enquiry",
      message: (data.get("message") || "").toString(),
      company: (data.get("company") || "").toString(), // honeypot
    };

    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await res.json().catch(() => ({}));
      if (res.ok && result.status === "success") {
        setStatus("ok");
        form.reset();
      } else {
        setErrorMsg(result.message || "Something went wrong. Please try again or email us at info@bytesquad.in.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please try again or email us at info@bytesquad.in.");
      setStatus("error");
    }
  }

  return (
    <form className="bs-form" onSubmit={handleSubmit}>
      {status === "ok" && (
        <div className="bs-form-msg ok">
          Thanks! Your message is on its way — we&apos;ll reply within one business day. 🎉
        </div>
      )}
      {status === "error" && (
        <div className="bs-form-msg err">
          {errorMsg}
        </div>
      )}

      {/* Honeypot — hidden from humans, catches bots */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", opacity: 0 }}
      />

      <div className="bs-form-row">
        <div className="bs-field">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" placeholder="Your name" required />
        </div>
        <div className="bs-field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="you@company.com" required />
        </div>
      </div>

      <div className="bs-form-row">
        <div className="bs-field">
          <label htmlFor="phone">Phone <span className="opt">(optional)</span></label>
          <input id="phone" name="phone" type="tel" placeholder="+91 XXXXX XXXXX" />
        </div>
        <div className="bs-field">
          <label htmlFor="service">Interested in</label>
          <select id="service" name="service" defaultValue="">
            <option value="" disabled>Choose a service…</option>
            {SERVICES.map((s) => (<option key={s} value={s}>{s}</option>))}
          </select>
        </div>
      </div>

      <div className="bs-field">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="5" placeholder="Tell us about your project…" required></textarea>
      </div>

      <button type="submit" className="btn-primary btn-large" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
      <p className="bs-form-note">We&apos;ll never share your details. Expect a reply within one business day.</p>
    </form>
  );
}
