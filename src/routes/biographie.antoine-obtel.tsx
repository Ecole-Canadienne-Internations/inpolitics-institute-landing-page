import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Mail } from "lucide-react";
import { Header } from "@/components/Header";
import { useContactModal } from "@/components/ContactModal";
import teamObtel from "@/assets/team-obtel.jpeg";

const SITE = "https://inpoliticsinstitute.com";
const BIO = `Antoine OBTEL est Directeur Associé d'inPolitics Institute, où il apporte une expertise nourrie par la recherche universitaire et l'expérience de terrain. Étudiant-chercheur en Histoire et Relations Internationales, il se forme au sein de trois institutions d'excellence : Université Paris Cité, Sorbonne Université et Université Paris-Panthéon-Assas. Son parcours est marqué par un engagement fort dans les réseaux diplomatiques : Trésorier des Alumni de l'Académie Diplomatique d'Été, il évolue au contact direct des décideurs politiques européens. Réserviste du Ministère de l'Europe et des Affaires étrangères et Membre du Conseil d'administration de l'Association France-Canada, il conjugue analyse académique et compréhension pratique des enjeux internationaux.`;

export const Route = createFileRoute("/biographie/antoine-obtel")({
  component: BioPage,
  head: () => ({
    meta: [
      { title: "Antoine OBTEL — Biographie | InPolitics Institute" },
      { name: "description", content: "Biographie d'Antoine OBTEL, Directeur Associé d'InPolitics Institute." },
      { property: "og:title", content: "Antoine OBTEL — InPolitics Institute" },
      { property: "og:description", content: "Directeur Associé d'InPolitics Institute." },
      { property: "og:url", content: `${SITE}/biographie/antoine-obtel` },
      { property: "og:type", content: "profile" },
    ],
    links: [{ rel: "canonical", href: `${SITE}/biographie/antoine-obtel` }],
  }),
});

function BioPage() {
  const { open } = useContactModal();
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Header />
      <main className="pt-32 md:pt-40 pb-24">
        <article className="max-w-6xl mx-auto px-6 lg:px-10">
          <Link to="/" className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase text-muted-foreground hover:text-crimson transition-colors mb-10">
            <ArrowLeft className="size-3.5" /> Retour à l'accueil
          </Link>
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-7 order-2 md:order-1">
              <div className="inline-flex px-3 py-1.5 rounded-full bg-crimson/10 text-crimson text-[11px] font-semibold tracking-[0.18em] uppercase mb-6">
                Biographie — Direction
              </div>
              <h1 className="font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight text-anthracite">
                Antoine OBTEL
              </h1>
              <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
                Directeur Associé. Chercheur en Histoire et Relations Internationales. Réserviste du Quai d'Orsay.
              </p>
              <div className="mt-10 space-y-5 text-[17px] leading-[1.8] text-foreground/85">
                {BIO.split(/(?<=\. )(?=[A-ZÉÈÀ])/).map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>
            <div className="md:col-span-5 order-1 md:order-2 md:sticky md:top-40">
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl bg-white">
                <img src={teamObtel} alt="Antoine OBTEL" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
          <div className="mt-16 pt-10 border-t border-border flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <p className="text-sm text-muted-foreground">Échanger directement avec la Direction</p>
            <button onClick={open} className="btn-crimson px-6 py-3 rounded-full text-sm font-semibold inline-flex items-center gap-2">
              <Mail className="size-4" /> Contacter l'Institut
            </button>
          </div>
        </article>
      </main>
    </div>
  );
}
