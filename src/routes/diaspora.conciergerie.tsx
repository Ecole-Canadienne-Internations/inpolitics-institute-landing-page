import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/SubPage";

export const Route = createFileRoute("/diaspora/conciergerie")({
  component: () => (
    <SubPage eyebrow={`Diaspora — 03`} title={`Conciergerie & Sécurisation`} intro={`Sécurisation foncière, juridique et fiscale.`} />
  ),
  head: () => ({ meta: [
    { title: "Conciergerie & Sécurisation — InPolitics Institute" },
    { name: "description", content: "Sécurisation foncière, juridique et fiscale." },
    { property: "og:title", content: "Conciergerie & Sécurisation — InPolitics Institute" },
    { property: "og:description", content: "Sécurisation foncière, juridique et fiscale." },
  ]}),
});
