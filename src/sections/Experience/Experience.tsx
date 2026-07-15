import { Briefcase } from "lucide-react";
import { AnimatedSection } from "../../components/common/AnimatedSection";
import { Container } from "../../components/common/Container";
import { SectionHeading } from "../../components/common/SectionHeading";
import { experiences } from "../../data/experience";
import { ExperienceCard } from "./ExperienceCard";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 bg-surface py-28 lg:py-36 dark:bg-slate-950/50">
      <Container>
        <AnimatedSection>
          <SectionHeading
            eyebrow="Experience"
            title="Where I've worked"
            description="Three years building production software across a full-time role and an internship."
            icon={<Briefcase className="h-5 w-5" />}
          />
        </AnimatedSection>

        <div className="mt-12 space-y-8">
          {experiences.map((experience, index) => (
            <AnimatedSection
              key={experience.id}
              delay={index * 100}
              variant={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              <ExperienceCard experience={experience} />
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
