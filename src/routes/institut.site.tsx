import { createFileRoute } from "@tanstack/react-router";
import { RichSubPageWithBanner } from "@/lib/subpage-content";
import banner from "@/assets/banner1.png";

export const Route = createFileRoute("/institut/site")({
  component: () => <RichSubPageWithBanner k="institut/site" bannerImage={banner} />,
  head: () => ({
    meta: [
      { title: "Nos sites — InPolitics Institute" },
      { name: "description", content: "Site Europe à Gigean (Montpellier Métropole) et perspectives d'extension en Afrique." },
      { property: "og:title", content: "Nos sites — InPolitics Institute" },
      { property: "og:description", content: "Site Europe à Gigean (Montpellier Métropole) et perspectives d'extension en Afrique." },
      { property: "og:url", content: "https://inpoliticsinstitute.com/institut/site" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://inpoliticsinstitute.com/institut/site" }],
  }),
});


