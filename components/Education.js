"use client";

import { resumeData } from "@/data/resume";
import ScrollReveal from "./ScrollReveal";
import KineticText from "./KineticText";

export default function Education() {
  const { education } = resumeData;

  return (
    <section id="education" className="section-block">
      <div className="wrap">
        <div className="section-heading">
          <div className="eyebrow">~/education</div>
          <KineticText
            text="Academic background."
            as="h2"
            className="font-heading font-semibold text-[var(--text)] tracking-tight text-[clamp(2rem,4vw,3rem)]"
          />
        </div>

        <ScrollReveal direction="up" distance={40} scale={0.97} delay={0.12} duration={0.9} blur={2}>
          <div className="flex justify-between items-start flex-wrap gap-5 border border-[var(--border)] p-8 rounded-[6px] bg-[var(--surface)] hover:border-[var(--accent)]/40 transition-all duration-300 hover:shadow-[0_15px_40px_-15px_var(--accent-soft)] group">
            <div>
              <h3 className="text-[1.2rem] font-semibold text-[var(--text)] mb-1.5 font-heading group-hover:text-[var(--accent)] transition-colors">
                {education.degree}
              </h3>
              <p className="text-[var(--text-dim)] m-0 text-[0.95rem]">
                {education.institution} · {education.startDate} – {education.endDate}
              </p>
            </div>
            <div className="text-right">
              <b className="font-heading text-[1.6rem] text-[var(--accent)] block font-semibold group-hover:scale-105 transition-transform origin-right">
                {education.cgpa}
              </b>
              <span className="font-mono text-[0.68rem] text-[var(--text-faint)] uppercase tracking-wider">
                CGPA
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

