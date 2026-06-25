import { createFileRoute } from "@tanstack/react-router";
import { RichSubPageWithBanner } from "@/lib/subpage-content";
import banner from "@/assets/banner3.png";

export const Route = createFileRoute("/lobbying-reseau/club-exec")({
  component: () => <RichSubPageWithBanner k="lobbying-reseau/club-exec" bannerImage={banner} />,
  head: () => ({
    meta: [
      { title: "Club InPolitics Exec — InPolitics Institute" },
      { name: "description", content: "Cercle de réflexion privé réservé aux dirigeants, élus et hauts fonctionnaires." },
      { property: "og:title", content: "Club InPolitics Exec — InPolitics Institute" },
      { property: "og:description", content: "Cercle de réflexion privé réservé aux dirigeants, élus et hauts fonctionnaires." },
      { property: "og:url", content: "https://inpoliticsinstitute.com/lobbying-reseau/club-exec" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://inpoliticsinstitute.com/lobbying-reseau/club-exec" }],
  }),
});
