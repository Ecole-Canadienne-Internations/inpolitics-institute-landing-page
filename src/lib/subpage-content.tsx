import { SubPage, SubPageWithBanner } from "@/components/SubPage";

export type Section = { h: string; p: string[]; list?: string[] };
export type PageContent = {
  eyebrow: string;
  title: string;
  intro: string;
  sections: Section[];
};

export const SUBPAGE_CONTENT: Record<string, PageContent> = {
  /* ---------------- L'INSTITUT ---------------- */
  "institut/campus": {
    eyebrow: "L'Institut — Campus",
    title: "Nos Campus",
    intro:
      "Un Campus Europe à Gigean (Montpellier Métropole) et des perspectives d'extension en Afrique. Une seule exigence : former une élite publique et privée capable de transformer ses territoires.",
    sections: [
      {
        h: "Campus Europe — Gigean, Montpellier Métropole",
        p: [
          "Notre campus historique est implanté à Gigean, au cœur de la dynamique métropolitaine de Montpellier, à 25 minutes des institutions économiques de l'Hérault et du port de Sète. Ce positionnement stratégique permet à nos auditeurs de bénéficier d'un cadre républicain rigoureux tout en restant connectés à un tissu économique européen de premier plan.",
          "Le Campus Europe accueille les Séminaires d'Immersion, les Cursus Hybrides et les conférences de haut niveau du Lab. Il est conçu comme un véritable lieu de travail pour décideurs : amphithéâtre, salles de simulation, espace de coworking exécutif et résidence d'études.",
        ],
        list: [
          "Adresse : Rue de l'Herme, 34770 GIGEAN — Montpellier Métropole, France",
          "Accès : TGV Montpellier-Sud-de-France (20 min), aéroport Montpellier-Méditerranée (25 min)",
          "Capacité : 80 auditeurs en présentiel + 250 en hybride",
        ],
      },
      {
        h: "Perspectives — Campus Afrique",
        p: [
          "L'Afrique est l'un des terrains d'application privilégiés de la méthode InPolitics. Sans implantation physique permanente à ce jour, nous organisons des sessions itinérantes, des séminaires de formation continue et des visites techniques en partenariat avec des institutions africaines de référence.",
          "Notre ambition est d'ouvrir, à moyen terme, un Campus Afrique dédié à la diplomatie territoriale et à la gouvernance digitale, en lien étroit avec les pôles métropolitains du continent.",
        ],
      },
      {
        h: "Une infrastructure pédagogique au service de l'État",
        p: [
          "Chaque campus est équipé pour la Simul' Crise (salle de crise dédiée, dispositif média et débriefing d'État), pour les ateliers de l'Observatoire (data lab) et pour les rencontres confidentielles du Club InPolitics Exec.",
        ],
      },
    ],
  },
  "institut/diplomatie-territoriale": {
    eyebrow: "L'Institut — Diplomatie Territoriale",
    title: "Diplomatie Territoriale",
    intro:
      "Positionner les territoires — communes, métropoles, régions — comme acteurs à part entière de la scène internationale. Une discipline structurante de l'Institut.",
    sections: [
      {
        h: "Une discipline, pas un slogan",
        p: [
          "La diplomatie territoriale désigne la capacité d'un territoire à porter une stratégie d'influence internationale cohérente : jumelages économiques structurés, missions de prospection ciblées, accueil d'investisseurs, soft power culturel et sportif, présence dans les enceintes multilatérales.",
          "InPolitics Institute en a fait l'une de ses signatures pédagogiques. Nous formons élus, directeurs généraux et cadres territoriaux à concevoir et déployer une véritable politique étrangère locale, alignée avec les intérêts économiques et sociaux du territoire.",
        ],
      },
      {
        h: "Le cadre méthodologique",
        p: [
          "Notre approche s'appuie sur quatre axes opérationnels : diagnostic d'attractivité, cartographie d'influence, ingénierie de coopération, et évaluation d'impact.",
        ],
        list: [
          "Diagnostic d'attractivité : forces, signaux faibles, positionnement comparé.",
          "Cartographie d'influence : acteurs-clés, réseaux institutionnels, leviers diplomatiques.",
          "Ingénierie de coopération : accords-cadres, jumelages, missions économiques.",
          "Évaluation d'impact : indicateurs d'attractivité, retombées économiques et image.",
        ],
      },
      {
        h: "Cas d'usage",
        p: [
          "Métropoles européennes en quête d'attractivité, collectivités africaines structurant leur diaspora économique, intercommunalités souhaitant capter des investissements stratégiques : la diplomatie territoriale s'adresse à tout exécutif local conscient que la compétition se joue désormais à l'échelle mondiale.",
        ],
      },
    ],
  },
  "institut/lobbying-integrite": {
    eyebrow: "L'Institut — Lobbying & Intégrité",
    title: "Lobbying, Plaidoyer & Intégrité",
    intro:
      "L'influence se pratique dans la clarté. Notre doctrine : un lobbying d'intérêt général, traçable, aligné sur les standards OCDE et UE.",
    sections: [
      {
        h: "Notre charte éthique",
        p: [
          "InPolitics Institute conduit ses missions d'influence sous une charte stricte : déclaration systématique des mandants, traçabilité des prises de contact, refus de toute prestation à l'égard d'intérêts contraires à l'ordre public ou aux libertés publiques.",
          "Cette doctrine est inspirée des standards de l'OCDE (Lignes directrices sur le lobbying), du registre de transparence de l'Union européenne et des meilleures pratiques de la HATVP française.",
        ],
      },
      {
        h: "Plaidoyer d'intérêt général",
        p: [
          "Notre méthode distingue trois registres : le plaidoyer (cause publique), le lobbying (intérêt sectoriel régulé) et les affaires publiques (relations institutionnelles). Pour chacun, l'Institut applique le même socle : argumentaire factuel, traçabilité, déontologie.",
        ],
      },
      {
        h: "Formation et certification",
        p: [
          "Nos programmes d'Influence Publique forment dirigeants, directeurs des affaires publiques et chargés de mission à pratiquer un lobbying conforme : conformité réglementaire, rédaction de position papers, conduite d'entretiens institutionnels, gestion des conflits d'intérêts.",
        ],
      },
    ],
  },
  "institut/label-haute-integrite": {
    eyebrow: "L'Institut — Label",
    title: 'Label "Commune de Haute Intégrité"',
    intro:
      "Un standard inédit de transparence financière et de probité administrative, conçu pour distinguer les collectivités exemplaires.",
    sections: [
      {
        h: "Pourquoi un label ?",
        p: [
          "Les collectivités performantes manquent souvent d'un signal extérieur attestant de la qualité de leur gouvernance financière. Le label \"Commune de Haute Intégrité\" comble ce vide : il offre aux exécutifs locaux une reconnaissance objective, mesurable et indépendante.",
        ],
      },
      {
        h: "Les critères d'évaluation",
        p: [
          "Le label repose sur un référentiel public, évalué par un comité d'experts indépendants composés d'anciens magistrats financiers, d'inspecteurs des finances et d'universitaires en finances publiques.",
        ],
        list: [
          "Transparence budgétaire (publication open data, lisibilité des comptes).",
          "Maîtrise de la dette et soutenabilité à 10 ans.",
          "Qualité de la commande publique (taux de mise en concurrence, contrôle).",
          "Traçabilité des subventions et politique anti-corruption.",
          "Reddition de comptes citoyenne (rapports annuels, contrôle démocratique).",
        ],
      },
      {
        h: "Processus d'attribution",
        p: [
          "Trois étapes : auto-évaluation, audit terrain par le comité, délivrance ou refus motivé. Le label est attribué pour trois ans, renouvelable après contrôle. Toute irrégularité détectée entraîne une suspension immédiate.",
        ],
      },
    ],
  },

  /* ---------------- PROGRAMMES ---------------- */
  "programmes/seminaires-gigean": {
    eyebrow: "Programmes — Séminaires d'Immersion",
    title: "Séminaires d'Immersion à Gigean",
    intro:
      "Des formats courts et intensifs de 3 à 5 jours, pensés pour l'élite publique et privée. Présentiel à 100 % au Campus Europe.",
    sections: [
      {
        h: "Public concerné",
        p: [
          "Élus, hauts fonctionnaires, dirigeants d'institutions publiques, directeurs des affaires publiques en entreprise. Promotions de 15 à 25 auditeurs pour garantir la qualité des échanges.",
        ],
      },
      {
        h: "Format pédagogique",
        p: [
          "Chaque séminaire combine cours magistraux par des praticiens de premier plan, ateliers d'application en petits groupes, et un exercice de Simul' Crise final de 24 heures.",
        ],
        list: [
          "Diplomatie territoriale appliquée (5 jours).",
          "Lobbying d'intégrité et plaidoyer (3 jours).",
          "Gouvernance digitale des collectivités (4 jours).",
          "Conduite de crise institutionnelle (3 jours).",
        ],
      },
      {
        h: "Conditions",
        p: [
          "Sélection sur dossier et entretien. Hébergement organisé sur place ou en résidence partenaire à Montpellier. Frais de scolarité communiqués lors de l'entretien d'admission.",
        ],
      },
    ],
  },
  "programmes/plaidoyer-influence": {
    eyebrow: "Programmes — Programme Phare",
    title: "Plaidoyer & Stratégies d'Influence",
    intro:
      "Le programme phare de l'Institut : 12 semaines d'ingénierie d'influence, du diagnostic à la mobilisation des décideurs.",
    sections: [
      {
        h: "Objectifs",
        p: [
          "Former des praticiens capables de concevoir une campagne d'influence de bout en bout : analyse du jeu d'acteurs, message stratégique, mobilisation de relais, suivi d'impact. Le programme est ouvert aux profils confirmés (10 ans d'expérience minimum).",
        ],
      },
      {
        h: "Architecture du parcours",
        p: [
          "Le cursus alterne 80 % de distanciel sur notre plateforme propriétaire et 20 % de présentiel à Gigean, ponctué de masterclasses confidentielles avec d'anciens ministres et hauts cadres européens.",
        ],
        list: [
          "Module 1 — Cartographie d'influence et théorie des parties prenantes.",
          "Module 2 — Rédaction de position papers et argumentaire institutionnel.",
          "Module 3 — Conduite d'entretiens, négociation, médiation.",
          "Module 4 — Évaluation d'impact et mesure du retour d'influence.",
          "Module final — Mémoire stratégique soutenu devant un jury d'État.",
        ],
      },
      {
        h: "Certification",
        p: [
          "À l'issue du parcours, les auditeurs reçoivent le Certificat InPolitics d'Influence Publique, signé par la Direction de l'Institut.",
        ],
      },
    ],
  },
  "programmes/formations-afrique": {
    eyebrow: "Programmes — Afrique",
    title: "Formations Continues — Pôle Afrique",
    intro:
      "Sessions de mise à niveau délivrées en partenariat avec des institutions africaines de référence, pour les cadres et décideurs publics du continent.",
    sections: [
      {
        h: "Une offre itinérante",
        p: [
          "Sans implantation permanente à ce jour, l'Institut déploie ses sessions de formation continue sur invitation d'institutions partenaires : écoles d'administration publique, ministères, collectivités, fondations.",
          "Chaque session est conçue sur mesure : objectifs validés en amont, profil des bénéficiaires, format présentiel ou hybride, langue de travail (français ou anglais).",
        ],
      },
      {
        h: "Thématiques privilégiées",
        p: [
          "Diplomatie territoriale appliquée, gouvernance digitale des municipalités, sécurisation des recettes fiscales locales, conduite du changement administratif, intégrité publique et anti-corruption.",
        ],
      },
      {
        h: "Modalités",
        p: [
          "Les sessions sont conçues comme des résidences pédagogiques intensives de 3 à 10 jours, encadrées par les intervenants permanents de l'Institut et des experts régionaux invités.",
        ],
      },
    ],
  },
  "programmes/cursus-hybrides": {
    eyebrow: "Programmes — Cursus Hybrides",
    title: "Cursus Hybrides & E-learning",
    intro:
      "Une plateforme e-learning sécurisée accessible 24/7, combinée à des regroupements présentiels à Gigean. 80 % en ligne, 20 % en présentiel.",
    sections: [
      {
        h: "Une plateforme pensée pour les cadres en activité",
        p: [
          "Notre plateforme propriétaire propose des modules vidéo de 20 à 40 minutes, des cas pratiques interactifs, des classes virtuelles hebdomadaires et un tutorat individualisé. Accessible 24/7, sur tous supports.",
        ],
      },
      {
        h: "Cadre académique",
        p: [
          "Les cursus hybrides reprennent l'ossature des programmes en présentiel, avec un effort particulier sur la modularité : entrée possible à plusieurs sessions par an, parcours personnalisé selon le profil professionnel.",
        ],
        list: [
          "Cursus Décideur Public (12 mois).",
          "Cursus Affaires Publiques d'Entreprise (9 mois).",
          "Cursus Diplomatie Territoriale (6 mois).",
          "Certificats courts (3 mois).",
        ],
      },
      {
        h: "Évaluation",
        p: [
          "Évaluation continue, projet final encadré et soutenance présentielle au Campus Europe. Les diplômés intègrent le réseau Alumni InPolitics et le Club Exec.",
        ],
      },
    ],
  },
  "programmes/visites-techniques": {
    eyebrow: "Programmes — Visites Techniques",
    title: "Visites Techniques",
    intro:
      "Apprendre des meilleurs sites : Smart Cities, gestion de l'eau, traitement des déchets, mobilités, énergie. Des immersions de 2 à 4 jours pour décideurs.",
    sections: [
      {
        h: "Le principe",
        p: [
          "Les visites techniques permettent à nos auditeurs de confronter la théorie à la réalité opérationnelle. Chaque visite est organisée avec les opérateurs hôtes : présentation institutionnelle, visite de site, table ronde avec les équipes techniques, restitution analytique.",
        ],
      },
      {
        h: "Thématiques actuelles",
        p: [],
        list: [
          "Smart City Montpellier — plateforme open data métropolitaine.",
          "Cycle de l'eau — Syndicat Bas-Languedoc.",
          "Économie circulaire et gestion des déchets — Sète Agglopôle.",
          "Mobilités décarbonées — région Occitanie.",
        ],
      },
      {
        h: "Public",
        p: [
          "Délégations d'élus, missions d'études internationales, promotions InPolitics en cursus. Possibilité de visites privatives pour collectivités étrangères.",
        ],
      },
    ],
  },

  /* ---------------- LOBBYING & RÉSEAU ---------------- */
  "lobbying-reseau/methode-6-axes": {
    eyebrow: "Lobbying & Réseau — Méthode",
    title: "Notre Méthode en 6 Axes",
    intro:
      "InPolitics Influence : une méthode propriétaire structurée en trois phases et six axes opérationnels. La signature de l'Institut en matière d'affaires publiques.",
    sections: [
      {
        h: "Phase 1 — Diagnostic",
        p: [
          "Toute mission débute par un diagnostic stratégique : cartographie d'acteurs, analyse réglementaire, identification des fenêtres d'opportunité.",
        ],
        list: [
          "Axe 1 — Cartographie d'influence des décideurs et relais.",
          "Axe 2 — Analyse réglementaire et veille parlementaire.",
        ],
      },
      {
        h: "Phase 2 — Construction",
        p: [
          "Sur la base du diagnostic, nous construisons l'architecture d'influence : message, supports, plan de mobilisation.",
        ],
        list: [
          "Axe 3 — Argumentaire stratégique (position paper).",
          "Axe 4 — Plan de mobilisation des parties prenantes.",
        ],
      },
      {
        h: "Phase 3 — Déploiement",
        p: [
          "Le déploiement combine action institutionnelle et signaux publics maîtrisés, avec un dispositif d'évaluation continue.",
        ],
        list: [
          "Axe 5 — Conduite des rendez-vous institutionnels.",
          "Axe 6 — Évaluation d'impact et retour stratégique.",
        ],
      },
    ],
  },
  "lobbying-reseau/club-exec": {
    eyebrow: "Lobbying & Réseau — Club Exec",
    title: "Club InPolitics Exec",
    intro:
      "Le cercle de réflexion privé de l'Institut. Un dispositif confidentiel réservé aux dirigeants, élus, hauts fonctionnaires et décideurs économiques.",
    sections: [
      {
        h: "Une instance d'échange à huis clos",
        p: [
          "Le Club InPolitics Exec réunit chaque trimestre une quarantaine de membres autour d'un dîner-débat, d'une table ronde stratégique et d'une note de réflexion confidentielle élaborée par l'Observatoire.",
          "Les échanges se tiennent sous règle de Chatham House : libre circulation des idées, confidentialité absolue des prises de parole.",
        ],
      },
      {
        h: "Admission",
        p: [
          "L'adhésion est strictement sur cooptation. Chaque candidat est présenté par deux membres et validé par le Comité de Direction. Les profils retenus sont issus de la sphère publique, des grandes entreprises, de la diplomatie et de l'expertise.",
        ],
      },
      {
        h: "Bénéfices",
        p: [
          "Accès aux notes confidentielles de l'Observatoire, invitations aux séminaires fermés du Lab, mises en relation avec le réseau Alumni européen et africain.",
        ],
      },
    ],
  },
  "lobbying-reseau/services-entreprises": {
    eyebrow: "Lobbying & Réseau — Entreprises",
    title: "Services aux Entreprises",
    intro:
      "Position papers, veille parlementaire, accès aux marchés publics, accompagnement réglementaire. Notre cabinet d'affaires publiques.",
    sections: [
      {
        h: "Position papers et plaidoyer sectoriel",
        p: [
          "Rédaction et déploiement de notes de position pour comptes d'entreprises, fédérations professionnelles ou consortiums. Chaque livrable s'appuie sur une analyse réglementaire rigoureuse et un argumentaire factuel.",
        ],
      },
      {
        h: "Veille et accès aux marchés",
        p: [
          "Veille parlementaire et réglementaire UE/France, accompagnement des entreprises sur les appels d'offres publics, structuration de réponses consortium, accompagnement de l'innovation réglementaire (sandbox).",
        ],
        list: [
          "Veille hebdomadaire personnalisée.",
          "Détection précoce des évolutions normatives.",
          "Accompagnement aux consultations publiques.",
          "Mise en relation institutionnelle.",
        ],
      },
      {
        h: "Engagement déontologique",
        p: [
          "Toutes nos missions sont inscrites au registre de transparence applicable et conduites sous notre charte éthique. Refus de tout mandat contraire à l'intérêt général ou aux libertés publiques.",
        ],
      },
    ],
  },

  /* ---------------- GOUVERNANCE DIGITALE ---------------- */
  "gouvernance-digitale/solutions-saas": {
    eyebrow: "Gouvernance Digitale — SaaS",
    title: "Solutions SaaS Municipales",
    intro:
      "Sécurisation numérique des recettes locales, traçabilité des actes administratifs, modernisation de la relation citoyenne. Notre pôle de solutions souveraines.",
    sections: [
      {
        h: "Une suite pensée pour les collectivités",
        p: [
          "Notre suite SaaS regroupe des modules conçus pour les communes, intercommunalités et métropoles : recouvrement intelligent, gestion des actes administratifs, portail citoyen, tableau de bord exécutif.",
        ],
        list: [
          "Recouvrement intelligent — sécurisation des recettes fiscales locales.",
          "Gestion des actes — traçabilité, signature électronique, archivage probant.",
          "Portail citoyen — démarches en ligne et suivi de dossiers.",
          "Tableau de bord exécutif — pilotage temps réel des indicateurs clés.",
        ],
      },
      {
        h: "Architecture et souveraineté",
        p: [
          "Hébergement souverain européen, conformité RGPD, chiffrement bout-en-bout, journalisation infalsifiable. Aucun transfert extra-européen de données sans accord exprès.",
        ],
      },
      {
        h: "Accompagnement",
        p: [
          "Déploiement encadré (4 à 12 semaines selon le périmètre), formation des agents et support continu. Méthodologie alignée avec les recommandations de l'ANSSI et de la CNIL.",
        ],
      },
    ],
  },
  "gouvernance-digitale/ia-data-science": {
    eyebrow: "Gouvernance Digitale — IA",
    title: "IA & Data Science Publique",
    intro:
      "Algorithmes prédictifs pour l'aménagement urbain, la maintenance des infrastructures et l'anticipation des besoins sociaux. Une IA au service du bien commun.",
    sections: [
      {
        h: "Cas d'usage prioritaires",
        p: [
          "Nous concentrons nos efforts sur les cas d'usage à fort impact citoyen : anticipation des besoins en équipements publics, optimisation de la collecte des déchets, prévention des risques (inondations, sécheresse), maintenance prédictive du patrimoine.",
        ],
        list: [
          "Aménagement urbain — modèles de densification soutenable.",
          "Patrimoine — maintenance prédictive des bâtiments publics.",
          "Mobilités — optimisation des flux et de l'offre de transport.",
          "Action sociale — détection des situations de fragilité.",
        ],
      },
      {
        h: "Gouvernance algorithmique",
        p: [
          "Chaque modèle livré est documenté (carte modèle), évalué pour ses biais, et soumis à une revue éthique. Conformément au règlement européen sur l'IA, les usages à haut risque font l'objet d'un suivi renforcé.",
        ],
      },
      {
        h: "Formation des équipes",
        p: [
          "Nous formons les agents publics à la lecture critique des outils d'IA, à la rédaction de cahiers des charges robustes et au pilotage éthique des partenariats avec les éditeurs.",
        ],
      },
    ],
  },
  "gouvernance-digitale/etudes-de-cas": {
    eyebrow: "Gouvernance Digitale — Études de cas",
    title: "Études de Cas",
    intro:
      "Retours d'expérience de municipalités partenaires : ce qui a fonctionné, ce qui a résisté, les enseignements pour les exécutifs locaux.",
    sections: [
      {
        h: "Étude #1 — Sécurisation des recettes fiscales locales",
        p: [
          "Déploiement d'un module de recouvrement intelligent sur une commune méditerranéenne de 25 000 habitants. Recettes additionnelles identifiées sur 12 mois, réduction des erreurs de rôle, restauration de la confiance citoyenne.",
        ],
      },
      {
        h: "Étude #2 — Portail citoyen unifié",
        p: [
          "Refonte du portail citoyen d'une intercommunalité : convergence de 14 démarches éparpillées en un parcours unique, satisfaction usager mesurée trimestriellement, charge administrative recentrée sur les cas complexes.",
        ],
      },
      {
        h: "Étude #3 — Tableau de bord exécutif",
        p: [
          "Mise en place d'un tableau de bord temps réel à destination du maire et du directeur général : 36 indicateurs clés, alertes paramétrées, restitution mensuelle au conseil. Effet immédiat sur la qualité de la décision politique.",
        ],
      },
      {
        h: "Méthodologie de partage",
        p: [
          "Chaque étude de cas est publiée avec l'accord explicite de la collectivité concernée et anonymisée lorsque la sensibilité l'exige. Les enseignements transférables sont distillés dans une note de synthèse.",
        ],
      },
    ],
  },

  /* ---------------- DIASPORA ---------------- */
  "diaspora/programme-landing": {
    eyebrow: "Espace Diaspora — Landing",
    title: 'Programme "Landing"',
    intro:
      "Un bootcamp d'immersion de 5 jours à Gigean pour les talents de la diaspora qui veulent reconnecter leur trajectoire à leur territoire d'origine.",
    sections: [
      {
        h: "À qui s'adresse le programme",
        p: [
          "Cadres, entrepreneurs, professionnels libéraux, hauts fonctionnaires issus de la diaspora et désireux d'évaluer concrètement les opportunités d'engagement économique, politique ou philanthropique sur leur territoire d'origine.",
        ],
      },
      {
        h: "Architecture du bootcamp",
        p: [
          "5 jours intensifs au Campus Europe de Gigean, combinant ateliers stratégiques, rencontres avec des acteurs économiques et institutionnels, retours d'expérience de pairs ayant déjà franchi le pas.",
        ],
        list: [
          "Diagnostic personnel — projet, ressources, contraintes.",
          "Cartographie des opportunités — sectorielles, géographiques, financières.",
          "Sécurisation juridique et fiscale du projet.",
          "Préparation de la mission de terrain.",
          "Soutenance devant un comité InPolitics.",
        ],
      },
      {
        h: "Suite du parcours",
        p: [
          "À l'issue du bootcamp, chaque participant accède au réseau Diaspora Connect et à la conciergerie d'accompagnement de l'Institut.",
        ],
      },
    ],
  },
  "diaspora/connect": {
    eyebrow: "Espace Diaspora — Connect",
    title: "Diaspora Connect",
    intro:
      "Une plateforme de mise en relation entre profils de la diaspora et besoins identifiés sur les territoires partenaires.",
    sections: [
      {
        h: "Le principe",
        p: [
          "Diaspora Connect met en relation, de façon qualifiée et confidentielle, des profils experts résidant en Europe avec des projets identifiés sur les territoires partenaires : missions de conseil, opportunités d'investissement, mandats de coopération institutionnelle.",
        ],
      },
      {
        h: "Comment cela fonctionne",
        p: [
          "Chaque profil est validé par l'Institut sur la base de son CV et d'un entretien. Chaque besoin est qualifié par notre équipe locale. Les mises en relation sont opérées par un chargé de mission dédié, dans un cadre déontologique strict.",
        ],
        list: [
          "Inscription gratuite et confidentielle.",
          "Validation du profil par un entretien.",
          "Notifications ciblées selon expertise et disponibilité.",
          "Suivi de mission par un chargé de relation.",
        ],
      },
      {
        h: "Garde-fous",
        p: [
          "L'Institut s'interdit toute commission au succès et ne perçoit aucun honoraire d'intermédiation. Diaspora Connect est financé par les cotisations institutionnelles et les partenariats territoriaux.",
        ],
      },
    ],
  },
  "diaspora/conciergerie": {
    eyebrow: "Espace Diaspora — Conciergerie",
    title: "Conciergerie & Sécurisation",
    intro:
      "Accompagnement foncier, juridique et fiscal pour sécuriser les projets de la diaspora sur leurs territoires d'origine.",
    sections: [
      {
        h: "Pourquoi une conciergerie ?",
        p: [
          "Investir, transmettre ou s'installer depuis l'Europe expose à des risques juridiques et fonciers réels. La conciergerie InPolitics offre un point d'entrée unique : un chargé de mission qui pilote l'ensemble du dossier en lien avec nos avocats et fiscalistes partenaires.",
        ],
      },
      {
        h: "Domaines couverts",
        p: [],
        list: [
          "Sécurisation foncière (titrement, bornage, contentieux).",
          "Structuration patrimoniale et successorale.",
          "Optimisation fiscale dans le respect des conventions bilatérales.",
          "Création d'entité économique locale.",
          "Représentation administrative en cas d'absence.",
        ],
      },
      {
        h: "Modalités",
        p: [
          "Service sur souscription, facturé au forfait selon le périmètre. Devis transparent après diagnostic initial gratuit. Tous les intervenants sont des professionnels réglementés.",
        ],
      },
    ],
  },

  /* ---------------- LE LAB ---------------- */
  "lab/publications": {
    eyebrow: "Le Lab — Publications",
    title: "Publications & Recherche",
    intro:
      "Les analyses, rapports et notes de l'Observatoire InPolitics : décryptage rigoureux des dynamiques politiques, territoriales et numériques.",
    sections: [
      {
        h: "Trois formats éditoriaux",
        p: [
          "L'Observatoire publie selon trois formats complémentaires : notes courtes (8 pages), rapports thématiques (40 à 80 pages) et baromètres annuels (données quantitatives).",
        ],
        list: [
          "Notes courtes — éclairages rapides sur l'actualité institutionnelle.",
          "Rapports thématiques — analyses approfondies, recommandations chiffrées.",
          "Baromètres annuels — séries longues d'indicateurs territoriaux.",
        ],
      },
      {
        h: "Méthodologie",
        p: [
          "Toutes nos publications obéissent à une méthodologie publique : sources documentées, données vérifiables, revue interne avant publication, distinction nette entre constat et préconisation.",
        ],
      },
      {
        h: "Accès",
        p: [
          "Les notes courtes sont publiées en accès libre. Les rapports thématiques sont disponibles à l'unité ou par abonnement annuel (Grand Public ou Corporate).",
        ],
      },
    ],
  },
  "lab/blog": {
    eyebrow: "Le Lab — Blog",
    title: "Le Blog du Décideur Public",
    intro:
      "Tribunes, analyses et décryptages signés par les chercheurs de l'Institut, ses intervenants invités et son réseau d'alumni.",
    sections: [
      {
        h: "Une ligne éditoriale exigeante",
        p: [
          "Le blog du Décideur Public donne la parole à des praticiens : élus, hauts fonctionnaires, universitaires, dirigeants. Chaque tribune passe par un comité de lecture pour garantir la rigueur de l'argumentation et l'absence de conflits d'intérêts non déclarés.",
        ],
      },
      {
        h: "Rubriques",
        p: [],
        list: [
          "Décryptages — analyse des décisions publiques majeures.",
          "Tribunes — points de vue argumentés signés.",
          "Retours de terrain — récits d'expérience d'élus et de cadres.",
          "Entretiens — conversations longues avec des décideurs.",
        ],
      },
      {
        h: "Contribuer",
        p: [
          "Le blog accueille des contributions extérieures sous réserve de qualité éditoriale. Les propositions sont à adresser à la rédaction via le formulaire de contact.",
        ],
      },
    ],
  },
  "lab/actualites-evenements": {
    eyebrow: "Le Lab — Agenda",
    title: "Actualités & Événements",
    intro:
      "Séminaires, colloques, revues d'actualité, conférences publiques. L'agenda institutionnel de l'Institut.",
    sections: [
      {
        h: "Une programmation à plusieurs niveaux",
        p: [
          "L'Institut anime tout au long de l'année une programmation à trois niveaux : conférences publiques (ouvertes sur inscription), séminaires fermés (sur invitation) et colloques annuels (un grand rendez-vous par axe stratégique).",
        ],
        list: [
          "Conférences publiques — un rendez-vous mensuel à Gigean.",
          "Séminaires fermés — Club Exec et Alumni.",
          "Colloque annuel Diplomatie Territoriale.",
          "Colloque annuel Gouvernance Digitale.",
        ],
      },
      {
        h: "Modalités d'inscription",
        p: [
          "Les inscriptions aux conférences publiques sont gratuites mais obligatoires (capacité limitée). Les séminaires fermés sont sur invitation nominative.",
        ],
      },
    ],
  },
  "lab/livre": {
    eyebrow: "Le Lab — Livre",
    title: 'Le Livre — "Communiquer en Politique"',
    intro:
      "Un ouvrage de référence sur la communication politique contemporaine, signé par la Direction de l'Institut.",
    sections: [
      {
        h: "Présentation",
        p: [
          "\"Communiquer en Politique\" propose une grammaire opérationnelle de la communication des élus, des institutions et des candidats à l'heure des réseaux sociaux, de l'IA générative et de la défiance démocratique.",
          "L'ouvrage articule théorie communicationnelle, retours d'expérience récents et boîte à outils pratique. Il s'adresse aux élus, à leurs équipes et aux étudiants des sciences politiques.",
        ],
      },
      {
        h: "Sommaire indicatif",
        p: [],
        list: [
          "Partie I — Cadre conceptuel et histoire de la communication politique.",
          "Partie II — Récit, image, plateformes : la nouvelle économie de l'attention.",
          "Partie III — Stratégie de campagne et conduite de mandat.",
          "Partie IV — Gestion de crise et résilience institutionnelle.",
          "Annexes — Modèles, check-lists et études de cas.",
        ],
      },
      {
        h: "Commande",
        p: [
          "L'ouvrage est disponible en librairie et par commande directe auprès de l'Institut. Les commandes institutionnelles bénéficient d'une tarification dédiée.",
        ],
      },
    ],
  },
};

export function RichSubPage({ k }: { k: string }) {
  const c = SUBPAGE_CONTENT[k];
  if (!c) {
    return (
      <SubPage eyebrow="InPolitics Institute" title="Page" intro="">
        <p>Contenu en préparation.</p>
      </SubPage>
    );
  }
  return (
    <SubPage eyebrow={c.eyebrow} title={c.title} intro={c.intro}>
      {c.sections.map((s, i) => (
        <section key={i} className="space-y-4">
          <h2 className="font-serif text-2xl md:text-3xl text-anthracite leading-tight mt-2">
            {s.h}
          </h2>
          {s.p.map((para, pi) => (
            <p key={pi}>{para}</p>
          ))}
          {s.list && (
            <ul className="list-disc pl-6 space-y-2 marker:text-crimson">
              {s.list.map((li, li_i) => (
                <li key={li_i}>{li}</li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </SubPage>
  );
}

export function RichSubPageWithBanner({ k, bannerImage }: { k: string; bannerImage: string }) {
  const c = SUBPAGE_CONTENT[k];
  if (!c) {
    return (
      <SubPageWithBanner eyebrow="InPolitics Institute" title="Page" intro="" bannerImage={bannerImage}>
        <p>Contenu en préparation.</p>
      </SubPageWithBanner>
    );
  }
  return (
    <SubPageWithBanner eyebrow={c.eyebrow} title={c.title} intro={c.intro} bannerImage={bannerImage}>
      {c.sections.map((s, i) => (
        <section key={i} className="space-y-4">
          <h2 className="font-serif text-2xl md:text-3xl text-anthracite leading-tight mt-2">
            {s.h}
          </h2>
          {s.p.map((para, pi) => (
            <p key={pi}>{para}</p>
          ))}
          {s.list && (
            <ul className="list-disc pl-6 space-y-2 marker:text-crimson">
              {s.list.map((li, li_i) => (
                <li key={li_i}>{li}</li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </SubPageWithBanner>
  );
}
