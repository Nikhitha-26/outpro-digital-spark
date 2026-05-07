import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Card } from "@/components/common/Card";
import { CTASection } from "@/components/home/CTASection";
import { leadership, team } from "@/data/team";
import { Target, Eye, Heart, Award } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Outpro.India" },
      {
        name: "description",
        content:
          "Outpro.India is a senior team of strategists, designers and growth marketers helping ambitious brands compound.",
      },
      { property: "og:title", content: "About Outpro.India" },
      { property: "og:description", content: "Meet the team building brands that grow revenue." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Target, title: "Outcomes over outputs", desc: "We measure success in business results, not deliverables." },
  { icon: Eye, title: "Transparent always", desc: "Real reporting, real conversations, no smoke and mirrors." },
  { icon: Heart, title: "Care, deeply", desc: "We treat your brand like it's our own." },
  { icon: Award, title: "Craft, always", desc: "Premium work is non-negotiable across every channel." },
];

function AboutPage() {
  return (
    <>
      <section className="pt-16 lg:pt-24">
        <Container>
          <SectionHeader
            eyebrow="About Outpro.India"
            title="A growth partner for ambitious brands."
            description="Founded in 2018, Outpro.India brings together senior talent from product, brand, performance and editorial to give clients a single, accountable growth engine."
          />
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container className="grid gap-6 lg:grid-cols-3">
          <Card>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">Mission</h3>
            <p className="mt-3 text-lg">Make premium growth accessible to every ambitious business.</p>
          </Card>
          <Card>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">Vision</h3>
            <p className="mt-3 text-lg">Be India's most trusted, outcomes-first growth partner.</p>
          </Card>
          <Card>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">Promise</h3>
            <p className="mt-3 text-lg">Senior people. Sharp craft. Honest reporting. Every month.</p>
          </Card>
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container>
          <SectionHeader eyebrow="Our values" title="What we stand for." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <Card key={v.title}>
                <div className="flex size-11 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground">
                  <v.icon className="size-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container>
          <SectionHeader eyebrow="Leadership" title="The people behind Outpro." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {leadership.map((m) => (
              <Card key={m.name}>
                <div className="grid size-14 place-items-center rounded-2xl bg-gradient-primary font-display text-lg font-semibold text-primary-foreground">
                  {m.initials}
                </div>
                <h3 className="mt-5 text-xl font-semibold">{m.name}</h3>
                <p className="text-sm text-primary">{m.role}</p>
                <p className="mt-3 text-sm text-muted-foreground">{m.bio}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-16 lg:pb-24">
        <Container>
          <SectionHeader eyebrow="Team" title="And the team that makes it happen." />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m) => (
              <div key={m.name} className="flex items-center gap-4 rounded-2xl border border-border bg-surface/50 p-4">
                <div className="grid size-12 place-items-center rounded-xl bg-gradient-primary font-display text-sm font-semibold text-primary-foreground">
                  {m.initials}
                </div>
                <div>
                  <p className="font-semibold">{m.name}</p>
                  <p className="text-xs text-muted-foreground">{m.role}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection title="Want to work with us?" description="We take on a small number of partnerships each quarter." />
    </>
  );
}
