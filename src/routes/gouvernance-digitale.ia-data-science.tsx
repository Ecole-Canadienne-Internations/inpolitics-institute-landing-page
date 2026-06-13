import { createFileRoute } from "@tanstack/react-router";
import { RichSubPage } from "@/lib/subpage-content";

export const Route = createFileRoute("/gouvernance-digitale/ia-data-science")({
  component: () => <RichSubPage k="gouvernance-digitale/ia-data-science" />,
  head: () => ({
    meta: [
      { title: "IA & Data Science Publique — InPolitics Institute" },
      { name: "description", content: "Algorithmes prédictifs au service du bien commun et gouvernance algorithmique éthique." },
      { property: "og:title", content: "IA & Data Science Publique — InPolitics Institute" },
      { property: "og:description", content: "Algorithmes prédictifs au service du bien commun et gouvernance algorithmique éthique." },
      { property: "og:url", content: "https://inpoliticsinstitute.com/gouvernance-digitale/ia-data-science" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://inpoliticsinstitute.com/gouvernance-digitale/ia-data-science" }],
  }),
});
