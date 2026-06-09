import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/SubPage";

export const Route = createFileRoute("/gouvernance-digitale/solutions-saas")({
  component: () => (
    <SubPage eyebrow={`Digital — 01`} title={`Solutions SaaS Municipales`} intro={`Outils numériques de sécurisation des taxes locales.`} />
  ),
  head: () => ({ meta: [
    { title: "Solutions SaaS Municipales — InPolitics Institute" },
    { name: "description", content: "Outils numériques de sécurisation des taxes locales." },
    { property: "og:title", content: "Solutions SaaS Municipales — InPolitics Institute" },
    { property: "og:description", content: "Outils numériques de sécurisation des taxes locales." },
  ]}),
});
