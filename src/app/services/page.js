export const metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <main id="primary" className="site-main services-page">
      {/* Services Hero Section */}
      <section className="services-hero">
        <div className="container">
          <h1 className="hero-title">Our Services</h1>
          <p className="hero-subtitle">Comprehensive advisory across corporate compliance, startup growth, and
            institutional engagement.</p>
        </div>
      </section>

      <section className="services-detailed">
        <div className="container">
          {/* Startup & Growth */}
          <div className="services-group" id="startup">
            <header className="services-group-header">
              <h2>Startup &amp; Growth</h2>
              <p>Advisory for businesses building their foundation and preparing for scale</p>
            </header>

            <div className="services-cards">
              <article className="service-card-detailed" id="structuring">
                <h3>Entity Structuring &amp; Formation</h3>
                <p className="service-card-subtitle">Your First Step Towards Business Success</p>
                <p className="service-card-desc">Beginning your entrepreneurial journey with the right legal structure is crucial for your business&#x27;s success and scalability.</p>
                <button className="service-card-toggle" type="button" aria-expanded="false">
                  <span>Services Include:</span>
                  <span className="service-card-chevron" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 15 12 9 18 15" />
                    </svg>
                  </span>
                </button>
                <ul className="service-card-list">
                  <li>Advisory on selection of appropriate business structure aligned with objectives</li>
                  <li>Incorporation planning and execution across relevant entity types</li>
                  <li>Drafting and review of constitutional documents</li>
                  <li>Capital structuring and shareholding design considerations</li>
                  <li>Structuring aligned with regulatory, operational, and investor requirements</li>
                </ul>
              </article>

              <article className="service-card-detailed" id="agreements">
                <h3>Agreements &amp; Contracts</h3>
                <p className="service-card-subtitle">Securing Your Business&#x27;s Future</p>
                <p className="service-card-desc">Contracts form the backbone of your business, governing relationships with vendors, customers, and employees.</p>
                <button className="service-card-toggle" type="button" aria-expanded="false">
                  <span>Services Include:</span>
                  <span className="service-card-chevron" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 15 12 9 18 15" />
                    </svg>
                  </span>
                </button>
                <ul className="service-card-list">
                  <li>Shareholder agreements</li>
                  <li>Founder agreement</li>
                  <li>Employment agreement &amp; NDA</li>
                  <li>Internship agreement</li>
                  <li>Freelance agreement</li>
                  <li>Partnership agreement</li>
                  <li>LLP agreement</li>
                  <li>Vendor agreement</li>
                  <li>Software agreement</li>
                  <li>Joint Venture agreement</li>
                  <li>NDA</li>
                  <li>Vetting of legal documents</li>
                </ul>
              </article>

              <article className="service-card-detailed" id="funding">
                <h3>Funding &amp; Investment Support</h3>
                <p className="service-card-subtitle">Navigating Your Path to Growth</p>
                <p className="service-card-desc">Fundraising is a pivotal moment in a startup&#x27;s lifecycle. We guide startups through the complexities of securing investments.</p>
                <button className="service-card-toggle" type="button" aria-expanded="false">
                  <span>Services Include:</span>
                  <span className="service-card-chevron" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 15 12 9 18 15" />
                    </svg>
                  </span>
                </button>
                <ul className="service-card-list">
                  <li>Structuring of fundraising transactions aligned with business and investor expectations</li>
                  <li>Drafting and review of investment documentation and term sheets</li>
                  <li>Investor-readiness from a legal and governance perspective</li>
                  <li>Regulatory compliance support for capital infusion</li>
                  <li>End-to-end legal support across the investment lifecycle</li>
                </ul>
              </article>

              <article className="service-card-detailed" id="posh">
                <h3>POSH Compliance</h3>
                <p className="service-card-subtitle">Ensuring a Safe &amp; Respectful Workplace</p>
                <p className="service-card-desc">Maintaining a safe and inclusive workplace is not just a legal requirement but a fundamental responsibility.</p>
                <button className="service-card-toggle" type="button" aria-expanded="false">
                  <span>Services Include:</span>
                  <span className="service-card-chevron" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 15 12 9 18 15" />
                    </svg>
                  </span>
                </button>
                <ul className="service-card-list">
                  <li>Drafting and implementation of POSH policies and frameworks</li>
                  <li>Constitution and guidance on Internal Committee requirements</li>
                  <li>Advisory on compliance obligations and reporting requirements</li>
                  <li>Support in documentation and procedural alignment</li>
                  <li>Ongoing advisory on workplace compliance and governance practices</li>
                </ul>
              </article>

              <article className="service-card-detailed" id="registrations">
                <h3>Central &amp; State Regulatory Registrations</h3>
                <p className="service-card-subtitle">Simplifying Statutory Registrations &amp; Compliance</p>
                <p className="service-card-desc">Obtaining timely registrations and maintaining statutory compliance is essential for smooth business operations.</p>
                <button className="service-card-toggle" type="button" aria-expanded="false">
                  <span>Services Include:</span>
                  <span className="service-card-chevron" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 15 12 9 18 15" />
                    </svg>
                  </span>
                </button>
                <ul className="service-card-list">
                  <li>Identification of applicable registrations and licensing requirements</li>
                  <li>Advisory on sector-specific regulatory approvals</li>
                  <li>Preparation and review of application documentation</li>
                  <li>Representation and follow-up with relevant authorities</li>
                  <li>Support aligned with operational and compliance requirements</li>
                </ul>
              </article>

              <article className="service-card-detailed" id="esop">
                <h3>ESOP Advisory &amp; Structuring</h3>
                <p className="service-card-subtitle">Designing Effective Employee Ownership Frameworks</p>
                <p className="service-card-desc">Employee Stock Option Plans (ESOPs) are powerful tools for attracting, retaining, and rewarding key talent.</p>
                <button className="service-card-toggle" type="button" aria-expanded="false">
                  <span>Services Include:</span>
                  <span className="service-card-chevron" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 15 12 9 18 15" />
                    </svg>
                  </span>
                </button>
                <ul className="service-card-list">
                  <li>Structuring of ESOP schemes aligned with business strategy</li>
                  <li>Drafting of ESOP policy, grant letters, and related documentation</li>
                  <li>Advisory on vesting structures and employee participation</li>
                  <li>Governance and compliance alignment under applicable laws</li>
                  <li>Ongoing support for implementation and administration</li>
                </ul>
              </article>
              <article className="service-card-detailed" id="demat">
                <h3>ISIN Procurement &amp; Dematerialisation</h3>
                <p className="service-card-subtitle">Ensuring Regulatory Compliance in Digital Securities</p>
                <p className="service-card-desc">With increasing regulatory emphasis on dematerialisation of securities, companies must align with SEBI and MCA mandates.</p>
                <button className="service-card-toggle" type="button" aria-expanded="false">
                  <span>Services Include:</span>
                  <span className="service-card-chevron" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 15 12 9 18 15" />
                    </svg>
                  </span>
                </button>
                <ul className="service-card-list">
                  <li>Advisory on dematerialisation requirements and process framework</li>
                  <li>Coordination with depositories and intermediaries</li>
                  <li>ISIN application and compliance support</li>
                  <li>Alignment of corporate records with demat structure</li>
                  <li>Ongoing support for demat-related compliance requirements</li>
                </ul>
              </article>
              <article className="service-card-detailed" id="accounting">
                <h3>Accounting, Taxation &amp; GST Advisory</h3>
                <p className="service-card-subtitle">Integrated Financial &amp; Indirect Tax Solutions</p>
                <p className="service-card-desc">Accurate financial management and proactive tax advisory are essential for sustainable business growth.</p>
                <button className="service-card-toggle" type="button" aria-expanded="false">
                  <span>Services Include:</span>
                  <span className="service-card-chevron" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 15 12 9 18 15" />
                    </svg>
                  </span>
                </button>
                <ul className="service-card-list">
                  <li>Advisory and coordination across accounting processes and frameworks</li>
                  <li>Support on tax compliance and regulatory requirements</li>
                  <li>Structuring aligned with financial reporting needs</li>
                  <li>Review of documentation and filings</li>
                  <li>Ongoing support for maintaining financial and tax discipline</li>
                </ul>
              </article>
            </div>
          </div>

          {/* Corporate & Regulatory */}
          <div className="services-group" id="corporate">
            <header className="services-group-header">
              <h2>Corporate &amp; Regulatory</h2>
              <p>Advisory across ongoing compliance, governance, and regulatory matters that require structured and disciplined execution.</p>
            </header>

            <div className="services-cards">

              <article className="service-card-detailed" id="secretarial">
                <h3>Secretarial Audit</h3>
                <p className="service-card-subtitle">Strengthening Compliance Through Structured Review</p>
                <p className="service-card-desc">Periodic evaluation of secretarial records ensures regulatory alignment and strengthens governance practices.</p>
                <button className="service-card-toggle" type="button" aria-expanded="false">
                  <span>Services Include:</span>
                  <span className="service-card-chevron" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 15 12 9 18 15" />
                    </svg>
                  </span>
                </button>
                <ul className="service-card-list">
                  <li>Conduct and support of secretarial audit processes</li>
                  <li>Review of statutory records and corporate documentation</li>
                  <li>Identification of compliance gaps and risk areas</li>
                  <li>Advisory on corrective actions and governance improvements</li>
                  <li>Alignment with Secretarial Standards and Companies Act requirements</li>
                </ul>
              </article>

              <article className="service-card-detailed" id="roc">
                <h3>ROC Filings &amp; Annual Compliance</h3>
                <p className="service-card-subtitle">Ensuring Timely and Accurate Regulatory Filings</p>
                <p className="service-card-desc">Consistent compliance with ROC requirements is essential for maintaining corporate standing and avoiding penalties.</p>
                <button className="service-card-toggle" type="button" aria-expanded="false">
                  <span>Services Include:</span>
                  <span className="service-card-chevron" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 15 12 9 18 15" />
                    </svg>
                  </span>
                </button>
                <ul className="service-card-list">
                  <li>Preparation and filing of annual and event-based returns</li>
                  <li>Maintenance and updating of statutory registers and records</li>
                  <li>Drafting of board and shareholder documentation</li>
                  <li>Compliance tracking aligned with statutory timelines</li>
                  <li>Ongoing advisory on corporate compliance requirements</li>
                </ul>
              </article>

              <article className="service-card-detailed" id="governance">
                <h3>Secretarial &amp; Governance Advisory</h3>
                <p className="service-card-subtitle">Building Strong Governance Frameworks</p>
                <p className="service-card-desc">Effective governance structures enhance accountability, transparency, and decision-making processes.</p>
                <button className="service-card-toggle" type="button" aria-expanded="false">
                  <span>Services Include:</span>
                  <span className="service-card-chevron" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 15 12 9 18 15" />
                    </svg>
                  </span>
                </button>
                <ul className="service-card-list">
                  <li>Advisory on governance structures and board processes</li>
                  <li>Drafting and review of governance policies and frameworks</li>
                  <li>Secretarial documentation aligned with regulatory standards</li>
                  <li>Strengthening of internal governance mechanisms</li>
                  <li>Ongoing support aligned with evolving business requirements</li>
                </ul>
              </article>

              <article className="service-card-detailed" id="fema">
                <h3>FEMA Advisory</h3>
                <p className="service-card-subtitle">Navigating Cross-Border Regulations with Clarity</p>
                <p className="service-card-desc">Foreign exchange regulations require careful interpretation and structured implementation.</p>
                <button className="service-card-toggle" type="button" aria-expanded="false">
                  <span>Services Include:</span>
                  <span className="service-card-chevron" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 15 12 9 18 15" />
                    </svg>
                  </span>
                </button>
                <ul className="service-card-list">
                  <li>Advisory on FEMA applicability across transactions</li>
                  <li>Structuring of cross-border investments and transactions</li>
                  <li>Review and preparation of regulatory documentation</li>
                  <li>Compliance with reporting and filing requirements</li>
                  <li>Ongoing support on foreign exchange regulatory matters</li>
                </ul>
              </article>

              <article className="service-card-detailed" id="fdi">
                <h3>Foreign Direct Investment</h3>
                <p className="service-card-subtitle">Enabling Structured Inbound Investment</p>
                <p className="service-card-desc">Inbound investments require alignment with sectoral regulations, structuring considerations, and reporting obligations.</p>
                <button className="service-card-toggle" type="button" aria-expanded="false">
                  <span>Services Include:</span>
                  <span className="service-card-chevron" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 15 12 9 18 15" />
                    </svg>
                  </span>
                </button>
                <ul className="service-card-list">
                  <li>Advisory on FDI framework, sectoral caps, and entry routes</li>
                  <li>Structuring of investment transactions aligned with regulatory requirements</li>
                  <li>Drafting and review of transaction-related documentation</li>
                  <li>Compliance with pricing guidelines and reporting obligations</li>
                  <li>Alignment with RBI and FEMA regulations for inbound investments</li>
                </ul>
              </article>

              <article className="service-card-detailed" id="overseas">
                <h3>Overseas Investment</h3>
                <p className="service-card-subtitle">Supporting Global Expansion Strategies</p>
                <p className="service-card-desc">Outbound investments require careful evaluation of regulatory conditions, structuring considerations, and ongoing compliance obligations.</p>
                <button className="service-card-toggle" type="button" aria-expanded="false">
                  <span>Services Include:</span>
                  <span className="service-card-chevron" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 15 12 9 18 15" />
                    </svg>
                  </span>
                </button>
                <ul className="service-card-list">
                  <li>Advisory on overseas investment regulations and eligibility conditions</li>
                  <li>Structuring of outbound investment transactions</li>
                  <li>Review and preparation of documentation for approvals and filings</li>
                  <li>Compliance with reporting and disclosure requirements</li>
                  <li>Alignment with applicable RBI guidelines for overseas investments</li>
                </ul>
              </article>

              <article className="service-card-detailed" id="ecb">
                <h3>External Commercial Borrowing</h3>
                <p className="service-card-subtitle">Facilitating Compliant Cross-Border Borrowings</p>
                <p className="service-card-desc">ECB transactions involve multiple regulatory parameters including eligibility, end-use, and reporting requirements.</p>
                <button className="service-card-toggle" type="button" aria-expanded="false">
                  <span>Services Include:</span>
                  <span className="service-card-chevron" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 15 12 9 18 15" />
                    </svg>
                  </span>
                </button>
                <ul className="service-card-list">
                  <li>Advisory on ECB framework, eligibility criteria, and permissible end-use</li>
                  <li>Structuring of borrowing arrangements aligned with regulatory guidelines</li>
                  <li>Review of loan documentation and transaction structure</li>
                  <li>Compliance with reporting obligations and regulatory filings</li>
                  <li>Alignment with RBI regulations governing external borrowings</li>
                </ul>
              </article>

              <article className="service-card-detailed" id="rbi-reporting">
                <h3>RBI Reporting</h3>
                <p className="service-card-subtitle">Ensuring Accuracy in Regulatory Reporting</p>
                <p className="service-card-desc">Regulatory reporting is a critical component of compliance in cross-border transactions and foreign exchange matters.</p>
                <button className="service-card-toggle" type="button" aria-expanded="false">
                  <span>Services Include:</span>
                  <span className="service-card-chevron" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 15 12 9 18 15" />
                    </svg>
                  </span>
                </button>
                <ul className="service-card-list">
                  <li>Preparation and review of RBI reporting forms and submissions</li>
                  <li>Alignment with reporting timelines and regulatory requirements</li>
                  <li>Review of underlying documentation supporting filings</li>
                  <li>Advisory on reporting obligations across different transactions</li>
                  <li>Ensuring consistency with FEMA and RBI compliance framework</li>
                </ul>
              </article>

              <article className="service-card-detailed" id="labour">
                <h3>Labour Law Compliance</h3>
                <p className="service-card-subtitle">Managing Employment Compliance with Discipline</p>
                <p className="service-card-desc">Labour law compliance requires continuous monitoring, documentation, and alignment with statutory obligations.</p>
                <button className="service-card-toggle" type="button" aria-expanded="false">
                  <span>Services Include:</span>
                  <span className="service-card-chevron" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 15 12 9 18 15" />
                    </svg>
                  </span>
                </button>
                <ul className="service-card-list">
                  <li>Advisory on applicability of labour laws based on business operations</li>
                  <li>Structuring of compliance frameworks for employment-related regulations</li>
                  <li>Review of employment documentation and statutory records</li>
                  <li>Compliance with periodic filings and statutory obligations</li>
                  <li>Alignment with regulatory requirements across labour law frameworks</li>
                </ul>
              </article>

              <article className="service-card-detailed" id="tax">
                <h3>Income Tax &amp; TDS Compliance</h3>
                <p className="service-card-subtitle">Maintaining Tax Compliance with Confidence</p>
                <p className="service-card-desc">Tax and TDS compliance are critical for maintaining financial discipline and regulatory alignment.</p>
                <button className="service-card-toggle" type="button" aria-expanded="false">
                  <span>Services Include:</span>
                  <span className="service-card-chevron" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 15 12 9 18 15" />
                    </svg>
                  </span>
                </button>
                <ul className="service-card-list">
                  <li>Advisory on tax compliance framework and applicability</li>
                  <li>Structuring of TDS processes aligned with regulatory requirements</li>
                  <li>Review of filings, returns, and supporting documentation</li>
                  <li>Alignment with statutory timelines and compliance obligations</li>
                  <li>Ongoing advisory on tax-related regulatory requirements</li>
                </ul>
              </article>
            </div>
          </div>

          {/* Investor & Institutional */}
          <div className="services-group" id="investor">
            <header className="services-group-header">
              <h2>Investor &amp; Institutional</h2>
              <p>Structured support for investors, incubators, accelerators, and institutions managing transactions, portfolio companies, and ecosystem programs.</p>
            </header>

            <div className="services-cards">
              <article className="service-card-detailed" id="program">
                <h3>End-to-End Program Management</h3>
                <p className="service-card-subtitle">Structured Execution for Institutional Programs</p>
                <p className="service-card-desc">Startup and ecosystem programs require disciplined execution, compliance oversight, and multi-stakeholder coordination.</p>
                <button className="service-card-toggle" type="button" aria-expanded="false">
                  <span>Services Include:</span>
                  <span className="service-card-chevron" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 15 12 9 18 15" />
                    </svg>
                  </span>
                </button>
                <ul className="service-card-list">
                  <li>Structuring of program frameworks aligned with institutional objectives</li>
                  <li>Design and implementation of operational and compliance processes</li>
                  <li>Documentation frameworks across program lifecycle</li>
                  <li>Alignment with regulatory and scheme-specific requirements</li>
                  <li>Oversight mechanisms for effective program execution</li>
                </ul>
              </article>

              <article className="service-card-detailed" id="agreements-inst">
                <h3>Transaction Agreements</h3>
                <p className="service-card-subtitle">Ensuring Clarity in Investment Transactions</p>
                <p className="service-card-desc">Transaction documentation must align legal enforceability with commercial intent and stakeholder expectations.</p>
                <button className="service-card-toggle" type="button" aria-expanded="false">
                  <span>Services Include:</span>
                  <span className="service-card-chevron" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 15 12 9 18 15" />
                    </svg>
                  </span>
                </button>
                <ul className="service-card-list">
                  <li>Drafting and review of investment and transaction agreements</li>
                  <li>Structuring of shareholder, subscription, and related documentation</li>
                  <li>Alignment of contractual terms with deal structure and commercial understanding</li>
                  <li>Review of rights, obligations, and protection mechanisms</li>
                  <li>Documentation aligned with transaction-specific requirements</li>
                </ul>
              </article>

              <article className="service-card-detailed" id="portfolio">
                <h3>Portfolio Management Advisory</h3>
                <p className="service-card-subtitle">Supporting Institutional Oversight Across Investments</p>
                <p className="service-card-desc">Managing a portfolio requires structured oversight of compliance, governance, and legal positioning across entities.</p>
                <button className="service-card-toggle" type="button" aria-expanded="false">
                  <span>Services Include:</span>
                  <span className="service-card-chevron" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 15 12 9 18 15" />
                    </svg>
                  </span>
                </button>
                <ul className="service-card-list">
                  <li>Advisory on governance frameworks for portfolio companies</li>
                  <li>Review of compliance status and regulatory positioning</li>
                  <li>Alignment of documentation and legal structures across entities</li>
                  <li>Identification of gaps in compliance and governance practices</li>
                  <li>Support in strengthening portfolio-level oversight mechanisms</li>
                </ul>
              </article>

              <article className="service-card-detailed" id="due-diligence">
                <h3>Due Diligence Support</h3>
                <p className="service-card-subtitle">Preparing for Informed Investment Decisions</p>
                <p className="service-card-desc">Diligence requires a structured assessment of compliance, documentation, and governance readiness.</p>
                <button className="service-card-toggle" type="button" aria-expanded="false">
                  <span>Services Include:</span>
                  <span className="service-card-chevron" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 15 12 9 18 15" />
                    </svg>
                  </span>
                </button>
                <ul className="service-card-list">
                  <li>Preparation and organisation of data room documentation</li>
                  <li>Review of legal, compliance, and governance records</li>
                  <li>Identification of risks, gaps, and areas requiring attention</li>
                  <li>Alignment of findings with transaction considerations</li>
                  <li>Support across diligence processes from a legal and compliance perspective</li>
                </ul>
              </article>

              <article className="service-card-detailed" id="oversight">
                <h3>Portfolio Company Compliance Oversight</h3>
                <p className="service-card-subtitle">Enabling Visibility Across Portfolio Entities</p>
                <p className="service-card-desc">Institutional stakeholders require structured insight into compliance performance across their investments.</p>
                <button className="service-card-toggle" type="button" aria-expanded="false">
                  <span>Services Include:</span>
                  <span className="service-card-chevron" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 15 12 9 18 15" />
                    </svg>
                  </span>
                </button>
                <ul className="service-card-list">
                  <li>Design of compliance tracking and monitoring frameworks</li>
                  <li>Review of statutory and governance documentation</li>
                  <li>Identification of compliance gaps and risk areas</li>
                  <li>Alignment of reporting mechanisms across entities</li>
                  <li>Strengthening of oversight and monitoring structures</li>
                </ul>
              </article>

              <article className="service-card-detailed" id="exit">
                <h3>Exit Strategy Advisory</h3>
                <p className="service-card-subtitle">Preparing for Strategic Exit Events</p>
                <p className="service-card-desc">Exit transactions require structured planning, regulatory preparedness, and alignment among stakeholders.</p>
                <button className="service-card-toggle" type="button" aria-expanded="false">
                  <span>Services Include:</span>
                  <span className="service-card-chevron" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 15 12 9 18 15" />
                    </svg>
                  </span>
                </button>
                <ul className="service-card-list">
                  <li>Advisory on exit structuring and transaction approach</li>
                  <li>Review of documentation and readiness for exit events</li>
                  <li>Alignment with regulatory and compliance requirements</li>
                  <li>Identification of key considerations impacting exit outcomes</li>
                  <li>Support across execution of exit transactions</li>
                </ul>
              </article>

              <article className="service-card-detailed" id="workshops">
                <h3>Capacity Building Workshops</h3>
                <p className="service-card-subtitle">Building Knowledge That Drives Better Execution</p>
                <p className="service-card-desc">Knowledge-led interventions enhance compliance awareness and governance capabilities across organisations.</p>
                <button className="service-card-toggle" type="button" aria-expanded="false">
                  <span>Services Include:</span>
                  <span className="service-card-chevron" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 15 12 9 18 15" />
                    </svg>
                  </span>
                </button>
                <ul className="service-card-list">
                  <li>Design and delivery of workshops on compliance and governance</li>
                  <li>Sessions on investment readiness and regulatory frameworks</li>
                  <li>Training on documentation, structuring, and transaction processes</li>
                  <li>Customised programs aligned with stakeholder requirements</li>
                  <li>Practical and implementation-focused knowledge sessions</li>
                </ul>
              </article>

              <article className="service-card-detailed" id="virtual-data-room">
                <h3>Virtual Data Room Advisory</h3>
                <p className="service-card-subtitle">Enabling Structured and Secure Information Management</p>
                <p className="service-card-desc">A well-organised virtual data room is critical for ensuring transparency, efficiency, and confidence during investment, diligence, and transaction processes.</p>
                <button className="service-card-toggle" type="button" aria-expanded="false">
                  <span>Services Include:</span>
                  <span className="service-card-chevron" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 15 12 9 18 15" />
                    </svg>
                  </span>
                </button>
                <ul className="service-card-list">
                  <li>Structuring of data room architecture aligned with transaction or diligence requirements</li>
                  <li>Identification and organisation of key legal, financial, and compliance documentation</li>
                  <li>Review of documents for completeness, consistency, and readiness</li>
                  <li>Categorisation and indexing aligned with investor and stakeholder expectations</li>
                  <li>Access control framework and information-sharing protocols</li>
                  <li>Alignment of data room with diligence, fundraising, and transaction workflows</li>
                </ul>
              </article>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
