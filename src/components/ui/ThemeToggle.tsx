import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";
import { IconButton } from "./IconButton";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <IconButton
      onClick={toggleTheme}
      aria-pressed={isDark}
      label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      icon={
        isDark ? (
          <Sun className="h-[18px] w-[18px] motion-safe:transition-transform motion-safe:duration-300" />
        ) : (
          <Moon className="h-[18px] w-[18px] motion-safe:transition-transform motion-safe:duration-300" />
        )
      }
    />
  );
}
