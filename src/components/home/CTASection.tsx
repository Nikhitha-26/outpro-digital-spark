import { Container } from "@/components/common/Container";
import { CTALink } from "@/components/common/Button";

export function CTASection({
  eyebrow = "Ready when you are",
  title = "Let's build something that compounds.",
  description = "Tell us about your goals. We'll come back with a plan within 48 hours.",
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
}) {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-10 text-center shadow-card sm:p-16">
          <div className="pointer-events-none absolute inset-0 bg-gradient-primary opacity-20" />
          <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />
          <div className="relative">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              {eyebrow}
            </span>
            <h2 className="mx-auto mt-4 max-w-2xl text-balance text-3xl font-semibold sm:text-5xl">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              {description}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <CTALink to="/contact" size="lg" withArrow>
                Start a Project
              </CTALink>
              <CTALink to="/portfolio" size="lg" variant="secondary">
                View Case Studies
              </CTALink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
