import { Container } from "@/components/common/Container";
import { CTALink } from "@/components/common/Button";
import { NewsletterForm } from "@/components/forms/NewsletterForm";

export function ComingSoon({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative py-24 lg:py-40">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-50 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-primary">
            {eyebrow} · Coming soon
          </span>
          <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] sm:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mx-auto mt-5 max-w-xl text-muted-foreground">{description}</p>
          )}
          <div className="mx-auto mt-10 max-w-md">
            <NewsletterForm />
          </div>
          <div className="mt-8">
            <CTALink to="/" variant="secondary">Back to home</CTALink>
          </div>
        </div>
      </Container>
    </section>
  );
}
