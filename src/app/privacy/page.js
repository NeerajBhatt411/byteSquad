import Link from "next/link";

export const metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <main className="site-main policy-page">
      <section className="policy-hero">
        <div className="container">
          <Link className="policy-back" href="/">Back to Home</Link>
          <h1>Privacy Policy</h1>
          <p className="policy-subtitle">byteSquad</p>
          <p className="policy-updated">Last Updated: 01-04-2026</p>
        </div>
      </section>

      <section className="policy-content">
        <div className="container">
          <div className="policy-section">
            <h2>1. Introduction</h2>
            <p>byteSquad ("we", "our", or "us") is committed to protecting the privacy and confidentiality of individuals and entities who engage with us. This Privacy Policy outlines how we collect, use, disclose, and safeguard information when you visit our website or engage with our services.</p>
            <p>By accessing our website or providing your information, you agree to the terms of this Privacy Policy.</p>
          </div>

          <div className="policy-section">
            <h2>2. Information We Collect</h2>
            <p>We may collect the following categories of information:</p>
            <p><strong>a. Personal Information</strong></p>
            <ul>
              <li>Name, email address, phone number.</li>
              <li>Company/organization details.</li>
              <li>Designation and professional information.</li>
            </ul>
            <p><strong>b. Professional &amp; Transactional Information</strong></p>
            <ul>
              <li>Information shared for advisory, compliance, or transaction purposes.</li>
              <li>Documents, records, and data provided during service engagement.</li>
            </ul>
            <p><strong>c. Technical Information</strong></p>
            <ul>
              <li>IP address, browser type, device information.</li>
              <li>Website usage data (pages visited, time spent, etc.).</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>3. Purpose of Collection</h2>
            <p>We collect and process information for the following purposes:</p>
            <ul>
              <li>Providing advisory, compliance, and regulatory services.</li>
              <li>Responding to inquiries and communication requests.</li>
              <li>Managing client relationships and engagements.</li>
              <li>Improving website functionality and user experience.</li>
              <li>Complying with applicable legal and regulatory requirements.</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>4. Confidentiality of Client Information</h2>
            <p>As a professional advisory firm, we maintain strict confidentiality standards. Any information shared with us during the course of professional engagement is treated as confidential and is used solely for the purpose of providing services, unless disclosure is required by law or regulatory authorities.</p>
          </div>

          <div className="policy-section">
            <h2>5. Sharing of Information</h2>
            <p>We do not sell, rent, or trade your personal information. Information may be shared only in the following circumstances:</p>
            <ul>
              <li>With professional advisors, consultants, or service providers engaged in delivering services.</li>
              <li>Where required under applicable laws, regulations, or legal processes.</li>
              <li>With regulatory authorities or government bodies, where necessary.</li>
              <li>With your consent, where applicable.</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>6. Data Security</h2>
            <p>We implement appropriate technical and organisational measures to safeguard information against unauthorised access, disclosure, alteration, or destruction. However, no method of transmission over the internet is completely secure, and we do not guarantee absolute security.</p>
          </div>

          <div className="policy-section">
            <h2>7. Data Retention</h2>
            <p>We retain information only for as long as necessary:</p>
            <ul>
              <li>To fulfil the purposes outlined in this Policy.</li>
              <li>To comply with legal, regulatory, or professional obligations.</li>
              <li>To resolve disputes and enforce agreements.</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>8. Cookies and Website Usage</h2>
            <p>Our website may use cookies or similar technologies to:</p>
            <ul>
              <li>Enhance user experience.</li>
              <li>Analyse website traffic.</li>
              <li>Improve functionality.</li>
            </ul>
            <p>You may choose to disable cookies through your browser settings; however, this may affect website performance.</p>
          </div>

          <div className="policy-section">
            <h2>9. Third-Party Links</h2>
            <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of such websites. Users are advised to review the privacy policies of those platforms separately.</p>
          </div>

          <div className="policy-section">
            <h2>10. Your Rights</h2>
            <p>Subject to applicable laws, you may have the right to:</p>
            <ul>
              <li>Request access to your personal information.</li>
              <li>Request correction or updating of information.</li>
              <li>Withdraw consent where applicable.</li>
            </ul>
            <p>Requests may be made by contacting us using the details below.</p>
          </div>

          <div className="policy-section">
            <h2>11. Updates to This Policy</h2>
            <p>We may update this Privacy Policy from time to time to reflect changes in legal, regulatory, or operational requirements. Updated versions will be posted on this page.</p>
          </div>

          <div className="policy-section">
            <h2>12. Contact Us</h2>
            <p>For any questions or concerns regarding this Privacy Policy, please contact:</p>
            <div className="policy-contact">
              <p><strong>byteSquad</strong></p>
              <p>Email: info@bytesquad.in</p>
              <p>Phone: +91-7042232923</p>
              <p>Website: www.bytesquad.in</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
