import { createFileRoute } from "@tanstack/react-router";
import { RichSubPageWithBanner } from "@/lib/subpage-content";
import banner from "@/assets/banner2.png";

export const Route = createFileRoute("/programmes/plaidoyer-influence")({
  component: () => <RichSubPageWithBanner k="programmes/plaidoyer-influence" bannerImage={banner} />,
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
