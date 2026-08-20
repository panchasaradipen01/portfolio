"use client";

import { resumeData } from "@/data/resume";
import ScrollReveal from "./ScrollReveal";
import KineticText from "./KineticText";
import InteractiveTerminal from "./InteractiveTerminal";

export default function About() {
  const { personalInfo } = resumeData;

  return (
    <section id="about" className="section-block">
      <div className="wrap">
        <div className="section-heading">
          <div className="eyebrow">~/about</div>
          <KineticText
            text="Full-stack in practice, frontend by instinct."
            as="h2"
            className="font-heading font-semibold text-[var(--text)] tracking-tight text-[clamp(2rem,4vw,3rem)]"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-start">
          {/* Left Column: Bio & Personal Voice */}
          <div className="space-y-5">
            <ScrollReveal direction="up" delay={0.1} duration={0.8}>
              <div className="space-y-4 text-[var(--text-dim)] text-[1.04rem] leading-relaxed font-normal">
                <p>
                  I&apos;m a <strong className="text-[var(--text)] font-semibold">MERN Stack Developer</strong> based in {personalInfo.location}, with three-plus years of experience designing and shipping <strong className="text-[var(--text)] font-semibold">scalable, responsive web applications</strong> using React.js, Next.js, Node.js, Express.js, MongoDB, JavaScript (ES6+), and TypeScript.
                </p>
                <p>
                  My core strength is component-based frontend architecture — building interfaces that are fast, accessible, and easy to extend — paired with backend fluency across RESTful APIs, GraphQL, authentication (JWT/OAuth 2.0), and relational and document databases.
                </p>
                <p>
                  Lately I&apos;ve been pulling <strong className="text-[var(--text)] font-semibold">AI and LLM features</strong> — Google Gemini, prompt engineering, structured data generation — directly into production apps, from AI-matched job search to AI-generated interview prep reports.
                </p>
              </div>
            </ScrollReveal>

            {/* Humanized personal element (§8) */}
            <ScrollReveal direction="up" delay={0.2} duration={0.8}>
              <div className="p-4 rounded-md border-l-2 border-[var(--accent)] bg-[var(--surface-glass)] text-[var(--text)] text-[0.94rem] italic font-normal">
                &ldquo;I build because turning complex distributed logic and LLM workflows into an interface that feels instant and obvious is what keeps me up at night.&rdquo;
              </div>
            </ScrollReveal>

            {/* Fact List Table */}
            <ScrollReveal direction="up" delay={0.3} duration={0.8}>
              <ul className="list-none m-0 p-0 border-t border-[var(--border)] pt-2">
                <li className="flex justify-between items-center gap-4 py-3.5 border-b border-[var(--border)] text-[0.92rem]">
                  <span className="text-[var(--text-faint)] font-mono text-[0.74rem] uppercase tracking-wider">
                    Location
                  </span>
                  <span className="text-[var(--text)] text-right">{personalInfo.location}</span>
                </li>
                <li className="flex justify-between items-center gap-4 py-3.5 border-b border-[var(--border)] text-[0.92rem]">
                  <span className="text-[var(--text-faint)] font-mono text-[0.74rem] uppercase tracking-wider">
                    Focus
                  </span>
                  <span className="text-[var(--text)] text-right">MERN · Frontend · AI Integration</span>
                </li>
                <li className="flex justify-between items-center gap-4 py-3.5 border-b border-[var(--border)] text-[0.92rem]">
                  <span className="text-[var(--text-faint)] font-mono text-[0.74rem] uppercase tracking-wider">
                    Email
                  </span>
                  <span className="text-[var(--text)] text-right">
                    <a href={`mailto:${personalInfo.contact.email}`} className="hover:text-[var(--accent)] transition-colors">
                      {personalInfo.contact.email}
                    </a>
                  </span>
                </li>
              </ul>
            </ScrollReveal>
          </div>

          {/* Right Column: Interactive Terminal Panel (§5) */}
          <div className="lg:sticky lg:top-28">
            <ScrollReveal direction="right" distance={40} delay={0.2} duration={0.9}>
              <InteractiveTerminal />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
