import { createFileRoute } from "@tanstack/react-router";
import { SubPageWithBanner } from "@/components/SubPage";
import banner2 from "@/assets/banner2.png";
import { useContactModal } from "@/components/ContactModal";
import { Mail } from "lucide-react";

const EN_CONTENT = {
  eyebrow: "Le Lab — Publications",
  title: "Publications & Recherche",
  intro:
    "Les analyses, rapports et notes de l'Observatoire InPolitics : décryptage rigoureux des dynamiques politiques, territoriales et numériques.",
  sections: [
    {
      h: "Trois formats éditoriaux",
      p: [
        "L'Observatoire publie selon trois formats complémentaires : notes courtes (8 pages), rapports thématiques (40 à 80 pages) et baromètres annuels (données quantitatives).",
      ],
      list: [
        "Notes courtes — éclairages rapides sur l'actualité institutionnelle.",
        "Rapports thématiques — analyses approfondies, recommandations chiffrées.",
        "Baromètres annuels — séries longues d'indicateurs territoriaux.",
      ],
    },
    {
      h: "Méthodologie",
      p: [
        "Toutes nos publications obéissent à une méthodologie publique : sources documentées, données vérifiables, revue interne avant publication, distinction nette entre constat et préconisation.",
      ],
    },
    {
      h: "Accès",
      p: [
        "Les notes courtes sont publiées en accès libre. Les rapports thématiques sont disponibles à l'unité ou par abonnement annuel (Grand Public ou Corporate).",
      ],
    },
  ],
};

const FR_CONTENT = {
  eyebrow: "Le Lab — Publications",
  title: "Publications & Recherche",
  intro:
    "Les analyses, rapports et notes de l'Observatoire InPolitics : décryptage rigoureux des dynamiques politiques, territoriales et numériques.",
  sections: [
    {
      h: "Trois formats éditoriaux",
      p: [
        "L'Observatoire publie selon trois formats complémentaires : notes courtes (8 pages), rapports thématiques (40 à 80 pages) et baromètres annuels (données quantitatives).",
      ],
      list: [
        "Notes courtes — éclairages rapides sur l'actualité institutionnelle.",
        "Rapports thématiques — analyses approfondies, recommandations chiffrées.",
        "Baromètres annuels — séries longues d'indicateurs territoriaux.",
      ],
    },
    {
      h: "Méthodologie",
      p: [
        "Toutes nos publications obéissent à une méthodologie publique : sources documentées, données vérifiables, revue interne avant publication, distinction nette entre constat et préconisation.",
      ],
    },
    {
      h: "Accès",
      p: [
        "Les notes courtes sont publiées en accès libre. Les rapports thématiques sont disponibles à l'unité ou par abonnement annuel (Grand Public ou Corporate).",
      ],
    },
  ],
};

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
