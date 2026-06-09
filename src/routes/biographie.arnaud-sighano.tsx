import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/SubPage";

const BIO = `Arnaud SIGHANO est un acteur reconnu de la diplomatie d'influence et des relations internationales. Fondateur et Directeur Associé d'inPolitics Institute, il accompagne les États, acteurs politiques et décideurs publics dans l'élaboration de stratégies d'influence internationale. Son approche s'appuie sur les leviers du soft power, avec une expertise singulière en Sport Diplomatie. Diplômé de l'Université de Picardie Jules Verne et formé à la diplomatie à l'Université Jean Moulin Lyon 3, il allie rigueur académique et action de terrain. Engagé pour le leadership africain, Arnaud est alumni du programme créé en 2010 par l'ancien Président Américain Barack Obama, le programme Young African Leaders Initiative (YALI). En 2021, Arnaud a fondé le YALI Sport Africa, réseau thématique dédié au sport comme vecteur d'influence et de développement. Éducateur dans l'âme, il est également Directeur de l'École canadienne Inter-Nations.`;

export const Route = createFileRoute("/biographie/arnaud-sighano")({
  component: () => (
    <SubPage eyebrow="Biographie — Direction" title="Arnaud SIGHANO" intro="Fondateur & Directeur Associé d'InPolitics Institute. Diplomate d'influence, expert en Sport Diplomatie, éducateur.">
      {BIO.split(/(?<=\. )(?=[A-ZÉÈÀ])/).map((p, i) => <p key={i}>{p}</p>)}
    </SubPage>
  ),
  head: () => ({ meta: [
    { title: "Arnaud SIGHANO — Biographie | InPolitics Institute" },
    { name: "description", content: "Biographie d'Arnaud SIGHANO, Fondateur et Directeur Associé d'InPolitics Institute." },
    { property: "og:title", content: "Arnaud SIGHANO — InPolitics Institute" },
    { property: "og:description", content: "Diplomate d'influence et fondateur d'InPolitics Institute." },
  ]}),
});
