import { Layers } from "lucide-react";
import { AnimatedSection } from "../../components/common/AnimatedSection";
import { BackgroundPattern } from "../../components/common/BackgroundPattern";
import { Container } from "../../components/common/Container";
import { SectionHeading } from "../../components/common/SectionHeading";
import { skillCategories } from "../../data/skills";
import { SkillCategory } from "./SkillCategory";

export function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-20 py-28 lg:py-36">
      <BackgroundPattern className="h-full" />
      <Container>
        <AnimatedSection>
          <SectionHeading
            eyebrow="Skills"
            title="Technologies I work with"
            description="A pragmatic toolkit built around Angular and ASP.NET Core, with React as part of my frontend skillset — backed by the backend and infrastructure skills needed to ship a full feature."
            icon={<Layers className="h-5 w-5" />}
          />
        </AnimatedSection>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <AnimatedSection key={category.id} delay={index * 60} variant="scale-in">
              <SkillCategory category={category} />
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
