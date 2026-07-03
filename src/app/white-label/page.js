import Link from "next/link";

export const metadata = {
  title: "White-Label Solutions",
  description:
    "Launch your own branded software fast. Ready-made, fully-customizable white-label products — Taxi, OTT, Dating, CRM, School Management and LMS — deployed under your brand across web, admin and mobile.",
};

const arrow = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const WHY = [
  {
    title: "Faster Launch",
    desc: "Core features and apps are production-ready — go live in weeks, not months.",
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>),
  },
  {
    title: "Lower Cost",
    desc: "Pay for customization and branding — not for reinventing the wheel.",
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>),
  },
  {
    title: "Proven & Tested",
    desc: "Real-world architecture and battle-tested workflows you can rely on.",
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>),
  },
  {
    title: "Your Brand, End to End",
    desc: "Your name, colors, logo and domain. Customers see your business — not ours.",
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>),
  },
];

const PRODUCTS = [
  { name: "Taxi App", desc: "A complete ride-booking platform with rider, driver and admin apps.", img: "/menu-icons/taxi.svg", tint: "p-taxi", href: "/white-label/taxi-app" },
  { name: "OTT / Streaming", desc: "A Netflix-style video streaming service for iOS, Android and Web.", img: "/menu-icons/ott.svg", tint: "p-ott", href: "/white-label/ott-app" },
  { name: "Dating App", desc: "A modern matchmaking app with profiles, matching and chat.", img: "/menu-icons/dating.svg", tint: "p-dating", href: "/white-label/dating-app" },
  { name: "CRM", desc: "A Salesforce-style CRM to manage leads, deals and customers.", img: "/menu-icons/crm.svg", tint: "p-crm", href: "/white-label/crm" },
  { name: "School Management", desc: "An all-in-one ERP for schools: students, attendance, fees and more.", img: "/menu-icons/school.svg", tint: "p-school", href: "/white-label/school" },
  { name: "LMS — Smart Learning", desc: "Your own course platform with video, quizzes and certificates.", img: "/menu-icons/lms.svg", tint: "p-lms", href: "/white-label/lms" },
];

const STEPS = [
  { n: "01", title: "Pick", desc: "Choose the ready-made product that fits your business." },
  { n: "02", title: "Customize", desc: "We tailor features, workflows and integrations to you." },
  { n: "03", title: "Brand", desc: "Your logo, colors, app name and domain across web, admin and mobile." },
  { n: "04", title: "Launch", desc: "We deploy your branded apps to the web and the app stores." },
];

const DELAYS = ["delay-100", "delay-200", "delay-300", "delay-400"];

export default function WhiteLabelPage() {
  return (
    <>
      {/* Hero */}
      <section className="bs-page-hero">
        <div className="bs-page-hero-inner">
          <span className="bs-eyebrow animate-fade-up">White-Label Solutions</span>
          <h1 className="animate-fade-up delay-100">Launch your own branded<br />software — fast</h1>
          <p className="animate-fade-up delay-200">Fully built, tested products ready to deploy under your brand, your logo, your identity. Pick a proven product, customize it, and go live in a fraction of the time and cost of building from scratch — with web, admin and mobile apps.</p>
          <div className="bs-page-hero-actions animate-fade-up delay-300">
            <Link href="/contact" className="btn-primary btn-large">Book a Demo</Link>
            <Link href="#products" className="btn-ghost-b">Explore Products {arrow}</Link>
          </div>
        </div>
      </section>

      {/* Why White-Label */}
      <section className="bs-feat">
        <div className="bs-shead animate-fade-up">
          <span className="bs-eyebrow">Why White-Label</span>
          <h2>Your product, without the wait</h2>
          <p>Skip months of development and launch a proven product under your own brand.</p>
        </div>
        <div className="bs-feat-grid">
          {WHY.map((w, i) => (
            <div key={w.title} className={`bs-feat-card animate-fade-up ${DELAYS[i % 4]}`}>
              <div className="bs-feat-ic">{w.icon}</div>
              <h3>{w.title}</h3>
              <p>{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="bs-wl" id="products">
        <div className="bs-shead animate-fade-up">
          <span className="bs-eyebrow">Our Products</span>
          <h2>Six ready-made products to brand as your own</h2>
          <p>Each ships with web, admin and mobile apps — customizable end to end.</p>
        </div>
        <div className="bs-wl-grid">
          {PRODUCTS.map((p, i) => (
            <Link key={p.href} href={p.href} className={`bs-wl-card ${p.tint} animate-fade-up ${DELAYS[i % 4]}`}>
              <span className="bs-wl-ic"><img src={p.img} alt="" loading="lazy" /></span>
              <span className="bs-wl-name">{p.name}</span>
              <span className="bs-wl-d">{p.desc}</span>
              <span className="bs-wl-link">View details {arrow}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="clients-section">
        <div className="container">
          <div className="bs-shead animate-fade-up">
            <span className="bs-eyebrow">How It Works</span>
            <h2>From pick to launch, in four steps</h2>
            <p>You bring the brand and the vision — we handle the build and the launch.</p>
          </div>
          <div className="clients-grid">
            {STEPS.map((s, i) => (
              <div key={s.n} className={`client-card animate-fade-up ${DELAYS[i % 4]}`}>
                <div className="client-number">{s.n}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
          <p className="bs-stack-line animate-fade-up">Built on a proven stack — <b>React</b> · <b>Flutter</b> · <b>Kotlin/Java</b> · <b>Node.js</b> · <b>Figma</b></p>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bs-cta">
        <div className="bs-cta-inner animate-fade-up">
          <h2>Ready to launch under your brand?</h2>
          <p>Tell us which product fits your business — we'll walk you through a live demo and a clear plan to go live.</p>
          <div className="bs-cta-actions">
            <Link href="/contact" className="btn-on-blue">Book a Demo</Link>
            <Link href="/contact" className="btn-on-blue ghost">Talk to Our Team</Link>
          </div>
        </div>
      </section>
    </>
  );
}
