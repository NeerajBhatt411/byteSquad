"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

// Scroll-reveal for `.animate-fade-up` on the FIRST page load only.
// On client-side navigation we show content instantly (add `reveal-instant`
// to <html>, which forces all reveal elements fully visible with no delay) —
// otherwise the observer + fade made new-page text appear "late". Only active
// when `js-reveal` is set (see inline script in layout.js); when that is
// skipped (no IntersectionObserver / reduced-motion) the default CSS load
// animation plays and nothing is ever hidden.
export default function ScrollReveal() {
  const pathname = usePathname();
  const firstLoad = useRef(true);

  useEffect(() => {
    const root = document.documentElement;
    if (!root.classList.contains("js-reveal")) return;

    // Client-side navigation → reveal everything immediately.
    if (!firstLoad.current) {
      root.classList.add("reveal-instant");
      document
        .querySelectorAll(".animate-fade-up:not(.in-view)")
        .forEach((el) => el.classList.add("in-view"));
      return;
    }
    firstLoad.current = false;

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

    // Fail-safe: never leave content hidden.
    const failSafe = setTimeout(() => {
      document
        .querySelectorAll(".animate-fade-up:not(.in-view)")
        .forEach((el) => el.classList.add("in-view"));
    }, 2500);

    return () => {
      io.disconnect();
      clearTimeout(failSafe);
    };
  }, [pathname]);

  return null;
}
