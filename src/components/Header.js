"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

function isActive(pathname, href) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="container header-container">
        <Link href="/" className="site-logo">
          <img
            src="/brand/byteSquad-icon-tight.svg"
            alt=""
            style={{ height: "clamp(34px, 6vw, 44px)", width: "auto" }}
          />
          <img
            src="/brand/byteSquad-wordmark-tight.svg"
            alt="byteSquad"
            style={{ height: "clamp(21px, 4vw, 27px)", width: "auto" }}
          />
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
              <div className="mega-menu">
                <div className="mega-menu-container">
                  <div className="mega-column">
                    <div className="mega-col-header">
                      <Link className="mega-col-link" href="/services">Development</Link>
                      <button className="mega-col-toggle" type="button" aria-label="Toggle Development"></button>
                    </div>
                    <ul>
                      <li><Link href="/services#app">App Development</Link></li>
                      <li><Link href="/services#web">Web Development</Link></li>
                      <li><Link href="/services#backend">Backend Development</Link></li>
                      <li><Link href="/services#custom">Custom Software Development</Link></li>
                      <li><Link href="/services#wordpress">WordPress Development</Link></li>
                    </ul>
                  </div>
                  <div className="mega-column">
                    <div className="mega-col-header">
                      <Link className="mega-col-link" href="/services">Design & Commerce</Link>
                      <button className="mega-col-toggle" type="button" aria-label="Toggle Design & Commerce"></button>
                    </div>
                    <ul>
                      <li><Link href="/services#uiux">UI/UX Design</Link></li>
                      <li><Link href="/services#ecommerce">E-commerce Development</Link></li>
                    </ul>
                  </div>
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
              <div className="mega-menu">
                <div className="mega-menu-container">
                  <div className="mega-column">
                    <div className="mega-col-header">
                      <Link className="mega-col-link" href="/white-label">Ready-Made Apps</Link>
                      <button className="mega-col-toggle" type="button" aria-label="Toggle Ready-Made Apps"></button>
                    </div>
                    <ul>
                      <li><Link href="/white-label/taxi-app">Taxi App</Link></li>
                      <li><Link href="/white-label/ott-app">OTT / Streaming App</Link></li>
                      <li><Link href="/white-label/dating-app">Dating App</Link></li>
                    </ul>
                  </div>
                  <div className="mega-column">
                    <div className="mega-col-header">
                      <Link className="mega-col-link" href="/white-label">Software Products</Link>
                      <button className="mega-col-toggle" type="button" aria-label="Toggle Software Products"></button>
                    </div>
                    <ul>
                      <li><Link href="/white-label/crm">CRM</Link></li>
                      <li><Link href="/white-label/school">School Management Software</Link></li>
                      <li><Link href="/white-label/lms">LMS — Smart Learning</Link></li>
                    </ul>
                  </div>
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
