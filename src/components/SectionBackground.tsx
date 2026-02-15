"use client";

/**
 * Animated section backgrounds for light and dark mode.
 *
 * Light mode: Wandering gradient blobs + optional sine wave lines
 * Dark mode:  Tech grid + scanning line + pulse rings
 *
 * Usage:
 *   <section className="relative overflow-hidden ...">
 *     <SectionBackground />
 *     <div className="relative z-10">...content...</div>
 *   </section>
 *
 * Variants:
 *   variant="primary"   — cyan + orange blobs (light), full scanner (dark)
 *   variant="secondary" — cyan + subtle blobs (light), grid only (dark)
 *   variant="minimal"   — single blob (light), grid only (dark)
 */

type Variant = "primary" | "secondary" | "minimal";

export default function SectionBackground({ variant = "primary" }: { variant?: Variant }) {
  return (
    <>
      {/* ─── LIGHT MODE: Gradient Blobs + Waves ─── */}
      <div className="absolute inset-0 dark:hidden pointer-events-none" aria-hidden="true">
        {/* Blobs */}
        <div
          className="absolute rounded-full blur-[80px] opacity-[0.10]"
          style={{
            width: 420,
            height: 420,
            background: "#00A8E8",
            top: "-8%",
            left: "-5%",
            animation: "blob-move1 16s ease-in-out infinite",
          }}
        />
        {variant !== "minimal" && (
          <div
            className="absolute rounded-full blur-[80px] opacity-[0.09]"
            style={{
              width: 360,
              height: 360,
              background: "#E8651A",
              bottom: "-6%",
              right: "-4%",
              animation: "blob-move2 20s ease-in-out infinite",
            }}
          />
        )}
        {variant === "primary" && (
          <div
            className="absolute rounded-full blur-[90px] opacity-[0.07]"
            style={{
              width: 300,
              height: 300,
              background: "#00A8E8",
              top: "45%",
              left: "50%",
              animation: "blob-move3 14s ease-in-out infinite",
            }}
          />
        )}

        {/* Sine wave lines (primary + secondary) */}
        {variant !== "minimal" && (
          <>
            <svg
              className="absolute w-[200%] left-[-50%] top-0 opacity-[0.06]"
              viewBox="0 0 2400 120"
              preserveAspectRatio="none"
              style={{ animation: "wave-shift 14s linear infinite" }}
            >
              <path
                d="M0,60 C200,120 400,0 600,60 C800,120 1000,0 1200,60 C1400,120 1600,0 1800,60 C2000,120 2200,0 2400,60"
                fill="none"
                stroke="#00A8E8"
                strokeWidth="2"
              />
              <path
                d="M0,80 C200,20 400,100 600,50 C800,0 1000,80 1200,40 C1400,0 1600,80 1800,40 C2000,0 2200,80 2400,40"
                fill="none"
                stroke="#E8651A"
                strokeWidth="1.5"
              />
            </svg>
            <svg
              className="absolute w-[200%] left-[-50%] bottom-0 opacity-[0.05]"
              viewBox="0 0 2400 120"
              preserveAspectRatio="none"
              style={{ animation: "wave-shift 18s linear infinite reverse" }}
            >
              <path
                d="M0,40 C200,100 400,0 600,60 C800,100 1000,20 1200,50 C1400,100 1600,20 1800,50 C2000,100 2200,20 2400,50"
                fill="none"
                stroke="#00A8E8"
                strokeWidth="1.5"
              />
            </svg>
          </>
        )}
      </div>

      {/* ─── DARK MODE: Tech Grid + Scanner + Pulse Rings ─── */}
      <div className="absolute inset-0 hidden dark:block pointer-events-none" aria-hidden="true">
        {/* Grid lines */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,180,216,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,180,216,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Scanning lines */}
        {variant !== "minimal" && (
          <>
            <div className="scan-line-el" />
            <div className="scan-line-el" style={{ animationDelay: "-2s" }} />
          </>
        )}

        {/* Pulse rings */}
        {variant === "primary" && (
          <>
            <div
              className="absolute rounded-full border border-light-cyan/20"
              style={{
                width: 160,
                height: 160,
                top: "25%",
                left: "15%",
                animation: "pulse-out 4s ease-out infinite",
              }}
            />
            <div
              className="absolute rounded-full border border-light-cyan/15"
              style={{
                width: 120,
                height: 120,
                top: "60%",
                right: "20%",
                animation: "pulse-out 4s ease-out infinite -1.8s",
              }}
            />
            <div
              className="absolute rounded-full border border-light-cyan/10"
              style={{
                width: 200,
                height: 200,
                bottom: "10%",
                left: "55%",
                animation: "pulse-out 5s ease-out infinite -3s",
              }}
            />
          </>
        )}
        {variant === "secondary" && (
          <div
            className="absolute rounded-full border border-light-cyan/15"
            style={{
              width: 140,
              height: 140,
              top: "40%",
              left: "25%",
              animation: "pulse-out 4.5s ease-out infinite",
            }}
          />
        )}
      </div>
    </>
  );
}
