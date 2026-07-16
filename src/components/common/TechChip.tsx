import { cn } from "../../utils/cn";
import { TechIcon } from "./TechIcon";

type TechChipVariant = "badge" | "pill" | "tile";

const VARIANT_CLASSES: Record<TechChipVariant, string> = {
  badge:
    "gap-1.5 rounded-md border border-neutral-200 bg-neutral-50 px-2.5 py-1 font-mono text-xs font-medium text-neutral-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300",
  pill: "gap-1.5 rounded-md bg-neutral-100 px-2.5 py-1 text-sm text-neutral-700 dark:bg-slate-800 dark:text-slate-300",
  tile: "h-11 w-11 shrink-0 justify-center rounded-xl border border-neutral-200 bg-white text-neutral-600 transition-colors hover:border-brand-300 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-brand-700",
};

const ICON_SIZE_CLASSES: Record<TechChipVariant, string> = {
  badge: "h-3 w-3",
  pill: "h-4 w-4",
  tile: "h-5 w-5",
};

interface TechChipProps {
  name: string;
  variant?: TechChipVariant;
  colored?: boolean;
  className?: string;
}

/**
 * Single "tech icon + name" primitive shared by the three places that need
 * one — project/experience tech badges, skill pills, and the Hero's core
 * stack tiles — so their visual treatment stays in one place instead of
 * three near-identical hand-rolled versions.
 */
export function TechChip({ name, variant = "badge", colored = false, className }: TechChipProps) {
  const showLabel = variant !== "tile";

  return (
    <span className={cn("inline-flex items-center", VARIANT_CLASSES[variant], className)}>
      <TechIcon name={name} colored={colored} className={cn("shrink-0", ICON_SIZE_CLASSES[variant])} />
      {showLabel ? name : <span className="sr-only">{name}</span>}
    </span>
  );
}
