import { createFileRoute } from "@tanstack/react-router";
import { RichSubPage } from "@/lib/subpage-content";

export const Route = createFileRoute("/diaspora/conciergerie")({
  component: () => <RichSubPage k="diaspora/conciergerie" />,
  head: () => ({
    meta: [
      { title: "Conciergerie & Sécurisation — InPolitics Institute" },
      { name: "description", content: "Accompagnement foncier, juridique et fiscal pour sécuriser les projets de la diaspora." },
      { property: "og:title", content: "Conciergerie & Sécurisation — InPolitics Institute" },
      { property: "og:description", content: "Accompagnement foncier, juridique et fiscal pour sécuriser les projets de la diaspora." },
      { property: "og:url", content: "https://inpoliticsinstitute.com/diaspora/conciergerie" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://inpoliticsinstitute.com/diaspora/conciergerie" }],
  }),
});
