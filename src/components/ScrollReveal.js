"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Progressive scroll-reveal for elements marked `.animate-fade-up`.
// Re-runs on every route change (keyed on pathname) so client-side navigation
// always observes the NEW page's elements — otherwise they'd stay hidden
// (opacity:0 via `html.js-reveal`) because the root layout never remounts.
// Only active when `js-reveal` was set (see inline script in layout.js); that
// class is skipped when IntersectionObserver is missing or reduced-motion is on,
// so the default CSS load animation plays and nothing is ever hidden.
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    if (!root.classList.contains("js-reveal")) return;

    const els = Array.from(document.querySelectorAll(".animate-fade-up:not(.in-view)"));
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -8% 0px" }
    );

    els.forEach((el) => io.observe(el));

    // Fail-safe: never leave content hidden — reveal anything still out after 3s.
    const failSafe = setTimeout(() => {
      document
        .querySelectorAll(".animate-fade-up:not(.in-view)")
        .forEach((el) => el.classList.add("in-view"));
    }, 3000);

    return () => {
      io.disconnect();
      clearTimeout(failSafe);
    };
  }, [pathname]);

  return null;
}
