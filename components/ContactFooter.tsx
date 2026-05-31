import Link from "next/link";
import { contact } from "@/lib/data";

const cols = [
  { label: "Email", value: contact.email, href: `mailto:${contact.email}` },
  { label: "Phone", value: contact.phone, href: contact.phoneHref },
  { label: "Facebook", value: contact.facebook, href: contact.facebookHref },
];

export default function ContactFooter() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto grid max-w-[1280px] grid-cols-2 gap-x-8 gap-y-10 px-6 py-12 md:grid-cols-3 md:px-10 md:py-16">
        {cols.map((c) => (
          <div key={c.label} className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-[0.2em] text-neutral-600">{c.label}</span>
            <a
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="text-lg font-medium text-white transition-colors hover:text-accent md:text-xl"
            >
              {c.value}
            </a>
          </div>
        ))}
      </div>
      <div className="mx-auto flex max-w-[1280px] flex-col gap-3 border-t border-white/10 px-6 py-6 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between md:px-10">
        <span>© 2026 Duc Le. All rights reserved.</span>
        <Link href="/" className="transition-colors hover:text-accent">
          Back to home ↑
        </Link>
      </div>
    </footer>
  );
}
