import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/SubPage";

export const Route = createFileRoute("/lab/publications")({
  component: () => (
    <SubPage eyebrow={`Lab — 01`} title={`Publications & Recherche`} intro={`Analyses et rapports de données de l'Observatoire.`} />
  ),
  head: () => ({ meta: [
    { title: "Publications & Recherche — InPolitics Institute" },
    { name: "description", content: "Analyses et rapports de données de l'Observatoire." },
    { property: "og:title", content: "Publications & Recherche — InPolitics Institute" },
    { property: "og:description", content: "Analyses et rapports de données de l'Observatoire." },
  ]}),
});
