import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Mail, Quote } from "lucide-react";
import { Header } from "@/components/Header";
import { useContactModal } from "@/components/ContactModal";

const SITE = "https://inpoliticsinstitute.com";
const DIRECTOR_MESSAGE: string[] = [
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
  "Arnaud SIGHANO — Fondateur & Directeur Associé, InPolitics Institute.",
];

export const Route = createFileRoute("/mot-du-directeur")({
  component: DirectorMessagePage,
  head: () => ({
    meta: [
      { title: "Mot du Directeur | InPolitics Institute" },
      { name: "description", content: "Le mot du Directeur d'InPolitics Institute par Arnaud SIGHANO." },
      { property: "og:title", content: "Mot du Directeur | InPolitics Institute" },
      { property: "og:description", content: "Le mot du Directeur d'InPolitics Institute par Arnaud SIGHANO." },
      { property: "og:url", content: `${SITE}/mot-du-directeur` },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: `${SITE}/mot-du-directeur` }],
  }),
});

function DirectorMessagePage() {
  const { open } = useContactModal();

  return (
    <div className="min-h-screen bg-white text-foreground">
      <Header />
      <main className="pt-32 md:pt-40 pb-24">
        <article className="max-w-4xl mx-auto px-6 lg:px-10">
          <Link to="/" className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase text-muted-foreground hover:text-crimson transition-colors mb-10">
            <ArrowLeft className="size-3.5" /> Retour à l'accueil
          </Link>

          <div className="inline-flex px-3 py-1.5 rounded-full bg-crimson/10 text-crimson text-[11px] font-semibold tracking-[0.18em] uppercase mb-6">
            06 — Mot du Directeur
          </div>
          <Quote className="size-8 text-crimson mb-5" strokeWidth={1.5} />
          <h1 className="font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight text-anthracite">
            Le mot du Directeur
          </h1>
          <p className="mt-4 text-sm uppercase tracking-[0.22em] text-muted-foreground">
            Arnaud SIGHANO — Fondateur & Directeur Associé
          </p>

          <div className="mt-12 space-y-6 text-[17px] leading-[1.9] text-foreground/85">
            {DIRECTOR_MESSAGE.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
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