import { createFileRoute } from "@tanstack/react-router";
import { SubPageWithBanner } from "@/components/SubPage";
import banner3 from "@/assets/banner3.png";
import { useContactModal } from "@/components/ContactModal";

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
