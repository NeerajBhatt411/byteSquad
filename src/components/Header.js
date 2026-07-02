"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

function isActive(pathname, href) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

function Ic({ children, size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}

const SERVICES = [
  { label: "App Development", desc: "iOS & Android · Flutter", href: "/services#app",
    icon: (<><rect x="5" y="2" width="14" height="20" rx="3" /><line x1="12" y1="18" x2="12.01" y2="18" /></>) },
  { label: "Web Development", desc: "React + Node.js", href: "/services#web",
    icon: (<><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3a15 15 0 0 1 0 18" /><path d="M12 3a15 15 0 0 0 0 18" /></>) },
  { label: "Backend Development", desc: "APIs & databases", href: "/services#backend",
    icon: (<><ellipse cx="12" cy="5.5" rx="8" ry="3" /><path d="M4 5.5v13c0 1.7 3.6 3 8 3s8-1.3 8-3v-13" /><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" /></>) },
  { label: "UI/UX Design", desc: "Figma, research → UI", href: "/services#uiux",
    icon: (<><path d="M12 20h9" /><path d="M16.5 3.5l4 4L7 21H3v-4L16.5 3.5z" /></>) },
  { label: "E-commerce", desc: "Stores built to sell", href: "/services#ecommerce",
    icon: (<><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></>) },
  { label: "Custom Software", desc: "Dashboards, tools, SaaS", href: "/services#custom",
    icon: (<><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></>) },
  { label: "WordPress", desc: "Themes, plugins & CMS", href: "/services#wordpress",
    icon: (<><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M3 9h18" /><path d="M9 21V9" /></>) },
];

const PRODUCTS = [
  { name: "Taxi App", desc: "Complete ride-hailing platform", href: "/white-label/taxi-app", tint: "p-taxi",
    icon: (<><path d="M5 11l1.4-4.2A2 2 0 0 1 8.3 5.4h7.4a2 2 0 0 1 1.9 1.4L19 11" /><path d="M4 11h16a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1z" /><path d="M6 16v2.5M18 16v2.5" /><circle cx="7.5" cy="13.5" r=".6" /><circle cx="16.5" cy="13.5" r=".6" /></>) },
  { name: "OTT / Streaming", desc: "Your own Netflix-style service", href: "/white-label/ott-app", tint: "p-ott",
    icon: (<><rect x="2" y="4" width="20" height="14" rx="3" /><polygon points="10 8.5 15.5 11 10 13.5" /><path d="M8 21h8" /></>) },
  { name: "Dating App", desc: "Swipe, match & real-time chat", href: "/white-label/dating-app", tint: "p-dating",
    icon: (<path d="M12 20.5S4 16 4 9.8C4 7 6 5.2 8.3 5.2c1.6 0 2.9 1 3.7 2.1.8-1.1 2.1-2.1 3.7-2.1C18 5.2 20 7 20 9.8 20 16 12 20.5 12 20.5z" />) },
  { name: "CRM", desc: "Leads, pipeline & customers", href: "/white-label/crm", tint: "p-crm",
    icon: (<><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>) },
  { name: "School Management", desc: "All-in-one school ERP", href: "/white-label/school", tint: "p-school",
    icon: (<><path d="M22 10 12 5 2 10l10 5 10-5z" /><path d="M6 12.5V17c0 1.1 2.7 2.5 6 2.5s6-1.4 6-2.5v-4.5" /><path d="M22 10v4" /></>) },
  { name: "LMS — Smart Learning", desc: "Courses, quizzes & certificates", href: "/white-label/lms", tint: "p-lms",
    icon: (<><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /><path d="M9 7h6" /></>) },
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
                      <span className="ic"><Ic>{s.icon}</Ic></span>
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
                      <span className="ic"><Ic size={22}>{p.icon}</Ic></span>
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
