/**
 * Reusable Card wrapper for consistent bordered containers across Project,
 * Experience, and Skills. Provides border, padding, rounded corners, and hover lift.
 */

import { type ReactNode } from "react";

type CardVariant = "default" | "elevated" | "dense" | "interactive";

interface CardProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "section";
  variant?: CardVariant;
}

export default function Card({
  children,
  className = "",
  as: Component = "div",
  variant = "default",
}: CardProps) {
  const variantClass =
    variant === "dense"
      ? "p-4 sm:p-5"
      : "p-5 sm:p-6";

  const interactiveClass =
    variant === "interactive"
      ? "hover:-translate-y-0.5 hover:bg-surface-container-high focus-within:ring-2 focus-within:ring-primary/40"
      : "hover:-translate-y-0.5";

  const elevationClass =
    variant === "elevated"
      ? "shadow-md hover:shadow-lg"
      : "shadow-sm hover:shadow-md";

  return (
    <Component
      className={
        "rounded-xl border border-outline-variant/30 bg-surface-container-low " +
        variantClass +
        " transition-all duration-300 " +
        elevationClass +
        " " +
        interactiveClass +
        " " +
        className
      }
    >
      {children}
    </Component>
  );
}
