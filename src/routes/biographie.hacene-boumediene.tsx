import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Mail } from "lucide-react";
import { Header } from "@/components/Header";
import { useContactModal } from "@/components/ContactModal";
import teamBoumediene from "@/assets/team-boumediene.jpeg";

const SITE = "https://inpoliticsinstitute.com";
const BIO = `Bloukli Hacene Boumediene est co-fondateur d'inPolitics Institute, où il apporte son expertise unique à l'intersection de l'architecture, de l'urbanisme et de la décision publique. Reconnu pour son exigence par les Architectes des Bâtiments de France (ABF), il a collaboré avec plusieurs architectes français de renom qui ont façonné l'image de Paris à travers ses édifices haussmanniens les plus emblématiques. Cette immersion dans le patrimoine architectural lui a ouvert les portes des innovations urbanistiques. Aujourd'hui, il met cette double culture — tradition haussmannienne et ville de demain — au service des politiques et décideurs publics. Il les accompagne sur les codes stylistiques, l'identité urbaine et les mutations des métropoles contemporaines.`;

export const Route = createFileRoute("/biographie/hacene-boumediene")({
  component: BioPage,
  head: () => ({
    meta: [
      { title: "Bloukli Hacene BOUMEDIENE — Biographie | InPolitics Institute" },
      { name: "description", content: "Biographie de Bloukli Hacene Boumediene, co-fondateur d'InPolitics Institute." },
      { property: "og:title", content: "Bloukli Hacene BOUMEDIENE — InPolitics Institute" },
      { property: "og:description", content: "Co-fondateur d'InPolitics Institute." },
      { property: "og:url", content: `${SITE}/biographie/hacene-boumediene` },
      { property: "og:type", content: "profile" },
    ],
    links: [{ rel: "canonical", href: `${SITE}/biographie/hacene-boumediene` }],
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
                Biographie — Co-fondation
              </div>
              <h1 className="font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight text-anthracite">
                Bloukli Hacene BOUMEDIENE
              </h1>
              <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
                Co-fondateur. Architecte-urbaniste, expert reconnu par les Architectes des Bâtiments de France (ABF).
              </p>
              <div className="mt-10 space-y-5 text-[17px] leading-[1.8] text-foreground/85">
                {BIO.split(/(?<=\. )(?=[A-ZÉÈÀ])/).map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>
            <div className="md:col-span-5 order-1 md:order-2 md:sticky md:top-40">
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl bg-white">
                <img src={teamBoumediene} alt="Bloukli Hacene BOUMEDIENE" className="h-full w-full object-cover" />
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
