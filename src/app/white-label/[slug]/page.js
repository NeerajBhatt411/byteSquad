import Link from "next/link";
import { notFound } from "next/navigation";

const PRODUCTS = {
  "taxi-app": {
    name: "Taxi App", icon: "/menu-icons/taxi.svg", tint: "p-taxi",
    tag: "Launch your own ride-hailing brand in weeks, not years.",
    metaDesc: "A complete, production-ready white-label taxi app — rider app, driver app and admin dashboard, launched under your own brand.",
    overview: "A complete, production-ready taxi app — fully white-labeled with your name, logo and colors. Everything Uber and Ola do, ready to launch under your brand: a rider app, a driver app, and an admin dashboard you fully control.",
    youGet: ["Rider & driver apps + web admin", "Live GPS tracking and upfront fares", "In-app payments, ratings & history", "Full ownership and branding"],
    modules: [
      { title: "Rider App", desc: "Tap-to-book, live driver tracking, upfront fare estimates, card/wallet/cash payments, ratings, ride history and scheduled rides." },
      { title: "Driver App", desc: "Accept or reject requests, built-in navigation, an earnings dashboard, online/offline toggle and full trip history." },
      { title: "Admin Dashboard", desc: "Manage drivers and riders, control pricing and surge, live dispatch and monitoring, reports, promo codes and commissions." },
      { title: "Payments & Tracking", desc: "In-app wallet plus card and cash, automatic commission split, live GPS with turn-by-turn navigation and ETAs, multi-language." },
    ],
    tech: "Rider & Driver apps: Flutter (iOS + Android) · Backend: Node.js / Express · Maps: real-time GPS & navigation · Admin: React",
    branding: ["Your logo, colors and app name across every app", "Published under your App Store & Play accounts", "Configurable pricing, zones and commission", "Feature add-ons built on request"],
  },
  "ott-app": {
    name: "OTT / Streaming App", icon: "/menu-icons/ott.svg", tint: "p-ott",
    tag: "Your brand. Your content. Your revenue.",
    metaDesc: "A Netflix-style white-label OTT platform — web player and mobile apps, subscriptions, pay-per-view and ads, under your brand.",
    overview: "A complete Netflix-style OTT platform, ready to launch under your own name. Upload content, set prices, and stream across mobile and web. Built for creators, broadcasters, educators and niche communities.",
    youGet: ["Web player + iOS & Android apps", "Subscriptions, pay-per-view & ads", "Full content management", "Admin analytics & insights"],
    modules: [
      { title: "User Apps (iOS, Android, Web)", desc: "Browse and discover, powerful search, smooth playback, watchlist, continue watching, downloads and offline viewing." },
      { title: "Content Management", desc: "Upload video, categories and genres, seasons and episodes, an optional live-streaming option, metadata and artwork." },
      { title: "Monetization", desc: "Subscriptions (SVOD), pay-per-view (TVOD), ads (AVOD), plus coupons and promos." },
      { title: "Admin Dashboard", desc: "Content control, user management, subscription management, and analytics & insights." },
    ],
    tech: "Backend: Node.js & Express · Web: React · Mobile: Flutter, Kotlin & Java · Design: Figma",
    branding: ["Your identity — logo, colors, name and store listings", "Your domain and app-store accounts", "Your content model — SVOD / TVOD / AVOD", "Custom features on request"],
  },
  "dating-app": {
    name: "Dating App", icon: "/menu-icons/dating.svg", tint: "p-dating",
    tag: "Ready to brand, ready to grow.",
    metaDesc: "A swipe-based white-label dating app — profiles, smart matching, real-time chat and built-in monetization, under your brand.",
    overview: "A complete, swipe-based dating experience under your own name. Modern matchmaking, real-time chat, built-in monetization and a powerful admin dashboard — a Tinder/Bumble-style platform, fully white-labeled.",
    youGet: ["Profiles + smart matching", "Real-time chat & calls", "Safety & moderation tools", "Premium & boost monetization"],
    modules: [
      { title: "Profiles", desc: "Multiple photos, bio and prompts, interest tags, preference settings and verification badges." },
      { title: "Smart Matching", desc: "Swipe-to-like/pass, location-based discovery, preference matching, advanced filters and mutual-match alerts." },
      { title: "Chat & Connect", desc: "Real-time messaging, audio/video calls, icebreakers, read receipts and media sharing." },
      { title: "Safety & Moderation", desc: "Report and block, photo verification, an admin moderation queue, flagging and bans." },
      { title: "Monetization", desc: "Premium/subscription tiers, boosts, super-likes, in-app coins and premium filters." },
    ],
    tech: "Mobile: Flutter, Kotlin, Java · Frontend/admin: React · Backend: Node.js, Express · Real-time chat & audio/video · Design: Figma",
    branding: ["Your logo, colors and app name", "Configurable matching, monetization & pricing", "Localization for your market", "Published under your accounts"],
  },
  "crm": {
    name: "CRM", icon: "/menu-icons/crm.svg", tint: "p-crm",
    tag: "Launch your own branded CRM — without building it from scratch.",
    metaDesc: "A Salesforce-style white-label CRM — contacts, pipeline, tasks, dashboards and automation, deployed under your own brand.",
    overview: "A powerful, Salesforce-style CRM that carries your name, logo and brand. Production-ready and fully customizable — deploy it under your own brand in weeks. Sell it as SaaS, bundle it with services, or use it for your own team.",
    youGet: ["Contacts, leads & pipeline", "Tasks, reminders & calendar", "Dashboards & reports", "Automation & role-based access"],
    modules: [
      { title: "Contacts & Leads", desc: "Unlimited records, multi-channel capture, segmentation, lead scoring, duplicate detection and activity timelines." },
      { title: "Sales Pipeline & Deals", desc: "Drag-and-drop Kanban, custom pipelines and stages, forecasting and won/lost analysis." },
      { title: "Tasks & Communication", desc: "Tasks, calls and meetings, reminders, calendar, email integration, templates and full history." },
      { title: "Reports & Automation", desc: "Customizable dashboards, sales reports, funnel analysis, plus a visual workflow builder and auto follow-ups." },
      { title: "Admin", desc: "User management, role-based access, granular permissions, audit logs and custom fields." },
    ],
    tech: "React web app (CRM + admin) · Node.js / Express REST API · optional Flutter mobile app · Figma design files",
    branding: ["Full white-label branding — web, mobile, emails", "Your own domain (crm.yourbrand.com)", "Custom modules and fields", "Flexible deployment (multi- or single-tenant)"],
  },
  "school": {
    name: "School Management Software", icon: "/menu-icons/school.svg", tint: "p-school",
    tag: "Run your entire school on one platform.",
    metaDesc: "A white-label school management ERP — admissions, attendance, exams, fees, plus teacher/parent/student apps, under your brand.",
    overview: "From admissions to attendance, exams to fee collection — a complete, ready-to-launch school management platform under your own brand. A web dashboard for admins, and mobile apps for teachers, parents and students, connected in real time. Built for schools, colleges and coaching institutes.",
    youGet: ["Students, staff & attendance", "Timetable, exams & grades", "Fees & online payments", "Parent / teacher / student apps"],
    modules: [
      { title: "Student & Staff", desc: "Admissions, profiles, class/section assignment, records and bulk import/export; staff roles, subject allocation and leave." },
      { title: "Attendance & Timetable", desc: "Daily/period-wise attendance, one-tap marking, absence alerts, and a visual timetable builder with clash detection." },
      { title: "Exams & Fees", desc: "Exam scheduling, marks entry, custom grading and report cards; flexible fee structures, invoices, online payment and reminders." },
      { title: "Portals & Apps", desc: "Parent/student app for attendance, results, fees, notices, timetable and homework; announcements and messaging." },
    ],
    tech: "Web admin: React · Mobile apps: Flutter (teacher, parent, student) · Backend: Node.js / Express · Design: Figma",
    branding: ["Your brand across web and mobile", "Apps published under your name", "Configurable modules and workflows", "Localization and custom development"],
  },
  "lms": {
    name: "LMS — Smart Learning", icon: "/menu-icons/lms.svg", tint: "p-lms",
    tag: "Launch your own online learning platform.",
    metaDesc: "A Udemy/Moodle-style white-label LMS — courses, video, live classes, quizzes, certificates and payments, under your own brand.",
    overview: "A Udemy- and Moodle-style platform, ready to deploy under your own name, logo and domain. Create courses, stream video lessons, run live classes, assess with auto-graded quizzes, issue certificates, and get paid — one connected system, with web portal, mobile apps and an admin dashboard.",
    youGet: ["Courses, video & live classes", "Quizzes, progress & certificates", "Student & instructor apps", "Course sales & subscriptions"],
    modules: [
      { title: "Courses & Video", desc: "Unlimited courses, drag-and-drop curriculum, mixed content, categories and drip content; adaptive streaming, secure hosting, offline downloads and captions." },
      { title: "Assessments & Certificates", desc: "Multiple question types, auto-grading, question banks and timed exams; real-time progress and branded certificates with verification IDs." },
      { title: "Live & Community", desc: "Scheduled webinars, video conferencing, chat & Q&A and recordings; per-lesson discussions, ratings and reviews." },
      { title: "Monetization & Admin", desc: "Course sales, subscriptions, coupons, bundles and instructor revenue sharing; enrollment/revenue overview and engagement analytics." },
    ],
    tech: "Web + admin: React · student & instructor apps: Flutter (iOS & Android) · backend: Node.js / Express · design: Figma",
    branding: ["Your logo, colors and domain across web & apps", "Published under your accounts", "Custom certificates and emails", "Multi-language / multi-currency; your data"],
  },
};

export function generateStaticParams() {
  return Object.keys(PRODUCTS).map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = PRODUCTS[slug];
  if (!p) return { title: "White-Label Product" };
  return { title: p.name, description: p.metaDesc };
}

const DELAYS = ["delay-100", "delay-200", "delay-300", "delay-400"];
const arrow = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const p = PRODUCTS[slug];
  if (!p) notFound();

  return (
    <>
      {/* Hero */}
      <section className="bs-page-hero">
        <div className="bs-page-hero-inner">
          <span className={`bs-prod-badge ${p.tint} animate-fade-up`}>
            <img src={p.icon} alt="" />
          </span>
          <h1 className="animate-fade-up delay-100">{p.name}</h1>
          <p className="animate-fade-up delay-200">{p.tag}</p>
          <div className="bs-page-hero-actions animate-fade-up delay-300">
            <Link href="/contact" className="btn-primary btn-large">Book a Demo</Link>
            <Link href="/white-label" className="btn-ghost-b">All Products</Link>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="bs-prod-overview">
        <div className="bs-prod-wrap">
          <span className="bs-eyebrow animate-fade-up">Overview</span>
          <p className="bs-prod-lead animate-fade-up delay-100">{p.overview}</p>
          <ul className="bs-srv-list bs-prod-yg animate-fade-up delay-200">
            {p.youGet.map((y, i) => (<li key={i}>{y}</li>))}
          </ul>
        </div>
      </section>

      {/* Key Modules */}
      <section className="bs-feat">
        <div className="bs-shead animate-fade-up">
          <span className="bs-eyebrow">Key Modules</span>
          <h2>Everything it includes</h2>
          <p>A complete platform, ready to customize and launch under your brand.</p>
        </div>
        <div className="bs-mod-grid">
          {p.modules.map((m, i) => (
            <div key={m.title} className={`bs-mod-card animate-fade-up ${DELAYS[i % 4]}`}>
              <h3>{m.title}</h3>
              <p>{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech + Branding */}
      <section className="bs-prod-tech">
        <div className="bs-prod-tech-grid">
          <div className="bs-prod-tech-card animate-fade-up">
            <span className="bs-eyebrow">Built With</span>
            <p>{p.tech}</p>
          </div>
          <div className="bs-prod-brand-card animate-fade-up delay-100">
            <span className="bs-eyebrow">Your Brand, End to End</span>
            <ul className="bs-srv-list">
              {p.branding.map((b, i) => (<li key={i}>{b}</li>))}
            </ul>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bs-cta">
        <div className="bs-cta-inner animate-fade-up">
          <h2>Make {p.name} yours</h2>
          <p>Book a live demo and we&apos;ll walk you through customizing and launching it under your brand.</p>
          <div className="bs-cta-actions">
            <Link href="/contact" className="btn-on-blue">Book a Demo {arrow}</Link>
            <Link href="/white-label" className="btn-on-blue ghost">See All Products</Link>
          </div>
        </div>
      </section>
    </>
  );
}
