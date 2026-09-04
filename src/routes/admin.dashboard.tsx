import { useEffect, useMemo, useState } from "react";
import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Eye, Trash2, Loader2, Search, Plus, LogOut, Check, X } from "lucide-react";

export const Route = createFileRoute("/admin/dashboard")({
  component: AdminDashboard,
  head: () => ({
    meta: [
      { title: "Inscriptions & Admissions — InPolitics Institute" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
});

type Application = {
  id: string;
  reference: string | null;
  created_at: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  country: string;
  nationality: string | null;
  education: string | null;
  program: string;
  current_role_title: string | null;
  motivation: string;
  linkedin: string | null;
  hear_about: string | null;
  status: string;
};

const CAPACITY = 500;

const statusBadge = (status: string) => {
  if (status === "validated")
    return "bg-emerald-100 text-emerald-700 border border-emerald-200";
  if (status === "rejected") return "bg-crimson/10 text-crimson border border-crimson/20";
  return "bg-amber-100 text-amber-700 border border-amber-200";
};

const statusLabel = (status: string) =>
  status === "validated" ? "Validé" : status === "rejected" ? "Rejeté" : "En attente";

function AdminDashboard() {
  const navigate = useNavigate();
  const [checking, setChecking] = useState(true);
  const [rows, setRows] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<"all" | "pending" | "validated" | "rejected">("all");
  const [selected, setSelected] = useState<Application | null>(null);

  useEffect(() => {
    (async () => {
      const { data: sessionData } = await supabase.auth.getSession();
      const user = sessionData.session?.user;
      if (!user) {
        navigate({ to: "/admin/login" });
        return;
      }
      const { data: isAdmin } = await supabase.rpc("has_role", {
        _user_id: user.id,
        _role: "admin",
      });
      if (!isAdmin) {
        toast.error("Accès refusé", { description: "Ce compte n'est pas administrateur." });
        await supabase.auth.signOut();
        navigate({ to: "/admin/login" });
        return;
      }
      setChecking(false);
      void load();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const load = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("school_applications")
      .select("*")
      .order("created_at", { ascending: false });
    setLoading(false);
    if (error) {
      toast.error("Chargement impossible", { description: error.message });
      return;
    }
    setRows((data ?? []) as Application[]);
  };

  const kpis = useMemo(() => {
    const today = new Date().toDateString();
    return {
      total: rows.length,
      pending: rows.filter((r) => r.status === "pending").length,
      validatedToday: rows.filter(
        (r) => r.status === "validated" && new Date(r.created_at).toDateString() === today,
      ).length,
      rejected: rows.filter((r) => r.status === "rejected").length,
    };
  }, [rows]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return rows.filter((r) => {
      if (filter !== "all" && r.status !== filter) return false;
      if (!q) return true;
      return [r.reference, r.first_name, r.last_name, r.email, r.program]
        .filter(Boolean)
        .some((v) => String(v).toLowerCase().includes(q));
    });
  }, [rows, query, filter]);

  const updateStatus = async (id: string, status: "validated" | "rejected") => {
    const { error } = await supabase.from("school_applications").update({ status }).eq("id", id);
    if (error) {
      toast.error("Mise à jour impossible", { description: error.message });
      return;
    }
    setRows((prev) => prev.map((r) => (r.id === id ? { ...r, status } : r)));
    setSelected(null);
    toast.success(status === "validated" ? "Candidature validée" : "Candidature rejetée");
  };

  const remove = async (id: string) => {
    const { error } = await supabase.from("school_applications").delete().eq("id", id);
    if (error) {
      toast.error("Suppression impossible", { description: error.message });
      return;
    }
    setRows((prev) => prev.filter((r) => r.id !== id));
    setSelected(null);
    toast.success("Candidature supprimée");
  };

  if (checking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <Loader2 className="size-6 animate-spin text-crimson" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-foreground">
      <main className="pt-28 md:pt-32 pb-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div>
              <h1 className="font-serif text-3xl md:text-4xl text-anthracite">
                Inscriptions &amp; Admissions
              </h1>
              <p className="mt-2 text-sm text-muted-foreground max-w-2xl">
                Guichet interne, portail public B2C et file de validation des candidatures.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {(
                  [
                    ["all", "Toutes"],
                    ["pending", "File d'attente"],
                    ["validated", "Frais d'inscription"],
                    ["rejected", "Portail B2C"],
                  ] as const
                ).map(([value, label]) => (
                  <button
                    key={value}
                    onClick={() => setFilter(value)}
                    className={
                      filter === value
                        ? "px-4 py-2 rounded-full text-xs font-semibold bg-anthracite text-white"
                        : "px-4 py-2 rounded-full text-xs font-semibold border border-anthracite/15 text-anthracite hover:bg-anthracite/5"
                    }
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Link
                to="/schools-of-politics/apply"
                className="btn-crimson px-5 py-3 rounded-full text-xs font-semibold inline-flex items-center gap-2"
              >
                <Plus className="size-4" />
                Nouvelle inscription
              </Link>
              <button
                onClick={async () => {
                  await supabase.auth.signOut();
                  navigate({ to: "/admin/login" });
                }}
                className="px-5 py-3 rounded-full text-xs font-semibold inline-flex items-center gap-2 border border-anthracite/15 text-anthracite hover:bg-anthracite hover:text-white transition-colors"
              >
                <LogOut className="size-4" />
                Déconnexion
              </button>
            </div>
          </div>

          {/* KPIs */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {[
              { label: "Inscrits (année)", value: kpis.total, sub: `Capacité ${CAPACITY}` },
              { label: "En attente", value: kpis.pending, sub: "À traiter" },
              { label: "Validées ce jour", value: kpis.validatedToday, sub: "Admissions confirmées" },
              { label: "Rejetées", value: kpis.rejected, sub: "Candidatures refusées" },
            ].map((k) => (
              <div key={k.label} className="rounded-3xl border border-border p-6 bg-background">
                <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-muted-foreground">
                  {k.label}
                </p>
                <p className="mt-3 text-4xl font-bold text-anthracite">{k.value}</p>
                <p className="mt-1 text-xs text-muted-foreground">{k.sub}</p>
              </div>
            ))}
          </div>

          {/* Search */}
          <div className="relative mb-5 max-w-md">
            <Search className="size-4 absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Rechercher un nom ou un ID…"
              className="h-11 w-full rounded-full border border-input bg-transparent pl-11 pr-4 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            />
          </div>

          {/* Table */}
          <div className="rounded-3xl border border-border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-anthracite/5">
                  <tr className="text-left text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                    <th className="px-5 py-4">Référence</th>
                    <th className="px-5 py-4">Reçue le</th>
                    <th className="px-5 py-4">Candidat</th>
                    <th className="px-5 py-4">Programme</th>
                    <th className="px-5 py-4">Contact</th>
                    <th className="px-5 py-4">Statut</th>
                    <th className="px-5 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {loading && (
                    <tr>
                      <td colSpan={7} className="px-5 py-10 text-center text-muted-foreground">
                        <Loader2 className="size-5 animate-spin inline" />
                      </td>
                    </tr>
                  )}
                  {!loading && filtered.length === 0 && (
                    <tr>
                      <td colSpan={7} className="px-5 py-10 text-center text-muted-foreground">
                        Aucune candidature.
                      </td>
                    </tr>
                  )}
                  {filtered.map((r) => (
                    <tr
                      key={r.id}
                      className="border-t border-border hover:bg-anthracite/[0.03] cursor-pointer"
                      onClick={() => setSelected(r)}
                    >
                      <td className="px-5 py-4 font-semibold text-anthracite whitespace-nowrap">
                        #{r.reference ?? r.id.slice(0, 8).toUpperCase()}
                      </td>
                      <td className="px-5 py-4 text-muted-foreground whitespace-nowrap">
                        {new Date(r.created_at).toLocaleString("fr-FR")}
                      </td>
                      <td className="px-5 py-4">
                        <div className="font-medium text-anthracite">
                          {r.first_name} {r.last_name}
                        </div>
                        <div className="text-xs text-muted-foreground">{r.email}</div>
                      </td>
                      <td className="px-5 py-4 max-w-[260px] text-muted-foreground">{r.program}</td>
                      <td className="px-5 py-4 text-muted-foreground whitespace-nowrap">{r.phone}</td>
                      <td className="px-5 py-4">
                        <span
                          className={`inline-flex px-3 py-1 rounded-full text-[10px] font-semibold uppercase ${statusBadge(r.status)}`}
                        >
                          {statusLabel(r.status)}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelected(r);
                            }}
                            aria-label="Voir les détails"
                            className="size-8 rounded-full border border-border inline-flex items-center justify-center hover:bg-anthracite hover:text-white transition-colors"
                          >
                            <Eye className="size-4" />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              void remove(r.id);
                            }}
                            aria-label="Supprimer"
                            className="size-8 rounded-full border border-border inline-flex items-center justify-center text-crimson hover:bg-crimson hover:text-white transition-colors"
                          >
                            <Trash2 className="size-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-anthracite/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-3xl w-full max-w-2xl max-h-[85vh] overflow-y-auto p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-crimson">
                  #{selected.reference ?? selected.id.slice(0, 8).toUpperCase()}
                </p>
                <h2 className="font-serif text-2xl text-anthracite mt-1">
                  {selected.first_name} {selected.last_name}
                </h2>
              </div>
              <span
                className={`inline-flex px-3 py-1 rounded-full text-[10px] font-semibold uppercase ${statusBadge(selected.status)}`}
              >
                {statusLabel(selected.status)}
              </span>
            </div>

            <dl className="grid sm:grid-cols-2 gap-4 text-sm">
              {[
                ["Email", selected.email],
                ["Téléphone / WhatsApp", selected.phone],
                ["Pays", selected.country],
                ["Nationalité", selected.nationality],
                ["Niveau d'études", selected.education],
                ["Fonction / Institution", selected.current_role_title],
                ["Programme", selected.program],
                ["LinkedIn", selected.linkedin],
                ["Source", selected.hear_about],
                ["Date d'inscription", new Date(selected.created_at).toLocaleString("fr-FR")],
              ].map(([label, value]) => (
                <div key={label as string}>
                  <dt className="text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                    {label}
                  </dt>
                  <dd className="text-anthracite break-words">{value || "—"}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-6">
              <p className="text-[11px] uppercase tracking-[0.12em] text-muted-foreground mb-2">
                Motivation
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                {selected.motivation}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 pt-6 border-t border-border">
              <button
                onClick={() => updateStatus(selected.id, "validated")}
                className="btn-crimson px-5 py-3 rounded-full text-xs font-semibold inline-flex items-center gap-2"
              >
                <Check className="size-4" />
                Valider la candidature
              </button>
              <button
                onClick={() => updateStatus(selected.id, "rejected")}
                className="px-5 py-3 rounded-full text-xs font-semibold inline-flex items-center gap-2 border border-anthracite/15 text-anthracite hover:bg-anthracite hover:text-white transition-colors"
              >
                <X className="size-4" />
                Rejeter
              </button>
              <button
                onClick={() => remove(selected.id)}
                className="px-5 py-3 rounded-full text-xs font-semibold inline-flex items-center gap-2 border border-crimson/30 text-crimson hover:bg-crimson hover:text-white transition-colors"
              >
                <Trash2 className="size-4" />
                Supprimer
              </button>
              <button
                onClick={() => setSelected(null)}
                className="px-5 py-3 rounded-full text-xs font-semibold text-muted-foreground hover:text-anthracite"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
