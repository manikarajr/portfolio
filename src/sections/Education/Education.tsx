import { Award, GraduationCap } from "lucide-react";
import { AnimatedSection } from "../../components/common/AnimatedSection";
import { Container } from "../../components/common/Container";
import { SectionHeading } from "../../components/common/SectionHeading";
import { Card } from "../../components/ui/Card";
import { certifications, education } from "../../data/education";

export function Education() {
  return (
    <section id="education" className="scroll-mt-20 py-28 lg:py-36">
      <Container>
        <AnimatedSection>
          <SectionHeading
            eyebrow="Education"
            title="Education & certifications"
            icon={<GraduationCap className="h-5 w-5" />}
          />
        </AnimatedSection>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <AnimatedSection variant="fade-right">
            <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-neutral-500 dark:text-slate-500">
              <GraduationCap className="h-4 w-4" aria-hidden="true" />
              Education
            </h3>
            <div className="space-y-4">
              {education.map((item) => (
                <Card key={item.id}>
                  <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                    <h4 className="font-semibold text-neutral-900 dark:text-white">{item.degree}</h4>
                    <p className="font-mono text-sm text-neutral-500 dark:text-slate-500">
                      {item.startYear === item.endYear ? item.endYear : `${item.startYear} – ${item.endYear}`}
                    </p>
                  </div>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-slate-400">
                    {item.institution} · {item.location}
                  </p>
                  {item.achievements && (
                    <ul className="mt-3 space-y-1.5">
                      {item.achievements.map((achievement) => (
                        <li
                          key={achievement}
                          className="flex gap-2.5 text-sm leading-relaxed text-neutral-700 dark:text-slate-300"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-500" aria-hidden="true" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  )}
                </Card>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100} variant="fade-left">
            <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-neutral-500 dark:text-slate-500">
              <Award className="h-4 w-4" aria-hidden="true" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <Card key={cert.id}>
                  <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                    <h4 className="font-semibold text-neutral-900 dark:text-white">
                      {cert.credentialUrl ? (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="hover:text-brand-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 dark:hover:text-brand-400"
                        >
                          {cert.name}
                        </a>
                      ) : (
                        cert.name
                      )}
                    </h4>
                    {cert.year && (
                      <p className="font-mono text-sm text-neutral-500 dark:text-slate-500">{cert.year}</p>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-slate-400">{cert.issuer}</p>
                </Card>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
