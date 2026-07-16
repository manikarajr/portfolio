import { ListChecks, Trophy } from "lucide-react";
import { CompanyMark } from "../../components/common/CompanyMark";
import { TechChip } from "../../components/common/TechChip";
import { Card } from "../../components/ui/Card";
import type { WorkExperience } from "../../types/portfolio";

interface ExperienceCardProps {
  experience: WorkExperience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <Card hoverable>
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
        <div className="flex items-start gap-3.5">
          <CompanyMark name={experience.company} logoUrl={experience.logoUrl} />
          <div>
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">{experience.role}</h3>
            <p className="text-brand-600 dark:text-brand-400">
              {experience.company}
              <span className="text-neutral-400 dark:text-slate-600"> · </span>
              <span className="text-neutral-500 dark:text-slate-400">{experience.location}</span>
            </p>
          </div>
        </div>
        <p className="shrink-0 font-mono text-sm text-neutral-500 dark:text-slate-400">
          {experience.startDate} &ndash; {experience.endDate}
        </p>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-neutral-600 dark:text-slate-400">{experience.summary}</p>

      <div className="mt-5">
        <h4 className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-slate-400">
          <ListChecks className="h-3.5 w-3.5" aria-hidden="true" />
          Key Responsibilities
        </h4>
        <ul className="mt-2 space-y-2">
          {experience.responsibilities.map((item) => (
            <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-neutral-700 dark:text-slate-300">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-neutral-400 dark:bg-slate-600" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-5">
        <h4 className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-slate-400">
          <Trophy className="h-3.5 w-3.5" aria-hidden="true" />
          Achievements
        </h4>
        <ul className="mt-2 space-y-2">
          {experience.achievements.map((item) => (
            <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-neutral-700 dark:text-slate-300">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-500" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {experience.technologies.map((tech) => (
          <TechChip key={tech} name={tech} />
        ))}
      </div>
    </Card>
  );
}
