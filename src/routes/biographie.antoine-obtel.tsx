import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/SubPage";

const BIO = `Antoine OBTEL est Directeur Associé d'inPolitics Institute, où il apporte une expertise nourrie par la recherche universitaire et l'expérience de terrain. Étudiant-chercheur en Histoire et Relations Internationales, il se forme au sein de trois institutions d'excellence : Université Paris Cité, Sorbonne Université et Université Paris-Panthéon-Assas. Son parcours est marqué par un engagement fort dans les réseaux diplomatiques : Trésorier des Alumni de l'Académie Diplomatique d'Été, il évolue au contact direct des décideurs politiques européens. Réserviste du Ministère de l'Europe et des Affaires étrangères et Membre du Conseil d'administration de l'Association France-Canada, il conjugue analyse académique et compréhension pratique des enjeux internationaux.`;

export const Route = createFileRoute("/biographie/antoine-obtel")({
  component: () => (
    <SubPage eyebrow="Biographie — Direction" title="Antoine OBTEL" intro="Directeur Associé. Étudiant-chercheur en Histoire et Relations Internationales. Réserviste du Quai d'Orsay.">
      {BIO.split(/(?<=\. )(?=[A-ZÉÈÀ])/).map((p, i) => <p key={i}>{p}</p>)}
    </SubPage>
  ),
  head: () => ({ meta: [
    { title: "Antoine OBTEL — Biographie | InPolitics Institute" },
    { name: "description", content: "Biographie d'Antoine OBTEL, Directeur Associé d'InPolitics Institute." },
    { property: "og:title", content: "Antoine OBTEL — InPolitics Institute" },
    { property: "og:description", content: "Directeur Associé d'InPolitics Institute." },
  ]}),
});
