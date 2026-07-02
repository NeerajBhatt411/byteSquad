import ContactFormClient from "@/components/ContactFormClient";

export const metadata = { title: "Reach Us" };

export default function ContactPage() {
  return (
    <main className="site-main contact-page-wrapper">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1 className="animate-fade-up">Reach Us</h1>
          <p className="animate-fade-up delay-100">Expert legal guidance is just a message away. Connect with our advisors today.</p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="contact-content-section">
        <div className="container">
          <div className="contact-layout-grid">

            {/* Left: Contact Information */}
            <div className="contact-info-column animate-fade-right">
              <h2>Contact Information</h2>
              <p className="contact-intro">Our team is available to assist you with your legal inquiries.</p>

              <div className="contact-info-cards" style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {/* Office */}
                <div className="service-card-detailed" style={{ padding: "1.5rem", display: "flex", alignItems: "center", gap: "1.25rem" }}>
                  <div className="info-icon" style={{ background: "rgba(37, 99, 235, 0.1)", color: "#2563eb", width: "50px", height: "50px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                  </div>
                  <div className="info-text">
                    <h3 style={{ fontSize: "1.25rem", color: "#0F172A", fontWeight: "800", marginBottom: "0.25rem" }}>Office Address</h3>
                    <p style={{ fontSize: "1rem", color: "#475569", margin: "0" }}>Paschim Vihar, New Delhi, India</p>
                  </div>
                </div>

                {/* Email */}
                <div className="service-card-detailed" style={{ padding: "1.5rem", display: "flex", alignItems: "center", gap: "1.25rem" }}>
                  <div className="info-icon" style={{ background: "rgba(37, 99, 235, 0.1)", color: "#2563eb", width: "50px", height: "50px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                  </div>
                  <div className="info-text">
                    <h3 style={{ fontSize: "1.25rem", color: "#0F172A", fontWeight: "800", marginBottom: "0.25rem" }}>Email Us</h3>
                    <p style={{ fontSize: "1rem", color: "#475569", margin: "0" }}><a href="mailto:info@legisproadvisors.com" style={{ color: "inherit", textDecoration: "none", transition: "color 0.3s" }}>info@legisproadvisors.com</a></p>
                  </div>
                </div>

                {/* Phone */}
                <div className="service-card-detailed" style={{ padding: "1.5rem", display: "flex", alignItems: "center", gap: "1.25rem" }}>
                  <div className="info-icon" style={{ background: "rgba(37, 99, 235, 0.1)", color: "#2563eb", width: "50px", height: "50px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  </div>
                  <div className="info-text">
                    <h3 style={{ fontSize: "1.25rem", color: "#0F172A", fontWeight: "800", marginBottom: "0.25rem" }}>Call Us</h3>
                    <p style={{ fontSize: "1rem", color: "#475569", margin: "0" }}><a href="tel:+918368383581" style={{ color: "inherit", textDecoration: "none", transition: "color 0.3s" }}>+91 8368383581</a></p>
                  </div>
                </div>
              </div>


            </div>

            {/* Right: Form */}
            <div className="contact-form-column animate-fade-left delay-200">
              <div className="white-form-card">
                <h2>Send us a Query</h2>

                <ContactFormClient />
              </div>
            </div>

          </div>


        </div>
      </section>



      {/* Essential Layout CSS for the White Theme */}
      <style>{`
        .contact-page-wrapper {
            background-color: #F8FAFC; /* Light gray to visually separate the white cards */
            font-family: var(--font-main);
        }

        /* Hero */
        .contact-hero {
            background-color: #0B0F19;
            background-image: url('/images/premium-contact-hero-final.png');
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
            font-size: 2.75rem;
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

        /* Content Section */
        .contact-content-section {
            padding: 5rem 0;
            background-color: #ffffff; /* Explicit pure white background as requested */
        }

        .contact-layout-grid {
            display: grid;
            grid-template-columns: 1fr 1.5fr;
            gap: 4rem;
            max-width: 1200px;
            margin: 0 auto;
        }



        /* Left Column */
        .contact-info-column {
            padding-top: 1rem;
        }

        .contact-info-column h2 {
            font-size: 1.75rem;
            color: #111827;
            margin-bottom: 0.75rem;
            font-weight: 700;
        }

        .contact-intro {
            color: #6B7280;
            font-size: 1rem;
            margin-bottom: 2.5rem;
            line-height: 1.6;
            max-width: 90%;
        }

        .contact-info-cards {
            display: flex;
            flex-direction: column;
            gap: 1.5rem; /* slightly increased gap for the animated borders */
        }

        .info-card {
            padding: 1.5rem;
            display: flex;
            align-items: center;
            gap: 1.25rem;
            border-radius: 16px;
            background: #ffffff;
            border: 1px solid #E2E8F0;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
            transition: all 0.3s ease;
        }

        .info-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
            border-color: #3B82F6;
        }

        .info-icon {
            background: #F0F7FF;
            color: #3B82F6;
            width: 64px;
            height: 64px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
        }

        .info-icon svg {
            width: 28px;
            height: 28px;
        }

        .info-text h3 {
            font-size: 1.25rem;
            color: #0F172A;
            font-weight: 700;
            margin-bottom: 0.25rem;
        }

        .info-text p, .info-text a {
            font-size: 1.05rem;
            color: #475569;
            text-decoration: none;
            margin: 0;
            transition: color 0.2s;
        }

        .info-text a:hover {
            color: #3B82F6;
        }




        .follow-updates {
            margin-top: 3rem;
        }

        .follow-updates h4 {
            font-size: 0.8rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: #9CA3AF;
            margin-bottom: 1rem;
            font-weight: 600;
        }

        .social-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: #F3F4F6;
            color: #4B5563;
            transition: all 0.3s ease;
            text-decoration: none;
        }

        .social-btn:hover {
            background: #0A66C2;
            color: white;
        }

        /* Right Column Form */
        .white-form-card {
            background: #ffffff;
            border: 1px solid #F3F4F6;
            box-shadow: 0 10px 40px -10px rgba(0,0,0,0.08);
            border-radius: 16px;
            padding: 3rem;
        }

        .white-form-card h2 {
            font-size: 1.75rem;
            color: #111827;
            margin-bottom: 2rem;
            font-weight: 700;
        }

        .form-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1.5rem;
            margin-bottom: 1.5rem;
        }

        .form-group {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }

        .form-group.form-full {
            margin-bottom: 1.5rem;
        }

        .form-group label {
            font-size: 0.9rem;
            font-weight: 600;
            color: #374151;
        }

        .light-query-form input,
        .light-query-form textarea,
        .light-query-form select {
            width: 100%;
            padding: 0.875rem 1rem;
            border: 1px solid #D1D5DB;
            border-radius: 8px;
            font-family: inherit;
            font-size: 1rem;
            color: #111827;
            background: #ffffff;
            transition: border-color 0.2s, box-shadow 0.2s;
        }

        .light-query-form input:focus,
        .light-query-form textarea:focus,
        .light-query-form select:focus {
            outline: none;
            border-color: #3B82F6;
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
        }

        .custom-select-wrapper {
            position: relative;
            width: 100%;
        }

        .light-query-form select {
            appearance: none;
            cursor: pointer;
            padding-right: 2.5rem;
        }

        .select-arrow {
            position: absolute;
            right: 1rem;
            top: 50%;
            transform: translateY(-50%);
            pointer-events: none;
            color: #6B7280;
        }

        .submit-btn-blue {
            width: 100%;
            padding: 1rem;
            background: #3B82F6;
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 1.05rem;
            font-weight: 600;
            cursor: pointer;
            transition: background 0.2s;
            margin-top: 1rem;
        }

        .submit-btn-blue:hover {
            background: #2563EB;
        }

        /* Form Feedback Messages */
        .form-success, .form-error {
            padding: 1rem;
            border-radius: 8px;
            margin-bottom: 1.5rem;
            font-weight: 500;
            font-size: 0.95rem;
        }
        .form-success {
            background: #DEF7EC;
            color: #03543F;
            border: 1px solid #31C48D;
        }
        .form-error {
            background: #FDF2F2;
            color: #9B1C1C;
            border: 1px solid #F98080;
        }

        @media (max-width: 900px) {
            .contact-layout-grid {
                display: flex;
                flex-direction: column-reverse;
                gap: 3rem;
            }
            .white-form-card {
                padding: 2rem;
            }
            .form-row {
                grid-template-columns: 1fr;
            }
            .contact-hero {
                padding: 0 1rem;
                text-align: center;
            }
            .contact-hero h1 {
                font-size: 2rem;
            }
        }
      `}</style>
    </main>
  );
}
