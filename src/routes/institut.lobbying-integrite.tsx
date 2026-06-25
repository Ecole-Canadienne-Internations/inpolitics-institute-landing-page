import { createFileRoute } from "@tanstack/react-router";
import { RichSubPageWithBanner } from "@/lib/subpage-content";
import banner from "@/assets/banner1.png";

export const Route = createFileRoute("/institut/lobbying-integrite")({
  component: () => <RichSubPageWithBanner k="institut/lobbying-integrite" bannerImage={banner} />,
  head: () => ({
    meta: [
      { title: "Lobbying, Plaidoyer & Intégrité — InPolitics Institute" },
      { name: "description", content: "Charte éthique et conformité aux standards OCDE et UE en matière d'influence publique." },
      { property: "og:title", content: "Lobbying, Plaidoyer & Intégrité — InPolitics Institute" },
      { property: "og:description", content: "Charte éthique et conformité aux standards OCDE et UE en matière d'influence publique." },
      { property: "og:url", content: "https://inpoliticsinstitute.com/institut/lobbying-integrite" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://inpoliticsinstitute.com/institut/lobbying-integrite" }],
  }),
});
