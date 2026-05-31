"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { scrollToId } from "./LenisProvider";
import { contact } from "@/lib/data";

const EASE = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

/* Green sunburst logo mark */
function Burst({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      {Array.from({ length: 12 }).map((_, i) => (
        <rect key={i} x="11.15" y="1.5" width="1.7" height="6" rx="0.85" fill="#d4ff3f"
          transform={`rotate(${i * 30} 12 12)`} />
      ))}
    </svg>
  );
}

function Social({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white backdrop-blur-md transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-black"
    >
      {children}
    </a>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden py-8 lg:py-10"
    >
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 50% at 35% 45%, rgba(212,255,63,0.07) 0%, transparent 70%)",
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto w-full max-w-[1280px] px-6 md:px-10"
      >
        {/* ──────────── TOP BAR ──────────── */}
        <motion.div
          variants={item}
          className="relative flex items-center justify-between gap-4 rounded-2xl border border-white/10 px-6 py-4 md:px-8 md:py-5"
        >
          {/* Location */}
          <div className="flex items-center gap-3 text-base font-medium text-neutral-400">
            <span className="h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_10px_rgba(212,255,63,0.7)]" />
            <span className="hidden sm:inline">Ho Chi Minh City, VN</span>
            <span className="sm:hidden">HCMC, VN</span>
          </div>
          {/* Centre logo */}
          <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-2.5">
            <Burst className="h-7 w-7 md:h-8 md:w-8" />
            <span className="font-display text-2xl font-bold text-white md:text-[28px]">Duc Le</span>
          </div>
          {/* Menu button */}
          <button
            onClick={() => window.dispatchEvent(new Event("ducle:openmenu"))}
            aria-label="Open menu"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 hover:scale-105"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <rect x="3" y="3" width="7" height="7" rx="1.5" />
              <rect x="14" y="3" width="7" height="7" rx="1.5" />
              <rect x="3" y="14" width="7" height="7" rx="1.5" />
              <rect x="14" y="14" width="7" height="7" rx="1.5" />
            </svg>
          </button>
        </motion.div>

        {/* ──────────── MAIN: name | photo ──────────── */}
        <motion.div
          variants={item}
          className="mt-3 grid grid-cols-1 lg:h-[62vh] lg:min-h-[520px] lg:grid-cols-[1fr_minmax(440px,560px)]"
        >
          {/* Name */}
          <div className="flex flex-col justify-center lg:border-r lg:border-white/10 lg:pr-10 xl:pr-14">
            <p className="mb-3 text-base text-neutral-500 md:text-lg">
              Hello <span className="text-white">My Name</span> Is
            </p>
            <h1 className="font-display font-bold leading-[0.82] tracking-[-0.05em]">
              <span className="block text-[clamp(4.5rem,16vw,15rem)] text-accent">Duc</span>
              <span className="block text-[clamp(4.5rem,16vw,15rem)] text-white">Le.</span>
            </h1>
          </div>

          {/* Photo */}
          <div className="relative mt-8 lg:mt-0 lg:pl-12 xl:pl-16">
            <div className="relative h-[52vh] w-full overflow-hidden rounded-[24px] border border-white/10 lg:h-full">
              <Image
                src="/avatar.png"
                alt="Duc Le"
                fill
                sizes="(max-width: 1024px) 90vw, 460px"
                className="object-cover object-top grayscale"
                priority
              />
            </div>
            {/* Socials on right edge */}
            <div className="absolute right-4 top-1/2 flex -translate-y-1/2 flex-col gap-3 lg:right-0 lg:translate-x-1/2">
              <Social href={contact.facebookHref} label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14 9h3l.5-3H14V4.5c0-.8.3-1.5 1.5-1.5H17V.2C16.6.1 15.6 0 14.5 0 12 0 11 1.5 11 4v2H8v3h3v9h3V9z" />
                </svg>
              </Social>
              <Social href={`mailto:${contact.email}`} label="Email">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" />
                </svg>
              </Social>
              <Social href="#" label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </Social>
            </div>
          </div>
        </motion.div>

        {/* ──────────── BOTTOM BAR ──────────── */}
        <motion.div
          variants={item}
          className="mt-3 flex flex-col gap-4 rounded-2xl border border-white/10 px-5 py-3 sm:flex-row sm:items-center sm:justify-between md:px-6"
        >
          <button
            onClick={() => scrollToId("about")}
            className="group flex items-center gap-2 text-sm font-medium text-neutral-400 transition-colors hover:text-white"
          >
            Scroll <span className="text-white">down</span>
            <span className="transition-transform duration-300 group-hover:translate-y-0.5">↓</span>
          </button>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => scrollToId("work")}
              className="group flex items-center gap-3 rounded-full border border-white/15 py-1.5 pl-6 pr-1.5 text-sm font-medium text-white transition-colors hover:border-accent"
            >
              View My Works
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-xs transition-colors group-hover:border-accent group-hover:text-accent">
                →
              </span>
            </button>
            <button
              onClick={() => scrollToId("contact")}
              className="group flex items-center gap-3 rounded-full bg-white py-1.5 pl-6 pr-1.5 text-sm font-bold text-black transition-transform duration-300 hover:-translate-y-0.5"
            >
              Contact Me
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-xs text-white transition-transform duration-300 group-hover:translate-x-0.5">
                →
              </span>
            </button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
