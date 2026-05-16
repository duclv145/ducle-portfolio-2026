"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/data";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative z-10 w-full overflow-hidden px-6 pt-32 pb-12 sm:px-10 sm:pt-40"
    >
      <div className="mx-auto grid max-w-[1600px] grid-cols-12 gap-x-4 gap-y-12">
        <div className="col-span-12 flex items-end justify-between gap-6 border-b border-white/10 pb-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
            · 04 · Contact
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-fg-muted">
            {profile.available}
          </p>
        </div>

        <div className="col-span-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[16vw] leading-[0.86] tracking-[-0.04em] text-fg sm:text-[12vw] lg:text-[10vw]"
          >
            Let&rsquo;s make
            <br />
            <span className="italic">
              something{" "}
              <a
                href={`mailto:${profile.email}`}
                data-cursor="view"
                data-cursor-label="Email"
                data-magnet
                data-magnet-strength="0.4"
                className="relative inline-block whitespace-nowrap text-accent underline decoration-[6px] underline-offset-[18px]"
              >
                memorable.
              </a>
            </span>
          </motion.h2>
        </div>

        <div className="col-span-12 grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="md:col-span-1 flex flex-col gap-6">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-fg-muted">
                · Email
              </p>
              <a
                href={`mailto:${profile.email}`}
                data-cursor="hover"
                data-magnet
                data-magnet-strength="0.4"
                className="mt-3 block font-display text-3xl text-fg underline-offset-4 hover:underline sm:text-4xl"
              >
                {profile.email}
              </a>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-fg-muted">
                · Phone
              </p>
              <a
                href={`tel:${profile.phone}`}
                data-cursor="hover"
                className="mt-3 block font-display text-3xl text-fg underline-offset-4 hover:underline sm:text-4xl"
              >
                {profile.phone}
              </a>
            </div>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-fg-muted">
              · Address
            </p>
            <p className="mt-3 font-display text-3xl text-fg sm:text-4xl">
              Kim Ma, Ha Noi, VN
            </p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-fg-muted">
              · Elsewhere
            </p>
            <ul className="mt-3 flex flex-col gap-2">
              {profile.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    data-cursor="hover"
                    data-magnet
                    data-magnet-strength="0.35"
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 font-display text-2xl text-fg sm:text-3xl"
                  >
                    <span className="underline-offset-4 group-hover:underline">
                      {s.label}
                    </span>
                    <span className="inline-block transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5">
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
