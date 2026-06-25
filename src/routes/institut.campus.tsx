import { createFileRoute } from "@tanstack/react-router";
import { RichSubPageWithBanner } from "@/lib/subpage-content";
import banner from "@/assets/banner1.png";

export const Route = createFileRoute("/institut/campus")({
  component: () => <RichSubPageWithBanner k="institut/campus" bannerImage={banner} />,
  head: () => ({
    meta: [
      { title: "Nos Campus — InPolitics Institute" },
      { name: "description", content: "Campus Europe à Gigean (Montpellier Métropole) et perspectives d'extension en Afrique." },
      { property: "og:title", content: "Nos Campus — InPolitics Institute" },
      { property: "og:description", content: "Campus Europe à Gigean (Montpellier Métropole) et perspectives d'extension en Afrique." },
      { property: "og:url", content: "https://inpoliticsinstitute.com/institut/campus" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://inpoliticsinstitute.com/institut/campus" }],
  }),
});


