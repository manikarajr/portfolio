import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../../utils/cn";

type Size = "sm" | "md";

const SIZE_CLASSES: Record<Size, string> = {
  sm: "h-9 w-9",
  md: "h-10 w-10",
};

export const ICON_CIRCLE_CLASSES =
  "inline-flex items-center justify-center rounded-full border border-neutral-200 text-neutral-600 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-400 hover:text-brand-600 hover:shadow-sm motion-safe:active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 dark:border-slate-800 dark:text-slate-400 dark:hover:border-brand-500 dark:hover:text-brand-400";

interface CommonProps {
  icon: ReactNode;
  label: string;
  size?: Size;
  className?: string;
}

type IconButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type IconButtonAsAnchor = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type IconButtonProps = IconButtonAsButton | IconButtonAsAnchor;

export function IconButton({ icon, label, size = "md", className, ...props }: IconButtonProps) {
  const classes = cn(ICON_CIRCLE_CLASSES, SIZE_CLASSES[size], className);

  if (props.href !== undefined) {
    const { href, ...anchorProps } = props as IconButtonAsAnchor;
    return (
      <a href={href} aria-label={label} className={classes} {...anchorProps}>
        {icon}
      </a>
    );
  }

  const buttonProps = props as IconButtonAsButton;
  return (
    <button type="button" aria-label={label} className={classes} {...buttonProps}>
      {icon}
    </button>
  );
}
