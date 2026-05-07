import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/common/ComingSoon";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Outpro.India" },
      { name: "description", content: "Insights on brand, growth and digital marketing. Coming soon." },
      { property: "og:title", content: "Blog — Outpro.India" },
      { property: "og:description", content: "Insights on brand and growth — coming soon." },
    ],
  }),
  component: () => (
    <ComingSoon
      eyebrow="Blog"
      title="Insights on brand & growth — coming soon."
      description="We're prepping a publication for founders and marketers. Subscribe below to get notified."
    />
  ),
});
