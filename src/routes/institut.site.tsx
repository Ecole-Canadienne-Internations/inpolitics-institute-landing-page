import { createFileRoute } from "@tanstack/react-router";
import { RichSubPageWithBanner } from "@/lib/subpage-content";
import banner from "@/assets/banner1.png";

export const Route = createFileRoute("/institut/site")({
  component: () => <RichSubPageWithBanner k="institut/site" bannerImage={banner} />,
  head: () => ({
    meta: [
      { title: "Nos site — InPolitics Institute" },
      { name: "description", content: "site Europe à Gigean (Montpellier Métropole) et perspectives d'extension en Afrique." },
      { property: "og:title", content: "Nos site — InPolitics Institute" },
      { property: "og:description", content: "site Europe à Gigean (Montpellier Métropole) et perspectives d'extension en Afrique." },
      { property: "og:url", content: "https://inpoliticsinstitute.com/institut/site" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://inpoliticsinstitute.com/institut/site" }],
  }),
});


