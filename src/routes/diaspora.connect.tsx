import { createFileRoute } from "@tanstack/react-router";
import { SubPageWithBanner } from "@/components/SubPage";
import banner2 from "@/assets/banner2.png";
import { useContactModal } from "@/components/ContactModal";

const EN_CONTENT = {
  eyebrow: "Espace Diaspora — Connect",
  title: "Diaspora Connect",
  intro:
    "Une plateforme de mise en relation entre profils de la diaspora et besoins identifiés sur les territoires partenaires.",
  sections: [
    {
      h: "Le principe",
      p: [
        "Diaspora Connect met en relation, de façon qualifiée et confidentielle, des profils experts résidant en Europe avec des projets identifiés sur les territoires partenaires : missions de conseil, opportunités d'investissement, mandats de coopération institutionnelle.",
      ],
    },
    {
      h: "Comment cela fonctionne",
      p: [
        "Chaque profil est validé par l'Institut sur la base de son CV et d'un entretien. Chaque besoin est qualifié par notre équipe locale. Les mises en relation sont opérées par un chargé de mission dédié, dans un cadre déontologique strict.",
      ],
      list: [
        "Inscription gratuite et confidentielle.",
        "Validation du profil par un entretien.",
        "Notifications ciblées selon expertise et disponibilité.",
        "Suivi de mission par un chargé de relation.",
      ],
    },
    {
      h: "Garde-fous",
      p: [
        "L'Institut s'interdit toute commission au succès et ne perçoit aucun honoraire d'intermédiation. Diaspora Connect est financé par les cotisations institutionnelles et les partenariats territoriaux.",
      ],
    },
  ],
};

const FR_CONTENT = {
  eyebrow: "Espace Diaspora — Connect",
  title: "Diaspora Connect",
  intro:
    "Une plateforme de mise en relation entre profils de la diaspora et besoins identifiés sur les territoires partenaires.",
  sections: [
    {
      h: "Le principe",
      p: [
        "Diaspora Connect met en relation, de façon qualifiée et confidentielle, des profils experts résidant en Europe avec des projets identifiés sur les territoires partenaires : missions de conseil, opportunités d'investissement, mandats de coopération institutionnelle.",
      ],
    },
    {
      h: "Comment cela fonctionne",
      p: [
        "Chaque profil est validé par l'Institut sur la base de son CV et d'un entretien. Chaque besoin est qualifié par notre équipe locale. Les mises en relations sont opérées par un chargé de mission dédié, dans un cadre déontologique strict.",
      ],
      list: [
        "Inscription gratuite et confidentielle.",
        "Validation du profil par un entretien.",
        "Notifications ciblées selon expertise et disponibilité.",
        "Suivi de mission par un chargé de relation.",
      ],
    },
    {
      h: "Garde-fous",
      p: [
        "L'Institut s'interdit toute commission au succès et ne perçoit aucun honoraire d'intermédiation. Diaspora Connect est financé par les cotisations institutionnelles et les partenariats territoriaux.",
      ],
    },
  ],
};

export const Route = createFileRoute("/diaspora/connect")({
  component: DiasporaConnect,
  head: () => ({
    meta: [
      { title: "Diaspora Connect — InPolitics Institute" },
      { name: "description", content: "Mise en relation entre profils de la diaspora et besoins des territoires partenaires." },
      { property: "og:title", content: "Diaspora Connect — InPolitics Institute" },
      { property: "og:description", content: "Mise en relation entre profils de la diaspora et besoins des territoires partenaires." },
      { property: "og:url", content: "https://inpoliticsinstitute.com/diaspora/connect" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://inpoliticsinstitute.com/diaspora/connect" }],
  }),
});

function DiasporaConnect() {
  const { open } = useContactModal();
  return (
    <SubPageWithBanner
      eyebrow="Espace Diaspora — Connect"
      title="Diaspora Connect"
      intro="Une plateforme de mise en relation entre profils de la diaspora et besoins identifiés sur les territoires partenaires."
      bannerImage={banner2}
    />
  );
}
