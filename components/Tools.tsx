"use client";

import { Reveal, Stagger, StaggerItem } from "./Motion";
import { tools } from "@/lib/data";

// ------------------------------------------------------------------
// Gradient-ring circle container
// ------------------------------------------------------------------
function RingIcon({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative flex-shrink-0 rounded-full p-[2px]"
      style={{
        background:
          "conic-gradient(from 150deg, rgba(212,255,63,0.65) 0deg, rgba(212,255,63,0.08) 110deg, rgba(30,30,30,1) 160deg, rgba(30,30,30,1) 360deg)",
      }}
    >
      <div className="flex h-[78px] w-[78px] items-center justify-center rounded-full bg-[#111111]">
        {children}
      </div>
    </div>
  );
}

// ------------------------------------------------------------------
// Per-tool logo SVGs
// ------------------------------------------------------------------
function ToolLogo({ mark }: { mark: string }) {
  switch (mark) {
    /* ── Adobe Illustrator ── */
    case "Ai":
      return (
        <svg viewBox="0 0 44 44" className="h-[42px] w-[42px]" fill="none">
          <rect width="44" height="44" rx="8" fill="#FF7C00" />
          <text x="22" y="31" textAnchor="middle" fill="white"
            fontSize="19" fontFamily="Arial, Helvetica, sans-serif"
            fontWeight="bold" fontStyle="italic">Ai</text>
        </svg>
      );

    /* ── Adobe Photoshop ── */
    case "Ps":
      return (
        <svg viewBox="0 0 44 44" className="h-[42px] w-[42px]" fill="none">
          <rect width="44" height="44" rx="8" fill="#001E36" />
          <text x="22" y="31" textAnchor="middle" fill="#31A8FF"
            fontSize="19" fontFamily="Arial, Helvetica, sans-serif"
            fontWeight="bold" fontStyle="italic">Ps</text>
        </svg>
      );

    /* ── Adobe InDesign ── */
    case "Id":
      return (
        <svg viewBox="0 0 44 44" className="h-[42px] w-[42px]" fill="none">
          <rect width="44" height="44" rx="8" fill="#49021F" />
          <text x="22" y="31" textAnchor="middle" fill="#FF3366"
            fontSize="19" fontFamily="Arial, Helvetica, sans-serif"
            fontWeight="bold" fontStyle="italic">Id</text>
        </svg>
      );

    /* ── Adobe After Effects ── */
    case "Ae":
      return (
        <svg viewBox="0 0 44 44" className="h-[42px] w-[42px]" fill="none">
          <rect width="44" height="44" rx="8" fill="#00005B" />
          <text x="22" y="31" textAnchor="middle" fill="#9999FF"
            fontSize="19" fontFamily="Arial, Helvetica, sans-serif"
            fontWeight="bold" fontStyle="italic">Ae</text>
        </svg>
      );

    /* ── Adobe Lightroom ── */
    case "Lr":
      return (
        <svg viewBox="0 0 44 44" className="h-[42px] w-[42px]" fill="none">
          <rect width="44" height="44" rx="8" fill="#001E36" />
          <text x="22" y="31" textAnchor="middle" fill="#ADD5EC"
            fontSize="19" fontFamily="Arial, Helvetica, sans-serif"
            fontWeight="bold" fontStyle="italic">Lr</text>
        </svg>
      );

    /* ── Claude (Anthropic) ──
         Orange-clay circle with the characteristic rayed asterisk. */
    case "claude":
      return (
        <svg viewBox="0 0 44 44" className="h-[42px] w-[42px]" fill="none">
          <circle cx="22" cy="22" r="22" fill="#D97757" />
          {/* 8 rounded rays */}
          {Array.from({ length: 8 }).map((_, i) => (
            <rect
              key={i}
              x="20.5" y="7"
              width="3" height="9"
              rx="1.5"
              fill="white"
              transform={`rotate(${i * 45} 22 22)`}
            />
          ))}
          <circle cx="22" cy="22" r="3.5" fill="white" />
        </svg>
      );

    /* ── ChatGPT (OpenAI) ──
         Dark circle with OpenAI-style stylised hexagonal spiral in white. */
    case "gpt":
      return (
        <svg viewBox="0 0 44 44" className="h-[42px] w-[42px]" fill="none">
          <circle cx="22" cy="22" r="22" fill="#10A37F" />
          {/* Simplified OpenAI logo: two overlapping pentagons → approximated as
              an outer ring path + inner star */}
          <path
            d="M22 9.5
               C16 9.5 11 13.5 10 19
               C8 20 7 22 7 24
               C7 27 8.5 29.5 11 31
               C11.5 36 16 39.5 22 39.5
               C28 39.5 32.5 36 33 31
               C35.5 29.5 37 27 37 24
               C37 22 36 20 34 19
               C33 13.5 28 9.5 22 9.5Z"
            stroke="white" strokeWidth="2.2" fill="none"
          />
          <path
            d="M22 14 L23.8 19.6 L29.7 19.6 L24.9 23 L26.7 28.6 L22 25.2 L17.3 28.6 L19.1 23 L14.3 19.6 L20.2 19.6Z"
            fill="white"
          />
        </svg>
      );

    /* ── Gemini (Google) ──
         4-pointed star with Google's blue-to-teal gradient. */
    case "gemini":
      return (
        <svg viewBox="0 0 44 44" className="h-[42px] w-[42px]" fill="none">
          <defs>
            <linearGradient id="gem-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4285F4" />
              <stop offset="50%" stopColor="#9B72CB" />
              <stop offset="100%" stopColor="#34A853" />
            </linearGradient>
          </defs>
          <circle cx="22" cy="22" r="22" fill="#0D0D0D" />
          {/* Gemini 4-pointed star — concave sides give it the characteristic shape */}
          <path
            d="M22 5
               C22 5 23.5 14 28.5 19 C33.5 24 43 22 43 22
               C43 22 33.5 20 28.5 25 C23.5 30 22 39 22 39
               C22 39 20.5 30 15.5 25 C10.5 20 1 22 1 22
               C1 22 10.5 24 15.5 19 C20.5 14 22 5 22 5Z"
            fill="url(#gem-grad)"
          />
        </svg>
      );

    default:
      return (
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-sm font-bold text-white">
          {mark}
        </div>
      );
  }
}

// ------------------------------------------------------------------
// Section
// ------------------------------------------------------------------
export default function Tools() {
  return (
    <section id="skills" className="mx-auto max-w-[1280px] px-6 py-24 md:px-10 md:py-32">
      <Reveal className="mb-16 md:mb-20">
        <h2 className="font-display text-[clamp(2.5rem,7vw,6rem)] font-bold leading-[1.0] tracking-[-0.02em] text-white">
          The tools I&apos;m using
        </h2>
      </Reveal>

      <Stagger
        className="grid grid-cols-1 gap-x-16 gap-y-12 sm:grid-cols-2 md:gap-x-24 md:gap-y-14"
        gap={0.07}
      >
        {tools.map((t) => (
          <StaggerItem key={t.name}>
            <div className="group flex items-center gap-6">
              <RingIcon>
                <ToolLogo mark={t.mark} />
              </RingIcon>
              <div className="flex flex-col gap-1.5">
                <span className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-accent md:text-2xl">
                  {t.name}
                </span>
                <span className="text-base text-neutral-500 md:text-lg">
                  {t.description}
                </span>
              </div>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
