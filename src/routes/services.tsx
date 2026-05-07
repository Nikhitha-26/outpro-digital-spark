import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ServiceCard } from "@/components/services/ServiceCard";
import { CTASection } from "@/components/home/CTASection";
import { services } from "@/data/services";
import {
  Sparkles,
  Share2,
  Search,
  TrendingUp,
  PenTool,
  Monitor,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Sparkles, Share2, Search, TrendingUp, PenTool, Monitor,
};

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Outpro.India" },
      {
        name: "description",
        content:
          "Brand identity, social, SEO, performance marketing, content and web — six services engineered to compound growth.",
      },
      { property: "og:title", content: "Services — Outpro.India" },
      { property: "og:description", content: "Six disciplines. One growth engine." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="pt-16 lg:pt-24">
        <Container>
          <SectionHeader
            eyebrow="Services"
            title="Built to compound."
            description="Choose a single capability or combine them into an end-to-end growth engine. Every engagement is led by a senior strategist."
          />
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard
                key={s.slug}
                slug={s.slug}
                title={s.title}
                description={s.shortDescription}
                Icon={iconMap[s.icon] ?? Sparkles}
              />
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
