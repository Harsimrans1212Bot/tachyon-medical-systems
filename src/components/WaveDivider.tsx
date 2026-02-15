"use client";
import { useEffect, useRef } from "react";

/**
 * Animated sine wave divider placed between sections.
 * Waves move left/right based on scroll direction.
 * Place at bottom of a section (position: relative parent needed).
 */
export default function WaveDivider({ flip = false, className = "" }: { flip?: boolean; className?: string }) {
  const ref = useRef<SVGSVGElement>(null);
  const lastScroll = useRef(0);
  const offset = useRef(0);
  const raf = useRef<number>(0);

  useEffect(() => {
    const svg = ref.current;
    if (!svg) return;

    const onScroll = () => {
      const scrollY = window.scrollY;
      const delta = scrollY - lastScroll.current;
      // Move waves based on scroll direction
      offset.current += delta * 0.3;
      lastScroll.current = scrollY;

      if (raf.current) cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(() => {
        if (svg) {
          svg.style.transform = `translateX(${offset.current % 600}px)${flip ? ' scaleY(-1)' : ''}`;
        }
      });
    };

    lastScroll.current = window.scrollY;
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [flip]);

  return (
    <div className={`absolute left-0 right-0 overflow-hidden pointer-events-none h-16 z-[2] ${flip ? 'top-0' : 'bottom-0'} ${className}`}>
      <svg
        ref={ref}
        className="w-[300%] h-full opacity-[0.08]"
        viewBox="0 0 2400 80"
        preserveAspectRatio="none"
        style={{ transform: flip ? 'scaleY(-1)' : undefined }}
      >
        <path d="M0,40 C100,80 200,0 300,40 C400,80 500,0 600,40 C700,80 800,0 900,40 C1000,80 1100,0 1200,40 C1300,80 1400,0 1500,40 C1600,80 1700,0 1800,40 C1900,80 2000,0 2100,40 C2200,80 2300,0 2400,40" fill="none" stroke="#00A8E8" strokeWidth="2.5" />
        <path d="M0,55 C100,15 200,75 300,35 C400,0 500,60 600,30 C700,0 800,60 900,30 C1000,0 1100,60 1200,30 C1300,0 1400,60 1500,30 C1600,0 1700,60 1800,30 C1900,0 2000,60 2100,30 C2200,0 2300,60 2400,30" fill="none" stroke="#E8651A" strokeWidth="1.5" />
      </svg>
    </div>
  );
}
