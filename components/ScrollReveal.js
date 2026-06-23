"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin safely
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.8,
  distance = 40,
  stagger = 0,
  triggerOnce = true,
  className = "",
}) {
  const elementRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined" || !elementRef.current) return;

    const el = elementRef.current;
    
    // Choose start values based on direction
    let x = 0;
    let y = 0;
    
    if (direction === "up") y = distance;
    else if (direction === "down") y = -distance;
    else if (direction === "left") x = distance;
    else if (direction === "right") x = -distance;

    // Set initial state
    gsap.set(el, {
      opacity: 0,
      x: x,
      y: y,
    });

    // Create ScrollTrigger animation
    const anim = gsap.to(el, {
      opacity: 1,
      x: 0,
      y: 0,
      duration: duration,
      delay: delay,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 88%", // Triggers when top of element reaches 88% of viewport height
        toggleActions: triggerOnce ? "play none none none" : "play reverse play reverse",
      },
    });

    // Clean up
    return () => {
      anim.scrollTrigger?.kill();
      anim.kill();
    };
  }, [direction, delay, duration, distance, stagger, triggerOnce]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}
