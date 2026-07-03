import Link from "next/link";

export const metadata = {
  title: "Services",
  description:
    "byteSquad's services — app, web and backend development, UI/UX design, e-commerce, custom software, WordPress and ERP. Design and engineering under one roof, across iOS, Android and Web.",
};

const TECH_NAME = { flutter: "Flutter", react: "React", nodejs: "Node.js", kotlin: "Kotlin", java: "Java", express: "Express", figma: "Figma", wordpress: "WordPress" };

const SERVICES = [
  {
    id: "app", title: "App Development", tech: ["flutter", "kotlin", "java"],
    desc: "Fast, native-feeling apps on iOS and Android — cross-platform with Flutter for a shared codebase, or fully native when you need deep performance.",
    points: ["Published to the App Store and Google Play", "One shared Flutter codebase, or native Kotlin/Java builds", "Smooth UI with offline handling and push notifications", "Clean, documented, maintainable code"],
  },
  {
    id: "web", title: "Web Development", tech: ["react", "nodejs"],
    desc: "Fast, responsive web apps with a React front-end and a reliable Node.js back-end.",
    points: ["Responsive, SEO-friendly React web app", "Reliable Node.js back-end", "Reusable components that scale", "Fast load times on any device"],
  },
  {
    id: "backend", title: "Backend Development", tech: ["nodejs", "express"],
    desc: "Secure, scalable backends — clean APIs, structured databases, authentication, and third-party integrations.",
    points: ["REST APIs your apps can rely on", "Secure auth and role-based access", "A well-modeled database built to scale", "Payment, messaging and other integrations"],
  },
  {
    id: "uiux", title: "UI/UX Design", tech: ["figma"],
    desc: "Research, wireframes, and clean, intuitive interfaces — validated with prototypes before a line of code.",
    points: ["User research and journey mapping", "Wireframes and clickable prototypes", "A consistent design system", "Developer-ready design handoff"],
  },
  {
    id: "ecommerce", title: "E-commerce Development", tech: ["react", "wordpress"],
    desc: "Online stores that turn browsers into buyers — from storefront to secure checkout.",
    points: ["Fast, mobile-friendly storefront", "Secure checkout with trusted gateways", "Easy catalog and inventory management", "Order tracking for your team"],
  },
  {
    id: "custom", title: "Custom Software", tech: ["react", "nodejs"],
    desc: "Software built around your exact workflow — dashboards, internal tools, automation, or a full SaaS platform.",
    points: ["Built around your real processes", "Dashboards and reporting that matter", "Automation of repetitive work", "A scalable foundation to grow on"],
  },
  {
    id: "wordpress", title: "WordPress Development", tech: ["wordpress"],
    desc: "Custom themes and plugins tailored to your brand — fast, flexible, and simple for your team to run.",
    points: ["A custom theme for your brand", "Custom plugins for what you need", "An easy CMS your team can manage", "Fast, secure and SEO-ready"],
  },
  {
    id: "erp", title: "ERP Solutions", tech: ["react", "nodejs"],
    desc: "Operations, inventory and finance systems tailored to how your business actually runs.",
    points: ["Inventory, orders and procurement", "Finance, invoicing and reports", "Role-based access for every team", "Integrations with your existing tools"],
  },
];

const DELAYS = ["delay-100", "delay-200", "delay-300", "delay-400"];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bs-page-hero">
        <div className="bs-page-hero-inner">
          <span className="bs-eyebrow animate-fade-up">Our Services</span>
          <h1 className="animate-fade-up delay-100">Services that take you<br />from idea to launch</h1>
          <p className="animate-fade-up delay-200">byteSquad designs, builds and ships products across iOS, Android and Web — custom mobile apps, web platforms, solid backends, and ready-to-launch white-label products. Design and engineering under one roof.</p>
          <div className="bs-page-hero-actions animate-fade-up delay-300">
            <Link href="/contact" className="btn-primary btn-large">Start a Project</Link>
            <Link href="/white-label" className="btn-ghost-b">Explore White-Label</Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bs-svc-detail">
        <p className="bs-platforms animate-fade-up">
          Built for <b>iOS</b><span className="dot">·</span><b>Android</b><span className="dot">·</span><b>Web</b>
        </p>
        <div className="bs-srv-grid">
          {SERVICES.map((s, i) => (
            <article key={s.id} id={s.id} className={`bs-srv-card animate-fade-up ${DELAYS[i % 4]}`}>
              <div className="bs-svc-logos">
                {s.tech.map((t) => (
                  <span key={t} className="bs-tlogo-tile" title={TECH_NAME[t]}>
                    <img className="bs-tlogo" src={`/tech/${t}.svg`} alt={TECH_NAME[t]} loading="lazy" />
                  </span>
                ))}
              </div>
              <h3>{s.title}</h3>
              <p className="bs-srv-desc">{s.desc}</p>
              <ul className="bs-srv-list">
                {s.points.map((p, j) => (
                  <li key={j}>{p}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Closing CTA → White-Label */}
      <section className="bs-cta">
        <div className="bs-cta-inner animate-fade-up">
          <h2>Prefer to launch faster?</h2>
          <p>Six ready-made, fully-branded products — Taxi, OTT, Dating, CRM, School Management and LMS. Launch under your own brand in weeks, not years.</p>
          <div className="bs-cta-actions">
            <Link href="/white-label" className="btn-on-blue">Explore White-Label Solutions</Link>
            <Link href="/contact" className="btn-on-blue ghost">Start a Project</Link>
          </div>
        </div>
      </section>
    </>
  );
}
