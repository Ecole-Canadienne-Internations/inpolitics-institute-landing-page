import { createFileRoute } from "@tanstack/react-router";
import { RichSubPage } from "@/lib/subpage-content";

export const Route = createFileRoute("/diaspora/programme-landing")({
  component: () => <RichSubPage k="diaspora/programme-landing" />,
  head: () => ({
    meta: [
      { title: "Programme \"Landing\" — InPolitics Institute" },
      { name: "description", content: "Bootcamp d'immersion de 5 jours à Gigean pour les talents de la diaspora." },
      { property: "og:title", content: "Programme \"Landing\" — InPolitics Institute" },
      { property: "og:description", content: "Bootcamp d'immersion de 5 jours à Gigean pour les talents de la diaspora." },
      { property: "og:url", content: "https://inpoliticsinstitute.com/diaspora/programme-landing" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://inpoliticsinstitute.com/diaspora/programme-landing" }],
  }),
});
