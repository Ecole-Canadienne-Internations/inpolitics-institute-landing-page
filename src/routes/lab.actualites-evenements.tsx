import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/SubPage";

export const Route = createFileRoute("/lab/actualites-evenements")({
  component: () => (
    <SubPage eyebrow={`Lab — 03`} title={`Actualités & Événements`} intro={`Séminaires, colloques, revues de l'Institut.`} />
  ),
  head: () => ({ meta: [
    { title: "Actualités & Événements — InPolitics Institute" },
    { name: "description", content: "Séminaires, colloques, revues de l'Institut." },
    { property: "og:title", content: "Actualités & Événements — InPolitics Institute" },
    { property: "og:description", content: "Séminaires, colloques, revues de l'Institut." },
  ]}),
});
