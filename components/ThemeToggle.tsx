"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const [light, setLight] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setLight(document.documentElement.classList.contains("light"));
    setMounted(true);
  }, []);

  const toggle = () => {
    const next = !light;
    setLight(next);
    document.documentElement.classList.toggle("light", next);
    try {
      localStorage.setItem("theme", next ? "light" : "dark");
    } catch {
      /* ignore */
    }
  };

  const on = mounted && light;

  return (
    <button
      type="button"
      onClick={toggle}
      role="switch"
      aria-checked={on}
      aria-label={on ? "Switch to dark theme" : "Switch to light theme"}
      title="Toggle theme"
      className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full border transition-colors duration-300 ${
        on ? "border-accent bg-accent" : "border-white/25 bg-white/10"
      } ${className}`}
    >
      <span
        className={`inline-block h-4 w-4 rounded-full bg-[#fff] shadow-sm transition-transform duration-300 ${
          on ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </button>
  );
}
