import type { PortfolioImage } from "../../types/portfolio";
import { cn } from "../../utils/cn";
import { FadeInImage } from "./FadeInImage";
import { TechIcon } from "./TechIcon";

interface ProjectImageProps {
  image?: PortfolioImage;
  technologies: string[];
  className?: string;
}

/**
 * Renders a real photo/screenshot when `image` is provided (set it on the
 * relevant entry in src/data/projects.ts). Otherwise renders a browser-chrome
 * mockup so the site never displays a fabricated screenshot. Intended to sit
 * inside a `group`-annotated parent for the hover zoom to activate.
 */
export function ProjectImage({ image, technologies, className }: ProjectImageProps) {
  if (image) {
    return (
      <div className={cn("relative aspect-video w-full overflow-hidden", className)}>
        <FadeInImage
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
      </div>
    );
  }

  const featuredTech = technologies.slice(0, 3);

  return (
    <div
      aria-hidden="true"
      className={cn(
        "flex aspect-video w-full flex-col overflow-hidden border-b border-neutral-200 bg-gradient-to-br from-brand-50 via-white to-neutral-50 dark:border-slate-800 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950",
        className,
      )}
    >
      <div className="flex items-center gap-1.5 border-b border-neutral-200/70 px-3 py-2 dark:border-slate-800">
        <span className="h-2 w-2 rounded-full bg-red-400/70" />
        <span className="h-2 w-2 rounded-full bg-amber-400/70" />
        <span className="h-2 w-2 rounded-full bg-emerald-400/70" />
      </div>
      <div className="flex flex-1 items-center justify-center gap-4 transition-transform duration-500 motion-safe:group-hover:scale-105">
        {featuredTech.map((tech) => (
          <TechIcon key={tech} name={tech} colored className="h-9 w-9 opacity-60" />
        ))}
      </div>
    </div>
  );
}
