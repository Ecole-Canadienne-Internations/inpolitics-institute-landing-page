import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/SubPage";

export const Route = createFileRoute("/lobbying-reseau/club-exec")({
  component: () => (
    <SubPage eyebrow={`Lobbying — 02`} title={`Club InPolitics Exec`} intro={`Le cercle de réflexion privé de l'Institut.`} />
  ),
  head: () => ({ meta: [
    { title: "Club InPolitics Exec — InPolitics Institute" },
    { name: "description", content: "Le cercle de réflexion privé de l'Institut." },
    { property: "og:title", content: "Club InPolitics Exec — InPolitics Institute" },
    { property: "og:description", content: "Le cercle de réflexion privé de l'Institut." },
  ]}),
});
