import { Link } from "@tanstack/react-router";
import { Container } from "@/components/common/Container";
import { footerNav, social } from "@/data/navigation";
import { NewsletterForm } from "@/components/forms/NewsletterForm";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-surface/40">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link to="/" className="flex items-center gap-2 font-display text-xl font-semibold">
              <span className="grid size-9 place-items-center rounded-lg bg-gradient-primary text-sm font-bold text-primary-foreground">
                O
              </span>
              Outpro<span className="text-primary">.India</span>
            </Link>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              A digital growth agency building brands, audiences and revenue for
              ambitious businesses across India and beyond.
            </p>
            <div className="mt-6 max-w-sm">
              <NewsletterForm />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            {Object.entries(footerNav).map(([heading, links]) => (
              <div key={heading}>
                <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {heading}
                </h4>
                <ul className="mt-4 space-y-3 text-sm">
                  {links.map((l) => (
                    <li key={l.to}>
                      <Link
                        to={l.to}
                        className="text-foreground/80 transition-colors hover:text-primary"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Outpro.India. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            {social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
