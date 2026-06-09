import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/SubPage";

export const Route = createFileRoute("/programmes/cursus-hybrides")({
  component: () => (
    <SubPage eyebrow={`Programme — 04`} title={`Cursus Hybrides & E-learning`} intro={`Plateforme 24/7 — 80 % en ligne, 20 % en présentiel.`} />
  ),
  head: () => ({ meta: [
    { title: "Cursus Hybrides & E-learning — InPolitics Institute" },
    { name: "description", content: "Plateforme 24/7 — 80 % en ligne, 20 % en présentiel." },
    { property: "og:title", content: "Cursus Hybrides & E-learning — InPolitics Institute" },
    { property: "og:description", content: "Plateforme 24/7 — 80 % en ligne, 20 % en présentiel." },
  ]}),
});
