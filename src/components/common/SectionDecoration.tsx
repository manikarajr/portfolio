import { cn } from "../../utils/cn";

type Position = "top-left" | "top-right" | "bottom-left" | "bottom-right";

const POSITION_CLASSES: Record<Position, string> = {
  "top-left": "-left-32 -top-32",
  "top-right": "-right-32 -top-32",
  "bottom-left": "-bottom-32 -left-32",
  "bottom-right": "-bottom-32 -right-32",
};

interface SectionDecorationProps {
  position?: Position;
  className?: string;
}

/**
 * Single soft, blurred gradient blob used to add depth behind a section
 * without competing with content. Always decorative — aria-hidden and inert.
 */
export function SectionDecoration({ position = "top-right", className }: SectionDecorationProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute -z-10 h-72 w-72 rounded-full opacity-[0.15] blur-3xl",
        "bg-[radial-gradient(circle,theme(colors.brand.400),transparent_70%)]",
        "dark:opacity-[0.12]",
        POSITION_CLASSES[position],
        className,
      )}
    />
  );
}
