import Link from "next/link";

// No page title here — the home page uses the root default:
// "byteSquad — Built byte by byte"

const TECH_NAME = { flutter: "Flutter", react: "React", nodejs: "Node.js", kotlin: "Kotlin", java: "Java", express: "Express", figma: "Figma", wordpress: "WordPress" };

const SERVICES = [
  { title: "App Development", desc: "Native-feeling iOS & Android apps — cross-platform with Flutter or native Kotlin/Java.", href: "/services#app", tech: ["flutter", "kotlin", "java"] },
  { title: "Web Development", desc: "Fast, responsive websites and web apps built with React and Node.js.", href: "/services#web", tech: ["react", "nodejs"] },
  { title: "Backend Development", desc: "Reliable, scalable APIs and server logic with Node.js, Express and Java.", href: "/services#backend", tech: ["nodejs", "express", "java"] },
  { title: "UI/UX Design", desc: "Intuitive, on-brand interfaces designed and prototyped in Figma.", href: "/services#uiux", tech: ["figma"] },
  { title: "E-commerce", desc: "Online stores and checkout experiences designed to convert.", href: "/services#ecommerce", tech: ["react", "wordpress"] },
  { title: "Custom Software", desc: "Tailored platforms, dashboards and internal tools around your workflow.", href: "/services#custom", tech: ["react", "nodejs"] },
  { title: "WordPress", desc: "Flexible, easy-to-manage CMS websites built on WordPress.", href: "/services#wordpress", tech: ["wordpress"] },
  { title: "ERP Solutions", desc: "Operations, inventory and finance systems tailored to your business.", href: "/services#erp", tech: ["react", "nodejs"] },
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
  { n: "01", title: "Discover", desc: "We dig into your goals, users and requirements." },
  { n: "02", title: "Design", desc: "We shape the experience in Figma — from flows to polished interfaces." },
  { n: "03", title: "Build", desc: "Our engineers develop your product in focused iterations, with clean code." },
  { n: "04", title: "Launch", desc: "We test, deploy and hand over a product ready for the real world." },
];

const WHY = [
  {
    title: "Clear technology, no guesswork",
    desc: "We tell you exactly what we're building with and why — no black boxes, no jargon.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <circle cx="12" cy="12" r="5"></circle>
        <circle cx="12" cy="12" r="1"></circle>
      </svg>
    ),
  },
  {
    title: "Design & engineering together",
    desc: "One team owns the experience end to end, so nothing gets lost in handoff.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
        <polyline points="2 17 12 22 22 17"></polyline>
        <polyline points="2 12 12 17 22 12"></polyline>
      </svg>
    ),
  },
  {
    title: "Two ways to launch",
    desc: "Go fully custom, or move faster with a ready-made white-label product.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="6" y1="3" x2="6" y2="15"></line>
        <circle cx="18" cy="6" r="3"></circle>
        <circle cx="6" cy="18" r="3"></circle>
        <path d="M18 9a9 9 0 0 1-9 9"></path>
      </svg>
    ),
  },
  {
    title: "Built to grow",
    desc: "Scalable architecture and clean foundations that grow with your business.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 2 17"></polyline>
        <polyline points="16 6 23 6 23 13"></polyline>
      </svg>
    ),
  },
];

const TECH = [
  { key: "flutter", name: "Flutter" }, { key: "react", name: "React" }, { key: "nodejs", name: "Node.js" },
  { key: "express", name: "Express" }, { key: "kotlin", name: "Kotlin" }, { key: "java", name: "Java" },
  { key: "wordpress", name: "WordPress" }, { key: "figma", name: "Figma" },
];

const HIGHLIGHTS = [
  { big: "8+", sub: "Technologies", note: "Flutter, React, Node.js & more" },
  { big: "3", sub: "Platforms", note: "iOS · Android · Web" },
  { big: "6", sub: "White-Label Products", note: "Ready to brand & launch" },
  { big: "100%", sub: "Your Brand", note: "Full ownership, end to end" },
];

const DELAYS = ["delay-100", "delay-200", "delay-300", "delay-400"];
const arrow = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

export default function HomePage() {
  return (
    <>
      {/* ===== Hero ===== */}
      <section className="bs-hero">
        <div className="bs-hero-inner">
          <h1 className="bs-hero-title animate-fade-up">
            Software That Moves<br /><span className="grad">Your Business Forward</span>
          </h1>
          <p className="bs-hero-sub animate-fade-up delay-100">We design, build and ship custom apps, websites and software — plus ready-to-launch white-label products you can release under your own brand.</p>
          <div className="bs-hero-actions animate-fade-up delay-200">
            <Link href="/contact" className="bs-btn-glow">Start a Project</Link>
            <Link href="/services" className="bs-btn-ghost-d">Explore Services {arrow}</Link>
          </div>
        </div>
      </section>

      {/* ===== Highlights band ===== */}
      <section className="bs-stats animate-fade-up">
        <div className="bs-stats-inner">
          {HIGHLIGHTS.map((s, i) => (
            <div key={i} className="bs-stat">
              <span className="bs-stat-big">{s.big}</span>
              <span className="bs-stat-sub">{s.sub}</span>
              <span className="bs-stat-note">{s.note}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Who We Are ===== */}
      <section className="about-section">
        <div className="container about-container">
          <div className="about-image animate-fade-up">
            <div className="video-wrapper-responsive">
              <iframe src="/videos/bytesquad-video.html" allowFullScreen scrolling="no" style={{ border: "none" }}
                title="byteSquad Brand Video">
              </iframe>
            </div>
          </div>
          <div className="about-content">
            <span className="about-subtitle animate-fade-up">Who We Are</span>
            <h2 className="animate-fade-up delay-100">About byteSquad</h2>
            <p className="animate-fade-up delay-200">byteSquad is a software development
              company that turns ideas into real, working products. We partner with startups and growing
              businesses to design, build and launch software they can rely on.</p>
            <p className="animate-fade-up delay-300">For teams with a clear vision, we build
              custom software, mobile apps and websites around your exact needs. For teams that want to move
              fast, we offer ready-made white-label products you can brand and launch quickly.</p>
            <p className="animate-fade-up delay-400">Design and engineering sit under one
              roof — so what we plan is what we ship, built on clean, scalable foundations.</p>

            <div className="about-actions animate-fade-up delay-500">
              <Link href="/about-us" className="btn-primary btn-large">More About Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== What We Do ===== */}
      <section className="bs-svc">
        <div className="bs-shead animate-fade-up">
          <span className="bs-eyebrow">What We Do</span>
          <h2>Design, engineering & delivery — under one roof</h2>
          <p>From a single idea to a shipped product, we cover every layer of the build.</p>
        </div>
        <p className="bs-platforms animate-fade-up delay-100">
          Built for <b>iOS</b><span className="dot">·</span><b>Android</b><span className="dot">·</span><b>Web</b>
        </p>
        <div className="bs-svc-grid">
          {SERVICES.map((s, i) => (
            <Link key={s.href} href={s.href} className={`bs-svc-card animate-fade-up ${DELAYS[i % 4]}`}>
              <span className="bs-svc-logos">
                {s.tech.map((t) => (
                  <span key={t} className="bs-tlogo-tile" title={TECH_NAME[t]}>
                    <img className="bs-tlogo" src={`/tech/${t}.svg`} alt={TECH_NAME[t]} loading="lazy" />
                  </span>
                ))}
              </span>
              <span className="bs-svc-t">{s.title}</span>
              <span className="bs-svc-d">{s.desc}</span>
              <span className="bs-wl-link">Learn more {arrow}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ===== White-Label Products ===== */}
      <section className="bs-wl">
        <div className="bs-shead animate-fade-up">
          <span className="bs-eyebrow">White-Label Solutions</span>
          <h2>Ready-made products, launched under your brand</h2>
          <p>Skip months of development. Pick a proven product, make it yours, and go live fast.</p>
        </div>
        <div className="bs-wl-grid">
          {PRODUCTS.map((p, i) => (
            <Link key={p.href} href={p.href} className={`bs-wl-card ${p.tint} animate-fade-up ${DELAYS[i % 4]}`}>
              <span className="bs-wl-ic"><img src={p.img} alt="" loading="lazy" /></span>
              <span className="bs-wl-name">{p.name}</span>
              <span className="bs-wl-d">{p.desc}</span>
              <span className="bs-wl-link">Learn more {arrow}</span>
            </Link>
          ))}
        </div>
        <div className="bs-wl-cta animate-fade-up">
          <Link href="/white-label" className="btn-primary btn-large">Explore White-Label Solutions</Link>
        </div>
      </section>

      {/* ===== How We Work ===== */}
      <section className="clients-section">
        <div className="container">
          <div className="bs-shead animate-fade-up">
            <span className="bs-eyebrow">Our Process</span>
            <h2>How We Work</h2>
            <p>From idea to launch, in four focused steps.</p>
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

      {/* ===== Why byteSquad ===== */}
      <section className="why-choose-us-section">
        <div className="container relative z-10">
          <div className="bs-shead animate-fade-up">
            <span className="bs-eyebrow">Why Us</span>
            <h2>Why byteSquad</h2>
            <p>Built to help you launch faster and grow with confidence.</p>
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
          <h2>Modern tools, proven every day</h2>
          <p>We build with a focused, dependable stack — no experiments on your product.</p>
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
          <h2>Have a project in mind?</h2>
          <p>Tell us what you're working on — a custom build or a white-label product. The conversation starts with a simple message.</p>
          <div className="bs-cta-actions">
            <Link href="/contact" className="btn-on-blue">Start a Project</Link>
            <Link href="/white-label" className="btn-on-blue ghost">See White-Label Products</Link>
          </div>
        </div>
      </section>
    </>
  );
}
