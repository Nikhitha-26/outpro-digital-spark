import { cn } from "@/lib/utils";

const gradients: Record<string, string> = {
  g1: "from-violet-500 via-fuchsia-500 to-orange-400",
  g2: "from-blue-500 via-cyan-400 to-emerald-400",
  g3: "from-indigo-500 via-purple-500 to-pink-400",
  g4: "from-rose-500 via-orange-400 to-amber-300",
  g5: "from-sky-500 via-indigo-500 to-violet-500",
};

export function CoverArt({
  id,
  label,
  className,
}: {
  id: string;
  label: string;
  className?: string;
}) {
  const grad = gradients[id] ?? gradients.g1;
  return (
    <div
      className={cn(
        "relative isolate overflow-hidden rounded-2xl border border-border",
        "aspect-[16/10]",
        className,
      )}
    >
      <div className={cn("absolute inset-0 bg-gradient-to-br", grad)} />
      <div className="absolute inset-0 grid-bg opacity-40 mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
      <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
        <span className="font-display text-xl font-semibold text-white drop-shadow">
          {label}
        </span>
      </div>
    </div>
  );
}
