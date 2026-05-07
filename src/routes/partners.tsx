import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/common/ComingSoon";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Partner Program — Outpro.India" },
      { name: "description", content: "Refer clients, white-label our services, or co-build campaigns. Coming soon." },
      { property: "og:title", content: "Partner Program — Outpro.India" },
      { property: "og:description", content: "Build with Outpro — partner program launching soon." },
    ],
  }),
  component: () => (
    <ComingSoon
      eyebrow="Partner Program"
      title="Grow together — partner program coming soon."
      description="Referral, white-label and co-build options for agencies, freelancers and platforms."
    />
  ),
});
