import { cn } from "../../utils/cn";
import { TechIcon } from "./TechIcon";

interface TechnologyBadgeProps {
  name: string;
  className?: string;
}

export function TechnologyBadge({ name, className }: TechnologyBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md border border-neutral-200 bg-neutral-50 px-2.5 py-1 font-mono text-xs font-medium text-neutral-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300",
        className,
      )}
    >
      <TechIcon name={name} className="h-3 w-3" />
      {name}
    </span>
  );
}
