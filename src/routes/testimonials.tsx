import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { TestimonialCard } from "@/components/testimonials/TestimonialCard";
import { CTASection } from "@/components/home/CTASection";
import { Card } from "@/components/common/Card";
import { testimonials } from "@/data/testimonials";
import { PlayCircle } from "lucide-react";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — Outpro.India" },
      { name: "description", content: "What clients say about working with Outpro.India." },
      { property: "og:title", content: "Testimonials — Outpro.India" },
      { property: "og:description", content: "Words from founders, marketers and CEOs we've partnered with." },
    ],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  const text = testimonials.filter((t) => !t.isVideo);
  const video = testimonials.filter((t) => t.isVideo);
  return (
    <>
      <section className="pt-16 lg:pt-24">
        <Container>
          <SectionHeader
            eyebrow="Testimonials"
            title="Trusted by founders and marketers."
            description="Long-term partnerships built on outcomes, transparency and craft."
          />
        </Container>
      </section>

      <section className="py-12 lg:py-20">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {text.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </Container>
      </section>

      {video.length > 0 && (
        <section className="py-12 lg:py-20">
          <Container>
            <SectionHeader title="Video testimonials" />
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {video.map((t) => (
                <Card key={t.id} className="p-0 overflow-hidden">
                  <div className="relative grid aspect-video place-items-center bg-gradient-to-br from-violet-500 via-fuchsia-500 to-orange-400">
                    <PlayCircle className="size-16 text-white/90" />
                  </div>
                  <div className="p-6">
                    <p className="text-base">"{t.quote}"</p>
                    <p className="mt-3 text-sm text-muted-foreground">
                      {t.name} · {t.role}, {t.company}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </Container>
        </section>
      )}

      <CTASection />
    </>
  );
}
