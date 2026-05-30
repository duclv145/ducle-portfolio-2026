"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SplitText from "./SplitText";

const EASE = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
};

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-[1280px] px-6 py-24 md:px-10 md:py-32">
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16 xl:gap-20">

        {/* ── Left: text ── */}
        <motion.div
          className="flex flex-col"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
        >
          {/* Heading */}
          <motion.h2
            variants={item}
            className="font-display text-[clamp(2.75rem,7vw,6rem)] font-bold leading-[1.2] tracking-[-0.03em] text-white"
          >
            <SplitText text="I'm Duc Le" stagger={0.1} distance={50} />
          </motion.h2>

          {/* Bio */}
          <motion.p
            variants={item}
            className="mt-8 max-w-lg text-base leading-[1.85] text-neutral-400 md:text-lg"
          >
            A hands-on graphic designer with a decade of work across brand identity, motion, and
            generative AI. I work at the intersection of craft and strategy - turning a brief into a
            visual system that holds a brand together long after the deck closes.
          </motion.p>
          <motion.p
            variants={item}
            className="mt-5 max-w-lg text-base leading-[1.85] text-neutral-400 md:text-lg"
          >
            Over 10 years I&apos;ve shaped brands for hospitality, media, and tech companies across
            Vietnam - from Phu My Hung and VnExpress to Yeah1 Group. My process starts with
            listening and ends with systems that scale.
          </motion.p>
        </motion.div>

        {/* ── Right: portrait photo ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -8% 0px" }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
          className="relative"
        >
          {/* Card with lime border */}
          <div className="relative overflow-hidden rounded-[28px] border border-accent/55">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/avatar.png"
                alt="Duc Le — Graphic Designer"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </div>

          {/* Floating name badge */}
          <div className="absolute bottom-6 left-6 flex items-center gap-3 rounded-full border border-white/15 bg-black/60 px-5 py-2.5 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-accent" />
            <span className="text-sm font-medium text-white">Duc Le · Graphic Designer</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
