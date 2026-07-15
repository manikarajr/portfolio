import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../utils/cn";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hoverable?: boolean;
}

export function Card({ children, className, hoverable = false, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-neutral-200/80 bg-white p-6 dark:border-slate-800 dark:bg-slate-900/60",
        hoverable &&
          "transition-all duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-xl hover:shadow-neutral-900/[0.06] dark:hover:border-brand-700 dark:hover:shadow-black/20",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
