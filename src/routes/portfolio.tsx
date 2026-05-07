import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { CaseStudyCard } from "@/components/portfolio/CaseStudyCard";
import { PortfolioFilter, type FilterValue } from "@/components/portfolio/PortfolioFilter";
import { CTASection } from "@/components/home/CTASection";
import { caseStudies } from "@/data/caseStudies";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio & Case Studies — Outpro.India" },
      {
        name: "description",
        content:
          "Selected case studies across branding, social, SEO, paid ads and web design.",
      },
      { property: "og:title", content: "Portfolio — Outpro.India" },
      { property: "og:description", content: "Outcomes we're proud of." },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  const [filter, setFilter] = useState<FilterValue>("All");
  const filtered = useMemo(
    () => (filter === "All" ? caseStudies : caseStudies.filter((c) => c.category === filter)),
    [filter],
  );

  return (
    <>
      <section className="pt-16 lg:pt-24">
        <Container>
          <SectionHeader
            eyebrow="Selected work"
            title="Case studies that compound."
            description="Real businesses, real results. Filter by discipline."
          />
          <div className="mt-10">
            <PortfolioFilter value={filter} onChange={setFilter} />
          </div>
        </Container>
      </section>

      <section className="py-12 lg:py-20">
        <Container>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((c) => (
              <CaseStudyCard key={c.slug} caseStudy={c} />
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="py-20 text-center text-muted-foreground">
              No case studies in this category yet.
            </p>
          )}
        </Container>
      </section>

      <CTASection />
    </>
  );
}
