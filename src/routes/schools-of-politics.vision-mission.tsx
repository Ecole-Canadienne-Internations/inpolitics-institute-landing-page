import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/Header";
import { useContactModal } from "@/components/ContactModal";
import { ArrowLeft, Languages } from "lucide-react";
import banner from "@/assets/diplomatic-handshake-image.png";

export const Route = createFileRoute("/schools-of-politics/vision-mission")({
  component: VisionMission,
  head: () => ({
    meta: [
      { title: "Vision & Mission — School of Politics — InPolitics Institute" },
      { name: "description", content: "Discover the vision and mission of the School of Politics at InPolitics Institute." },
      { property: "og:title", content: "Vision & Mission — School of Politics — InPolitics Institute" },
      { property: "og:description", content: "Vision and mission of the School of Politics at InPolitics Institute." },
    ],
    links: [{ rel: "canonical", href: "https://inpoliticsinstitute.com/schools-of-politics/vision-mission" }],
  }),
});

function VisionMission() {
  const { open } = useContactModal();
  const [lang, setLang] = useState<"en" | "fr">("en");

  const enContent = [
    {
      num: "1",
      title: "Surround yourself with the elite",
      body: "Unlock the secrets of top political strategists. Our consultants and coaches — true architects of power — share their real-world experience to turn you into a player who matters.",
    },
    {
      num: "2",
      title: "Learn by doing, not by theorizing",
      body: "Forget lectures. Here, you build campaigns, rally crowds, and manage crises. From election strategy to public charisma, master the playbook that wins today.",
    },
    {
      num: "3",
      title: "Join the network that moves the needle",
      body: "Step into the circle of tomorrow's decision-makers. Connect, collaborate, build alliances. The network you build today becomes your greatest power tomorrow.",
    },
    {
      num: "4",
      title: "Become the transformation you want to see",
      body: "School of Politics is more than a program. It's your turning point. Walk out with the expertise, presence, and vision of a leader ready to make a real impact on society.",
    },
  ];

  const frContent = [
    {
      num: "1",
      title: "Entourez-vous de l'élite",
      body: "Accédez aux secrets des plus grands stratèges politiques. Nos consultants et coachs, véritables architectes du pouvoir, partagent avec vous leur expérience terrain pour faire de vous un acteur qui compte.",
    },
    {
      num: "2",
      title: "Apprenez en faisant, pas en théorie",
      body: "Oubliez les cours magistraux. Ici, vous créez des campagnes, vous haranguez des foules, vous gérez des crises. De la stratégie électorale au charisme en public, maîtrisez les codes qui font gagner aujourd'hui.",
    },
    {
      num: "3",
      title: "Intégrez le réseau qui fait bouger les lignes",
      body: "Rejoignez le cercle des futurs décideurs. Échangez, collaborez, créez des alliances. Demain, votre réseau d'aujourd'hui sera votre plus grande force.",
    },
    {
      num: "4",
      title: "Devenez la transformation que vous voulez voir",
      body: "School of Politics, c'est bien plus qu'une formation. C'est le déclic. Ressortez avec l'expertise, la prestance et la vision d'un leader prêt à impacter réellement la société.",
    },
  ];

  const content = lang === "en" ? enContent : frContent;
  const headline = lang === "en" ? "WHY SCHOOL OF POLITICS?" : "POURQUOI SCHOOL OF POLITICS ?";

  return (
    <div className="min-h-screen bg-white text-foreground">
      <Header />
      <main className="pt-32 md:pt-40 pb-24">
        <article className="max-w-4xl mx-auto px-6 lg:px-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase text-muted-foreground hover:text-crimson transition-colors mb-10"
          >
            <ArrowLeft className="size-3.5" /> Retour à l'accueil
          </Link>

          <section className="relative w-full h-[320px] md:h-[420px] overflow-hidden mb-12">
            <img
              src={banner}
              alt="School of Politics"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-14">
              <div className="max-w-3xl mx-auto">
                <div className="inline-flex px-3 py-1.5 rounded-full bg-white/20 backdrop-blur text-white text-[11px] font-semibold tracking-[0.18em] uppercase mb-4">
                  School of Politics
                </div>
                <h1 className="font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight text-white">
                  Vision & Mission
                </h1>
              </div>
            </div>
          </section>

          <div className="flex items-center gap-3 mb-10 pb-6 border-b border-border">
            <Languages className="size-4 text-muted-foreground" />
            <div className="flex bg-muted rounded-full p-0.5">
              <button
                onClick={() => setLang("en")}
                className={`px-5 py-1.5 text-xs font-semibold rounded-full transition-colors ${lang === "en" ? "bg-crimson text-white" : "text-muted-foreground hover:text-foreground"}`}
              >
                English
              </button>
              <button
                onClick={() => setLang("fr")}
                className={`px-5 py-1.5 text-xs font-semibold rounded-full transition-colors ${lang === "fr" ? "bg-crimson text-white" : "text-muted-foreground hover:text-foreground"}`}
              >
                Français
              </button>
            </div>
          </div>

          <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-anthracite mb-12">
            {headline}
          </h2>

          <div className="grid gap-10">
            {content.map((item) => (
              <div key={item.num} className="flex gap-5 md:gap-8">
                <span className="flex items-center justify-center size-12 md:size-14 shrink-0 rounded-xl bg-crimson/10 text-crimson text-xl md:text-2xl font-bold font-serif">
                  {item.num}
                </span>
                <div className="pt-1">
                  <h3 className="font-serif text-xl md:text-2xl font-semibold text-anthracite mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[17px] leading-relaxed text-foreground/80">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-10 border-t border-border flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <p className="text-sm text-muted-foreground">
              {lang === "en" ? "Ready to take the next step?" : "Prêt à franchir le pas ?"}
            </p>
            <Link
              to="/schools-of-politics/apply"
              className="btn-crimson px-6 py-3 rounded-full text-sm font-semibold inline-flex items-center gap-2"
            >
              {lang === "en" ? "Apply Now" : "Postulez maintenant"}
            </Link>
          </div>
        </article>
      </main>
    </div>
  );
}
