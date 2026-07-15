import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../../utils/cn";
import { scrollToSection } from "../../utils/scrollToSection";
import { IconButton } from "./IconButton";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <IconButton
      href="#home"
      onClick={(event) => scrollToSection(event, "#home")}
      label="Scroll to top"
      icon={<ArrowUp className="h-[18px] w-[18px]" />}
      className={cn(
        "fixed bottom-20 right-4 z-40 border-neutral-200 bg-white/90 shadow-lg shadow-neutral-900/10 backdrop-blur-sm transition-[opacity,transform] duration-300 dark:bg-slate-900/90 dark:shadow-black/30 md:bottom-6 md:right-6",
        isVisible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0",
      )}
      tabIndex={isVisible ? 0 : -1}
    />
  );
}
