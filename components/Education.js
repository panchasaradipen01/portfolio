"use client";

import { resumeData } from "@/data/resume";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

export default function Education() {
  const { education } = resumeData;

  return (
    <section id="education" className="section-shell section-block">
      <ScrollReveal direction="up" duration={0.8}>
        <div className="section-heading">
          <div className="eyebrow">Education</div>
          <h2 className="font-heading text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            Strong academic grounding in software systems
          </h2>
        </div>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.15} duration={0.8}>
        <motion.div 
          whileHover={{ y: -5, boxShadow: "0 30px 70px -25px rgba(15,23,42,0.18)" }}
          className="panel p-6 md:p-10 cursor-default bg-white/70 backdrop-blur-md"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="font-heading text-2xl font-bold text-slate-950 md:text-3xl">{education.degree}</h3>
              <p className="mt-3 text-lg font-semibold text-slate-700 md:text-xl">{education.institution}</p>
              <p className="mt-1.5 text-base font-medium text-slate-500">{education.location}</p>
            </div>
            
            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="rounded-[24px] border border-slate-900/10 bg-white/70 px-6 py-5 md:text-right shadow-sm"
            >
              <p className="font-heading text-2xl font-bold text-teal-700 md:text-3xl">
                CGPA: {education.cgpa}
              </p>
              <p className="mt-2 text-base font-semibold text-slate-650 md:text-lg">
                {education.startDate} - {education.endDate}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </ScrollReveal>
    </section>
  );
}

