import { Container } from "@/components/common/Container";
import { metrics } from "@/data/metrics";

export function MetricsSection() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border lg:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label} className="bg-surface/60 p-8 text-center">
              <div className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                <span className="text-gradient">{m.value}</span>
                {m.suffix && <span className="text-foreground">{m.suffix}</span>}
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{m.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
