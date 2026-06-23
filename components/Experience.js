"use client";

import { resumeData } from "@/data/resume";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

export default function Experience() {
  const { experience } = resumeData;

  return (
    <section id="experience" className="section-shell section-block">
      <ScrollReveal direction="up" duration={0.8}>
        <div className="section-heading">
          <div className="eyebrow">Experience</div>
          <h2 className="font-heading text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            Product work across fast-moving teams
          </h2>
        </div>
      </ScrollReveal>

      <div className="relative space-y-6">
        <div className="pointer-events-none absolute bottom-0 left-4 top-0 hidden w-px bg-gradient-to-b from-teal-700/0 via-teal-700/20 to-orange-700/0 md:block" />
        
        {experience.map((exp, index) => (
          <ScrollReveal
            key={`${exp.company}-${index}`}
            direction="left"
            delay={index * 0.1}
            duration={0.8}
          >
            <motion.div
              whileHover={{ y: -5, scale: 1.005, boxShadow: "0 30px 70px -25px rgba(15,23,42,0.18)" }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="panel relative p-6 md:ml-10 md:p-10 bg-white/70 backdrop-blur-md cursor-default"
            >
              {/* Timeline bubble */}
              <div className="absolute -left-[2.8rem] top-10 hidden h-4 w-4 rounded-full border-4 border-[#f6f1e8] bg-teal-700 shadow-[0_0_0_6px_rgba(15,118,110,0.14)] md:block" />
              
              <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="font-heading text-2xl font-bold text-slate-950 md:text-3xl">{exp.role}</h3>
                  <p className="mt-2 text-lg font-semibold text-slate-700 md:text-xl">{exp.company}</p>
                </div>
                <div className="md:text-right">
                  <p className="text-base font-semibold text-slate-800 md:text-lg">
                    {exp.startDate} - {exp.endDate}
                  </p>
                  <p className="mt-1 text-sm text-slate-500 md:text-base font-medium">{exp.location}</p>
                </div>
              </div>

              {exp.projects ? (
                <div className="space-y-5">
                  {exp.projects.map((project, projectIndex) => (
                    <div
                      key={`${project.name}-${projectIndex}`}
                      className="rounded-[24px] border border-slate-900/10 bg-white/65 p-5 md:p-6"
                    >
                      <h4 className="font-heading text-xl font-semibold text-slate-900 md:text-2xl">
                        {project.name}
                      </h4>
                      <p className="mb-4 mt-3 text-base leading-7 text-slate-600 md:text-lg">{project.description}</p>
                      <ul className="ml-5 list-disc space-y-2 text-sm text-slate-700 md:text-base">
                        {project.responsibilities.map((responsibility, respIndex) => (
                          <li key={respIndex} className="leading-7">{responsibility}</li>
                        ))}
                      </ul>
                      <div className="mt-5 flex flex-wrap gap-2.5">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="pill"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div>
                  <ul className="ml-5 list-disc space-y-3 text-sm text-slate-700 md:text-base">
                    {exp.responsibilities.map((responsibility, respIndex) => (
                      <motion.li 
                        key={respIndex} 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 + respIndex * 0.08 }}
                        className="leading-7 marker:text-teal-700"
                      >
                        {responsibility}
                      </motion.li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-2.5">
                    {exp.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ y: -3, scale: 1.05, borderColor: "rgba(15, 118, 110, 0.4)", color: "#0f766e" }}
                        transition={{ type: "spring", stiffness: 500, damping: 15 }}
                        className="pill cursor-default hover:bg-white"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
