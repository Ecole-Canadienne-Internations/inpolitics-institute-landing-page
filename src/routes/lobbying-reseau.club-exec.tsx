import { createFileRoute } from "@tanstack/react-router";
import { SubPageWithBanner } from "@/components/SubPage";
import banner3 from "@/assets/banner3.png";
import { useContactModal } from "@/components/ContactModal";
import { Mail } from "lucide-react";

const EN_CONTENT = {
  eyebrow: "Lobbying & Réseau — Club Exec",
  title: "Club InPolitics Exec",
  intro:
    "Le cercle de réflexion privé de l'Institut. Un dispositif confidentiel réservé aux dirigeants, élus, hauts fonctionnaires et décideurs économiques.",
  sections: [
    {
      h: "Une instance d'échange à huis clos",
      p: [
        "Le Club InPolitics Exec réunit chaque trimestre une quarantaine de membres autour d'un dîner-débat, d'une table ronde stratégique et d'une note de réflexion confidentielle élaborée par l'Observatoire.",
        "Les échanges se tiennent sous règle de Chatham House : libre circulation des idées, confidentialité absolue des prises de parole.",
      ],
    },
    {
      h: "Admission",
      p: [
        "L'adhésion est strictement sur cooptation. Chaque candidat est présenté par deux membres et validé par le Comité de Direction. Les profils retenus sont issus de la sphère publique, des grandes entreprises, de la diplomatie et de l'expertise.",
      ],
    },
    {
      h: "Bénéfices",
      p: [
        "Accès aux notes confidentielles de l'Observatoire, invitations aux séminaires fermés du Lab, mises en relation avec le réseau Alumni européen et africain.",
      ],
    },
  ],
};

const FR_CONTENT = {
  eyebrow: "Lobbying & Réseau — Club Exec",
  title: "Club InPolitics Exec",
  intro:
    "Le cercle de réflexion privé de l'Institut. Un dispositif confidentiel réservé aux dirigeants, élus, hauts fonctionnaires et décideurs économiques.",
  sections: [
    {
      h: "Une instance d'échange à huis clos",
      p: [
        "Le Club InPolitics Exec réunit chaque trimestre une quarantaine de membres autour d'un dîner-débat, d'une table ronde stratégique et d'une note de réflexion confidentielle élaborée par l'Observatoire.",
        "Les échanges se tiennent sous règle de Chatham House : libre circulation des idées, confidentialité absolue des prises de parole.",
      ],
    },
    {
      h: "Admission",
      p: [
        "L'adhésion est strictement sur cooptation. Chaque candidat est présenté par deux membres et validé par le Comité de Direction. Les profils retenus sont issus de la sphère publique, des grandes entreprises, de la diplomatie et de l'expertise.",
      ],
    },
    {
      h: "Bénéfices",
      p: [
        "Accès aux notes confidentielles de l'Observatoire, invitations aux séminaires fermés du Lab, mises en relation avec le réseau Alumni européen et africain.",
      ],
    },
  ],
};

export const Route = createFileRoute("/lobbying-reseau/club-exec")({
  component: ClubExec,
  head: () => ({
    meta: [
      { title: "Club InPolitics Exec — InPolitics Institute" },
      { name: "description", content: "Cercle de réflexion privé réservé aux dirigeants, élus et hauts fonctionnaires." },
      { property: "og:title", content: "Club InPolitics Exec — InPolitics Institute" },
      { property: "og:description", content: "Cercle de réflexion privé réservé aux dirigeants, élus et hauts fonctionnaires." },
      { property: "og:url", content: "https://inpoliticsinstitute.com/lobbying-reseau/club-exec" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://inpoliticsinstitute.com/lobbying-reseau/club-exec" }],
  }),
});

function ClubExec() {
  const { open } = useContactModal();
  return (
    <SubPageWithBanner
      eyebrow="Lobbying & Réseau — Club Exec"
      title="Club InPolitics Exec"
      intro="Le cercle de réflexion privé de l'Institut. Un dispositif confidentiel réservé aux dirigeants, élus, hauts fonctionnaires et décideurs économiques."
      bannerImage={banner3}
    />
  );
}
