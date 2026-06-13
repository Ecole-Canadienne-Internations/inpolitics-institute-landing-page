import { createFileRoute } from "@tanstack/react-router";
import { RichSubPage } from "@/lib/subpage-content";

export const Route = createFileRoute("/gouvernance-digitale/solutions-saas")({
  component: () => <RichSubPage k="gouvernance-digitale/solutions-saas" />,
  head: () => ({
    meta: [
      { title: "Solutions SaaS Municipales — InPolitics Institute" },
      { name: "description", content: "Sécurisation numérique des recettes locales et modernisation de la relation citoyenne." },
      { property: "og:title", content: "Solutions SaaS Municipales — InPolitics Institute" },
      { property: "og:description", content: "Sécurisation numérique des recettes locales et modernisation de la relation citoyenne." },
      { property: "og:url", content: "https://inpoliticsinstitute.com/gouvernance-digitale/solutions-saas" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://inpoliticsinstitute.com/gouvernance-digitale/solutions-saas" }],
  }),
});
