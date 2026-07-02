export const metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <main>
      {/* Inner Hero Section */}
      <section className="inner-hero" style={{ backgroundImage: "url('/images/about-us-bg.png')" }}>
        <div className="inner-hero-content">
          <h1 className="animate-fade-up" style={{ maxWidth: "900px", margin: "0 auto 1.5rem" }}>Learn more about byteSquad
            Advisors</h1>
          <p className="animate-fade-up delay-200" style={{ fontSize: "1.25rem", maxWidth: "700px", margin: "0 auto" }}>and
            our approach to corporate compliance and governance advisory.</p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="story-section">
        <div className="container story-grid">
          <div className="story-content animate-fade-up">
            <span className="about-subtitle">Who We Are</span>
            <h2>Advisory Support Built for Sustainable Growth</h2>
            <p style={{ textAlign: "justify" }}>byteSquad partners with businesses, startups, investors, and
              institutions to deliver advisory services in corporate compliance, governance, and regulatory
              matters.</p>
            <p style={{ textAlign: "justify" }}>We assist organizations in navigating regulatory requirements with
              clarity while strengthening internal frameworks that support sustainable and well-governed
              growth.</p>
            <p style={{ textAlign: "justify" }}>Our advisory is grounded in practicality, with a focus on delivering
              solutions that can be effectively implemented.</p>
          </div>
          <div className="story-image animate-fade-up delay-200">
            <img src="/images/about-us1.png" alt="byteSquad Story" />
          </div>
        </div>
      </section>

      {/* Vision / Mission / Founder Ideology */}
      <section className="ideology-section">
        <div className="container">
          <div className="ideology-grid">
            <div className="ideology-card">
              <h3>Our Vision</h3>
              <p>To become a trusted advisory partner within the startup and investment ecosystem by delivering structured, transparent, and growth-aligned legal and compliance solutions that empower businesses to scale with confidence.</p>
            </div>
            <div className="ideology-card">
              <h3>Our Mission</h3>
              <p>To support businesses, startups, investors, and institutions in navigating regulatory and compliance requirements with clarity and structure, while building strong governance frameworks that enable sustainable growth and informed decision-making.</p>
              <p>We are committed to delivering practical, implementation-oriented advisory that aligns legal and compliance processes with the evolving needs of businesses across their lifecycle.</p>
            </div>
            <div className="ideology-card">
              <h3>Founder’s Ideology</h3>
              <p className="ideology-subtitle">The Foundation of byteSquad</p>
              <p>byteSquad is built on the belief that strong businesses are not only driven by vision, but are sustained through clarity in decision-making, structured execution, and a deep commitment to integrity.</p>
              <p>From our experience of working closely with startups, founders, and institutional stakeholders, we have observed that many challenges faced by businesses are not due to a lack of opportunity, but due to gaps in structure, governance, and regulatory alignment.</p>
              <p>This understanding forms the foundation of our approach — where advisory goes beyond compliance and becomes an enabler of long-term growth, stability, and trust.</p>
              <blockquote>“Entrepreneurship thrives when supported by clarity, structure, and integrity.”</blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="team-section" id="team">
        <div className="container">
          <div className="section-header animate-fade-up">
            <h2>Meet Our Team</h2>
            <p className="section-subtitle">A team committed to structured and dependable advisory</p>
          </div>

          <div className="team-grid">
            {/* 1. Manju Bansal */}
            <div className="team-card animate-fade-up delay-100">
              <img src="/images/team-1.jpg" alt="Manju Bansal" loading="lazy" />
              <div className="team-info">
                <div className="team-info-header">
                  <h3>Manju Bansal</h3>
                  <a href="https://linkedin.com/in/manjubansal" target="_blank" className="linkedin-link">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path
                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
                <div className="team-meta">
                  <p className="designation">Founder</p>
                  <span className="qualification">CS, B.com(h), LLB</span>
                </div>
                <p className="team-desc">Strategic corporate advisory and governance leader.</p>
              </div>
            </div>

            {/* 2. Himanshu Yadav */}
            <div className="team-card animate-fade-up delay-200">
              <img src="/images/team-2.jpg" alt="Himanshu Yadav" loading="lazy" />
              <div className="team-info">
                <div className="team-info-header">
                  <h3>Himanshu Yadav</h3>
                  <a href="https://linkedin.com/in/himanshuyadav" target="_blank" className="linkedin-link">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path
                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
                <div className="team-meta">
                  <p className="designation">Associate</p>
                  <span className="qualification">Corporate Advisory</span>
                </div>
                <p className="team-desc">M&amp;A and corporate restructuring specialist.</p>
              </div>
            </div>

            {/* 3. Shubhi */}
            <div className="team-card animate-fade-up delay-300">
              <img src="/images/team-3.jpg" alt="Shubhi" loading="lazy" />
              <div className="team-info">
                <div className="team-info-header">
                  <h3>Shubhi</h3>
                  <a href="https://linkedin.com/in/shubhi" target="_blank" className="linkedin-link">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path
                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
                <div className="team-meta">
                  <p className="designation">Associate</p>
                  <span className="qualification">Legal Compliance</span>
                </div>
                <p className="team-desc">Regulatory filings and entity compliance expert.</p>
              </div>
            </div>

            {/* 4. Jayantika Garg */}
            <div className="team-card animate-fade-up delay-100">
              <img src="/images/team-4.jpg" alt="Jayantika Garg" loading="lazy" />
              <div className="team-info">
                <div className="team-info-header">
                  <h3>Jayantika Garg</h3>
                  <a href="https://linkedin.com/in/jayantikagarg" target="_blank" className="linkedin-link">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path
                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
                <div className="team-meta">
                  <p className="designation">Executive</p>
                  <span className="qualification">Secretarial Audits</span>
                </div>
                <p className="team-desc">Assisting in comprehensive corporate secretarial audits.</p>
              </div>
            </div>

            {/* 5. Ashwani Yadav */}
            <div className="team-card animate-fade-up delay-200">
              <img src="/images/team-5.jpg" alt="Ashwani Yadav" loading="lazy" />
              <div className="team-info">
                <div className="team-info-header">
                  <h3>Ashwani Yadav</h3>
                  <a href="https://linkedin.com/in/ashwaniyadav" target="_blank" className="linkedin-link">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path
                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
                <div className="team-meta">
                  <p className="designation">Senior Executive</p>
                  <span className="qualification">FDI/ODI Norms</span>
                </div>
                <p className="team-desc">Navigating complex FDI regulations and cross-border structuring.</p>
              </div>
            </div>

            {/* 6. Balister Gupta */}
            <div className="team-card animate-fade-up delay-300">
              <img src="/images/team-6.jpg" alt="Balister Gupta" loading="lazy" />
              <div className="team-info">
                <div className="team-info-header">
                  <h3>Balister Gupta</h3>
                  <a href="https://linkedin.com/in/balistergupta" target="_blank" className="linkedin-link">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path
                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
                <div className="team-meta">
                  <p className="designation">Executive</p>
                  <span className="qualification">Statutory Support</span>
                </div>
                <p className="team-desc">Supporting day-to-day statutory compliance operations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
