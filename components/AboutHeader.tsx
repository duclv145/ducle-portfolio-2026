"use client";

import { motion } from "framer-motion";
import TopBar from "./TopBar";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function AboutHeader() {
  return (
    <>
      <TopBar />

      {/* ── Big title + label on the same row ── */}
      <section className="mx-auto max-w-[1280px] px-6 pb-10 pt-16 md:px-10 md:pb-14 md:pt-24">
        <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
          <h1 className="overflow-hidden pb-[0.08em] font-display text-[clamp(4rem,15vw,13rem)] font-bold leading-[0.92] tracking-[-0.045em] text-white">
            <motion.span
              initial={{ y: "115%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.95, ease: EASE }}
              className="block"
            >
              About
            </motion.span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.12 }}
            className="flex items-center gap-3 pb-3 md:pb-6"
          >
            <span className="h-2 w-2 shrink-0 rounded-full bg-accent" />
            <span className="text-sm uppercase tracking-[0.2em] text-neutral-500">
              Duc Le - Senior Graphic Designer
            </span>
          </motion.div>
        </div>
      </section>
    </>
  );
}
