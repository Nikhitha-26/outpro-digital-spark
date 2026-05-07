import { Card } from "@/components/common/Card";
import { Star } from "lucide-react";
import type { Testimonial } from "@/types";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="flex h-full flex-col">
      <div className="flex items-center gap-1 text-primary">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="size-4 fill-current" />
        ))}
      </div>
      <p className="mt-4 flex-1 text-pretty text-base text-foreground/90">
        “{testimonial.quote}”
      </p>
      <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
        <div className="grid size-10 place-items-center rounded-full bg-gradient-primary text-sm font-semibold text-primary-foreground">
          {testimonial.name
            .split(" ")
            .map((n) => n[0])
            .slice(0, 2)
            .join("")}
        </div>
        <div>
          <p className="text-sm font-semibold">{testimonial.name}</p>
          <p className="text-xs text-muted-foreground">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
        {testimonial.isVideo && (
          <span className="ml-auto rounded-full border border-border px-2 py-1 text-[10px] uppercase tracking-wider text-muted-foreground">
            Video
          </span>
        )}
      </div>
    </Card>
  );
}
