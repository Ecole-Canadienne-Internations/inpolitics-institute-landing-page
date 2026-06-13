import { createFileRoute } from "@tanstack/react-router";
import { RichSubPage } from "@/lib/subpage-content";

export const Route = createFileRoute("/lab/livre")({
  component: () => <RichSubPage k="lab/livre" />,
  head: () => ({
    meta: [
      { title: "Le Livre \"Communiquer en Politique\" — InPolitics Institute" },
      { name: "description", content: "Ouvrage de référence sur la communication politique contemporaine." },
      { property: "og:title", content: "Le Livre \"Communiquer en Politique\" — InPolitics Institute" },
      { property: "og:description", content: "Ouvrage de référence sur la communication politique contemporaine." },
      { property: "og:url", content: "https://inpoliticsinstitute.com/lab/livre" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://inpoliticsinstitute.com/lab/livre" }],
  }),
});
