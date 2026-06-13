import { createFileRoute } from "@tanstack/react-router";
import { RichSubPage } from "@/lib/subpage-content";

export const Route = createFileRoute("/institut/lobbying-integrite")({
  component: () => <RichSubPage k="institut/lobbying-integrite" />,
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
