"use client";

import { resumeData } from "@/data/resume";
import dynamic from "next/dynamic";
import { useState, useRef } from "react";

const HeroCanvas3D = dynamic(() => import("./HeroCanvas3D"), {
  ssr: false,
  loading: () => null,
});

export default function Hero() {
  const { personalInfo } = resumeData;
  const [magnetPos, setMagnetPos] = useState({ x: 0, y: 0 });
  const magnetRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!magnetRef.current) return;
    const rect = magnetRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dist = Math.hypot(e.clientX - centerX, e.clientY - centerY);

    if (dist < 120) {
      const pullX = (e.clientX - centerX) * 0.18;
      const pullY = (e.clientY - centerY) * 0.18;
      setMagnetPos({ x: Math.max(-8, Math.min(8, pullX)), y: Math.max(-6, Math.min(6, pullY)) });
    } else {
      setMagnetPos({ x: 0, y: 0 });
    }
  };

  const handleMouseLeave = () => {
    setMagnetPos({ x: 0, y: 0 });
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex items-center pt-[68px] overflow-hidden"
    >
      {/* 3D Interactive Canvas */}
      <HeroCanvas3D />

      {/* Radial Gradient Fade */}
      <div 
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 30% 40%, rgba(11,15,20,0.1) 0%, var(--bg) 80%)",
        }}
      />

      {/* Hero Content */}
      <div className="wrap relative z-[2] w-full py-16 sm:py-20">
        {/* Status Tag */}
        <div className="font-mono text-[13px] text-[var(--accent)] mb-5 flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse-glow" />
          <span>~/whoami — available for full-stack &amp; frontend roles</span>
        </div>

        {/* Headline */}
        <h1 className="text-[clamp(2.8rem,7vw,6rem)] font-heading font-semibold leading-[1.02] max-w-[16ch] text-[var(--text)] tracking-tight">
          <span className="block overflow-hidden">
            <span className="inline-block animate-rise">{personalInfo.name},</span>
          </span>
          <span className="block overflow-hidden">
            <span className="inline-block animate-rise [animation-delay:0.2s]">
              building{" "}
              <span
                ref={magnetRef}
                style={{
                  transform: `translate(${magnetPos.x}px, ${magnetPos.y}px)`,
                  transition: "transform 0.18s cubic-bezier(.22,.68,.32,1)",
                }}
                className="text-[var(--accent)] inline-block cursor-default font-bold"
              >
                connected
              </span>{" "}
              web systems.
            </span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-[54ch] text-[var(--text-dim)] text-[1.08rem] leading-relaxed animate-fadeUp [animation-delay:0.4s]">
          MERN Stack Developer with 3+ years shipping production React, Next.js, and Node.js applications — now wiring AI/LLM capabilities like Gemini into real, full-stack products.
        </p>

        {/* Action Buttons */}
        <div className="mt-9 flex flex-wrap gap-3.5 animate-fadeUp [animation-delay:0.6s]">
          <a className="btn solid" href="#projects">
            View projects
          </a>
          <a className="btn ghost" href="#contact">
            Get in touch
          </a>
        </div>

        {/* Key Metrics */}
        <div className="mt-16 flex flex-wrap gap-8 sm:gap-12 animate-fadeUp [animation-delay:0.8s]">
          <div className="stat">
            <b className="font-heading text-[1.7rem] text-[var(--text)] font-semibold">3+</b>
            <span className="font-mono text-[11px] text-[var(--text-faint)] tracking-wider uppercase block mt-0.5">
              YEARS EXPERIENCE
            </span>
          </div>
          <div className="stat">
            <b className="font-heading text-[1.7rem] text-[var(--text)] font-semibold">3</b>
            <span className="font-mono text-[11px] text-[var(--text-faint)] tracking-wider uppercase block mt-0.5">
              SHIPPED PRODUCTS
            </span>
          </div>
          <div className="stat">
            <b className="font-heading text-[1.7rem] text-[var(--text)] font-semibold">4</b>
            <span className="font-mono text-[11px] text-[var(--text-faint)] tracking-wider uppercase block mt-0.5">
              ENGINEERING ROLES
            </span>
          </div>
          <div className="stat">
            <b className="font-heading text-[1.7rem] text-[var(--text)] font-semibold">8.27</b>
            <span className="font-mono text-[11px] text-[var(--text-faint)] tracking-wider uppercase block mt-0.5">
              MCA CGPA
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Cue */}
      <div className="absolute bottom-8 left-8 z-[2] hidden sm:flex items-center gap-3 font-mono text-[11px] text-[var(--text-faint)]">
        <div className="w-[1px] h-8 bg-gradient-to-b from-[var(--text-faint)] to-transparent relative overflow-hidden">
          <div className="absolute left-0 top-[-100%] w-full h-full bg-[var(--accent)] animate-[drip_2.2s_cubic-bezier(.22,.68,.32,1)_infinite]" />
        </div>
        scroll
      </div>
    </section>
  );
}
