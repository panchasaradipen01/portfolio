"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const curTheme = document.documentElement.getAttribute("data-theme") || "dark";
    setTheme(curTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    
    // Trigger soft glass flash wipe
    const wipe = document.getElementById("glass-wipe-overlay");
    if (wipe) {
      wipe.classList.add("active");
      setTimeout(() => {
        document.documentElement.setAttribute("data-theme", nextTheme);
        localStorage.setItem("theme", nextTheme);
        setTheme(nextTheme);
        setTimeout(() => {
          wipe.classList.remove("active");
        }, 180);
      }, 150);
    } else {
      document.documentElement.setAttribute("data-theme", nextTheme);
      localStorage.setItem("theme", nextTheme);
      setTheme(nextTheme);
    }
  };

  if (!mounted) {
    return (
      <div className="w-8 h-8 rounded-full border border-[var(--border)] bg-transparent flex items-center justify-center opacity-0" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      className="inline-flex items-center justify-center w-8.5 h-8.5 rounded-full border border-[var(--border)] bg-[var(--surface-glass)] backdrop-blur-md text-[var(--text-dim)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] cursor-pointer"
    >
      {theme === "dark" ? (
        // Sun icon for dark mode
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="5" strokeWidth="2" />
          <line x1="12" y1="1" x2="12" y2="3" strokeWidth="2" strokeLinecap="round" />
          <line x1="12" y1="21" x2="12" y2="23" strokeWidth="2" strokeLinecap="round" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" strokeWidth="2" strokeLinecap="round" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" strokeWidth="2" strokeLinecap="round" />
          <line x1="1" y1="12" x2="3" y2="12" strokeWidth="2" strokeLinecap="round" />
          <line x1="21" y1="12" x2="23" y2="12" strokeWidth="2" strokeLinecap="round" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" strokeWidth="2" strokeLinecap="round" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ) : (
        // Moon icon for light mode
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      )}
    </button>
  );
}
