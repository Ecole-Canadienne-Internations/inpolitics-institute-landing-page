import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { useContactModal } from "@/components/ContactModal";
import { ArrowLeft, Mail, Quote } from "lucide-react";

const SITE = "https://inpoliticsinstitute.com";

const SYNTHESE = [
  {
    k: "L'Objectif",
    s: "Le Pourquoi",
    d: "La crise de la décision publique et le besoin de rigueur scientifique.",
  },
  {
    k: "La Mission",
    s: "Le Quoi",
    d: "Allier science politique, data/ technologie et communication stratégique.",
  },
  {
    k: "Les Offres",
    s: "Le Comment",
    d: "Formation, conseil d'ingénierie politique et recherche appliquée.",
  },
  {
    k: "La Vision",
    s: "Où allons-nous ?",
    d: "Devenir la référence internationale de la technopolitique et de la gouvernance moderne.",
  },
];

const PITCH = [
  {
    n: "1",
    title: "L'Accroche : Le Constat",
    paragraphs: [
      "Aujourd'hui, nous assistons à une transformation radicale du paysage politique et institutionnel. Entre l'explosion de la donnée, la saturation de l'information et la crise de confiance citoyenne, piloter une institution ou une campagne politique à l'intuition ne suffit plus.",
      "Les dirigeants, les décideurs publics et les organisations font face à un défi majeur : comment se faire entendre, se faire respecter et prendre des décisions stratégiques éclairées dans un monde hyperconnecté ?",
    ],
  },
  {
    n: "2",
    title: "La Solution : InPolitics Institute",
    paragraphs: [
      "C'est pour répondre à cette exigence qu'est né InPolitics Institute.",
      "Nous sommes un institut de référence spécialisé dans la formation de haut niveau, le conseil stratégique et l'analyse technopolitique.",
      "Notre mission est d'apporter de la rigueur scientifique là où il n'y avait parfois que de l'empirisme. Nous croisons trois forces fondamentales :",
    ],
    bullets: [
      "La Science Politique & la Gouvernance — pour comprendre les dynamiques de pouvoir et d'opinion.",
      "La Data & la Technopolitique — pour analyser les comportements, anticiper les tendances et modéliser la prise de décision.",
      "La Communication d'Impact & le Leadership — pour structurer un discours fort, maîtriser son image et bâtir une influence durable sans rejet.",
    ],
  },
  {
    n: "3",
    title: "Notre Impact & Nos Services",
    paragraphs: [
      "Concrètement, InPolitics Institute déploie son expertise autour de trois piliers majeurs :",
    ],
    bullets: [
      "Des Executive Masterclass et des programmes certifiants pour armer la nouvelle génération de leaders, cadres et décideurs.",
      "Du conseil en ingénierie politique et gestion de crise sur-mesure pour les institutions, les exécutifs et les organisations.",
      "Un pôle de recherche appliquée qui produit des analyses prospectives sur les enjeux électoraux, la diplomatie d'influence et la gouvernance publique.",
    ],
  },
  {
    n: "4",
    title: "La Vision & La Conclusion",
    paragraphs: [
      "Notre ambition est claire : devenir le hub d'excellence de l'ingénierie politique en Afrique et à l'international, en offrant aux leaders les outils stratégiques et éthiques pour transformer la gouvernance de demain.",
    ],
    quote: "Avec InPolitics Institute, la politique retrouve sa précision scientifique et sa force d'impact.",
  },
];

export const Route = createFileRoute("/manifeste")({
  component: ManifestePage,
  head: () => ({
    meta: [
      { title: "Notre Manifeste — InPolitics Institute" },
      { name: "description", content: "Le manifeste d'InPolitics Institute : mêler science politique, données et communication d'impact pour bâtir la gouvernance de demain." },
      { property: "og:title", content: "Notre Manifeste — InPolitics Institute" },
      { property: "og:description", content: "Le manifeste d'InPolitics Institute : mêler science politique, données et communication d'impact." },
      { property: "og:url", content: `${SITE}/manifeste` },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: `${SITE}/manifeste` }],
  }),
});

function ManifesteList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-4">
      {items.map((it) => (
        <li key={it} className="flex items-start gap-4">
          <span className="mt-[0.55em] size-2 rounded-full bg-crimson shrink-0" />
          <span className="text-foreground/85">{it}</span>
        </li>
      ))}
    </ul>
  );
}

function PitchSection({
  n,
  title,
  paragraphs,
  bullets,
  quote,
}: {
  n: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  quote?: string;
}) {
  return (
    <section className="mt-16 pt-12 border-t border-border">
      <div className="flex items-center gap-4 mb-7">
        <span className="size-10 rounded-full bg-crimson/10 text-crimson grid place-items-center font-mono text-sm font-bold">
          {n}
        </span>
        <h2 className="font-serif text-2xl md:text-4xl leading-tight text-anthracite">
          {title}
        </h2>
      </div>
      <div className="space-y-6">
        {paragraphs.map((p, i) => (
          <p key={i} className="font-serif text-[20px] md:text-[22px] leading-[1.75] text-foreground/90">
            {p}
          </p>
        ))}
        {bullets && <ManifesteList items={bullets} />}
        {quote && (
          <blockquote className="border-l-2 border-crimson pl-6 py-2">
            <p className="font-serif italic text-2xl md:text-3xl leading-[1.35] text-anthracite">
              « {quote} »
            </p>
          </blockquote>
        )}
      </div>
    </section>
  );
}

function ManifestePage() {
  const { open } = useContactModal();
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

          <div className="inline-flex px-3 py-1.5 rounded-full bg-crimson/10 text-crimson text-[11px] font-semibold tracking-[0.18em] uppercase mb-6">
            Le Manifeste de l'Institut
          </div>
          <Quote className="size-8 text-crimson mb-5" strokeWidth={1.5} />
          <h1 className="font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight text-anthracite">
            Notre Manifeste
          </h1>

          <div className="mt-12 space-y-7 font-serif text-[20px] md:text-[22px] leading-[1.75] text-foreground/90">
            <p className="first-letter:font-serif first-letter:text-[5.5rem] first-letter:leading-[0.85] first-letter:float-left first-letter:mr-3 first-letter:mt-2 first-letter:text-crimson first-letter:font-bold">
              Mêler science politique, données et communication d'impact. La politique n'est pas qu'une affaire de discours, c'est une science de la donnée et de la stratégie. Chez InPolitics Institute, nous formons les décideurs à cette nouvelle ère technopolitique.
            </p>

            <p className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-crimson pt-4">
              Trois piliers majeurs
            </p>
            <ManifesteList
              items={[
                "Executive Masterclass",
                "Conseil et gestion de crise",
                "Recherche appliquée en Technopolitiques",
              ]}
            />

            <p>
              Notre ambition est claire : devenir le hub d'excellence de l'ingénierie politique en Afrique et à l'international, en offrant aux leaders les outils stratégiques et éthiques pour transformer la gouvernance de demain. Avec InPolitics Institute, la politique retrouve sa précision scientifique et sa force d'impact.
            </p>
          </div>

          <section className="mt-16 pt-12 border-t border-border">
            <div className="inline-flex px-3 py-1.5 rounded-full bg-crimson/10 text-crimson text-[11px] font-semibold tracking-[0.18em] uppercase mb-6">
              La Fiche Synthèse du Pitch
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {SYNTHESE.map((s) => (
                <div key={s.k} className="bg-background border border-border rounded-3xl p-7 hover:border-crimson/40 transition">
                  <div className="font-serif text-xl text-anthracite">{s.k}</div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-crimson mt-1">
                    {s.s}
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                </div>
              ))}
            </div>
          </section>

          {PITCH.map((p) => (
            <PitchSection key={p.n} {...p} />
          ))}

          <div className="mt-16 pt-10 border-t border-border flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Une question, un projet, une demande de partenariat ?
            </p>
            <button onClick={open} className="btn-crimson px-6 py-3 rounded-full text-sm font-semibold inline-flex items-center gap-2">
              <Mail className="size-4" /> Contacter l'Institut
            </button>
          </div>
        </article>
      </main>
    </div>
  );
}