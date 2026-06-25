import { createFileRoute } from "@tanstack/react-router";
import { RichSubPageWithBanner } from "@/lib/subpage-content";
import banner from "@/assets/banner3.png";

export const Route = createFileRoute("/lab/publications")({
  component: () => <RichSubPageWithBanner k="lab/publications" bannerImage={banner} />,
  head: () => ({
    meta: [
      { title: "Publications & Recherche — InPolitics Institute" },
      { name: "description", content: "Notes, rapports et baromètres de l'Observatoire InPolitics." },
      { property: "og:title", content: "Publications & Recherche — InPolitics Institute" },
      { property: "og:description", content: "Notes, rapports et baromètres de l'Observatoire InPolitics." },
      { property: "og:url", content: "https://inpoliticsinstitute.com/lab/publications" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://inpoliticsinstitute.com/lab/publications" }],
  }),
});
