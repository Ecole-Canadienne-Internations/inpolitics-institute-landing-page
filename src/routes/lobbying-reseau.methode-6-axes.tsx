import { createFileRoute } from "@tanstack/react-router";
import { RichSubPageWithBanner } from "@/lib/subpage-content";
import banner from "@/assets/banner4.png";

export const Route = createFileRoute("/lobbying-reseau/methode-6-axes")({
  component: () => <RichSubPageWithBanner k="lobbying-reseau/methode-6-axes" bannerImage={banner} />,
  head: () => ({
    meta: [
      { title: "Notre Méthode en 6 Axes — InPolitics Institute" },
      { name: "description", content: "InPolitics Influence : trois phases, six axes opérationnels pour les affaires publiques." },
      { property: "og:title", content: "Notre Méthode en 6 Axes — InPolitics Institute" },
      { property: "og:description", content: "InPolitics Influence : trois phases, six axes opérationnels pour les affaires publiques." },
      { property: "og:url", content: "https://inpoliticsinstitute.com/lobbying-reseau/methode-6-axes" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://inpoliticsinstitute.com/lobbying-reseau/methode-6-axes" }],
  }),
});


