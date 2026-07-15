import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { AnimatedSection } from "../../components/common/AnimatedSection";
import { Container } from "../../components/common/Container";
import { SectionHeading } from "../../components/common/SectionHeading";
import { SocialLinks } from "../../components/common/SocialLinks";
import { Card } from "../../components/ui/Card";
import { profile } from "../../data/profile";
import { socialLinks } from "../../data/social";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-28 lg:py-36">
      <Container>
        <AnimatedSection>
          <SectionHeading
            eyebrow="Contact"
            title="Let's work together"
            description="Have a role, project, or question in mind? I usually reply within a day or two."
            icon={<MessageCircle className="h-5 w-5" />}
          />
        </AnimatedSection>

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          <AnimatedSection className="lg:col-span-2" variant="fade-right">
            <Card className="flex h-full flex-col justify-between">
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-950 dark:text-brand-400">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-900 dark:text-white">Email</p>
                    <a
                      href={`mailto:${profile.email}`}
                      className="text-sm text-neutral-600 hover:text-brand-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 dark:text-slate-400 dark:hover:text-brand-400"
                    >
                      {profile.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-950 dark:text-brand-400">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-900 dark:text-white">Phone</p>
                    <a
                      href={`tel:${profile.phone.replace(/\s+/g, "")}`}
                      className="text-sm text-neutral-600 hover:text-brand-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 dark:text-slate-400 dark:hover:text-brand-400"
                    >
                      {profile.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-950 dark:text-brand-400">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-900 dark:text-white">Location</p>
                    <p className="text-sm text-neutral-600 dark:text-slate-400">{profile.location}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <p className="mb-3 text-sm font-semibold text-neutral-900 dark:text-white">Find me online</p>
                <SocialLinks links={socialLinks} />
              </div>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={100} variant="fade-left" className="lg:col-span-3">
            <Card>
              <ContactForm />
            </Card>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
