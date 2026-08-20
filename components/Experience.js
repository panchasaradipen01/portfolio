"use client";

import { resumeData } from "@/data/resume";
import ScrollReveal from "./ScrollReveal";
import KineticText from "./KineticText";

export default function Experience() {
  const { experience } = resumeData;

  return (
    <section id="experience" className="section-block">
      <div className="wrap">
        <div className="section-heading">
          <div className="eyebrow">~/experience</div>
          <KineticText
            text="Where I've built things."
            as="h2"
            className="font-heading font-semibold text-[var(--text)] tracking-tight text-[clamp(2rem,4vw,3rem)]"
          />
        </div>

        <div className="relative max-w-[820px] ml-1 sm:ml-2">
          {/* Vertical Timeline Stem */}
          <div className="absolute left-[7px] top-[6px] bottom-[6px] w-[1px] bg-[var(--border)]" />

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <ScrollReveal
                key={`${exp.company}-${index}`}
                direction={index % 2 === 0 ? "left" : "right"}
                distance={45}
                delay={index * 0.12}
                duration={0.9}
                blur={3}
              >
                <div className="relative pl-11 group">
                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-[5px] w-[15px] h-[15px] rounded-full bg-[var(--bg)] border-2 border-[var(--text-faint)] group-hover:border-[var(--accent)] group-hover:bg-[var(--accent-soft)] group-hover:scale-125 transition-all duration-300 shadow-sm" />

                  {/* Header info */}
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-1.5">
                    <span className="font-heading text-[1.24rem] font-semibold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                      {exp.role}
                    </span>
                    <span className="font-mono text-[0.72rem] text-[var(--text-faint)]">
                      {exp.startDate} – {exp.endDate}
                    </span>
                  </div>

                  {/* Company & Location */}
                  <div className="text-[var(--accent)] text-[0.92rem] mb-3.5 font-medium flex items-center gap-2">
                    <span>{exp.company}, {exp.location}</span>
                  </div>

                  {/* Responsibilities list */}
                  <ul className="m-0 pl-4 space-y-2 text-[var(--text-dim)] list-disc marker:text-[var(--accent)]">
                    {exp.responsibilities.map((item, idx) => (
                      <li key={idx} className="text-[0.98rem] leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack used in this role */}
                  {exp.technologies && (
                    <div className="flex flex-wrap gap-1.5 mt-3.5 pl-4">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="font-mono text-[0.68rem] text-[var(--text-faint)] border border-[var(--border)] px-2 py-0.5 rounded bg-[var(--surface)]">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
