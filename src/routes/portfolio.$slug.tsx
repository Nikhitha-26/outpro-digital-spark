import { createFileRoute, notFound } from "@tanstack/react-router";
import { CaseStudyDetailTemplate } from "@/components/portfolio/CaseStudyDetailTemplate";
import { getCaseStudyBySlug } from "@/data/caseStudies";

export const Route = createFileRoute("/portfolio/$slug")({
  loader: ({ params }) => {
    const caseStudy = getCaseStudyBySlug(params.slug);
    if (!caseStudy) throw notFound();
    return { caseStudy };
  },
  head: ({ loaderData }) =>
    loaderData
      ? {
          meta: [
            { title: `${loaderData.caseStudy.client} — Case Study | Outpro.India` },
            { name: "description", content: `${loaderData.caseStudy.problem} ${loaderData.caseStudy.result}` },
            { property: "og:title", content: `${loaderData.caseStudy.client} — ${loaderData.caseStudy.result}` },
            { property: "og:description", content: loaderData.caseStudy.solution },
          ],
        }
      : {},
  notFoundComponent: () => (
    <div className="py-32 text-center">
      <h1 className="text-3xl font-semibold">Case study not found</h1>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="py-32 text-center">
      <p className="text-muted-foreground">{error.message}</p>
    </div>
  ),
  component: CaseStudyDetailRoute,
});

function CaseStudyDetailRoute() {
  const { caseStudy } = Route.useLoaderData();
  return <CaseStudyDetailTemplate caseStudy={caseStudy} />;
}
