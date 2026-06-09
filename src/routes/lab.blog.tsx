import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/SubPage";

export const Route = createFileRoute("/lab/blog")({
  component: () => (
    <SubPage eyebrow={`Lab — 02`} title={`Le Blog du Décideur Public`} intro={`Tribunes, analyses politiques et décryptages.`} />
  ),
  head: () => ({ meta: [
    { title: "Le Blog du Décideur Public — InPolitics Institute" },
    { name: "description", content: "Tribunes, analyses politiques et décryptages." },
    { property: "og:title", content: "Le Blog du Décideur Public — InPolitics Institute" },
    { property: "og:description", content: "Tribunes, analyses politiques et décryptages." },
  ]}),
});
