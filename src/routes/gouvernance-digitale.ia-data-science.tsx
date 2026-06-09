import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/SubPage";

export const Route = createFileRoute("/gouvernance-digitale/ia-data-science")({
  component: () => (
    <SubPage eyebrow={`Digital — 02`} title={`IA & Data Science`} intro={`Algorithmes prédictifs pour l'aménagement urbain.`} />
  ),
  head: () => ({ meta: [
    { title: "IA & Data Science — InPolitics Institute" },
    { name: "description", content: "Algorithmes prédictifs pour l'aménagement urbain." },
    { property: "og:title", content: "IA & Data Science — InPolitics Institute" },
    { property: "og:description", content: "Algorithmes prédictifs pour l'aménagement urbain." },
  ]}),
});
