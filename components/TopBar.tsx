"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function TopBar({
  backHref = "/",
  backLabel = "Home",
}: {
  backHref?: string;
  backLabel?: string;
}) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          timeZone: "Asia/Ho_Chi_Minh",
        }),
      );
    tick();
    const id = window.setInterval(tick, 20_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-6 py-4 text-[15px] font-medium tracking-[-0.01em] md:px-10 md:text-base">
        <div className="flex items-center gap-8 md:gap-16">
          <Link
            href={backHref}
            className="flex items-center gap-2 text-white transition-colors hover:text-accent"
          >
            <span aria-hidden>←</span> {backLabel}
          </Link>
          <span className="hidden text-neutral-400 sm:inline">Senior Graphic Designer</span>
        </div>
        <span className="tabular-nums text-neutral-400">Ha Noi • {time}</span>
      </div>
    </header>
  );
}
