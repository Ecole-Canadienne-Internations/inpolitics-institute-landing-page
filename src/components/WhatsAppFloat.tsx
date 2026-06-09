import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  const phone = "237600000000";
  const text = encodeURIComponent(
    "Bonjour, je souhaite échanger avec un conseiller d'orientation Inpolitics Institute."
  );

  return (
    <a
      href={`https://wa.me/${phone}?text=${text}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Parler à un conseiller sur WhatsApp"
      className="fixed bottom-5 right-5 z-40 group inline-flex items-center gap-3 bg-anthracite text-anthracite-foreground hover:bg-crimson transition-colors pl-4 pr-5 py-3 rounded-full shadow-2xl"
    >
      <span className="grid place-items-center size-9 rounded-full bg-crimson text-crimson-foreground group-hover:bg-white group-hover:text-crimson transition">
        <MessageCircle className="size-5" />
      </span>
      <span className="hidden sm:block text-xs font-semibold leading-tight max-w-[180px]">
        Parler à un conseiller
        <span className="block text-white/60 font-normal">en toute confidentialité</span>
      </span>
    </a>
  );
}
