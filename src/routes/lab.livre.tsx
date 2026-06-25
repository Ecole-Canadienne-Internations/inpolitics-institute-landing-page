import { createFileRoute } from "@tanstack/react-router";
import { RichSubPageWithBanner } from "@/lib/subpage-content";
import banner from "@/assets/banner3.png";

export const Route = createFileRoute("/lab/livre")({
  component: () => <RichSubPageWithBanner k="lab/livre" bannerImage={banner} />,
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
