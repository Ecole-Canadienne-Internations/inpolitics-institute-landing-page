import { createContext, useContext, useState, type ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Mail, Send, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

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
  const [sending, setSending] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = {
      first_name: String(fd.get("first_name") ?? "").trim().slice(0, 100),
      last_name: String(fd.get("last_name") ?? "").trim().slice(0, 100),
      email: String(fd.get("email") ?? "").trim().slice(0, 255),
      organisation: String(fd.get("organisation") ?? "").trim().slice(0, 200) || null,
      message: String(fd.get("message") ?? "").trim().slice(0, 5000),
    };
    if (!payload.first_name || !payload.last_name || !payload.email || !payload.message) {
      toast.error("Merci de remplir tous les champs obligatoires.");
      return;
    }
    setSending(true);
    const { error } = await supabase.from("contact_submissions").insert(payload);
    setSending(false);
    if (error) {
      toast.error("L'envoi a échoué. Merci de réessayer.");
      return;
    }
    toast.success("Message envoyé — nous vous répondons sous 48h.");
    setSent(true);
    setTimeout(() => {
      setSent(false);
      onDone?.();
    }, 1800);
  };

  return (
    <form onSubmit={onSubmit} className="grid gap-4 mt-2">
      <div className="grid sm:grid-cols-2 gap-4">
        <input name="first_name" required maxLength={100} placeholder="Prénom" className="h-11 px-4 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-crimson/40" />
        <input name="last_name" required maxLength={100} placeholder="Nom" className="h-11 px-4 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-crimson/40" />
      </div>
      <input name="email" required type="email" maxLength={255} placeholder="Email professionnel" className="h-11 px-4 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-crimson/40" />
      <input name="organisation" maxLength={200} placeholder="Fonction / Organisation" className="h-11 px-4 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-crimson/40" />
      <textarea name="message" required rows={4} maxLength={5000} placeholder="Votre projet en quelques lignes…" className="px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-crimson/40" />
      <button
        type="submit"
        disabled={sending}
        className="btn-crimson h-11 rounded-full font-semibold inline-flex items-center justify-center gap-2 disabled:opacity-60"
      >
        {sending ? (<><Loader2 className="size-4 animate-spin" /> Envoi…</>) : sent ? "Message envoyé ✓" : (<>Envoyer <Send className="size-4" /></>)}
      </button>
    </form>
  );
}
