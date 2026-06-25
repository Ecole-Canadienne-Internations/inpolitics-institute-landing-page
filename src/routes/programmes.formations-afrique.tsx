import { createFileRoute } from "@tanstack/react-router";
import { RichSubPageWithBanner } from "@/lib/subpage-content";
import banner from "@/assets/banner2.png";

export const Route = createFileRoute("/programmes/formations-afrique")({
  component: () => <RichSubPageWithBanner k="programmes/formations-afrique" bannerImage={banner} />,
  head: () => ({
    meta: [
      { title: "Formations Continues — Pôle Afrique — InPolitics Institute" },
      { name: "description", content: "Sessions de mise à niveau pour cadres et décideurs publics du continent africain." },
      { property: "og:title", content: "Formations Continues — Pôle Afrique — InPolitics Institute" },
      { property: "og:description", content: "Sessions de mise à niveau pour cadres et décideurs publics du continent africain." },
      { property: "og:url", content: "https://inpoliticsinstitute.com/programmes/formations-afrique" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://inpoliticsinstitute.com/programmes/formations-afrique" }],
  }),
});
