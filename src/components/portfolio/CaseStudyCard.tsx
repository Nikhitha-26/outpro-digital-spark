import { Link } from "@tanstack/react-router";
import { Badge } from "@/components/common/Badge";
import { CoverArt } from "@/components/common/CoverArt";
import type { CaseStudy } from "@/types";
import { ArrowUpRight } from "lucide-react";

export function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <Link
      to="/portfolio/$slug"
      params={{ slug: caseStudy.slug }}
      className="group block"
    >
      <CoverArt id={caseStudy.cover} label={caseStudy.client} />
      <div className="mt-5 flex items-center gap-2">
        <Badge tone="primary">{caseStudy.category}</Badge>
        <span className="text-xs text-muted-foreground">{caseStudy.industry}</span>
      </div>
      <h3 className="mt-3 text-xl font-semibold transition-colors group-hover:text-primary">
        {caseStudy.client}
      </h3>
      <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
        {caseStudy.problem} {caseStudy.solution}
      </p>
      <p className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary">
        {caseStudy.result} <ArrowUpRight className="size-4" />
      </p>
    </Link>
  );
}
