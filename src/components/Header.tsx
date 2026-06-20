import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, Mail, Phone, MapPin } from "lucide-react";
import { Link, useRouterState } from "@tanstack/react-router";
import logo from "@/assets/inpolitics-insititute-new-logo.png";
import { NAV } from "@/lib/nav";
import { useContactModal } from "@/components/ContactModal";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  const { open: openContact } = useContactModal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobile(false);
    setOpenIdx(null);
  }, [pathname]);

  const handleContact = (e: React.MouseEvent) => {
    e.preventDefault();
    openContact();
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      {/* Red institutional top bar */}
      <div className="bg-crimson text-white text-[11px] md:text-[12px]">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-10 min-h-9 py-2 flex items-center justify-between gap-3 md:gap-5 flex-wrap md:flex-nowrap">
          <div className="hidden md:flex items-center gap-3 lg:gap-5 font-medium min-w-0 shrink">
            <a href="mailto:contact@inpoliticsinstitute.com" className="inline-flex items-center gap-1.5 hover:opacity-90 whitespace-nowrap"><Mail className="size-3.5" /> contact@inpoliticsinstitute.com</a>
            <span className="opacity-60">|</span>
            <a href="tel:+33746440427" className="inline-flex items-center gap-1.5 hover:opacity-90 whitespace-nowrap"><Phone className="size-3.5" /> +33 7 46 44 04 27</a>
            <span className="opacity-60">|</span>
            <span className="inline-flex items-center gap-1.5 whitespace-nowrap"><MapPin className="size-3.5 shrink-0" /> Gigean · Montpellier Métropole</span>
          </div>
          <div className="md:hidden flex items-center gap-2 font-medium w-full justify-center text-center">
            <Phone className="size-3.5 shrink-0" />
            <a href="tel:+33746440427" className="hover:opacity-90">+33 7 46 44 04 27</a>
            <span className="opacity-60">|</span>
            <span>Gigean · Montpellier Métropole</span>
          </div>
        </div>
      </div>

      <div className={`transition-all ${scrolled || !isHome ? "glass-header" : "bg-white/85 backdrop-blur"}`}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-26 md:h-32 flex items-center justify-between gap-6">
          <Link to="/" className="flex items-center shrink-0" aria-label="InPolitics Institute">
            <img src={logo} alt="InPolitics Institute" className="h-24 md:h-28 lg:h-30 w-auto object-contain" />
          </Link>

          <nav className="hidden xl:flex items-center gap-0.5 2xl:gap-1" onMouseLeave={() => setOpenIdx(null)}>
            <Link
              to="/"
              onMouseEnter={() => setOpenIdx(null)}
              className="px-2 2xl:px-3 py-2 text-[12px] 2xl:text-[13px] font-medium text-foreground/80 hover:text-crimson transition-colors whitespace-nowrap"
              activeOptions={{ exact: true }}
              activeProps={{ className: "px-2 2xl:px-3 py-2 text-[12px] 2xl:text-[13px] font-semibold text-crimson whitespace-nowrap" }}
            >
              Accueil
            </Link>
            {NAV.map((menu, i) => (
              <div key={menu.label} className="relative" onMouseEnter={() => setOpenIdx(i)}>
                <button
                  className="flex items-center gap-1 px-2 2xl:px-3 py-2 text-[12px] 2xl:text-[13px] font-medium text-foreground/80 hover:text-crimson transition-colors whitespace-nowrap"
                  aria-expanded={openIdx === i}
                >
                  {menu.label}
                  <ChevronDown className="size-3.5 opacity-60" />
                </button>
                {openIdx === i && (
                  <div className="absolute left-0 top-full pt-2">
                    <div className="w-[360px] bg-white rounded-xl shadow-[0_20px_60px_-15px_rgba(15,23,42,0.18)] p-3">
                      {menu.items.map((it) => (
                        <Link
                          key={it.to}
                          to={it.to}
                          className="block px-4 py-3 rounded-lg hover:bg-secondary transition-colors group"
                        >
                          <div className="text-sm font-semibold text-anthracite group-hover:text-crimson transition-colors">
                            {it.label}
                          </div>
                          <div className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                            {it.desc}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <button
              onClick={handleContact}
              className="ml-3 btn-crimson px-5 py-2.5 text-sm font-semibold rounded-full inline-flex items-center gap-2"
            >
              Contact
            </button>
          </nav>

          <button
            className="xl:hidden p-2 -mr-2"
            onClick={() => setMobile((v) => !v)}
            aria-label="Menu"
          >
            {mobile ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {mobile && (
          <div className="xl:hidden bg-white max-h-[80vh] overflow-y-auto shadow-lg">
            <div className="px-6 py-4 flex flex-col gap-1">
              <Link to="/" className="py-3 text-sm font-semibold text-anthracite hover:text-crimson">
                Accueil
              </Link>
              {NAV.map((menu) => (
                <details key={menu.label} className="group">
                  <summary className="flex items-center justify-between py-3 cursor-pointer list-none">
                    <span className="text-sm font-semibold text-anthracite">{menu.label}</span>
                    <ChevronDown className="size-4 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="pl-4 pb-2 flex flex-col gap-1">
                    {menu.items.map((it) => (
                      <Link key={it.to} to={it.to} className="py-2 text-sm text-muted-foreground hover:text-crimson">
                        {it.label}
                      </Link>
                    ))}
                  </div>
                </details>
              ))}
              <button
                onClick={handleContact}
                className="mt-3 btn-crimson px-5 py-3 text-sm font-semibold rounded-full text-center"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
