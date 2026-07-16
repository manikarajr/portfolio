import { ArrowRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "../../components/common/BrandIcons";
import { ProjectImage } from "../../components/common/ProjectImage";
import { TechChip } from "../../components/common/TechChip";
import { Badge } from "../../components/ui/Badge";
import { Card } from "../../components/ui/Card";
import type { Project } from "../../types/portfolio";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card hoverable className="group flex h-full flex-col overflow-hidden p-0">
      <ProjectImage image={project.image} technologies={project.technologies} className="rounded-t-2xl" />

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">{project.title}</h3>
          {project.featured && <Badge tone="brand">Featured</Badge>}
        </div>

        <p className="mt-3 text-sm font-medium text-neutral-500 dark:text-slate-400">{project.problem}</p>
        <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-slate-400">{project.description}</p>

        <ul className="mt-4 space-y-2">
          {project.features.slice(0, 3).map((feature) => (
            <li key={feature} className="flex gap-2.5 text-sm leading-relaxed text-neutral-700 dark:text-slate-300">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-500" aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <TechChip key={tech} name={tech} />
          ))}
        </div>

        {(project.githubUrl || project.liveUrl) && (
          <div className="mt-6 flex items-center gap-4 border-t border-neutral-100 pt-4 dark:border-slate-800">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-700 transition-colors hover:text-brand-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 dark:text-slate-300 dark:hover:text-brand-400"
              >
                <GithubIcon className="h-4 w-4" />
                Source
                <ArrowRight className="h-3 w-3 -translate-x-1 opacity-0 motion-safe:transition-all motion-safe:duration-200 motion-safe:group-hover/link:translate-x-0 motion-safe:group-hover/link:opacity-100" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-700 transition-colors hover:text-brand-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 dark:text-slate-300 dark:hover:text-brand-400"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
                <ArrowRight className="h-3 w-3 -translate-x-1 opacity-0 motion-safe:transition-all motion-safe:duration-200 motion-safe:group-hover/link:translate-x-0 motion-safe:group-hover/link:opacity-100" />
              </a>
            )}
          </div>
        )}
      </div>
    </Card>
  );
}
