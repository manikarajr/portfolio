import { Download } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "../../assets/logo.svg";
import { Container } from "../common/Container";
import { profile } from "../../data/profile";
import { navigation } from "../../data/navigation";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import { ThemeToggle } from "../ui/ThemeToggle";
import { Button } from "../ui/Button";
import { IconButton } from "../ui/IconButton";
import { cn } from "../../utils/cn";
import { scrollToSection } from "../../utils/scrollToSection";
import { BottomNav } from "./BottomNav";

const SECTION_IDS = navigation.map((item) => item.href.slice(1));

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const activeId = useScrollSpy(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors",
          isScrolled
            ? "border-b border-neutral-200 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/80"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <Container as="nav" className="flex h-16 items-center justify-between" aria-label="Primary">
          <a
            href="#home"
            onClick={(event) => scrollToSection(event, "#home")}
            aria-label={`${profile.name} — home`}
            className="group inline-flex items-center gap-2.5 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
          >
            <span aria-hidden="true" className="flex h-9 w-9 shrink-0 items-center justify-center">
              <img
                src={logo}
                alt=""
                className="h-full w-full object-contain transition-transform duration-200 motion-safe:group-hover:scale-105"
              />
            </span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {navigation.map((item) => {
              const isActive = activeId === item.href.slice(1);
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(event) => scrollToSection(event, item.href)}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "relative rounded-full px-3.5 py-2 text-[13px] font-medium tracking-tight transition-colors after:absolute after:inset-x-3 after:-bottom-0.5 after:h-0.5 after:origin-center after:scale-x-0 after:rounded-full after:bg-brand-500 after:transition-transform after:duration-300 hover:after:scale-x-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500",
                      isActive
                        ? "text-brand-600 after:scale-x-100 dark:text-brand-400"
                        : "text-neutral-600 hover:text-neutral-900 dark:text-slate-400 dark:hover:text-white",
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />
            <Button href={profile.resumeUrl} download variant="outline" size="md">
              Resume
            </Button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <IconButton
              href={profile.resumeUrl}
              download
              label="Download resume"
              icon={<Download className="h-[18px] w-[18px]" />}
            />
          </div>
        </Container>
      </header>

      <BottomNav activeId={activeId} />
    </>
  );
}
