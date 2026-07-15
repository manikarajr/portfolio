import { cn } from "../../utils/cn";

interface BackgroundPatternProps {
  className?: string;
}

/**
 * Decorative dot-grid layer. Purely presentational — always aria-hidden and
 * pointer-events-none so it never interferes with content or assistive tech.
 */
export function BackgroundPattern({ className }: BackgroundPatternProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 -z-10",
        "[background-image:radial-gradient(circle,theme(colors.neutral.300)_1px,transparent_1px)] [background-size:28px_28px]",
        "dark:[background-image:radial-gradient(circle,theme(colors.slate.700)_1px,transparent_1px)]",
        "[mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black_40%,transparent_100%)]",
        "opacity-[0.35] dark:opacity-[0.25]",
        className,
      )}
    />
  );
}
