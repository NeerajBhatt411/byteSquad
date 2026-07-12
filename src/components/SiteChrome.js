"use client";

import { usePathname } from "next/navigation";

// Hides the public-site chrome (header/footer/floating buttons) on admin routes,
// where the dashboard brings its own full-screen layout.
export default function SiteChrome({ children }) {
  const pathname = usePathname();
  if (pathname?.startsWith("/admin")) return null;
  return children;
}
