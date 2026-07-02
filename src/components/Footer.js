import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="container footer-grid">

          {/* Brand & Social */}
          <div className="footer-col brand-col">
            <Link href="/" className="footer-logo">
              <img
                src="/brand/byteSquad-logo-dark.svg"
                alt="byteSquad"
                style={{ height: "44px", width: "auto", background: "transparent", padding: 0 }}
              />
            </Link>
            <div className="footer-tagline-text">
              <span>Compliance</span>
              <span>Legal</span>
              <span>Advisory</span>
            </div>
            <div className="social-links">
              <a href="#" aria-label="LinkedIn" target="_blank">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram" target="_blank">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="#" aria-label="YouTube" target="_blank">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.14 1 12 1 12s0 3.86.46 5.58a2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.86 23 12 23 12s0-3.86-.46-5.58z" />
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
                </svg>
              </a>
            </div>
          </div>

          {/* Institutional Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="https://www.mca.gov.in/content/mca/global/en/home.html" target="_blank">MCA</a></li>
              <li><a href="https://www.incometax.gov.in/iec/foportal/" target="_blank">Income Tax</a></li>
              <li><a href="https://www.gst.gov.in/" target="_blank">GST</a></li>
              <li><a href="https://www.meity.gov.in/" target="_blank">MSH (Meity)</a></li>
              <li><a href="https://www.startupindia.gov.in/" target="_blank">Startup India</a></li>
              <li><a href="https://www.nsws.gov.in/" target="_blank">NSWS Portal</a></li>
              <li><a href="https://www.sebi.gov.in/" target="_blank">SEBI</a></li>
              <li><a href="https://www.rbi.org.in/" target="_blank">RBI</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-col contact-col">
            <h4 className="footer-heading">Contact Us</h4>
            <ul className="footer-contact-info">
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>
                  Paschim Vihar, New Delhi
                </span>
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a href="mailto:info@legisproadvisors.com">
                  info@legisproadvisors.com
                </a>
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a href="tel:+91 83683 83581">
                  +91 83683 83581
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <div className="footer-bottom-left">
            <p className="footer-bottom-copy">&copy; 2026 byteSquad. All rights reserved.</p>
          </div>
          <div className="footer-bottom-center">
            <p className="footer-bottom-dev">Developed By Neeraj Bhatt</p>
          </div>
          <div className="footer-bottom-right">
            <div className="footer-legal">
              <Link href="/privacy">Privacy Policy</Link>
              <span className="footer-sep">|</span>
              <Link href="/terms">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
