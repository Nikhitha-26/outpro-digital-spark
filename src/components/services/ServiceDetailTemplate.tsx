import { Link } from "@tanstack/react-router";
import { Container } from "@/components/common/Container";
import { Badge } from "@/components/common/Badge";
import { Card } from "@/components/common/Card";
import { CTALink } from "@/components/common/Button";
import { CoverArt } from "@/components/common/CoverArt";
import { CTASection } from "@/components/home/CTASection";
import { getCaseStudyBySlug } from "@/data/caseStudies";
import { Check, ArrowUpRight } from "lucide-react";
import type { Service } from "@/types";

export function ServiceDetailTemplate({ service }: { service: Service }) {
  const cs = service.relatedCaseStudy ? getCaseStudyBySlug(service.relatedCaseStudy) : undefined;

  return (
    <>
      <section className="pb-12 pt-16 lg:pb-20 lg:pt-24">
        <Container>
          <Badge tone="primary">Service</Badge>
          <h1 className="mt-4 max-w-3xl text-balance text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
            {service.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            {service.shortDescription}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CTALink to="/contact" withArrow>Start a Project</CTALink>
            <CTALink to="/services" variant="secondary">All services</CTALink>
          </div>
        </Container>
      </section>

      <section className="py-12 lg:py-16">
        <Container className="grid gap-10 lg:grid-cols-2">
          <Card>
            <h2 className="text-2xl font-semibold">What's included</h2>
            <ul className="mt-6 space-y-3">
              {service.includes.map((i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 grid size-5 place-items-center rounded-full bg-primary/15 text-primary">
                    <Check className="size-3" />
                  </span>
                  {i}
                </li>
              ))}
            </ul>
          </Card>
          <Card>
            <h2 className="text-2xl font-semibold">Benefits</h2>
            <ul className="mt-6 space-y-3">
              {service.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 grid size-5 place-items-center rounded-full bg-primary/15 text-primary">
                    <Check className="size-3" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </Card>
        </Container>
      </section>

      <section className="py-12 lg:py-16">
        <Container>
          <h2 className="text-3xl font-semibold sm:text-4xl">Our process</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((p, i) => (
              <Card key={p.step}>
                <span className="font-display text-sm text-primary">0{i + 1}</span>
                <h3 className="mt-2 text-lg font-semibold">{p.step}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {cs && (
        <section className="py-12 lg:py-16">
          <Container>
            <h2 className="text-3xl font-semibold sm:text-4xl">Related case study</h2>
            <Link
              to="/portfolio/$slug"
              params={{ slug: cs.slug }}
              className="mt-8 block group"
            >
              <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                <CoverArt id={cs.cover} label={cs.client} />
                <div>
                  <Badge tone="primary">{cs.category}</Badge>
                  <h3 className="mt-3 text-2xl font-semibold group-hover:text-primary">
                    {cs.client}
                  </h3>
                  <p className="mt-2 text-muted-foreground">{cs.solution}</p>
                  <p className="mt-4 font-display text-2xl text-gradient">
                    {cs.result}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary">
                    Read case study <ArrowUpRight className="size-4" />
                  </span>
                </div>
              </div>
            </Link>
          </Container>
        </section>
      )}

      <CTASection />
    </>
  );
}
