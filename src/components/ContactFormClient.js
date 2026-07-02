"use client";

import { useState } from "react";

export default function ContactFormClient() {
  const [status, setStatus] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: data.get("fullName") || "",
      email: data.get("email") || "",
      phone: data.get("phone") || "",
      subject: data.get("company") || "",
      message: data.get("message") || "",
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      let result = {};
      try {
        result = await response.json();
      } catch {
        result = {};
      }

      const nextStatus = result.status || (response.ok ? "success" : "error");
      setStatus(nextStatus);

      if (nextStatus === "success") {
        form.reset();
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form action="" method="POST" className="light-query-form" onSubmit={handleSubmit}>
      {status === "success" && (
        <div className="form-success">Thank you! Your inquiry has been sent successfully.</div>
      )}
      {status === "error" && (
        <div className="form-error">Sorry, there was an error sending your message. Please try again later.</div>
      )}
      {status === "invalid" && (
        <div className="form-error">Please provide a valid name and email address.</div>
      )}

      <div className="form-group form-full">
        <label htmlFor="fullName">Full Name</label>
        <input type="text" id="fullName" name="fullName" placeholder="Your name" required />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="you@company.com" required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" name="phone" placeholder="+91 XXXXX XXXXX" required />
        </div>
      </div>

      <div className="form-group form-full">
        <label htmlFor="company">Company</label>
        <input type="text" id="company" name="company" placeholder="Company name" />
      </div>

      <div className="form-group form-full">
        <label htmlFor="message">How can we help?</label>
        <textarea id="message" name="message" rows="4" placeholder="Briefly describe your requirements..." required></textarea>
      </div>

      <button type="submit" name="submit_inquiry" className="submit-btn-blue">Submit Inquiry</button>
    </form>
  );
}
