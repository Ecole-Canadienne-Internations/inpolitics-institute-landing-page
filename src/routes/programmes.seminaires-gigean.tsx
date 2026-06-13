import { createFileRoute } from "@tanstack/react-router";
import { RichSubPage } from "@/lib/subpage-content";

export const Route = createFileRoute("/programmes/seminaires-gigean")({
  component: () => <RichSubPage k="programmes/seminaires-gigean" />,
  head: () => ({
    meta: [
      { title: "Séminaires d'Immersion à Gigean — InPolitics Institute" },
      { name: "description", content: "Formations courtes et intensives de 3 à 5 jours pour l'élite publique et privée au Campus Europe." },
      { property: "og:title", content: "Séminaires d'Immersion à Gigean — InPolitics Institute" },
      { property: "og:description", content: "Formations courtes et intensives de 3 à 5 jours pour l'élite publique et privée au Campus Europe." },
      { property: "og:url", content: "https://inpoliticsinstitute.com/programmes/seminaires-gigean" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://inpoliticsinstitute.com/programmes/seminaires-gigean" }],
  }),
});
