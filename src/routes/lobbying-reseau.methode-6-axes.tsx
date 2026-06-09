import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/SubPage";

export const Route = createFileRoute("/lobbying-reseau/methode-6-axes")({
  component: () => (
    <SubPage eyebrow={`Lobbying — 01`} title={`Notre Méthode en 6 Axes`} intro={`Les 3 phases stratégiques d'InPolitics Influence.`} />
  ),
  head: () => ({ meta: [
    { title: "Notre Méthode en 6 Axes — InPolitics Institute" },
    { name: "description", content: "Les 3 phases stratégiques d'InPolitics Influence." },
    { property: "og:title", content: "Notre Méthode en 6 Axes — InPolitics Institute" },
    { property: "og:description", content: "Les 3 phases stratégiques d'InPolitics Influence." },
  ]}),
});
