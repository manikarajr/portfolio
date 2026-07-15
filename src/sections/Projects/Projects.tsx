import { FolderGit2 } from "lucide-react";
import { AnimatedSection } from "../../components/common/AnimatedSection";
import { Container } from "../../components/common/Container";
import { SectionHeading } from "../../components/common/SectionHeading";
import { projects } from "../../data/projects";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 bg-surface py-28 lg:py-36 dark:bg-slate-950/50">
      <Container>
        <AnimatedSection>
          <SectionHeading
            eyebrow="Projects"
            title="Things I've built"
            description="A selection of projects that reflect problems I've actually run into — with the technical decisions behind each one."
            icon={<FolderGit2 className="h-5 w-5" />}
          />
        </AnimatedSection>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 60} variant="scale-in">
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
