import { createFileRoute } from "@tanstack/react-router";
import campus1 from "@/assets/image-campus1.jpeg";
import campus2 from "@/assets/image-campus2.jpeg";
import campus3 from "@/assets/image-campus3.jpeg";
import campus4 from "@/assets/image-campus4.jpeg";
import { ArrowLeft, Mail } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useContactModal } from "@/components/ContactModal";
import { Header } from "@/components/Header";

export const Route = createFileRoute("/institut/galerie-image")({
  component: GalerieImage,
  head: () => ({
    meta: [
      { title: "Galerie & Image — InPolitics Institute" },
      { name: "description", content: "Immersion visuelle et 3D au cœur du campus de l'Institut. Découvrez nos espaces de formation à Gigean." },
      { property: "og:title", content: "Galerie & Image — InPolitics Institute" },
      { property: "og:description", content: "Immersion visuelle et 3D au cœur du campus de l'Institut." },
      { property: "og:url", content: "https://inpoliticsinstitute.com/institut/galerie-image" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://inpoliticsinstitute.com/institut/galerie-image" }],
  }),
});

const IMAGES = [campus1, campus2, campus3, campus4];

function GalerieImage() {
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

          <div className="inline-flex px-3 py-1.5 rounded-full bg-crimson/10 text-crimson text-[11px] font-semibold tracking-[0.18em] uppercase mb-6">
            L'Institut — Galerie
          </div>

          <h1 className="font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight text-anthracite">
            Galerie & Image
          </h1>

          <div className="mt-8 max-w-3xl">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Bienvenue dans cette <span className="text-foreground font-semibold">immersion 3D</span> au sein du campus de l'InPolitics Institute. À travers cette exposition visuelle, nous vous invitons à découvrir les espaces où se construit la formation des décideurs publics de demain : amphithéâtres, salles de simulation, data labs et lieux de réflexion dédiés à la diplomatie territoriale et à la gouvernance digitale.
            </p>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground leading-relaxed">
              Chaque image capture l'atmosphère et la rigueur républicaine qui animent nos programmes. Nous espérons que cette visite vous donnera un aperçu concret de l'environnement unique dans lequel se déroulent nos séminaires d'immersion et nos cursus hybrides.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {IMAGES.map((src, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl bg-secondary aspect-[4/3]"
              >
                <img
                  src={src}
                  alt={`Campus InPolitics Institute — vue ${idx + 1}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>

          <div className="mt-16 pt-10 border-t border-border flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Une question, un projet, une demande de partenariat ?
            </p>
            <button onClick={open} className="btn-crimson px-6 py-3 rounded-full text-sm font-semibold inline-flex items-center gap-2">
              <Mail className="size-4" /> Contacter l'Institut
            </button>
          </div>
        </article>
      </main>
    </div>
  );
}

