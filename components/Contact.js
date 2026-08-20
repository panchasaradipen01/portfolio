"use client";

import { resumeData } from "@/data/resume";
import ScrollReveal from "./ScrollReveal";
import KineticText from "./KineticText";
import DownloadPDF from "./DownloadPDF";

export default function Contact() {
  const { personalInfo } = resumeData;

  const socialLinks = [
    { label: "LinkedIn ↗", href: personalInfo.contact.linkedin, isExternal: true },
    { label: "GitHub ↗", href: personalInfo.contact.github, isExternal: true },
    { label: "LeetCode ↗", href: personalInfo.contact.leetcode, isExternal: true },
    { label: personalInfo.contact.phone, href: `tel:${personalInfo.contact.phone}`, isExternal: false },
  ];

  return (
    <section id="contact" className="section-block">
      <div className="wrap">
        <div className="section-heading mb-10">
          <div className="eyebrow">~/contact</div>
          <KineticText
            text="Let's build something."
            as="h2"
            className="font-heading font-semibold text-[var(--text)] tracking-tight text-[clamp(2rem,4vw,3rem)]"
          />
        </div>

        <ScrollReveal direction="up" distance={45} delay={0.12} duration={0.9} blur={2}>
          <p className="font-heading font-normal text-[clamp(1.7rem,3.5vw,3rem)] max-w-[24ch] mb-8.5 text-[var(--text)] leading-tight">
            Open to full-stack &amp; frontend roles — reach me at{" "}
            <a
              href={`mailto:${personalInfo.contact.email}`}
              className="text-[var(--accent)] border-b border-[var(--accent)]/30 hover:border-[var(--accent)] transition-colors break-all sm:break-normal"
            >
              {personalInfo.contact.email}
            </a>
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" distance={30} delay={0.24} duration={0.8}>
          <div className="flex items-center gap-3.5 flex-wrap mb-15">
            <a className="btn solid" href={`mailto:${personalInfo.contact.email}`}>
              Send an email
            </a>
            <DownloadPDF />
          </div>
        </ScrollReveal>

        <div className="flex items-center gap-6 sm:gap-8 flex-wrap font-mono text-[0.8rem] text-[var(--text-dim)]">
          {socialLinks.map((link, idx) => (
            <ScrollReveal
              key={link.label}
              direction="up"
              distance={25}
              delay={0.3 + idx * 0.08}
              duration={0.8}
            >
              <a
                href={link.href}
                target={link.isExternal ? "_blank" : undefined}
                rel={link.isExternal ? "noopener noreferrer" : undefined}
                className="hover:text-[var(--accent)] transition-colors"
              >
                {link.label}
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
