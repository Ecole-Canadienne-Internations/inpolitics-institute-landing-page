import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Header } from "@/components/Header";
import { ArrowLeft, Check, Send, Loader2 } from "lucide-react";
import banner from "@/assets/banner4.png";

export const Route = createFileRoute("/schools-of-politics/apply")({
  component: Apply,
  head: () => ({
    meta: [
      { title: "Apply — School of Politics — InPolitics Institute" },
      { name: "description", content: "Submit your application to join the School of Politics at InPolitics Institute." },
      { property: "og:title", content: "Apply — School of Politics — InPolitics Institute" },
      { property: "og:description", content: "Apply to the School of Politics at InPolitics Institute." },
      { property: "og:url", content: "https://inpoliticsinstitute.com/schools-of-politics/apply" },
    ],
    links: [{ rel: "canonical", href: "https://inpoliticsinstitute.com/schools-of-politics/apply" }],
  }),
});

const applicationSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(6, "Phone number is required"),
  country: z.string().min(2, "Country is required"),
  nationality: z.string().min(2, "Nationality is required"),
  education: z.string().min(1, "Please select your education level"),
  program: z.string().min(1, "Please select a program"),
  motivation: z.string().min(50, "Please write at least 50 characters about your motivation"),
  linkedin: z.string().optional(),
  hearAbout: z.string().min(1, "Please let us know how you heard about us"),
});

type ApplicationForm = z.infer<typeof applicationSchema>;

const educationLevels = [
  { value: "high-school", label: "High School / Baccalaureate" },
  { value: "bachelor", label: "Bachelor / Licence" },
  { value: "master", label: "Master / Maitrise" },
  { value: "doctorate", label: "Doctorate / PhD" },
  { value: "executive", label: "Executive Education" },
  { value: "other", label: "Other" },
];

const programs = [
  { value: "political-strategy", label: "Political Strategy & Campaigns" },
  { value: "public-diplomacy", label: "Public Diplomacy & International Relations" },
  { value: "governance", label: "Governance & Public Policy" },
  { value: "digital-governance", label: "Digital Governance & Tech Politics" },
  { value: "lobbying", label: "Lobbying & Advocacy" },
  { value: "leadership", label: "Executive Leadership" },
];

const hearOptions = [
  { value: "social-media", label: "Social Media" },
  { value: "website", label: "Website / Search Engine" },
  { value: "referral", label: "Referral / Word of Mouth" },
  { value: "institution", label: "Institutional Partner" },
  { value: "event", label: "Event / Conference" },
  { value: "email", label: "Email Campaign" },
  { value: "other", label: "Other" },
];

function Apply() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ApplicationForm>({
    resolver: zodResolver(applicationSchema),
  });

  const onSubmit = async () => {
    setSubmitting(true);
    // Simulate submission — replace with actual API call
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitting(false);
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
              Application Submitted
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Thank you for your interest in the School of Politics. Our admissions team will
              review your application and reach out to you within 48–72 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border border-input hover:bg-accent transition-colors"
              >
                <ArrowLeft className="size-4" /> Back to Home
              </Link>
              <button
                onClick={() => {
                  setSubmitted(false);
                  reset();
                }}
                className="btn-crimson px-6 py-3 rounded-full text-sm font-semibold"
              >
                Submit Another Application
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
                  Application Form
                </h1>
              </div>
            </div>
          </section>

          <p className="text-lg text-muted-foreground mb-12 max-w-xl">
            Take the first step toward joining the next generation of political leaders.
            Fill out the form below and our team will contact you.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8" noValidate>
            {/* Personal Information */}
            <fieldset>
              <legend className="text-sm font-semibold uppercase tracking-[0.15em] text-anthracite mb-5 pb-2 border-b border-border w-full">
                Personal Information
              </legend>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-anthracite">
                    First Name <span className="text-crimson">*</span>
                  </label>
                  <input
                    {...register("firstName")}
                    placeholder="e.g. Jean"
                    className="flex h-11 w-full rounded-lg border border-input bg-transparent px-4 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring placeholder:text-muted-foreground"
                  />
                  {errors.firstName && (
                    <p className="text-xs text-crimson mt-1">{errors.firstName.message}</p>
                  )}
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-anthracite">
                    Last Name <span className="text-crimson">*</span>
                  </label>
                  <input
                    {...register("lastName")}
                    placeholder="e.g. Dupont"
                    className="flex h-11 w-full rounded-lg border border-input bg-transparent px-4 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring placeholder:text-muted-foreground"
                  />
                  {errors.lastName && (
                    <p className="text-xs text-crimson mt-1">{errors.lastName.message}</p>
                  )}
                </div>
              </div>
            </fieldset>

            {/* Contact Details */}
            <fieldset>
              <legend className="text-sm font-semibold uppercase tracking-[0.15em] text-anthracite mb-5 pb-2 border-b border-border w-full">
                Contact Details
              </legend>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-anthracite">
                    Email <span className="text-crimson">*</span>
                  </label>
                  <input
                    type="email"
                    {...register("email")}
                    placeholder="jean.dupont@email.com"
                    className="flex h-11 w-full rounded-lg border border-input bg-transparent px-4 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring placeholder:text-muted-foreground"
                  />
                  {errors.email && (
                    <p className="text-xs text-crimson mt-1">{errors.email.message}</p>
                  )}
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-anthracite">
                    Phone <span className="text-crimson">*</span>
                  </label>
                  <input
                    type="tel"
                    {...register("phone")}
                    placeholder="+33 6 00 00 00 00"
                    className="flex h-11 w-full rounded-lg border border-input bg-transparent px-4 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring placeholder:text-muted-foreground"
                  />
                  {errors.phone && (
                    <p className="text-xs text-crimson mt-1">{errors.phone.message}</p>
                  )}
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-anthracite">
                    Country of Residence <span className="text-crimson">*</span>
                  </label>
                  <input
                    {...register("country")}
                    placeholder="e.g. France"
                    className="flex h-11 w-full rounded-lg border border-input bg-transparent px-4 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring placeholder:text-muted-foreground"
                  />
                  {errors.country && (
                    <p className="text-xs text-crimson mt-1">{errors.country.message}</p>
                  )}
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-anthracite">
                    Nationality <span className="text-crimson">*</span>
                  </label>
                  <input
                    {...register("nationality")}
                    placeholder="e.g. Ivoirienne"
                    className="flex h-11 w-full rounded-lg border border-input bg-transparent px-4 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring placeholder:text-muted-foreground"
                  />
                  {errors.nationality && (
                    <p className="text-xs text-crimson mt-1">{errors.nationality.message}</p>
                  )}
                </div>
              </div>
            </fieldset>

            {/* Academic & Program */}
            <fieldset>
              <legend className="text-sm font-semibold uppercase tracking-[0.15em] text-anthracite mb-5 pb-2 border-b border-border w-full">
                Academic & Program
              </legend>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-anthracite">
                    Education Level <span className="text-crimson">*</span>
                  </label>
                  <select
                    {...register("education")}
                    className="flex h-11 w-full rounded-lg border border-input bg-transparent px-4 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring cursor-pointer"
                    defaultValue=""
                  >
                    <option value="" disabled>Select your level</option>
                    {educationLevels.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                  {errors.education && (
                    <p className="text-xs text-crimson mt-1">{errors.education.message}</p>
                  )}
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-anthracite">
                    Program Interested In <span className="text-crimson">*</span>
                  </label>
                  <select
                    {...register("program")}
                    className="flex h-11 w-full rounded-lg border border-input bg-transparent px-4 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring cursor-pointer"
                    defaultValue=""
                  >
                    <option value="" disabled>Select a program</option>
                    {programs.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                  {errors.program && (
                    <p className="text-xs text-crimson mt-1">{errors.program.message}</p>
                  )}
                </div>
              </div>
            </fieldset>

            {/* Motivation */}
            <fieldset>
              <legend className="text-sm font-semibold uppercase tracking-[0.15em] text-anthracite mb-5 pb-2 border-b border-border w-full">
                Motivation
              </legend>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-anthracite">
                  Why do you want to join the School of Politics? <span className="text-crimson">*</span>
                </label>
                <textarea
                  {...register("motivation")}
                  rows={5}
                  placeholder="Tell us about your motivation, goals, and what you hope to gain from this program..."
                  className="flex w-full rounded-lg border border-input bg-transparent px-4 py-3 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring placeholder:text-muted-foreground resize-y min-h-[120px]"
                />
                {errors.motivation && (
                  <p className="text-xs text-crimson mt-1">{errors.motivation.message}</p>
                )}
              </div>
            </fieldset>

            {/* Additional Info */}
            <fieldset>
              <legend className="text-sm font-semibold uppercase tracking-[0.15em] text-anthracite mb-5 pb-2 border-b border-border w-full">
                Additional Information
              </legend>
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-anthracite">
                    LinkedIn Profile (optional)
                  </label>
                  <input
                    {...register("linkedin")}
                    placeholder="https://linkedin.com/in/yourprofile"
                    className="flex h-11 w-full rounded-lg border border-input bg-transparent px-4 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring placeholder:text-muted-foreground"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-anthracite">
                    How did you hear about us? <span className="text-crimson">*</span>
                  </label>
                  <select
                    {...register("hearAbout")}
                    className="flex h-11 w-full rounded-lg border border-input bg-transparent px-4 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring cursor-pointer"
                    defaultValue=""
                  >
                    <option value="" disabled>Select an option</option>
                    {hearOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                  {errors.hearAbout && (
                    <p className="text-xs text-crimson mt-1">{errors.hearAbout.message}</p>
                  )}
                </div>
              </div>
            </fieldset>

            {/* Submit */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4 items-center justify-between border-t border-border">
              <p className="text-xs text-muted-foreground">
                Fields marked with <span className="text-crimson">*</span> are required
              </p>
              <button
                type="submit"
                disabled={submitting}
                className="btn-crimson px-8 py-3.5 rounded-full text-sm font-semibold inline-flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? (
                  <>
                    <Loader2 className="size-4 animate-spin" /> Submitting...
                  </>
                ) : (
                  <>
                    <Send className="size-4" /> Submit Application
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
