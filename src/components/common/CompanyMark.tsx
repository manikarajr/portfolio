import { cn } from "../../utils/cn";

const PALETTE = ["bg-blue-500", "bg-emerald-500", "bg-violet-500", "bg-amber-500", "bg-rose-500", "bg-cyan-600"];

function hashString(value: string): number {
  let hash = 0;
  for (let i = 0; i < value.length; i++) {
    hash = (hash << 5) - hash + value.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

interface CompanyMarkProps {
  name: string;
  logoUrl?: string;
  className?: string;
}

/**
 * Renders a real company logo when `logoUrl` is provided (set it on the
 * relevant entry in src/data/experience.ts). Otherwise falls back to a
 * deterministic colored monogram rather than a fabricated logo image.
 */
export function CompanyMark({ name, logoUrl, className }: CompanyMarkProps) {
  if (logoUrl) {
    return (
      <img
        src={logoUrl}
        alt={`${name} logo`}
        loading="lazy"
        width={40}
        height={40}
        className={cn("h-10 w-10 shrink-0 rounded-lg object-contain", className)}
      />
    );
  }

  const color = PALETTE[hashString(name) % PALETTE.length];

  return (
    <div
      aria-hidden="true"
      className={cn(
        "flex h-10 w-10 shrink-0 select-none items-center justify-center rounded-lg font-mono text-sm font-semibold text-white",
        color,
        className,
      )}
    >
      {name.charAt(0)}
    </div>
  );
}
