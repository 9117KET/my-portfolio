import { type ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  children?: ReactNode;
}

/** Consistent page title block. Every list page had a different one. */
export default function PageHeader({ title, children }: PageHeaderProps) {
  return (
    <header className="mb-10">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-on-surface mb-3">
        {title}
      </h1>
      {children ? (
        <p className="text-base sm:text-lg text-on-surface-variant max-w-2xl leading-relaxed">
          {children}
        </p>
      ) : null}
    </header>
  );
}
