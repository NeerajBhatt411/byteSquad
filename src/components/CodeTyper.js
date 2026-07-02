"use client";

import { useEffect, useRef, useState } from "react";

// Animated "editor" that types byteSquad's code, like a looping video.
// Respects prefers-reduced-motion (renders the full code statically).

const LINES = [
  [{ t: "// byteSquad — software studio", c: "cmt" }],
  [
    { t: "const ", c: "kw" },
    { t: "byteSquad", c: "var" },
    { t: " = {", c: "pn" },
  ],
  [
    { t: "  build", c: "key" },
    { t: ": [", c: "pn" },
    { t: '"apps"', c: "str" },
    { t: ", ", c: "pn" },
    { t: '"web"', c: "str" },
    { t: ", ", c: "pn" },
    { t: '"white-label"', c: "str" },
    { t: "],", c: "pn" },
  ],
  [
    { t: "  stack", c: "key" },
    { t: ": [", c: "pn" },
    { t: '"Flutter"', c: "str" },
    { t: ", ", c: "pn" },
    { t: '"React"', c: "str" },
    { t: ", ", c: "pn" },
    { t: '"Node.js"', c: "str" },
    { t: "],", c: "pn" },
  ],
  [
    { t: "  motto", c: "key" },
    { t: ": ", c: "pn" },
    { t: '"Because every byte matters."', c: "str" },
  ],
  [{ t: "};", c: "pn" }],
  [{ t: " ", c: "pn" }],
  [
    { t: "byteSquad", c: "var" },
    { t: ".", c: "pn" },
    { t: "ship", c: "fn" },
    { t: "(", c: "pn" },
    { t: "yourIdea", c: "arg" },
    { t: ");", c: "pn" },
    { t: " // 🚀 launching...", c: "cmt" },
  ],
];

const TOTAL = LINES.reduce(
  (sum, line) => sum + line.reduce((s, tok) => s + tok.t.length, 0),
  0,
);

export default function CodeTyper() {
  const [n, setN] = useState(0); // characters typed so far
  const timer = useRef(null);

  useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      setN(TOTAL);
      return;
    }

    let count = 0;
    function step() {
      count += 1;
      setN(count);
      if (count < TOTAL) {
        timer.current = setTimeout(step, 34);
      } else {
        // pause on the finished code, then loop
        timer.current = setTimeout(() => {
          count = 0;
          setN(0);
          timer.current = setTimeout(step, 500);
        }, 3200);
      }
    }
    timer.current = setTimeout(step, 600);
    return () => clearTimeout(timer.current);
  }, []);

  // Render lines, slicing tokens up to n typed characters.
  let remaining = n;
  let caretLine = 0;
  const rendered = LINES.map((line, li) => {
    const parts = [];
    for (const tok of line) {
      if (remaining <= 0) break;
      const take = Math.min(tok.t.length, remaining);
      parts.push(
        <span key={parts.length} className={`tk-${tok.c}`}>
          {tok.t.slice(0, take)}
        </span>,
      );
      remaining -= take;
    }
    if (parts.length > 0 || remaining > 0) caretLine = li;
    return parts;
  });

  return (
    <div className="bs-code" aria-hidden="true">
      <div className="bs-code-bar">
        <span className="bs-dot" style={{ background: "#ff5f57" }}></span>
        <span className="bs-dot" style={{ background: "#febc2e" }}></span>
        <span className="bs-dot" style={{ background: "#28c840" }}></span>
        <span className="bs-code-title">bytesquad.js</span>
      </div>
      <div className="bs-code-body">
        {LINES.map((_, li) => (
          <div key={li} className="bs-code-line">
            <span className="bs-ln">{li + 1}</span>
            <span className="bs-cl">
              {rendered[li]}
              {li === caretLine && n < TOTAL ? (
                <span className="bs-caret"></span>
              ) : null}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
