import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/SubPage";

export const Route = createFileRoute("/institut/diplomatie-territoriale")({
  component: () => (
    <SubPage eyebrow={`03 — Diplomatie`} title={`Diplomatie Territoriale`} intro={`Le positionnement international des territoires.`} />
  ),
  head: () => ({ meta: [
    { title: "Diplomatie Territoriale — InPolitics Institute" },
    { name: "description", content: "Le positionnement international des territoires." },
    { property: "og:title", content: "Diplomatie Territoriale — InPolitics Institute" },
    { property: "og:description", content: "Le positionnement international des territoires." },
  ]}),
});
