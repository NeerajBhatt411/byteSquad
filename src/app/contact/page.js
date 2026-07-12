import ContactFormClient from "@/components/ContactFormClient";

export const metadata = {
  title: "Contact",
  description:
    "Tell byteSquad about your project — custom software or a white-label product. We reply within one business day. Email info@bytesquad.com.",
};

const STEPS = [
  { n: "01", t: "You share", d: "Tell us your idea, goals and any details you have." },
  { n: "02", t: "We discuss", d: "A quick call to understand your needs and fit." },
  { n: "03", t: "We propose", d: "A clear plan with scope, timeline and pricing." },
];

const mailIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-10 6L2 7"></path></svg>
);
const phoneIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
);
const pinIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
);

export default function ContactPage() {
  return (
    <>
      <section className="bs-page-hero">
        <div className="bs-page-hero-inner">
          <span className="bs-eyebrow animate-fade-up">Contact Us</span>
          <h1 className="animate-fade-up delay-100">Let&apos;s build something<br />great together</h1>
          <p className="animate-fade-up delay-200">Have an idea, a problem to solve, or a product to launch? Custom software or a white-label product — the conversation starts with a simple message.</p>
        </div>
      </section>

      <section className="bs-contact">
        <div className="bs-contact-grid">
          <div className="bs-contact-left animate-fade-up">
            <h2>What happens next</h2>
            <ul className="bs-steps-list">
              {STEPS.map((s) => (
                <li key={s.n}>
                  <span className="bs-steps-n">{s.n}</span>
                  <div>
                    <b>{s.t}</b>
                    <p>{s.d}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="bs-reach">
              <h3>Other ways to reach us</h3>
              <a className="bs-reach-item" href="mailto:info@bytesquad.com">
                <span className="bs-reach-ic">{mailIcon}</span>
                <span><b>Email</b><br />info@bytesquad.com</span>
              </a>
              <a className="bs-reach-item" href="tel:+917042232923">
                <span className="bs-reach-ic">{phoneIcon}</span>
                <span><b>Phone</b><br />+91 70422 32923</span>
              </a>
              <a className="bs-reach-item" href="https://maps.google.com/?q=B-48%2C%20Sector%2048%2C%20Noida" target="_blank" rel="noopener noreferrer">
                <span className="bs-reach-ic">{pinIcon}</span>
                <span><b>Address</b><br />B-48, Sector 48, Noida</span>
              </a>
            </div>
          </div>

          <div className="bs-contact-right animate-fade-up delay-100">
            <div className="bs-form-card">
              <h2>Send us a message</h2>
              <p className="bs-form-sub">Fill this in and we&apos;ll get back to you within one business day.</p>
              <ContactFormClient />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
