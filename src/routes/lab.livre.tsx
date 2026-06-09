import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/SubPage";

export const Route = createFileRoute("/lab/livre")({
  component: () => (
    <SubPage eyebrow={`Lab — 04`} title={`Le Livre — « Communiquer en Politique »`} intro={`Présentation et commande de l'ouvrage.`} />
  ),
  head: () => ({ meta: [
    { title: "Le Livre — « Communiquer en Politique » — InPolitics Institute" },
    { name: "description", content: "Présentation et commande de l'ouvrage." },
    { property: "og:title", content: "Le Livre — « Communiquer en Politique » — InPolitics Institute" },
    { property: "og:description", content: "Présentation et commande de l'ouvrage." },
  ]}),
});
