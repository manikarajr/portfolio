import {
  SiAngular,
  SiBootstrap,
  SiDotnet,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiGithubcopilot,
  SiGooglegemini,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiReactivex,
  SiSwagger,
  SiTailwindcss,
  SiTypescript,
} from "@icons-pack/react-simple-icons";
import { Braces, Cloud, Code2, Database, Hash, Key, Shield, Workflow, Zap, type LucideIcon } from "lucide-react";
import type { ComponentType } from "react";
import { cn } from "../../utils/cn";

type SimpleIconComponent = ComponentType<{ className?: string; color?: string; size?: string | number }>;

/**
 * Brands whose default Simple Icons color is black/near-black render invisible
 * on dark chip backgrounds, so they always render in the surrounding text color.
 */
const MONOCHROME_BRANDS = new Set(["Angular (v13–20)", "Angular Signals", "GitHub", "GitHub Copilot"]);

const BRAND_ICONS: Record<string, SimpleIconComponent> = {
  React: SiReact,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  "HTML5 & CSS3": SiHtml5,
  "Tailwind CSS": SiTailwindcss,
  Bootstrap: SiBootstrap,
  "Angular (v13–20)": SiAngular,
  "Angular Signals": SiAngular,
  RxJS: SiReactivex,
  "ASP.NET Core 8": SiDotnet,
  ".NET Core": SiDotnet,
  Swagger: SiSwagger,
  Git: SiGit,
  GitHub: SiGithub,
  "GitHub Actions (CI/CD)": SiGithubactions,
  "GitHub Actions": SiGithubactions,
  "Gemini AI": SiGooglegemini,
  "GitHub Copilot": SiGithubcopilot,
};

const FALLBACK_ICONS: Record<string, LucideIcon> = {
  "REST APIs": Braces,
  "REST API Design": Braces,
  "C#": Hash,
  SQL: Database,
  "SQL Server": Database,
  "MS SQL Server": Database,
  "Azure App Service": Cloud,
  "Azure DevOps": Cloud,
  SignalR: Zap,
  "JWT Authentication": Key,
  RBAC: Shield,
  "SOLID Principles": Workflow,
};

interface TechIconProps {
  name: string;
  className?: string;
  /** Render the technology's real brand color instead of inheriting text color. */
  colored?: boolean;
}

export function TechIcon({ name, className, colored = false }: TechIconProps) {
  const Brand = BRAND_ICONS[name];

  if (Brand) {
    const useColor = colored && !MONOCHROME_BRANDS.has(name);
    return (
      <Brand aria-hidden="true" className={cn("shrink-0", className)} color={useColor ? "default" : "currentColor"} />
    );
  }

  const Fallback = FALLBACK_ICONS[name] ?? Code2;
  return <Fallback aria-hidden="true" className={cn("shrink-0", className)} />;
}
