"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Ho_Chi_Minh",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
      setTime(formatter.format(now));
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="relative z-10 border-t border-fg/10 px-6 py-8 sm:px-10">
      <div className="mx-auto flex max-w-[1600px] flex-col items-start justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.18em] text-fg-muted sm:flex-row sm:items-center">
        <p>
          © 2026 Duc Le · Designed &amp; built in Hanoi
        </p>
        <p className="flex items-center gap-3">
          <span className="inline-flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            local · {time || "--:--:--"}
          </span>
          <span>·</span>
          <a
            href="#top"
            data-cursor="hover"
            data-magnet
            data-magnet-strength="0.4"
            className="hover:text-fg"
          >
            Back to top ↑
          </a>
        </p>
      </div>
    </footer>
  );
}
