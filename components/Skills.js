"use client";

import { resumeData } from "@/data/resume";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

export default function Skills() {
  const { skills } = resumeData;

  const skillCategories = [
    { title: "Languages", items: skills.languages },
    { title: "Frontend", items: skills.frontend },
    { title: "Web", items: skills.web },
    { title: "Testing", items: skills.testing },
    { title: "Tools", items: skills.tools },
    { title: "Other", items: skills.other },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section id="skills" className="section-shell section-block">
      <ScrollReveal direction="up" duration={0.8}>
        <div className="section-heading">
          <div className="eyebrow">Skills</div>
          <h2 className="font-heading text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            The toolkit behind reliable product UI
          </h2>
        </div>
      </ScrollReveal>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
      >
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            variants={cardVariants}
            whileHover={{ y: -8, boxShadow: "0 30px 60px -20px rgba(15,23,42,0.18)" }}
            className={`grid-card flex flex-col justify-between ${
              index % 3 === 0
                ? "bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(226,248,245,0.72))]"
                : index % 3 === 1
                  ? "bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(255,239,229,0.72))]"
                  : "bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(232,239,255,0.72))]"
            }`}
          >
            <div>
              <h3 className="mb-5 flex items-center gap-3 font-heading text-xl font-semibold text-slate-950 md:text-2xl">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-950 text-xs font-bold text-white shadow-[0_12px_30px_-18px_rgba(15,23,42,0.65)]">
                  {category.title.charAt(0)}
                </span>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {category.items.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ y: -3, scale: 1.05, borderColor: "rgba(15, 118, 110, 0.4)", color: "#0f766e" }}
                    transition={{ type: "spring", stiffness: 500, damping: 15 }}
                    className="pill hover:bg-white cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
