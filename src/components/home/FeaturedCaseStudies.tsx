import { Link } from "@tanstack/react-router";
import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { CoverArt } from "@/components/common/CoverArt";
import { Badge } from "@/components/common/Badge";
import { caseStudies } from "@/data/caseStudies";
import { ArrowUpRight } from "lucide-react";

export function FeaturedCaseStudies() {
  const featured = caseStudies.slice(0, 3);
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeader
            eyebrow="Selected work"
            title="Outcomes we're proud of."
            description="A snapshot of recent wins across branding, performance and SEO."
          />
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
          >
            View all case studies <ArrowUpRight className="size-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {featured.map((c) => (
            <Link
              key={c.slug}
              to="/portfolio/$slug"
              params={{ slug: c.slug }}
              className="group"
            >
              <CoverArt id={c.cover} label={c.client} className="transition-transform duration-500 group-hover:scale-[1.01]" />
              <div className="mt-5 flex items-center gap-2">
                <Badge tone="primary">{c.category}</Badge>
                <span className="text-xs text-muted-foreground">{c.industry}</span>
              </div>
              <h3 className="mt-3 text-xl font-semibold transition-colors group-hover:text-primary">
                {c.client} — {c.result}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.solution}</p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
