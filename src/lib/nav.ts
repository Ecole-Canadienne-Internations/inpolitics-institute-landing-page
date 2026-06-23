export type NavItem = {
  to: string;
  label: string;
  desc: string;
};

export type NavMenu = {
  label: string;
  items: NavItem[];
};

export const NAV: NavMenu[] = [
  {
    label: "L'Institut",
    items: [
      { to: "/institut/vision-manifeste", label: "Vision & Manifeste", desc: "Le texte officiel d'Arnaud SIGHANO." },
      { to: "/institut/campus", label: "Nos Campus", desc: "Gigean (Montpellier Métropole) & perspectives d'extension Afrique." },
      { to: "/institut/diplomatie-territoriale", label: "Diplomatie Territoriale", desc: "Positionnement international des territoires." },
      { to: "/institut/lobbying-integrite", label: "Lobbying, Plaidoyer & Intégrité", desc: "Charte éthique et conformité OCDE/UE." },
      { to: "/institut/label-haute-integrite", label: 'Label "Commune de Haute Intégrité"', desc: "Standard de transparence financière." },
    ],
  },
  {
    label: "Programmes",
    items: [
      { to: "/programmes/seminaires-gigean", label: "Séminaires d'Immersion (Gigean)", desc: "Formations de 3 à 5 jours pour l'élite publique." },
      { to: "/programmes/plaidoyer-influence", label: "Plaidoyer & Stratégies d'Influence", desc: "Programme phare d'ingénierie d'influence." },
      { to: "/programmes/formations-afrique", label: "Formations Continues (Afrique)", desc: "Sessions de mise à niveau sur le continent." },
      { to: "/programmes/cursus-hybrides", label: "Cursus Hybrides & E-learning", desc: "Plateforme 24/7 — 80% en ligne, 20% présentiel." },
      { to: "/programmes/visites-techniques", label: "Visites Techniques", desc: "Smart Cities, eau, gestion des déchets." },
    ],
  },
  {
    label: "Executifs",
    items: [
      { to: "/pilier/gouvernance", label: "Gouvernance & Stratégie d'État", desc: "Administration publique, éthique républicaine et leadership institutionnel." },
      { to: "/pilier/diplomatie", label: "Diplomatie & Relations Internationales", desc: "Géopolitique, négociation multilatérale et soft power." },
      { to: "/pilier/communication", label: "Communication & Analyse Politique", desc: "Communication de crise, opinion et stratégie d'influence." },
      { to: "/pilier/technopolitiques", label: "Techno Politiques", desc: "Data, SaaS territoriaux et IA pour la décision publique." },
    ],
  },
  {
    label: "Lobbying & Réseau",
    items: [
      { to: "/lobbying-reseau/methode-6-axes", label: "Notre Méthode en 6 Axes", desc: "Les 3 phases d'InPolitics Influence." },
      { to: "/lobbying-reseau/club-exec", label: "Club InPolitics Exec", desc: "Le cercle de réflexion privé de l'institut." },
      { to: "/lobbying-reseau/services-entreprises", label: "Services aux Entreprises", desc: "Position papers et accès aux marchés." },
    ],
  },
  {
    label: "Gouvernance Digitale",
    items: [
      { to: "/pilier/observatoire-politique", label: "Observatoire Politique", desc: "Baromètres, cartographie électorale et analyse territoriale." },
      { to: "/gouvernance-digitale/solutions-saas", label: "Solutions SaaS Municipales", desc: "Sécurisation numérique des taxes locales." },
      { to: "/gouvernance-digitale/ia-data-science", label: "IA & Data Science", desc: "Algorithmes prédictifs pour l'aménagement urbain." },
      { to: "/gouvernance-digitale/etudes-de-cas", label: "Études de Cas", desc: "Analyses réelles des municipalités partenaires." },
    ],
  },
  {
    label: "Espace Diaspora",
    items: [
      { to: "/diaspora/programme-landing", label: 'Programme "Landing"', desc: "Bootcamp de reconnexion économique à Gigean." },
      { to: "/diaspora/connect", label: "Diaspora Connect", desc: "Matching profils Europe / besoins locaux Afrique." },
      { to: "/diaspora/conciergerie", label: "Conciergerie & Sécurisation", desc: "Foncier, juridique et fiscal." },
    ],
  },
  {
    label: "Schools of Politics",
    items: [
      { to: "/schools-of-politics/vision-mission", label: "Vision & Mission", desc: "Why School of Politics? — Discover our vision and mission." },
      { to: "/schools-of-politics/apply", label: "Apply", desc: "Submit your application to join the School of Politics." },
    ],
  },
  {
    label: "Le Lab",
    items: [
      { to: "/lab/publications", label: "Publications & Recherche", desc: "Analyses et rapports de l'Observatoire." },
      { to: "/lab/blog", label: "Le Blog du Décideur Public", desc: "Tribunes, analyses et décryptages." },
      { to: "/lab/actualites-evenements", label: "Actualités & Événements", desc: "Séminaires, colloques, revues." },
      { to: "/lab/livre", label: "Le Livre", desc: 'Présentation et commande de "Communiquer en Politique".' },
    ],
  },
];