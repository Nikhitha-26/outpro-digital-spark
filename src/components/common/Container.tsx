import { cn } from "@/lib/utils";
import { createElement, type ReactNode, type ElementType } from "react";

export function Container({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}) {
  return createElement(
    as,
    { className: cn("mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12", className) },
    children,
  );
}
