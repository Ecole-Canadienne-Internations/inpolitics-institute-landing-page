import { createContext, useContext, useState, type ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Mail, Send } from "lucide-react";

type Ctx = { open: () => void };
const ContactCtx = createContext<Ctx>({ open: () => {} });

export function useContactModal() {
  return useContext(ContactCtx);
}

export function ContactProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ContactCtx.Provider value={{ open: () => setIsOpen(true) }}>
      {children}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="bg-white sm:max-w-lg border-0 shadow-2xl">
          <DialogHeader>
            <div className="inline-flex items-center gap-2 text-crimson text-xs font-semibold tracking-[0.18em] uppercase mb-2">
              <Mail className="size-4" /> Formulaire d'orientation
            </div>
            <DialogTitle className="text-2xl font-bold text-anthracite">
              Échanger avec l'Institut
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Présentez-nous votre projet, votre fonction et vos objectifs. Notre équipe vous répond sous 48h.
            </DialogDescription>
          </DialogHeader>
          <ContactForm onDone={() => setIsOpen(false)} />
        </DialogContent>
      </Dialog>
    </ContactCtx.Provider>
  );
}

export function ContactForm({ onDone }: { onDone?: () => void }) {
  const [sent, setSent] = useState(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
        setTimeout(() => {
          setSent(false);
          onDone?.();
        }, 1800);
      }}
      className="grid gap-4 mt-2"
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <input required placeholder="Prénom" className="h-11 px-4 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-crimson/40" />
        <input required placeholder="Nom" className="h-11 px-4 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-crimson/40" />
      </div>
      <input required type="email" placeholder="Email professionnel" className="h-11 px-4 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-crimson/40" />
      <input placeholder="Fonction / Organisation" className="h-11 px-4 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-crimson/40" />
      <textarea required rows={4} placeholder="Votre projet en quelques lignes…" className="px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-crimson/40" />
      <button
        type="submit"
        className="btn-crimson h-11 rounded-full font-semibold inline-flex items-center justify-center gap-2"
      >
        {sent ? "Message envoyé ✓" : (<>Envoyer <Send className="size-4" /></>)}
      </button>
    </form>
  );
}
