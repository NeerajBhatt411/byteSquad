"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

function isActive(pathname, href) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

const SERVICES = [
  { label: "App Development", href: "/services#app" },
  { label: "Web Development", href: "/services#web" },
  { label: "Backend Development", href: "/services#backend" },
  { label: "UI/UX Design", href: "/services#uiux" },
  { label: "E-commerce", href: "/services#ecommerce" },
  { label: "Custom Software", href: "/services#custom" },
  { label: "WordPress", href: "/services#wordpress" },
];

const PRODUCTS = [
  { name: "Taxi App", desc: "Ride-hailing platform", href: "/white-label/taxi-app",
    icon: (<><path d="M5 11l1.4-4.2A2 2 0 0 1 8.3 5.4h7.4a2 2 0 0 1 1.9 1.4L19 11" /><path d="M4 11h16v5H4z" /><path d="M6 16v2M18 16v2" /><circle cx="7.5" cy="13.5" r=".8" /><circle cx="16.5" cy="13.5" r=".8" /></>) },
  { name: "OTT / Streaming", desc: "Your own video service", href: "/white-label/ott-app",
    icon: (<><circle cx="12" cy="12" r="9" /><polygon points="10 8.5 16 12 10 15.5" /></>) },
  { name: "Dating App", desc: "Matchmaking + chat", href: "/white-label/dating-app",
    icon: (<path d="M12 20.5S4 16 4 9.8C4 7 6 5.2 8.3 5.2c1.6 0 2.9 1 3.7 2.1.8-1.1 2.1-2.1 3.7-2.1C18 5.2 20 7 20 9.8 20 16 12 20.5 12 20.5z" />) },
  { name: "CRM", desc: "Leads, deals & customers", href: "/white-label/crm",
    icon: (<><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>) },
  { name: "School Management", desc: "All-in-one school ERP", href: "/white-label/school",
    icon: (<><path d="M22 10 12 5 2 10l10 5 10-5z" /><path d="M6 12v5c0 1 2.7 2 6 2s6-1 6-2v-5" /></>) },
  { name: "LMS — Smart Learning", desc: "Online course platform", href: "/white-label/lms",
    icon: (<><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></>) },
];

function ProdIcon({ children }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}

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
                <ul>
                  {SERVICES.map((s) => (
                    <li key={s.href}>
                      <Link href={s.href}><span className="dot"></span>{s.label}</Link>
                    </li>
                  ))}
                </ul>
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
                <span className="dd-eyebrow">Ready-made products, launch under your brand</span>
                <div className="row">
                  {PRODUCTS.map((p) => (
                    <Link key={p.href} href={p.href}>
                      <span className="ic"><ProdIcon>{p.icon}</ProdIcon></span>
                      <span>
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
