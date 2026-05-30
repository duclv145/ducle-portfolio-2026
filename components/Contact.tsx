"use client";

import { Reveal, Stagger, StaggerItem } from "./Motion";
import SplitText from "./SplitText";
import { contact } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-white/10">
      {/* Lime glow backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[60%]"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(212,255,63,0.10) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1280px] px-6 py-28 md:px-10 md:py-36">

        {/* Top: heading */}
        <Reveal>
          <h2 className="font-display text-[clamp(2.75rem,7vw,7rem)] font-bold leading-[1.2] tracking-[-0.03em] text-white">
            <SplitText text="Available for a new job." stagger={0.09} distance={50} />
          </h2>
        </Reveal>

        {/* Email — large interactive link */}
        <Reveal delay={0.1} className="mt-10 md:mt-14">
          <a
            href={`mailto:${contact.email}`}
            className="group inline-flex items-center gap-4 border-b border-white/20 pb-3 transition-colors duration-300 hover:border-accent"
          >
            <span className="font-display text-[clamp(1.25rem,3.5vw,3rem)] font-bold text-white transition-colors duration-300 group-hover:text-accent">
              {contact.email}
            </span>
            <svg
              width="28" height="28" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className="shrink-0 text-neutral-500 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent"
            >
              <path d="M7 17 17 7" /><path d="M7 7h10v10" />
            </svg>
          </a>
        </Reveal>

        {/* Contact details row */}
        <Stagger className="mt-16 grid grid-cols-1 gap-8 border-t border-white/10 pt-12 sm:grid-cols-3" gap={0.1} delay={0.15}>

          <StaggerItem className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-[0.2em] text-neutral-600">Phone</span>
            <a href={contact.phoneHref}
              className="text-lg font-medium text-neutral-200 transition-colors hover:text-accent">
              {contact.phone}
            </a>
          </StaggerItem>

          <StaggerItem className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-[0.2em] text-neutral-600">Email</span>
            <a href={`mailto:${contact.email}`}
              className="text-lg font-medium text-neutral-200 transition-colors hover:text-accent">
              {contact.email}
            </a>
          </StaggerItem>

          <StaggerItem className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-[0.2em] text-neutral-600">Social</span>
            <a href={contact.facebookHref} target="_blank" rel="noreferrer"
              className="text-lg font-medium text-neutral-200 transition-colors hover:text-accent">
              Facebook
            </a>
          </StaggerItem>

        </Stagger>

        {/* CTA button */}
        <Reveal delay={0.2} className="mt-14">
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-3 rounded-2xl bg-accent px-8 py-4 text-base font-bold text-black shadow-[0_0_50px_-6px_rgba(212,255,63,0.75)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_64px_0px_rgba(212,255,63,0.95)] active:translate-y-0"
          >
            Send me a message
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" /><path d="m13 6 6 6-6 6" />
            </svg>
          </a>
        </Reveal>

      </div>
    </section>
  );
}
