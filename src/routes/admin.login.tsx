import { useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Loader2, Lock } from "lucide-react";

export const Route = createFileRoute("/admin/login")({
  component: AdminLogin,
  head: () => ({
    meta: [
      { title: "Espace Administration — InPolitics Institute" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
});

function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) {
      toast.error("Identifiants incorrects", { description: "Vérifiez votre email et mot de passe." });
      return;
    }
    toast.success("Connexion réussie");
    navigate({ to: "/admin/dashboard" });
  };

  return (
    <div className="min-h-screen bg-anthracite flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center size-12 rounded-full bg-crimson/15 text-crimson mb-4">
            <Lock className="size-5" />
          </div>
          <h1 className="font-serif text-3xl text-white">Espace Administration</h1>
          <p className="mt-2 text-sm text-white/60">
            Accès réservé à l'équipe InPolitics Institute.
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="bg-white rounded-3xl p-8 space-y-5 border border-white/10"
        >
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-anthracite">Adresse email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="contact@inpoliticsinstitute.com"
              className="flex h-11 w-full rounded-lg border border-input bg-transparent px-4 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-anthracite">Mot de passe</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="flex h-11 w-full rounded-lg border border-input bg-transparent px-4 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="btn-crimson w-full justify-center px-6 py-3 rounded-full text-sm font-semibold inline-flex items-center gap-2 disabled:opacity-60"
          >
            {loading && <Loader2 className="size-4 animate-spin" />}
            SE CONNECTER
          </button>
        </form>
      </div>
    </div>
  );
}
