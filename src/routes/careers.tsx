import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/common/ComingSoon";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Outpro.India" },
      { name: "description", content: "Join Outpro.India. Open roles coming soon." },
      { property: "og:title", content: "Careers — Outpro.India" },
      { property: "og:description", content: "Build the next chapter of Outpro with us." },
    ],
  }),
  component: () => (
    <ComingSoon
      eyebrow="Careers"
      title="Join the team — open roles coming soon."
      description="We're a senior, remote-friendly team across Mumbai, Bengaluru and Delhi NCR."
    />
  ),
});
