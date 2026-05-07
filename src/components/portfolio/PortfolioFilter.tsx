import { cn } from "@/lib/utils";
import { caseStudyCategories } from "@/data/caseStudies";
import type { CaseStudyCategory } from "@/types";

export type FilterValue = "All" | CaseStudyCategory;

export function PortfolioFilter({
  value,
  onChange,
}: {
  value: FilterValue;
  onChange: (v: FilterValue) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {caseStudyCategories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={cn(
            "rounded-full border px-4 py-2 text-sm transition-all",
            value === cat
              ? "border-primary bg-primary/15 text-primary"
              : "border-border bg-surface/50 text-muted-foreground hover:text-foreground",
          )}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
