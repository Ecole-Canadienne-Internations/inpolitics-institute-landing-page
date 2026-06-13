import { createFileRoute } from "@tanstack/react-router";
import { RichSubPage } from "@/lib/subpage-content";

export const Route = createFileRoute("/institut/label-haute-integrite")({
  component: () => <RichSubPage k="institut/label-haute-integrite" />,
  head: () => ({
    meta: [
      { title: "Label \"Commune de Haute Intégrité\" — InPolitics Institute" },
      { name: "description", content: "Standard de transparence financière et de probité administrative pour les collectivités." },
      { property: "og:title", content: "Label \"Commune de Haute Intégrité\" — InPolitics Institute" },
      { property: "og:description", content: "Standard de transparence financière et de probité administrative pour les collectivités." },
      { property: "og:url", content: "https://inpoliticsinstitute.com/institut/label-haute-integrite" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://inpoliticsinstitute.com/institut/label-haute-integrite" }],
  }),
});
