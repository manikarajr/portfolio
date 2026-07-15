import { cn } from "../../utils/cn";

interface AvatarProps {
  name: string;
  initials: string;
  src?: string;
  size?: number;
  className?: string;
}

/**
 * Renders a real profile photo when `src` is provided. Otherwise falls back
 * to a gradient monogram so the site never ships a fake stock photo — set
 * `profile.avatarUrl` in src/data/profile.ts once a real photo is available.
 */
export function Avatar({ name, initials, src, size = 96, className }: AvatarProps) {
  if (src) {
    return (
      <img
        src={src}
        alt={name}
        width={size}
        height={size}
        loading="lazy"
        className={cn("rounded-full object-cover", className)}
        style={{ width: size, height: size }}
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={name}
      className={cn(
        "flex select-none items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 font-mono font-semibold text-white",
        className,
      )}
      style={{ width: size, height: size, fontSize: size * 0.36 }}
    >
      {initials}
    </div>
  );
}
