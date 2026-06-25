import { createFileRoute } from "@tanstack/react-router";
import { SubPageWithBanner } from "@/components/SubPage";
import banner4 from "@/assets/banner4.png";
import { useContactModal } from "@/components/ContactModal";
import { Mail } from "lucide-react";

export const Route = createFileRoute("/lobbying-reseau/methode-6-axes")({
  component: MethodeSixAxes,
  head: () => ({
    meta: [
      { title: "Notre Méthode en 6 Axes — InPolitics Institute" },
      { name: "description", content: "InPolitics Influence : trois phases, six axes opérationnels pour les affaires publiques." },
      { property: "og:title", content: "Notre Méthode en 6 Axes — InPolitics Institute" },
      { property: "og:description", content: "InPolitics Influence : trois phases, six axes opérationnels pour les affaires publiques." },
      { property: "og:url", content: "https://inpoliticsinstitute.com/lobbying-reseau/methode-6-axes" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://inpoliticsinstitute.com/lobbying-reseau/methode-6-axes" }],
  }),
});

function MethodeSixAxes() {
  const { open } = useContactModal();
  return (
    <SubPageWithBanner
      eyebrow="Lobbying & Réseau — Méthode"
      title="Notre Méthode en 6 Axes"
      intro="InPolitics Influence : une méthode propriétaire structurée en trois phases et six axes opérationnels. La signature de l'Institut en matière d'affaires publiques."
      bannerImage={banner4}
    />
  );
}
