import type { ReactNode } from "react";
import { cn } from "../../utils/cn";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  icon?: ReactNode;
}

export function SectionHeading({ eyebrow, title, description, align = "left", icon }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {icon && (
        <div
          aria-hidden="true"
          className={cn(
            "mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-200 bg-white text-brand-600 dark:border-slate-800 dark:bg-slate-900 dark:text-brand-400",
            align === "center" && "mx-auto",
          )}
        >
          {icon}
        </div>
      )}
      <span className="font-mono text-sm font-medium tracking-wide text-brand-600 dark:text-brand-400">
        {eyebrow}
      </span>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl dark:text-white">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-neutral-600 dark:text-slate-400">{description}</p>
      )}
    </div>
  );
}
