import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/SubPage";

export const Route = createFileRoute("/gouvernance-digitale/etudes-de-cas")({
  component: () => (
    <SubPage eyebrow={`Digital — 03`} title={`Études de Cas`} intro={`Analyses réelles des municipalités partenaires.`} />
  ),
  head: () => ({ meta: [
    { title: "Études de Cas — InPolitics Institute" },
    { name: "description", content: "Analyses réelles des municipalités partenaires." },
    { property: "og:title", content: "Études de Cas — InPolitics Institute" },
    { property: "og:description", content: "Analyses réelles des municipalités partenaires." },
  ]}),
});
