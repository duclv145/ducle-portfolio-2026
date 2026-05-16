"use client";

import { motion } from "framer-motion";

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "instant" });
}

export default function Nav() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-0 right-0 top-0 z-40 px-6 py-5 sm:px-10"
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between">
        <a
          href="#top"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "instant" }); }}
          data-cursor="hover"
          data-magnet
          data-magnet-strength="0.45"
          className="font-display text-2xl leading-none tracking-tight text-fg"
        >
          duc<span className="text-accent">.</span>le
        </a>
        <ul className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1.5 backdrop-blur-md md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={(e) => { e.preventDefault(); scrollTo(l.href.slice(1)); }}
                data-cursor="hover"
                data-magnet
                data-magnet-strength="0.3"
                className="block rounded-full px-4 py-1.5 font-mono text-xs uppercase tracking-[0.18em] text-fg-muted transition-colors hover:text-fg"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}
          data-cursor="hover"
          data-cursor-label="Say hi"
          data-magnet
          data-magnet-strength="0.5"
          className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 font-mono text-xs uppercase tracking-[0.18em] text-bg transition-colors hover:bg-fg"
        >
          Let&rsquo;s talk
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-bg transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </motion.nav>
  );
}
