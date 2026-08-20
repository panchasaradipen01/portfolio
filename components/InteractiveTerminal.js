"use client";

import { useState, useEffect, useRef } from "react";

export default function InteractiveTerminal() {
  const [lines, setLines] = useState([]);
  const [hasRun, setHasRun] = useState(false);
  const containerRef = useRef(null);

  const terminalSequence = [
    { text: "$ whoami", delay: 300, isCmd: true },
    { text: "Dipen Panchasara — MERN Developer & Full-Stack Engineer", delay: 700 },
    { text: "$ cat focus.txt", delay: 1300, isCmd: true },
    { text: "Frontend systems, AI/Gemini integration, full-stack ownership", delay: 1700 },
    { text: "$ cat location.json", delay: 2300, isCmd: true },
    { text: '{ "base": "Bengaluru, IN", "status": "open_to_work" }', delay: 2700 },
  ];

  useEffect(() => {
    if (!containerRef.current || hasRun) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun) {
          setHasRun(true);
          terminalSequence.forEach(({ text, delay, isCmd }) => {
            setTimeout(() => {
              setLines((prev) => [...prev, { text, isCmd }]);
            }, delay);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [hasRun]);

  return (
    <div
      ref={containerRef}
      className="rounded-md border border-[var(--border)] bg-[var(--surface)] p-4 sm:p-5 font-mono text-[0.78rem] shadow-lg relative overflow-hidden"
    >
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between pb-3 mb-3.5 border-b border-[var(--border)] text-[var(--text-faint)] text-[0.7rem]">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/70 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/70 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/70 inline-block" />
        </div>
        <span>bash — 80x24</span>
      </div>

      {/* Terminal Output */}
      <div className="space-y-2 min-h-[140px]">
        {lines.map((item, idx) => (
          <div
            key={idx}
            className={`${item.isCmd ? "text-[var(--accent)] font-medium" : "text-[var(--text-dim)] pl-2"}`}
          >
            {item.text}
          </div>
        ))}
        <div className="flex items-center gap-1 text-[var(--accent)] pt-1">
          <span>$</span>
          <span className="w-2 h-4 bg-[var(--accent)] inline-block animate-pulse" />
        </div>
      </div>
    </div>
  );
}
