import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-60 disabled:pointer-events-none whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-primary text-primary-foreground shadow-elegant hover:shadow-glow hover:-translate-y-0.5",
  secondary:
    "border border-border bg-surface/60 text-foreground hover:bg-surface-elevated hover:border-primary/40",
  ghost: "text-foreground hover:text-primary",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-14 px-7 text-base",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  children: ReactNode;
  className?: string;
}

export function CTAButton({
  variant = "primary",
  size = "md",
  withArrow,
  children,
  className,
  ...props
}: CommonProps & ComponentProps<"button">) {
  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
      {withArrow && <ArrowUpRight className="size-4" />}
    </button>
  );
}

export function CTALink({
  to,
  variant = "primary",
  size = "md",
  withArrow,
  children,
  className,
  external,
}: CommonProps & { to: string; external?: boolean }) {
  if (external) {
    return (
      <a
        href={to}
        className={cn(base, variants[variant], sizes[size], className)}
        target="_blank"
        rel="noreferrer"
      >
        {children}
        {withArrow && <ArrowUpRight className="size-4" />}
      </a>
    );
  }
  return (
    <Link to={to} className={cn(base, variants[variant], sizes[size], className)}>
      {children}
      {withArrow && <ArrowUpRight className="size-4" />}
    </Link>
  );
}
