import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { SubPageWithBanner } from "@/components/SubPage";
import { useContactModal } from "@/components/ContactModal";
import { ArrowLeft } from "lucide-react";
import banner from "@/assets/banner1.png";

export const Route = createFileRoute("/institut/vision-manifeste")({
  component: Manifeste,
  head: () => ({
    meta: [
      { title: "Vision & Manifeste — InPolitics Institute" },
      { name: "description", content: "Le manifeste fondateur d'Arnaud SIGHANO, Directeur Associé d'InPolitics Institute." },
      { property: "og:title", content: "Vision & Manifeste — InPolitics Institute" },
      { property: "og:description", content: "Le manifeste fondateur d'Arnaud SIGHANO." },
      { property: "og:url", content: "https://inpoliticsinstitute.com/institut/vision-manifeste" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://inpoliticsinstitute.com/institut/vision-manifeste" }],
  }),
});

function Manifeste() {
  const { open } = useContactModal();
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Header />
      <main className="pt-32 md:pt-40 pb-24">
        <article className="max-w-4xl mx-auto px-6 lg:px-10">
          <Link to="/" className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase text-muted-foreground hover:text-crimson transition-colors mb-10">
            <ArrowLeft className="size-3.5" /> Retour à l'accueil
          </Link>

          <section className="relative w-full h-[320px] md:h-[420px] overflow-hidden mb-12">
            <img src={banner} alt="Vision & Manifeste" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-14">
              <div className="max-w-3xl mx-auto">
                <div className="inline-flex px-3 py-1.5 rounded-full bg-white/20 backdrop-blur text-white text-[11px] font-semibold tracking-[0.18em] uppercase mb-4">
                  L'Institut — Manifeste
                </div>
                <h1 className="font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight text-white">
                  Vision & Manifeste
                </h1>
              </div>
            </div>
          </section>

          <p className="text-sm uppercase tracking-[0.22em] text-muted-foreground mb-6">
            Par Arnaud SIGHANO — Directeur Associé
          </p>

          <div className="mt-8 space-y-7 font-serif text-[20px] md:text-[22px] leading-[1.75] text-foreground/90">
            <p className="first-letter:font-serif first-letter:text-[5.5rem] first-letter:leading-[0.85] first-letter:float-left first-letter:mr-3 first-letter:mt-2 first-letter:text-crimson first-letter:font-bold">
              Bienvenue sur la plateforme officielle d'InPolitics Institute. À l'ère des mutations géopolitiques majeures et de l'accélération numérique, la gestion des affaires publiques et le développement économique exigent des paradigmes entièrement renouvelés.
            </p>
            <p>
              Les territoires, qu'ils soient en Europe ou au cœur de l'Afrique, font face aux mêmes exigences de souveraineté, d'intégrité et de performance. C'est dans cette conviction qu'est né InPolitics Institute : bâtir un pont d'excellence entre les deux rives, former une élite publique capable de penser stratégiquement, d'agir éthiquement et de servir avec rigueur.
            </p>
            <p>
              Notre Institut n'est ni un think-tank de plus, ni une simple école de formation. C'est un écosystème intégré — académie, observatoire, cabinet d'influence et incubateur de solutions de gouvernance digitale — au service exclusif des décideurs publics et privés qui veulent transformer leurs territoires.
            </p>
            <p>
              Depuis nos campus de Gigean (Montpellier Métropole) et nos pôles africains, nous accompagnons des États, des collectivités, des entreprises et des diasporas dans la conduite de leurs ambitions. Notre méthode est simple : haut niveau d'exigence académique, immersion terrain, et un réseau international d'experts au plus haut niveau.
            </p>
            <p>
              Rejoindre InPolitics, c'est faire le choix de l'élite républicaine, de l'intégrité comme socle, et de l'influence comme discipline. Bienvenue dans la maison de ceux qui transforment.
            </p>
            <p className="not-italic font-sans text-sm text-muted-foreground pt-6 border-t border-border">
              — Arnaud SIGHANO, Fondateur & Directeur Associé d'InPolitics Institute
            </p>
          </div>

          <div className="mt-16 pt-10 border-t border-border flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <p className="text-sm text-muted-foreground">Échanger directement avec la Direction</p>
            <button onClick={open} className="btn-crimson px-6 py-3 rounded-full text-sm font-semibold">
              📩 Contacter l'Institut
            </button>
          </div>
        </article>
      </main>
    </div>
  );
}
