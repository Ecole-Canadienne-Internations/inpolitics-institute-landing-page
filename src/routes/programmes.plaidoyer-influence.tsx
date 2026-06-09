import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/SubPage";

export const Route = createFileRoute("/programmes/plaidoyer-influence")({
  component: () => (
    <SubPage eyebrow={`Programme — 02`} title={`Plaidoyer & Stratégies d'Influence`} intro={`Programme phare d'ingénierie d'influence.`} />
  ),
  head: () => ({ meta: [
    { title: "Plaidoyer & Stratégies d'Influence — InPolitics Institute" },
    { name: "description", content: "Programme phare d'ingénierie d'influence." },
    { property: "og:title", content: "Plaidoyer & Stratégies d'Influence — InPolitics Institute" },
    { property: "og:description", content: "Programme phare d'ingénierie d'influence." },
  ]}),
});
