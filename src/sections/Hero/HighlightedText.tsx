import type { ReactNode } from "react";
import { cn } from "../../utils/cn";

interface HighlightedTextProps {
  children: ReactNode;
  className?: string;
}

/**
 * Wraps a word or short phrase with a clean, solid underline using Tailwind's
 * decoration utilities (no SVG, no inline styles).
 */
export function HighlightedText({ children, className }: HighlightedTextProps) {
  return (
    <span
      className={cn(
        "underline decoration-4 underline-offset-8 decoration-brand-500 dark:decoration-brand-400",
        className,
      )}
    >
      {children}
    </span>
  );
}
