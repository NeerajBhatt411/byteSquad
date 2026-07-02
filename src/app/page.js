import Link from "next/link";

export const metadata = { title: "Home" };

export default function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h2 className="animate-fade-up">Where Governance<br />Meets Growth</h2>
          <p className="animate-fade-up delay-200">Helping Businesses Navigate Complex Legal and Regulatory Landscapes</p>
          <Link href="/services" className="btn-primary btn-large animate-fade-up delay-400">Explore Services</Link>
        </div>
      </section>

      <section className="about-section">
        <div className="container about-container">
          <div className="about-image animate-fade-up">
            <div className="video-wrapper-responsive">
              <iframe src="/videos/final-video.html" allowFullScreen scrolling="no" style={{ border: "none" }}
                title="Legispro Advisors Corporate Video">
              </iframe>
            </div>
          </div>            <div className="about-content">
            <span className="about-subtitle animate-fade-up">Who We Are</span>
            <h2 className="animate-fade-up delay-100">About Legispro Advisors</h2>
            <p className="animate-fade-up delay-200">Legispro Advisors partners with
              businesses, startups, investors, and institutions to deliver advisory services in corporate
              compliance, governance, and regulatory matters.</p>
            <p className="animate-fade-up delay-300">We assist organizations in navigating
              regulatory requirements with clarity while strengthening internal frameworks that support
              sustainable and well-governed growth.</p>
            <p className="animate-fade-up delay-400">Our advisory is grounded in
              practicality, with a focus on delivering solutions that can be effectively implemented.</p>

            <div className="about-actions animate-fade-up delay-500">
              <Link href="/about-us" className="btn-primary btn-large">More About Us</Link>
            </div>
          </div>        </div>
      </section>

      <section className="support-section">
        <div className="container">
          <div className="support-header animate-fade-up">
            <h2>How We Support Businesses</h2>
            <p className="support-subtitle">Support across every stage of business journey</p>
            <p>Each stage presents distinct challenges. Our role is to help businesses address them with clarity, structure, and practical execution.</p>
          </div>

          <div className="support-grid">
            {/* Formation */}
            <div className="support-card animate-fade-up delay-100">
              <div className="support-card-image">
                <img src="/images/formation-meeting.jpg" alt="Formation" loading="lazy" />
              </div>
              <div className="support-card-header">
                <div className="support-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                    <polyline points="2 17 12 22 22 17"></polyline>
                    <polyline points="2 12 12 17 22 12"></polyline>
                  </svg>
                </div>
                <h3>Formation</h3>
              </div>
              <div className="support-card-body">
                <p><strong>The Challenge</strong> Choosing the right structure and setting up compliant
                  foundations can be unclear at the start.</p>
                <p><strong className="solution">How We Support</strong> We help establish a legally sound, scalable
                  structure aligned with future business goals.</p>
              </div>
            </div>                {/* Compliance */}
            <div className="support-card animate-fade-up delay-200">
              <div className="support-card-image">
                <img src="/images/pillar-2.jpg" alt="Compliance" loading="lazy" />
              </div>
              <div className="support-card-header">
                <div className="support-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h3>Compliance</h3>
              </div>
              <div className="support-card-body">
                <p><strong>The Challenge</strong> Ongoing filings and governance requirements can become
                  fragmented over time.</p>
                <p><strong className="solution">How We Support</strong> We create structured compliance systems and
                  provide practical ongoing advisory support.</p>
              </div>
            </div>                {/* Investment */}
            <div className="support-card animate-fade-up delay-300">
              <div className="support-card-image">
                <img src="/images/pillar-3.jpg" alt="Investment" loading="lazy" />
              </div>
              <div className="support-card-header">
                <div className="support-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="1" x2="12" y2="23"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </div>
                <h3>Investment</h3>
              </div>
              <div className="support-card-body">
                <p><strong>The Challenge</strong> Fundraising involves complex documentation and regulatory
                  requirements.</p>
                <p><strong className="solution">How We Support</strong> We support transaction structuring,
                  documentation review, and regulatory readiness.</p>
              </div>
            </div>

            {/* Growth */}
            <div className="support-card animate-fade-up delay-400">
              <div className="support-card-image">
                <img src="/images/blog-2.jpg" alt="Growth" loading="lazy" />
              </div>
              <div className="support-card-header">
                <div className="support-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 2 17"></polyline>
                    <polyline points="16 7 22 7 22 13"></polyline>
                  </svg>
                </div>
                <h3>Growth</h3>
              </div>
              <div className="support-card-body">
                <p><strong>The Challenge</strong> As the business scales, regulatory complexity and governance
                  expectations increase.</p>
                <p><strong className="solution">How We Support</strong> We strengthen governance frameworks and
                  align compliance with growth strategies.</p>
              </div>
            </div>

            {/* Exit */}
            <div className="support-card animate-fade-up delay-500">
              <div className="support-card-image">
                <img src="/images/exit-preview.jpg" alt="Exit" loading="lazy" />
              </div>
              <div className="support-card-header">
                <div className="support-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path
                      d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z">
                    </path>
                  </svg>
                </div>
                <h3>Exit</h3>
              </div>
              <div className="support-card-body">
                <p><strong>The Challenge</strong> Acquisitions, strategic sales, and IPOs require careful
                  preparation and readiness.</p>
                <p><strong className="solution">How We Support</strong> We help prepare for exit events through
                  structured advisory and compliance support.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Who We Work With Section */}
      <section className="clients-section">
        <div className="container">
          <div className="section-header animate-fade-up">
            <h2>Who We Work With</h2>
            <p className="section-subtitle">Supporting diverse stakeholders across the ecosystem</p>
          </div>

          <div className="clients-grid">
            {/* Startups */}
            <div className="client-card animate-fade-up delay-100">
              <div className="client-number">01</div>
              <h3>Startups</h3>
            </div>

            {/* Incubators & Accelerators */}
            <div className="client-card animate-fade-up delay-200">
              <div className="client-number">02</div>
              <h3>Incubators & Accelerators</h3>
            </div>

            {/* Founders */}
            <div className="client-card animate-fade-up delay-300">
              <div className="client-number">03</div>
              <h3>Founders</h3>
            </div>

            {/* Investors */}
            <div className="client-card animate-fade-up delay-400">
              <div className="client-number">04</div>
              <h3>Investors</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us-section">
        <div className="container relative z-10">
          <div className="section-header animate-fade-up">
            <h2>Why Choose Us</h2>
            <p className="section-subtitle">Advisory built on clarity, execution, and alignment</p>
          </div>

          <div className="why-choose-grid">
            {/* 1. Clarity */}
            <div className="why-choose-card animate-fade-up delay-100">
              <div className="why-choose-content">
                <div className="why-choose-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
                  </svg>
                </div>
                <h3>Clarity in Complexity</h3>
                <div className="why-choose-card-body">
                  <p><strong>The Difference</strong> Regulatory frameworks can often appear complex
                    and fragmented, making decision-making difficult.</p>
                  <p><strong>How We Add Value</strong> We translate requirements into clear, structured,
                    and actionable guidance.</p>
                </div>
              </div>
            </div>

            {/* 2. Execution */}
            <div className="why-choose-card animate-fade-up delay-200">
              <div className="why-choose-content">
                <div className="why-choose-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                  </svg>
                </div>
                <h3>Execution-Focused Advisory</h3>
                <div className="why-choose-card-body">
                  <p><strong>The Difference</strong> Advisory often remains theoretical, creating a gap
                    between understanding and execution.</p>
                  <p><strong>How We Add Value</strong> We ensure every recommendation is practical and
                    implementation-ready.</p>
                </div>
              </div>
            </div>

            {/* 3. Alignment */}
            <div className="why-choose-card animate-fade-up delay-300">
              <div className="why-choose-content">
                <div className="why-choose-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10"></line>
                    <line x1="12" y1="20" x2="12" y2="4"></line>
                    <line x1="6" y1="20" x2="6" y2="14"></line>
                  </svg>
                </div>
                <h3>Growth & Investor Alignment</h3>
                <div className="why-choose-card-body">
                  <p><strong>The Difference</strong> Misalignment between founders, investors, and
                    compliance can create long-term issues.</p>
                  <p><strong>How We Add Value</strong> We align business objectives with investor
                    expectations and regulatory requirements.</p>
                </div>
              </div>
            </div>

            {/* 4. Partnership */}
            <div className="why-choose-card animate-fade-up delay-400">
              <div className="why-choose-content">
                <div className="why-choose-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3>Long-Term Partnership</h3>
                <div className="why-choose-card-body">
                  <p><strong>The Difference</strong> Many advisory engagements lack continuity and
                    long-term perspective.</p>
                  <p><strong>How We Add Value</strong> We act as extended advisors, supporting businesses
                    across stages with consistency.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Latest Insights / Blogs Section */}
      <section className="blogs-section">
        <div className="container relative z-10">
          <div className="section-header text-center animate-fade-up">
            <h2>Latest Insights</h2>
            <p className="section-subtitle">Thoughtful perspectives on compliance, governance, transactions, and the evolving regulatory landscape.</p>
          </div>

          <div className="blog-grid">
            {/* Blog 1 */}
            <article className="blog-card animate-fade-up delay-200">
              <div className="blog-image-wrapper">
                <img src="/images/blog-1.jpg" alt="Legal Compliance 2026" loading="lazy" />
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-category">Compliance</span>
                  <span className="blog-date">March 14, 2026</span>
                </div>
                <h3 className="blog-title">Navigating New Regulatory Frameworks for Fast-Growing Startups</h3>
                <p className="blog-desc">An in-depth look at the upcoming changes to corporate compliance laws and
                  what founders need to prepare for the next fiscal year to avoid penalties.</p>
                <div className="blog-footer">
                  <Link href="/resources/sample-post" className="read-more">Read Article
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                      strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                </div>
              </div>
            </article>

            {/* Blog 2 */}
            <article className="blog-card animate-fade-up delay-400">
              <div className="blog-image-wrapper">
                <img src="/images/blog-2.jpg" alt="Financial Advisory" loading="lazy" />
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-category">Advisory</span>
                  <span className="blog-date">March 08, 2026</span>
                </div>
                <h3 className="blog-title">Structuring Seed Rounds: A Guide for First-time Founders</h3>
                <p className="blog-desc">Securing investment is just the beginning. Discover how proper cap-table
                  management and financial modeling can safeguard your equity during early-stage funding.</p>
                <div className="blog-footer">
                  <Link href="/resources/sample-post" className="read-more">Read Article
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                      strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          </div>

          {/* CTA Grid Action */}
          <div className="blog-cta animate-fade-up delay-600">
            <Link href="/resources" className="btn-primary">View All Insights</Link>
          </div>
        </div>
      </section>
    </>
  );
}
