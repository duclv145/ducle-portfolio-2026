"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

const Icons: Record<string, () => React.ReactElement> = {
  "Brand Identity": () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="3" />
      <line x1="12" y1="2" x2="12" y2="5" />
      <line x1="12" y1="19" x2="12" y2="22" />
      <line x1="2" y1="12" x2="5" y2="12" />
      <line x1="19" y1="12" x2="22" y2="12" />
    </svg>
  ),
  "Vibe Coding": () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  "Art Direction": () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
    </svg>
  ),
  "Typography": () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
      <polyline points="4 7 4 4 20 4 20 7" />
      <line x1="9" y1="20" x2="15" y2="20" />
      <line x1="12" y1="4" x2="12" y2="20" />
    </svg>
  ),
  "Print Production": () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
      <polyline points="6 9 6 2 18 2 18 9" />
      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
      <rect x="6" y="14" width="12" height="8" />
    </svg>
  ),
  "Motion Graphics": () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  ),
  "UI/UX Web Design": () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  "Photography": () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  ),
};

export default function SkillsSection() {
  return (
    <section id="skills" className="relative z-10 w-full px-6 py-32 sm:px-10 sm:py-40">
      <div className="mx-auto grid max-w-[1600px] grid-cols-12 gap-x-4 gap-y-16">
        <div className="col-span-12 flex items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">· 03 · Skills</p>
            <h2 className="mt-4 font-display text-5xl leading-[0.95] text-fg sm:text-6xl md:text-7xl">
              Things I&rsquo;m <span className="italic">obsessively good</span> at.
            </h2>
          </div>
          <p className="hidden max-w-xs text-pretty text-sm text-fg-muted md:block">
            Each skill has its own animated icon — a small nod to the way I think about craft: always in motion.
          </p>
        </div>

        <ul className="col-span-12 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/5 sm:grid-cols-3 lg:grid-cols-4">
          {skills.map((s, i) => {
            const Icon = Icons[s.name];
            return (
              <motion.li
                key={s.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                data-cursor="hover"
                className="group relative flex flex-col justify-between gap-10 bg-bg/70 p-6 transition-colors duration-300 hover:bg-accent sm:p-8"
              >
                <div className="text-fg/40 transition-colors duration-300 group-hover:text-bg">
                  {Icon ? <Icon /> : null}
                </div>
                <div>
                  <p className="font-display text-2xl leading-tight text-fg transition-colors duration-300 group-hover:text-bg sm:text-3xl">{s.name}</p>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-fg-muted transition-colors duration-300 group-hover:text-bg/60">· {s.level}</p>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
