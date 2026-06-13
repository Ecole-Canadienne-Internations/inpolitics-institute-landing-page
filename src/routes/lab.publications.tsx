import { createFileRoute } from "@tanstack/react-router";
import { RichSubPage } from "@/lib/subpage-content";

export const Route = createFileRoute("/lab/publications")({
  component: () => <RichSubPage k="lab/publications" />,
  head: () => ({
    meta: [
      { title: "Publications & Recherche — InPolitics Institute" },
      { name: "description", content: "Notes, rapports et baromètres de l'Observatoire InPolitics." },
      { property: "og:title", content: "Publications & Recherche — InPolitics Institute" },
      { property: "og:description", content: "Notes, rapports et baromètres de l'Observatoire InPolitics." },
      { property: "og:url", content: "https://inpoliticsinstitute.com/lab/publications" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://inpoliticsinstitute.com/lab/publications" }],
  }),
});
