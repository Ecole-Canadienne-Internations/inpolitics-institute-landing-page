import { createFileRoute } from "@tanstack/react-router";
import { SubPageWithBanner } from "@/components/SubPage";
import banner2 from "@/assets/banner2.png";
import { useContactModal } from "@/components/ContactModal";

function ServicesEntreprises() {
  const { open } = useContactModal();
  return (
    <SubPageWithBanner
      eyebrow="Lobbying & Réseau — Entreprises"
      title="Services aux Entreprises"
      intro="Position papers, veille parlementaire, accès aux marchés publics, accompagnement réglementaire. Notre cabinet d'affaires publiques."
      bannerImage={banner2}
    />
  );
}

export const Route = createFileRoute("/lobbying-reseau/services-entreprises")({
  component: ServicesEntreprises,
  head: () => ({
    meta: [
      { title: "Services aux Entreprises — InPolitics Institute" },
      { name: "description", content: "Position papers, veille parlementaire, accès aux marchés publics." },
      { property: "og:title", content: "Services aux Entreprises — InPolitics Institute" },
      { property: "og:description", content: "Position papers, veille parlementaire, accès aux marchés publics." },
      { property: "og:url", content: "https://inpoliticsinstitute.com/lobbying-reseau/services-entreprises" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://inpoliticsinstitute.com/lobbying-reseau/services-entreprises" }],
  }),
});
