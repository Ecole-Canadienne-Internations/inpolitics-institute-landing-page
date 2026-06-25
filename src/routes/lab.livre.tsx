import { createFileRoute } from "@tanstack/react-router";
import { SubPageWithBanner } from "@/components/SubPage";
import banner3 from "@/assets/banner3.png";
import { useContactModal } from "@/components/ContactModal";
import { Mail } from "lucide-react";

const EN_CONTENT = {
  eyebrow: "Le Lab — Livre",
  title: 'Le Livre — "Communiquer en Politique"',
  intro:
    "Un ouvrage de référence sur la communication politique contemporaine, signé par la Direction de l'Institut.",
  sections: [
    {
      h: "Présentation",
      p: [
        '""Communiquer en Politique"" propose une grammaire opérationnelle de la communication des élus, des institutions et des candidats à l\'heure des réseaux sociaux, de l\'IA générative et de la défiance démocratique.',
        "L'ouvrage articule théorie communicationnelle, retours d\'expérience récents et boîte à outils pratique. Il s'adresse aux élus, à leurs équipes et aux étudiants des sciences politiques.",
      ],
    },
    {
      h: "Sommaire indicatif",
      p: [],
      list: [
        "Partie I — Cadre conceptuel et histoire de la communication politique.",
        "Partie II — Récit, image, plateformes : la nouvelle économie de l\'attention.",
        "Partie III — Stratégie de campagne et conduite de mandat.",
        "Partie IV — Gestion de crise et résilience institutionnelle.",
        "Annexes — Modèles, check-lists et études de cas.",
      ],
    },
    {
      h: "Commande",
      p: [
        "L\'ouvrage est disponible en librairie et par commande directe auprès de l\'Institut. Les commandes institutionnelles bénéficient d\'une tarification dédiée.",
      ],
    },
  ],
};

const FR_CONTENT = {
  eyebrow: "Le Lab — Livre",
  title: 'Le Livre — "Communiquer en Politique"',
  intro:
    "Un ouvrage de référence sur la communication politique contemporaine, signé par la Direction de l'Institut.",
  sections: [
    {
      h: "Présentation",
      p: [
        '""Communiquer en Politique"" propose une grammaire opérationnelle de la communication des élus, des institutions et des candidats à l\'heure des réseaux sociaux, de l\'IA générative et de la défiance démocratique.',
        "L'ouvrage articule théorie communicationnelle, retours d\'expérience récents et boîte à outils pratique. Il s'adresse aux élus, à leurs équipes et aux étudiants des sciences politiques.",
      ],
    },
    {
      h: "Sommaire indicatif",
      p: [],
      list: [
        "Partie I — Cadre conceptuel et histoire de la communication politique.",
        "Partie II — Récit, image, plateformes : la nouvelle économie de l\'attention.",
        "Partie III — Stratégie de campagne et conduite de mandat.",
        "Partie IV — Gestion de crise et résilience institutionnelle.",
        "Annexes — Modèles, check-lists et études de cas.",
      ],
    },
    {
      h: "Commande",
      p: [
        "L\'ouvrage est disponible en librairie et par commande directe auprès de l\'Institut. Les commandes institutionnelles bénéficient d\'une tarification dédiée.",
      ],
    },
  ],
};

export const Route = createFileRoute("/lab/livre")({
  component: LeLivre,
  head: () => ({
    meta: [
      { title: "Le Livre \"Communiquer en Politique\" — InPolitics Institute" },
      { name: "description", content: "Ouvrage de référence sur la communication politique contemporaine." },
      { property: "og:title", content: "Le Livre \"Communiquer en Politique\" — InPolitics Institute" },
      { property: "og:description", content: "Ouvrage de référence sur la communication politique contemporaine." },
      { property: "og:url", content: "https://inpoliticsinstitute.com/lab/livre" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://inpoliticsinstitute.com/lab/livre" }],
  }),
});

function LeLivre() {
  const { open } = useContactModal();
  return (
    <SubPageWithBanner
      eyebrow="Le Lab — Livre"
      title='Le Livre — "Communiquer en Politique"'
      intro="Un ouvrage de référence sur la communication politique contemporaine, signé par la Direction de l'Institut."
      bannerImage={banner3}
    />
  );
}
