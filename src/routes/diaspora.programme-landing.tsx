import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/SubPage";

export const Route = createFileRoute("/diaspora/programme-landing")({
  component: () => (
    <SubPage eyebrow={`Diaspora — 01`} title={`Programme « Landing »`} intro={`Bootcamp de reconnexion économique à Gigean.`} />
  ),
  head: () => ({ meta: [
    { title: "Programme « Landing » — InPolitics Institute" },
    { name: "description", content: "Bootcamp de reconnexion économique à Gigean." },
    { property: "og:title", content: "Programme « Landing » — InPolitics Institute" },
    { property: "og:description", content: "Bootcamp de reconnexion économique à Gigean." },
  ]}),
});
