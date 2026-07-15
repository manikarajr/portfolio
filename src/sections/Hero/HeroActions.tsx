import { ArrowRight, Download, Send } from "lucide-react";
import { SocialLinks } from "../../components/common/SocialLinks";
import { Button } from "../../components/ui/Button";
import { profile } from "../../data/profile";
import { socialLinks } from "../../data/social";
import { scrollToSection } from "../../utils/scrollToSection";

export function HeroActions() {
  return (
    <>
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <Button
          href="#projects"
          onClick={(event) => scrollToSection(event, "#projects")}
          size="lg"
          icon={<ArrowRight className="h-4 w-4" />}
          iconPosition="right"
        >
          View Projects
        </Button>
        <Button
          href="#contact"
          onClick={(event) => scrollToSection(event, "#contact")}
          variant="outline"
          size="lg"
          icon={<Send className="h-4 w-4" />}
          iconPosition="right"
        >
          Contact Me
        </Button>
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-4">
        <a
          href={profile.resumeUrl}
          download
          className="group inline-flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-4 py-2.5 text-sm font-semibold text-neutral-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-600 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-brand-700 dark:hover:text-brand-400"
        >
          <Download className="h-4 w-4 motion-safe:transition-transform motion-safe:duration-200 motion-safe:group-hover:translate-y-0.5" />
          Download Resume
        </a>
        <span aria-hidden="true" className="hidden h-8 w-px bg-neutral-200 sm:block dark:bg-slate-800" />
        <SocialLinks links={socialLinks} />
      </div>
    </>
  );
}
