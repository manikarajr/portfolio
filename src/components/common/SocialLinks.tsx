import { Mail, Phone } from "lucide-react";
import type { ComponentType } from "react";
import { IconButton } from "../ui/IconButton";
import type { IconName, SocialLink } from "../../types/portfolio";
import { cn } from "../../utils/cn";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

const ICONS: Record<IconName, ComponentType<{ className?: string }>> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  mail: Mail,
  phone: Phone,
};

interface SocialLinksProps {
  links: SocialLink[];
  className?: string;
  iconClassName?: string;
}

export function SocialLinks({ links, className, iconClassName }: SocialLinksProps) {
  return (
    <ul className={cn("flex items-center gap-2", className)}>
      {links.map((link) => {
        const Icon = ICONS[link.icon];
        const isExternal = link.href.startsWith("http");
        return (
          <li key={link.label}>
            <IconButton
              href={link.href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noreferrer noopener" : undefined}
              label={link.label}
              className={iconClassName}
              icon={<Icon className="h-[18px] w-[18px]" />}
            />
          </li>
        );
      })}
    </ul>
  );
}
