import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { MetricsSection } from "@/components/home/MetricsSection";
import { FeaturedCaseStudies } from "@/components/home/FeaturedCaseStudies";
import { TestimonialsPreview } from "@/components/home/TestimonialsPreview";
import { CTASection } from "@/components/home/CTASection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Outpro.India — Digital Marketing & Branding Agency" },
      {
        name: "description",
        content:
          "Brand identity, performance marketing, SEO and content — engineered to grow revenue. Trusted by 120+ brands.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <HeroSection />
      <MetricsSection />
      <ServicesPreview />
      <FeaturedCaseStudies />
      <TestimonialsPreview />
      <CTASection />
    </>
  );
}
