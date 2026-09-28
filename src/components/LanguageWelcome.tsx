import { useEffect, useState } from "react";
import { Globe2, ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getLandingLanguage, saveLandingLanguage, useLandingLanguage, type LandingLanguage } from "@/lib/landing-language";

const choices: { code: LandingLanguage; name: string; native: string }[] = [
  { code: "fr", name: "Français", native: "France" },
  { code: "en", name: "English", native: "International" },
  { code: "es", name: "Español", native: "España / América Latina" },
];

export function LanguageWelcome() {
  const language = useLandingLanguage();
  const [open, setOpen] = useState(() => getLandingLanguage() === null);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const escape = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", escape);
    return () => { document.body.style.overflow = previous; window.removeEventListener("keydown", escape); };
  }, [open]);

  return (
    <div data-language-picker>
      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={() => setOpen(true)}
        aria-label="Choisir la langue / Choose language / Elegir idioma"
        className="fixed z-[55] bottom-5 left-5 rounded-full bg-background/90 backdrop-blur border-border shadow-lg text-foreground hover:bg-background/70"
      >
        <Globe2 className="size-4" /> {language?.toUpperCase() ?? "LANG"}
      </Button>
      {open && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-anthracite/55 backdrop-blur-sm" role="presentation">
          <div role="dialog" aria-modal="true" aria-labelledby="language-title" className="w-full max-w-lg max-h-[calc(100dvh-2rem)] overflow-y-auto rounded-lg bg-background shadow-2xl border border-border">
            <div className="bg-crimson text-crimson-foreground px-6 py-6 sm:px-8 flex items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="size-11 rounded-full bg-crimson-foreground/15 grid place-items-center shrink-0"><Globe2 className="size-5" /></div>
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider opacity-85">InPolitics Institute</div>
                  <h2 id="language-title" className="text-xl font-bold">Choisissez votre langue</h2>
                </div>
              </div>
              <Button variant="ghost" size="icon" aria-label="Fermer / Close / Cerrar" onClick={() => setOpen(false)} className="shrink-0 text-crimson-foreground hover:bg-crimson-foreground/15 hover:text-crimson-foreground"><X /></Button>
            </div>
            <div className="p-6 sm:p-8">
              <p className="text-sm text-muted-foreground mb-6">Choose your language · Elija su idioma</p>
              <div className="grid gap-3">
                {choices.map((choice) => (
                  <Button key={choice.code} type="button" variant="outline" onClick={() => { saveLandingLanguage(choice.code); setOpen(false); }} className="w-full h-auto min-h-16 px-5 py-3 flex items-center justify-between gap-4 rounded-md border-border bg-background text-foreground hover:bg-crimson/10 hover:border-crimson/40 hover:text-foreground transition-colors text-left whitespace-normal">
                    <span className="flex items-center gap-4 min-w-0"><span className="size-9 rounded-full bg-crimson/10 text-crimson grid place-items-center font-bold text-xs shrink-0">{choice.code.toUpperCase()}</span><span className="flex flex-col"><span className="font-semibold">{choice.name}</span><span className="text-xs text-muted-foreground font-normal">{choice.native}</span></span></span>
                    <ArrowRight className="size-4 text-muted-foreground shrink-0" />
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}