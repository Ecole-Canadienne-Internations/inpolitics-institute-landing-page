import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Users, Clock, MapPin, Euro, Award, Calendar } from "lucide-react";
import { Header } from "@/components/Header";
import { useContactModal } from "@/components/ContactModal";
import formation1 from "@/assets/inpolitics-institute-formation.jpg";
import formation2 from "@/assets/inpolitics-institute-formation-2.jpg";
import formation3 from "@/assets/inpolitics-institute-formation-3.jpg";
import formation4 from "@/assets/inpolitics-institute-formation-4.jpg";

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
  title: string;
  description: string;
  target: string;
  status: "Inscriptions Ouvertes" | "Places Limitées" | "Nouveau";
  certification?: string;
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
    title: "Gouvernance Publique et Décentralisation : Enjeux, acteurs et territoires",
    description:
      "Maîtrisez les fondamentaux de la gouvernance locale : cadre juridique, décentralisation, pilotage stratégique et relations interinstitutionnelles. Une formation complète pour les élus et cadres territoriaux.",
    target: "Élus, directeurs généraux, cadres territoriaux",
    status: "Inscriptions Ouvertes",
    certification: "Certification RNCP / Qualiopi Répertoire Spécifique (RS)",
    price: "2 400 €",
    nextSession: "Janvier 2027",
    format: "Format Hybride : En ligne + 7 jours d'immersion à Montpellier (France)",
    location: "Montpellier, France",
    image: formation1,
    ctaText: "S'INSCRIRE À CETTE FORMATION",
    ctaStyle: "crimson",
  },
  {
    id: 2,
    title: "Leadership Politique et Communication Publique",
    description:
      "Comment parler pour convaincre et mobiliser ? Maîtrisez les techniques de prise de parole, de gestion de crise et de communication digitale pour les acteurs politiques.",
    target: "Élus, communicants des institutions, porte-paroles, responsables de partis",
    status: "Inscriptions Ouvertes",
    price: "1 200 €",
    nextSession: "Février 2027",
    format: "2 jours — en ligne",
    location: "En ligne",
    image: formation2,
    ctaText: "VOIR LE PROGRAMME",
    ctaStyle: "ghost",
  },
  {
    id: 3,
    title: "Gestion Financière et Budgétaire des Collectivités Territoriales",
    description:
      "Devenez une Mairie Haute Performance. Apprenez à élaborer, exécuter et contrôler un budget communal transparent et performant pour améliorer votre classement, augmenter vos chances de coopération internationale et la recherche de financement.",
    target: "Maires, Receveurs Municipaux, Contrôleurs de gestion",
    status: "Places Limitées",
    price: "2 400 €",
    nextSession: "Janvier 2026",
    format: "Format Hybride : En ligne + 7 jours d'immersion à Montpellier (France)",
    location: "Montpellier, France",
    image: formation3,
    ctaText: "RÉSERVER MA PLACE",
    ctaStyle: "ghost",
  },
  {
    id: 4,
    title: "Protocole, Diplomatie Locale et Coopération Décentralisée",
    description:
      "Attirez les partenariats. Tout ce qu'un élu doit savoir sur le protocole d'État, l'accueil des délégations et le montage de dossiers de coopération internationale.",
    target: "Maires, Chefs de cabinet, Chargés de coopération",
    status: "Nouveau",
    price: "2 400 €",
    nextSession: "Février 2026",
    format: "Format Hybride : En ligne + 7 jours d'immersion à Montpellier (France)",
    location: "Montpellier, France",
    image: formation4,
    ctaText: "DÉCOUVRIR",
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
              l'action. En présentiel à Yaoundé et en ligne. Les inscriptions sont actuellement
              ouvertes.
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
                    {formation.certification && (
                      <span className="inline-flex px-3 py-1 rounded-full bg-white/90 backdrop-blur text-anthracite text-[10px] font-semibold tracking-wide uppercase">
                        <Award className="size-3 mr-1" />
                        Certifié
                      </span>
                    )}
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
                      <Users className="size-4 text-crimson mt-0.5 shrink-0" />
                      <div>
                        <span className="font-semibold text-anthracite">Pour qui ?</span>
                        <p className="text-muted-foreground">{formation.target}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 text-sm">
                      <Clock className="size-4 text-crimson mt-0.5 shrink-0" />
                      <div>
                        <span className="font-semibold text-anthracite">Format :</span>
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
                  </div>

                  {/* CTA */}
                  <div className="pt-5 border-t border-border">
                    {formation.ctaStyle === "crimson" ? (
                      <Link
                        to="/programmes-ouverts"
                        className="btn-crimson w-full justify-center px-5 py-3 rounded-full text-xs font-semibold inline-flex items-center gap-2"
                      >
                        {formation.ctaText}
                        <ArrowRight className="size-3.5" />
                      </Link>
                    ) : (
                      <button
                        onClick={open}
                        className="w-full px-5 py-3 rounded-full text-xs font-semibold inline-flex items-center justify-center gap-2 border border-anthracite/15 text-anthracite hover:bg-anthracite hover:text-white transition-colors"
                      >
                        {formation.ctaText}
                        <ArrowRight className="size-3.5" />
                      </button>
                    )}
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
