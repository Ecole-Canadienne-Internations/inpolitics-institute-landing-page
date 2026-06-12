import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Landmark,
  Globe2,
  Radio,
  BarChart3,
  Quote,
  ArrowUpRight,
  MapPin,
  Mail,
  Phone,
  Shield,
  Timer,
  Siren,
  Plus,
} from "lucide-react";
import { useState } from "react";
import { Header } from "@/components/Header";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import heroBg from "@/assets/hero-bg-collage.png";
import teamSighano from "@/assets/team-sighano.png";
import teamObtel from "@/assets/team-obtel.jpeg";
import teamBoumediene from "@/assets/team-boumediene.jpeg";
import logo from "@/assets/logo-inpolitics.jpg";
import pillarGouvernance from "@/assets/pillar-gouvernance.jpg";
import pillarDiplomatie from "@/assets/pillar-diplomatie-1.jpg";
import pillarCommunication from "@/assets/pillar-communication.jpg";
import pillarObservatoire from "@/assets/pillar-observatoire.jpg";

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      { title: "InPolitics Institute — Décideurs Publics, Diplomatie & Gouvernance Digitale" },
      { name: "description", content: "Campus Europe (Gigean, Montpellier Métropole) & Campus Afrique. Formation d'élite, diplomatie territoriale, lobbying d'intégrité, gouvernance digitale au service du développement économique." },
      { property: "og:title", content: "InPolitics Institute" },
      { property: "og:description", content: "L'Institut des Décideurs Publics, de la Diplomatie, de la Performance Territoriale et de la Gouvernance Digitale." },
      { property: "og:image", content: "/favicon-96x96.png" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Landing() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Pillars />
        <SimulCrise />
        <Proof />
        <Admission />
        <Founder />
        <TeamFounders />
        <Faq />
        <ContactCta />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

/* ---------- TEAM — Qui sommes-nous ---------- */
function TeamFounders() {
  const team = [
    {
      slug: "arnaud-sighano",
      name: "Arnaud SIGHANO",
      role: "Fondateur & Directeur Associé",
      img: teamSighano,
    },
    {
      slug: "antoine-obtel",
      name: "Antoine OBTEL",
      role: "Directeur Associé",
      img: teamObtel,
    },
    {
      slug: "hacene-boumediene",
      name: "Bloukli Hacene BOUMEDIENE",
      role: "Co-fondateur — Architecture & Urbanisme",
      img: teamBoumediene,
    },
  ];
  return (
    <section id="equipe" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex px-3 py-1.5 rounded-full bg-crimson/10 text-crimson text-[11px] font-semibold tracking-[0.18em] uppercase mb-5">
            07 — Qui sommes-nous
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-anthracite leading-[1.1]">
            La Direction de l'Institut
          </h2>
          <p className="mt-5 text-muted-foreground">
            Trois fondateurs, trois disciplines, une même exigence républicaine.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {team.map((m) => (
            <div key={m.slug} className="flex flex-col items-center text-center">
              <div className="size-44 rounded-full overflow-hidden ring-4 ring-white shadow-[0_20px_50px_-15px_rgba(15,23,42,0.25)]">
                <img src={m.img} alt={m.name} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="mt-6">
                <div className="text-lg font-bold text-anthracite">{m.name}</div>
                <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground mt-1">{m.role}</div>
              </div>
              <BioLink slug={m.slug} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BioLink({ slug }: { slug: string }) {
  const cls = "mt-6 btn-crimson px-5 py-2.5 rounded-full text-xs font-semibold inline-flex items-center gap-2";
  const inner = (<>En savoir plus <ArrowRight className="size-3.5" /></>);
  if (slug === "arnaud-sighano") return <Link to="/biographie/arnaud-sighano" className={cls}>{inner}</Link>;
  if (slug === "antoine-obtel") return <Link to="/biographie/antoine-obtel" className={cls}>{inner}</Link>;
  return <Link to="/biographie/hacene-boumediene" className={cls}>{inner}</Link>;
}





/* ---------- HERO ---------- */
function Hero() {
  return (
    <section className="relative pt-40 md:pt-48 pb-20 md:pb-28 overflow-hidden bg-white isolate">
      {/* Background collage anchored to the right, blended into white */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <img
          src={heroBg}
          alt=""
          className="absolute right-0 top-8 h-[calc(100%-2rem)] w-[76%] max-w-none object-contain object-right-top opacity-100"
        />
        {/* Smooth fade from white (left) to transparent (right) — text on white only */}
        <div className="absolute inset-0 bg-gradient-to-r from-white from-[0%] via-white/55 via-[38%] to-transparent to-[68%]" />
        {/* Soft fade at bottom to merge with the rest of the page */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-white" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-crimson/10 text-crimson text-[11px] font-semibold tracking-[0.22em] uppercase mb-7">
            <span className="size-1.5 rounded-full bg-crimson animate-pulse" />
            Gigean · Montpellier Métropole · Campus Afrique
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-[68px] leading-[1.05] font-bold text-anthracite">
            Formez-vous aux plus hautes{" "}
            <span className="text-crimson">sphères du pouvoir</span>, de la diplomatie et de la gouvernance digitale.
          </h1>
          <p className="mt-7 text-base md:text-lg text-anthracite/80 leading-relaxed max-w-xl">
            <span className="font-semibold text-anthracite">InPolitics Institute</span> — L'Institut des Décideurs Publics, de la Diplomatie Territoriale, de la Performance Territoriale et de la Gouvernance Digitale au service du développement économique.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="btn-crimson inline-flex items-center gap-2 px-7 h-13 py-3.5 rounded-full font-semibold text-sm"
            >
              Demander la brochure
              <ArrowRight className="size-4" />
            </a>
            <a
              href="#formations"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm border border-anthracite/15 text-anthracite hover:bg-anthracite hover:text-anthracite-foreground transition-colors"
            >
              Découvrir l'institut
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- ABOUT ---------- */
function About() {
  return (
    <section id="apropos" className="py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-14">
        <div className="lg:col-span-4">
          <div className="inline-flex px-3 py-1.5 rounded-full bg-crimson/10 text-crimson text-[11px] font-semibold tracking-[0.18em] uppercase mb-4">
            01 — Qui sommes-nous
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-anthracite leading-tight">
            Un think tank pédagogique au service de la Nation.
          </h2>
        </div>
        <div className="lg:col-span-7 lg:col-start-6 space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
          <p>
            InPolitics Institute forme la prochaine génération de décideurs
            publics aux disciplines essentielles de la République :
            diplomatie territoriale, gouvernance digitale, lobbying d'intégrité
            et performance des territoires.
          </p>
          <p>
            Notre approche fusionne la rigueur académique européenne, la
            spécificité du terrain et l'exigence éthique d'une République
            qui se construit, depuis notre Campus Europe de Gigean
            (Montpellier Métropole) jusqu'à nos pôles Afrique.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- PILLARS ---------- */
const PILLARS = [
  {
    slug: "gouvernance",
    icon: Landmark,
    title: "Gouvernance & Stratégie d'État",
    desc: "Administration publique, éthique républicaine et leadership d'institution.",
    img: pillarGouvernance,
  },
  {
    slug: "diplomatie",
    icon: Globe2,
    title: "Diplomatie & Relations Internationales",
    desc: "Géopolitique africaine, négociation multilatérale et soft power.",
    img: pillarDiplomatie,
  },
  {
    slug: "communication",
    icon: Radio,
    title: "Communication & Analyse Politique",
    desc: "Stratégie de campagne, gestion des médias et décryptage de l'opinion.",
    img: pillarCommunication,
  },
  {
    slug: "observatoire",
    icon: BarChart3,
    title: "L'Observatoire Inpolitics",
    desc: "Data analytics politique, baromètres d'opinion et cartographie électorale en temps réel.",
    img: pillarObservatoire,
  },
];

function Pillars() {
  return (
    <section
      id="formations"
      className="py-28 md:py-36"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex px-3 py-1.5 rounded-full bg-crimson/10 text-crimson text-[11px] font-semibold tracking-[0.18em] uppercase mb-4">
              02 — Piliers de l'institut
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-anthracite leading-tight">
              Quatre disciplines. Une seule exigence : l'excellence.
            </h2>
          </div>
          <a
            href="#contact"
            className="text-sm font-semibold text-anthracite hover:text-crimson transition inline-flex items-center gap-2"
          >
            Programme complet <ArrowUpRight className="size-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((p, i) => {
            const Icon = p.icon;
            return (
              <Link
                key={p.slug}
                to="/pilier/$slug"
                params={{ slug: p.slug }}
                className="pillar-card group bg-background border border-border rounded-3xl overflow-hidden flex flex-col"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 size-10 rounded-2xl bg-background/95 backdrop-blur grid place-items-center">
                    <Icon className="size-5 text-anthracite" strokeWidth={1.6} />
                  </div>
                  <span className="absolute top-3 right-3 text-[10px] font-mono text-anthracite bg-background/90 px-2 py-1 rounded-full">
                    0{i + 1}
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-anthracite leading-snug">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                    {p.desc}
                  </p>
                  <div className="mt-6 pt-5 border-t border-border text-xs font-semibold tracking-wide uppercase text-anthracite/70 flex items-center justify-between">
                    Découvrir
                    <ArrowRight className="size-4 text-crimson group-hover:translate-x-1 transition" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- SIMUL' CRISE ---------- */
function SimulCrise() {
  const steps = [
    { icon: Siren, t: "J-0 : Déclenchement", d: "Une crise réelle (diplomatique, électorale ou cyber) est annoncée à 8h00." },
    { icon: Timer, t: "48 heures non-stop", d: "Les étudiants endossent les rôles de ministres, conseillers et porte-parole." },
    { icon: Shield, t: "Débriefing d'État", d: "Décryptage par un jury d'anciens ministres, diplomates et experts en sécurité." },
  ];
  return (
    <section className="py-28 md:py-36 relative overflow-hidden">
      <div className="absolute -top-40 -left-40 size-[500px] rounded-full bg-crimson/5 blur-3xl" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-14 relative">
        <div className="lg:col-span-5">
          <div className="inline-flex px-3 py-1.5 rounded-full bg-crimson/10 text-crimson text-[11px] font-semibold tracking-[0.18em] uppercase mb-5">
            La Simul' Crise
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-anthracite">
            Une immersion totale dans la <span className="text-crimson">prise de décision</span>.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Une fois par trimestre, l'institut organise une simulation de crise
            de 48 heures non-stop : gestion d'une crise diplomatique, élection
            présidentielle fictive ou cyberattaque d'État. Les étudiants jouent
            les rôles des ministres, des conseillers et des porte-parole.
          </p>
        </div>
        <div className="lg:col-span-7 grid sm:grid-cols-3 gap-5 self-center">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={s.t} className="relative bg-background border border-border rounded-3xl p-6 hover:border-crimson/40 transition">
                <div className="size-12 rounded-2xl bg-crimson grid place-items-center mb-5">
                  <Icon className="size-5 text-white" strokeWidth={1.8} />
                </div>
                <div className="text-[10px] font-mono text-muted-foreground mb-1">0{i + 1}</div>
                <div className="font-bold text-anthracite">{s.t}</div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- PROOF ---------- */
function Proof() {
  const stats = [
    { v: "+100", l: "Heures de simulations de débats et de gestion de crise" },
    { v: "100%", l: "Des intervenants : experts, diplomates et hauts commis de l'État" },
    { v: "01", l: "Observatoire unique d'analyse de données politiques territoriales" },
  ];
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <div className="inline-flex px-3 py-1.5 rounded-full bg-crimson/10 text-crimson text-[11px] font-semibold tracking-[0.18em] uppercase mb-4">
            03 — Preuve d'autorité
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-anthracite max-w-3xl mx-auto leading-tight">
            Une infrastructure pédagogique et stratégique sans équivalent.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {stats.map((s) => (
            <div
              key={s.v}
              className="rounded-3xl bg-background border border-border p-10 text-center hover:border-crimson/40 transition"
            >
              <div className="text-6xl md:text-7xl font-bold text-crimson tracking-tighter">
                {s.v}
              </div>
              <p className="mt-4 text-sm text-muted-foreground max-w-[260px] mx-auto leading-relaxed">
                {s.l}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- ADMISSION ---------- */
function Admission() {
  const steps = [
    { n: "01", t: "Étude de dossier", d: "Soumission du CV et d'une lettre de motivation en ligne." },
    { n: "02", t: "Entretien de sélection", d: "Grand oral devant le jury de l'institut (physique ou en ligne)." },
    { n: "03", t: "Admission définitive", d: "Intégration officielle de la nouvelle cohorte des élites." },
  ];
  return (
    <section id="admission" className="py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <div className="inline-flex px-3 py-1.5 rounded-full bg-crimson/10 text-crimson text-[11px] font-semibold tracking-[0.18em] uppercase mb-4">
            04 — Processus d'admission
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-anthracite leading-tight">
            Trois étapes vers l'excellence républicaine.
          </h2>
        </div>

        <div className="relative grid md:grid-cols-3 gap-10 md:gap-6">
          <div className="hidden md:block absolute top-10 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-anthracite/20 to-transparent" />
          {steps.map((s) => (
            <div key={s.n} className="group text-center md:text-left relative">
              <div className="size-20 rounded-full bg-background border-2 border-border grid place-items-center mx-auto md:mx-0 text-2xl font-bold text-muted-foreground transition-all group-hover:bg-crimson group-hover:border-crimson group-hover:text-white group-hover:shadow-xl">
                {s.n}
              </div>
              <h3 className="mt-6 text-xl font-bold text-anthracite">{s.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto md:mx-0">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ---------- FOUNDER ---------- */
function Founder() {
  return (
    <section className="py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-5">
          <div className="relative aspect-[4/5] max-w-sm">
            <div className="absolute -top-3 -right-3 left-10 bottom-10 rounded-[2rem] border border-crimson/40" />
            <img
              src={teamSighano}
              alt="Arnaud Sighano, Directeur d'Inpolitics Institute"
              loading="lazy"
              className="relative h-full w-full object-cover rounded-[2rem] shadow-2xl"
            />
          </div>
        </div>
        <div className="md:col-span-7">
          <div className="inline-flex px-3 py-1.5 rounded-full bg-crimson/10 text-crimson text-[11px] font-semibold tracking-[0.18em] uppercase mb-5">
            06 — Mot du Directeur
          </div>
          <Quote className="size-8 text-crimson mb-4" strokeWidth={1.5} />
          <blockquote className="font-serif italic text-2xl md:text-[32px] leading-[1.35] text-anthracite">
            « Diriger est une science qui s'apprend. Notre mission est d'armer
            les décideurs publics et la diaspora des meilleurs outils
            d'analyse pour servir leurs territoires avec rigueur, vision et intégrité. »
          </blockquote>
          <div className="mt-8 flex items-center gap-4">
            <div className="h-px w-12 bg-anthracite/30" />
            <div>
              <div className="text-sm font-bold text-anthracite">
                Arnaud Sighano
              </div>
              <div className="text-xs text-muted-foreground tracking-wide">
                Directeur Fondateur — InPolitics Institute
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
const FAQS = [
  {
    q: "Quels sont les débouchés professionnels après un cursus à l'Inpolitics Institute ?",
    a: "Nos diplômés intègrent des fonctions de premier plan : hauts fonctionnaires, conseillers en cabinet ministériel, diplomates, directeurs d'administrations publiques et d'institutions régionales (CEMAC, Union Africaine), directeurs des affaires publiques en entreprise, consultants en stratégie de crise, analystes politiques seniors et spécialistes en Data Analytics politique.",
  },
  {
    q: "Comment l'Observatoire Inpolitics garantit-il la neutralité, l'anonymat et la précision de ses données ?",
    a: "Notre crédibilité repose sur une méthodologie scientifique stricte : protocoles d'échantillonnage rigoureux (méthode des quotas) validés par des experts en statistiques, anonymisation et agrégation systématiques des données, et neutralité absolue — l'Observatoire ne s'aligne sur aucune formation politique.",
  },
  {
    q: "Les formations sont-elles adaptées aux professionnels en activité ?",
    a: "Oui. Nous proposons un format Executive Education (cours du soir & week-ends) pour les cadres, ainsi qu'un format hybride / en ligne avec une plateforme e-learning sécurisée accessible 24/7.",
  },
  {
    q: "Les diplômes et certifications sont-ils reconnus à l'international ?",
    a: "Inpolitics Institute opère en totale conformité avec les exigences académiques nationales. Nos programmes suivent les standards des plus grands instituts de sciences politiques mondiaux, et des partenariats stratégiques avec des universités étrangères sont en cours de déploiement.",
  },
  {
    q: "Comment fonctionne l'achat et l'accès aux rapports de l'Observatoire ?",
    a: "Deux modes : l'achat à l'unité (téléchargement d'un rapport sectoriel en PDF dynamique) ou l'abonnement annuel (tableau de bord interactif, mises à jour mensuelles, accès Grand Public ou Corporate).",
  },
];

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <div className="inline-flex px-3 py-1.5 rounded-full bg-crimson/10 text-crimson text-[11px] font-semibold tracking-[0.18em] uppercase mb-4">
            07 — Questions fréquentes
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-anthracite leading-tight">
            Tout ce que vous devez savoir.
          </h2>
        </div>

        <div className="divide-y divide-border border-y border-border">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left group"
                >
                  <span
                    className={`text-base md:text-lg font-semibold transition-colors ${
                      isOpen ? "text-crimson" : "text-anthracite group-hover:text-crimson"
                    }`}
                  >
                    {item.q}
                  </span>
                  <span
                    className={`flex-shrink-0 size-9 rounded-full border grid place-items-center transition-all ${
                      isOpen
                        ? "bg-crimson border-crimson text-white rotate-45"
                        : "border-border text-muted-foreground group-hover:border-crimson group-hover:text-crimson"
                    }`}
                  >
                    <Plus className="size-4" />
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-[max-height,opacity] duration-300 ease-out"
                  style={{
                    maxHeight: isOpen ? 400 : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <p className="pb-6 pr-12 text-muted-foreground leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- CONTACT CTA ---------- */
function ContactCta() {
  const phone = "237600000000";
  const wa = `https://wa.me/${phone}?text=${encodeURIComponent(
    "Bonjour, je souhaite recevoir la brochure des programmes Inpolitics Institute."
  )}`;
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="relative overflow-hidden bg-background border border-border rounded-[2.5rem] p-10 md:p-16">
          <div className="absolute -top-32 -right-32 size-[420px] rounded-full bg-crimson/10 blur-3xl" />
          <div className="relative grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7">
              <div className="inline-flex px-3 py-1.5 rounded-full bg-crimson/10 text-crimson text-[11px] font-semibold tracking-[0.18em] uppercase mb-5">
                Rejoindre l'élite
              </div>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight text-anthracite">
                Échangeons directement avec un conseiller d'orientation.
              </h2>
              <p className="mt-5 text-muted-foreground max-w-xl leading-relaxed">
                Brochure des programmes, accès en avant-première aux analyses
                de l'Observatoire Inpolitics et entretien confidentiel — par
                WhatsApp ou par email.
              </p>
            </div>
            <div className="md:col-span-5 flex flex-col gap-3">
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-crimson inline-flex items-center justify-between gap-3 px-6 h-14 rounded-full font-semibold text-sm"
              >
                <span className="flex items-center gap-3">
                  <Phone className="size-4" /> Parler sur WhatsApp
                </span>
                <ArrowRight className="size-4" />
              </a>
              <a
                href="mailto:info@inpolitics-institute.cm?subject=Demande%20de%20brochure"
                className="inline-flex items-center justify-between gap-3 px-6 h-14 rounded-full font-semibold text-sm border border-anthracite/15 text-anthracite hover:bg-anthracite hover:text-white transition"
              >
                <span className="flex items-center gap-3">
                  <Mail className="size-4" /> Demander par email
                </span>
                <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="bg-anthracite text-white/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <img src={logo} alt="InPolitics Institute" className="h-14 w-auto object-contain bg-white rounded-lg p-2" />
          <p className="mt-6 text-sm leading-relaxed max-w-sm">
            L'Institut des Décideurs Publics, de la Diplomatie, de la
            Performance Territoriale et de la Gouvernance Digitale.
            Campus Europe à Gigean (Montpellier Métropole) & Campus Afrique.
          </p>
          <div className="mt-7 space-y-3 text-sm">
            <div className="flex items-start gap-3">
              <MapPin className="size-4 mt-0.5 text-crimson" />
              <span>Rue de l'Herme, 34770 GIGEAN — Montpellier Métropole, France</span>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="size-4 mt-0.5 text-crimson" />
              <a href="tel:+33746440427" className="hover:text-white transition">+33 7 46 44 04 27</a>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="size-4 mt-0.5 text-crimson" />
              <a href="mailto:contact@inpolitics-institute.org" className="hover:text-white transition">
                contact@inpolitics-institute.org
              </a>
            </div>
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="text-xs font-semibold tracking-[0.2em] uppercase text-white mb-5">
            Institut
          </div>
          <ul className="space-y-3 text-sm">
            <li><Link to="/institut/vision-manifeste" className="hover:text-white transition">Vision & Manifeste</Link></li>
            <li><Link to="/institut/campus" className="hover:text-white transition">Nos Campus</Link></li>
            <li><Link to="/institut/diplomatie-territoriale" className="hover:text-white transition">Diplomatie Territoriale</Link></li>
            <li><Link to="/institut/label-haute-integrite" className="hover:text-white transition">Label Haute Intégrité</Link></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <div className="text-xs font-semibold tracking-[0.2em] uppercase text-white mb-5">
            Newsletter
          </div>
          <p className="text-sm mb-4">
            Recevez nos analyses et publications de l'Observatoire.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex border border-white/20 rounded-full overflow-hidden bg-white/5 p-1"
          >
            <input
              type="email"
              required
              placeholder="Votre email"
              className="flex-1 px-4 h-11 bg-transparent text-sm text-white placeholder:text-white/50 focus:outline-none"
            />
            <button className="btn-crimson px-5 text-xs font-semibold uppercase tracking-wide rounded-full">
              S'inscrire
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
          <div>© {new Date().getFullYear()} InPolitics Institute. Tous droits réservés.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">Mentions légales</a>
            <a href="#" className="hover:text-white transition">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
