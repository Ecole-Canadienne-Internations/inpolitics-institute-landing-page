import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/SubPage";

export const Route = createFileRoute("/diaspora/connect")({
  component: () => (
    <SubPage eyebrow={`Diaspora — 02`} title={`Diaspora Connect`} intro={`Matching profils Europe / besoins locaux Afrique.`} />
  ),
  head: () => ({ meta: [
    { title: "Diaspora Connect — InPolitics Institute" },
    { name: "description", content: "Matching profils Europe / besoins locaux Afrique." },
    { property: "og:title", content: "Diaspora Connect — InPolitics Institute" },
    { property: "og:description", content: "Matching profils Europe / besoins locaux Afrique." },
  ]}),
});
