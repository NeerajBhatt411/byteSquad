"use client";

import { useEffect, useState } from "react";

// Auto-playing, looping "promo video" — three animated product scenes with a
// video-player style progress bar. Pure CSS/SVG (no video file), mobile-friendly,
// respects prefers-reduced-motion.

const SLIDES = 3;
const SLIDE_MS = 4200;

export default function PromoPlayer() {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return; // stay on the first scene, no auto-play
    }
    const id = setInterval(() => setI((v) => (v + 1) % SLIDES), SLIDE_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="bs-promo" aria-hidden="true">
      <div className="bs-promo-stage">
        {/* Scene 1 — Taxi: live route on a map */}
        <div className={`bs-slide ${i === 0 ? "on" : ""}`}>
          <div className="bs-map">
            <svg viewBox="0 0 320 190" preserveAspectRatio="xMidYMid slice">
              <path className="bs-route" d="M30 160 C90 150 80 90 140 92 S220 60 250 38"
                fill="none" stroke="#F59E0B" strokeWidth="4" strokeLinecap="round" strokeDasharray="10 8" />
              <circle cx="30" cy="160" r="7" fill="#F59E0B" opacity=".95" />
              <circle cx="250" cy="38" r="9" fill="#F59E0B" />
              <circle cx="250" cy="38" r="3.4" fill="#0b1220" />
            </svg>
            <span className="bs-car"></span>
          </div>
          <span className="bs-chip" style={{ background: "rgba(245,158,11,.16)", color: "#FBBF24" }}>
            🚕 Taxi App — live tracking
          </span>
        </div>

        {/* Scene 2 — CRM: analytics rising */}
        <div className={`bs-slide ${i === 1 ? "on" : ""}`}>
          <div className="bs-chart">
            <div className="bs-bars">
              <span style={{ "--h": "38%", "--d": ".05s" }}></span>
              <span style={{ "--h": "58%", "--d": ".2s" }}></span>
              <span style={{ "--h": "44%", "--d": ".35s" }}></span>
              <span style={{ "--h": "74%", "--d": ".5s" }}></span>
              <span style={{ "--h": "90%", "--d": ".65s" }}></span>
            </div>
            <svg className="bs-trend" viewBox="0 0 300 130" preserveAspectRatio="none">
              <path className="bs-trend-line" d="M10 110 L70 92 L130 100 L190 62 L285 22"
                fill="none" stroke="#A78BFA" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              <circle className="bs-trend-dot" cx="285" cy="22" r="6" fill="#A78BFA" />
            </svg>
          </div>
          <span className="bs-chip" style={{ background: "rgba(139,92,246,.18)", color: "#C4B5FD" }}>
            📊 CRM — analytics & pipeline
          </span>
        </div>

        {/* Scene 3 — OTT: streaming rows + play */}
        <div className={`bs-slide ${i === 2 ? "on" : ""}`}>
          <div className="bs-stream">
            <div className="bs-tiles">
              <span></span><span></span><span></span>
              <span></span><span></span><span></span>
            </div>
            <div className="bs-play">
              <span className="bs-play-ring"></span>
              <svg viewBox="0 0 24 24" width="26" height="26" fill="#fff">
                <polygon points="8 5.5 19 12 8 18.5" />
              </svg>
            </div>
          </div>
          <span className="bs-chip" style={{ background: "rgba(225,29,72,.18)", color: "#FDA4AF" }}>
            ▶ OTT — your own streaming app
          </span>
        </div>
      </div>

      {/* video-player bar */}
      <div className="bs-promo-bar">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="#cbd5e1">
          <polygon points="7 4.5 20 12 7 19.5" />
        </svg>
        <div className="bs-progress">
          <span key={i} className="bs-progress-fill" style={{ animationDuration: `${SLIDE_MS}ms` }}></span>
        </div>
        <div className="bs-promo-dots">
          {[0, 1, 2].map((d) => (
            <button key={d} type="button" className={i === d ? "on" : ""} onClick={() => setI(d)}
              aria-label={`Scene ${d + 1}`}></button>
          ))}
        </div>
      </div>
    </div>
  );
}
