import type { ReactNode } from "react";

/** Small uppercase eyebrow with an accent dot + optional index — heads each section. */
export default function SectionLabel({
  children,
  index,
}: {
  children: ReactNode;
  index?: string;
}) {
  return (
    <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-neutral-400 sm:text-sm">
      <span className="inline-block h-2 w-2 rounded-full bg-accent" />
      {index && <span className="tabular-nums text-neutral-600">{index}</span>}
      <span>{children}</span>
    </div>
  );
}
