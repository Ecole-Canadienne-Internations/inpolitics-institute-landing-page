import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/SubPage";

export const Route = createFileRoute("/institut/label-haute-integrite")({
  component: () => (
    <SubPage eyebrow={`05 — Label`} title={`Label « Commune de Haute Intégrité »`} intro={`Le standard de transparence financière de l'Institut.`} />
  ),
  head: () => ({ meta: [
    { title: "Label « Commune de Haute Intégrité » — InPolitics Institute" },
    { name: "description", content: "Le standard de transparence financière de l'Institut." },
    { property: "og:title", content: "Label « Commune de Haute Intégrité » — InPolitics Institute" },
    { property: "og:description", content: "Le standard de transparence financière de l'Institut." },
  ]}),
});
