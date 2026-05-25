"use client";

import FadeIn from "./FadeIn";
import { Palette, Film, Globe, Megaphone, Cpu, Sparkles } from "lucide-react";

const capabilities = [
  {
    tag: "Brand",
    title: "Identity systems",
    desc: "Logo, visual identity, color architecture and brand guidelines that survive every touchpoint — from a business card to a 50-page deck.",
    icon: Palette,
  },
  {
    tag: "Motion",
    title: "Motion graphics",
    desc: "Title sequences, brand reels, short-form social cuts. Built in After Effects, finished for every aspect ratio your channel needs.",
    icon: Film,
  },
  {
    tag: "Web",
    title: "Marketing sites",
    desc: "Landing pages and product launches built to convert — sharp typography, considered motion, ready-to-ship Framer or Next.js.",
    icon: Globe,
  },
  {
    tag: "Campaign",
    title: "Marketing experience",
    desc: "Key visuals, social campaigns, multi-platform rollouts. Big idea first, then the full kit so your team can extend it.",
    icon: Megaphone,
  },
  {
    tag: "AI",
    title: "Generative AI design",
    desc: "Stable Diffusion and ComfyUI workflows tuned for production — brand-locked styles, repeatable pipelines, real deliverables.",
    icon: Cpu,
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="bg-canvas py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-5 lg:px-8">
        {/* Section header */}
        <FadeIn>
          <p className="caption text-ink-muted uppercase" style={{ letterSpacing: "0.18em" }}>
            01 — Capabilities
          </p>
        </FadeIn>
        <FadeIn delay={0.05}>
          <h2 className="display-xl text-ink mt-5 max-w-3xl">
            One designer.
            <br />
            A full toolkit.
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="subhead text-ink-muted mt-6 max-w-xl">
            Hand-on across brand, motion, web and AI — so a project that touches
            three of them doesn&apos;t need three vendors to keep the voice.
          </p>
        </FadeIn>

        {/* Card grid — 5 charcoal tiles + 1 violet spotlight = Framer's signature mix */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {capabilities.slice(0, 2).map((c, i) => (
            <CapCard key={c.title} item={c} index={i} />
          ))}

          {/* Violet spotlight — the brand atmosphere device */}
          <FadeIn delay={0.12}>
            <article
              className="spot-violet p-8 lg:p-10 text-ink h-full flex flex-col justify-between"
              style={{ borderRadius: "var(--radius-xxl)", minHeight: 280 }}
            >
              <div className="flex items-start justify-between">
                <span className="btn-translucent" style={{ background: "rgba(255,255,255,0.16)" }}>
                  <Sparkles className="h-3.5 w-3.5" /> Featured
                </span>
                <span className="caption uppercase" style={{ letterSpacing: "0.18em", opacity: 0.8 }}>
                  Spotlight
                </span>
              </div>
              <div>
                <h3 className="display-md text-ink" style={{ letterSpacing: "-0.04em" }}>
                  Art direction
                </h3>
                <p className="body text-ink/85 mt-3 max-w-sm">
                  Concept, mood, type and color systems for new launches — when a
                  brand needs more than a logo, it needs an attitude.
                </p>
              </div>
            </article>
          </FadeIn>

          {capabilities.slice(2).map((c, i) => (
            <CapCard key={c.title} item={c} index={i + 3} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CapCard({
  item,
  index,
}: {
  item: { tag: string; title: string; desc: string; icon: typeof Palette };
  index: number;
}) {
  const Icon = item.icon;
  return (
    <FadeIn delay={Math.min(index, 4) * 0.05}>
      <article
        className="card-surface-1 h-full flex flex-col justify-between transition-colors hover:bg-[var(--surface-2)]"
        style={{ minHeight: 280 }}
      >
        <div className="flex items-start justify-between">
          <span className="btn-translucent">{item.tag}</span>
          <Icon className="h-5 w-5 text-ink-muted" />
        </div>
        <div className="mt-10">
          <h3 className="display-md text-ink" style={{ letterSpacing: "-0.04em" }}>
            {item.title}
          </h3>
          <p className="body text-ink-muted mt-3">{item.desc}</p>
        </div>
      </article>
    </FadeIn>
  );
}
