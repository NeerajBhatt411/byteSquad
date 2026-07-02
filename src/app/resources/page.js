import Link from "next/link";

export const metadata = { title: "Resources" };

export default function ResourcesPage() {
  return (
    <main className="site-main">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1 className="animate-fade-up">Insights &amp; Resources</h1>
          <p className="animate-fade-up delay-100">Expert legal guidance, regulatory updates, and corporate governance
            insights.</p>
        </div>
      </section>

      {/* Resources Toolbar */}
      <section className="resources-toolbar-section">
        <div className="container toolbar-wrapper">
          <div className="search-box">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input type="text" id="resourceSearch" placeholder="Search by topic, keyword, or title..." />
          </div>
          <div className="sort-box">
            <span className="sort-label">Sort by:</span>
            <div className="custom-select-wrapper">
              <select id="resourceSort" className="form-select">
                <option value="recent">Recently Added</option>
                <option value="oldest">Oldest First</option>
                <option value="popular">Most Popular</option>
              </select>
              <svg className="select-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          </div>
        </div>

        <div className="container categories-wrapper">
          <button className="cat-pill active">All Insights</button>
          <button className="cat-pill">Compliance</button>
          <button className="cat-pill">Advisory</button>
          <button className="cat-pill">Corporate Law</button>
          <button className="cat-pill">Startups</button>
        </div>
      </section>

      {/* Main Grid Area */}
      <section className="resources-grid-section">
        <div className="container">
          <div className="blog-grid resources-grid" id="resourcesGrid">

            {/* Blog 1 */}
            <article className="blog-card animate-fade-up delay-100">
              <div className="blog-image-wrapper">
                <img src="/images/blog-1.jpg" alt="Compliance Update" loading="lazy" />
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-category">Compliance</span>
                  <span className="blog-date">March 14, 2026</span>
                </div>
                <h3 className="blog-title">Navigating New Regulatory Frameworks for Fast-Growing Startups</h3>
                <p className="blog-desc">An in-depth look at the upcoming changes to corporate compliance laws
                  and what founders need to prepare for.</p>
                <div className="blog-footer">
                  <Link href="/resources/sample-post" className="read-more">Read Article <svg width="24" height="24"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg></Link>
                </div>
              </div>
            </article>

            {/* Blog 2 */}
            <article className="blog-card animate-fade-up delay-200">
              <div className="blog-image-wrapper">
                <img src="/images/blog-2.jpg" alt="Advisory Update" loading="lazy" />
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-category">Advisory</span>
                  <span className="blog-date">March 08, 2026</span>
                </div>
                <h3 className="blog-title">Structuring Seed Rounds: A Guide for First-time Founders</h3>
                <p className="blog-desc">Discover how proper cap-table management and financial modeling can
                  safeguard your equity during early-stage funding.</p>
                <div className="blog-footer">
                  <Link href="/resources/sample-post" className="read-more">Read Article <svg width="24" height="24"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg></Link>
                </div>
              </div>
            </article>

            {/* Blog 3 */}
            <article className="blog-card animate-fade-up delay-300">
              <div className="blog-image-wrapper">
                <img src="/images/blog-1.jpg" alt="Corporate Law" loading="lazy" />
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-category">Corporate Law</span>
                  <span className="blog-date">February 22, 2026</span>
                </div>
                <h3 className="blog-title">Understanding Intellectual Property Rights for Tech Exits</h3>
                <p className="blog-desc">Safeguard your most valuable assets and maximize your valuation when
                  preparing your technology startup for an acquisition.</p>
                <div className="blog-footer">
                  <Link href="/resources/sample-post" className="read-more">Read Article <svg width="24" height="24"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg></Link>
                </div>
              </div>
            </article>

            {/* Blog 4 */}
            <article className="blog-card animate-fade-up delay-400">
              <div className="blog-image-wrapper">
                <img src="/images/blog-2.jpg" alt="Startup Law" loading="lazy" />
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-category">Startups</span>
                  <span className="blog-date">February 10, 2026</span>
                </div>
                <h3 className="blog-title">Co-founder Agreements: Why You Need Them Right Now</h3>
                <p className="blog-desc">Disputes between co-founders are common. Learn how a solid founders'
                  agreement can save your business from early collapse.</p>
                <div className="blog-footer">
                  <Link href="/resources/sample-post" className="read-more">Read Article <svg width="24" height="24"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg></Link>
                </div>
              </div>
            </article>

            {/* Blog 5 */}
            <article className="blog-card animate-fade-up delay-100">
              <div className="blog-image-wrapper">
                <img src="/images/blog-1.jpg" alt="FDI Advisory" loading="lazy" />
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-category">Advisory</span>
                  <span className="blog-date">January 28, 2026</span>
                </div>
                <h3 className="blog-title">Foreign Direct Investment Regulations Explained</h3>
                <p className="blog-desc">A comprehensive breakdown of the new inbound FDI regulations and how
                  overseas capital must be structured going forward.</p>
                <div className="blog-footer">
                  <Link href="/resources/sample-post" className="read-more">Read Article <svg width="24" height="24"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg></Link>
                </div>
              </div>
            </article>

            {/* Blog 6 */}
            <article className="blog-card animate-fade-up delay-200">
              <div className="blog-image-wrapper">
                <img src="/images/blog-2.jpg" alt="Secretarial Audit" loading="lazy" />
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-category">Compliance</span>
                  <span className="blog-date">January 15, 2026</span>
                </div>
                <h3 className="blog-title">Secretarial Audits: Beyond the Checkboxes</h3>
                <p className="blog-desc">Stop viewing Secretarial Audits as just a compliance chore. Understand
                  how they actually improve corporate health and valuation.</p>
                <div className="blog-footer">
                  <Link href="/resources/sample-post" className="read-more">Read Article <svg width="24" height="24"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg></Link>
                </div>
              </div>
            </article>

          </div>

          {/* Pagination */}
          <div className="pagination-wrapper animate-fade-up delay-300">
            <button className="page-btn active">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">3</button>
            <button className="page-btn next">Next &raquo;</button>
          </div>
        </div>
      </section>

      {/* Additional Resources UI Styles */}
      <style>{`
            body.contact-page-wrapper {
                background-color: #F8FAFC !important;
            }

            /* Resources Hero */
            .contact-hero {
                background-color: #0B0F19;
                background-image: url('/images/premium-contact-hero.png');
                background-size: cover;
                background-position: center;
                height: 35vh;
                min-height: 250px;
                display: flex;
                align-items: center;
                color: white;
                text-align: center;
            }

            .contact-hero-content {
                max-width: 1440px;
                margin: 0 auto;
                padding: 0 5%;
                width: 100%;
            }

            .contact-hero h1 {
                font-size: 2rem;
                font-weight: 800;
                margin-bottom: 1rem;
            }

            .contact-hero p {
                font-size: 1.15rem;
                opacity: 0.9;
                max-width: 600px;
                line-height: 1.6;
                margin: 0 auto;
            }

            /* Toolbar Area */
            .resources-toolbar-section {
                background: #ffffff;
                border-bottom: 1px solid #E5E7EB;
                padding: 2rem 0;
            }

            .toolbar-wrapper {
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 2rem;
                margin-bottom: 1.5rem;
            }

            /* Search Box */
            .search-box {
                position: relative;
                flex: 1;
                max-width: 500px;
            }

            .search-box svg {
                position: absolute;
                left: 1rem;
                top: 50%;
                transform: translateY(-50%);
                color: #9CA3AF;
            }

            .search-box input {
                width: 100%;
                padding: 1rem 1rem 1rem 3rem;
                border: 1px solid #D1D5DB;
                border-radius: 12px;
                font-size: 1rem;
                color: #111827;
                transition: all 0.3s ease;
                font-family: var(--font-main);
            }

            .search-box input:focus {
                outline: none;
                border-color: #3B82F6;
                box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
            }

            /* Sort Box */
            .sort-box {
                display: flex;
                align-items: center;
                gap: 1rem;
            }

            .sort-label {
                color: #6B7280;
                font-weight: 500;
                font-size: 0.95rem;
            }

            .custom-select-wrapper {
                position: relative;
                min-width: 180px;
            }

            .custom-select-wrapper select {
                width: 100%;
                appearance: none;
                padding: 0.8rem 2.5rem 0.8rem 1rem;
                border: 1px solid #D1D5DB;
                border-radius: 8px;
                font-size: 0.95rem;
                font-family: inherit;
                color: #111827;
                background: #ffffff;
                cursor: pointer;
            }

            .custom-select-wrapper select:focus {
                outline: none;
                border-color: #3B82F6;
            }

            .select-arrow {
                position: absolute;
                right: 1rem;
                top: 50%;
                transform: translateY(-50%);
                color: #6B7280;
                pointer-events: none;
            }

            /* Categories Pills */
            .categories-wrapper {
                display: flex;
                flex-wrap: wrap;
                gap: 0.75rem;
            }

            .cat-pill {
                background: #F3F4F6;
                color: #4B5563;
                border: none;
                padding: 0.6rem 1.2rem;
                border-radius: 20px;
                font-size: 0.9rem;
                font-weight: 500;
                cursor: pointer;
                transition: all 0.2s ease;
                font-family: var(--font-main);
            }

            .cat-pill:hover {
                background: #E5E7EB;
                color: #111827;
            }

            .cat-pill.active {
                background: #3B82F6;
                color: white;
            }

            /* Main Grid Section */
            .resources-grid-section {
                padding: 4rem 0 6rem;
                background: #F8FAFC;
            }

            /* Pagination */
            .pagination-wrapper {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 0.5rem;
                margin-top: 4rem;
            }

            .page-btn {
                width: 40px;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                border: 1px solid #D1D5DB;
                background: white;
                color: #374151;
                border-radius: 8px;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.2s ease;
                font-family: var(--font-main);
            }

            .page-btn:hover {
                border-color: #3B82F6;
                color: #3B82F6;
            }

            .page-btn.active {
                background: #3B82F6;
                border-color: #3B82F6;
                color: white;
            }

            .page-btn.next {
                width: auto;
                padding: 0 1.25rem;
            }

            @media (max-width: 768px) {
                .toolbar-wrapper {
                    flex-direction: column;
                    align-items: flex-start;
                }

                .search-box,
                .sort-box,
                .custom-select-wrapper {
                    width: 100%;
                    max-width: 100%;
                }

                .contact-hero {
                    padding: 0 1rem;
                    text-align: center;
                }

                .contact-hero h1 {
                    font-size: 2.5rem;
                }
            }
      `}</style>
    </main>
  );
}
