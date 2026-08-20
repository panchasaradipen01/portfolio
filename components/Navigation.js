"use client";

import { resumeData } from "@/data/resume";
import DownloadPDF from "./DownloadPDF";
import ThemeToggle from "./ThemeToggle";
import { useEffect, useState } from "react";

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "stack", "experience", "projects", "education", "contact"];
      const pos = window.scrollY + window.innerHeight * 0.4;
      
      setScrolled(window.scrollY > 80);

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el && el.offsetTop <= pos) {
          setActiveSection(sectionId);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (!target) return;

    const wipe = document.getElementById("glass-wipe-overlay");
    if (wipe) {
      wipe.classList.add("active");
      setTimeout(() => {
        target.scrollIntoView({ behavior: "smooth" });
        setTimeout(() => {
          wipe.classList.remove("active");
        }, 220);
      }, 160);
    } else {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { label: "about", href: "#about", id: "about" },
    { label: "stack", href: "#stack", id: "stack" },
    { label: "experience", href: "#experience", id: "experience" },
    { label: "projects", href: "#projects", id: "projects" },
    { label: "contact", href: "#contact", id: "contact" },
  ];

  const sideRailItems = [
    { label: "intro", href: "#hero", id: "hero" },
    { label: "about", href: "#about", id: "about" },
    { label: "stack", href: "#stack", id: "stack" },
    { label: "experience", href: "#experience", id: "experience" },
    { label: "projects", href: "#projects", id: "projects" },
    { label: "education", href: "#education", id: "education" },
    { label: "contact", href: "#contact", id: "contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-[var(--surface-glass)] backdrop-blur-md transition-all duration-300 ${
          scrolled ? "border-b border-[var(--border)] shadow-sm" : "border-b border-transparent"
        }`}
      >
        <div className="wrap flex items-center justify-between h-[68px]">
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="font-mono text-sm tracking-wide text-[var(--text)] hover:opacity-90 transition-opacity"
          >
            dipen<span className="text-[var(--accent)]">.</span>dev
          </a>

          <ul className="flex items-center gap-4 sm:gap-7 list-none m-0 p-0 overflow-x-auto max-w-[48vw] sm:max-w-none scrollbar-none">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`font-mono text-xs transition-colors duration-200 relative py-1 ${
                    activeSection === link.id ? "text-[var(--text)] font-semibold" : "text-[var(--text-dim)] hover:text-[var(--text)]"
                  }`}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <span className="absolute left-0 right-0 -bottom-1 h-[1px] bg-[var(--accent)]" />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <DownloadPDF />
          </div>
        </div>
      </header>

      {/* Side Rail Navigation for desktop */}
      <nav className="fixed right-7 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4.5 pointer-events-auto">
        {sideRailItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="group flex items-center justify-end gap-2.5 py-1"
            >
              <span
                className={`font-mono text-[11px] transition-all duration-200 ${
                  isActive
                    ? "opacity-100 translate-x-0 text-[var(--accent)] font-medium"
                    : "opacity-0 translate-x-1.5 text-[var(--text-faint)] group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-[var(--text-dim)]"
                }`}
              >
                {item.label}
              </span>
              <span
                className={`rounded-full transition-all duration-300 ${
                  isActive
                    ? "w-[7px] h-[7px] bg-[var(--accent)] scale-150 shadow-[0_0_0_4px_var(--accent-soft)]"
                    : "w-[7px] h-[7px] bg-[var(--text-faint)] group-hover:bg-[var(--text-dim)]"
                }`}
              />
            </a>
          );
        })}
      </nav>
    </>
  );
}
