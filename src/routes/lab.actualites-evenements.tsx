import { createFileRoute } from "@tanstack/react-router";
import { RichSubPage } from "@/lib/subpage-content";

export const Route = createFileRoute("/lab/actualites-evenements")({
  component: () => <RichSubPage k="lab/actualites-evenements" />,
  head: () => ({
    meta: [
      { title: "Actualités & Événements — InPolitics Institute" },
      { name: "description", content: "Séminaires, colloques et conférences publiques de l'Institut." },
      { property: "og:title", content: "Actualités & Événements — InPolitics Institute" },
      { property: "og:description", content: "Séminaires, colloques et conférences publiques de l'Institut." },
      { property: "og:url", content: "https://inpoliticsinstitute.com/lab/actualites-evenements" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://inpoliticsinstitute.com/lab/actualites-evenements" }],
  }),
});
