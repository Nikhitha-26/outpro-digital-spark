import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Card({
  children,
  className,
  interactive,
}: {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
}) {
  return (
    <div
      className={cn(
        "glass relative overflow-hidden rounded-2xl p-6 shadow-card",
        interactive &&
          "transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-elegant",
        className,
      )}
    >
      {children}
    </div>
  );
}
