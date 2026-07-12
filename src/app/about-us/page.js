import Link from "next/link";

export const metadata = {
  title: "About Us",
  description:
    "Learn about byteSquad — the software development studio behind custom mobile apps, websites and backends for iOS, Android and Web, plus six ready-to-launch white-label products you can brand as your own.",
  alternates: { canonical: "/about-us" },
};

const STATS = [
  { n: "6", label: "White-Label Products" },
  { n: "3", label: "iOS · Android · Web" },
  { n: "8+", label: "Core Technologies" },
  { n: "1", label: "Business-Day Response" },
];

const CUSTOM_BUILDS = [
  <><b>Mobile apps</b> for iOS & Android — Flutter, Kotlin & Java</>,
  <><b>Websites & web apps</b> built with React</>,
  <><b>Backends & APIs</b> with Node.js and Express</>,
  <><b>UI/UX design</b>, prototyped in Figma</>,
  <><b>E-commerce stores</b> built to convert</>,
  <><b>WordPress sites</b> your team can manage</>,
];

const WHITE_LABEL = [
  <><b>Taxi App</b> — rider, driver & admin apps</>,
  <><b>OTT / Streaming</b> — Netflix-style platform</>,
  <><b>Dating App</b> — matching, chat & moderation</>,
  <><b>CRM</b> — leads, deals & pipelines</>,
  <><b>School Management</b> — all-in-one ERP</>,
  <><b>LMS</b> — courses, quizzes & certificates</>,
];

const STEPS = [
  { n: "01", title: "Discover", desc: "We dig into your goals, users and requirements before writing a line of code." },
  { n: "02", title: "Design", desc: "We shape the experience in Figma — from flows to polished, on-brand interfaces." },
  { n: "03", title: "Build", desc: "Our engineers develop your product in focused iterations, with clean code." },
  { n: "04", title: "Launch", desc: "We test, deploy and hand over a product ready for the real world." },
];

const WHY = [
  {
    title: "One team, end to end",
    desc: "Design, mobile, web and backend under one roof — nothing gets lost in handoff.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
  },
  {
    title: "Two ways to build",
    desc: "Fully custom software, or a faster launch with a ready-made white-label product.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
        <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
      </svg>
    ),
  },
  {
    title: "Modern, reliable engineering",
    desc: "Clean, maintainable code on a stack we use every day — built to scale with you.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    ),
  },
  {
    title: "Clear communication, real ownership",
    desc: "You always know where things stand, what's next, and who's accountable.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
      </svg>
    ),
  },
];

const TECH = [
  { key: "flutter", name: "Flutter" }, { key: "react", name: "React" }, { key: "nodejs", name: "Node.js" },
  { key: "express", name: "Express" }, { key: "kotlin", name: "Kotlin" }, { key: "java", name: "Java" },
  { key: "wordpress", name: "WordPress" }, { key: "figma", name: "Figma" },
];

const DELAYS = ["delay-100", "delay-200", "delay-300", "delay-400"];

const check = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);
const arrow = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

export default function AboutPage() {
  return (
    <main>
      {/* ===== Hero ===== */}
      <section className="inner-hero bs-hero-tall" style={{ backgroundImage: "url('/images/vision-bg.jpg')" }}>
        <div className="inner-hero-content">
          <h1 className="animate-fade-up" style={{ maxWidth: "860px", margin: "0 auto 1.25rem" }}>
            We Build Software That Moves Businesses Forward
          </h1>
          <p className="animate-fade-up delay-100" style={{ fontSize: "1.2rem", maxWidth: "680px", margin: "0 auto", lineHeight: 1.65 }}>
            A software development studio for teams that want to ship faster — custom apps, websites
            and backends, plus white-label products you can launch under your own brand.
          </p>
          <div className="hero-actions animate-fade-up delay-200">
            <Link href="/contact" className="btn-primary btn-large">Start a Project</Link>
            <Link href="/white-label" className="btn-ghost">Explore White-Label Products</Link>
          </div>
        </div>
      </section>

      {/* ===== Our Story ===== */}
      <section className="story-section">
        <div className="container story-grid">
          <div className="story-content animate-fade-up">
            <span className="about-subtitle">Our Story</span>
            <h2>Great software shouldn&apos;t be reserved for big budgets</h2>
            <p>byteSquad began with a simple belief: great software should not be reserved for companies
              with massive budgets and year-long timelines. Too many good ideas stall because building
              them feels slow, expensive or risky. We set out to change that.</p>
            <p>So we built a studio around two ways of working. For teams with a specific vision, we
              design and build custom software end to end. For teams that need to move fast, we offer
              proven white-label products they can brand and launch quickly.</p>
            <p>We treat every project like it carries our name — because it does.</p>
          </div>
          <div className="story-image animate-fade-up delay-200">
            <img src="/images/approach-3.jpg" alt="The byteSquad studio workspace" />
          </div>
        </div>
      </section>

      {/* ===== Stats ===== */}
      <section className="bs-stats">
        <div className="bs-stats-grid">
          {STATS.map((s, i) => (
            <div key={s.label} className={`animate-fade-up ${DELAYS[i % 4]}`}>
              <span className="bs-stat-n">{s.n}</span>
              <span className="bs-stat-l">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ===== What We Do ===== */}
      <section className="bs-paths">
        <div className="bs-shead animate-fade-up">
          <span className="bs-eyebrow">What We Do</span>
          <h2>Two ways to build with byteSquad</h2>
          <p>Every project is different — pick the path that fits your timeline and budget.</p>
        </div>
        <div className="bs-paths-grid">
          <div className="bs-path-card animate-fade-up delay-100">
            <span className="bs-path-tag">Custom Builds</span>
            <h3>Made for your business</h3>
            <p>Software designed around your exact needs — planned, designed and built end to end by one team.</p>
            <ul className="bs-path-list">
              {CUSTOM_BUILDS.map((item, i) => (
                <li key={i}>{check}<span>{item}</span></li>
              ))}
            </ul>
            <Link href="/services" className="bs-wl-link">Explore Services {arrow}</Link>
          </div>
          <div className="bs-path-card animate-fade-up delay-200">
            <span className="bs-path-tag">White-Label Products</span>
            <h3>Launch under your brand</h3>
            <p>Proven, ready-made products we customize, brand and ship in a fraction of the usual time.</p>
            <ul className="bs-path-list">
              {WHITE_LABEL.map((item, i) => (
                <li key={i}>{check}<span>{item}</span></li>
              ))}
            </ul>
            <Link href="/white-label" className="bs-wl-link">Explore White-Label Products {arrow}</Link>
          </div>
        </div>
      </section>

      {/* ===== Vision / Mission / Approach ===== */}
      <section className="ideology-section">
        <div className="container">
          <div className="ideology-grid">
            <div className="ideology-card animate-fade-up delay-100">
              <h3>Our Vision</h3>
              <p>To make high-quality software accessible to businesses of every size — so a great idea,
                not a big budget, decides what gets built.</p>
            </div>
            <div className="ideology-card animate-fade-up delay-200">
              <h3>Our Mission</h3>
              <p>To help our clients launch faster and grow with confidence, by pairing thoughtful design
                with dependable, modern engineering across iOS, Android and the web.</p>
            </div>
            <div className="ideology-card animate-fade-up delay-300">
              <h3>Our Approach</h3>
              <p>Clear and collaborative — we plan carefully, communicate often, and build in focused
                iterations, so you always know what&apos;s happening and what&apos;s next.</p>
              <blockquote>&ldquo;Good software is clear, reliable, and built to grow with you.&rdquo;</blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ===== How We Work ===== */}
      <section className="clients-section">
        <div className="container">
          <div className="bs-shead animate-fade-up">
            <span className="bs-eyebrow">Our Process</span>
            <h2>From first call to launch day</h2>
            <p>Four focused steps — so nothing falls through the cracks.</p>
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
        </div>
      </section>

      {/* ===== Why Work With Us ===== */}
      <section className="why-choose-us-section">
        <div className="container relative z-10">
          <div className="bs-shead animate-fade-up">
            <span className="bs-eyebrow">Why Work With Us</span>
            <h2>Built to help you launch and grow</h2>
            <p>What working with byteSquad actually feels like.</p>
          </div>
          <div className="why-choose-grid">
            {WHY.map((w, i) => (
              <div key={w.title} className={`why-choose-card animate-fade-up ${DELAYS[i % 4]}`}>
                <div className="why-choose-content">
                  <div className="why-choose-icon">{w.icon}</div>
                  <h3>{w.title}</h3>
                  <div className="why-choose-card-body">
                    <p>{w.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Tech Stack ===== */}
      <section className="bs-tech">
        <div className="bs-shead animate-fade-up">
          <span className="bs-eyebrow">Our Tech Stack</span>
          <h2>The stack behind our work</h2>
          <p>Focused and dependable — the same tools, mastered deeply, on every project.</p>
        </div>
        <div className="bs-tech-chips animate-fade-up delay-100">
          {TECH.map((t) => (
            <span key={t.key} className="bs-chip"><img src={`/tech/${t.key}.svg`} alt="" loading="lazy" />{t.name}</span>
          ))}
        </div>
      </section>

      {/* ===== Closing CTA ===== */}
      <section className="bs-cta">
        <div className="bs-cta-inner animate-fade-up">
          <h2>Let&apos;s build something great together</h2>
          <p>Tell us what you&apos;re working on — a custom build or a white-label launch. Free consultation, reply within one business day.</p>
          <div className="bs-cta-actions">
            <Link href="/contact" className="btn-on-blue">Start Your Project</Link>
            <Link href="/white-label" className="btn-on-blue ghost">See White-Label Products</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
