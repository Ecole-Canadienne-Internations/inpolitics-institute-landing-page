import { createFileRoute } from "@tanstack/react-router";
import { RichSubPageWithBanner } from "@/lib/subpage-content";
import banner from "@/assets/banner2.png";

export const Route = createFileRoute("/programmes/visites-techniques")({
  component: () => <RichSubPageWithBanner k="programmes/visites-techniques" bannerImage={banner} />,
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
