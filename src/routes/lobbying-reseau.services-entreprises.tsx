import { createFileRoute } from "@tanstack/react-router";
import { SubPageWithBanner } from "@/components/SubPage";
import banner2 from "@/assets/banner2.png";
import { useContactModal } from "@/components/ContactModal";
import { Mail } from "lucide-react";

const EN_CONTENT = {
  eyebrow: "Lobbying & Réseau — Entreprises",
  title: "Services aux Entreprises",
  intro:
    "Position papers, veille parlementaire, accès aux marchés publics, accompagnement réglementaire. Notre cabinet d'affaires publiques.",
  sections: [
    {
      h: "Position papers et plaidoyer sectoriel",
      p: [
        "Rédaction et déploiement de notes de position pour comptes d'entreprises, fédérations professionnelles ou consortiums. Chaque livrable s'appuie sur une analyse réglementaire rigoureuse et un argumentaire factuel.",
      ],
    },
    {
      h: "Veille et accès aux marchés",
      p: [
        "Veille parlementaire et réglementaire UE/France, accompagnement des entreprises sur les appels d'offres publics, structuration de réponses consortium, accompagnement de l'innovation réglementaire (sandbox).",
      ],
      list: [
        "Veille hebdomadaire personnalisée.",
        "Détection précoce des évolutions normatives.",
        "Accompagnement aux consultations publiques.",
        "Mise en relation institutionnelle.",
      ],
    },
    {
      h: "Engagement déontologique",
      p: [
        "Toutes nos missions sont inscrites au registre de transparence applicable et conduites sous notre charte éthique. Refus de tout mandat contraire à l'intérêt général ou aux libertés publiques.",
      ],
    },
  ],
};

const FR_CONTENT = {
  eyebrow: "Lobbying & Réseau — Entreprises",
  title: "Services aux Entreprises",
  intro:
    "Position papers, veille parlementaire, accès aux marchés publics, accompagnement réglementaire. Notre cabinet d'affaires publiques.",
  sections: [
    {
      h: "Position papers et plaidoyer sectoriel",
      p: [
        "Rédaction et déploiement de notes de position pour comptes d'entreprises, fédérations professionnelles ou consortiums. Chaque livrable s'appuie sur une analyse réglementaire rigoureuse et un argumentaire factuel.",
      ],
    },
    {
      h: "Veille et accès aux marchés",
      p: [
        "Veille parlementaire et réglementaire UE/France, accompagnement des entreprises sur les appels d'offres publics, structuration de réponses consortium, accompagnement de l'innovation réglementaire (sandbox).",
      ],
      list: [
        "Veille hebdomadaire personnalisée.",
        "Détection précoce des évolutions normatives.",
        "Accompagnement aux consultations publiques.",
        "Mise en relation institutionnelle.",
      ],
    },
    {
      h: "Engagement déontologique",
      p: [
        "Toutes nos missions sont inscrites au registre de transparence applicable et conduites sous notre charte éthique. Refus de tout mandat contraire à l'intérêt général ou aux libertés publiques.",
      ],
    },
  ],
};

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
