import { Briefcase } from "lucide-react";
import { TechIcon } from "../../components/common/TechIcon";
import { profile } from "../../data/profile";

const CORE_STACK = ["Angular (v13–20)", "ASP.NET Core 8", "React", "MS SQL Server"];

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 -top-8 -z-10 h-56 w-56 rounded-full bg-brand-300/40 blur-3xl dark:bg-brand-700/20"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 -left-8 -z-10 h-48 w-48 rounded-full bg-brand-200/40 blur-3xl dark:bg-brand-900/20"
      />

      <div className="relative">
        <div className="overflow-hidden rounded-3xl border border-neutral-200/80 shadow-2xl shadow-neutral-900/[0.08] dark:border-slate-800">
          {profile.avatarUrl ? (
            <img
              src={profile.avatarUrl}
              alt={`${profile.name}, ${profile.title}`}
              width={480}
              height={600}
              fetchPriority="high"
              className="aspect-[4/5] w-full object-cover object-top transition-transform duration-500 motion-safe:hover:scale-105"
            />
          ) : (
            <div
              role="img"
              aria-label={profile.name}
              className="flex aspect-[4/5] w-full items-center justify-center bg-gradient-to-br from-brand-500 to-brand-700 font-mono text-6xl font-semibold text-white"
            >
              {profile.initials}
            </div>
          )}
        </div>

        <div className="absolute -bottom-6 left-6 inline-flex items-center gap-3 rounded-2xl border border-neutral-200 bg-white px-4 py-3.5 shadow-lg shadow-neutral-900/5 dark:border-slate-800 dark:bg-slate-900">
          <div
            aria-hidden="true"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-white dark:bg-brand-500"
          >
            <Briefcase className="h-5 w-5" />
          </div>
          <div>
            <p className="whitespace-nowrap text-lg font-bold leading-none text-neutral-900 dark:text-white">
              {profile.yearsExperience}+ Years
            </p>
            <p className="mt-1 whitespace-nowrap text-xs text-neutral-500 dark:text-slate-400">
              Professional Experience
            </p>
          </div>
        </div>
      </div>

      <div className="mt-14 flex flex-col items-center gap-4">
        <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-neutral-400 dark:text-slate-500">
          <span aria-hidden="true" className="h-px w-8 bg-neutral-300 dark:bg-slate-700" />
          Core Stack
          <span aria-hidden="true" className="h-px w-8 bg-neutral-300 dark:bg-slate-700" />
        </div>
        <ul className="flex items-center gap-3">
          {CORE_STACK.map((tech) => (
            <li
              key={tech}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-neutral-200 bg-white text-neutral-600 transition-colors hover:border-brand-300 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-brand-700"
            >
              <TechIcon name={tech} colored className="h-5 w-5" />
              <span className="sr-only">{tech}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
