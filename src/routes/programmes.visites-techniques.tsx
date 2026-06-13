import { createFileRoute } from "@tanstack/react-router";
import { RichSubPage } from "@/lib/subpage-content";

export const Route = createFileRoute("/programmes/visites-techniques")({
  component: () => <RichSubPage k="programmes/visites-techniques" />,
  head: () => ({
    meta: [
      { title: "Visites Techniques — InPolitics Institute" },
      { name: "description", content: "Smart Cities, eau, déchets, mobilités, énergie : immersions opérationnelles pour décideurs." },
      { property: "og:title", content: "Visites Techniques — InPolitics Institute" },
      { property: "og:description", content: "Smart Cities, eau, déchets, mobilités, énergie : immersions opérationnelles pour décideurs." },
      { property: "og:url", content: "https://inpoliticsinstitute.com/programmes/visites-techniques" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://inpoliticsinstitute.com/programmes/visites-techniques" }],
  }),
});
