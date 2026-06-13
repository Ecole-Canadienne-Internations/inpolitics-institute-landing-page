import { createFileRoute } from "@tanstack/react-router";
import { RichSubPage } from "@/lib/subpage-content";

export const Route = createFileRoute("/lab/blog")({
  component: () => <RichSubPage k="lab/blog" />,
  head: () => ({
    meta: [
      { title: "Le Blog du Décideur Public — InPolitics Institute" },
      { name: "description", content: "Tribunes, analyses et décryptages signés par les praticiens de l'Institut." },
      { property: "og:title", content: "Le Blog du Décideur Public — InPolitics Institute" },
      { property: "og:description", content: "Tribunes, analyses et décryptages signés par les praticiens de l'Institut." },
      { property: "og:url", content: "https://inpoliticsinstitute.com/lab/blog" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://inpoliticsinstitute.com/lab/blog" }],
  }),
});
