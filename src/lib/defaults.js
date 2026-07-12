// Default site content — used to seed MongoDB the first time the admin panel
// loads a section, and as a fallback when the database is unreachable so the
// public site never breaks.

export const DEFAULT_SERVICES = [
  { title: "App Development", desc: "Native-feeling iOS & Android apps — cross-platform with Flutter or native Kotlin/Java.", href: "/services#app", tech: ["flutter", "kotlin", "java"], order: 1 },
  { title: "Web Development", desc: "Fast, responsive websites and web apps built with React and Node.js.", href: "/services#web", tech: ["react", "nodejs"], order: 2 },
  { title: "Backend Development", desc: "Reliable, scalable APIs and server logic with Node.js, Express and Java.", href: "/services#backend", tech: ["nodejs", "express", "java"], order: 3 },
  { title: "UI/UX Design", desc: "Intuitive, on-brand interfaces designed and prototyped in Figma.", href: "/services#uiux", tech: ["figma"], order: 4 },
  { title: "E-commerce", desc: "Online stores and checkout experiences designed to convert.", href: "/services#ecommerce", tech: ["react", "wordpress"], order: 5 },
  { title: "Custom Software", desc: "Tailored platforms, dashboards and internal tools around your workflow.", href: "/services#custom", tech: ["react", "nodejs"], order: 6 },
  { title: "WordPress", desc: "Flexible, easy-to-manage CMS websites built on WordPress.", href: "/services#wordpress", tech: ["wordpress"], order: 7 },
  { title: "ERP Solutions", desc: "Operations, inventory and finance systems tailored to your business.", href: "/services#erp", tech: ["react", "nodejs"], order: 8 },
];

export const DEFAULT_PRODUCTS = [
  { name: "Taxi App", desc: "A complete ride-booking platform with rider, driver and admin apps.", img: "/menu-icons/taxi.svg", tint: "p-taxi", href: "/white-label/taxi-app", order: 1 },
  { name: "OTT / Streaming", desc: "A Netflix-style video streaming service for iOS, Android and Web.", img: "/menu-icons/ott.svg", tint: "p-ott", href: "/white-label/ott-app", order: 2 },
  { name: "Dating App", desc: "A modern matchmaking app with profiles, matching and chat.", img: "/menu-icons/dating.svg", tint: "p-dating", href: "/white-label/dating-app", order: 3 },
  { name: "CRM", desc: "A Salesforce-style CRM to manage leads, deals and customers.", img: "/menu-icons/crm.svg", tint: "p-crm", href: "/white-label/crm", order: 4 },
  { name: "School Management", desc: "An all-in-one ERP for schools: students, attendance, fees and more.", img: "/menu-icons/school.svg", tint: "p-school", href: "/white-label/school", order: 5 },
  { name: "LMS — Smart Learning", desc: "Your own course platform with video, quizzes and certificates.", img: "/menu-icons/lms.svg", tint: "p-lms", href: "/white-label/lms", order: 6 },
];

export const DEFAULT_FOOTER = {
  address: "B-48, Sector 48, Noida",
  email: "info@bytesquad.com",
  phone: "+91 70422 32923",
  linkedin: "",
  instagram: "",
  youtube: "",
  copyright: "© 2026 byteSquad. All rights reserved.",
};
