import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Header } from "@/components/Header";
import { ArrowLeft, Check, Send, Loader2 } from "lucide-react";
import banner from "@/assets/banner4.png";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const Route = createFileRoute("/schools-of-politics/apply")({
  component: Apply,
  validateSearch: (search: Record<string, unknown>) => ({
    program: typeof search.program === "string" ? search.program : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Candidature — School of Politics — InPolitics Institute" },
      {
        name: "description",
        content:
          "Déposez votre candidature à la School of Politics de InPolitics Institute : formulaire en ligne, programmes certifiants pour élus et cadres publics.",
      },
      { property: "og:title", content: "Candidature — School of Politics — InPolitics Institute" },
      {
        property: "og:description",
        content: "Formulaire de candidature — School of Politics, InPolitics Institute.",
      },
      { property: "og:url", content: "https://inpoliticsinstitute.com/schools-of-politics/apply" },
    ],
    links: [
      { rel: "canonical", href: "https://inpoliticsinstitute.com/schools-of-politics/apply" },
    ],
  }),
});

const applicationSchema = z.object({
  firstName: z.string().min(2, "Le prénom est requis"),
  lastName: z.string().min(2, "Le nom est requis"),
  email: z.string().email("Adresse email valide requise"),
  phone: z.string().min(6, "Le numéro de téléphone est requis"),
  country: z.string().min(2, "Le pays de résidence est requis"),
  currentRole: z.string().optional(),
  program: z.string().min(1, "Merci de sélectionner une formation"),
  motivation: z.string().min(50, "Merci d'écrire au moins 50 caractères de motivation"),
  linkedin: z.string().optional(),
  hearAbout: z.string().optional(),
});

type ApplicationForm = z.infer<typeof applicationSchema>;

export const programOptions = [
  {
    value: "gouvernance",
    label: "Gouvernance Publique et Décentralisation : Enjeux, acteurs et territoires",
  },
  { value: "leadership", label: "Leadership Politique et Communication Publique" },
  {
    value: "finances",
    label: "Gestion Financière et Budgétaire des Collectivités Territoriales",
  },
  { value: "protocole", label: "Protocole, Diplomatie Locale et Coopération Décentralisée" },
];

const hearOptions = [
  { value: "reseaux-sociaux", label: "Réseaux sociaux" },
  { value: "site-web", label: "Site web / Moteur de recherche" },
  { value: "recommandation", label: "Recommandation / Bouche-à-oreille" },
  { value: "institution", label: "Partenaire institutionnel" },
  { value: "evenement", label: "Événement / Conférence" },
  { value: "email", label: "Campagne email" },
  { value: "autre", label: "Autre" },
];

const inputClass =
  "flex h-11 w-full rounded-lg border border-input bg-transparent px-4 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring placeholder:text-muted-foreground";

function Apply() {
  const { program: programParam } = Route.useSearch();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const preselected = programOptions.find((p) => p.value === programParam)?.value ?? "";

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ApplicationForm>({
    resolver: zodResolver(applicationSchema),
    defaultValues: { program: preselected },
  });

  const onSubmit = async (values: ApplicationForm) => {
    setSubmitting(true);
    const label = programOptions.find((p) => p.value === values.program)?.label ?? values.program;
    const { error } = await supabase.from("school_applications").insert({
      first_name: values.firstName,
      last_name: values.lastName,
      email: values.email,
      phone: values.phone,
      country: values.country,
      program: label,
      current_role_title: values.currentRole?.trim() || null,
      motivation: values.motivation,
      linkedin: values.linkedin?.trim() || null,
      hear_about: values.hearAbout || null,
    });
    setSubmitting(false);
    if (error) {
      toast.error("L'envoi a échoué. Merci de réessayer.");
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-white text-foreground">
        <Header />
        <main className="pt-32 md:pt-40 pb-24">
          <div className="max-w-lg mx-auto px-6 lg:px-10 text-center">
            <div className="flex items-center justify-center size-16 rounded-full bg-crimson/10 mx-auto mb-6">
              <Check className="size-8 text-crimson" />
            </div>
            <h1 className="font-serif text-3xl md:text-4xl tracking-tight text-anthracite mb-4">
              Candidature envoyée
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Merci de l'intérêt que vous portez à la School of Politics. Notre équipe des
              admissions étudie votre dossier et vous recontacte sous 48 à 72 heures.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border border-input hover:bg-accent transition-colors"
              >
                <ArrowLeft className="size-4" /> Retour à l'accueil
              </Link>
              <button
                onClick={() => {
                  setSubmitted(false);
                  reset();
                }}
                className="btn-crimson px-6 py-3 rounded-full text-sm font-semibold"
              >
                Déposer une autre candidature
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-foreground">
      <Header />
      <main className="pt-32 md:pt-40 pb-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase text-muted-foreground hover:text-crimson transition-colors mb-10"
          >
            <ArrowLeft className="size-3.5" /> Retour à l'accueil
          </Link>

          <section className="relative w-full h-[320px] md:h-[420px] overflow-hidden mb-12">
            <img src={banner} alt="School of Politics" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-14">
              <div className="max-w-3xl mx-auto">
                <div className="inline-flex px-3 py-1.5 rounded-full bg-white/20 backdrop-blur text-white text-[11px] font-semibold tracking-[0.18em] uppercase mb-4">
                  School of Politics
                </div>
                <h1 className="font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight text-white">
                  Formulaire de Candidature
                </h1>
              </div>
            </div>
          </section>

          <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
            Rejoignez l'élite des leaders et décideurs publics de demain. Complétez votre dossier en
            ligne.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8" noValidate>
            {/* Identité */}
            <fieldset>
              <legend className="text-sm font-semibold uppercase tracking-[0.15em] text-anthracite mb-5 pb-2 border-b border-border w-full">
                Identité
              </legend>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-anthracite">
                    Prénom <span className="text-crimson">*</span>
                  </label>
                  <input {...register("firstName")} placeholder="ex. Jean" className={inputClass} />
                  {errors.firstName && (
                    <p className="text-xs text-crimson mt-1">{errors.firstName.message}</p>
                  )}
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-anthracite">
                    Nom <span className="text-crimson">*</span>
                  </label>
                  <input {...register("lastName")} placeholder="ex. Dupont" className={inputClass} />
                  {errors.lastName && (
                    <p className="text-xs text-crimson mt-1">{errors.lastName.message}</p>
                  )}
                </div>
              </div>
            </fieldset>

            {/* Coordonnées */}
            <fieldset>
              <legend className="text-sm font-semibold uppercase tracking-[0.15em] text-anthracite mb-5 pb-2 border-b border-border w-full">
                Coordonnées
              </legend>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-anthracite">
                    Adresse Email <span className="text-crimson">*</span>
                  </label>
                  <input
                    type="email"
                    {...register("email")}
                    placeholder="jean.dupont@email.com"
                    className={inputClass}
                  />
                  {errors.email && (
                    <p className="text-xs text-crimson mt-1">{errors.email.message}</p>
                  )}
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-anthracite">
                    Numéro de Téléphone / WhatsApp <span className="text-crimson">*</span>
                  </label>
                  <input
                    type="tel"
                    {...register("phone")}
                    placeholder="+33 7 46 44 04 27"
                    className={inputClass}
                  />
                  {errors.phone && (
                    <p className="text-xs text-crimson mt-1">{errors.phone.message}</p>
                  )}
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-anthracite">
                    Pays de résidence <span className="text-crimson">*</span>
                  </label>
                  <input {...register("country")} placeholder="ex. France" className={inputClass} />
                  {errors.country && (
                    <p className="text-xs text-crimson mt-1">{errors.country.message}</p>
                  )}
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-anthracite">
                    Fonction / Institution actuelle
                  </label>
                  <input
                    {...register("currentRole")}
                    placeholder="ex. Maire, Commune de …"
                    className={inputClass}
                  />
                </div>
              </div>
            </fieldset>

            {/* Programme */}
            <fieldset>
              <legend className="text-sm font-semibold uppercase tracking-[0.15em] text-anthracite mb-5 pb-2 border-b border-border w-full">
                Programme
              </legend>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-anthracite">
                  Programme / Formation souhaitée <span className="text-crimson">*</span>
                </label>
                <select
                  {...register("program")}
                  className="flex h-11 w-full rounded-lg border border-input bg-transparent px-4 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring cursor-pointer"
                >
                  <option value="">Sélectionnez une formation</option>
                  {programOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                {errors.program && (
                  <p className="text-xs text-crimson mt-1">{errors.program.message}</p>
                )}
              </div>
            </fieldset>

            {/* Motivation */}
            <fieldset>
              <legend className="text-sm font-semibold uppercase tracking-[0.15em] text-anthracite mb-5 pb-2 border-b border-border w-full">
                Motivation
              </legend>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-anthracite">
                  Message / Motivation <span className="text-crimson">*</span>
                </label>
                <textarea
                  {...register("motivation")}
                  rows={5}
                  placeholder="Présentez votre parcours, vos objectifs et ce que vous attendez de ce programme…"
                  className="flex w-full rounded-lg border border-input bg-transparent px-4 py-3 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring placeholder:text-muted-foreground resize-y min-h-[120px]"
                />
                {errors.motivation && (
                  <p className="text-xs text-crimson mt-1">{errors.motivation.message}</p>
                )}
              </div>
            </fieldset>

            {/* Informations complémentaires */}
            <fieldset>
              <legend className="text-sm font-semibold uppercase tracking-[0.15em] text-anthracite mb-5 pb-2 border-b border-border w-full">
                Informations complémentaires
              </legend>
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-anthracite">
                    Profil LinkedIn (facultatif)
                  </label>
                  <input
                    {...register("linkedin")}
                    placeholder="https://linkedin.com/in/votreprofil"
                    className={inputClass}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-anthracite">
                    Comment avez-vous connu l'Institut ?
                  </label>
                  <select
                    {...register("hearAbout")}
                    className="flex h-11 w-full rounded-lg border border-input bg-transparent px-4 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring cursor-pointer"
                    defaultValue=""
                  >
                    <option value="">Sélectionnez une option</option>
                    {hearOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </fieldset>

            {/* Soumission */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4 items-center justify-between border-t border-border">
              <p className="text-xs text-muted-foreground">
                Les champs marqués d'un <span className="text-crimson">*</span> sont obligatoires
              </p>
              <button
                type="submit"
                disabled={submitting}
                className="btn-crimson px-8 py-3.5 rounded-full text-sm font-semibold inline-flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? (
                  <>
                    <Loader2 className="size-4 animate-spin" /> Envoi en cours…
                  </>
                ) : (
                  <>
                    <Send className="size-4" /> SOUMETTRE MA CANDIDATURE
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
