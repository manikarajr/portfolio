import { Briefcase, FolderGit2, GraduationCap, Home, Layers, MessageCircle, User, type LucideIcon } from "lucide-react";
import { navigation } from "../../data/navigation";
import { cn } from "../../utils/cn";
import { scrollToSection } from "../../utils/scrollToSection";

const NAV_ICONS: Record<string, LucideIcon> = {
  "#home": Home,
  "#about": User,
  "#experience": Briefcase,
  "#skills": Layers,
  "#projects": FolderGit2,
  "#education": GraduationCap,
  "#contact": MessageCircle,
};

interface BottomNavProps {
  activeId: string;
}

/**
 * Replaces the top nav on small screens with a fixed bottom tab bar — the
 * pattern mobile users already expect from native apps. Icon-only by design
 * so all seven sections fit without wrapping or truncating on narrow phones;
 * each tab still carries a visible label for assistive tech.
 */
export function BottomNav({ activeId }: BottomNavProps) {
  return (
    <nav
      aria-label="Mobile"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-neutral-200 bg-white/90 pb-[env(safe-area-inset-bottom)] shadow-[0_-4px_16px_rgba(15,15,20,0.06)] backdrop-blur-md md:hidden dark:border-slate-800 dark:bg-slate-950/90 dark:shadow-[0_-4px_16px_rgba(0,0,0,0.3)]"
    >
      <ul className="flex items-stretch">
        {navigation.map((item) => {
          const isActive = activeId === item.href.slice(1);
          const Icon = NAV_ICONS[item.href] ?? Home;

          return (
            <li key={item.href} className="flex-1">
              <a
                href={item.href}
                onClick={(event) => scrollToSection(event, item.href)}
                aria-current={isActive ? "page" : undefined}
                className="flex flex-col items-center justify-center gap-1 px-0.5 py-2.5 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-brand-500"
              >
                <span
                  className={cn(
                    "flex h-8 w-8 items-center justify-center rounded-xl transition-all duration-200",
                    isActive
                      ? "bg-brand-50 text-brand-600 dark:bg-brand-950 dark:text-brand-400"
                      : "text-neutral-500 dark:text-slate-400",
                  )}
                >
                  <Icon className="h-[19px] w-[19px]" aria-hidden="true" />
                </span>
                <span
                  className={cn(
                    "w-full truncate text-center text-[9.5px] font-medium leading-none transition-colors duration-200",
                    isActive ? "text-brand-600 dark:text-brand-400" : "text-neutral-500 dark:text-slate-400",
                  )}
                >
                  {item.label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
