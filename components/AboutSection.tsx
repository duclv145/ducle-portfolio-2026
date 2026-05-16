"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { profile } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

const experience = [
  { period: "08/2022 – 10/2023", company: "Phú Mỹ Hưng Development Corp.", sub: "Hưng Thái Technology", role: "Senior Graphic Designer" },
  { period: "05/2022 – 08/2022", company: "HS Ad Vietnam", sub: "", role: "Senior Graphic Designer" },
  { period: "03/2020 – 05/2021", company: "Yeah1 Group", sub: "", role: "Senior Graphic Designer" },
  { period: "07/2019 – 12/2019", company: "Dolce by Wyndham Golden Lake", sub: "", role: "Graphic Designer" },
  { period: "11/2017 – 05/2019", company: "FPT Online · VnExpress", sub: "", role: "Graphic Designer" },
  { period: "02/2015 – 11/2017", company: "DVH-Bransons", sub: "", role: "Graphic Designer" },
];

const education = [
  { school: "FPT Polytechnic", items: ["2013 – 2016 · Graphic Design", "2011 – 2013 · Website Design"] },
  { school: "FPT Arena", items: ["2013 · Design Thinking Workshop"] },
  { school: "Brian Tracy International", items: ["2016 · Total Business Mastery Mini MBA"] },
  { school: "Amazon Web Services", items: ["2026 · AWS Cloud Practitioner Essentials"] },
];

const skillsList = ["Photoshop", "Illustrator", "After Effects", "AI Tool (Claude · ChatGPT · Gemini)"];

const interests = ["Design", "Design thinking", "Arts & Craft", "Psychology", "Fashion", "Cinema"];

export default function AboutSection() {
  const ref = useRef<HTMLElement | null>(null);

  return (
    <section id="about" ref={ref} className="relative z-10 w-full px-6 sm:px-10">

      {/* Marquee strip */}
      <div className="overflow-hidden border-y border-white/10 bg-bg/40 backdrop-blur-sm">
        <div className="flex w-max animate-marquee items-center gap-10 py-3 font-display text-xl italic text-fg/60 sm:text-2xl">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex items-center gap-10">
              {["Brand Identity", "Editorial", "Art Direction", "Typography", "Print", "Motion", "Web", "Generative AI"].map((w, i) => (
                <span key={`${k}-${i}`} className="flex items-center gap-10">
                  <span>{w}</span>
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] py-20 sm:py-28">

        {/* Section label row */}
        <div className="mb-12 flex items-center justify-between border-b border-white/10 pb-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-accent">· 03 · About</p>
          <a
            href={`mailto:${profile.email}`}
            data-cursor="hover"
            className="font-mono text-[10px] uppercase tracking-[0.18em] text-fg-muted underline-offset-4 hover:text-fg hover:underline"
          >
            {profile.email}
          </a>
        </div>

        {/* 3-col layout: Experience | Education | Skills */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_1fr_auto] md:gap-10 lg:gap-16">

          {/* Experience */}
          <div>
            <h3 className="font-display text-4xl leading-tight text-fg mb-1 sm:text-5xl">Experience</h3>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-fg-muted mb-6">· Work history</p>
            <ul>
              {experience.map((e, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ delay: i * 0.07, duration: 0.5, ease }}
                  className="grid grid-cols-[8px_1fr] gap-x-4 border-b border-white/10 py-5 first:border-t"
                >
                  {/* dot + line */}
                  <div className="flex flex-col items-center pt-[5px]">
                    <span className="h-2 w-2 flex-shrink-0 rounded-full bg-accent" />
                    {i < experience.length - 1 && <span className="mt-2 w-px flex-1 bg-white/10" />}
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">{e.period}</p>
                    <p className="mt-1.5 text-[15px] font-medium leading-snug text-fg">{e.company}</p>
                    {e.sub && <p className="text-sm text-fg/45 leading-snug">{e.sub}</p>}
                    <span className="mt-2 inline-block rounded-full border border-white/12 bg-white/5 px-3 py-0.5 font-mono text-[9px] uppercase tracking-[0.14em] text-fg-muted">
                      {e.role}
                    </span>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Education */}
          <div>
            <h3 className="font-display text-4xl leading-tight text-fg mb-1 sm:text-5xl">Education</h3>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-fg-muted mb-6">· Academic background</p>
            <ul>
              {education.map((ed, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ delay: i * 0.08, duration: 0.5, ease }}
                  className="border-b border-white/10 py-5 first:border-t"
                >
                  <p className="text-[15px] font-medium text-fg leading-snug">{ed.school}</p>
                  <div className="mt-2 space-y-1">
                    {ed.items.map((item, j) => (
                      <p key={j} className="font-mono text-[10px] uppercase tracking-[0.14em] text-fg-muted">{item}</p>
                    ))}
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Tools + Interests */}
          <div className="min-w-[180px] flex flex-col gap-10">
            <div>
              <h3 className="font-display text-4xl leading-tight text-fg mb-1 sm:text-5xl">Tools</h3>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-fg-muted mb-6">· Software & tech</p>
              <ul className="flex flex-col gap-2">
                {skillsList.map((s, i) => (
                  <motion.li
                    key={s}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: i * 0.07, duration: 0.45, ease }}
                    data-cursor="hover"
                    className="rounded-full border border-white/12 bg-white/5 px-4 py-2 text-sm text-fg/80 backdrop-blur transition-colors hover:border-accent/50 hover:text-accent whitespace-nowrap"
                  >
                    {s}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display text-4xl leading-tight text-fg mb-1 sm:text-5xl">Interests</h3>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-fg-muted mb-6">· Beyond the screen</p>
              <ul className="flex flex-col gap-2">
                {interests.map((s, i) => (
                  <motion.li
                    key={s}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: i * 0.07, duration: 0.45, ease }}
                    className="font-mono text-[11px] uppercase tracking-[0.16em] text-fg-muted border-b border-white/10 py-2 last:border-0"
                  >
                    {s}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
