import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Users,
  Clock,
  MapPin,
  Euro,
  Award,
  Calendar,
  Target,
  Briefcase,
} from "lucide-react";
import { Header } from "@/components/Header";
import { useContactModal } from "@/components/ContactModal";
import afficheGouvernance from "@/assets/affiche-level-up-governance.png";
import afficheProtocole from "@/assets/affiche-diplomatie-locale.png";
import formation2 from "@/assets/inpolitics-institute-formation-2.jpg";
import formation3 from "@/assets/inpolitics-institute-formation-3.jpg";

export const Route = createFileRoute("/programmes-ouverts")({
  component: ProgrammesOuverts,
  head: () => ({
    meta: [
      { title: "Programmes Ouverts — InPolitics Institute" },
      {
        name: "description",
        content:
          "Découvrez nos formations certifiantes en gouvernance publique, leadership politique, gestion budgétaire et protocole diplomatique. Inscriptions ouvertes.",
      },
      { property: "og:title", content: "Programmes Ouverts — InPolitics Institute" },
      {
        property: "og:description",
        content:
          "Formations certifiantes en gouvernance publique, leadership politique, gestion budgétaire et protocole diplomatique.",
      },
      { property: "og:url", content: "https://inpoliticsinstitute.com/programmes-ouverts" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://inpoliticsinstitute.com/programmes-ouverts" }],
  }),
});

type Formation = {
  id: number;
  slug: string;
  title: string;
  description: string;
  objectives: string;
  target: string;
  debouches: string;
  status: "Inscriptions Ouvertes" | "Places Limitées" | "Nouveau";
  certification: string;
  price: string;
  nextSession: string;
  format: string;
  location: string;
  image: string;
  ctaText: string;
  ctaStyle: "crimson" | "ghost";
};

const formations: Formation[] = [
  {
    id: 1,
    slug: "gouvernance",
    title: "Gouvernance Publique et Décentralisation : Enjeux, acteurs et territoires",
    description:
      "Compréhension approfondie des mécanismes de gouvernance territoriale, de la décentralisation et du management public.",
    objectives:
      "Principes de la gouvernance contemporaine, cadres juridiques, rôle des collectivités, outils de management public et participation citoyenne.",
    target:
      "Cadres des administrations, élus territoriaux, professionnels du développement local, consultants, membres d'ONG",
    debouches:
      "Responsable de collectivité, Chargé de mission en gouvernance, Conseiller en politique publique",
    status: "Inscriptions Ouvertes",
    certification:
      "Certificat reconnu à l'international · Certification française RNCP / Qualiopi Répertoire Spécifique (RS)",
    price: "Sur demande (tarif préférentiel groupes et administrations)",
    nextSession: "Janvier 2027",
    format: "Format Hybride — 32 heures sur 6 à 7 semaines + 1 semaine à Montpellier",
    location: "Montpellier, France",
    image: afficheGouvernance,
    ctaText: "S'INSCRIRE À CETTE FORMATION",
    ctaStyle: "crimson",
  },
  {
    id: 2,
    slug: "leadership",
    title: "Leadership Politique et Communication Publique",
    description:
      "Immersion dans les techniques modernes de communication politique et institutionnelle et dans les pratiques de leadership.",
    objectives:
      "Compétences en leadership, persuasion, gestion de crise, médias numériques et stratégie de communication.",
    target: "Élus, porte-paroles, communicants institutionnels, journalistes, conseillers en stratégie",
    debouches:
      "Conseiller en communication politique, Responsable communication institutionnelle",
    status: "Inscriptions Ouvertes",
    certification: "Certification française RNCP / Qualiopi Répertoire Spécifique (RS)",
    price: "Sur demande",
    nextSession: "Février 2027",
    format: "Format Hybride / En ligne — 28 heures sur 5 à 6 semaines + 1 semaine à Montpellier",
    location: "Montpellier, France / En ligne",
    image: formation2,
    ctaText: "VOIR LE PROGRAMME / S'INSCRIRE",
    ctaStyle: "ghost",
  },
  {
    id: 3,
    slug: "finances",
    title: "Gestion Financière et Budgétaire des Collectivités Territoriales",
    description:
      "Maîtrise des outils financiers et budgétaires pour une gestion moderne des collectivités locales : transparence, efficacité, optimisation.",
    objectives:
      "Élaborer et exécuter un budget communal, conduire un audit interne, mobiliser les financements et bâtir des partenariats internationaux.",
    target: "Maires, receveurs municipaux, contrôleurs de gestion, cadres financiers",
    debouches: "Responsable financier territorial, Auditeur interne des collectivités",
    status: "Places Limitées",
    certification: "Certification française RNCP / Qualiopi Répertoire Spécifique (RS)",
    price: "Sur demande",
    nextSession: "Janvier 2027",
    format: "Format Hybride — 35 heures sur 6 à 7 semaines + 1 semaine à Montpellier",
    location: "Montpellier, France",
    image: formation3,
    ctaText: "RÉSERVER MA PLACE",
    ctaStyle: "ghost",
  },
  {
    id: 4,
    slug: "protocole",
    title: "Protocole, Diplomatie Locale et Coopération Décentralisée",
    description:
      "Règles du protocole institutionnel et mécanismes de coopération internationale des collectivités territoriales.",
    objectives:
      "Protocole d'État, accueil des délégations, diplomatie locale et montage de projets de coopération décentralisée.",
    target:
      "Maires, chefs de cabinet, chargés de coopération, responsables des relations internationales",
    debouches: "Conseiller en coopération décentralisée, Responsable protocole",
    status: "Nouveau",
    certification: "Certification française RNCP / Qualiopi Répertoire Spécifique (RS)",
    price: "Sur demande",
    nextSession: "Février 2027",
    format: "Format Hybride — 30 heures sur 5 à 6 semaines + 1 semaine à Montpellier",
    location: "Montpellier, France",
    image: afficheProtocole,
    ctaText: "DÉCOUVRIR & S'INSCRIRE",
    ctaStyle: "ghost",
  },
];

function ProgrammesOuverts() {
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
            ← Retour à l'accueil
          </Link>

          {/* Page Header */}
          <div className="mb-16">
            <div className="inline-flex px-3 py-1.5 rounded-full bg-crimson/10 text-crimson text-[11px] font-semibold tracking-[0.18em] uppercase mb-6">
              01 — FORMATIONS ET RENFORCEMENT DE CAPACITÉS
            </div>
            <h1 className="font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight text-anthracite">
              Nos Programmes Ouverts
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl">
              Formez-vous à l'excellence de la gouvernance locale. InPolitics Institute vous ouvre
              les portes de ses programmes de renforcement de capacités. Des formations pratiques,
              certifiantes et dispensées par des experts de terrain, conçues pour les élus, cadres
              communaux, partis politiques et leaders de la société civile qui veulent passer à
              l'action. En présentiel à Montpellier, dans nos sites en Afrique, et en ligne. Les
              inscriptions sont actuellement ouvertes.
            </p>
          </div>

          {/* Formations Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {formations.map((formation) => (
              <div
                key={formation.id}
                className="bg-background border border-border rounded-3xl overflow-hidden flex flex-col hover:border-crimson/40 transition-colors"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={formation.image}
                    alt={formation.title}
                    loading="lazy"
                    className="h-full w-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                    <span className="inline-flex px-3 py-1 rounded-full bg-crimson text-white text-[10px] font-semibold tracking-wide uppercase">
                      {formation.status}
                    </span>
                    <span className="inline-flex px-3 py-1 rounded-full bg-white/90 backdrop-blur text-anthracite text-[10px] font-semibold tracking-wide uppercase">
                      <Award className="size-3 mr-1" />
                      Certifié
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-anthracite leading-snug mb-3">
                    {formation.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                    {formation.description}
                  </p>

                  {/* Info Cards */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3 text-sm">
                      <Target className="size-4 text-crimson mt-0.5 shrink-0" />
                      <div>
                        <span className="font-semibold text-anthracite">Objectifs :</span>
                        <p className="text-muted-foreground">{formation.objectives}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 text-sm">
                      <Users className="size-4 text-crimson mt-0.5 shrink-0" />
                      <div>
                        <span className="font-semibold text-anthracite">Pour qui ?</span>
                        <p className="text-muted-foreground">{formation.target}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 text-sm">
                      <Award className="size-4 text-crimson mt-0.5 shrink-0" />
                      <div>
                        <span className="font-semibold text-anthracite">Certifications :</span>
                        <p className="text-muted-foreground">{formation.certification}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 text-sm">
                      <Clock className="size-4 text-crimson mt-0.5 shrink-0" />
                      <div>
                        <span className="font-semibold text-anthracite">Durée & Format :</span>
                        <p className="text-muted-foreground">{formation.format}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 text-sm">
                      <MapPin className="size-4 text-crimson mt-0.5 shrink-0" />
                      <div>
                        <span className="font-semibold text-anthracite">Lieu :</span>
                        <p className="text-muted-foreground">{formation.location}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 text-sm">
                      <Calendar className="size-4 text-crimson mt-0.5 shrink-0" />
                      <div>
                        <span className="font-semibold text-anthracite">Prochaine session :</span>
                        <p className="text-muted-foreground">{formation.nextSession}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 text-sm">
                      <Euro className="size-4 text-crimson mt-0.5 shrink-0" />
                      <div>
                        <span className="font-semibold text-anthracite">Prix :</span>
                        <p className="text-muted-foreground">{formation.price}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 text-sm">
                      <Briefcase className="size-4 text-crimson mt-0.5 shrink-0" />
                      <div>
                        <span className="font-semibold text-anthracite">Débouchés :</span>
                        <p className="text-muted-foreground">{formation.debouches}</p>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="pt-5 border-t border-border">
                    <Link
                      to="/schools-of-politics/apply"
                      search={{ program: formation.slug }}
                      className={
                        formation.ctaStyle === "crimson"
                          ? "btn-crimson w-full justify-center px-5 py-3 rounded-full text-xs font-semibold inline-flex items-center gap-2"
                          : "w-full px-5 py-3 rounded-full text-xs font-semibold inline-flex items-center justify-center gap-2 border border-anthracite/15 text-anthracite hover:bg-anthracite hover:text-white transition-colors"
                      }
                    >
                      {formation.ctaText}
                      <ArrowRight className="size-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 pt-10 border-t border-border">
            <div className="bg-anthracite rounded-3xl p-8 md:p-12 text-center">
              <h3 className="font-serif text-2xl md:text-3xl text-white mb-4">
                Vous ne trouvez pas la formation qu'il vous faut ?
              </h3>
              <p className="text-white/70 max-w-2xl mx-auto mb-6">
                Notre équipe conçoit des formations sur-mesure pour votre Mairie ou votre
                institution. Contactez-nous.
              </p>
              <button
                onClick={open}
                className="btn-crimson px-8 py-3.5 rounded-full text-sm font-semibold inline-flex items-center gap-2"
              >
                DEMANDER UN DEVIS
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>

          {/* Contact Footer */}
          <div className="mt-16 pt-10 border-t border-border flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Une question, un projet, une demande de partenariat ?
            </p>
            <button
              onClick={open}
              className="btn-crimson px-6 py-3 rounded-full text-sm font-semibold inline-flex items-center gap-2"
            >
              Contacter l'Institut
            </button>
          </div>
        </article>
      </main>
    </div>
  );
}
