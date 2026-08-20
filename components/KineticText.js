"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function KineticText({
  text,
  className = "",
  as: Component = "h2",
  delay = 0,
  stagger = 0.08,
  triggerOnce = false,
  accentWord = null,
  accentClass = "text-[var(--accent)]",
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return;

    const el = containerRef.current;
    const words = el.querySelectorAll(".kinetic-word");

    gsap.set(words, {
      y: "110%",
      opacity: 0,
    });

    const anim = gsap.to(words, {
      y: "0%",
      opacity: 1,
      duration: 0.85,
      ease: "cubic-bezier(.22,.68,.32,1)",
      stagger: stagger,
      delay: delay,
      scrollTrigger: {
        trigger: el,
        start: "top 88%",
        toggleActions: triggerOnce ? "play none none none" : "play reverse play reverse",
      },
    });

    return () => {
      anim.scrollTrigger?.kill();
      anim.kill();
    };
  }, [delay, stagger, triggerOnce]);

  const words = text.split(" ");

  return (
    <Component ref={containerRef} className={className}>
      {words.map((word, i) => {
        const isAccent = accentWord && word.toLowerCase().includes(accentWord.toLowerCase());
        return (
          <span key={`${word}-${i}`} className="kinetic-word-wrap">
            <span className={`kinetic-word ${isAccent ? accentClass : ""}`}>
              {word}
            </span>
          </span>
        );
      })}
    </Component>
  );
}
