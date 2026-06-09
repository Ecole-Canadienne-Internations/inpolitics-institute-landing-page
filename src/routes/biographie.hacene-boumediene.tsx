import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/SubPage";

const BIO = `Bloukli Hacene Boumediene est co-fondateur d'inPolitics Institute, où il apporte son expertise unique à l'intersection de l'architecture, de l'urbanisme et de la décision publique. Reconnu pour son exigence par les Architectes des Bâtiments de France (ABF), il a collaboré avec plusieurs architectes français de renom qui ont façonné l'image de Paris à travers ses édifices haussmanniens les plus emblématiques. Cette immersion dans le patrimoine architectural lui a ouvert les portes des innovations urbanistiques. Aujourd'hui, il met cette double culture — tradition haussmannienne et ville de demain — au service des politiques et décideurs publics. Il les accompagne sur les codes stylistiques, l'identité urbaine et les mutations des métropoles contemporaines.`;

export const Route = createFileRoute("/biographie/hacene-boumediene")({
  component: () => (
    <SubPage eyebrow="Biographie — Co-fondation" title="Bloukli Hacene BOUMEDIENE" intro="Co-fondateur. Architecte-urbaniste, expert reconnu par les Architectes des Bâtiments de France (ABF).">
      {BIO.split(/(?<=\. )(?=[A-ZÉÈÀ])/).map((p, i) => <p key={i}>{p}</p>)}
    </SubPage>
  ),
  head: () => ({ meta: [
    { title: "Bloukli Hacene BOUMEDIENE — Biographie | InPolitics Institute" },
    { name: "description", content: "Biographie de Bloukli Hacene Boumediene, co-fondateur d'InPolitics Institute." },
    { property: "og:title", content: "Bloukli Hacene BOUMEDIENE — InPolitics Institute" },
    { property: "og:description", content: "Co-fondateur d'InPolitics Institute." },
  ]}),
});
