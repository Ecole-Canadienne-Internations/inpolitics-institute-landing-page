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
import { permanentProgrammes } from "@/lib/training-catalogue";
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
          "Découvrez les 12 parcours permanents : gouvernance par la data, leadership, finances publiques, diplomatie et transformation numérique. Sessions 2027.",
      },
      { property: "og:title", content: "Programmes Ouverts — InPolitics Institute" },
      {
        property: "og:description",
        content:
          "12 parcours exécutifs hybrides en gouvernance, leadership, finances publiques et diplomatie. Sessions de mars à octobre 2027.",
      },
      { property: "og:url", content: "https://inpoliticsinstitute.com/programmes-ouverts" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://inpoliticsinstitute.com/programmes-ouverts" }],
  }),
});

const programmeImages = [afficheGouvernance, formation2, formation3, afficheProtocole];
const formations = permanentProgrammes.map((programme, index) => ({
  ...programme,
  status: "Inscriptions Ouvertes",
  certification: "Parcours exécutif de formation continue",
  price: "Sur demande (tarifs préférentiels pour les groupes, collectivités territoriales et administrations publiques)",
  location: "Montpellier, France / En ligne",
  image: programmeImages[index % programmeImages.length],
  ctaText: "S'INSCRIRE À CETTE FORMATION",
  ctaStyle: index === 0 ? "crimson" : "ghost",
}));

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
              Découvrez les 12 parcours permanents d’InPolitics Institute : gouvernance par la data, leadership politique, finances publiques, diplomatie territoriale et transformation numérique. Des formations hybrides associant classes virtuelles interactives et immersion en présentiel, conçues pour les élus, cadres publics et décideurs.
            </p>
          </div>

          <p className="text-sm text-muted-foreground mb-8">
            D’autres thématiques sont proposées selon les décisions du conseil académique et à la demande des organisations.
          </p>

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
                      Parcours exécutif
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
                        <span className="font-semibold text-anthracite">Parcours :</span>
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
