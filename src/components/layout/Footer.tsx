import logo from "../../assets/logo.png";
import { Container } from "../common/Container";
import { SocialLinks } from "../common/SocialLinks";
import { navigation } from "../../data/navigation";
import { profile } from "../../data/profile";
import { socialLinks } from "../../data/social";
import { scrollToSection } from "../../utils/scrollToSection";


export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 bg-neutral-50 dark:border-slate-800 dark:bg-slate-950">
      <Container className="flex flex-col gap-8 pb-28 pt-12 md:pb-12">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <a
              href="#home"
              onClick={(event) => scrollToSection(event, "#home")}
              className="inline-flex items-center gap-2.5 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
            >
              <img src={logo} alt="" className="h-8 w-8 shrink-0 object-contain" />
              <span className="font-mono text-lg font-bold text-neutral-900 dark:text-white">{profile.name}</span>
            </a>
            <p className="mt-2 max-w-xs text-sm text-neutral-600 dark:text-slate-400">{profile.tagline}</p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(event) => scrollToSection(event, item.href)}
                className="text-sm font-medium text-neutral-600 transition-colors hover:text-brand-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 dark:text-slate-400 dark:hover:text-brand-400"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col-reverse items-center justify-between gap-6 border-t border-neutral-200 pt-8 sm:flex-row dark:border-slate-800">
          <p className="text-sm text-neutral-500 dark:text-slate-400">
            &copy; {year} {profile.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <SocialLinks links={socialLinks} />
          </div>
        </div>
      </Container>
    </footer>
  );
}
