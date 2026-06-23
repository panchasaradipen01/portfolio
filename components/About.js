"use client";

import { resumeData } from "@/data/resume";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  const softSkills = resumeData.skills.soft;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const pillVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  };

  return (
    <section id="about" className="section-shell section-block">
      <ScrollReveal direction="up" duration={0.8}>
        <div className="section-heading">
          <div className="eyebrow">About</div>
          <h2 className="font-heading text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            Frontend work grounded in clarity, speed, and product thinking
          </h2>
        </div>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.15} duration={0.8}>
        <div className="panel grid gap-8 px-6 py-8 md:grid-cols-[1.1fr_0.9fr] md:px-10 md:py-10 bg-white/70 backdrop-blur-md">
          <div className="flex flex-col justify-between">
            <p className="max-w-3xl text-lg leading-8 text-slate-700 md:text-xl font-light">
              {resumeData.about.summary}
            </p>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-8 flex flex-wrap gap-2.5"
            >
              {softSkills.map((skill) => (
                <motion.span 
                  key={skill} 
                  variants={pillVariants}
                  whileHover={{ y: -3, scale: 1.05, backgroundColor: "rgba(15, 118, 110, 0.15)" }}
                  className="pill bg-[rgba(15,118,110,0.08)] border-teal-800/10 text-teal-850 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <motion.div 
              whileHover={{ y: -5, boxShadow: "0 20px 40px -15px rgba(15,23,42,0.12)" }}
              className="rounded-3xl border border-slate-900/10 bg-white/80 p-5 cursor-default transition-all"
            >
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Working style</p>
              <p className="mt-2 text-base font-semibold text-slate-800">Clean systems, thoughtful UX, steady iteration</p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -5, boxShadow: "0 20px 40px -15px rgba(15,23,42,0.12)" }}
              className="rounded-3xl border border-slate-900/10 bg-white/80 p-5 cursor-default transition-all"
            >
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Strengths</p>
              <p className="mt-2 text-base font-semibold text-slate-800">Frontend architecture, responsiveness, polish</p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -5, boxShadow: "0 30px 60px -20px rgba(15,23,42,0.25)" }}
              className="rounded-3xl border border-slate-900/5 bg-slate-950 p-5 text-white sm:col-span-2 cursor-default transition-all"
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-400">What I optimize for</p>
              <p className="mt-3 text-base leading-7 text-white/85">
                Faster load times, reusable components, API-driven product UI, and interfaces that feel stable on every screen size.
              </p>
            </motion.div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
