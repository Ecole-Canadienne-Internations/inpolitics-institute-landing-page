import { createFileRoute } from "@tanstack/react-router";
import { SubPageWithBanner } from "@/components/SubPage";
import banner2 from "@/assets/banner2.png";
import { useContactModal } from "@/components/ContactModal";

function LabPublications() {
  const { open } = useContactModal();
  return (
    <SubPageWithBanner
      eyebrow="Le Lab — Publications"
      title="Publications & Recherche"
      intro="Les analyses, rapports et notes de l'Observatoire InPolitics : décryptage rigoureux des dynamiques politiques, territoriales et numériques."
      bannerImage={banner2}
    />
  );
}

export const Route = createFileRoute("/lab/publications")({
  component: LabPublications,
  head: () => ({
    meta: [
      { title: "Publications & Recherche — InPolitics Institute" },
      { name: "description", content: "Notes, rapports et baromètres de l'Observatoire InPolitics." },
      { property: "og:title", content: "Publications & Recherche — InPolitics Institute" },
      { property: "og:description", content: "Notes, rapports et baromètres de l'Observatoire InPolitics." },
      { property: "og:url", content: "https://inpoliticsinstitute.com/lab/publications" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://inpoliticsinstitute.com/lab/publications" }],
  }),
});
