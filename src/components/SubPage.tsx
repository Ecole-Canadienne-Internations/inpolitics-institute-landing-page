import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, Languages, Mail } from "lucide-react";
import { Header } from "@/components/Header";
import { useContactModal } from "@/components/ContactModal";

export function SubPage({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  children?: ReactNode;
}) {
  const { open } = useContactModal();
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
            {eyebrow}
          </div>
          <h1 className="font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight text-anthracite">
            {title}
          </h1>
          {intro && (
            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
              {intro}
            </p>
          )}
          <div className="mt-12 prose-content space-y-10 text-[17px] leading-[1.8] text-foreground/85">
            {children}
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

export function SubPageWithBanner({
  eyebrow,
  title,
  intro,
  children,
  bannerImage,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  children?: ReactNode;
  bannerImage: string;
}) {
  const { open } = useContactModal();
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Header />
      <main className="pt-32 md:pt-40 pb-24">
        <article className="max-w-4xl mx-auto px-6 lg:px-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase text-muted-foreground hover:text-crimson transition-colors mb-10"
          >
            <ArrowLeft className="size-3.5" /> Retour à l'accueil
          </Link>

          <section className="relative w-full h-[320px] md:h-[420px] overflow-hidden mb-12">
            <img
              src={bannerImage}
              alt="Banner"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-14">
              <div className="max-w-3xl mx-auto">
                <div className="inline-flex px-3 py-1.5 rounded-full bg-white/20 backdrop-blur text-white text-[11px] font-semibold tracking-[0.18em] uppercase mb-4">
                  {eyebrow}
                </div>
                <h1 className="font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight text-white">
                  {title}
                </h1>
              </div>
            </div>
          </section>

          {intro && (
            <div className="max-w-3xl mx-auto mb-12">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {intro}
              </p>
            </div>
          )}

          <div className="prose-content space-y-10 text-[17px] leading-[1.8] text-foreground/85">
            {children}
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
