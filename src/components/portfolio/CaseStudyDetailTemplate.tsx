import { Container } from "@/components/common/Container";
import { Badge } from "@/components/common/Badge";
import { Card } from "@/components/common/Card";
import { CoverArt } from "@/components/common/CoverArt";
import { CTASection } from "@/components/home/CTASection";
import type { CaseStudy } from "@/types";
import { Quote } from "lucide-react";

export function CaseStudyDetailTemplate({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <>
      <section className="pb-10 pt-16 lg:pt-24">
        <Container>
          <Badge tone="primary">{caseStudy.category}</Badge>
          <h1 className="mt-4 max-w-3xl text-balance text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
            {caseStudy.client}
          </h1>
          <p className="mt-4 text-muted-foreground">
            {caseStudy.industry} · {caseStudy.result}
          </p>
        </Container>
      </section>

      <section className="pb-12">
        <Container>
          <CoverArt id={caseStudy.cover} label={caseStudy.client} className="aspect-[16/8]" />
        </Container>
      </section>

      <section className="py-10 lg:py-14">
        <Container className="grid gap-6 lg:grid-cols-3">
          <Card>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">Challenge</h3>
            <p className="mt-3 text-base">{caseStudy.problem}</p>
          </Card>
          <Card>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">Strategy</h3>
            <p className="mt-3 text-base">{caseStudy.strategy}</p>
          </Card>
          <Card>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">Solution</h3>
            <p className="mt-3 text-base">{caseStudy.solution}</p>
          </Card>
        </Container>
      </section>

      <section className="py-10 lg:py-14">
        <Container>
          <h2 className="text-3xl font-semibold sm:text-4xl">Execution</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {caseStudy.execution.map((e, i) => (
              <Card key={e}>
                <span className="font-display text-sm text-primary">0{i + 1}</span>
                <p className="mt-2">{e}</p>
              </Card>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-10 lg:py-14">
        <Container>
          <h2 className="text-3xl font-semibold sm:text-4xl">Results</h2>
          <div className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-3">
            {caseStudy.kpi.map((k) => (
              <div key={k.label} className="bg-surface/60 p-8 text-center">
                <div className="font-display text-4xl font-semibold sm:text-5xl">
                  <span className="text-gradient">{k.value}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{k.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-10 lg:py-14">
        <Container>
          <h2 className="text-3xl font-semibold sm:text-4xl">Visual gallery</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {["g1", "g2", "g3", "g4", "g5", "g1"].map((g, i) => (
              <CoverArt key={i} id={g} label={`Asset ${i + 1}`} />
            ))}
          </div>
        </Container>
      </section>

      {caseStudy.testimonial && (
        <section className="py-10 lg:py-14">
          <Container>
            <Card className="p-10">
              <Quote className="size-8 text-primary" />
              <p className="mt-4 text-pretty text-2xl font-medium leading-snug sm:text-3xl">
                {caseStudy.testimonial.quote}
              </p>
              <p className="mt-6 text-sm text-muted-foreground">
                {caseStudy.testimonial.author} · {caseStudy.testimonial.role}
              </p>
            </Card>
          </Container>
        </section>
      )}

      <CTASection />
    </>
  );
}
