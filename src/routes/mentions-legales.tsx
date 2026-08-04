import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/Header";

const SITE = "https://inpoliticsinstitute.com";

export const Route = createFileRoute("/mentions-legales")({
  component: MentionsLegales,
  head: () => ({
    meta: [
      { title: "Mentions Légales | InPolitics Institute" },
      {
        name: "description",
        content:
          "Mentions légales d'InPolitics Institute : cabinet d'études-conseils, de formation et de recherche. Formations hybrides, diplômes français certifiés Qualiopi RS.",
      },
      { property: "og:title", content: "Mentions Légales — InPolitics Institute" },
      { property: "og:description", content: "Informations légales et statut de l'Institut." },
      { property: "og:url", content: `${SITE}/mentions-legales` },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE}/mentions-legales` }],
  }),
});

function MentionsLegales() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Header />
      <main className="pt-32 md:pt-40 pb-24">
        <article className="max-w-3xl mx-auto px-6 lg:px-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase text-muted-foreground hover:text-crimson transition-colors mb-10"
          >
            <ArrowLeft className="size-3.5" /> Retour à l'accueil
          </Link>
          <div className="inline-flex px-3 py-1.5 rounded-full bg-crimson/10 text-crimson text-[11px] font-semibold tracking-[0.18em] uppercase mb-6">
            Informations légales
          </div>
          <h1 className="font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight text-anthracite">
            Mention Légale
          </h1>

          <div className="mt-10 space-y-6 text-[17px] leading-[1.8] text-foreground/85">
            <p>
              InPolitics Institute est un cabinet d'études-conseils, de formation et de recherche. Les
              formations sont hybrides (en présentiel et en ligne) sous forme d'ateliers et séminaires.
              Les diplômes sont français certifiés Qualiopi Répertoire Spécifique (RS).
            </p>
            <p>
              Le campus de l'Institut est établi à Gigean, au sein de Montpellier Métropole (France).
              Ce choix d'implantation répond à une exigence de neutralité : Gigean — Montpellier
              Métropole constitue un lieu neutre sur le plan géopolitique, propice à l'accueil de
              décideurs publics, de délégations et d'experts internationaux dans un cadre d'échange
              impartial, indépendant de toute affiliation partisane ou d'intérêt d'État.
            </p>
            <p>
              L'Institut conduit ses travaux d'études, de recherche et de plaidoyer dans le respect
              des standards d'intégrité et de transparence applicables aux activités de conseil et de
              représentation d'intérêts.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border space-y-2 text-sm text-muted-foreground">
            <p>Rue de l'Herme, 34770 Gigean — Montpellier Métropole, France</p>
            <p>+33 7 46 44 04 27</p>
          </div>
        </article>
      </main>
    </div>
  );
}
