import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { Header } from "@/components/Header";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import pillarGouvernance from "@/assets/pillar-gouvernance.jpg";
import pillarDiplomatie1 from "@/assets/pillar-diplomatie-1.jpg";
import pillarDiplomatie2 from "@/assets/pillar-diplomatie-2.jpg";
import pillarCommunication from "@/assets/pillar-communication.jpg";
import pillarObservatoire from "@/assets/pillar-observatoire.jpg";
import banner from "@/assets/banner3.png";

type Pillar = {
  title: string;
  tagline: string;
  intro: string;
  cover: string;
  modules: string[];
  outcomes: string[];
  extras?: string[];
};

const PILLARS: Record<string, Pillar> = {
  gouvernance: {
    title: "L'Executive Education de Haute Performance",
    tagline: "Programmes d'excellence · Séminaires d'immersion · Direction scientifique rigoureuse",
    intro:
      "Des programmes d'excellence en ligne et en présentiel, conçus pour les décideurs publics, élus territoriaux, dirigeants privés et acteurs politiques souhaitant transformer leurs compétences en leviers d'action immédiats.",
    cover: pillarGouvernance,
    modules: [
      "Gouvernance financière et pilotage stratégique",
      "Droit OHADA et sécurité juridique des décisions",
      "Partenariats public-privé et montage institutionnel",
      "Technopolitique et intelligence artificielle appliquée à la gouvernance",
      "Diplomatie territoriale, relations internationales et innovation urbanistique",
    ],
    outcomes: [
      "Décideurs publics mieux outillés pour l'action",
      "Dirigeants capables d'arbitrer avec rigueur et impact",
      "Cadres aptes à relier théorie, terrain et transformation territoriale",
    ],
  },
  technopolitiques: {
    title: "Les Enjeux Technopolitiques",
    tagline: "Science des données · SaaS territoriaux · IA au cœur de la décision publique",
    intro:
      "La politique et la technologie sont désormais indissociables. Ce pilier outille les élus et institutions pour automatiser la transparence, réduire la déperdition financière et renforcer durablement les recettes propres des collectivités territoriales.",
    cover: pillarObservatoire,
    modules: [
      "Science des données au service de la décision publique",
      "Solutions logicielles SaaS de gestion territoriale et municipale",
      "Automatisation de la transparence et traçabilité des flux",
      "Pilotage des recettes locales par la donnée",
      "IA appliquée à la performance territoriale",
    ],
    outcomes: [
      "Collectivités plus transparentes et plus pilotées",
      "Réduction de la déperdition financière locale",
      "Doublement potentiel des recettes propres via l'outillage numérique",
    ],
  },
  diplomatie: {
    title: "La Diplomatie d'Influence et de Réseau",
    tagline: "Lobbying d'intégrité · Plaidoyer éthique · Connexions stratégiques",
    intro:
      "Nous faisons du lobbying d'intégrité et du plaidoyer éthique des leviers légitimes du développement, en reliant décideurs publics, investisseurs privés et réseaux d'influence pour orienter les décisions stratégiques et capter les financements internationaux.",
    cover: pillarDiplomatie1,
    modules: [
      "Lobbying d'intégrité et plaidoyer éthique",
      "Ingénierie de mise en relation et cartographie des acteurs",
      "Mobilisation des investisseurs et partenaires institutionnels",
      "Stratégies d'influence internationale et soft power",
      "Diaspo Back-Home et sécurisation du retour des compétences et capitaux",
    ],
    outcomes: [
      "Accès facilité aux réseaux d'influence et de décision",
      "Structuration de partenariats et financements internationaux",
      "Activation de la diaspora au service des projets territoriaux",
    ],
    extras: [pillarDiplomatie2],
  },
  communication: {
    title: "Communication & Analyse Politique",
    tagline: "Stratégie de campagne · Médias · Décryptage de l'opinion",
    intro:
      "Maîtriser les codes de la communication politique moderne : campagnes électorales, gestion de l'opinion, médias traditionnels et numériques.",
    cover: pillarCommunication,
    modules: [
      "Stratégie de campagne électorale et ciblage de l'électorat",
      "Gestion des médias et relations presse",
      "Communication de crise et storytelling politique",
      "Analyse de l'opinion publique et sondages",
      "Médias numériques, réseaux sociaux et influence politique",
    ],
    outcomes: [
      "Directeurs de communication politique",
      "Consultants en stratégie de campagne",
      "Porte-parole et conseillers en image",
    ],
  },
  "observatoire-politique": {
    title: "Observatoire Politique",
    tagline: "Baromètres d'opinion · Cartographie électorale · Analyse territoriale",
    intro:
      "Infrastructure d'analyse en temps réel des dynamiques politiques, sociologiques et territoriales, destinée aux institutions, collectivités, entreprises et acteurs publics en quête de lecture stratégique fiable.",
    cover: pillarObservatoire,
    modules: [
      "Méthodologie d'enquête et échantillonnage",
      "Baromètres d'opinion et lecture des perceptions citoyennes",
      "Cartographie électorale et dynamiques territoriales",
      "Sociologie du vote et fractures régionales",
      "Visualisation de données et restitution stratégique",
    ],
    outcomes: [
      "Analystes politiques et territoriaux",
      "Think tanks, collectivités et institutions mieux informés",
      "Décisions publiques appuyées sur une lecture fine du terrain",
    ],
  },
};

export const Route = createFileRoute("/pilier/$slug")({
  loader: ({ params }): { pillar: Pillar } => {
    const pillar = PILLARS[params.slug];
    if (!pillar) throw notFound();
    return { pillar };
  },
  component: PillarPage,
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center bg-background text-foreground p-10">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-anthracite">Pilier introuvable</h1>
        <Link to="/" className="mt-6 inline-flex items-center gap-2 text-crimson font-semibold">
          <ArrowLeft className="size-4" /> Retour à l'accueil
        </Link>
      </div>
    </div>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="min-h-screen grid place-items-center p-10">
      <div className="text-center">
        <p className="text-muted-foreground mb-4">{error.message}</p>
        <button onClick={reset} className="btn-crimson px-5 h-11 rounded-full text-sm font-semibold">
          Réessayer
        </button>
      </div>
    </div>
  ),
  head: ({ params }) => {
    const p = PILLARS[params.slug];
    return {
      meta: [
        { title: p ? `${p.title} — InPolitics Institute` : "Pilier — InPolitics Institute" },
        { name: "description", content: p?.intro ?? "" },
      ],
    };
  },
});

function PillarPage() {
  const { pillar } = Route.useLoaderData() as { pillar: Pillar };
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <section className="relative w-full h-[320px] md:h-[420px] overflow-hidden">
          <img src={banner} alt={pillar.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-14">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
              <div className="inline-flex px-3 py-1.5 rounded-full bg-white/20 backdrop-blur text-white text-[11px] font-semibold tracking-[0.18em] uppercase mb-4">
                Executifs — {pillar.tagline.split("·")[0].trim()}
              </div>
              <h1 className="font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight text-white max-w-3xl">
                {pillar.title}
              </h1>
            </div>
          </div>
        </section>
        <section className="relative pb-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-crimson transition mb-10">
              <ArrowLeft className="size-4" /> Retour à l'accueil
            </Link>
            <div className="grid lg:grid-cols-12 gap-12 items-end">
              <div className="lg:col-span-7">
                <div className="text-[11px] font-semibold tracking-[0.22em] uppercase text-crimson mb-4">
                  {pillar.tagline}
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-anthracite leading-[1.05]">
                  {pillar.title}
                </h1>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
                  {pillar.intro}
                </p>
              </div>
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl">
                  <img src={pillar.cover} alt={pillar.title} className="h-full w-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-secondary/40 border-y border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <div className="inline-flex px-3 py-1.5 rounded-full bg-crimson/10 text-crimson text-[11px] font-semibold tracking-[0.18em] uppercase mb-4">
                Programme
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-anthracite leading-tight">
                Les modules clés du pilier.
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-3">
              {pillar.modules.map((m, i) => (
                <div key={m} className="flex items-start gap-5 bg-background border border-border rounded-2xl p-5 md:p-6 hover:border-crimson/40 transition">
                  <span className="text-xs font-mono text-crimson font-bold mt-1">{String(i + 1).padStart(2, "0")}</span>
                  <p className="text-anthracite font-medium">{m}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="inline-flex px-3 py-1.5 rounded-full bg-crimson/10 text-crimson text-[11px] font-semibold tracking-[0.18em] uppercase mb-4">
              Impact
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-anthracite leading-tight mb-12 max-w-2xl">
              Ce que ce pilier permet de produire.
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {pillar.outcomes.map((o) => (
                <div key={o} className="bg-secondary/50 border border-border rounded-3xl p-7">
                  <CheckCircle2 className="size-7 text-crimson mb-4" strokeWidth={1.6} />
                  <p className="text-anthracite font-semibold leading-snug">{o}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="max-w-5xl mx-auto px-6 lg:px-10">
            <div className="bg-anthracite text-white rounded-[2rem] p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold leading-tight">Prêt à intégrer ce pilier ?</h3>
                <p className="mt-2 text-white/70">Échangez avec un conseiller d'orientation InPolitics.</p>
              </div>
              <Link to="/" hash="contact" className="btn-crimson inline-flex items-center gap-2 px-7 h-14 rounded-full font-semibold text-sm">
                Contacter l'institut <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <WhatsAppFloat />
    </div>
  );
}
