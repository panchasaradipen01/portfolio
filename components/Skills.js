"use client";

import { resumeData } from "@/data/resume";
import ScrollReveal from "./ScrollReveal";
import KineticText from "./KineticText";

export default function Skills() {
  const { skills } = resumeData;

  const stackCategories = [
    {
      title: "Frontend / MERN",
      featured: "React.js",
      items: skills.frontend,
      delay: 0,
      direction: "left",
    },
    {
      title: "Backend & Data",
      featured: "Node.js",
      items: [
        "Express.js",
        "GraphQL (Apollo)",
        "REST APIs",
        "MongoDB",
        "Mongoose",
        "PostgreSQL",
        "Prisma ORM",
        "BullMQ / Redis",
        "MySQL",
      ],
      delay: 0.08,
      direction: "up",
    },
    {
      title: "Auth, Cloud & AI",
      featured: "Gemini AI",
      items: [
        "JWT",
        "OAuth 2.0",
        "NextAuth",
        "RBAC",
        "AWS S3",
        "Vercel",
        "Netlify",
        "Sentry",
        "Prompt Engineering",
        "LLM Apps",
        "PDF Parsing",
      ],
      delay: 0.16,
      direction: "up",
    },
    {
      title: "Tooling & Testing",
      featured: "TypeScript",
      items: [
        "Git",
        "GitHub",
        "Postman",
        "Vite",
        "Webpack",
        "Jest",
        "Playwright",
        "Mocha",
        "CI/CD",
        "Agile/Scrum",
        "Python",
      ],
      delay: 0.24,
      direction: "right",
    },
  ];

  return (
    <section id="stack" className="section-block">
      <div className="wrap">
        <div className="section-heading">
          <div className="eyebrow">~/stack</div>
          <KineticText
            text="Tools I reach for."
            as="h2"
            className="font-heading font-semibold text-[var(--text)] tracking-tight text-[clamp(2rem,4vw,3rem)]"
          />
          <ScrollReveal direction="up" delay={0.1} duration={0.8}>
            <p>
              A working set built across production roles and side projects — from component-level UI work to background job queues and AI integrations.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[2px] bg-[var(--border)] border border-[var(--border)]">
          {stackCategories.map((cat) => (
            <ScrollReveal
              key={cat.title}
              direction={cat.direction}
              distance={40}
              delay={cat.delay}
              duration={0.9}
              blur={2}
            >
              <div className="bg-[var(--bg)] p-7 h-full flex flex-col group hover:bg-[var(--bg-alt)] transition-colors duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-mono text-[0.78rem] text-[var(--accent)] uppercase tracking-wider font-medium">
                    {cat.title}
                  </h3>
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]/40 group-hover:bg-[var(--accent)] transition-colors" />
                </div>
                <div className="flex flex-wrap gap-2">
                  {/* Featured core strength chip with animated conic gradient border (§6) */}
                  {cat.featured && (
                    <span className="chip chip-featured text-[var(--accent)] font-semibold shadow-sm">
                      ★ {cat.featured}
                    </span>
                  )}
                  {cat.items
                    .filter((item) => item !== cat.featured)
                    .map((item) => (
                      <span key={item} className="chip">
                        {item}
                      </span>
                    ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
