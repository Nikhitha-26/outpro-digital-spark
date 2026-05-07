import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Card } from "@/components/common/Card";
import { ContactForm } from "@/components/forms/ContactForm";
import { social } from "@/data/navigation";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Outpro.India" },
      { name: "description", content: "Tell us about your project. We respond within 48 hours." },
      { property: "og:title", content: "Contact Outpro.India" },
      { property: "og:description", content: "Start a project with our team." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="pt-16 lg:pt-24">
        <Container>
          <SectionHeader
            eyebrow="Contact"
            title="Let's talk growth."
            description="Share a few details and we'll come back within 48 hours with next steps."
          />
        </Container>
      </section>

      <section className="py-12 lg:py-20">
        <Container className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
          <div className="space-y-6 lg:col-span-2">
            <Card>
              <h3 className="text-lg font-semibold">Get in touch directly</h3>
              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 size-5 text-primary" />
                  <a href="mailto:hello@outpro.india" className="hover:text-primary">hello@outpro.india</a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 size-5 text-primary" />
                  <a href="tel:+919999999999" className="hover:text-primary">+91 99999 99999</a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-5 text-primary" />
                  <span>Mumbai · Bengaluru · Delhi NCR</span>
                </li>
              </ul>
            </Card>

            <Card>
              <h3 className="text-lg font-semibold">Follow Outpro</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {social.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-border bg-surface/60 px-4 py-2 text-sm hover:border-primary/40"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </Card>

            <Card className="flex items-center gap-4">
              <div className="grid size-11 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">
                <MessageCircle className="size-5" />
              </div>
              <div>
                <p className="font-semibold">Live chat</p>
                <p className="text-xs text-muted-foreground">
                  {/* Placeholder: integrate Intercom / Crisp / HubSpot live chat. */}
                  Coming soon — chat with a strategist in real time.
                </p>
              </div>
            </Card>
          </div>
        </Container>
      </section>
    </>
  );
}
