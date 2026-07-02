import { SITE } from "@/data/site";

const base = SITE.url.replace(/\/$/, "");

export default function sitemap() {
  const routes = [
    { path: "/", priority: 1 },
    { path: "/about-us", priority: 0.9 },
    { path: "/services", priority: 0.9 },
    { path: "/resources", priority: 0.8 },
    { path: "/contact", priority: 0.7 },
    { path: "/privacy", priority: 0.3 },
    { path: "/terms", priority: 0.3 },
  ];
  return routes.map((r) => ({
    url: `${base}${r.path === "/" ? "" : r.path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: r.priority,
  }));
}
