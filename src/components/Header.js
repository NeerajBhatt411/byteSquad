"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

function isActive(pathname, href) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

const SERVICES = [
  { label: "App Development", desc: "iOS & Android · Flutter", href: "/services#app", img: "/menu-icons/app.svg" },
  { label: "Web Development", desc: "React + Node.js", href: "/services#web", img: "/menu-icons/web.svg" },
  { label: "Backend Development", desc: "APIs & databases", href: "/services#backend", img: "/menu-icons/backend.svg" },
  { label: "UI/UX Design", desc: "Figma, research → UI", href: "/services#uiux", img: "/menu-icons/uiux.svg" },
  { label: "E-commerce", desc: "Stores built to sell", href: "/services#ecommerce", img: "/menu-icons/ecommerce.svg" },
  { label: "Custom Software", desc: "Dashboards, tools, SaaS", href: "/services#custom", img: "/menu-icons/custom.svg" },
  { label: "WordPress", desc: "Themes, plugins & CMS", href: "/services#wordpress", img: "/menu-icons/wordpress.svg" },
];

const PRODUCTS = [
  { name: "Taxi App", desc: "Complete ride-hailing platform", href: "/white-label/taxi-app", tint: "p-taxi", img: "/menu-icons/taxi.svg" },
  { name: "OTT / Streaming", desc: "Your own Netflix-style service", href: "/white-label/ott-app", tint: "p-ott", img: "/menu-icons/ott.svg" },
  { name: "Dating App", desc: "Swipe, match & real-time chat", href: "/white-label/dating-app", tint: "p-dating", img: "/menu-icons/dating.svg" },
  { name: "CRM", desc: "Leads, pipeline & customers", href: "/white-label/crm", tint: "p-crm", img: "/menu-icons/crm.svg" },
  { name: "School Management", desc: "All-in-one school ERP", href: "/white-label/school", tint: "p-school", img: "/menu-icons/school.svg" },
  { name: "LMS — Smart Learning", desc: "Courses, quizzes & certificates", href: "/white-label/lms", tint: "p-lms", img: "/menu-icons/lms.svg" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="container header-container">
        <Link href="/" className="site-logo">
          <img src="/brand/byteSquad-icon-tight.svg" alt="" style={{ height: "clamp(34px, 6vw, 44px)", width: "auto" }} />
          <img src="/brand/byteSquad-wordmark-tight.svg" alt="byteSquad" style={{ height: "clamp(21px, 4vw, 27px)", width: "auto" }} />
        </Link>

        <nav className="main-navigation" id="site-navigation">
          <div className="mobile-menu-header">
            <Link href="/" className="mobile-menu-brand">
              <img src="/brand/byteSquad-icon-tight.svg" alt="" style={{ height: "38px", width: "auto" }} />
              <img src="/brand/byteSquad-wordmark-tight.svg" alt="byteSquad" style={{ height: "24px", width: "auto" }} />
            </Link>
            <button className="mobile-menu-close" id="mobile-menu-close" aria-label="Close menu">
              <span></span>
              <span></span>
            </button>
          </div>
          <ul>
            <li><Link href="/" className={isActive(pathname, "/") ? "active" : ""}>Home</Link></li>
            <li><Link href="/about-us" className={isActive(pathname, "/about-us") ? "active" : ""}>About Us</Link></li>

            <li className="menu-item-has-children">
              <Link href="/services" className={isActive(pathname, "/services") ? "active" : ""}>
                Services
                <svg className="dropdown-icon" width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </Link>
              <div className="bs-dropdown dd-services">
                <span className="dd-eyebrow">What we build for you</span>
                <div className="dd-grid">
                  {SERVICES.map((s) => (
                    <Link key={s.href} href={s.href} className="dd-item">
                      <span className="ic"><img src={s.img} alt="" loading="lazy" /></span>
                      <span className="tx">
                        <span className="t">{s.label}</span>
                        <span className="d">{s.desc}</span>
                      </span>
                    </Link>
                  ))}
                </div>
                <div className="dd-foot">
                  <span>End-to-end: design → build → launch</span>
                  <Link href="/services">Explore all services
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                  </Link>
                </div>
              </div>
            </li>

            <li className="menu-item-has-children">
              <Link href="/white-label" className={isActive(pathname, "/white-label") ? "active" : ""}>
                White-Label
                <svg className="dropdown-icon" width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </Link>
              <div className="bs-dropdown dd-products">
                <span className="dd-eyebrow">Ready-made products · launch under your brand</span>
                <div className="dd-grid">
                  {PRODUCTS.map((p) => (
                    <Link key={p.href} href={p.href} className={`dd-item ${p.tint}`}>
                      <span className="ic"><img src={p.img} alt="" loading="lazy" /></span>
                      <span className="tx">
                        <span className="t">{p.name}</span>
                        <span className="d">{p.desc}</span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </li>

            <li><Link href="/contact" className={isActive(pathname, "/contact") ? "active" : ""}>Contact Us</Link></li>
          </ul>
        </nav>

        <div className="header-actions">
          <Link href="/contact" className="btn-primary">Start a Project</Link>
        </div>

        <button className="mobile-menu-toggle" id="mobile-menu-toggle" aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
