import { createFileRoute } from "@tanstack/react-router";
import { RichSubPage } from "@/lib/subpage-content";

export const Route = createFileRoute("/institut/diplomatie-territoriale")({
  component: () => <RichSubPage k="institut/diplomatie-territoriale" />,
  head: () => ({
    meta: [
      { title: "Diplomatie Territoriale — InPolitics Institute" },
      { name: "description", content: "Positionner les territoires comme acteurs à part entière de la scène internationale." },
      { property: "og:title", content: "Diplomatie Territoriale — InPolitics Institute" },
      { property: "og:description", content: "Positionner les territoires comme acteurs à part entière de la scène internationale." },
      { property: "og:url", content: "https://inpoliticsinstitute.com/institut/diplomatie-territoriale" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://inpoliticsinstitute.com/institut/diplomatie-territoriale" }],
  }),
});
