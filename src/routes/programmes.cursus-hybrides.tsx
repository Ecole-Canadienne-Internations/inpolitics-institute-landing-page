import { createFileRoute } from "@tanstack/react-router";
import { RichSubPage } from "@/lib/subpage-content";

export const Route = createFileRoute("/programmes/cursus-hybrides")({
  component: () => <RichSubPage k="programmes/cursus-hybrides" />,
  head: () => ({
    meta: [
      { title: "Cursus Hybrides & E-learning — InPolitics Institute" },
      { name: "description", content: "Plateforme e-learning 24/7 — 80 % en ligne, 20 % en présentiel à Gigean." },
      { property: "og:title", content: "Cursus Hybrides & E-learning — InPolitics Institute" },
      { property: "og:description", content: "Plateforme e-learning 24/7 — 80 % en ligne, 20 % en présentiel à Gigean." },
      { property: "og:url", content: "https://inpoliticsinstitute.com/programmes/cursus-hybrides" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://inpoliticsinstitute.com/programmes/cursus-hybrides" }],
  }),
});
