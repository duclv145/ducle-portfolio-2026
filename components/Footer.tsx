"use client";

import { scrollToId } from "./LenisProvider";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-[1280px] px-6 py-6 md:px-10">
        <div className="flex flex-col gap-4 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Duc Le. All rights reserved.</span>
          <button
            onClick={() => scrollToId("home")}
            className="transition-colors hover:text-accent sm:text-right"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
