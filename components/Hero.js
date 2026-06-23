"use client";

import { resumeData } from "@/data/resume";
import DownloadPDF from "./DownloadPDF";
import HeroCanvas3D from "./HeroCanvas3D";
import { motion } from "framer-motion";

export default function Hero() {
  const { personalInfo } = resumeData;
  const spotlightItems = [
    { label: "Location", value: personalInfo.location },
    { label: "Primary stack", value: "React, Next.js, TypeScript, Tailwind" },
    { label: "Working style", value: "Reusable systems, clean UX, faster interfaces" },
  ];
  const stats = [
    { value: "25%", label: "faster load time improvements" },
    { value: "30%", label: "fewer UI bugs through structure" },
    { value: "4", label: "teams across intern to frontend roles" },
  ];

  // Framer Motion variant setups
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section className="section-shell section-block pt-16 md:pt-24">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="panel gradient-stroke relative overflow-hidden px-6 py-12 md:px-10 md:py-16"
      >
        <div className="pointer-events-none absolute -left-10 top-12 h-32 w-32 rounded-full bg-teal-500/15 blur-3xl animate-float-slow" />
        <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl animate-drift" />
        
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          {/* Left Column: Heading and copy */}
          <div className="space-y-6">
            <motion.div variants={itemVariants} className="eyebrow">
              {personalInfo.availability}
            </motion.div>

            <motion.h1 
              variants={itemVariants} 
              className="font-heading text-5xl font-bold tracking-tight text-slate-950 md:text-7xl leading-[1.1]"
            >
              {personalInfo.name}
            </motion.h1>

            <motion.p 
              variants={itemVariants} 
              className="text-xl text-slate-600 md:text-2xl font-light"
            >
              {personalInfo.title}
            </motion.p>

            <motion.p 
              variants={itemVariants} 
              className="max-w-2xl text-base leading-8 text-slate-600 md:text-lg"
            >
              I build polished, scalable interfaces with React and Next.js, with strong attention to performance, responsive UI, and reusable frontend architecture.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-2.5">
              <span className="pill">{personalInfo.experience}</span>
              <span className="pill">{personalInfo.tagline}</span>
            </motion.div>

            {/* Stats Row */}
            <motion.div 
              variants={itemVariants} 
              className="grid gap-4 sm:grid-cols-3 pt-4"
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -6, scale: 1.02, boxShadow: "0 20px 40px -15px rgba(15,23,42,0.15)" }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="rounded-[24px] border border-slate-900/10 bg-white/70 px-4 py-4 backdrop-blur cursor-default"
                >
                  <p className="font-heading text-3xl font-bold text-slate-950">{stat.value}</p>
                  <p className="mt-1.5 text-xs font-medium leading-5 text-slate-500 uppercase tracking-wider">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Action buttons */}
            <motion.div 
              variants={itemVariants} 
              className="flex flex-wrap gap-3 pt-4"
            >
              <motion.a
                href={`mailto:${personalInfo.contact.email}`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition-all shadow-[0_12px_24px_-10px_rgba(15,23,42,0.4)] hover:bg-slate-800"
              >
                Start a conversation
              </motion.a>
              
              <motion.a
                href={personalInfo.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center rounded-full border border-slate-900/10 bg-white/70 px-6 py-3.5 text-sm font-semibold text-slate-800 transition-all hover:bg-white hover:border-slate-900/20"
              >
                View LinkedIn
              </motion.a>
              
              <DownloadPDF />
            </motion.div>
          </div>

          {/* Right Column: 3D Visualization and Snapshot overlay */}
          <motion.div 
            variants={itemVariants}
            className="panel relative overflow-hidden border-white/80 bg-white/30 p-1 backdrop-blur-md shadow-2xl flex flex-col justify-between"
            style={{ minHeight: "480px" }}
          >
            {/* Ambient Title */}
            <div className="absolute left-6 top-6 z-20 flex items-center justify-between w-[90%] pointer-events-none">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-teal-800/80">3D Sandbox</p>
                <h3 className="text-xs font-semibold text-slate-700">Interactive Particle Field</h3>
              </div>
              <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_0_6px_rgba(34,197,94,0.2)] animate-pulse" />
            </div>

            {/* ThreeJS Canvas */}
            <div className="absolute inset-0 z-10 w-full h-full">
              <HeroCanvas3D />
            </div>

            {/* Floating Glass Widgets overlay */}
            <div className="relative z-20 pointer-events-none mt-20 p-5 flex flex-col justify-end h-full gap-4">
              
              {/* Stack Detail Badge */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, type: "spring" }}
                className="self-end max-w-[260px] rounded-2xl border border-white/60 bg-white/70 p-3.5 backdrop-blur-md shadow-lg pointer-events-auto hover:scale-102 transition-transform"
              >
                <span className="text-[9px] uppercase tracking-widest text-slate-400 font-bold">Stack Core</span>
                <p className="text-xs font-semibold text-slate-800 mt-0.5">React, Next.js, TypeScript, Tailwind</p>
              </motion.div>

              {/* Location/Work Style Badge */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, type: "spring" }}
                className="self-start max-w-[240px] rounded-2xl border border-white/60 bg-white/70 p-3.5 backdrop-blur-md shadow-lg pointer-events-auto hover:scale-102 transition-transform"
              >
                <span className="text-[9px] uppercase tracking-widest text-slate-400 font-bold">Location</span>
                <p className="text-xs font-semibold text-slate-800 mt-0.5">Ahmedabad, India • Remote Available</p>
              </motion.div>

              {/* Core Strength Callout */}
              <motion.div 
                variants={itemVariants}
                className="mt-6 rounded-[24px] border border-slate-900/5 bg-slate-950/90 px-5 py-4 text-white shadow-xl pointer-events-auto hover:bg-slate-950 transition-colors duration-300"
              >
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-bold">Product Focus</p>
                <p className="mt-2 text-xs leading-6 text-slate-200">
                  Performance-oriented frontend engineering, component reuse architecture, and high-fidelity interfaces.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
