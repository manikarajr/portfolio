import type { ReactNode } from "react";
import { useInView } from "../../hooks/useInView";
import { cn } from "../../utils/cn";

type Variant = "fade-up" | "fade-left" | "fade-right" | "scale-in";

const ANIMATION_CLASSES: Record<Variant, string> = {
  "fade-up": "motion-safe:animate-fade-in-up",
  "fade-left": "motion-safe:animate-fade-in-left",
  "fade-right": "motion-safe:animate-fade-in-right",
  "scale-in": "motion-safe:animate-scale-in",
};

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: Variant;
}

export function AnimatedSection({ children, className, delay = 0, variant = "fade-up" }: AnimatedSectionProps) {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      style={isInView ? { animationDelay: `${delay}ms` } : undefined}
      className={cn(!isInView && "motion-safe:opacity-0", isInView && ANIMATION_CLASSES[variant], className)}
    >
      {children}
    </div>
  );
}
