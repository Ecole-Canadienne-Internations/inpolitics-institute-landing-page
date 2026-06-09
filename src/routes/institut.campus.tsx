import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/SubPage";

export const Route = createFileRoute("/institut/campus")({
  component: () => (
    <SubPage eyebrow={`02 — Campus`} title={`Nos Campus`} intro={`Gigean (Montpellier Métropole) & pôles Afrique`} />
  ),
  head: () => ({ meta: [
    { title: "Nos Campus — InPolitics Institute" },
    { name: "description", content: "Gigean (Montpellier Métropole) & pôles Afrique" },
    { property: "og:title", content: "Nos Campus — InPolitics Institute" },
    { property: "og:description", content: "Gigean (Montpellier Métropole) & pôles Afrique" },
  ]}),
});
