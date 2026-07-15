import type { SocialLink } from "../types/portfolio";
import { profile } from "./profile";

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/manikarajr",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/manikarajr/",
    icon: "linkedin",
  },
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    icon: "mail",
  },
  {
    label: "Phone",
    href: `tel:${profile.phone.replace(/\s+/g, "")}`,
    icon: "phone",
  },
];
