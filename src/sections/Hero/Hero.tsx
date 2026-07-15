import { BackgroundPattern } from "../../components/common/BackgroundPattern";
import { Container } from "../../components/common/Container";
import { HeroContent } from "./HeroContent";
import { HeroVisual } from "./HeroVisual";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
      aria-label="Introduction"
    >
      <BackgroundPattern className="h-[36rem]" />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 hidden h-[36rem] dark:block dark:bg-[radial-gradient(60%_50%_at_50%_0%,theme(colors.brand.950),transparent)]"
      />

      <Container className="grid items-center gap-16 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-32">
        <HeroContent />
        <div className="[animation-delay:200ms] motion-safe:animate-scale-in">
          <HeroVisual />
        </div>
      </Container>
    </section>
  );
}
