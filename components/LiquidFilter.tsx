"use client";

export default function LiquidFilter() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none fixed -z-10 h-0 w-0"
      width="0"
      height="0"
    >
      <defs>
        <filter id="liquid">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.012 0.018"
            numOctaves="2"
            seed="2"
          >
            <animate
              attributeName="baseFrequency"
              dur="14s"
              values="0.012 0.018;0.02 0.012;0.012 0.018"
              repeatCount="indefinite"
            />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" scale="18" />
        </filter>
        <filter id="liquid-strong">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.018 0.024"
            numOctaves="2"
            seed="4"
          >
            <animate
              attributeName="baseFrequency"
              dur="6s"
              values="0.018 0.024;0.04 0.02;0.018 0.024"
              repeatCount="indefinite"
            />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" scale="40" />
        </filter>
      </defs>
    </svg>
  );
}
