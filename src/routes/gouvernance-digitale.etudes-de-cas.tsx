import { createFileRoute } from "@tanstack/react-router";
import { RichSubPageWithBanner } from "@/lib/subpage-content";
import banner from "@/assets/banner4.png";

export const Route = createFileRoute("/gouvernance-digitale/etudes-de-cas")({
  component: () => <RichSubPageWithBanner k="gouvernance-digitale/etudes-de-cas" bannerImage={banner} />,
  head: () => ({
    meta: [
      { title: "Études de Cas — InPolitics Institute" },
      { name: "description", content: "Retours d'expérience de municipalités partenaires en gouvernance digitale." },
      { property: "og:title", content: "Études de Cas — InPolitics Institute" },
      { property: "og:description", content: "Retours d'expérience de municipalités partenaires en gouvernance digitale." },
      { property: "og:url", content: "https://inpoliticsinstitute.com/gouvernance-digitale/etudes-de-cas" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://inpoliticsinstitute.com/gouvernance-digitale/etudes-de-cas" }],
  }),
});
