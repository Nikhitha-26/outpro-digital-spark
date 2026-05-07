import { Link } from "@tanstack/react-router";
import { Card } from "@/components/common/Card";
import { ArrowUpRight, type LucideIcon } from "lucide-react";

export function ServiceCard({
  slug,
  title,
  description,
  Icon,
}: {
  slug: string;
  title: string;
  description: string;
  Icon: LucideIcon;
}) {
  return (
    <Link to="/services/$slug" params={{ slug }} className="group block">
      <Card interactive className="h-full">
        <div className="flex size-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-elegant">
          <Icon className="size-5" />
        </div>
        <h3 className="mt-6 text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        <div className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary">
          Learn more <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </div>
      </Card>
    </Link>
  );
}
