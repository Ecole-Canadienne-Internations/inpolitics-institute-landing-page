import { createFileRoute } from "@tanstack/react-router";
import { SubPageWithBanner } from "@/components/SubPage";
import banner1 from "@/assets/banner1.png";
import { useContactModal } from "@/components/ContactModal";

export const Route = createFileRoute("/institut/campus")({
  component: InstitutCampus,
  head: () => ({
    meta: [
      { title: "Nos Campus — InPolitics Institute" },
      { name: "description", content: "Campus Europe à Gigean (Montpellier Métropole) et perspectives d'extension en Afrique." },
      { property: "og:title", content: "Nos Campus — InPolitics Institute" },
      { property: "og:description", content: "Campus Europe à Gigean (Montpellier Métropole) et perspectives d'extension en Afrique." },
      { property: "og:url", content: "https://inpoliticsinstitute.com/institut/campus" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://inpoliticsinstitute.com/institut/campus" }],
  }),
});

function InstitutCampus() {
  const { open } = useContactModal();
  return (
    <SubPageWithBanner
      eyebrow="L'Institut — Campus"
      title="Nos Campus"
      intro="Un Campus Europe à Gigean (Montpellier Métropole) et des perspectives d'extension en Afrique. Une seule exigence : former une élite publique et privée capable de transformer ses territoires."
      bannerImage={banner1}
    />
  );
}
