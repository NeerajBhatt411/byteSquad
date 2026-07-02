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
            src="/brand/byteSquad-logo.svg"
            alt="byteSquad"
            style={{ height: "clamp(34px, 6.5vw, 48px)", width: "auto" }}
          />
        </Link>

        <nav className="main-navigation" id="site-navigation">
          <div className="mobile-menu-header">
            <Link href="/" className="mobile-menu-brand">
              <img src="/brand/byteSquad-logo.svg" alt="byteSquad" style={{ height: "42px", width: "auto" }} />
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
                      <Link className="mega-col-link" href="/services#startup">Startup & Growth</Link>
                      <button className="mega-col-toggle" type="button" aria-label="Toggle Startup & Growth"></button>
                    </div>
                    <ul>
                      <li><Link href="/services#structuring">Entity Structuring & Formation</Link></li>
                      <li><Link href="/services#agreements">Agreements & Contracts</Link></li>
                      <li><Link href="/services#funding">Funding & Investment Support</Link></li>
                      <li><Link href="/services#posh">POSH Compliance</Link></li>
                      <li><Link href="/services#registrations">Central & State Regulatory Registrations</Link></li>
                      <li><Link href="/services#esop">ESOP Advisory & Structuring</Link></li>
                      <li><Link href="/services#demat">ISIN Procurement & Dematerialisation</Link></li>
                      <li><Link href="/services#accounting">Accounting, Taxation & GST Advisory</Link></li>
                    </ul>
                  </div>
                  <div className="mega-column">
                    <div className="mega-col-header">
                      <Link className="mega-col-link" href="/services#corporate">Corporate & Regulatory</Link>
                      <button className="mega-col-toggle" type="button" aria-label="Toggle Corporate & Regulatory"></button>
                    </div>
                    <ul>
                      <li><Link href="/services#secretarial">Secretarial Audit</Link></li>
                      <li><Link href="/services#roc">ROC Filings & Annual Compliance</Link></li>
                      <li><Link href="/services#governance">Secretarial & Governance Advisory</Link></li>
                      <li><Link href="/services#fema">FEMA Advisory</Link></li>
                      <li><Link href="/services#fdi">Foreign Direct Investment (FDI)</Link></li>
                      <li><Link href="/services#overseas">Overseas Investment</Link></li>
                      <li><Link href="/services#ecb">External Commercial Borrowing (ECB)</Link></li>
                      <li><Link href="/services#rbi-reporting">RBI Reporting</Link></li>
                      <li><Link href="/services#labour">Labour Law Compliance</Link></li>
                      <li><Link href="/services#tax">Income Tax & TDS Compliance</Link></li>
                    </ul>
                  </div>
                  <div className="mega-column">
                    <div className="mega-col-header">
                      <Link className="mega-col-link" href="/services#investor">Investor & Institutional</Link>
                      <button className="mega-col-toggle" type="button" aria-label="Toggle Investor & Institutional"></button>
                    </div>
                    <ul>
                      <li><Link href="/services#program">End-to-End Program Management</Link></li>
                      <li><Link href="/services#agreements-inst">Transaction Agreements</Link></li>
                      <li><Link href="/services#portfolio">Portfolio Management Advisory</Link></li>
                      <li><Link href="/services#due-diligence">Due Diligence Support</Link></li>
                      <li><Link href="/services#oversight">Portfolio Company Compliance Oversight</Link></li>
                      <li><Link href="/services#exit">Exit Strategy Advisory</Link></li>
                      <li><Link href="/services#workshops">Capacity Building Workshops</Link></li>
                      <li><Link href="/services#virtual-data-room">Virtual Data Room Advisory</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li><Link href="/resources" className={isActive(pathname, "/resources") ? "active" : ""}>Resources</Link></li>
            <li><Link href="/contact" className={isActive(pathname, "/contact") ? "active" : ""}>Contact Us</Link></li>
          </ul>
        </nav>

        <div className="header-actions">
          <Link href="/contact" className="btn-primary">Book Consultation</Link>
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
