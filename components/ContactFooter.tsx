import Link from "next/link";

export default function ContactFooter() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-3 px-6 py-6 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between md:px-10">
        <span>© 2026 Duc Le. All rights reserved.</span>
        <Link href="/" className="transition-colors hover:text-accent">
          Back to home ↑
        </Link>
      </div>
    </footer>
  );
}
