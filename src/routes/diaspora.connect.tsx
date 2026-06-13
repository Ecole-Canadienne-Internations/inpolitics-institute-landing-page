import { createFileRoute } from "@tanstack/react-router";
import { RichSubPage } from "@/lib/subpage-content";

export const Route = createFileRoute("/diaspora/connect")({
  component: () => <RichSubPage k="diaspora/connect" />,
  head: () => ({
    meta: [
      { title: "Diaspora Connect — InPolitics Institute" },
      { name: "description", content: "Mise en relation entre profils de la diaspora et besoins des territoires partenaires." },
      { property: "og:title", content: "Diaspora Connect — InPolitics Institute" },
      { property: "og:description", content: "Mise en relation entre profils de la diaspora et besoins des territoires partenaires." },
      { property: "og:url", content: "https://inpoliticsinstitute.com/diaspora/connect" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://inpoliticsinstitute.com/diaspora/connect" }],
  }),
});
