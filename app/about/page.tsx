import Link from "next/link";
import AboutHeader from "@/components/AboutHeader";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";

export const metadata = {
  title: "About — Duc Le",
};

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-bg">
      <AboutHeader />

      {/* ── Sections ── */}
      <Experience />
      <Education />
      <Skills />

      {/* ── Footer ── */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-4 px-6 py-8 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between md:px-10">
          <span>© 2026 Duc Le. All rights reserved.</span>
          <Link href="/" className="transition-colors hover:text-accent">
            Back to home ↑
          </Link>
        </div>
      </footer>
    </main>
  );
}
