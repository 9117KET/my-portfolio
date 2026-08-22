import { type ReactNode } from "react";

interface SectionHeadingProps {
  children: ReactNode;
  /** Optional anchor id, so the heading can be linked to directly. */
  id?: string;
  className?: string;
}

/**
 * Section label with a rule running out to the right. A real <h2>, so the
 * page has a usable heading outline rather than styled spans.
 */
export default function SectionHeading({
  children,
  id,
  className = "",
}: SectionHeadingProps) {
  return (
    <h2 id={id} className={`mb-6 flex items-center gap-4 ${className}`}>
      <span className="font-label text-xs uppercase tracking-[0.25em] text-on-surface-variant">
        {children}
      </span>
      <span
        className="h-px flex-1 bg-outline-variant/60"
        aria-hidden="true"
      ></span>
    </h2>
  );
}
