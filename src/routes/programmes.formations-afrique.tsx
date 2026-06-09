import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/SubPage";

export const Route = createFileRoute("/programmes/formations-afrique")({
  component: () => (
    <SubPage eyebrow={`Programme — 03`} title={`Formations Continues — Afrique`} intro={`Sessions de mise à niveau sur le continent.`} />
  ),
  head: () => ({ meta: [
    { title: "Formations Continues — Afrique — InPolitics Institute" },
    { name: "description", content: "Sessions de mise à niveau sur le continent." },
    { property: "og:title", content: "Formations Continues — Afrique — InPolitics Institute" },
    { property: "og:description", content: "Sessions de mise à niveau sur le continent." },
  ]}),
});
