import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Mail } from "lucide-react";
import { Header } from "@/components/Header";
import { useContactModal } from "@/components/ContactModal";
import arnaudSighanoImage from "@/assets/arnaud-sighano-image.jpeg";

const SITE = "https://inpoliticsinstitute.com";
const BIO_PARAGRAPHS: string[] = [
  "Arnaud SIGHANO est un acteur reconnu de la diplomatie d’influence et des relations internationales. Fondateur et Directeur Associé d’inPolitics Institute, il accompagne les États, acteurs politiques et décideurs publics dans l’élaboration de stratégies d’influence internationale.",
  "Son approche s’appuie sur les leviers du soft power, avec une expertise singulière en Sport Diplomatie. Diplômé de l’Université de Picardie Jules Verne et formé à la diplomatie à l’Université Jean Moulin Lyon 3, il allie rigueur académique et action de terrain.",
  "Engagé pour le leadership africain, Arnaud est alumni du programme créé en 2010 par l'ancien Président Américain Barack Obama, le programme Young African Leaders Initiative (YALI). En 2021, Arnaud a fondé le YALI Sport Africa, réseau thématique dédié au sport comme vecteur d’influence et de développement.",
  "Éducateur dans l’âme, il est également Directeur de l’École canadienne Inter-Nations.",
];

export const Route = createFileRoute("/biographie/arnaud-sighano")({
  component: BioPage,
  head: () => ({
    meta: [
      { title: "Arnaud SIGHANO — Biographie | InPolitics Institute" },
      { name: "description", content: "Biographie d'Arnaud SIGHANO, Fondateur & Directeur Associé d'InPolitics Institute." },
      { property: "og:title", content: "Arnaud SIGHANO — InPolitics Institute" },
      { property: "og:description", content: "Acteur reconnu de la diplomatie d'influence et des relations internationales." },
      { property: "og:url", content: `${SITE}/biographie/arnaud-sighano` },
      { property: "og:type", content: "profile" },
    ],
    links: [{ rel: "canonical", href: `${SITE}/biographie/arnaud-sighano` }],
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
                Arnaud SIGHANO
              </h1>
              <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
                Fondateur & Directeur Associé d'InPolitics Institute. Diplomatie d'influence, relations internationales, Sport Diplomatie.
              </p>
              <div className="mt-10 space-y-5 text-[17px] leading-[1.8] text-foreground/85">
                {BIO_PARAGRAPHS.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>
            <div className="md:col-span-5 order-1 md:order-2 md:sticky md:top-40">
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl bg-white">
                <img src={arnaudSighanoImage} alt="Arnaud SIGHANO" className="h-full w-full object-cover" />
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