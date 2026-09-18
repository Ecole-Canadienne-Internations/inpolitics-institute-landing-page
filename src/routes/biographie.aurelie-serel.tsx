import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Mail, Quote } from "lucide-react";
import { Header } from "@/components/Header";
import { useContactModal } from "@/components/ContactModal";
import aurelieSerelAsset from "@/assets/aurelie-serel.png.asset.json";

const SITE = "https://inpoliticsinstitute.com";

const EXPERTISE = [
  "Spécialiste de la diplomatie d'influence, de la communication institutionnelle et du conseil en affaires publiques, Aurélie SÉREL évolue au cœur des réseaux de décision francophones et internationaux.",
  "Présidente du groupe GEFI (Groupement Économique Francophone et International) et de l'agence de communication stratégique COM UNIC, elle a structuré un écosystème d'influence de haut niveau dédié à l'accompagnement des dirigeants, des institutions et des grands acteurs économiques. Son action vise à faire émerger des alliances stratégiques majeures et à sécuriser le positionnement des décideurs sur les marchés internationaux.",
  "À la croisée de la politique, de l'économie et des affaires publiques, elle maîtrise les codes des cercles de pouvoir et déploie une ingénierie de l'influence axée sur la création de valeur, l'attractivité territoriale et le partenariat transcontinental Europe–Afrique.",
];

const ROLE = [
  "En tant que Directrice Générale d’InPolitics Institute, Aurélie SÉREL apporte la puissance de frappe institutionnelle et relationnelle du réseau GEFI pour appuyer la vision stratégique et la technopolitique portées par l'institut.",
  "Au sein d'InPolitics Institute, elle supervise l'alignement entre les stratégies d'influence politique, les relations publiques d'excellence et les impératifs de souveraineté et de développement des territoires.",
];

const LEVERS = [
  {
    title: "Ingénierie de l'Influence & Lobbying — GEFI Consulting",
    description:
      "Conseil aux hauts décideurs, mise aux normes internationales des stratégies de communication, défense d'intérêts et déploiement du « faire-savoir » auprès des instances décisionnelles.",
  },
  {
    title: "Réseaux de Cooptation & Diplomatie d'Affaires — GEFI Network",
    description:
      "Mobilisation d'une communauté internationale exclusive réunissant leaders économiques, industriels et décideurs publics, favorisant les synergies de haut niveau et l'ouverture de nouveaux marchés.",
  },
  {
    title: "Relations Institutionnelles Europe–Afrique",
    description:
      "Articulation des réseaux d'influence entre acteurs publics majeurs, investisseurs, bailleurs de fonds et collectivités territoriales pour piloter des projets d'attractivité et de développement stratégique.",
  },
];

export const Route = createFileRoute("/biographie/aurelie-serel")({
  component: BioPage,
  head: () => ({
    meta: [
      { title: "Aurélie SÉREL — Biographie | InPolitics Institute" },
      {
        name: "description",
        content:
          "Biographie d'Aurélie SÉREL, Directrice Générale d'InPolitics Institute et spécialiste de la diplomatie d'influence.",
      },
      { property: "og:title", content: "Aurélie SÉREL — InPolitics Institute" },
      {
        property: "og:description",
        content: "Directrice Générale d'InPolitics Institute, spécialiste de la diplomatie d'influence.",
      },
      { property: "og:url", content: `${SITE}/biographie/aurelie-serel` },
      { property: "og:type", content: "profile" },
    ],
    links: [{ rel: "canonical", href: `${SITE}/biographie/aurelie-serel` }],
  }),
});

function BioPage() {
  const { open } = useContactModal();

  return (
    <div className="min-h-screen bg-white text-foreground">
      <Header />
      <main className="pt-32 md:pt-40 pb-24">
        <article className="max-w-6xl mx-auto px-6 lg:px-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase text-muted-foreground hover:text-crimson transition-colors mb-10"
          >
            <ArrowLeft className="size-3.5" /> Retour à l'accueil
          </Link>

          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-7 order-2 md:order-1">
              <div className="inline-flex px-3 py-1.5 rounded-full bg-crimson/10 text-crimson text-[11px] font-semibold tracking-[0.18em] uppercase mb-6">
                Biographie — Direction Générale
              </div>
              <h1 className="font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight text-anthracite">
                Aurélie SÉREL
              </h1>
              <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
                Directrice Générale d’InPolitics Institute. Diplomatie d'influence, communication
                institutionnelle et conseil en affaires publiques.
              </p>

              <section className="mt-10">
                <h2 className="font-serif text-2xl md:text-3xl text-anthracite">
                  Expertise & Positionnement Stratégique
                </h2>
                <div className="mt-6 space-y-5 text-[17px] leading-[1.8] text-foreground/85">
                  {EXPERTISE.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>

              <blockquote className="my-10 border-l-2 border-crimson pl-6 py-2">
                <Quote className="size-6 text-crimson mb-3" strokeWidth={1.5} />
                <p className="font-serif italic text-2xl leading-relaxed text-anthracite">
                  « Se réunir est un début, rester ensemble est un progrès, travailler ensemble est
                  la réussite. »
                </p>
              </blockquote>

              <section>
                <h2 className="font-serif text-2xl md:text-3xl text-anthracite">
                  Rôle à l'InPolitics Institute & Forces du Groupe GEFI
                </h2>
                <p className="mt-6 text-[17px] leading-[1.8] text-foreground/85">{ROLE[0]}</p>
                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-crimson">
                  Trois leviers majeurs
                </p>
                <div className="mt-5 space-y-5">
                  {LEVERS.map((lever) => (
                    <div key={lever.title} className="border-l-2 border-border pl-5">
                      <h3 className="font-semibold text-anthracite">{lever.title}</h3>
                      <p className="mt-2 text-[16px] leading-relaxed text-foreground/80">
                        {lever.description}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="mt-7 text-[17px] leading-[1.8] text-foreground/85">{ROLE[1]}</p>
              </section>
            </div>

            <div className="md:col-span-5 order-1 md:order-2 md:sticky md:top-40">
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl bg-white">
                <img
                  src={aurelieSerelAsset.url}
                  alt="Aurélie SÉREL, Directrice Générale d’InPolitics Institute"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
          </div>

          <div className="mt-16 pt-10 border-t border-border flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <p className="text-sm text-muted-foreground">Échanger directement avec la Direction</p>
            <button
              onClick={open}
              className="btn-crimson px-6 py-3 rounded-full text-sm font-semibold inline-flex items-center gap-2"
            >
              <Mail className="size-4" /> Contacter l'Institut
            </button>
          </div>
        </article>
      </main>
    </div>
  );
}