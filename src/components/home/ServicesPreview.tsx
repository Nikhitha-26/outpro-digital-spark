import { Link } from "@tanstack/react-router";
import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Card } from "@/components/common/Card";
import { services } from "@/data/services";
import {
  Sparkles,
  Share2,
  Search,
  TrendingUp,
  PenTool,
  Monitor,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  Share2,
  Search,
  TrendingUp,
  PenTool,
  Monitor,
};

export function ServicesPreview() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeader
            eyebrow="What we do"
            title="Six disciplines. One growth engine."
            description="A focused set of capabilities engineered to compound: brand, content, search, paid, social and web."
          />
          <Link
            to="/services"
            className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
          >
            All services <ArrowUpRight className="size-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = iconMap[s.icon] ?? Sparkles;
            return (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group"
              >
                <Card interactive className="h-full">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-elegant">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {s.shortDescription}
                  </p>
                  <div className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    Explore <ArrowUpRight className="size-4" />
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
