import { Container } from "@/components/common/Container";
import { CTALink } from "@/components/common/Button";
import { Badge } from "@/components/common/Badge";
import { Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-20 pt-16 sm:pt-24 lg:pb-32 lg:pt-32">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-60 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <Container className="relative">
        <div className="mx-auto max-w-4xl text-center">
          <Badge tone="primary" className="mx-auto">
            <Sparkles className="mr-1.5 size-3" />
            Digital Marketing & Branding Agency
          </Badge>
          <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl">
            We build brands that{" "}
            <span className="text-gradient">grow revenue</span>, not just
            followers.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">
            Outpro.India is a full-stack growth partner for ambitious businesses.
            Strategy, identity, content and performance — under one premium roof.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CTALink to="/contact" size="lg" withArrow>
              Start a Project
            </CTALink>
            <CTALink to="/portfolio" size="lg" variant="secondary">
              View Our Work
            </CTALink>
          </div>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span>Trusted by 120+ brands</span>
            <span aria-hidden>•</span>
            <span>4.8× avg. ROAS</span>
            <span aria-hidden>•</span>
            <span>94% client retention</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
