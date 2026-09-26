"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { animate, createScope, stagger } from "animejs";

export function AnimatedPage({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!rootRef.current) return;

    const scope = createScope({
      root: rootRef.current,
      mediaQueries: { reduceMotion: "(prefers-reduced-motion: reduce)" },
    }).add((self) => {
      if (paused || self?.matches.reduceMotion) return;

      animate(".hero .reveal", {
        translateY: [24, 0],
        opacity: [0, 1],
        delay: stagger(90),
        duration: 900,
        ease: "outExpo",
      });
      animate(".soul", {
        scale: [1, 1.08],
        opacity: [1, 0.35],
        duration: 800,
        ease: "inOutSine",
        alternate: true,
        loop: true,
      });
    });
    return () => scope.revert();
  }, [paused]);

  return (
    <div ref={rootRef} className="page-shell" data-motion-paused={paused}>
      {children}
      <button
        type="button"
        className="motion-toggle"
        aria-pressed={paused}
        onClick={() => setPaused(!paused)}
      >
        {paused ? "▶ Resume motion" : "Ⅱ Pause motion"}
      </button>
    </div>
  );
}
