import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/SubPage";

export const Route = createFileRoute("/programmes/visites-techniques")({
  component: () => (
    <SubPage eyebrow={`Programme — 05`} title={`Visites Techniques`} intro={`Immersion terrain — Smart Cities, eau, déchets.`} />
  ),
  head: () => ({ meta: [
    { title: "Visites Techniques — InPolitics Institute" },
    { name: "description", content: "Immersion terrain — Smart Cities, eau, déchets." },
    { property: "og:title", content: "Visites Techniques — InPolitics Institute" },
    { property: "og:description", content: "Immersion terrain — Smart Cities, eau, déchets." },
  ]}),
});
