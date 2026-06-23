"use client";

import { resumeData } from "@/data/resume";
import { motion } from "framer-motion";

export default function Navigation() {
  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav 
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 border-b border-black/5 bg-white/55 backdrop-blur-xl"
    >
      <div className="section-shell">
        <div className="flex min-h-18 items-center justify-between gap-4 py-4">
          <a href="#">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="font-heading text-lg font-bold tracking-tight text-slate-900 md:text-xl cursor-pointer"
            >
              {resumeData.personalInfo.name.split(" ")[0]} <span className="text-teal-700">{resumeData.personalInfo.name.split(" ")[1]}</span>
            </motion.div>
          </a>
          <div className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                whileHover={{ y: -1, color: "#0f766e" }}
                className="relative text-sm font-medium text-slate-600 transition-colors duration-150"
              >
                {item.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px -8px rgba(15,23,42,0.3)" }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center rounded-full bg-slate-950 px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-slate-800"
            >
              Hire Me
            </motion.a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
