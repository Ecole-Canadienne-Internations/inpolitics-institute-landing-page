import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Mail } from "lucide-react";
import { Header } from "@/components/Header";
import { useContactModal } from "@/components/ContactModal";
import teamToukea from "@/assets/Dr-Dieudonné-Toukea.jpeg";

const SITE = "https://inpoliticsinstitute.com";
const BIO = `Docteur en Études Internationales, il est enseignant-chercheur en Science Politique à l’Université de Dschang au Cameroun. Ses travaux portent sur la diplomatie climatique, la transformation des villes, la gouvernance environnementale et l’infrapolitique des communautés locales face aux technologies numériques de surveillance. Certifié SETYM en gestion de projet, il accompagne des institutions gouvernementales et des ONG en tant que consultant sur des projets de développement local, de formation, d’assainissement urbain et de gestion des données publiques.`;

export const Route = createFileRoute("/biographie/dieudonne-toukea")({
  component: BioPage,
  head: () => ({
    meta: [
      { title: "Dr Dieudonné TOUKEA — Biographie | InPolitics Institute" },
      { name: "description", content: "Biographie du Dr Dieudonné TOUKEA, Directeur Afrique d'InPolitics Institute." },
      { property: "og:title", content: "Dr Dieudonné TOUKEA — InPolitics Institute" },
      { property: "og:description", content: "Directeur Afrique d'InPolitics Institute." },
      { property: "og:url", content: `${SITE}/biographie/dieudonne-toukea` },
      { property: "og:type", content: "profile" },
    ],
    links: [{ rel: "canonical", href: `${SITE}/biographie/dieudonne-toukea` }],
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
                Dr Dieudonné TOUKEA
              </h1>
              <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
                Directeur Afrique d'Inpolitics Institute. Docteur en Études Internationales, enseignant-chercheur et consultant en gestion de projet.
              </p>
              <div className="mt-10 space-y-5 text-[17px] leading-[1.8] text-foreground/85">
                {BIO.split(/(?<=\. )(?=[A-ZÉÈÀ])/).map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>
            <div className="md:col-span-5 order-1 md:order-2 md:sticky md:top-40">
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl bg-white">
                <img src={teamToukea} alt="Dr Dieudonné TOUKEA" className="h-full w-full object-cover" />
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
