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
  const [sent, setSent] = useState(false);

  // No backend — compose an email to hello@bytesquad.com with the details.
  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const service = data.get("service") || "a project";
    const subject = `New enquiry — ${service}`;
    const body =
      `Name: ${data.get("name") || ""}\n` +
      `Email: ${data.get("email") || ""}\n` +
      `Phone: ${data.get("phone") || ""}\n` +
      `Interested in: ${data.get("service") || ""}\n\n` +
      `${data.get("message") || ""}`;
    window.location.href = `mailto:hello@bytesquad.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form className="bs-form" onSubmit={handleSubmit}>
      {sent && (
        <div className="bs-form-msg ok">
          Opening your email app… If nothing happens, write to us at <a href="mailto:hello@bytesquad.com">hello@bytesquad.com</a>. 🎉
        </div>
      )}

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

      <button type="submit" className="btn-primary btn-large">Send message</button>
      <p className="bs-form-note">We&apos;ll never share your details. Expect a reply within one business day.</p>
    </form>
  );
}
