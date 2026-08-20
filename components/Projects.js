"use client";

import { resumeData } from "@/data/resume";
import ScrollReveal from "./ScrollReveal";
import KineticText from "./KineticText";
import { useRef, useState } from "react";

function ProjectCard({ project, index, delay, direction, onOpenCaseStudy }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const r = card.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    const rx = (y / r.height - 0.5) * -8;
    const ry = (x / r.width - 0.5) * 10;
    card.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-6px)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0)";
  };

  const formattedIndex = String(index + 1).padStart(2, "0");

  return (
    <ScrollReveal 
      direction={direction || "up"} 
      distance={50} 
      delay={delay} 
      duration={0.9} 
      blur={4}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="project-card flex flex-col justify-between h-full group transition-all duration-300 hover:shadow-[0_20px_50px_-15px_var(--accent-soft)]"
      >
        <div>
          {/* Index Header */}
          <div className="font-mono text-[0.72rem] text-[var(--text-faint)] mb-4.5 flex items-center justify-between">
            <span>{formattedIndex} / {project.tagline.split(" ")[0]} {project.tagline.includes("AI") ? "+ AI" : ""}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]/40 group-hover:bg-[var(--accent)] transition-colors" />
          </div>

          {/* Title */}
          <h3 className="font-heading text-[1.28rem] font-semibold text-[var(--text)] mb-1.5 group-hover:text-[var(--accent)] transition-colors">
            {project.name}
          </h3>

          {/* Tagline */}
          <div className="font-mono text-[0.72rem] text-[var(--accent-2)] uppercase tracking-wider mb-4">
            {project.tagline}
          </div>

          {/* Description */}
          <p className="text-[var(--text-dim)] text-[0.94rem] leading-relaxed mb-4.5">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="font-mono text-[0.68rem] text-[var(--text-faint)] border border-[var(--border)] px-2.5 py-1 rounded bg-[var(--bg)]/60 group-hover:border-[var(--accent)]/30 group-hover:text-[var(--text-dim)] transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links and Case Study Trigger */}
        <div className="flex items-center justify-between pt-3 border-t border-[var(--border)]">
          <div className="flex items-center gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[0.76rem] text-[var(--text-dim)] hover:text-[var(--accent)] flex items-center gap-1.5 transition-colors group/link"
              >
                Live demo <span className="inline-block transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5">↗</span>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[0.76rem] text-[var(--text-dim)] hover:text-[var(--accent)] flex items-center gap-1.5 transition-colors group/link"
              >
                Source <span className="inline-block transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5">↗</span>
              </a>
            )}
          </div>

          <button
            onClick={() => onOpenCaseStudy(project)}
            className="font-mono text-[0.72rem] text-[var(--accent)] hover:underline flex items-center gap-1 cursor-pointer"
          >
            Case study ▾
          </button>
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function Projects() {
  const { projects } = resumeData;
  const [activeModalProject, setActiveModalProject] = useState(null);
  const cardDirections = ["left", "up", "right"];

  // Case study specific details (§7)
  const caseStudyDetails = {
    "AI Job Portal": {
      problem: "Traditional job hunting forces candidates to spend hours manually screening job descriptions, rewriting resume bullets, and guessing at potential technical interview questions.",
      approach: [
        "Architected an automated web-extraction pipeline using Firecrawl to fetch live job postings across LinkedIn, Indeed, Greenhouse, and Wellfound in real-time.",
        "Integrated Google Gemini AI structured prompt engineering to parse candidate PDF resumes (Multer + pdf-parse) and generate granular match scores, key missing skills, and customized interview Q&A.",
        "Implemented stateless JWT authentication with HTTP-only cookies, token blacklisting via Redis, and Zod schema validations for full runtime safety.",
      ],
      result: "Deployed to production on Vercel with sub-second response times for AI resume evaluations.",
    },
    "MailFlow": {
      problem: "Bulk email dispatchers often struggle with heavy rate-limiting, inconsistent template personalization, and slow UI rendering during massive contact list uploads.",
      approach: [
        "Constructed a GraphQL API (Apollo Server) and relational Prisma data layer to manage complex campaign schemas, contact segments, and tracking events.",
        "Engineered background worker queue processing using BullMQ and Redis with automatic concurrency control and retry backoffs, decoupling heavy email dispatch from web requests.",
        "Integrated AWS S3 for secure attachment hosting and Tiptap rich-text editor for dynamic variable insertion, with comprehensive Jest/Playwright test suites.",
      ],
      result: "Successfully handles background queued batches with zero web thread blocking and real-time Sentry error observability.",
    },
    "The Glambar": {
      problem: "Local high-end studio businesses require ultra-fast, animated customer-facing interfaces with seamless appointment scheduling and instant communication.",
      approach: [
        "Built with React 19 + TypeScript + Vite, taking advantage of modern React compiler features and component optimizations.",
        "Utilized Google Gemini AI for dynamic service copywriting and real-time recommendation dialogs.",
        "Constructed automated WhatsApp direct-booking links that prepopulate client service selections, date/time slots, and customized inquiries.",
      ],
      result: "Deployed on Netlify with top-tier Lighthouse performance scores and dynamic motion UX using Tailwind CSS v4 and Motion.",
    },
  };

  return (
    <section id="projects" className="section-block">
      <div className="wrap">
        <div className="section-heading">
          <div className="eyebrow">~/projects</div>
          <KineticText
            text="Selected work."
            as="h2"
            className="font-heading font-semibold text-[var(--text)] tracking-tight text-[clamp(2rem,4vw,3rem)]"
          />
          <ScrollReveal direction="up" delay={0.1} duration={0.8}>
            <p>
              Three full-stack builds spanning AI-powered job matching, GraphQL-driven email automation, and an AI-assisted business site.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={`${project.name}-${index}`}
              project={project}
              index={index}
              delay={index * 0.12}
              direction={cardDirections[index % 3]}
              onOpenCaseStudy={setActiveModalProject}
            />
          ))}
        </div>
      </div>

      {/* Case Study Modal (§7) */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--text-dim)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors cursor-pointer"
              aria-label="Close Case Study Modal"
            >
              ✕
            </button>

            <div className="font-mono text-xs text-[var(--accent)] mb-2">
              CASE STUDY / {activeModalProject.tagline}
            </div>

            <h3 className="font-heading text-2xl font-bold text-[var(--text)] mb-6">
              {activeModalProject.name}
            </h3>

            {caseStudyDetails[activeModalProject.name] && (
              <div className="space-y-6 text-sm text-[var(--text-dim)] leading-relaxed">
                {/* 1. Problem */}
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-[var(--text)] font-semibold mb-2">
                    1. Problem &amp; Motivation
                  </h4>
                  <p className="bg-[var(--bg)] p-3.5 rounded border border-[var(--border)]">
                    {caseStudyDetails[activeModalProject.name].problem}
                  </p>
                </div>

                {/* 2. Technical Approach */}
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-[var(--text)] font-semibold mb-2">
                    2. Technical Approach &amp; Architecture
                  </h4>
                  <ul className="space-y-2 list-disc pl-5">
                    {caseStudyDetails[activeModalProject.name].approach.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                </div>

                {/* 3. Stack */}
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-[var(--text)] font-semibold mb-2">
                    3. Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeModalProject.technologies.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-xs border border-[var(--border)] px-2.5 py-1 rounded bg-[var(--bg)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 4. Result & Status */}
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-[var(--text)] font-semibold mb-2">
                    4. Result &amp; Status
                  </h4>
                  <p className="text-[var(--accent)] font-medium">
                    ✓ {caseStudyDetails[activeModalProject.name].result}
                  </p>
                </div>
              </div>
            )}

            <div className="mt-8 pt-4 border-t border-[var(--border)] flex justify-between items-center flex-wrap gap-4">
              <div className="flex gap-4">
                {activeModalProject.liveUrl && (
                  <a
                    href={activeModalProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn solid"
                  >
                    View Live App ↗
                  </a>
                )}
                {activeModalProject.githubUrl && (
                  <a
                    href={activeModalProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn ghost"
                  >
                    View GitHub ↗
                  </a>
                )}
              </div>
              <button
                onClick={() => setActiveModalProject(null)}
                className="font-mono text-xs text-[var(--text-faint)] hover:text-[var(--text)]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
