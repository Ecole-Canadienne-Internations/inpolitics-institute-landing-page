import { createFileRoute } from "@tanstack/react-router";
import { SubPageWithBanner } from "@/components/SubPage";
import { useContactModal } from "@/components/ContactModal";
import { Mail } from "lucide-react";
import banner from "@/assets/diplomatic-handshake-image.png";

const EN_CONTENT = {
  eyebrow: "School of Politics",
  title: "Vision & Mission",
  intro: "Why School of Politics? Discover the vision and mission of InPolitics Institute’s School of Politics.",
  sections: [
    {
      h: "1. Surround yourself with the elite",
      p: [
        "Unlock the secrets of top political strategists. Our consultants and coaches — true architects of power — share their real-world experience to turn you into a player who matters.",
      ],
    },
    {
      h: "2. Learn by doing, not by theorizing",
      p: [
        "Forget lectures. Here, you build campaigns, rally crowds, and manage crises. From election strategy to public charisma, master the playbook that wins today.",
      ],
    },
    {
      h: "3. Join the network that moves the needle",
      p: [
        "Step into the circle of tomorrow's decision-makers. Connect, collaborate, build alliances. The network you build today becomes your greatest power tomorrow.",
      ],
    },
    {
      h: "4. Become the transformation you want to see",
      p: [
        "School of Politics is more than a program. It's your turning point. Walk out with the expertise, presence, and vision of a leader ready to make a real impact on society.",
      ],
    },
  ],
};

const FR_CONTENT = {
  eyebrow: "School of Politics",
  title: "Vision & Mission",
  intro: "Why School of Politics? Discover the vision and mission of InPolitics Institute’s School of Politics.",
  sections: [
    {
      h: "1. Entourez-vous de l'élite",
      p: [
        "Accédez aux secrets des plus grands stratèges politiques. Nos consultants et coachs, véritables architectes du pouvoir, partagent avec vous leur expérience terrain pour faire de vous un acteur qui compte.",
      ],
    },
    {
      h: "2. Apprenez en faisant, pas en théorie",
      p: [
        "Oubliez les cours magistraux. Ici, vous créez des campagnes, vous haranguez des foules, vous gérez des crises. De la stratégie électorale au charisme en public, maîtrisez les codes qui font gagner aujourd'hui.",
      ],
    },
    {
      h: "3. Intégrez le réseau qui fait bouger les lignes",
      p: [
        "Rejoignez le cercle des futurs décideurs. Échangez, collaborez, créez des alliances. Demain, votre réseau d'aujourd'hui sera votre plus grande force.",
      ],
    },
    {
      h: "4. Devenez la transformation que vous voulez voir",
      p: [
        "School of Politics, c'est bien plus qu'une formation. C'est le déclic. Ressortez avec l'expertise, la prestance et la vision d'un leader prêt à impacter réellement la société.",
      ],
    },
  ],
};

export const Route = createFileRoute("/schools-of-politics/vision-mission")({
  component: VisionMission,
  head: () => ({
    meta: [
      { title: "Vision & Mission — School of Politics — InPolitics Institute" },
      { name: "description", content: "Why School of Politics? Discover the vision and mission of InPolitics Institute’s School of Politics." },
      { property: "og:title", content: "Vision & Mission — School of Politics — InPolitics Institute" },
      { property: "og:description", content: "Discover the vision and mission of the School of Politics." },
      { property: "og:url", content: "https://inpoliticsinstitute.com/schools-of-politics/vision-mission" },
    ],
    links: [{ rel: "canonical", href: "https://inpoliticsinstitute.com/schools-of-politics/vision-mission" }],
  }),
});

function VisionMission() {
  const { open } = useContactModal();
  const [lang, setLang] = useState<"en" | "fr">("en");
  const content = lang === "en" ? enContent : frContent;

  return (
    <SubPageWithBanner
      eyebrow="School of Politics"
      title="Vision & Mission"
      intro="Why School of Politics? Discover the vision and mission of InPolitics Institute’s School of Politics."
      bannerImage={banner}
    />
  );
}
