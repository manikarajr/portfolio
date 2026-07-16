import { Briefcase, CheckCircle2, MapPin, User } from "lucide-react";
import { AnimatedSection } from "../../components/common/AnimatedSection";
import { Avatar } from "../../components/common/Avatar";
import { Container } from "../../components/common/Container";
import { FadeInImage } from "../../components/common/FadeInImage";
import { SectionHeading } from "../../components/common/SectionHeading";
import { Card } from "../../components/ui/Card";
import { portfolioImages } from "../../data/images";
import { profile } from "../../data/profile";

const QUICK_FACTS = [
  { icon: Briefcase, label: `${profile.yearsExperience}+ years experience` },
  { icon: MapPin, label: profile.location },
  { icon: CheckCircle2, label: profile.availableForWork ? "Available for new work" : "Not currently available" },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-28 lg:py-36">
      <Container>
        <AnimatedSection>
          <SectionHeading
            eyebrow="About Me"
            title="A developer focused on shipping things that hold up"
            icon={<User className="h-5 w-5" />}
          />
        </AnimatedSection>

        <div className="mt-12 grid gap-12 lg:grid-cols-3">
          <AnimatedSection className="lg:col-span-2" variant="fade-right">
            <div className="space-y-5">
              {profile.bio.map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className="text-base leading-relaxed text-neutral-600 dark:text-slate-400">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="my-8 overflow-hidden rounded-2xl border border-neutral-200/80 shadow-lg shadow-neutral-900/[0.05] dark:border-slate-800">
              <FadeInImage
                src={portfolioImages.about.src}
                alt={portfolioImages.about.alt}
                width={portfolioImages.about.width}
                height={portfolioImages.about.height}
                loading="lazy"
                className="aspect-[16/9] w-full object-cover transition-transform duration-500 motion-safe:hover:scale-105"
              />
            </div>
          </AnimatedSection>

          <div className="space-y-6">
            <AnimatedSection variant="fade-left">
              <Card className="flex flex-col items-center text-center">
                <Avatar
                  name={profile.name}
                  initials={profile.initials}
                  src={profile.avatarUrl}
                  size={100}
                  className="object-top"
                />
                <p className="mt-4 text-lg font-semibold text-neutral-900 dark:text-white">{profile.name}</p>
                <p className="text-sm text-neutral-500 dark:text-slate-400">{profile.title}</p>

                <ul className="mt-5 w-full space-y-3 border-t border-neutral-100 pt-5 text-left dark:border-slate-800">
                  {QUICK_FACTS.map(({ icon: Icon, label }) => (
                    <li key={label} className="flex items-center gap-2.5 text-sm text-neutral-700 dark:text-slate-300">
                      <Icon className="h-4 w-4 shrink-0 text-brand-600 dark:text-brand-400" aria-hidden="true" />
                      {label}
                    </li>
                  ))}
                </ul>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={100} variant="fade-left">
              <Card>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-500 dark:text-slate-400">
                  Core Strengths
                </h3>
                <ul className="mt-4 space-y-4">
                  {profile.strengths.map((strength) => (
                    <li key={strength} className="flex gap-3 text-sm leading-relaxed text-neutral-700 dark:text-slate-300">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" aria-hidden="true" />
                      {strength}
                    </li>
                  ))}
                </ul>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </Container>
    </section>
  );
}
