/**
 * Reusable Card wrapper for consistent bordered containers across Project,
 * Experience, and Skills. Provides border, padding, rounded corners, and hover lift.
 */

import { type ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "section";
}

export default function Card({
  children,
  className = "",
  as: Component = "div",
}: CardProps) {
  return (
    <Component
      className={
        "rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#2D2E32] p-5 sm:p-6 " +
        "shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 " +
        className
      }
    >
      {children}
    </Component>
  );
}
