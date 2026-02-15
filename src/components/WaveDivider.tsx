"use client";
import { useEffect, useRef } from "react";

/**
 * Sine wave divider for top/bottom of light sections.
 * Moves left on scroll down, right on scroll up.
 * position="top" or "bottom"
 */
export default function WaveDivider({ position = "bottom" }: { position?: "top" | "bottom" }) {
  const ref = useRef<SVGSVGElement>(null);
  const lastScroll = useRef(0);
  const offset = useRef(0);

  useEffect(() => {
    const svg = ref.current;
    if (!svg) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const delta = scrollY - lastScroll.current;
        offset.current += delta * 0.4;
        lastScroll.current = scrollY;
        svg.style.transform = `translateX(${-(Math.abs(offset.current) % 600)}px)`;
        ticking = false;
      });
    };

    lastScroll.current = window.scrollY;
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`absolute left-0 right-0 overflow-hidden pointer-events-none h-12 z-[2] ${position === "top" ? "top-0" : "bottom-0"}`}
    >
      <svg
        ref={ref}
        className="h-full opacity-[0.15]"
        style={{ width: "300%", minWidth: "2400px" }}
        viewBox="0 0 2400 60"
        preserveAspectRatio="none"
      >
        <path
          d="M0,30 C75,55 150,5 225,30 C300,55 375,5 450,30 C525,55 600,5 675,30 C750,55 825,5 900,30 C975,55 1050,5 1125,30 C1200,55 1275,5 1350,30 C1425,55 1500,5 1575,30 C1650,55 1725,5 1800,30 C1875,55 1950,5 2025,30 C2100,55 2175,5 2250,30 C2325,55 2400,5 2400,30"
          fill="none"
          stroke="#00A8E8"
          strokeWidth="2"
        />
        <path
          d="M0,42 C75,17 150,52 225,27 C300,7 375,47 450,27 C525,7 600,47 675,27 C750,7 825,47 900,27 C975,7 1050,47 1125,27 C1200,7 1275,47 1350,27 C1425,7 1500,47 1575,27 C1650,7 1725,47 1800,27 C1875,7 1950,47 2025,27 C2100,7 2175,47 2250,27 C2325,7 2400,47 2400,27"
          fill="none"
          stroke="#E8651A"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
}
