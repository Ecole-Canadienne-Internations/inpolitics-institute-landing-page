import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/SubPage";

export const Route = createFileRoute("/programmes/seminaires-gigean")({
  component: () => (
    <SubPage eyebrow={`Programme — 01`} title={`Séminaires d'Immersion — Gigean`} intro={`Formations de 3 à 5 jours pour l'élite publique.`} />
  ),
  head: () => ({ meta: [
    { title: "Séminaires d'Immersion — Gigean — InPolitics Institute" },
    { name: "description", content: "Formations de 3 à 5 jours pour l'élite publique." },
    { property: "og:title", content: "Séminaires d'Immersion — Gigean — InPolitics Institute" },
    { property: "og:description", content: "Formations de 3 à 5 jours pour l'élite publique." },
  ]}),
});
