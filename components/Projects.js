"use client";

import { resumeData } from "@/data/resume";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

export default function Projects() {
  const { projects } = resumeData;

  return (
    <section id="projects" className="section-shell section-block">
      <ScrollReveal direction="up" duration={0.8}>
        <div className="section-heading">
          <div className="eyebrow">Projects</div>
          <h2 className="font-heading text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            Selected build from hands-on practice
          </h2>
        </div>
      </ScrollReveal>

      {projects.map((project, index) => (
        <ScrollReveal
          key={`${project.name}-${index}`}
          direction="up"
          delay={index * 0.15}
          duration={0.8}
        >
          <motion.div
            whileHover={{ y: -6, boxShadow: "0 40px 90px -30px rgba(15,23,42,0.2)" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="panel gradient-stroke mb-6 p-6 md:p-10 cursor-default bg-white/70 backdrop-blur-md"
          >
            <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-600 font-semibold">Case study</p>
                <h3 className="mt-3 font-heading text-2xl font-bold text-slate-950 md:text-3xl">
                  {project.name}
                </h3>
              </div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="self-start rounded-full border border-slate-900/10 bg-white/75 px-4 py-2 text-sm font-medium text-slate-600 shadow-sm"
              >
                Product + engineering focused
              </motion.div>
            </div>
            <p className="mb-6 max-w-4xl text-base leading-8 text-slate-700 md:text-lg">
              {project.description}
            </p>
            {project.responsibilities ? (
              <ul className="mb-8 ml-5 list-disc space-y-3 text-sm text-slate-700 md:text-base">
                {project.responsibilities.map((item, idx) => (
                  <motion.li 
                    key={item} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + idx * 0.08, duration: 0.5 }}
                    className="leading-7 marker:text-teal-700"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            ) : null}
            <div className="flex flex-wrap gap-2.5">
              {project.technologies.map((tech) => (
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
          </motion.div>
        </ScrollReveal>
      ))}
    </section>
  );
}
