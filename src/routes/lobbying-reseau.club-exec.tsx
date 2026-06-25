import { createFileRoute } from "@tanstack/react-router";
import { SubPageWithBanner } from "@/components/SubPage";
import banner3 from "@/assets/banner3.png";
import { useContactModal } from "@/components/ContactModal";
import { Mail } from "lucide-react";

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
