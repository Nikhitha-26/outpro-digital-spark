import { createFileRoute, notFound } from "@tanstack/react-router";
import { ServiceDetailTemplate } from "@/components/services/ServiceDetailTemplate";
import { getServiceBySlug } from "@/data/services";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getServiceBySlug(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) =>
    loaderData
      ? {
          meta: [
            { title: `${loaderData.service.title} — Outpro.India` },
            { name: "description", content: loaderData.service.shortDescription },
            { property: "og:title", content: `${loaderData.service.title} — Outpro.India` },
            { property: "og:description", content: loaderData.service.shortDescription },
          ],
        }
      : {},
  notFoundComponent: () => (
    <div className="py-32 text-center">
      <h1 className="text-3xl font-semibold">Service not found</h1>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="py-32 text-center">
      <p className="text-muted-foreground">{error.message}</p>
    </div>
  ),
  component: ServiceDetailRoute,
});

function ServiceDetailRoute() {
  const { service } = Route.useLoaderData();
  return <ServiceDetailTemplate service={service} />;
}
