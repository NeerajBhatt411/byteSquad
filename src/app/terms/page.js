import Link from "next/link";

export const metadata = { title: "Terms of Service" };

export default function TermsPage() {
  return (
    <main className="site-main policy-page">
      <section className="policy-hero">
        <div className="container">
          <Link className="policy-back" href="/">Back to Home</Link>
          <h1>Terms of Service</h1>
          <p className="policy-subtitle">byteSquad</p>
          <p className="policy-updated">Last Updated: 01-04-2026</p>
        </div>
      </section>

      <section className="policy-content">
        <div className="container">
          <div className="policy-section">
            <h2>1. Introduction</h2>
            <p>These Terms of Service ("Terms") govern your access to and use of the website and services provided by byteSquad ("Firm", "we", "our", or "us").</p>
            <p>By accessing our website or engaging with our services, you agree to be bound by these Terms. If you do not agree, you should not use our website or services.</p>
          </div>

          <div className="policy-section">
            <h2>2. Nature of Services</h2>
            <p>byteSquad provides corporate compliance, governance, and regulatory advisory services.</p>
            <ul>
              <li>The information available on this website is for general informational purposes only.</li>
              <li>It does not constitute legal, financial, or professional advice.</li>
              <li>Any reliance on such information is at your own discretion.</li>
            </ul>
            <p>Professional services are provided only pursuant to specific engagement terms or agreements entered into between the Firm and the client.</p>
          </div>

          <div className="policy-section">
            <h2>3. No Professional Relationship</h2>
            <p>Use of this website or communication through it does not create a client-advisor relationship.</p>
            <p>A formal relationship is established only upon:</p>
            <ul>
              <li>Execution of an engagement letter or agreement.</li>
              <li>Explicit acceptance of scope, fees, and terms.</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>4. User Obligations</h2>
            <p>By using our website, you agree:</p>
            <ul>
              <li>To provide accurate and complete information where required.</li>
              <li>Not to misuse the website for unlawful or unauthorised purposes.</li>
              <li>Not to attempt to gain unauthorised access to systems or data.</li>
              <li>Not to upload or transmit harmful, misleading, or illegal content.</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>5. Intellectual Property</h2>
            <p>All content on this website, including text, design, graphics, logos, and materials is the property of byteSquad unless otherwise stated.</p>
            <p>You may:</p>
            <ul>
              <li>View and use content for personal or informational purposes.</li>
            </ul>
            <p>You may not:</p>
            <ul>
              <li>Copy, reproduce, distribute, or commercially exploit content without prior written consent.</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>6. Confidentiality of Information</h2>
            <p>Any information shared through the website (such as contact forms or emails):</p>
            <ul>
              <li>Will be treated with reasonable care.</li>
              <li>However, should not be considered confidential unless a formal engagement exists.</li>
            </ul>
            <p>Clients under formal engagement are governed by separate confidentiality obligations.</p>
          </div>

          <div className="policy-section">
            <h2>7. Third-Party Links</h2>
            <p>Our website may contain links to third-party websites.</p>
            <ul>
              <li>These are provided for convenience only.</li>
              <li>We do not endorse or control such websites.</li>
              <li>We are not responsible for their content or practices.</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>8. Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, byteSquad shall not be liable for any direct, indirect, incidental, or consequential damages arising from:</p>
            <ul>
              <li>Use of the website.</li>
              <li>Reliance on information available on the website.</li>
              <li>Inability to access or use the website.</li>
            </ul>
            <p>Professional liability, if any, is governed strictly by client engagement agreements.</p>
          </div>

          <div className="policy-section">
            <h2>9. Disclaimer</h2>
            <ul>
              <li>The website content is provided on an "as is" basis.</li>
              <li>We do not warrant accuracy, completeness, or suitability of information.</li>
              <li>Regulatory laws and interpretations may change over time.</li>
            </ul>
            <p>Users are advised to seek specific professional advice before acting on any information.</p>
          </div>

          <div className="policy-section">
            <h2>10. Indemnity</h2>
            <p>You agree to indemnify and hold harmless byteSquad from any claims, losses, or damages arising out of:</p>
            <ul>
              <li>Your use of the website.</li>
              <li>Violation of these Terms.</li>
              <li>Misuse of information or services.</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>11. Data Protection and Privacy</h2>
            <p>Use of personal data is governed by our Privacy Policy, available on the website. By using the website, you acknowledge and agree to such data practices.</p>
          </div>

          <div className="policy-section">
            <h2>12. Suspension and Termination</h2>
            <p>We reserve the right to:</p>
            <ul>
              <li>Restrict or terminate access to the website.</li>
              <li>Remove or restrict content.</li>
              <li>Take necessary action in case of misuse.</li>
            </ul>
            <p>These actions may be taken without prior notice.</p>
          </div>

          <div className="policy-section">
            <h2>13. Governing Law and Jurisdiction</h2>
            <p>These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising shall be subject to the jurisdiction of courts located in Delhi.</p>
          </div>

          <div className="policy-section">
            <h2>14. Changes to Terms</h2>
            <p>We may update these Terms from time to time.</p>
            <ul>
              <li>Updated versions will be posted on the website.</li>
              <li>Continued use of the website constitutes acceptance of revised Terms.</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>15. Contact Details</h2>
            <p>For any queries regarding these Terms, please contact:</p>
            <div className="policy-contact">
              <p><strong>byteSquad</strong></p>
              <p>Email: info@bytesquad.com</p>
              <p>Phone: +91-7042232923</p>
              <p>Website: www.bytesquad.com</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
