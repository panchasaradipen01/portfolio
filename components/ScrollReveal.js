"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.9,
  distance = 36,
  scale = 1,
  blur = 0,
  stagger = 0,
  triggerOnce = false,
  className = "",
}) {
  const elementRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined" || !elementRef.current) return;

    const el = elementRef.current;

    let x = 0;
    let y = 0;

    if (direction === "up") y = distance;
    else if (direction === "down") y = -distance;
    else if (direction === "left") x = distance;
    else if (direction === "right") x = -distance;

    gsap.set(el, {
      opacity: 0,
      x: x,
      y: y,
      scale: scale,
      filter: blur > 0 ? `blur(${blur}px)` : "none",
    });

    const anim = gsap.to(el, {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      duration: duration,
      delay: delay,
      ease: "power3.out",
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
  }, [direction, delay, duration, distance, scale, blur, stagger, triggerOnce]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}
