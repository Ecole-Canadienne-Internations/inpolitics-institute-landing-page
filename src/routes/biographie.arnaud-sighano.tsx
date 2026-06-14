import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Mail } from "lucide-react";
import { Header } from "@/components/Header";
import { useContactModal } from "@/components/ContactModal";
import arnaudSighanoImage from "@/assets/arnaud sighano image.jpeg";

const SITE = "https://inpoliticsinstitute.com";
const BIO_PARAGRAPHS: string[] = [
  "Bienvenue sur la plateforme officielle d'InPolitics Institute.",
  "À l'ère des mutations géopolitiques majeures et de l'accélération numérique, la gestion des affaires publiques et le développement économique exigent des paradigmes entièrement renouvelés. Les territoires, qu'ils soient en Europe ou au cœur de l'Afrique francophone, font face à un défi historique : maîtriser les forces Techno-Politiques pour bâtir une performance territoriale concrète, souveraine et durable.",
  "C'est pour répondre à cette exigence de modernité qu'est né InPolitics Institute.",
  "Nous avons conçu cette institution non pas comme un simple institut de formation, mais comme une plateforme internationale de diplomatie territoriale, de lobbying d'intégrité, de recherche et de gouvernance digitale. À travers notre double ancrage stratégique — Europe à Gigean (Montpellier Métropole, France) et localisations en Afrique — nous opérons au point de convergence entre la haute décision politique et l'innovation technologique.",
  "Notre action se déploie autour de trois priorités majeures qui redéfinissent l'exercice du pouvoir moderne :",
  "1 — L'Executive Education de Haute Performance. Nous proposons des programmes d'excellence (en ligne et en présentiel) et des séminaires d'immersion de 3 à 5 jours ou plus au sein de notre siège à l'international, validés par une direction scientifique universitaire rigoureuse. Adaptés aux agendas des décideurs publics, des élus locaux et territoriaux, des directeurs et hauts dirigeants du secteur privé, des hommes politiques et de toute personne désireuse de s'outiller. Nos parcours lient la théorie aux réalités du terrain : gouvernance financière, droit OHADA, partenariats public-privé, intelligence artificielle au service de la gouvernance et Technopolitique, diplomatie territoriale et diplomatie d'influence, communication politique et de crise, relations internationales, innovations urbanistiques et territoriales.",
  "2 — Les Enjeux Technopolitiques. La politique et la technologie sont désormais indissociables. Nous intégrons la science des données, les solutions logicielles SaaS de gestion territoriale et municipale avec l'Intelligence Artificielle au cœur de la décision publique. Notre but est clair : outiller les élus pour automatiser la transparence, éradiquer la déperdition financière et doubler les recettes propres des collectivités territoriales.",
  "3 — La Diplomatie d'Influence et de Réseau. Nous faisons du lobbying d'intégrité et du plaidoyer éthique des leviers légitimes du développement. À travers une ingénierie rigoureuse de mise en relation, nous connectons les décideurs publics, les investisseurs privés et les réseaux d'influenceurs pour orienter les décisions stratégiques et capter les financements internationaux. C'est aussi le cœur du programme Diaspo Back-Home, qui sécurise le retour des compétences et des capitaux de la diaspora d'Europe vers les projets du continent.",
  "Ensemble, faisons de la technopolitique, de la haute formation et de l'influence éthique les moteurs de la transformation et du rayonnement de nos territoires.",
  "Je vous souhaite une excellente navigation et me réjouis de vous accueillir très prochainement.",
  "Arnaud SIGHANO — Fondateur, InPolitics Institute.",
];

export const Route = createFileRoute("/biographie/arnaud-sighano")({
  component: BioPage,
  head: () => ({
    meta: [
      { title: "Arnaud SIGHANO — Biographie | InPolitics Institute" },
      { name: "description", content: "Biographie d'Arnaud SIGHANO, Fondateur et Directeur d'InPolitics Institute." },
      { property: "og:title", content: "Arnaud SIGHANO — InPolitics Institute" },
      { property: "og:description", content: "Diplomate d'influence et fondateur d'InPolitics Institute." },
      { property: "og:url", content: `${SITE}/biographie/arnaud-sighano` },
      { property: "og:type", content: "profile" },
    ],
    links: [{ rel: "canonical", href: `${SITE}/biographie/arnaud-sighano` }],
  }),
});

function BioPage() {
  const { open } = useContactModal();
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Header />
      <main className="pt-32 md:pt-40 pb-24">
        <article className="max-w-6xl mx-auto px-6 lg:px-10">
          <Link to="/" className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase text-muted-foreground hover:text-crimson transition-colors mb-10">
            <ArrowLeft className="size-3.5" /> Retour à l'accueil
          </Link>
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-7 order-2 md:order-1">
              <div className="inline-flex px-3 py-1.5 rounded-full bg-crimson/10 text-crimson text-[11px] font-semibold tracking-[0.18em] uppercase mb-6">
                Biographie — Direction
              </div>
              <h1 className="font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight text-anthracite">
                Arnaud SIGHANO
              </h1>
              <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
                Fondateur & Directeur d'InPolitics Institute. Diplomate d'influence, expert en Sport Diplomatie, éducateur.
              </p>
              <div className="mt-10 space-y-5 text-[17px] leading-[1.8] text-foreground/85">
                {BIO.split(/(?<=\. )(?=[A-ZÉÈÀ])/).map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>
            <div className="md:col-span-5 order-1 md:order-2 md:sticky md:top-40">
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl bg-white">
                <img src={arnaudSighanoImage} alt="Arnaud SIGHANO" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
          <div className="mt-16 pt-10 border-t border-border flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <p className="text-sm text-muted-foreground">Échanger directement avec la Direction</p>
            <button onClick={open} className="btn-crimson px-6 py-3 rounded-full text-sm font-semibold inline-flex items-center gap-2">
              <Mail className="size-4" /> Contacter l'Institut
            </button>
          </div>
        </article>
      </main>
    </div>
  );
}
