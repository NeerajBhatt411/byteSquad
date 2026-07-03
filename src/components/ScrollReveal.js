"use client";

import { useEffect } from "react";

// Progressive scroll-reveal for elements marked `.animate-fade-up`.
// Only runs when the `js-reveal` class was set (see inline script in layout.js),
// which is skipped when IntersectionObserver is missing or reduced-motion is on —
// in that case the default CSS load animation plays and nothing is ever hidden.
export default function ScrollReveal() {
  useEffect(() => {
    const root = document.documentElement;
    if (!root.classList.contains("js-reveal")) return;

    const els = Array.from(document.querySelectorAll(".animate-fade-up"));
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
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    els.forEach((el) => io.observe(el));

    // Fail-safe: never leave content hidden — reveal anything still out after 4s.
    const failSafe = setTimeout(() => {
      document
        .querySelectorAll(".animate-fade-up:not(.in-view)")
        .forEach((el) => el.classList.add("in-view"));
    }, 4000);

    return () => {
      io.disconnect();
      clearTimeout(failSafe);
    };
  }, []);

  return null;
}
