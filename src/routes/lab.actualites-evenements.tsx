import { createFileRoute } from "@tanstack/react-router";
import { RichSubPageWithBanner } from "@/lib/subpage-content";
import banner from "@/assets/banner3.png";

export const Route = createFileRoute("/lab/actualites-evenements")({
  component: () => <RichSubPageWithBanner k="lab/actualites-evenements" bannerImage={banner} />,
  head: () => ({
    meta: [
      { title: "Actualités & Événements — InPolitics Institute" },
      { name: "description", content: "Séminaires, colloques et conférences publiques de l'Institut." },
      { property: "og:title", content: "Actualités & Événements — InPolitics Institute" },
      { property: "og:description", content: "Séminaires, colloques et conférences publiques de l'Institut." },
      { property: "og:url", content: "https://inpoliticsinstitute.com/lab/actualites-evenements" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://inpoliticsinstitute.com/lab/actualites-evenements" }],
  }),
});
