import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { Header } from "@/components/Header";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import pillarGouvernance from "@/assets/pillar-gouvernance.jpg";
import pillarDiplomatie1 from "@/assets/pillar-diplomatie-1.jpg";
import pillarDiplomatie2 from "@/assets/pillar-diplomatie-2.jpg";
import pillarCommunication from "@/assets/pillar-communication.jpg";
import pillarObservatoire from "@/assets/pillar-observatoire.jpg";

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
    title: "Gouvernance & Stratégie d'État",
    tagline: "Administration publique · Éthique républicaine · Leadership institutionnel",
    intro:
      "Former les futurs hauts commis de l'État capables de penser, décider et conduire la machine publique avec rigueur, légalité et vision stratégique.",
    cover: pillarGouvernance,
    modules: [
      "Théorie de l'État et droit constitutionnel comparé",
      "Politiques publiques et évaluation de l'action gouvernementale",
      "Éthique républicaine et lutte contre la corruption",
      "Leadership institutionnel et conduite du changement",
      "Diplomatie territoriale et gouvernance locale en Europe et Afrique",
    ],
    outcomes: [
      "Hauts fonctionnaires et directeurs d'administration",
      "Conseillers en cabinet ministériel",
      "Cadres d'institutions régionales (CEMAC, UA)",
    ],
  },
  diplomatie: {
    title: "Diplomatie & Relations Internationales",
    tagline: "Géopolitique africaine · Négociation multilatérale · Soft power",
    intro:
      "Préparer les diplomates et négociateurs de demain à défendre les intérêts des territoires européens et africains sur la scène mondiale.",
    cover: pillarDiplomatie1,
    modules: [
      "Géopolitique européenne, africaine et zones d'influence",
      "Droit international public et organisations multilatérales",
      "Techniques de négociation diplomatique avancées",
      "Économie politique internationale et accords commerciaux",
      "Diplomatie culturelle et soft power",
    ],
    outcomes: [
      "Diplomates et attachés d'ambassade",
      "Négociateurs en organisations internationales",
      "Conseillers en affaires publiques internationales",
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
  observatoire: {
    title: "L'Observatoire Inpolitics",
    tagline: "Data analytics politique · Baromètres d'opinion · Cartographie électorale",
    intro:
      "Infrastructure de pointe d'analyse en temps réel des dynamiques politiques, sociologiques et territoriales européennes et africaines. Rapports stratégiques destinés aux collectivités, institutions et entreprises.",
    cover: pillarObservatoire,
    modules: [
      "Méthodologie d'enquête et échantillonnage par quotas",
      "Statistiques appliquées et modélisation prédictive",
      "Cartographie électorale et SIG politique",
      "Sociologie du vote et fractures régionales",
      "Visualisation de données et restitution stratégique",
    ],
    outcomes: [
      "Analystes Data politique et électoraux",
      "Chercheurs en think tanks et observatoires",
      "Consultants quantitatifs pour partis et institutions",
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
        {
          title: p
            ? `${p.title} — Inpolitics Institute`
            : "Pilier — Inpolitics Institute",
        },
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
        {/* Hero */}
        <section className="relative pt-32 md:pt-40 pb-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-crimson transition mb-10"
            >
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
                  <img
                    src={pillar.cover}
                    alt={pillar.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Modules */}
        <section className="py-20 md:py-28 bg-secondary/40 border-y border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <div className="inline-flex px-3 py-1.5 rounded-full bg-crimson/10 text-crimson text-[11px] font-semibold tracking-[0.18em] uppercase mb-4">
                Programme
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-anthracite leading-tight">
                Les modules clés du cursus.
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-3">
              {pillar.modules.map((m, i) => (
                <div
                  key={m}
                  className="flex items-start gap-5 bg-background border border-border rounded-2xl p-5 md:p-6 hover:border-crimson/40 transition"
                >
                  <span className="text-xs font-mono text-crimson font-bold mt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-anthracite font-medium">{m}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Outcomes */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="inline-flex px-3 py-1.5 rounded-full bg-crimson/10 text-crimson text-[11px] font-semibold tracking-[0.18em] uppercase mb-4">
              Débouchés
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-anthracite leading-tight mb-12 max-w-2xl">
              Vers quelles fonctions ce cursus mène-t-il ?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {pillar.outcomes.map((o) => (
                <div
                  key={o}
                  className="bg-secondary/50 border border-border rounded-3xl p-7"
                >
                  <CheckCircle2 className="size-7 text-crimson mb-4" strokeWidth={1.6} />
                  <p className="text-anthracite font-semibold leading-snug">{o}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-24">
          <div className="max-w-5xl mx-auto px-6 lg:px-10">
            <div className="bg-anthracite text-white rounded-[2rem] p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                  Prêt à intégrer ce cursus ?
                </h3>
                <p className="mt-2 text-white/70">
                  Échangez avec un conseiller d'orientation Inpolitics.
                </p>
              </div>
              <Link
                to="/"
                hash="contact"
                className="btn-crimson inline-flex items-center gap-2 px-7 h-14 rounded-full font-semibold text-sm"
              >
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
