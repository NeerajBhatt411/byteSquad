"use client";

import { useEffect, useState } from "react";

// Video-like brand board for the "Who We Are" media slot:
// byteSquad + tagline, a rotating "We build ___" line, and the tech stack.
// Loops forever; respects prefers-reduced-motion.

const WORDS = [
  "Mobile Apps",
  "Websites",
  "UI/UX Design",
  "E-commerce",
  "White-Label Products",
  "Custom Software",
];

const STACK = ["Flutter", "React", "Node.js", "Kotlin", "Figma", "WordPress"];

export default function BrandBoard() {
  const [w, setW] = useState(0);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const id = setInterval(() => setW((v) => (v + 1) % WORDS.length), 2100);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="bs-board" aria-hidden="true">
      <span className="bs-board-glow"></span>
      <div className="bs-board-inner">
        <div className="bs-board-brand">
          <img src="/brand/byteSquad-icon-tight.svg" alt="" />
          <img src="/brand/byteSquad-wordmark-dark-tight.svg" alt="byteSquad" />
        </div>

        <p className="bs-board-tagline">Because every byte matters.</p>

        <div className="bs-board-line">
          <span className="bs-we">We build</span>
          <span className="bs-word-window">
            <span key={w} className="bs-word">{WORDS[w]}</span>
          </span>
        </div>

        <div className="bs-board-chips">
          {STACK.map((t, i) => (
            <span key={t} style={{ "--d": `${0.15 + i * 0.12}s` }}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
