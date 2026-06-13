import { createFileRoute } from "@tanstack/react-router";
import { RichSubPage } from "@/lib/subpage-content";

export const Route = createFileRoute("/programmes/plaidoyer-influence")({
  component: () => <RichSubPage k="programmes/plaidoyer-influence" />,
  head: () => ({
    meta: [
      { title: "Plaidoyer & Stratégies d'Influence — InPolitics Institute" },
      { name: "description", content: "Programme phare en 12 semaines : ingénierie d'influence, plaidoyer et affaires publiques." },
      { property: "og:title", content: "Plaidoyer & Stratégies d'Influence — InPolitics Institute" },
      { property: "og:description", content: "Programme phare en 12 semaines : ingénierie d'influence, plaidoyer et affaires publiques." },
      { property: "og:url", content: "https://inpoliticsinstitute.com/programmes/plaidoyer-influence" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://inpoliticsinstitute.com/programmes/plaidoyer-influence" }],
  }),
});
