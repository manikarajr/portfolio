import { profile } from "../../data/profile";
import { HeroActions } from "./HeroActions";
import { HighlightedText } from "./HighlightedText";

export function HeroContent() {
  return (
    <div>
      {profile.availableForWork && (
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-sm font-medium text-neutral-700 motion-safe:animate-fade-in-up dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75 motion-reduce:animate-none" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Available for new opportunities
        </div>
      )}

      <p className="[animation-delay:80ms] text-sm font-medium text-neutral-700 motion-safe:animate-fade-in-up dark:text-slate-300">
        Hi, I&apos;m <span className="font-semibold text-brand-600 dark:text-brand-400">{profile.name.split(" ")[0]}</span>{" "}
        &ndash; {profile.title}
      </p>

      <h1 className="mt-4 [animation-delay:160ms] text-4xl font-semibold leading-[1.15] tracking-tight text-neutral-900 motion-safe:animate-fade-in-up sm:text-5xl lg:text-6xl dark:text-white">
        I build fast, reliable, and scalable web{" "}
        <HighlightedText className="text-brand-600 dark:text-brand-400">applications</HighlightedText>.
      </h1>

      <p className="mt-6 max-w-xl [animation-delay:240ms] text-lg leading-relaxed text-neutral-600 motion-safe:animate-fade-in-up dark:text-slate-400 sm:text-xl">
        {profile.summary}
      </p>

      <div className="[animation-delay:320ms] motion-safe:animate-fade-in-up">
        <HeroActions />
      </div>
    </div>
  );
}
