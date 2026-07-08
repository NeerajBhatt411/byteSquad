export const metadata = {
  title: "About Us",
  description:
    "byteSquad is a software development company that designs and builds custom apps, websites and backends — plus ready-to-launch white-label products you can brand as your own.",
};

export default function AboutPage() {
  return (
    <main>
      {/* Inner Hero Section */}
      <section className="inner-hero" style={{ backgroundImage: "url('/images/about-us-bg.png')" }}>
        <div className="inner-hero-content">
          <h1 className="animate-fade-up" style={{ maxWidth: "900px", margin: "0 auto 1.5rem" }}>Learn more about byteSquad</h1>
          <p className="animate-fade-up delay-200" style={{ fontSize: "1.25rem", maxWidth: "700px", margin: "0 auto" }}>the
            software development company behind your custom apps, websites and ready-to-launch white-label products.</p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="story-section">
        <div className="container story-grid">
          <div className="story-content animate-fade-up">
            <span className="about-subtitle">Who We Are</span>
            <h2>Software Built to Move Your Business Forward</h2>
            <p style={{ textAlign: "justify" }}>byteSquad partners with startups and growing companies to design, build and
              ship software — custom mobile apps, websites and backends, plus ready-made white-label products you can
              launch under your own brand.</p>
            <p style={{ textAlign: "justify" }}>We bring engineering, design and product thinking under one roof, turning
              ideas into real, working products across iOS, Android and the web.</p>
            <p style={{ textAlign: "justify" }}>Our work is practical and outcome-focused — clean code, thoughtful design,
              and products built to scale.</p>
          </div>
          <div className="story-image animate-fade-up delay-200">
            <img src="/images/about-us1.png" alt="byteSquad" />
          </div>
        </div>
      </section>

      {/* Vision / Mission / Approach */}
      <section className="ideology-section">
        <div className="container">
          <div className="ideology-grid">
            <div className="ideology-card">
              <h3>Our Vision</h3>
              <p>To make high-quality software accessible to businesses of every size — so a great idea, not a big budget, decides what gets built.</p>
            </div>
            <div className="ideology-card">
              <h3>Our Mission</h3>
              <p>To help our clients launch faster and grow with confidence, by pairing thoughtful design with dependable, modern engineering across iOS, Android and the web.</p>
              <p>We are committed to practical, implementation-focused work that aligns with how your business actually runs.</p>
            </div>
            <div className="ideology-card">
              <h3>Our Approach</h3>
              <p className="ideology-subtitle">How byteSquad works</p>
              <p>We keep things clear and collaborative — we plan carefully, communicate often, and build in focused iterations, so you always know what&apos;s happening and what&apos;s next.</p>
              <p>From the first wireframe to a live release, we handle design, mobile, web and backend as one team — so nothing falls through the cracks.</p>
              <blockquote>“Good software is clear, reliable, and built to grow with you.”</blockquote>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
