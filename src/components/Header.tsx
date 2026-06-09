import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useRouterState } from "@tanstack/react-router";
import logo from "@/assets/logo-inpolitics.jpg";
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
    if (isHome) {
      e.preventDefault();
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    } else {
      e.preventDefault();
      openContact();
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled || !isHome ? "glass-header" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-20 md:h-24 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center shrink-0" aria-label="InPolitics Institute">
          <img src={logo} alt="InPolitics Institute" className="h-14 md:h-16 w-auto object-contain" />
        </Link>

        <nav className="hidden xl:flex items-center gap-1" onMouseLeave={() => setOpenIdx(null)}>
          {NAV.map((menu, i) => (
            <div key={menu.label} className="relative" onMouseEnter={() => setOpenIdx(i)}>
              <button
                className="flex items-center gap-1 px-3 py-2 text-[13px] font-medium text-foreground/80 hover:text-foreground transition-colors"
                aria-expanded={openIdx === i}
              >
                <span className="mr-1">{menu.icon}</span>
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
          <a
            href="#contact"
            onClick={handleContact}
            className="ml-3 btn-crimson px-5 py-2.5 text-sm font-semibold rounded-full inline-flex items-center gap-2"
          >
            📩 Contact
          </a>
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
            {NAV.map((menu) => (
              <details key={menu.label} className="group">
                <summary className="flex items-center justify-between py-3 cursor-pointer list-none">
                  <span className="text-sm font-semibold text-anthracite">
                    <span className="mr-2">{menu.icon}</span>{menu.label}
                  </span>
                  <ChevronDown className="size-4 transition-transform group-open:rotate-180" />
                </summary>
                <div className="pl-6 pb-2 flex flex-col gap-1">
                  {menu.items.map((it) => (
                    <Link key={it.to} to={it.to} className="py-2 text-sm text-muted-foreground hover:text-crimson">
                      {it.label}
                    </Link>
                  ))}
                </div>
              </details>
            ))}
            <a
              href="#contact"
              onClick={handleContact}
              className="mt-3 btn-crimson px-5 py-3 text-sm font-semibold rounded-full text-center"
            >
              📩 Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
