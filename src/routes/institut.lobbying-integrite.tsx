import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/SubPage";

export const Route = createFileRoute("/institut/lobbying-integrite")({
  component: () => (
    <SubPage eyebrow={`04 — Intégrité`} title={`Lobbying, Plaidoyer & Intégrité`} intro={`Charte éthique et conformité OCDE / Union Européenne.`} />
  ),
  head: () => ({ meta: [
    { title: "Lobbying, Plaidoyer & Intégrité — InPolitics Institute" },
    { name: "description", content: "Charte éthique et conformité OCDE / Union Européenne." },
    { property: "og:title", content: "Lobbying, Plaidoyer & Intégrité — InPolitics Institute" },
    { property: "og:description", content: "Charte éthique et conformité OCDE / Union Européenne." },
  ]}),
});
