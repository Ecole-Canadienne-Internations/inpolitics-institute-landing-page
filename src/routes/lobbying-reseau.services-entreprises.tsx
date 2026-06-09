import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/SubPage";

export const Route = createFileRoute("/lobbying-reseau/services-entreprises")({
  component: () => (
    <SubPage eyebrow={`Lobbying — 03`} title={`Services aux Entreprises`} intro={`Position papers et accès aux marchés.`} />
  ),
  head: () => ({ meta: [
    { title: "Services aux Entreprises — InPolitics Institute" },
    { name: "description", content: "Position papers et accès aux marchés." },
    { property: "og:title", content: "Services aux Entreprises — InPolitics Institute" },
    { property: "og:description", content: "Position papers et accès aux marchés." },
  ]}),
});
