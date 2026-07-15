import type { PortfolioImage } from "../types/portfolio";

/**
 * Stable, ID-pinned Unsplash photos (not the randomized /random endpoint) so
 * the same image loads on every visit. Replace with local assets or your own
 * photography at any time — every consumer just reads `src`/`alt` from here.
 */
export const portfolioImages = {
  about: {
    src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop",
    alt: "A laptop running a dark-themed code editor next to a small potted plant and a coffee mug on a minimal desk",
    width: 1000,
    height: 750,
  },
} satisfies Record<string, PortfolioImage>;
