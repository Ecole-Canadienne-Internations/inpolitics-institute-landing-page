import { createFileRoute } from "@tanstack/react-router";
import { RichSubPageWithBanner } from "@/lib/subpage-content";
import banner from "@/assets/banner1.png";

export const Route = createFileRoute("/institut/label-haute-integrite")({
  component: () => <RichSubPageWithBanner k="institut/label-haute-integrite" bannerImage={banner} />,
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
