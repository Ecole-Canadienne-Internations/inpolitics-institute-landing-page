import { createFileRoute } from "@tanstack/react-router";
import { RichSubPageWithBanner } from "@/lib/subpage-content";
import banner from "@/assets/banner2.png";

export const Route = createFileRoute("/lobbying-reseau/services-entreprises")({
  component: () => <RichSubPageWithBanner k="lobbying-reseau/services-entreprises" bannerImage={banner} />,
  head: () => ({
    meta: [
      { title: "Services aux Entreprises — InPolitics Institute" },
      { name: "description", content: "Position papers, veille parlementaire, accès aux marchés publics." },
      { property: "og:title", content: "Services aux Entreprises — InPolitics Institute" },
      { property: "og:description", content: "Position papers, veille parlementaire, accès aux marchés publics." },
      { property: "og:url", content: "https://inpoliticsinstitute.com/lobbying-reseau/services-entreprises" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://inpoliticsinstitute.com/lobbying-reseau/services-entreprises" }],
  }),
});
