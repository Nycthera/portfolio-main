"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { animate, stagger } from "animejs";

export function AnimatedPage({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!rootRef.current) return;

    animate(".reveal", {
      translateY: [24, 0],
      opacity: [0, 1],
      delay: stagger(90),
      duration: 900,
      easing: "easeOutExpo",
    });
    animate(".orbit-ring", {
      rotate: "1turn",
      duration: 26000,
      easing: "linear",
      loop: true,
    });
    animate(".pulse-dot", {
      scale: [1, 1.5],
      opacity: [1, 0.35],
      duration: 1200,
      easing: "easeInOutSine",
      direction: "alternate",
      loop: true,
    });
    animate(".signal-scan", {
      translateY: [-125, 125],
      opacity: [0, 1, 0],
      duration: 2600,
      easing: "easeInOutSine",
      loop: true,
    });
  }, []);

  return <main ref={rootRef}>{children}</main>;
}
