"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeIn from "./FadeIn";

const skills = [
  "Brand Identity",
  "Visual Identity",
  "Motion Graphics",
  "Art Direction",
  "Generative AI",
  "Web Design",
  "Campaign Design",
];

const experience = [
  {
    period: "08/2022 — 10/2023",
    company: "Hung Thai Technology (Phu My Hung Development Corp)",
    role: "Senior Graphic Designer",
  },
  {
    period: "05/2022 — 08/2022",
    company: "HS Ad Vietnam",
    role: "Senior Graphic Designer",
  },
  {
    period: "03/2020 — 05/2021",
    company: "Yeah1 Group",
    role: "Senior Graphic Designer",
  },
  {
    period: "07/2019 — 12/2019",
    company: "Dolce by Wyndham Golden Lake",
    role: "Graphic Designer",
  },
  {
    period: "11/2017 — 05/2019",
    company: "FPT Online · VnExpress",
    role: "Graphic Designer",
  },
  {
    period: "02/2015 — 11/2017",
    company: "DVH-Bransons",
    role: "Graphic Designer",
  },
];

const tools = [
  "Illustrator",
  "Photoshop",
  "InDesign",
  "After Effects",
  "Lightroom",
  "Claude",
  "ChatGPT",
  "Gemini",
];

const education = [
  {
    school: "FPT Polytechnic",
    items: ["2013 – 2016 · Graphic Design", "2011 – 2013 · Website Design"],
  },
  {
    school: "FPT Arena",
    items: ["2013 · Design Thinking Workshop"],
  },
  {
    school: "Brian Tracy International",
    items: ["2016 · Total Business Mastery Mini MBA"],
  },
  {
    school: "Amazon Web Services",
    items: ["2026 · AWS Cloud Practitioner Essentials"],
  },
];

const interests = [
  "Design",
  "Design thinking",
  "Arts & Craft",
  "Psychology",
  "Book",
  "Cinema",
];

export default function About() {
  const portraitRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: portraitRef,
    offset: ["start end", "end start"],
  });
  const portraitY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section
      id="about"
      className="py-24 lg:py-32 border-t border-[var(--hairline-soft)]"
    >
      <div className="mx-auto max-w-[1200px] px-5 lg:px-8">
        {/* Header */}
        <FadeIn>
          <p className="caption text-ink-muted uppercase" style={{ letterSpacing: "0.18em" }}>
            About
          </p>
        </FadeIn>



        <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          {/* Left column */}
          <FadeIn className="lg:sticky lg:top-8 lg:self-start" delay={0.05}>
            <h2 className="display-xl text-ink">
              Senior Graphic
              <br />
              Designer.
            </h2>

            {/* Portrait card with parallax */}
            <div
              ref={portraitRef}
              className="card-surface-1 mt-8 overflow-hidden relative"
              style={{ padding: 0, aspectRatio: "4/5", maxWidth: 380 }}
            >
              <motion.div
                style={{ y: portraitY, position: "absolute", inset: "-8%" }}
              >
                <Image
                  src="/avatar.png"
                  alt="Duc Le"
                  fill
                  sizes="380px"
                  className="object-cover object-top"
                  priority={false}
                />
              </motion.div>
            </div>
          </FadeIn>

          {/* Right column */}
          <div>
            <FadeIn delay={0.1}>
              <p className="subhead text-ink-muted max-w-2xl">
                I&apos;m Duc — a hands-on graphic designer with a decade of work
                across brand identity, motion, and generative AI. I work at the
                intersection of craft and strategy: turning a brief into a
                visual system that can hold a brand together long after the deck
                closes.
              </p>
            </FadeIn>

            {/* Skills */}
            <FadeIn delay={0.2}>
              <p className="caption text-ink-muted uppercase mt-12" style={{ letterSpacing: "0.18em" }}>
                Disciplines
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span key={s} className="btn-translucent">
                    {s}
                  </span>
                ))}
              </div>
            </FadeIn>

            {/* Tools */}
            <FadeIn delay={0.25}>
              <p className="caption text-ink-muted uppercase mt-10" style={{ letterSpacing: "0.18em" }}>
                Tools
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {tools.map((t) => (
                  <span
                    key={t}
                    className="body-sm text-ink-muted px-3 py-1.5 rounded-[var(--radius-sm)] border border-[var(--hairline)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </FadeIn>

            {/* Interests */}
            <FadeIn delay={0.28}>
              <p className="caption text-ink-muted uppercase mt-10" style={{ letterSpacing: "0.18em" }}>
                Interests
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {interests.map((t) => (
                  <span
                    key={t}
                    className="body-sm text-ink-muted px-3 py-1.5 rounded-[var(--radius-sm)] border border-[var(--hairline)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </FadeIn>

            {/* Experience */}
            <FadeIn delay={0.3}>
              <p className="caption text-ink-muted uppercase mt-14" style={{ letterSpacing: "0.18em" }}>
                Experience · 10+ years
              </p>
            </FadeIn>

            <ol className="mt-2">
              {experience.map((item, i) => (
                <FadeIn key={item.company + item.period} delay={0.32 + i * 0.04}>
                  <li className="border-t border-[var(--hairline-soft)] py-5 grid grid-cols-1 gap-1 sm:grid-cols-[170px_1fr_auto] sm:gap-6 sm:items-baseline">
                    <span className="caption text-ink-muted">{item.period}</span>
                    <span className="body-lg text-ink">{item.company}</span>
                    <span className="body-sm text-ink-muted whitespace-nowrap">{item.role}</span>
                  </li>
                </FadeIn>
              ))}
            </ol>

            {/* Education */}
            <FadeIn delay={0.55}>
              <p className="caption text-ink-muted uppercase mt-14" style={{ letterSpacing: "0.18em" }}>
                Education
              </p>
            </FadeIn>
            <div className="mt-2">
              {education.map((edu, i) => (
                <FadeIn key={edu.school} delay={0.57 + i * 0.04}>
                  <div className="border-t border-[var(--hairline-soft)] py-5 grid grid-cols-1 gap-1 sm:grid-cols-[170px_1fr] sm:gap-6">
                    <span className="body-lg text-ink">{edu.school}</span>
                    <div className="flex flex-col gap-1">
                      {edu.items.map((it) => (
                        <span key={it} className="body text-ink-muted">{it}</span>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
