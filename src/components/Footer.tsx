import { Link } from "@tanstack/react-router";
import { MapPin, Mail, Phone, Home, Facebook } from "lucide-react";
import logo from "@/assets/inpolitics-insititute-new-logo.png";

export function Footer() {
  return (
    <footer className="bg-anthracite text-white/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <Link to="/" aria-label="Retour à l'accueil">
            <img src={logo} alt="InPolitics Institute" className="h-14 w-auto object-contain bg-white rounded-lg p-2" />
          </Link>
          <p className="mt-6 text-sm leading-relaxed max-w-sm">
            L'Institut des Décideurs Publics, de la Diplomatie, de la
            Performance Territoriale et de la Gouvernance Digitale.
            Sites Europe à Gigean (Montpellier Métropole) & Afrique.
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
              <a href="mailto:contact@inpoliticsinstitute.com" className="hover:text-white transition">
                contact@inpoliticsinstitute.com
              </a>
            </div>
            <div className="flex items-start gap-3">
              <Facebook className="size-4 mt-0.5 text-crimson" />
              <a
                href="https://www.facebook.com/share/18DMZCrkHx/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                Suivez-nous sur Facebook
              </a>
            </div>
          </div>
          <Link
            to="/"
            className="mt-7 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.15em] uppercase text-white hover:text-crimson transition-colors"
          >
            <Home className="size-3.5" /> Retour à l'accueil
          </Link>
        </div>

        <div className="md:col-span-7">
          <div className="text-xs font-semibold tracking-[0.2em] uppercase text-white mb-5">
            Informations légales
          </div>
          <div className="space-y-4 text-sm leading-relaxed text-white/70">
            <p>
              InPolitics Institute est un cabinet d'études-conseils, de formation et de recherche. Les
              formations sont hybrides (en présentiel et en ligne) sous forme d'ateliers et séminaires.
              Les diplômes sont français certifiés Qualiopi Répertoire Spécifique (RS).
            </p>
            <p>
              Le site de l'Institut est établi à Gigean, au sein de Montpellier Métropole (France). Ce choix
              d'implantation répond à une exigence de neutralité : Gigean — Montpellier Métropole constitue un
              lieu neutre sur le plan géopolitique, propice à l'accueil de décideurs publics, de délégations et
              d'experts internationaux dans un cadre d'échange impartial, indépendant de toute affiliation
              partisane ou d'intérêt d'État.
            </p>
            <p>
              L'Institut conduit ses travaux d'études, de recherche et de plaidoyer dans le respect des
              standards d'intégrité et de transparence applicables aux activités de conseil et de représentation
              d'intérêts.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div>© {new Date().getFullYear()} InPolitics Institute. Tous droits réservés.</div>
          <div className="flex items-center gap-6 md:pr-20">
            <Link to="/" className="hover:text-white transition">Accueil</Link>
            <Link to="/mentions-legales" className="hover:text-white transition">Mentions légales</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
