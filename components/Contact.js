"use client";

import { resumeData } from "@/data/resume";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  const { contact } = resumeData.personalInfo;

  const contactItems = [
    {
      type: "Phone",
      value: contact.phone,
      href: `tel:${contact.phone}`,
      icon: (
        <svg
          className="mb-3 h-8 w-8 text-teal-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
    },
    {
      type: "Email",
      value: contact.email,
      href: `mailto:${contact.email}`,
      icon: (
        <svg
          className="w-8 h-8 mb-3"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"
            fill="#EA4335"
          />
          <path
            d="M0 5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457z"
            fill="#4285F4"
          />
          <path
            d="M12 16.64l6.545-4.91v9.273h3.819c.904 0 1.636-.732 1.636-1.636V5.457c0-2.023-2.309-3.178-3.927-1.964L12 9.548v7.092z"
            fill="#34A853"
          />
          <path
            d="M5.455 4.64L3.927 3.493C2.309 2.28 0 3.434 0 5.457v13.909c0 .904.732 1.636 1.636 1.636h-3.819V11.73L12 16.64V9.548L5.455 4.64z"
            fill="#FBBC04"
          />
        </svg>
      ),
    },
    {
      type: "LinkedIn",
      value: "Connect with me",
      href: contact.linkedin,
      icon: (
        <svg
          className="w-8 h-8 mb-3"
          style={{ color: "#0077B5" }}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      type: "LeetCode",
      value: "Coding profile",
      href: contact.leetcode,
      icon: (
        <svg className="mb-3 h-8 w-8 text-amber-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.483 0a1.25 1.25 0 0 0-.87.365L5.258 7.58a6.643 6.643 0 0 0 0 9.397l4.022 3.947a1.25 1.25 0 1 0 1.75-1.786l-4.022-3.947a4.143 4.143 0 0 1 0-5.854l7.356-7.214A1.25 1.25 0 0 0 13.483 0Z" />
          <path d="M10.516 23.635a1.25 1.25 0 0 1-.88-2.136l7.357-7.215a4.143 4.143 0 0 0 0-5.853l-4.024-3.948a1.25 1.25 0 1 1 1.75-1.786l4.024 3.948a6.643 6.643 0 0 1 0 9.397l-7.356 7.214a1.245 1.245 0 0 1-.871.379Z" />
          <path d="M8.75 13.25a1.25 1.25 0 1 1 0-2.5h8.5a1.25 1.25 0 1 1 0 2.5h-8.5Z" />
        </svg>
      ),
    },
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

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 200, damping: 18 },
    },
  };

  return (
    <section id="contact" className="section-shell section-block">
      <ScrollReveal direction="up" duration={0.8}>
        <div className="section-heading">
          <div className="eyebrow">Contact</div>
          <h2 className="font-heading text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            Let&apos;s build something thoughtful
          </h2>
        </div>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.15} duration={0.8}>
        <div className="panel p-6 md:p-10 bg-white/70 backdrop-blur-md">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-5 md:grid-cols-2 xl:grid-cols-4 md:gap-6"
          >
            {contactItems.map((item) => (
              <motion.a
                key={item.type}
                href={item.href}
                target={item.type === "LinkedIn" || item.type === "LeetCode" ? "_blank" : undefined}
                rel={item.type === "LinkedIn" || item.type === "LeetCode" ? "noopener noreferrer" : undefined}
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.02, boxShadow: "0 20px 40px -15px rgba(15,23,42,0.12)" }}
                className="group rounded-[24px] border border-slate-900/10 bg-white/80 p-6 text-left transition-colors duration-300 hover:border-slate-900/20 shadow-sm"
              >
                <div className="mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 origin-left">
                  {item.icon}
                </div>
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">{item.type}</p>
                <p className="text-base font-semibold text-slate-900 transition-colors duration-350 group-hover:text-teal-700 md:text-lg break-all">
                  {item.value}
                </p>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </ScrollReveal>
    </section>
  );
}
