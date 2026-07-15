import type { MouseEvent } from "react";

/**
 * Smoothly scrolls to the target section without letting the browser append
 * the "#id" fragment to the URL (native anchor navigation would otherwise
 * rewrite the address bar on every click).
 */
export function scrollToSection(event: MouseEvent<HTMLAnchorElement>, href: string) {
  if (!href.startsWith("#")) return;
  event.preventDefault();
  document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth", block: "start" });
}
