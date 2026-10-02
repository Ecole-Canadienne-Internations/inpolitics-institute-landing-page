import type { LandingLanguage } from "./landing-language";

// French is the editorial source. Names, addresses, programme titles and legal names remain unchanged.
// A row is [fr, en, es]: the French wording is also the lookup key.
// A 4-item row is [source, fr, en, es]: it is used when the text rendered in the DOM is not
// French to begin with (e.g. the shared 404/error components or the dialog close button), so the
// key stays the rendered source text while French still gets its own wording.
type Phrase = [string, string, string] | [string, string, string, string];
const phrases: Phrase[] = [
  ["Accueil", "Home", "Inicio"],
  ["Contact", "Contact", "Contacto"],
  ["L'Institut", "The Institute", "El Instituto"],
  ["Programmes", "Programmes", "Programas"],
  ["Executifs", "Executives", "Ejecutivos"],
  ["Lobbying & Réseau", "Advocacy & Network", "Incidencia y Red"],
  ["Gouvernance Digitale", "Digital Governance", "Gobernanza Digital"],
  ["Espace Diaspora", "Diaspora", "Diáspora"],
  ["Le Lab", "The Lab", "El Laboratorio"],
  ["Vision", "Vision", "Visión"],
  ["Nos sites", "Our sites", "Nuestras sedes"],
  [
    "Galerie & Image (Immersion sur le site)",
    "Gallery & Images (Explore the site)",
    "Galería e imágenes (Explore la sede)",
  ],
  ["Diplomatie Territoriale", "Territorial Diplomacy", "Diplomacia Territorial"],
  [
    "Lobbying, Plaidoyer & Intégrité",
    "Advocacy, Representation & Integrity",
    "Incidencia, Defensa e Integridad",
  ],
  [
    'Label "Commune de Haute Intégrité"',
    "High-Integrity Municipality Label",
    "Sello Municipio de Alta Integridad",
  ],
  ["Programmes Ouverts", "Open Programmes", "Programas Abiertos"],
  [
    "Séminaires d'Immersion (Gigean)",
    "Immersion Seminars (Gigean)",
    "Seminarios de Inmersión (Gigean)",
  ],
  [
    "Plaidoyer & Stratégies d'Influence",
    "Advocacy & Influence Strategies",
    "Incidencia y Estrategias de Influencia",
  ],
  [
    "Formations Continues (Afrique)",
    "Continuing Education (Africa)",
    "Formación Continua (África)",
  ],
  [
    "Cursus Hybrides & E-learning",
    "Hybrid Courses & E-learning",
    "Cursos Híbridos y Aprendizaje en Línea",
  ],
  ["Visites Techniques", "Technical Visits", "Visitas Técnicas"],
  [
    "Gouvernance & Stratégie d'État",
    "Governance & State Strategy",
    "Gobernanza y Estrategia de Estado",
  ],
  [
    "Diplomatie & Relations Internationales",
    "Diplomacy & International Relations",
    "Diplomacia y Relaciones Internacionales",
  ],
  [
    "Communication & Analyse Politique",
    "Communication & Political Analysis",
    "Comunicación y Análisis Político",
  ],
  ["Techno Politiques", "Political Technology", "Tecnología Política"],
  ["Notre Méthode en 6 Axes", "Our Six-Part Method", "Nuestro Método en Seis Ejes"],
  [
    "Le cercle de réflexion privé de l'institut.",
    "The institute’s private forum for reflection.",
    "El foro privado de reflexión del instituto.",
  ],
  ["Club InPolitics Exec", "InPolitics Executive Club", "Club Ejecutivo InPolitics"],
  ["Services aux Entreprises", "Business Services", "Servicios para Empresas"],
  ["Observatoire Politique", "Political Observatory", "Observatorio Político"],
  ["Solutions SaaS Municipales", "Municipal SaaS Solutions", "Soluciones SaaS Municipales"],
  ["IA & Data Science", "AI & Data Science", "IA y Ciencia de Datos"],
  ["Études de Cas", "Case Studies", "Estudios de Caso"],
  ["Conciergerie & Sécurisation", "Concierge & Safeguarding", "Conserjería y Protección"],
  ["Publications & Recherche", "Publications & Research", "Publicaciones e Investigación"],
  ["Le Blog du Décideur Public", "Public Leaders’ Blog", "Blog de los Responsables Públicos"],
  ["Actualités & Événements", "News & Events", "Noticias y Eventos"],
  ["Le Livre", "The Book", "El Libro"],
  [
    "Le texte officiel d'Arnaud SIGHANO.",
    "Arnaud SIGHANO’s official statement.",
    "Declaración oficial de Arnaud SIGHANO.",
  ],
  [
    "Gigean (Montpellier Métropole) & perspectives d'extension en Afrique.",
    "Gigean (Montpellier Métropole) and expansion plans in Africa.",
    "Gigean (Montpellier Métropole) y planes de expansión en África.",
  ],
  [
    "Plongez dans une immersion visuelle au cœur du site de l'Institut.",
    "Explore the institute’s site through images.",
    "Explore la sede del instituto a través de imágenes.",
  ],
  [
    "Positionnement international des territoires.",
    "International positioning of territories.",
    "Proyección internacional de los territorios.",
  ],
  [
    "Charte éthique et conformité OCDE/UE.",
    "Ethical charter and OECD/EU compliance.",
    "Carta ética y cumplimiento OCDE/UE.",
  ],
  [
    "Standard de transparence financière.",
    "Financial transparency standard.",
    "Norma de transparencia financiera.",
  ],
  [
    "Formations certifiantes ouvertes aux inscriptions.",
    "Certification courses open for enrolment.",
    "Formaciones certificadas con inscripciones abiertas.",
  ],
  [
    "Formations de 3 à 5 jours pour l'élite publique.",
    "Three- to five-day courses for public-sector leaders.",
    "Formaciones de tres a cinco días para líderes públicos.",
  ],
  [
    "Programme phare d'ingénierie d'influence.",
    "Flagship strategic influence programme.",
    "Programa insignia de estrategia de influencia.",
  ],
  [
    "Sessions de mise à niveau sur le continent.",
    "Professional development sessions across Africa.",
    "Sesiones de actualización profesional en África.",
  ],
  [
    "Plateforme 24/7 — 80% en ligne, 20% présentiel.",
    "24/7 platform — 80% online, 20% in person.",
    "Plataforma 24/7: 80% en línea, 20% presencial.",
  ],
  [
    "Smart Cities, eau, gestion des déchets.",
    "Smart cities, water and waste management.",
    "Ciudades inteligentes, agua y gestión de residuos.",
  ],
  [
    "Administration publique, éthique républicaine et leadership institutionnel.",
    "Public administration, civic ethics and institutional leadership.",
    "Administración pública, ética republicana y liderazgo institucional.",
  ],
  [
    "Géopolitique, négociation multilatérale et soft power.",
    "Geopolitics, multilateral negotiation and soft power.",
    "Geopolítica, negociación multilateral y poder blando.",
  ],
  [
    "Communication de crise, opinion et stratégie d'influence.",
    "Crisis communications, public opinion and influence strategy.",
    "Comunicación de crisis, opinión pública y estrategia de influencia.",
  ],
  [
    "Data, SaaS territoriaux et IA pour la décision publique.",
    "Data, territorial SaaS and AI for public decisions.",
    "Datos, SaaS territorial e IA para la toma de decisiones públicas.",
  ],
  [
    "Les 3 phases d'InPolitics Influence.",
    "The three phases of InPolitics Influence.",
    "Las tres fases de InPolitics Influence.",
  ],
  [
    "Position papers et accès aux marchés.",
    "Position papers and market access.",
    "Documentos de posición y acceso a mercados.",
  ],
  [
    "Baromètres, cartographie électorale et analyse territoriale.",
    "Barometers, electoral mapping and territorial analysis.",
    "Barómetros, mapas electorales y análisis territorial.",
  ],
  [
    "Sécurisation numérique des taxes locales.",
    "Digital security for local tax collection.",
    "Seguridad digital para los impuestos locales.",
  ],
  [
    "Algorithmes prédictifs pour l'aménagement urbain.",
    "Predictive algorithms for urban planning.",
    "Algoritmos predictivos para la planificación urbana.",
  ],
  [
    "Analyses réelles des municipalités partenaires.",
    "Real-world studies of partner municipalities.",
    "Estudios reales de municipios asociados.",
  ],
  [
    "Bootcamp de reconnexion économique à Gigean.",
    "Economic reconnection bootcamp in Gigean.",
    "Programa intensivo de reconexión económica en Gigean.",
  ],
  [
    "Matching profils Europe / besoins locaux Afrique.",
    "Matching European talent with local African needs.",
    "Vinculación del talento europeo con necesidades locales africanas.",
  ],
  [
    "Foncier, juridique et fiscal.",
    "Property, legal and tax support.",
    "Apoyo inmobiliario, jurídico y fiscal.",
  ],
  [
    "Analyses et rapports de l'Observatoire.",
    "Observatory analyses and reports.",
    "Análisis e informes del Observatorio.",
  ],
  [
    "Tribunes, analyses et décryptages.",
    "Opinion, analysis and insight.",
    "Opinión, análisis y perspectivas.",
  ],
  [
    "Séminaires, colloques, revues.",
    "Seminars, conferences and journals.",
    "Seminarios, congresos y revistas.",
  ],
  [
    'Présentation et commande de "Communiquer en Politique".',
    "Discover and order ‘Communiquer en Politique’.",
    "Descubra y solicite «Communiquer en Politique».",
  ],
  [
    "Why School of Politics? — Discover our vision and mission.",
    "Why School of Politics? Discover our vision and mission.",
    "¿Por qué School of Politics? Descubra nuestra visión y misión.",
  ],
  [
    "Submit your application to join the School of Politics.",
    "Apply to join the School of Politics.",
    "Presente su candidatura a School of Politics.",
  ],
  ["Apply", "Apply", "Inscribirse"],
  [
    "L'Institut des Décideurs Publics, de la Diplomatie, de la Performance Territoriale et de la Gouvernance Digitale.",
    "The Institute for Public Decision-Makers, Diplomacy, Territorial Performance and Digital Governance.",
    "El Instituto de Responsables Públicos, Diplomacia, Desarrollo Territorial y Gobernanza Digital.",
  ],
  ["Formez-vous aux", "Develop expertise in", "Fórmese en"],
  [
    "leviers de la décision stratégique",
    "strategic decision-making",
    "la toma de decisiones estratégicas",
  ],
  [
    ", de la diplomatie et de la gouvernance digitale.",
    ", diplomacy and digital governance.",
    ", la diplomacia y la gobernanza digital.",
  ],
  [
    "— L'Institut des Décideurs Publics, de la Diplomatie Territoriale, de la Performance Territoriale et de la Gouvernance Digitale au service du développement économique.",
    "— The institute for public decision-makers, territorial diplomacy, territorial performance and digital governance, advancing economic development.",
    "— El instituto de responsables públicos, diplomacia territorial, desarrollo territorial y gobernanza digital al servicio del desarrollo económico.",
  ],
  [
    "Apply for School of Politics",
    "Apply for School of Politics",
    "Inscribirse en School of Politics",
  ],
  ["Découvrir l'institut", "Discover the institute", "Descubrir el instituto"],
  ["INSCRIPTIONS OUVERTES", "ENROLMENT OPEN", "INSCRIPCIONES ABIERTAS"],
  ["À LA UNE", "FEATURED", "DESTACADO"],
  [
    "Gouvernance Publique et Décentralisation : Enjeux, acteurs et territoires",
    "Public Governance and Territorial Administration: Issues, Stakeholders and Territories",
    "Gobernanza Pública y Administración Territorial: Retos, Actores y Territorios",
  ],
  [
    "Formation certifiante — Certification RNCP / Qualiopi Répertoire Spécifique (RS)",
    "Certification course — RNCP / Qualiopi Répertoire Spécifique (RS)",
    "Formación certificada — RNCP / Qualiopi Répertoire Spécifique (RS)",
  ],
  [
    "Prochaine session : Janvier 2027",
    "Next session: January 2027",
    "Próxima sesión: enero de 2027",
  ],
  ["Découvrir la formation", "Explore the course", "Descubrir la formación"],
  [
    "Mot de la Directrice Générale",
    "A message from the Managing Director",
    "Mensaje de la Directora General",
  ],
  [
    "« Se réunir est un début, rester ensemble est un progrès, travailler ensemble est la réussite. »",
    "“Coming together is a beginning; staying together is progress; working together is success.”",
    "«Reunirse es un comienzo; permanecer juntos es un progreso; trabajar juntos es el éxito»",
  ],
  [
    "Spécialiste de la diplomatie d'influence, de la communication institutionnelle et des affaires publiques, Aurélie SÉREL mobilise les réseaux du groupe GEFI au service de la vision stratégique et technopolitique de l'Institut.",
    "A specialist in influence diplomacy, institutional communication and public affairs, Aurélie SÉREL brings GEFI Group’s networks to the institute’s strategic and political-technology vision.",
    "Especialista en diplomacia de influencia, comunicación institucional y asuntos públicos, Aurélie SÉREL pone las redes del grupo GEFI al servicio de la visión estratégica y tecnopolítica del instituto.",
  ],
  [
    "Directrice Générale — InPolitics Institute",
    "Managing Director — InPolitics Institute",
    "Directora General — InPolitics Institute",
  ],
  ["Directrice Générale", "Managing Director", "Directora General"],
  ["Fondateur & Directeur Associé", "Founder & Associate Director", "Fundador y Director Asociado"],
  ["Directeur Associé", "Associate Director", "Director Asociado"],
  [
    "Co-fondateur — Expert Urbaniste et Haussmannien",
    "Co-founder — Urban Planning and Haussmannian Expert",
    "Cofundador — Experto en Urbanismo y Haussmannismo",
  ],
  ["Directeur Afrique", "Africa Director", "Director para África"],
  ["Voir plus", "Read more", "Leer más"],
  ["En savoir plus", "Learn more", "Más información"],
  ["01 — Qui sommes-nous", "01 — Who we are", "01 — Quiénes somos"],
  ["07 — Qui sommes-nous", "07 — Who we are", "07 — Quiénes somos"],
  ["La Direction de l'Institut", "Institute leadership", "Dirección del instituto"],
  [
    "Une équipe pluridisciplinaire unie par une même exigence d'excellence.",
    "A multidisciplinary team united by a shared commitment to excellence.",
    "Un equipo multidisciplinario unido por un mismo compromiso con la excelencia.",
  ],
  [
    "Un think tank pédagogique au service des Nations.",
    "An educational think tank serving nations.",
    "Un centro de pensamiento educativo al servicio de las naciones.",
  ],
  [
    "InPolitics Institute forme la prochaine génération de décideurs publics aux disciplines essentielles de la République : diplomatie territoriale, gouvernance digitale, lobbying d'intégrité et performance des territoires.",
    "InPolitics Institute prepares the next generation of public decision-makers in the Republic’s essential disciplines: territorial diplomacy, digital governance, ethical advocacy and territorial performance.",
    "InPolitics Institute forma a la próxima generación de responsables públicos en las disciplinas esenciales de la República: diplomacia territorial, gobernanza digital, incidencia ética y desarrollo territorial.",
  ],
  [
    "Notre approche fusionne la rigueur académique européenne, la spécificité du terrain et l'exigence éthique d'une République qui se construit, depuis notre site Europe de Gigean (Montpellier Métropole) jusqu'à nos pôles Afrique.",
    "Our approach combines European academic rigour, practical insight and an unwavering ethical commitment, from our European site in Gigean (Montpellier Métropole) to our African centres.",
    "Nuestro enfoque combina el rigor académico europeo, la experiencia práctica y el compromiso ético, desde nuestra sede europea en Gigean (Montpellier Métropole) hasta nuestros centros africanos.",
  ],
  ["Notre Manifeste", "Our Manifesto", "Nuestro Manifiesto"],
  [
    "Votre navigateur ne supporte pas la lecture vidéo.",
    "Your browser does not support video playback.",
    "Su navegador no admite la reproducción de vídeo.",
  ],
  [
    "Mêler science politique, données et communication d'impact. La politique n'est pas qu'une affaire de discours, c'est une science de la donnée et de la stratégie.",
    "Combining political science, data and impactful communication. Politics is more than rhetoric: it is a science of data and strategy.",
    "Unir ciencia política, datos y comunicación de impacto. La política es más que discursos: es una ciencia de datos y estrategia.",
  ],
  ["Pour voir la suite", "Explore further", "Ver más"],
  ["02 — Piliers de l'institut", "02 — Institute pillars", "02 — Pilares del instituto"],
  [
    "Trois piliers. Une seule exigence : l'excellence.",
    "Three pillars. One commitment: excellence.",
    "Tres pilares. Un solo compromiso: la excelencia.",
  ],
  ["Programme complet", "Full programme", "Programa completo"],
  [
    "L'Executive Education de Haute Performance",
    "High-Performance Executive Education",
    "Formación Ejecutiva de Alto Rendimiento",
  ],
  [
    "Programmes d'excellence (en ligne et présentiel) et séminaires d'immersion de 3 à 5 jours, validés par une direction scientifique universitaire rigoureuse.",
    "Outstanding online and in-person programmes, plus three- to five-day immersion seminars, overseen by a rigorous academic board.",
    "Programas de excelencia en línea y presenciales, y seminarios de inmersión de tres a cinco días, supervisados por un riguroso comité académico.",
  ],
  ["Les Enjeux Technopolitiques", "Political Technology Challenges", "Desafíos Tecnopolíticos"],
  [
    "La politique et la technologie désormais indissociables. Science des données, SaaS et IA au cœur de la décision publique.",
    "Politics and technology are now inseparable. Data science, SaaS and AI are central to public decision-making.",
    "La política y la tecnología son inseparables. La ciencia de datos, el SaaS y la IA son fundamentales para las decisiones públicas.",
  ],
  [
    "La Diplomatie d'Influence et de Réseau",
    "Influence and Network Diplomacy",
    "Diplomacia de Influencia y Redes",
  ],
  [
    "Lobbying d'intégrité et plaidoyer éthique comme leviers légitimes du développement. Mise en relation des décideurs et investisseurs.",
    "Integrity-led advocacy as a legitimate driver of development, connecting decision-makers and investors.",
    "La incidencia ética como motor legítimo del desarrollo, conectando a responsables públicos e inversores.",
  ],
  ["Découvrir", "Explore", "Descubrir"],
  ["La Simul' Crise", "Crisis Simulation", "Simulación de Crisis"],
  ["Une immersion totale dans la", "A full immersion in", "Una inmersión total en"],
  ["prise de décision", "decision-making", "la toma de decisiones"],
  [
    "Une fois par trimestre, l'institut organise une simulation de crise de 48 heures non-stop : gestion d'une crise diplomatique, élection présidentielle fictive ou cyberattaque d'État. Les étudiants jouent les rôles des ministres, des conseillers et des porte-parole.",
    "Once a quarter, the institute runs a 48-hour crisis simulation: a diplomatic crisis, a fictional presidential election or a state cyberattack. Participants take on the roles of ministers, advisers and spokespeople.",
    "Cada trimestre, el instituto organiza una simulación de crisis de 48 horas: una crisis diplomática, unas elecciones presidenciales ficticias o un ciberataque estatal. Los participantes asumen los papeles de ministros, asesores y portavoces.",
  ],
  ["J-0 : Déclenchement", "Day 0: The trigger", "Día 0: El inicio"],
  [
    "Une crise réelle (diplomatique, électorale ou cyber) est annoncée à 8h00.",
    "A real-world diplomatic, electoral or cyber crisis is announced at 8 a.m.",
    "A las 8:00 se anuncia una crisis diplomática, electoral o cibernética.",
  ],
  ["48 heures non-stop", "48 hours non-stop", "48 horas sin pausa"],
  [
    "Les étudiants endossent les rôles de ministres, conseillers et porte-parole.",
    "Participants step into the roles of ministers, advisers and spokespeople.",
    "Los participantes asumen el papel de ministros, asesores y portavoces.",
  ],
  ["Débriefing d'État", "Government debrief", "Evaluación de Estado"],
  [
    "Décryptage par un jury d'anciens ministres, diplomates et experts en sécurité.",
    "Review by a panel of former ministers, diplomats and security experts.",
    "Evaluación por un jurado de exministros, diplomáticos y expertos en seguridad.",
  ],
  ["03 — Preuve d'autorité", "03 — Our credentials", "03 — Nuestras credenciales"],
  [
    "Une infrastructure pédagogique et stratégique sans équivalent.",
    "An unparalleled educational and strategic platform.",
    "Una plataforma educativa y estratégica sin igual.",
  ],
  [
    "Heures de simulations de débats et de gestion de crise",
    "Hours of debate and crisis-management simulations",
    "Horas de simulaciones de debate y gestión de crisis",
  ],
  [
    "Des intervenants : experts, diplomates et hauts commis de l'État",
    "Instructors: experts, diplomats and senior civil servants",
    "Ponentes: expertos, diplomáticos y altos funcionarios",
  ],
  [
    "Observatoire unique d'analyse de données politiques territoriales",
    "Unique observatory for territorial political data analysis",
    "Observatorio único de análisis de datos políticos territoriales",
  ],
  ["04 — Processus d'admission", "04 — Admissions process", "04 — Proceso de admisión"],
  [
    "Trois étapes vers l'excellence républicaine.",
    "Three steps towards public-service excellence.",
    "Tres pasos hacia la excelencia pública.",
  ],
  ["Étude de dossier", "Application review", "Revisión de solicitud"],
  [
    "Soumission du CV et d'une lettre de motivation en ligne.",
    "Submit your CV and cover letter online.",
    "Envíe su CV y carta de motivación en línea.",
  ],
  ["Entretien de sélection", "Selection interview", "Entrevista de selección"],
  [
    "Grand oral devant le jury de l'institut (physique ou en ligne).",
    "Interview with the institute’s panel, in person or online.",
    "Entrevista ante el comité del instituto, presencial o en línea.",
  ],
  ["Admission définitive", "Final admission", "Admisión definitiva"],
  [
    "Intégration officielle de la nouvelle cohorte des élites.",
    "Official welcome to the new cohort of leaders.",
    "Incorporación oficial a la nueva promoción de líderes.",
  ],
  ["06 — Mot du Directeur", "06 — A message from the Director", "06 — Mensaje del Director"],
  [
    "« Bienvenue sur la plateforme officielle d'InPolitics Institute. À l'ère des mutations géopolitiques majeures et de l'accélération numérique, la gestion des affaires publiques et le développement économique exigent des paradigmes entièrement renouvelés. »",
    "“Welcome to the official InPolitics Institute platform. In an era of major geopolitical shifts and digital acceleration, public affairs and economic development call for entirely new approaches.”",
    "«Bienvenidos a la plataforma oficial de InPolitics Institute. En una era de grandes cambios geopolíticos y aceleración digital, los asuntos públicos y el desarrollo económico exigen enfoques completamente nuevos»",
  ],
  [
    "Directeur Fondateur — InPolitics Institute",
    "Founder & Associate Director — InPolitics Institute",
    "Fundador y Director Asociado — InPolitics Institute",
  ],
  ["07 — Questions fréquentes", "07 — Frequently asked questions", "07 — Preguntas frecuentes"],
  ["Tout ce que vous devez savoir.", "Everything you need to know.", "Todo lo que necesita saber."],
  [
    "Quels sont les débouchés professionnels après un cursus à l'Inpolitics Institute ?",
    "What career paths follow an InPolitics Institute programme?",
    "¿Qué oportunidades profesionales ofrece un programa de InPolitics Institute?",
  ],
  [
    "Nos diplômés intègrent des fonctions de premier plan : hauts fonctionnaires, conseillers en cabinet ministériel, diplomates, directeurs d'administrations publiques et d'institutions régionales, directeurs des affaires publiques en entreprise, consultants en stratégie de crise, analystes politiques seniors et spécialistes en Data Analytics politique.",
    "Our graduates move into leading roles as senior civil servants, ministerial advisers, diplomats, public administration and regional institution directors, corporate public-affairs directors, crisis-strategy consultants, senior political analysts and political data specialists.",
    "Nuestros graduados ocupan puestos de alto nivel como funcionarios, asesores ministeriales, diplomáticos, directores de administraciones e instituciones regionales, responsables de asuntos públicos, consultores de crisis y analistas políticos y de datos.",
  ],
  [
    "Comment l'Observatoire Inpolitics garantit-il la neutralité, l'anonymat et la précision de ses données ?",
    "How does the InPolitics Observatory ensure neutral, anonymous and accurate data?",
    "¿Cómo garantiza el Observatorio InPolitics la neutralidad, el anonimato y la precisión de los datos?",
  ],
  [
    "Notre crédibilité repose sur une méthodologie scientifique stricte : protocoles d'échantillonnage rigoureux (méthode des quotas) validés par des experts en statistiques, anonymisation et agrégation systématiques des données, et neutralité absolue — l'Observatoire ne s'aligne sur aucune formation politique.",
    "Our credibility rests on rigorous scientific methods: expert-validated quota sampling, systematic anonymisation and aggregation, and complete political neutrality. The Observatory is not affiliated with any political party.",
    "Nuestra credibilidad se basa en una metodología científica rigurosa: muestreo por cuotas validado por expertos, anonimización y agregación sistemáticas, y neutralidad política absoluta. El Observatorio no está vinculado a ningún partido.",
  ],
  [
    "Les formations sont-elles adaptées aux professionnels en activité ?",
    "Are the courses suitable for working professionals?",
    "¿Son adecuados los cursos para profesionales en activo?",
  ],
  [
    "Oui. Nous proposons un format Executive Education (cours du soir & week-ends) pour les cadres, ainsi qu'un format hybride / en ligne avec une plateforme e-learning sécurisée accessible 24/7.",
    "Yes. We offer Executive Education in evening and weekend formats, as well as hybrid and online learning on a secure 24/7 platform.",
    "Sí. Ofrecemos formación ejecutiva por las tardes y los fines de semana, además de cursos híbridos y en línea en una plataforma segura disponible 24/7.",
  ],
  [
    "Les diplômes et certifications sont-ils reconnus à l'international ?",
    "Are degrees and certificates recognised internationally?",
    "¿Se reconocen los títulos y certificados internacionalmente?",
  ],
  [
    "Inpolitics Institute opère en totale conformité avec les exigences académiques nationales. Nos programmes suivent les standards des plus grands instituts de sciences politiques mondiaux, et des partenariats stratégiques avec des universités étrangères sont en cours de déploiement.",
    "InPolitics Institute complies with national academic requirements. Our programmes follow leading international political-science standards, and strategic partnerships with overseas universities are being developed.",
    "InPolitics Institute cumple los requisitos académicos nacionales. Nuestros programas siguen los estándares internacionales de ciencias políticas y estamos desarrollando alianzas con universidades extranjeras.",
  ],
  [
    "Comment fonctionne l'achat et l'accès aux rapports de l'Observatoire ?",
    "How can I purchase and access Observatory reports?",
    "¿Cómo se compran y consultan los informes del Observatorio?",
  ],
  [
    "Deux modes : l'achat à l'unité (téléchargement d'un rapport sectoriel en PDF dynamique) ou l'abonnement annuel (tableau de bord interactif, mises à jour mensuelles, accès Grand Public ou Corporate).",
    "Two options: buy an individual sector report as a downloadable PDF, or subscribe annually for an interactive dashboard, monthly updates and public or corporate access.",
    "Hay dos opciones: comprar un informe sectorial en PDF o contratar una suscripción anual con panel interactivo, actualizaciones mensuales y acceso público o empresarial.",
  ],
  ["Rejoindre l'élite", "Join the leaders", "Únase a los líderes"],
  [
    "Échangeons directement avec nos conseillers.",
    "Speak directly with our advisers.",
    "Hable directamente con nuestros asesores.",
  ],
  [
    "Brochure des programmes, accès en avant-première aux analyses de l'Observatoire Inpolitics et entretien confidentiel — par WhatsApp ou par email.",
    "Get a programme brochure, early access to Observatory insights and a confidential conversation — by WhatsApp or email.",
    "Solicite un folleto de programas, acceso anticipado a los análisis del Observatorio y una conversación confidencial por WhatsApp o correo electrónico.",
  ],
  ["Parler sur WhatsApp", "Chat on WhatsApp", "Hablar por WhatsApp"],
  ["Demander par email", "Ask by email", "Consultar por correo"],
  ["Parler à un conseiller", "Speak to an adviser", "Hablar con un asesor"],
  ["en toute confidentialité", "in complete confidence", "con total confidencialidad"],
  ["Informations légales", "Legal information", "Información legal"],
  ["Suivez-nous sur Facebook", "Follow us on Facebook", "Síganos en Facebook"],
  ["Retour à l'accueil", "Back to home", "Volver al inicio"],
  ["Mentions légales", "Legal notice", "Aviso legal"],
  ["Tous droits réservés.", "All rights reserved.", "Todos los derechos reservados."],
  [
    "L'Institut des Décideurs Publics, de la Diplomatie, de la Performance Territoriale et de la Gouvernance Digitale. Sites Europe à Gigean (Montpellier Métropole) & Afrique.",
    "The Institute for Public Decision-Makers, Diplomacy, Territorial Performance and Digital Governance. European site in Gigean (Montpellier Métropole) and African sites.",
    "El Instituto de Responsables Públicos, Diplomacia, Desarrollo Territorial y Gobernanza Digital. Sede europea en Gigean (Montpellier Métropole) y sedes africanas.",
  ],
  [
    "InPolitics Institute est un cabinet d'études-conseils, de formation et de recherche. Les formations sont hybrides (en présentiel et en ligne) sous forme d'ateliers et séminaires. Les diplômes sont français certifiés Qualiopi Répertoire Spécifique (RS).",
    "InPolitics Institute is a consultancy, training and research organisation. Its courses combine in-person and online workshops and seminars. Qualifications are French and certified under Qualiopi Répertoire Spécifique (RS).",
    "InPolitics Institute es una organización de consultoría, formación e investigación. Sus cursos combinan talleres y seminarios presenciales y en línea. Las titulaciones son francesas, certificadas por Qualiopi Répertoire Spécifique (RS).",
  ],
  [
    "Le site de l'Institut est établi à Gigean, au sein de Montpellier Métropole (France). Ce choix d'implantation répond à une exigence de neutralité : Gigean — Montpellier Métropole constitue un lieu neutre sur le plan géopolitique, propice à l'accueil de décideurs publics, de délégations et d'experts internationaux dans un cadre d'échange impartial, indépendant de toute affiliation partisane ou d'intérêt d'État.",
    "The institute is based in Gigean, within Montpellier Métropole, France. This location supports neutrality: Gigean offers a geopolitically neutral setting for public decision-makers, delegations and international experts to exchange ideas independently of party or state interests.",
    "La sede del instituto se encuentra en Gigean, en Montpellier Métropole, Francia. Este emplazamiento garantiza un entorno geopolíticamente neutral para el diálogo entre responsables públicos, delegaciones y expertos internacionales, libre de intereses partidistas o estatales.",
  ],
  [
    "L'Institut conduit ses travaux d'études, de recherche et de plaidoyer dans le respect des standards d'intégrité et de transparence applicables aux activités de conseil et de représentation d'intérêts.",
    "The institute conducts research and advocacy in accordance with the integrity and transparency standards applicable to consultancy and interest representation.",
    "El instituto realiza sus estudios, investigaciones y actividades de incidencia conforme a las normas de integridad y transparencia aplicables a la consultoría y la representación de intereses.",
  ],
  [
    "Gigean · Montpellier Métropole",
    "Gigean · Montpellier Métropole",
    "Gigean · Montpellier Métropole",
  ],
  ["Montpellier, France", "Montpellier, France", "Montpellier, Francia"],
  ["Vision & Mission", "Vision & Mission", "Visión y Misión"],
  ["Formulaire d'orientation", "Guidance form", "Formulario de orientación"],
  ["Échanger avec l'Institut", "Contact the Institute", "Contactar con el Instituto"],
  [
    "Présentez-nous votre projet, votre fonction et vos objectifs. Notre équipe vous répond sous 48h.",
    "Tell us about your project, role and objectives. Our team will reply within 48 hours.",
    "Cuéntenos su proyecto, su cargo y sus objetivos. Nuestro equipo responderá en un plazo de 48 horas.",
  ],
  ["Prénom", "First name", "Nombre"],
  ["Nom", "Last name", "Apellidos"],
  ["Email professionnel", "Work email", "Correo profesional"],
  ["Fonction / Organisation", "Role / Organisation", "Cargo / Organización"],
  [
    "Votre projet en quelques lignes…",
    "Describe your project briefly…",
    "Describa brevemente su proyecto…",
  ],
  ["Envoyer", "Send", "Enviar"],
  ["Envoi…", "Sending…", "Enviando…"],
  ["Message envoyé ✓", "Message sent ✓", "Mensaje enviado ✓"],
  [
    "Merci de remplir tous les champs obligatoires.",
    "Please complete all required fields.",
    "Complete todos los campos obligatorios.",
  ],
  [
    "L'envoi a échoué. Merci de réessayer.",
    "Your message could not be sent. Please try again.",
    "No se pudo enviar el mensaje. Inténtelo de nuevo.",
  ],
  [
    "Message envoyé — nous vous répondons sous 48h.",
    "Message sent — we will reply within 48 hours.",
    "Mensaje enviado: responderemos en un plazo de 48 horas.",
  ],
  [
    "Parler à un conseiller sur WhatsApp",
    "Speak to an adviser on WhatsApp",
    "Hablar con un asesor por WhatsApp",
  ],
  [
    "Bonjour, je souhaite des informations sur les programmes de InPolitics Institute",
    "Hello, I would like information about InPolitics Institute programmes",
    "Hola, quisiera recibir información sobre los programas de InPolitics Institute",
  ],
  ["Demande de brochure", "Programme brochure request", "Solicitud de folleto de programas"],

  /* ------------- Shared components used on every route ------------- */
  // Sub-page / biography / programme call-to-action block
  ["Contacter l'Institut", "Contact the Institute", "Contactar con el Instituto"],
  ["📩 Contacter l'Institut", "📩 Contact the Institute", "📩 Contactar con el Instituto"],
  [
    "Une question, un projet, une demande de partenariat ?",
    "A question, a project, a partnership request?",
    "¿Una pregunta, un proyecto, una solicitud de colaboración?",
  ],
  [
    "Échanger directement avec la Direction",
    "Speak directly with the leadership",
    "Hable directamente con la Dirección",
  ],
  ["Biographie — Direction", "Biography — Leadership", "Biografía — Dirección"],
  [
    "Biographie — Direction Générale",
    "Biography — Managing Director",
    "Biografía — Dirección General",
  ],
  ['Programme "Landing"', "Landing Programme", 'Programa "Landing"'],

  // Shared dialog / action labels (source text is not French)
  ["Close", "Fermer", "Close", "Cerrar"],

  // Shared 404 & error components
  ["Page not found", "Page introuvable", "Page not found", "Página no encontrada"],
  [
    "The page you're looking for doesn't exist or has been moved.",
    "La page que vous recherchez n'existe pas ou a été déplacée.",
    "The page you're looking for doesn't exist or has been moved.",
    "La página que busca no existe o ha sido movida.",
  ],
  ["Go home", "Retour à l'accueil", "Go home", "Ir al inicio"],
  [
    "This page didn't load",
    "Cette page n'a pas pu être chargée",
    "This page didn't load",
    "Esta página no se pudo cargar",
  ],
  [
    "Something went wrong on our end. You can try refreshing or head back home.",
    "Une erreur est survenue de notre côté. Vous pouvez actualiser la page ou revenir à l'accueil.",
    "Something went wrong on our end. You can try refreshing or head back home.",
    "Algo ha fallado de nuestro lado. Puede actualizar la página o volver al inicio.",
  ],
  ["Try again", "Réessayer", "Try again", "Reintentar"],

  // Application form — labels, legends, placeholders and actions
  ["Identité", "Identity", "Identidad"],
  ["Coordonnées", "Contact details", "Datos de contacto"],
  ["Adresse Email", "Email address", "Correo electrónico"],
  ["Numéro de Téléphone / WhatsApp", "Phone / WhatsApp number", "Número de teléfono / WhatsApp"],
  ["Pays de résidence", "Country of residence", "País de residencia"],
  ["Fonction / Institution actuelle", "Current role / Institution", "Cargo / Institución actual"],
  [
    "Programme / Formation souhaitée",
    "Programme / Course of choice",
    "Programa / Formación deseada",
  ],
  ["Sélectionnez une formation", "Select a course", "Seleccione una formación"],
  ["Motivation", "Motivation", "Motivación"],
  ["Message / Motivation", "Message / Motivation", "Mensaje / Motivación"],
  ["Informations complémentaires", "Additional information", "Información adicional"],
  ["Profil LinkedIn (facultatif)", "LinkedIn profile (optional)", "Perfil de LinkedIn (opcional)"],
  [
    "Comment avez-vous connu l'Institut ?",
    "How did you hear about the Institute?",
    "¿Cómo conoció el Instituto?",
  ],
  ["Sélectionnez une option", "Select an option", "Seleccione una opción"],
  [
    "Présentez votre parcours, vos objectifs et ce que vous attendez de ce programme…",
    "Describe your background, goals and what you expect from this programme…",
    "Describa su trayectoria, sus objetivos y lo que espera de este programa…",
  ],
  ["Les champs marqués d'un", "Fields marked with a", "Los campos marcados con un"],
  ["sont obligatoires", "are required", "son obligatorios"],
  ["Formulaire de Candidature", "Application Form", "Formulario de Solicitud"],
  ["Candidature envoyée", "Application submitted", "Solicitud enviada"],
  [
    "Merci de l'intérêt que vous portez à la School of Politics. Notre équipe des admissions étudie votre dossier et vous recontacte sous 48 à 72 heures.",
    "Thank you for your interest in the School of Politics. Our admissions team will review your application and get back to you within 48 to 72 hours.",
    "Gracias por su interés en la School of Politics. Nuestro equipo de admisión estudiará su solicitud y se pondrá en contacto en un plazo de 48 a 72 horas.",
  ],
  ["Déposer une autre candidature", "Submit another application", "Enviar otra solicitud"],
  [
    "Rejoignez l'élite des leaders et décideurs publics de demain. Complétez votre dossier en ligne.",
    "Join the leaders and public decision-makers of tomorrow. Complete your application online.",
    "Únase a los líderes y responsables públicos del mañana. Complete su solicitud en línea.",
  ],
  ["SOUMETTRE MA CANDIDATURE", "SUBMIT MY APPLICATION", "ENVIAR MI SOLICITUD"],
  ["Envoi en cours…", "Sending…", "Enviando…"],
  ["Le prénom est requis", "First name is required", "El nombre es obligatorio"],
  ["Le nom est requis", "Last name is required", "Los apellidos son obligatorios"],
  [
    "Adresse email valide requise",
    "A valid email address is required",
    "Se requiere una dirección de correo válida",
  ],
  [
    "Le numéro de téléphone est requis",
    "Phone number is required",
    "El número de teléfono es obligatorio",
  ],
  [
    "Le pays de résidence est requis",
    "Country of residence is required",
    "El país de residencia es obligatorio",
  ],
  ["Merci de sélectionner une formation", "Please select a course", "Seleccione una formación"],
  [
    "Merci d'écrire au moins 50 caractères de motivation",
    "Please write at least 50 characters of motivation",
    "Escriba al menos 50 caracteres de motivación",
  ],

  // Open programmes page — badges, prices and call-to-action labels
  ["Inscriptions Ouvertes", "Enrolment open", "Inscripciones abiertas"],
  ["Places Limitées", "Limited seats", "Plazas limitadas"],
  ["Nouveau", "New", "Nuevo"],
  ["Sur demande", "On request", "Bajo demanda"],
  [
    "Vous ne trouvez pas la formation qu'il vous faut ?",
    "Can't find the training you need?",
    "¿No encuentra la formación que necesita?",
  ],
  [
    "Notre équipe conçoit des formations sur-mesure pour votre Mairie ou votre institution. Contactez-nous.",
    "Our team designs bespoke training for your town hall or institution. Get in touch.",
    "Nuestro equipo diseña formaciones a medida para su ayuntamiento o institución. Contacte con nosotros.",
  ],
  ["DEMANDER UN DEVIS", "REQUEST A QUOTE", "SOLICITAR UN PRESUPUESTO"],
  ["Notifications alt+T", "Notifications alt+T", "Notificaciones alt+T"],
  [
    "InPolitics Institute — Site Europe à Gigean",
    "InPolitics Institute — European Site in Gigean",
    "InPolitics Institute — Sede Europea en Gigean",
  ],
  // --- BEGIN page-content phrases (generated) ---
  ["Menu", "Menu", "Menú"],
  [
    "Gestion Financière et Budgétaire des Collectivités Territoriales",
    "Financial and Budget Management of Local Authorities",
    "Gestión Financiera y Presupuestaria de las Entidades Territoriales",
  ],
  [
    "Leadership Politique et Communication Publique",
    "Political Leadership and Public Communication",
    "Liderazgo Político y Comunicación Pública",
  ],
  ["Modalités", "Details", "Detalles"],
  ["Programme", "Programme", "Programa"],
  [
    "Protocole, Diplomatie Locale et Coopération Décentralisée",
    "Protocol, Local Diplomacy and Decentralised Cooperation",
    "Protocolo, Diplomacia Local y Cooperación Descentralizada",
  ],
  [
    "— Arnaud SIGHANO, Fondateur & Directeur Associé d'InPolitics Institute",
    "— Arnaud SIGHANO, Founder & Associate Director of InPolitics Institute",
    "— Arnaud SIGHANO, Fundador y Director Asociado de InPolitics Institute",
  ],
  [
    "\"Communiquer en Politique\" propose une grammaire opérationnelle de la communication des élus, des institutions et des candidats à l'heure des réseaux sociaux, de l'IA générative et de la défiance démocratique.",
    '"Communiquer en Politique" offers an operational grammar of communication for elected officials, institutions and candidates in the age of social media, generative AI and democratic distrust.',
    "«Communiquer en Politique» ofrece una gramática operativa de la comunicación de electos, instituciones y candidatos en la era de las redes sociales, la IA generativa y la desconfianza democrática.",
  ],
  ["← Retour à l'accueil", "← Back to home", "← Volver al inicio"],
  [
    "01 — FORMATIONS ET RENFORCEMENT DE CAPACITÉS",
    "01 — TRAINING AND CAPACITY BUILDING",
    "01 — FORMACIÓN Y REFUERZO DE CAPACIDADES",
  ],
  [
    "1 — L'Executive Education de Haute Performance. Nous proposons des programmes d'excellence (en ligne et en présentiel) et des séminaires d'immersion de 3 à 5 jours ou plus au sein de notre siège à l'international, validés par une direction scientifique universitaire rigoureuse. Adaptés aux agendas des décideurs publics, des élus locaux et territoriaux, des directeurs et hauts dirigeants du secteur privé, des hommes politiques et de toute personne désireuse de s'outiller. Nos parcours lient la théorie aux réalités du terrain : gouvernance financière, droit OHADA, partenariats public-privé, intelligence artificielle au service de la gouvernance et Technopolitique, diplomatie territoriale et diplomatie d'influence, communication politique et de crise, relations internationales, innovations urbanistiques et territoriales.",
    "1 — High-Performance Executive Education. We offer outstanding programmes (online and in person) and three- to five-day or longer immersion seminars at our international headquarters, overseen by a rigorous academic board. They suit the schedules of public decision-makers, local and territorial elected officials, directors and senior private-sector executives, politicians and anyone looking to build up their skill set. Our pathways link theory to field realities: financial governance, OHADA law, public-private partnerships, artificial intelligence in the service of governance and political technology, territorial diplomacy and influence diplomacy, political and crisis communication, international relations, urban and territorial innovation.",
    "1 — Formación Ejecutiva de Alto Rendimiento. Ofrecemos programas de excelencia (en línea y presenciales) y seminarios de inmersión de tres a cinco días o más en nuestra sede internacional, supervisados por un riguroso comité académico. Se adaptan a las agendas de responsables públicos, electos locales y territoriales, directivos y altos ejecutivos del sector privado, políticos y cualquier persona que desee reforzar sus competencias. Nuestros itinerarios vinculan la teoría con la realidad del terreno: gobernanza financiera, derecho OHADA, asociaciones público-privadas, inteligencia artificial al servicio de la gobernanza y tecnología política, diplomacia territorial y diplomacia de influencia, comunicación política y de crisis, relaciones internacionales, innovación urbanística y territorial.",
  ],
  [
    "2 — Les Enjeux Technopolitiques. La politique et la technologie sont désormais indissociables. Nous intégrons la science des données, les solutions logicielles SaaS de gestion territoriale et municipale avec l'Intelligence Artificielle au cœur de la décision publique. Notre but est clair : outiller les élus pour automatiser la transparence, éradiquer la déperdition financière et doubler les recettes propres des collectivités territoriales.",
    "2 — Political Technology Challenges. Politics and technology are now inseparable. We place data science, territorial and municipal SaaS management solutions and artificial intelligence at the heart of public decision-making. Our goal is clear: equip elected officials to automate transparency, eradicate financial leakage and double the own-source revenues of local authorities.",
    "2 — Desafíos Tecnopolíticos. La política y la tecnología son inseparables. Situamos la ciencia de datos, las soluciones SaaS de gestión territorial y municipal y la inteligencia artificial en el corazón de la decisión pública. Nuestro objetivo es claro: dotar a los electos de herramientas para automatizar la transparencia, erradicar la pérdida financiera y duplicar los recursos propios de las entidades territoriales.",
  ],
  [
    "3 — La Diplomatie d'Influence et de Réseau. Nous faisons du lobbying d'intégrité et du plaidoyer éthique des leviers légitimes du développement. À travers une ingénierie rigoureuse de mise en relation, nous connectons les décideurs publics, les investisseurs privés et les réseaux d'influenceurs pour orienter les décisions stratégiques et capter les financements internationaux. C'est aussi le cœur du programme Diaspo Back-Home, qui sécurise le retour des compétences et des capitaux de la diaspora d'Europe vers les projets du continent.",
    "3 — Influence and Network Diplomacy. We treat integrity-led lobbying and ethical advocacy as legitimate drivers of development. Through rigorous matchmaking engineering, we connect public decision-makers, private investors and networks of influencers to steer strategic decisions and attract international funding. This is also the core of the Diaspo Back-Home programme, which secures the return of skills and capital from the European diaspora to projects on the continent.",
    "3 — Diplomacia de Influencia y Redes. Tratamos el lobby ético y la incidencia honesta como motores legítimos del desarrollo. A través de una ingeniería rigurosa de conexión, vinculamos a responsables públicos, inversores privados y redes de prescriptores para orientar las decisiones estratégicas y captar financiación internacional. Es también el corazón del programa Diaspo Back-Home, que asegura el retorno de talentos y capitales de la diáspora europea a los proyectos del continente.",
  ],
  [
    "5 jours intensifs sur le site Europe de Gigean, combinant ateliers stratégiques, rencontres avec des acteurs économiques et institutionnels, retours d'expérience de pairs ayant déjà franchi le pas.",
    "Five intensive days at our European site in Gigean, combining strategy workshops, meetings with economic and institutional players, and first-hand accounts from peers who have already made the leap.",
    "Cinco días intensivos en nuestra sede europea de Gigean, combinando talleres de estrategia, encuentros con actores económicos e institucionales y testimonios de colegas que ya dieron el paso.",
  ],
  [
    "À l'ère des mutations géopolitiques majeures et de l'accélération numérique, la gestion des affaires publiques et le développement économique exigent des paradigmes entièrement renouvelés. Les territoires, qu'ils soient en Europe ou au cœur de l'Afrique francophone, font face à un défi historique : maîtriser les forces Techno-Politiques pour bâtir une performance territoriale concrète, souveraine et durable.",
    "In an era of major geopolitical shifts and digital acceleration, public affairs and economic development call for entirely new approaches. Territories, whether in Europe or at the heart of francophone Africa, face a historic challenge: mastering political-technological forces to build concrete, sovereign and lasting territorial performance.",
    "En una era de grandes cambios geopolíticos y aceleración digital, los asuntos públicos y el desarrollo económico exigen enfoques completamente nuevos. Los territorios, ya sea en Europa o en el corazón del África francófona, enfrentan un desafío histórico: dominar las fuerzas tecnopolíticas para construir un desempeño territorial concreto, soberano y duradero.",
  ],
  [
    "À l'issue du bootcamp, chaque participant accède au réseau Diaspora Connect et à la conciergerie d'accompagnement de l'Institut.",
    "At the end of the bootcamp, every participant gains access to the Diaspora Connect network and the Institute's support concierge service.",
    "Al finalizar el bootcamp, cada participante accede a la red Diaspora Connect y al servicio de conserjería de apoyo del Instituto.",
  ],
  [
    "À l'issue du parcours, les auditeurs reçoivent le Certificat InPolitics d'Influence Publique, signé par la Direction de l'Institut.",
    "On completion, participants receive the InPolitics Certificate in Public Influence, signed by the Institute's leadership.",
    "Al finalizar, los participantes reciben el Certificado InPolitics de Influencia Pública, firmado por la Dirección del Instituto.",
  ],
  [
    "À la croisée de la politique, de l'économie et des affaires publiques, elle maîtrise les codes des cercles de pouvoir et déploie une ingénierie de l'influence axée sur la création de valeur, l'attractivité territoriale et le partenariat transcontinental Europe–Afrique.",
    "At the crossroads of politics, economics and public affairs, she commands the codes of power circles and deploys an influence engineering practice focused on value creation, territorial attractiveness and the transcontinental Europe–Africa partnership.",
    "En la encrucijada de la política, la economía y los asuntos públicos, domina los círculos de poder e implanta una ingeniería de la influencia centrada en la creación de valor, el atractivo territorial y la asociación transcontinental Europa–África.",
  ],
  [
    "À qui s'adresse le programme",
    "Who is this programme for?",
    "¿A quién va dirigido el programa?",
  ],
  ["Accès", "Access", "Acceso"],
  [
    "Accès : TGV Montpellier-Sud-de-France (20 min), aéroport Montpellier-Méditerranée (25 min)",
    "Access: TGV Montpellier-Sud-de-France (20 min), Montpellier-Méditerranée airport (25 min)",
    "Acceso: TGV Montpellier-Sud-de-France (20 min), aeropuerto Montpellier-Méditerranée (25 min)",
  ],
  [
    "Accès aux notes confidentielles de l'Observatoire, invitations aux séminaires fermés du Lab, mises en relation avec le réseau Alumni européen et africain.",
    "Access to the Observatory's confidential briefings, invitations to the Lab's closed seminars, and introductions to the European and African Alumni network.",
    "Acceso a las notas confidenciales del Observatorio, invitaciones a los seminarios cerrados del Laboratorio y conexión con la red Alumni europea y africana.",
  ],
  ["Accompagnement", "Support", "Acompañamiento"],
  [
    "Accompagnement aux consultations publiques.",
    "Support for public consultations.",
    "Acompañamiento en las consultas públicas.",
  ],
  [
    "Accompagnement foncier, juridique et fiscal pour sécuriser les projets de la diaspora sur leurs territoires d'origine.",
    "Land, legal and tax support to secure diaspora projects in their home territories.",
    "Apoyo inmobiliario, jurídico y fiscal para asegurar los proyectos de la diáspora en sus territorios de origen.",
  ],
  [
    "Action sociale — détection des situations de fragilité.",
    "Social action — identifying situations of vulnerability.",
    "Acción social — detección de situaciones de vulnerabilidad.",
  ],
  ["Admission", "Admission", "Admisión"],
  [
    "Adresse : Rue de l'Herme, 34770 GIGEAN — Montpellier Métropole, France",
    "Address: Rue de l'Herme, 34770 GIGEAN — Montpellier Métropole, France",
    "Dirección: Rue de l'Herme, 34770 GIGEAN — Montpellier Métropole, Francia",
  ],
  [
    "Algorithmes prédictifs pour l'aménagement urbain, la maintenance des infrastructures et l'anticipation des besoins sociaux. Une IA au service du bien commun.",
    "Predictive algorithms for urban planning, infrastructure maintenance and anticipating social needs. AI in the service of the common good.",
    "Algoritmos predictivos para la planificación urbana, el mantenimiento de infraestructuras y la anticipación de necesidades sociales. La IA al servicio del bien común.",
  ],
  [
    "Allier science politique, data/ technologie et communication stratégique.",
    "Combining political science, data/technology and strategic communication.",
    "Combinar ciencia política, datos/tecnología y comunicación estratégica.",
  ],
  [
    "Aménagement urbain — modèles de densification soutenable.",
    "Urban planning — sustainable densification models.",
    "Ordenación urbana — modelos de densificación sostenible.",
  ],
  [
    "Annexes — Modèles, check-lists et études de cas.",
    "Appendices — templates, checklists and case studies.",
    "Anexos — plantillas, listas de verificación y estudios de caso.",
  ],
  [
    "Antoine OBTEL est Directeur Associé d'inPolitics Institute, où il apporte une expertise nourrie par la recherche universitaire et l'expérience de terrain.",
    "Antoine OBTEL is Associate Director of InPolitics Institute, where he brings expertise shaped by academic research and field experience.",
    "Antoine OBTEL es Director Asociado de InPolitics Institute, donde aporta una experiencia nutrida por la investigación universitaria y el trabajo de campo.",
  ],
  ["Apply Now", "Apply Now", "Solicitar ahora"],
  [
    "Apprendre des meilleurs sites : Smart Cities, gestion de l'eau, traitement des déchets, mobilités, énergie. Des immersions de 2 à 4 jours pour décideurs.",
    "Learn from the best sites: smart cities, water management, waste treatment, mobility and energy. Two- to four-day immersions for decision-makers.",
    "Aprenda de los mejores casos: ciudades inteligentes, gestión del agua, tratamiento de residuos, movilidad e energías. Inmersiones de dos a cuatro días para decisores.",
  ],
  ["Architecture du bootcamp", "Bootcamp structure", "Estructura del bootcamp"],
  ["Architecture du parcours", "Programme structure", "Estructura del itinerario"],
  ["Architecture et souveraineté", "Architecture and sovereignty", "Arquitectura y soberanía"],
  [
    "Arnaud SIGHANO — Fondateur & Directeur Associé",
    "Arnaud SIGHANO — Founder & Associate Director",
    "Arnaud SIGHANO — Fundador y Director Asociado",
  ],
  [
    "Arnaud SIGHANO — Fondateur & Directeur Associé, InPolitics Institute.",
    "Arnaud SIGHANO — Founder & Associate Director, InPolitics Institute.",
    "Arnaud SIGHANO — Fundador y Director Asociado, InPolitics Institute.",
  ],
  [
    "Arnaud SIGHANO est un acteur reconnu de la diplomatie d’influence et des relations internationales. Fondateur et Directeur Associé d’inPolitics Institute, il accompagne les États, acteurs politiques et décideurs publics dans l’élaboration de stratégies d’influence internationale.",
    "Arnaud SIGHANO is a recognised figure in influence diplomacy and international relations. Founder and Associate Director of InPolitics Institute, he advises states, political actors and public decision-makers on the design of international influence strategies.",
    "Arnaud SIGHANO es un actor reconocido de la diplomacia de influencia y las relaciones internacionales. Fundador y Director Asociado de InPolitics Institute, acompaña a Estados, actores políticos y responsables públicos en el diseño de estrategias de influencia internacional.",
  ],
  [
    "Articulation des réseaux d'influence entre acteurs publics majeurs, investisseurs, bailleurs de fonds et collectivités territoriales pour piloter des projets d'attractivité et de développement stratégique.",
    "Connecting networks of influence between major public actors, investors, donors and local authorities to steer attractiveness and strategic development projects.",
    "Articulación de redes de influencia entre grandes actores públicos, inversores, donantes y entidades territoriales para dirigir proyectos de atractivo y desarrollo estratégico.",
  ],
  [
    "Au sein d'InPolitics Institute, elle supervise l'alignement entre les stratégies d'influence politique, les relations publiques d'excellence et les impératifs de souveraineté et de développement des territoires.",
    "Within InPolitics Institute, she oversees the alignment between political influence strategies, excellence in public relations and the sovereignty and development imperatives of territories.",
    "En InPolitics Institute, supervisa la alineación entre las estrategias de influencia política, las relaciones públicas de excelencia y los imperativos de soberanía y desarrollo de los territorios.",
  ],
  [
    "au sein du site de l'InPolitics Institute. À travers cette exposition visuelle, nous vous invitons à découvrir les espaces où se construit la formation des décideurs publics de demain : amphithéâtres, salles de simulation, data labs et lieux de réflexion dédiés à la diplomatie territoriale et à la gouvernance digitale.",
    "within the InPolitics Institute site. Through this visual tour, we invite you to discover the spaces where the training of tomorrow's public decision-makers takes shape: lecture theatres, simulation rooms, data labs and reflection spaces dedicated to territorial diplomacy and digital governance.",
    "en la sede de InPolitics Institute. A través de esta exposición visual, le invitamos a descubrir los espacios donde se construye la formación de los responsables públicos del mañana: anfiteatros, salas de simulación, data labs y espacios de reflexión dedicados a la diplomacia territorial y la gobernanza digital.",
  ],
  [
    "Aujourd'hui, il met cette double culture — tradition haussmannienne et ville de demain — au service des politiques et décideurs publics.",
    "Today, he puts that dual culture — the Haussmannian tradition and the city of tomorrow — at the service of public policies and decision-makers.",
    "Hoy pone esa doble cultura — la tradición hausmanniana y la ciudad del mañana — al servicio de las políticas y los responsables públicos.",
  ],
  [
    "Aujourd'hui, nous assistons à une transformation radicale du paysage politique et institutionnel. Entre l'explosion de la donnée, la saturation de l'information et la crise de confiance citoyenne, piloter une institution ou une campagne politique à l'intuition ne suffit plus.",
    "Today, the political and institutional landscape is being radically transformed. Between the explosion of data, information saturation and the crisis of citizen trust, running an institution or a political campaign on intuition is no longer enough.",
    "Hoy asistimos a una transformación radical del panorama político e institucional. Entre la explosión de los datos, la saturación de la información y la crisis de confianza ciudadana, dirigir una institución o una campaña política por intuición ya no basta.",
  ],
  ["Autre", "Other", "Otro"],
  [
    "Avec InPolitics Institute, la politique retrouve sa précision scientifique et sa force d'impact.",
    "With InPolitics Institute, politics regains its scientific precision and its impact.",
    "Con InPolitics Institute, la política recupera su precisión científica y su fuerza de impacto.",
  ],
  [
    "Axe 1 — Cartographie d'influence des décideurs et relais.",
    "Axis 1 — Influence mapping of decision-makers and relays.",
    "Eje 1 — Cartografía de la influencia de los decisores y los intermediarios.",
  ],
  [
    "Axe 2 — Analyse réglementaire et veille parlementaire.",
    "Axis 2 — Regulatory analysis and parliamentary monitoring.",
    "Eje 2 — Análisis regulatorio y seguimiento parlamentario.",
  ],
  [
    "Axe 3 — Argumentaire stratégique (position paper).",
    "Axis 3 — Strategic argumentation (position paper).",
    "Eje 3 — Argumentario estratégico (position paper).",
  ],
  [
    "Axe 4 — Plan de mobilisation des parties prenantes.",
    "Axis 4 — Stakeholder mobilisation plan.",
    "Eje 4 — Plan de movilización de las partes interesadas.",
  ],
  [
    "Axe 5 — Conduite des rendez-vous institutionnels.",
    "Axis 5 — Managing institutional appointments.",
    "Eje 5 — Gestión de las citas institucionales.",
  ],
  [
    "Axe 6 — Évaluation d'impact et retour stratégique.",
    "Axis 6 — Impact evaluation and strategic feedback.",
    "Eje 6 — Evaluación de impacto y retroalimentación estratégica.",
  ],
  [
    "Baromètres annuels — séries longues d'indicateurs territoriaux.",
    "Annual barometers — long time series of territorial indicators.",
    "Barómetros anuales — series largas de indicadores territoriales.",
  ],
  [
    "Become the transformation you want to see",
    "Become the transformation you want to see",
    "Sé la transformación que quieres ver",
  ],
  ["Bénéfices", "Benefits", "Beneficios"],
  ["Bienvenue dans cette", "Welcome to this", "Bienvenido a esta"],
  [
    "Bienvenue sur la plateforme officielle d'InPolitics Institute.",
    "Welcome to the official InPolitics Institute platform.",
    "Bienvenido a la plataforma oficial de InPolitics Institute.",
  ],
  [
    "Bienvenue sur la plateforme officielle d'InPolitics Institute. À l'ère des mutations géopolitiques majeures et de l'accélération numérique, la gestion des affaires publiques et le développement économique exigent des paradigmes entièrement renouvelés.",
    "Welcome to the official InPolitics Institute platform. In an era of major geopolitical shifts and digital acceleration, public affairs and economic development call for entirely new paradigms.",
    "Bienvenido a la plataforma oficial de InPolitics Institute. En una era de grandes cambios geopolíticos y aceleración digital, los asuntos públicos y el desarrollo económico exigen paradigmas enteramente renovados.",
  ],
  ["Biographie — Co-fondation", "Biography — Co-founding", "Biografía — Cofundación"],
  [
    "Boukli Hacene Boumediene est co-fondateur d'inPolitics Institute, où il apporte son expertise unique à l'intersection de l'architecture, de l'urbanisme et de la décision publique.",
    "Boukli Hacene Boumediene is co-founder of InPolitics Institute, where he brings his unique expertise at the intersection of architecture, urban planning and public decision-making.",
    "Boukli Hacene Boumediene es cofundador de InPolitics Institute, donde aporta su experiencia única en la intersección de la arquitectura, la ordenación urbana y la decisión pública.",
  ],
  [
    "C'est pour répondre à cette exigence de modernité qu'est né InPolitics Institute.",
    "It was to meet this demand for modernity that InPolitics Institute was born.",
    "Fue para responder a esta exigencia de modernidad que nació InPolitics Institute.",
  ],
  [
    "C'est pour répondre à cette exigence qu'est né InPolitics Institute.",
    "It was to meet this demand that InPolitics Institute was born.",
    "Fue para responder a esta exigencia que nació InPolitics Institute.",
  ],
  ["Cadre académique", "Academic framework", "Marco académico"],
  [
    "Cadres aptes à relier théorie, terrain et transformation territoriale",
    "Professionals able to link theory, field practice and territorial transformation",
    "Perfiles capaces de vincular teoría, terreno y transformación territorial",
  ],
  [
    "Cadres des administrations, élus territoriaux, professionnels du développement local, consultants, membres d'ONG",
    "Staff of administrations, local elected officials, local development professionals, consultants, NGO members",
    "Personal de administraciones, electos territoriales, profesionales del desarrollo local, consultores, miembros de ONG",
  ],
  [
    "Cadres, entrepreneurs, professionnels libéraux, hauts fonctionnaires issus de la diaspora et désireux d'évaluer concrètement les opportunités d'engagement économique, politique ou philanthropique sur leur territoire d'origine.",
    "Executives, entrepreneurs, liberal professionals and senior civil servants from the diaspora who want to assess concretely the economic, political or philanthropic opportunities for engagement in their home territory.",
    "Directivos, emprendedores, profesionales liberales y altos funcionarios de la diáspora que desean evaluar en concreto las oportunidades de compromiso económico, político o filantrópico en su territorio de origen.",
  ],
  ["Campagne email", "Email campaign", "Campaña de correo electrónico"],
  [
    "Capacité : 80 auditeurs en présentiel + 250 en hybride",
    "Capacity: 80 attendees in person + 250 in hybrid format",
    "Capacidad: 80 asistentes presenciales + 250 en formato híbrido",
  ],
  [
    "Cartographie d'influence : acteurs-clés, réseaux institutionnels, leviers diplomatiques.",
    "Influence mapping: key actors, institutional networks, diplomatic levers.",
    "Cartografía de la influencia: actores clave, redes institucionales, palancas diplomáticas.",
  ],
  [
    "Cartographie des opportunités — sectorielles, géographiques, financières.",
    "Opportunity mapping — sectoral, geographical and financial.",
    "Cartografía de oportunidades — sectoriales, geográficas y financieras.",
  ],
  ["Cas d'usage", "Use cases", "Casos de uso"],
  ["Cas d'usage prioritaires", "Priority use cases", "Casos de uso prioritarios"],
  [
    "Ce que ce pilier permet de produire.",
    "What this pillar enables you to produce.",
    "Lo que este pilar permite producir.",
  ],
  [
    "Certificat reconnu à l'international · Certification française RNCP / Qualiopi Répertoire Spécifique (RS)",
    "Internationally recognised certificate · French certification RNCP / Qualiopi Répertoire Spécifique (RS)",
    "Certificado reconocido a nivel internacional · Certificación francesa RNCP / Qualiopi Répertoire Spécifique (RS)",
  ],
  ["Certification", "Certification", "Certificación"],
  [
    "Certification française RNCP / Qualiopi Répertoire Spécifique (RS)",
    "French certification RNCP / Qualiopi Répertoire Spécifique (RS)",
    "Certificación francesa RNCP / Qualiopi Répertoire Spécifique (RS)",
  ],
  ["Certifications :", "Certifications:", "Certificaciones:"],
  [
    "Certificats courts (3 mois).",
    "Short certificates (3 months).",
    "Certificados cortos (3 meses).",
  ],
  ["Certifié", "Certified", "Certificado"],
  [
    "Certifié SETYM en gestion de projet, il accompagne des institutions gouvernementales et des ONG en tant que consultant sur des projets de développement local, de formation, d’assainissement urbain et de gestion des données publiques.",
    "Certified by SETYM in project management, he supports governmental institutions and NGOs as a consultant on local development, training, urban sanitation and public data management projects.",
    "Certificado por SETYM en gestión de proyectos, acompaña a instituciones gubernamentales y ONG como consultor en proyectos de desarrollo local, formación, saneamiento urbano y gestión de datos públicos.",
  ],
  [
    "Cette doctrine est inspirée des standards de l'OCDE (Lignes directrices sur le lobbying), du registre de transparence de l'Union européenne et des meilleures pratiques de la HATVP française.",
    "This doctrine is inspired by OECD standards (Guidelines for Multinational Enterprises on responsible business conduct), the European Union transparency register and best practices from the French HATVP.",
    "Esta doctrina se inspira en los estándares de la OCDE (Directrices sobre empresas multinacionales para una conducta empresarial responsable), el registro de transparencia de la Unión Europea y las mejores prácticas de la HATVP francesa.",
  ],
  [
    "Cette immersion dans le patrimoine architectural lui a ouvert les portes des innovations urbanistiques.",
    "This immersion in architectural heritage opened the door to urban planning innovation for him.",
    "Esta inmersión en el patrimonio arquitectónico le abrió las puertas de las innovaciones urbanísticas.",
  ],
  [
    "Chaque étude de cas est publiée avec l'accord explicite de la collectivité concernée et anonymisée lorsque la sensibilité l'exige. Les enseignements transférables sont distillés dans une note de synthèse.",
    "Each case study is published with the explicit consent of the authority concerned and anonymised where sensitivity requires it. Transferable lessons are distilled into a synthesis brief.",
    "Cada estudio de caso se publica con el consentimiento explícito de la administración implicada y se anonimiza cuando la sensibilidad lo exige. Las enseñanzas transferibles se destilan en una nota de síntesis.",
  ],
  [
    "Chaque image capture l'atmosphère et la rigueur républicaine qui animent nos programmes. Nous espérons que cette visite vous donnera un aperçu concret de l'environnement unique dans lequel se déroulent nos séminaires d'immersion et nos cursus hybrides.",
    "Each image captures the atmosphere and republican rigour that drive our programmes. We hope this tour gives you a concrete sense of the unique environment in which our immersion seminars and hybrid courses take place.",
    "Cada imagen captura la atmósfera y el rigor republicano que animan nuestros programas. Esperamos que esta visita le ofrezca una visión concreta del entorno único en el que se desarrollan nuestros seminarios de inmersión y nuestros ciclos híbridos.",
  ],
  [
    "Chaque modèle livré est documenté (carte modèle), évalué pour ses biais, et soumis à une revue éthique. Conformément au règlement européen sur l'IA, les usages à haut risque font l'objet d'un suivi renforcé.",
    "Each model delivered is documented (model card), assessed for bias and submitted to an ethics review. In line with the European AI Act, high-risk uses are subject to enhanced monitoring.",
    "Cada modelo entregado se documenta (model card), se evalúa sus sesgos y se somete a una revisión ética. Conforme al reglamento europeo sobre IA, los usos de alto riesgo están sujetos a un seguimiento reforzado.",
  ],
  [
    "Chaque séminaire combine cours magistraux par des praticiens de premier plan, ateliers d'application en petits groupes, et un exercice de Simul' Crise final de 24 heures.",
    "Each seminar combines lectures delivered by leading practitioners, small-group application workshops and a final 24-hour Simul' Crise exercise.",
    "Cada seminario combina clases magistrales de primeros practicantes, talleres de aplicación en grupos pequeños y un ejercicio final de Simul' Crise de 24 horas.",
  ],
  [
    "Chaque session est conçue sur mesure : objectifs validés en amont, profil des bénéficiaires, format présentiel ou hybride, langue de travail (français ou anglais).",
    "Each session is tailor-made: objectives agreed up front, participant profile, in-person or hybrid format, working language (French or English).",
    "Cada sesión se diseña a medida: objetivos validados de antemano, perfil de los beneficiarios, formato presencial o híbrido, lengua de trabajo (francés o inglés).",
  ],
  [
    "Chaque site est équipé pour la Simul' Crise (salle de crise dédiée, dispositif média et débriefing d'État), pour les ateliers de l'Observatoire (data lab) et pour les rencontres confidentielles du Club InPolitics Exec.",
    "Every site is equipped for Simul' Crise (dedicated crisis room, media set-up and state-level debriefing), for the Observatory's workshops (data lab) and for the Club InPolitics Exec's confidential meetings.",
    "Cada sede está equipada para el Simul' Crise (sala de crisis dedicada, dispositivo mediático y debriefing de nivel estatal), para los talleres del Observatorio (data lab) y para las reuniones confidenciales del Club InPolitics Exec.",
  ],
  [
    "Co-fondateur — Expert Urbaniste et Haussmannien, reconnu par les Architectes des Bâtiments de France (ABF).",
    "Co-founder — Urban planning expert and Haussmann specialist, recognised by the Bâtiments de France Architects (ABF).",
    "Cofundador — Experto urbanista y especialista en Haussmann, reconocido por los Arquitectos de Bâtiments de France (ABF).",
  ],
  [
    "Colloque annuel Diplomatie Territoriale.",
    "Annual Territorial Diplomacy conference.",
    "Coloquio anual de Diplomacia Territorial.",
  ],
  [
    "Colloque annuel Gouvernance Digitale.",
    "Annual Digital Governance conference.",
    "Coloquio anual de Gobernanza Digital.",
  ],
  ["Commande", "Order", "Pedido"],
  [
    "Compétences en leadership, persuasion, gestion de crise, médias numériques et stratégie de communication.",
    "Leadership, persuasion, crisis management, digital media and communication strategy skills.",
    "Competencias en liderazgo, persuasión, gestión de crisis, medios digitales y estrategia de comunicación.",
  ],
  [
    "Compréhension approfondie des mécanismes de gouvernance territoriale, de la décentralisation et du management public.",
    "In-depth understanding of territorial governance mechanisms, decentralisation and public management.",
    "Comprensión profunda de los mecanismos de gobernanza territorial, de la descentralización y de la gestión pública.",
  ],
  [
    "Concrètement, InPolitics Institute déploie son expertise autour de trois piliers majeurs :",
    "In practice, InPolitics Institute deploys its expertise around three major pillars:",
    "En la práctica, InPolitics Institute despliega su experiencia en torno a tres pilares principales:",
  ],
  ["Conditions", "Conditions", "Condiciones"],
  [
    "Conduite de crise institutionnelle (3 jours).",
    "Institutional crisis management (3 days).",
    "Gestión de crisis institucional (3 días).",
  ],
  [
    "Conférences publiques — un rendez-vous mensuel à Gigean.",
    "Public lectures — a monthly appointment in Gigean.",
    "Conferencias públicas — una cita mensual en Gigean.",
  ],
  [
    "Conseil aux hauts décideurs, mise aux normes internationales des stratégies de communication, défense d'intérêts et déploiement du « faire-savoir » auprès des instances décisionnelles.",
    "Advice to senior decision-makers, bringing communication strategies up to international standards, defending interests and rolling out knowledge-sharing with decision-making bodies.",
    "Asesoramiento a altos decisores, adecuación de las estrategias de comunicación a las normas internacionales, defensa de intereses y despliegue del «hacer saber» ante los órganos decisorios.",
  ],
  ["Conseil et gestion de crise", "Advisory and crisis management", "Asesoría y gestión de crisis"],
  [
    "Conseiller en communication politique, Responsable communication institutionnelle",
    "Political communication adviser, Head of institutional communication",
    "Asesor en comunicación política, Responsable de comunicación institucional",
  ],
  [
    "Conseiller en coopération décentralisée, Responsable protocole",
    "Adviser for decentralised cooperation, Head of protocol",
    "Asesor en cooperación descentralizada, Responsable de protocolo",
  ],
  ["Contacter l'institut", "Contact the institute", "Contactar con el instituto"],
  ["Contribuer", "Contribute", "Contribuir"],
  [
    "Création d'entité économique locale.",
    "Setting up a local economic entity.",
    "Creación de una entidad económica local.",
  ],
  [
    "Cursus Affaires Publiques d'Entreprise (9 mois).",
    "Corporate Public Affairs track (9 months).",
    "Ciclo de Asuntos Públicos Corporativos (9 meses).",
  ],
  [
    "Cursus Décideur Public (12 mois).",
    "Public Decision-Maker track (12 months).",
    "Ciclo de Decisores Públicos (12 meses).",
  ],
  [
    "Cursus Diplomatie Territoriale (6 mois).",
    "Territorial Diplomacy track (6 months).",
    "Ciclo de Diplomacia Territorial (6 meses).",
  ],
  [
    "Cycle de l'eau — Syndicat Bas-Languedoc.",
    "Water cycle — Syndicat Bas-Languedoc.",
    "Ciclo del agua — Syndicat Bas-Languedoc.",
  ],
  ["Débouchés :", "Career opportunities:", "Salidas:"],
  [
    "Décideurs publics mieux outillés pour l'action",
    "Public decision-makers better equipped for action",
    "Decisores públicos mejor preparados para la acción",
  ],
  ["DÉCOUVRIR & S'INSCRIRE", "DISCOVER & SIGN UP", "DESCUBRIR E INSCRIBIRSE"],
  [
    "Décryptages — analyse des décisions publiques majeures.",
    "Insights — analysis of major public decisions.",
    "Análisis — estudio de las grandes decisiones públicas.",
  ],
  [
    "Délégations d'élus, missions d'études internationales, promotions InPolitics en cursus. Possibilité de visites privatives pour collectivités étrangères.",
    "Delegations of elected officials, international study missions, InPolitics cohorts on degree tracks. Private visits possible for foreign local authorities.",
    "Delegaciones de electos, misiones de estudio internacionales, promociones InPolitics en ciclos formativos. Posibilidad de visitas privativas para colectividades extranjeras.",
  ],
  [
    "Déploiement d'un module de recouvrement intelligent sur une commune méditerranéenne de 25 000 habitants. Recettes additionnelles identifiées sur 12 mois, réduction des erreurs de rôle, restauration de la confiance citoyenne.",
    "Roll-out of an intelligent recovery module in a Mediterranean municipality of 25,000 inhabitants. Additional revenue identified over 12 months, fewer assessment errors, restored citizen trust.",
    "Despliegue de un módulo de recaudación inteligente en un municipio mediterráneo de 25.000 habitantes. Ingresos adicionales identificados en 12 meses, reducción de errores en el rol, restauración de la confianza ciudadana.",
  ],
  [
    "Déploiement encadré (4 à 12 semaines selon le périmètre), formation des agents et support continu. Méthodologie alignée avec les recommandations de l'ANSSI et de la CNIL.",
    "Structured roll-out (4 to 12 weeks depending on scope), staff training and ongoing support. Methodology aligned with ANSSI and CNIL recommendations.",
    "Despliegue supervisado (de 4 a 12 semanas según el alcance), formación de los agentes y soporte continuo. Metodología alineada con las recomendaciones de la ANSSI y la CNIL.",
  ],
  [
    "Depuis notre site de Gigean (Montpellier Métropole) et nos pôles africains, nous accompagnons des États, des collectivités, des entreprises et des diasporas dans la conduite de leurs ambitions. Notre méthode est simple : haut niveau d'exigence académique, immersion terrain, et un réseau international d'experts au plus haut niveau.",
    "From our site in Gigean (Montpellier Métropole) and our African hubs, we support states, local authorities, companies and diasporas in carrying out their ambitions. Our method is simple: high academic standards, field immersion, and an international network of top-level experts.",
    "Desde nuestra sede de Gigean (Montpellier Métropole) y nuestros polos africanos, acompañamos a Estados, colectividades, empresas y diásporas en la conducción de sus ambiciones. Nuestro método es sencillo: alto nivel de exigencia académica, inmersión en el terreno y una red internacional de expertos de primer nivel.",
  ],
  [
    "Des Executive Masterclass et des programmes certifiants pour armer la nouvelle génération de leaders, cadres et décideurs.",
    "Executive Masterclasses and certified programmes to arm the new generation of leaders, executives and decision-makers.",
    "Masterclasses ejecutivas y programas certificados para preparar a la nueva generación de líderes, cuadros y decisores.",
  ],
  [
    "Des formats courts et intensifs de 3 à 5 jours, pensés pour l'élite publique et privée. Présentiel à 100 % sur le site Europe.",
    "Short, intensive three- to five-day formats, designed for public and private elites. 100% in person at the European site.",
    "Formatos cortos e intensivos de 3 a 5 días, pensados para la élite pública y privada. 100% presencial en la sede europea.",
  ],
  [
    "Des programmes d'excellence en ligne et en présentiel, conçus pour les décideurs publics, élus territoriaux, dirigeants privés et acteurs politiques souhaitant transformer leurs compétences en leviers d'action immédiats.",
    "Outstanding programmes online and in person, designed for public decision-makers, local elected officials, private-sector leaders and political actors who want to turn their skills into immediate levers for action.",
    "Programas de excelencia en línea y presenciales, concebidos para decisores públicos, electos territoriales, dirigentes privados y actores políticos que deseen convertir sus competencias en palancas de acción inmediatas.",
  ],
  [
    "Détection précoce des évolutions normatives.",
    "Early detection of regulatory changes.",
    "Detección precoz de los cambios normativos.",
  ],
  [
    "Devenir la référence internationale de la technopolitique et de la gouvernance moderne.",
    "To become the international benchmark for political technology and modern governance.",
    "Convertirse en la referencia internacional de la tecnopolítica y la gobernanza moderna.",
  ],
  [
    "Diagnostic d'attractivité : forces, signaux faibles, positionnement comparé.",
    "Attractiveness diagnostic: strengths, weak signals, comparative positioning.",
    "Diagnóstico de atractivo: fortalezas, señales débiles, posicionamiento comparado.",
  ],
  [
    "Diagnostic personnel — projet, ressources, contraintes.",
    "Personal assessment — project, resources, constraints.",
    "Diagnóstico personal — proyecto, recursos, limitaciones.",
  ],
  [
    "Diplomatie Publique & Relations Internationales",
    "Public Diplomacy & International Relations",
    "Diplomacia Pública y Relaciones Internacionales",
  ],
  [
    "Diplomatie territoriale appliquée (5 jours).",
    "Applied territorial diplomacy (5 days).",
    "Diplomacia territorial aplicada (5 días).",
  ],
  [
    "Diplomatie territoriale appliquée, gouvernance digitale des municipalités, sécurisation des recettes fiscales locales, conduite du changement administratif, intégrité publique et anti-corruption.",
    "Applied territorial diplomacy, digital governance of municipalities, securing local tax revenues, administrative change management, public integrity and anti-corruption.",
    "Diplomacia territorial aplicada, gobernanza digital de los municipios, aseguramiento de los ingresos fiscales locales, gestión del cambio administrativo, integridad pública y lucha contra la corrupción.",
  ],
  [
    "Diplomatie territoriale, relations internationales et innovation urbanistique",
    "Territorial diplomacy, international relations and urban planning innovation",
    "Diplomacia territorial, relaciones internacionales e innovación urbanística",
  ],
  [
    "Directeur Afrique d'Inpolitics Institute. Docteur en Études Internationales, enseignant-chercheur et consultant en gestion de projet.",
    "Africa Director of InPolitics Institute. PhD in International Studies, teacher-researcher and project management consultant.",
    "Director de África de InPolitics Institute. Doctor en Estudios Internacionales, investigador-docente y consultor en gestión de proyectos.",
  ],
  [
    "Directeur Associé. Chercheur en Histoire et Relations Internationales. Réserviste du Quai d'Orsay.",
    "Associate Director. Researcher in History and International Relations. Reservist at the Quai d'Orsay.",
    "Director Asociado. Investigador en Historia y Relaciones Internacionales. Reservista del Quai d'Orsay.",
  ],
  [
    "Directrice Générale d’InPolitics Institute. Diplomatie d'influence, communication institutionnelle et conseil en affaires publiques.",
    "Managing Director of InPolitics Institute. Influence diplomacy, institutional communication and public affairs advisory.",
    "Directora General de InPolitics Institute. Diplomacia de influencia, comunicación institucional y consultoría en asuntos públicos.",
  ],
  [
    "Dirigeants capables d'arbitrer avec rigueur et impact",
    "Leaders able to make trade-offs with rigour and impact",
    "Líderes capaces de decidir con rigor e impacto",
  ],
  [
    "Docteur en Études Internationales, il est enseignant-chercheur en Science Politique à l’Université de Dschang au Cameroun.",
    "PhD in International Studies, he is a teacher-researcher in Political Science at the University of Dschang in Cameroon.",
    "Doctor en Estudios Internacionales, es investigador-docente en Ciencia Política en la Universidad de Dschang, Camerún.",
  ],
  ["Domaines couverts", "Areas covered", "Áreas cubiertas"],
  [
    "Droit OHADA et sécurité juridique des décisions",
    "OHADA law and legal certainty of decisions",
    "Derecho OHADA y seguridad jurídica de las decisiones",
  ],
  [
    "Du conseil en ingénierie politique et gestion de crise sur-mesure pour les institutions, les exécutifs et les organisations.",
    "Tailor-made advisory in political engineering and crisis management for institutions, executives and organisations.",
    "Asesoría a medida en ingeniería política y gestión de crisis para instituciones, ejecutivos y organizaciones.",
  ],
  ["Durée & Format :", "Duration & format:", "Duración y formato:"],
  [
    "Échangez avec un conseiller d'orientation InPolitics.",
    "Talk to an InPolitics guidance counsellor.",
    "Hable con un orientador de InPolitics.",
  ],
  [
    "Économie circulaire et gestion des déchets — Sète Agglopôle.",
    "Circular economy and waste management — Sète Agglopôle.",
    "Economía circular y gestión de residuos — Sète Agglopôle.",
  ],
  [
    "Éducateur dans l’âme, Il est également Directeur de L’École canadienne Inter-Nations, une école Inspectée par le ministère de l'éducation de l'Ontario au Canada.",
    "An educator at heart, he is also Director of the Inter-Nations Canadian School, a school inspected by the Ontario Ministry of Education in Canada.",
    "Educador por vocación, es también director de la Escuela Canadiense Inter-Nations, un centro inspeccionado por el Ministerio de Educación de Ontario, Canadá.",
  ],
  [
    "Élaborer et exécuter un budget communal, conduire un audit interne, mobiliser les financements et bâtir des partenariats internationaux.",
    "Draw up and execute a municipal budget, run an internal audit, mobilise funding and build international partnerships.",
    "Elaborar y ejecutar un presupuesto municipal, realizar una auditoría interna, movilizar financiación y construir alianzas internacionales.",
  ],
  [
    "Élus, hauts fonctionnaires, dirigeants d'institutions publiques, directeurs des affaires publiques en entreprise. Promotions de 15 à 25 auditeurs pour garantir la qualité des échanges.",
    "Elected officials, senior civil servants, heads of public institutions, directors of corporate public affairs. Cohorts of 15 to 25 participants to guarantee the quality of exchanges.",
    "Electos, altos funcionarios, responsables de instituciones públicas, directores de asuntos públicos en empresa. Promociones de 15 a 25 asistentes para garantizar la calidad de los intercambios.",
  ],
  [
    "Élus, porte-paroles, communicants institutionnels, journalistes, conseillers en stratégie",
    "Elected officials, spokespersons, institutional communicators, journalists, strategy advisers",
    "Electos, portavoces, comunicadores institucionales, periodistas, asesores en estrategia",
  ],
  [
    "En tant que Directrice Générale d’InPolitics Institute, Aurélie SÉREL apporte la puissance de frappe institutionnelle et relationnelle du réseau GEFI pour appuyer la vision stratégique et la technopolitique portées par l'institut.",
    "As Managing Director of InPolitics Institute, Aurélie SÉREL brings the institutional and relational striking power of the GEFI network to support the strategic and political-technological vision carried by the institute.",
    "Como Directora General de InPolitics Institute, Aurélie SÉREL aporta la potencia institucional y relacional de la red GEFI para respaldar la visión estratégica y tecnopolítica que impulsa el instituto.",
  ],
  [
    "Engagé pour le leadership africain, Arnaud est alumni du programme créé en 2010 par l'ancien Président Américain Barack Obama, le programme Young African Leaders Initiative (YALI). En 2021 Arnaud à fondé le YALI Sport Africa, réseau thématique dédié au sport comme vecteur d’influence et de développement.",
    "Committed to African leadership, Arnaud is an alumnus of the programme created in 2010 by former US President Barack Obama, the Young African Leaders Initiative (YALI). In 2021 Arnaud founded YALI Sport Africa, a thematic network dedicated to sport as a vehicle for influence and development.",
    "Comprometido con el liderazgo africano, Arnaud es egresado del programa creado en 2010 por el expresidente estadounidense Barack Obama, la Iniciativa de Líderes Africanos Jóvenes (YALI). En 2021 Arnaud fundó YALI Sport Africa, una red temática dedicada al deporte como vector de influencia y desarrollo.",
  ],
  ["Engagement déontologique", "Ethical commitment", "Compromiso deontológico"],
  ["English", "English", "Inglés"],
  [
    "Ensemble, faisons de la technopolitique, de la haute formation et de l'influence éthique les moteurs de la transformation et du rayonnement de nos territoires.",
    "Together, let us make political technology, high-level training and ethical influence the engines of the transformation and outreach of our territories.",
    "Juntos, hagamos de la tecnopolítica, la alta formación y la influencia ética los motores de la transformación y la proyección de nuestros territorios.",
  ],
  [
    "Entretiens — conversations longues avec des décideurs.",
    "Interviews — long conversations with decision-makers.",
    "Entrevistas — conversaciones largas con decisores.",
  ],
  [
    "Espace Diaspora — Conciergerie",
    "Diaspora Space — Concierge",
    "Espacio Diáspora — Conserjería",
  ],
  ["Espace Diaspora — Connect", "Diaspora Space — Connect", "Espacio Diáspora — Connect"],
  ["Espace Diaspora — Landing", "Diaspora Space — Landing", "Espacio Diáspora — Landing"],
  [
    "Étude #1 — Sécurisation des recettes fiscales locales",
    "Case study #1 — Securing local tax revenues",
    "Estudio #1 — Seguridad de los ingresos fiscales locales",
  ],
  [
    "Étude #2 — Portail citoyen unifié",
    "Case study #2 — Unified citizen portal",
    "Estudio #2 — Portal ciudadano unificado",
  ],
  [
    "Étude #3 — Tableau de bord exécutif",
    "Case study #3 — Executive dashboard",
    "Estudio #3 — Panel de mando ejecutivo",
  ],
  [
    "Étudiant-chercheur en Histoire et Relations Internationales, il se forme au sein de trois institutions d'excellence : Université Paris Cité, Sorbonne Université et Université Paris-Panthéon-Assas.",
    "Student researcher in History and International Relations, he trains at three institutions of excellence: Université Paris Cité, Sorbonne Université and Université Paris-Panthéon-Assas.",
    "Estudiante investigador en Historia y Relaciones Internacionales, se forma en tres instituciones de excelencia: Université Paris Cité, Sorbonne Université y Université Paris-Panthéon-Assas.",
  ],
  ["Évaluation", "Assessment", "Evaluación"],
  [
    "Évaluation continue, projet final encadré et soutenance présentielle sur le site Europe. Les diplômés intègrent le réseau Alumni InPolitics et le Club Exec.",
    "Continuous assessment, supervised final project and in-person defence at the European site. Graduates join the InPolitics Alumni network and the Exec Club.",
    "Evaluación continua, proyecto final tutelado y defensa presencial en la sede europea. Los graduados se incorporan a la red Alumni InPolitics y al Club Exec.",
  ],
  [
    "Évaluation d'impact : indicateurs d'attractivité, retombées économiques et image.",
    "Impact assessment: attractiveness indicators, economic spin-offs and image.",
    "Evaluación de impacto: indicadores de atractivo, efectos económicos e imagen.",
  ],
  ["Événement / Conférence", "Event / Conference", "Evento / Conferencia"],
  ["ex. Dupont", "e.g. Dupont", "p. ej. Dupont"],
  ["ex. France", "e.g. France", "p. ej. Francia"],
  ["ex. Jean", "e.g. Jean", "p. ej. Jean"],
  ["ex. Maire, Commune de …", "e.g. Mayor, Municipality of …", "p. ej. Alcalde, Municipio de …"],
  ["Executifs —", "Executives —", "Ejecutivos —"],
  ["Executive Leadership", "Executive Leadership", "Liderazgo Ejecutivo"],
  ["Executive Masterclass", "Executive Masterclass", "Masterclass Ejecutiva"],
  [
    "Expertise & Positionnement Stratégique",
    "Expertise & Strategic Positioning",
    "Experiencia y Posicionamiento Estratégico",
  ],
  ["Février 2027", "February 2027", "Febrero 2027"],
  [
    "Fondateur & Directeur Associé d'InPolitics Institute. Diplomatie d'influence, relations internationales, Sport Diplomatie.",
    "Founder & Associate Director of InPolitics Institute. Influence diplomacy, international relations, Sport Diplomacy.",
    "Fundador y Director Asociado de InPolitics Institute. Diplomacia de influencia, relaciones internacionales, Diplomacia Deportiva.",
  ],
  [
    "Forget lectures. Here, you build campaigns, rally crowds, and manage crises. From election strategy to public charisma, master the playbook that wins today.",
    "Forget lectures. Here, you build campaigns, rally crowds, and manage crises. From election strategy to public charisma, master the playbook that wins today.",
    "Olvide las clases magistrales. Aquí usted crea campañas, moviliza a las multitudes y gestiona crisis. Desde la estrategia electoral hasta el carisma público, domine el manual que gana hoy.",
  ],
  [
    "Format Hybride — 30 heures sur 5 à 6 semaines + 1 semaine à Montpellier",
    "Hybrid format — 30 hours over 5 to 6 weeks + 1 week in Montpellier",
    "Formato híbrido — 30 horas en 5 a 6 semanas + 1 semana en Montpellier",
  ],
  [
    "Format Hybride — 32 heures sur 6 à 7 semaines + 1 semaine à Montpellier",
    "Hybrid format — 32 hours over 6 to 7 weeks + 1 week in Montpellier",
    "Formato híbrido — 32 horas en 6 a 7 semanas + 1 semana en Montpellier",
  ],
  [
    "Format Hybride — 35 heures sur 6 à 7 semaines + 1 semaine à Montpellier",
    "Hybrid format — 35 hours over 6 to 7 weeks + 1 week in Montpellier",
    "Formato híbrido — 35 horas en 6 a 7 semanas + 1 semana en Montpellier",
  ],
  [
    "Format Hybride / En ligne — 28 heures sur 5 à 6 semaines + 1 semaine à Montpellier",
    "Hybrid / Online format — 28 hours over 5 to 6 weeks + 1 week in Montpellier",
    "Formato híbrido / en línea — 28 horas en 5 a 6 semanas + 1 semana en Montpellier",
  ],
  ["Format pédagogique", "Teaching format", "Formato pedagógico"],
  ["Formation des équipes", "Team training", "Formación de equipos"],
  ["Formation et certification", "Training and certification", "Formación y certificación"],
  [
    "Formation, conseil d'ingénierie politique et recherche appliquée.",
    "Training, political engineering advisory and applied research.",
    "Formación, asesoría en ingeniería política e investigación aplicada.",
  ],
  [
    "Formations Continues — Pôle Afrique",
    "Continuing Education — Africa Hub",
    "Formación Continua — Polo África",
  ],
  [
    "Former des praticiens capables de concevoir une campagne d'influence de bout en bout : analyse du jeu d'acteurs, message stratégique, mobilisation de relais, suivi d'impact. Le programme est ouvert aux profils confirmés (10 ans d'expérience minimum).",
    "Train practitioners able to design an influence campaign end to end: analysis of the actor landscape, strategic message, mobilisation of relays, impact tracking. The programme is open to experienced profiles (10 years' experience minimum).",
    "Formar a profesionales capaces de diseñar una campaña de influencia de principio a fin: análisis del panorama de actores, mensaje estratégico, movilización de intermediarios, seguimiento de impacto. El programa está abierto a perfiles con experiencia (mínimo 10 años).",
  ],
  [
    "Formez-vous à l'excellence de la gouvernance locale. InPolitics Institute vous ouvre les portes de ses programmes de renforcement de capacités. Des formations pratiques, certifiantes et dispensées par des experts de terrain, conçues pour les élus, cadres communaux, partis politiques et leaders de la société civile qui veulent passer à l'action. En présentiel à Montpellier, dans nos sites en Afrique, et en ligne. Les inscriptions sont actuellement ouvertes.",
    "Train for excellence in local governance. InPolitics Institute opens the doors to its capacity-building programmes. Practical, certified training delivered by field experts, designed for elected officials, municipal executives, political parties and civil society leaders who want to take action. In person in Montpellier, at our sites in Africa, and online. Registration is currently open.",
    "Forme en la excelencia de la gobernanza local. InPolitics Institute le abre las puertas de sus programas de refuerzo de capacidades. Formaciones prácticas, certificadas y impartidas por expertos del terreno, pensadas para electos, cuadros comunales, partidos políticos y líderes de la sociedad civil que quieren pasar a la acción. De forma presencial en Montpellier, en nuestras sedes de África y en línea. Las inscripciones están abiertas.",
  ],
  ["Français", "French", "Francés"],
  ["Galerie & Image", "Gallery & Images", "Galería e Imagen"],
  [
    "Gestion des actes — traçabilité, signature électronique, archivage probant.",
    "Document management — traceability, electronic signature, evidential archiving.",
    "Gestión de actos — trazabilidad, firma electrónica, archivo con valor probatorio.",
  ],
  [
    "Gouvernance & Politiques Publiques",
    "Governance & Public Policy",
    "Gobernanza y Políticas Públicas",
  ],
  ["Gouvernance algorithmique", "Algorithmic governance", "Gobernanza algorítmica"],
  [
    "Gouvernance Digitale — Études de cas",
    "Digital Governance — Case studies",
    "Gobernanza Digital — Estudios de caso",
  ],
  ["Gouvernance Digitale — IA", "Digital Governance — AI", "Gobernanza Digital — IA"],
  ["Gouvernance Digitale — SaaS", "Digital Governance — SaaS", "Gobernanza Digital — SaaS"],
  [
    "Gouvernance Digitale & Enjeux Technopolitiques",
    "Digital Governance & Political Technology Challenges",
    "Gobernanza Digital y Desafíos Tecnopolíticos",
  ],
  [
    "Gouvernance digitale des collectivités (4 jours).",
    "Digital governance of local authorities (4 days).",
    "Gobernanza digital de las entidades territoriales (4 días).",
  ],
  [
    "Gouvernance financière et pilotage stratégique",
    "Financial governance and strategic steering",
    "Gobernanza financiera y dirección estratégica",
  ],
  [
    "Hébergement souverain européen, conformité RGPD, chiffrement bout-en-bout, journalisation infalsifiable. Aucun transfert extra-européen de données sans accord exprès.",
    "European sovereign hosting, GDPR compliance, end-to-end encryption, tamper-proof logging. No transfer of data outside the EU without explicit consent.",
    "Alojamiento soberano europeo, cumplimiento del RGPD, cifrado extremo a extremo, registro inalterable. Ninguna transferencia de datos fuera de la UE sin consentimiento expreso.",
  ],
  ["IA & Data Science Publique", "AI & Public Data Science", "IA y Ciencia de Datos Pública"],
  [
    "Il les accompagne sur les codes stylistiques, l'identité urbaine et les mutations des métropoles contemporaines.",
    "He advises them on stylistic codes, urban identity and the shifts transforming contemporary metropolises.",
    "Les acompaña en los códigos estilísticos, la identidad urbana y las transformaciones de las metrópolis contemporáneas.",
  ],
  ["immersion 3D", "3D immersion", "inmersión 3D"],
  [
    "Immersion dans les techniques modernes de communication politique et institutionnelle et dans les pratiques de leadership.",
    "Immersion in the modern techniques of political and institutional communication and in leadership practice.",
    "Inmersión en las técnicas modernas de la comunicación política e institucional y en las prácticas de liderazgo.",
  ],
  ["Impact", "Impact", "Impacto"],
  [
    "Ingénierie de coopération : accords-cadres, jumelages, missions économiques.",
    "Cooperation engineering: framework agreements, twinning, economic missions.",
    "Ingeniería de cooperación: convenios marco, hermanamientos, misiones económicas.",
  ],
  [
    "Ingénierie de l'Influence & Lobbying — GEFI Consulting",
    "Influence & Lobbying Engineering — GEFI Consulting",
    "Ingeniería de la Influencia y Lobbying — GEFI Consulting",
  ],
  [
    "InPolitics Influence : une méthode propriétaire structurée en trois phases et six axes opérationnels. La signature de l'Institut en matière d'affaires publiques.",
    "InPolitics Influence: a proprietary method structured in three phases and six operational axes. The Institute's signature in public affairs.",
    "InPolitics Influence: un método propio estructurado en tres fases y seis ejes operativos. La firma del Instituto en materia de asuntos públicos.",
  ],
  [
    "InPolitics Institute conduit ses missions d'influence sous une charte stricte : déclaration systématique des mandants, traçabilité des prises de contact, refus de toute prestation à l'égard d'intérêts contraires à l'ordre public ou aux libertés publiques.",
    "InPolitics Institute carries out its influence missions under a strict charter: systematic declaration of principals, traceability of contacts, refusal of any engagement on behalf of interests contrary to public order or public freedoms.",
    "InPolitics Institute ejerce sus misiones de influencia bajo una carta estricta: declaración sistemática de los mandantes, trazabilidad de los contactos y rechazo de todo encargo en favor de intereses contrarios al orden público o a las libertades públicas.",
  ],
  [
    "InPolitics Institute en a fait l'une de ses signatures pédagogiques. Nous formons élus, directeurs généraux et cadres territoriaux à concevoir et déployer une véritable politique étrangère locale, alignée avec les intérêts économiques et sociaux du territoire.",
    "InPolitics Institute has made it one of its teaching hallmarks. We train elected officials, directors-general and local executives to design and roll out a genuine local foreign policy, aligned with the territory's economic and social interests.",
    "InPolitics Institute ha convertido esto en una de sus señas pedagógicas. Formamos a electos, directores generales y cuadros territoriales para diseñar y desplegar una verdadera política exterior local, alineada con los intereses económicos y sociales del territorio.",
  ],
  [
    "Investir, transmettre ou s'installer depuis l'Europe expose à des risques juridiques et fonciers réels. La conciergerie InPolitics offre un point d'entrée unique : un chargé de mission qui pilote l'ensemble du dossier en lien avec nos avocats et fiscalistes partenaires.",
    "Investing, passing on or settling from Europe exposes you to real legal and land risks. The InPolitics concierge service offers a single point of entry: a project manager who runs the whole file alongside our partner lawyers and tax specialists.",
    "Invertir, transmitir o instalarse desde Europa expone a riesgos jurídicos y de suelo reales. La conserjería InPolitics ofrece un punto de entrada único: un responsable que gestiona todo el expediente junto a nuestros abogados y fiscales asociados.",
  ],
  ["Janvier 2027", "January 2027", "Enero 2027"],
  [
    "Je vous souhaite une excellente navigation et me réjouis de vous accueillir très prochainement.",
    "I wish you an excellent visit and look forward to welcoming you very soon.",
    "Le deseo una excelente navegación y me alegro de recibirle muy pronto.",
  ],
  [
    "Join the network that moves the needle",
    "Join the network that moves the needle",
    "Únete a la red que marca la diferencia",
  ],
  ["L'Accroche : Le Constat", "The hook: The diagnosis", "El gancho: El diagnóstico"],
  [
    "L'adhésion est strictement sur cooptation. Chaque candidat est présenté par deux membres et validé par le Comité de Direction. Les profils retenus sont issus de la sphère publique, des grandes entreprises, de la diplomatie et de l'expertise.",
    "Membership is strictly by co-optation. Each candidate is put forward by two members and approved by the Executive Committee. Selected profiles come from the public sphere, large companies, diplomacy and expertise.",
    "La adhesión es estrictamente por cooptación. Cada candidato es presentado por dos miembros y validado por el Comité de Dirección. Los perfiles seleccionados provienen de la esfera pública, las grandes empresas, la diplomacia y la experiencia.",
  ],
  [
    "L'Afrique est l'un des terrains d'application privilégiés de la méthode InPolitics. Sans implantation physique permanente à ce jour, nous organisons des sessions itinérantes, des séminaires de formation continue et des visites techniques en partenariat avec des institutions africaines de référence.",
    "Africa is one of the favoured fields of application of the InPolitics method. Without a permanent physical presence to date, we organise travelling sessions, continuing education seminars and technical visits in partnership with leading African institutions.",
    "África es uno de los terrenos de aplicación privilegiados del método InPolitics. Sin implantación física permanente hasta la fecha, organizamos sesiones itinerantes, seminarios de formación continua y visitas técnicas en alianza con instituciones africanas de referencia.",
  ],
  [
    "L'influence se pratique dans la clarté. Notre doctrine : un lobbying d'intérêt général, traçable, aligné sur les standards OCDE et UE.",
    "Influence is practised in the open. Our doctrine: a general-interest lobbying practice, traceable, aligned with OECD and EU standards.",
    "La influencia se ejerce con claridad. Nuestra doctrina: un lobby de interés general, trazable, alineado con los estándares de la OCDE y la UE.",
  ],
  [
    "L'Institut — Diplomatie Territoriale",
    "The Institute — Territorial Diplomacy",
    "El Instituto — Diplomacia Territorial",
  ],
  ["L'Institut — Galerie", "The Institute — Gallery", "El Instituto — Galería"],
  ["L'Institut — Label", "The Institute — Label", "El Instituto — Sello"],
  [
    "L'Institut — Lobbying & Intégrité",
    "The Institute — Lobbying & Integrity",
    "El Instituto — Lobbying e Integridad",
  ],
  ["L'Institut — Manifeste", "The Institute — Manifesto", "El Instituto — Manifiesto"],
  ["L'Institut — Nos sites", "The Institute — Our sites", "El Instituto — Nuestras sedes"],
  [
    "L'Institut anime tout au long de l'année une programmation à trois niveaux : conférences publiques (ouvertes sur inscription), séminaires fermés (sur invitation) et colloques annuels (un grand rendez-vous par axe stratégique).",
    "The Institute runs, all year round, a three-tier programme: public lectures (open registration), closed seminars (by invitation) and annual conferences (one major event per strategic axis).",
    "El Instituto desarrolla a lo largo del año una programación en tres niveles: conferencias públicas (abiertas con inscripción), seminarios cerrados (por invitación) y coloquios anuales (un gran encuentro por eje estratégico).",
  ],
  ["L'Objectif", "The Objective", "El Objetivo"],
  [
    "L'Observatoire publie selon trois formats complémentaires : notes courtes (8 pages), rapports thématiques (40 à 80 pages) et baromètres annuels (données quantitatives).",
    "The Observatory publishes in three complementary formats: short notes (8 pages), thematic reports (40 to 80 pages) and annual barometers (quantitative data).",
    "El Observatorio publica en tres formatos complementarios: notas cortas (8 páginas), informes temáticos (40 a 80 páginas) y barómetros anuales (datos cuantitativos).",
  ],
  [
    "L'ouvrage articule théorie communicationnelle, retours d'expérience récents et boîte à outils pratique. Il s'adresse aux élus, à leurs équipes et aux étudiants des sciences politiques.",
    "The book combines communication theory, recent case experience and a practical toolkit. It is aimed at elected officials, their teams and political science students.",
    "El libro articula teoría comunicacional, experiencias recientes y una caja de herramientas práctica. Se dirige a los electos, sus equipos y a los estudiantes de ciencias políticas.",
  ],
  [
    "L'ouvrage est disponible en librairie et par commande directe auprès de l'Institut. Les commandes institutionnelles bénéficient d'une tarification dédiée.",
    "The book is available in bookshops and by direct order from the Institute. Institutional orders benefit from dedicated pricing.",
    "El libro está disponible en librerías y por pedido directo al Instituto. Los pedidos institucionales disfrutan de una tarifa dedicada.",
  ],
  [
    "La Communication d'Impact & le Leadership — pour structurer un discours fort, maîtriser son image et bâtir une influence durable sans rejet.",
    "Impact Communication & Leadership — to structure a powerful message, manage your image and build lasting influence without triggering rejection.",
    "Comunicación de Impacto y Liderazgo — para estructurar un discurso sólido, dominar su imagen y construir una influencia duradera sin rechazo.",
  ],
  [
    "La crise de la décision publique et le besoin de rigueur scientifique.",
    "The crisis of public decision-making and the need for scientific rigour.",
    "La crisis de la decisión pública y la necesidad de rigor científico.",
  ],
  [
    "La Data & la Technopolitique — pour analyser les comportements, anticiper les tendances et modéliser la prise de décision.",
    "Data & Political Technology — to analyse behaviour, anticipate trends and model decision-making.",
    "Los Datos y la Tecnopolítica — para analizar comportamientos, anticipar tendencias y modelar la toma de decisiones.",
  ],
  [
    "La diplomatie territoriale désigne la capacité d'un territoire à porter une stratégie d'influence internationale cohérente : jumelages économiques structurés, missions de prospection ciblées, accueil d'investisseurs, soft power culturel et sportif, présence dans les enceintes multilatérales.",
    "Territorial diplomacy is a territory's ability to carry a coherent international influence strategy: structured economic twinning, targeted prospecting missions, investor attraction, cultural and sporting soft power, presence in multilateral forums.",
    "La diplomacia territorial designa la capacidad de un territorio de impulsar una estrategia de influencia internacional coherente: hermanamientos económicos estructurados, misiones de prospección dirigidas, acogida de inversores, soft power cultural y deportivo, presencia en foros multilaterales.",
  ],
  ["La Fiche Synthèse du Pitch", "The Pitch Fact Sheet", "La Ficha Síntesis del Pitch"],
  ["La Mission", "The Mission", "La Misión"],
  [
    "La Science Politique & la Gouvernance — pour comprendre les dynamiques de pouvoir et d'opinion.",
    "Political Science & Governance — to understand the dynamics of power and opinion.",
    "Ciencia Política y Gobernanza — para comprender las dinámicas del poder y de la opinión.",
  ],
  [
    "La Solution : InPolitics Institute",
    "The Solution: InPolitics Institute",
    "La Solución: InPolitics Institute",
  ],
  ["La Vision", "The Vision", "La Visión"],
  ["La Vision & La Conclusion", "The Vision & The Conclusion", "La Visión y La Conclusión"],
  [
    "Le blog accueille des contributions extérieures sous réserve de qualité éditoriale. Les propositions sont à adresser à la rédaction via le formulaire de contact.",
    "The blog welcomes external contributions subject to editorial quality. Proposals should be sent to the editorial team via the contact form.",
    "El blog acoge contribuciones externas sujetas a criterios de calidad editorial. Las propuestas deben remitirse a la redacción mediante el formulario de contacto.",
  ],
  [
    "Le blog du Décideur Public donne la parole à des praticiens : élus, hauts fonctionnaires, universitaires, dirigeants. Chaque tribune passe par un comité de lecture pour garantir la rigueur de l'argumentation et l'absence de conflits d'intérêts non déclarés.",
    "The Public Decision-Maker blog gives the floor to practitioners: elected officials, senior civil servants, academics, leaders. Every op-ed goes through a reading committee to guarantee the rigour of the argument and the absence of undeclared conflicts of interest.",
    "El blog del Decisor Público da la palabra a profesionales: electos, altos funcionarios, académicos, directivos. Cada tribuna pasa por un comité de lectura para garantizar el rigor del argumento y la ausencia de conflictos de interés no declarados.",
  ],
  ["Le cadre méthodologique", "The methodological framework", "El marco metodológico"],
  [
    "Le cercle de réflexion privé de l'Institut. Un dispositif confidentiel réservé aux dirigeants, élus, hauts fonctionnaires et décideurs économiques.",
    "The Institute's private think tank. A confidential scheme reserved for executives, elected officials, senior civil servants and economic decision-makers.",
    "El círculo de reflexión privado del Instituto. Un dispositivo confidencial reservado a directivos, electos, altos funcionarios y decisores económicos.",
  ],
  [
    "Le Club InPolitics Exec réunit chaque trimestre une quarantaine de membres autour d'un dîner-débat, d'une table ronde stratégique et d'une note de réflexion confidentielle élaborée par l'Observatoire.",
    "The Club InPolitics Exec brings together around forty members each quarter for a debate dinner, a strategic round table and a confidential reflection note prepared by the Observatory.",
    "El Club InPolitics Exec reúne cada trimestre a unos cuarenta miembros en torno a una cena-debate, una mesa redonda estratégica y una nota de reflexión confidencial elaborada por el Observatorio.",
  ],
  ["Le Comment", "The How", "El Cómo"],
  [
    "Le cursus alterne 80 % de distanciel sur notre plateforme propriétaire et 20 % de présentiel à Gigean, ponctué de masterclasses confidentielles avec d'anciens ministres et hauts cadres européens.",
    "The course alternates 80% distance learning on our proprietary platform and 20% in person in Gigean, punctuated by confidential masterclasses with former ministers and senior European executives.",
    "El cursus alterna un 80% de distancia en nuestra plataforma propia y un 20% presencial en Gigean, con masterclasses confidenciales con antiguos ministros y altos cargos europeos.",
  ],
  [
    "Le déploiement combine action institutionnelle et signaux publics maîtrisés, avec un dispositif d'évaluation continue.",
    "Deployment combines institutional action and controlled public signals, with a continuous evaluation framework.",
    "El despliegue combina la acción institucional y señales públicas controladas, con un dispositivo de evaluación continua.",
  ],
  ["Le Lab — Agenda", "The Lab — Agenda", "El Laboratorio — Agenda"],
  ["Le Lab — Blog", "The Lab — Blog", "El Laboratorio — Blog"],
  ["Le Lab — Livre", "The Lab — Book", "El Laboratorio — Libro"],
  ["Le Lab — Publications", "The Lab — Publications", "El Laboratorio — Publicaciones"],
  [
    "Le label repose sur un référentiel public, évalué par un comité d'experts indépendants composés d'anciens magistrats financiers, d'inspecteurs des finances et d'universitaires en finances publiques.",
    "The label rests on a public framework, assessed by an independent committee of experts made up of former financial magistrates, inspectors of public finances and academics in public finance.",
    "El sello se apoya en un referente público, evaluado por un comité de expertos independientes formado por antiguos magistrados financieros, inspectores de finanzas y académicos en finanzas públicas.",
  ],
  [
    'Le Livre — "Communiquer en Politique"',
    'The Book — "Communiquer en Politique"',
    'El Libro — "Communiquer en Politique"',
  ],
  ["Le Manifeste de l'Institut", "The Institute's Manifesto", "El Manifiesto del Instituto"],
  ["Le mot du Directeur", "Message from the Managing Director", "Mensaje de la Dirección General"],
  ["Le Pourquoi", "The Why", "El Porqué"],
  ["Le principe", "The principle", "El principio"],
  [
    "Le programme phare de l'Institut : 12 semaines d'ingénierie d'influence, du diagnostic à la mobilisation des décideurs.",
    "The Institute's flagship programme: 12 weeks of influence engineering, from diagnosis to mobilising decision-makers.",
    "El programa emblema del Instituto: 12 semanas de ingeniería de la influencia, del diagnóstico a la movilización de los decisores.",
  ],
  ["Le Quoi", "The What", "El Qué"],
  [
    "Le site Europe accueille les Séminaires d'Immersion, les Cursus Hybrides et les conférences de haut niveau du Lab. Il est conçu comme un véritable lieu de travail pour décideurs : amphithéâtre, salles de simulation, espace de coworking exécutif et résidence d'études.",
    "The European site hosts the Immersion Seminars, the Hybrid Tracks and the Lab's high-level conferences. It is designed as a genuine workplace for decision-makers: lecture theatre, simulation rooms, executive co-working space and a study residence.",
    "La sede europea acoge los Seminarios de Inmersión, los Ciclos Híbridos y las conferencias de alto nivel del Laboratorio. Está concebida como un verdadero lugar de trabajo para decisores: anfiteatro, salas de simulación, espacio de coworking ejecutivo y residencia de estudios.",
  ],
  [
    "Learn by doing, not by theorizing",
    "Learn by doing, not by theorizing",
    "Aprenda haciendo, no teorizando",
  ],
  [
    "Les analyses, rapports et notes de l'Observatoire InPolitics : décryptage rigoureux des dynamiques politiques, territoriales et numériques.",
    "The analyses, reports and notes of the InPolitics Observatory: rigorous decoding of political, territorial and digital dynamics.",
    "Los análisis, informes y notas del Observatorio InPolitics: descifrado riguroso de las dinámicas políticas, territoriales y digitales.",
  ],
  [
    'Les collectivités performantes manquent souvent d\'un signal extérieur attestant de la qualité de leur gouvernance financière. Le label "Commune de Haute Intégrité" comble ce vide : il offre aux exécutifs locaux une reconnaissance objective, mesurable et indépendante.',
    'High-performing local authorities often lack an external signal attesting to the quality of their financial governance. The "High-Integrity Municipality" label fills that gap: it gives local executives objective, measurable and independent recognition.',
    'A las colectividades con buen desempeño les falta a menudo una señal externa que acredite la calidad de su gobernanza financiera. El sello "Municipio de Alta Integridad" suple esa carencia: ofrece a los ejecutivos locales un reconocimiento objetivo, medible e independiente.',
  ],
  ["Les critères d'évaluation", "Assessment criteria", "Criterios de evaluación"],
  [
    "Les cursus hybrides reprennent l'ossature des programmes en présentiel, avec un effort particulier sur la modularité : entrée possible à plusieurs sessions par an, parcours personnalisé selon le profil professionnel.",
    "The hybrid tracks follow the structure of the in-person programmes, with particular attention to modularity: entry possible at several sessions a year, a personalised path according to professional profile.",
    "Los ciclos híbridos retoman la estructura de los programas presenciales, con especial atención a la modularidad: entrada posible en varias sesiones al año, itinerario personalizado según el perfil profesional.",
  ],
  [
    "Les dirigeants, les décideurs publics et les organisations font face à un défi majeur : comment se faire entendre, se faire respecter et prendre des décisions stratégiques éclairées dans un monde hyperconnecté ?",
    "Leaders, public decision-makers and organisations face a major challenge: how to be heard, be respected and make informed strategic decisions in a hyper-connected world?",
    "Los líderes, los decisores públicos y las organizaciones enfrentan un gran desafío: ¿cómo hacerse oír, ganarse el respeto y tomar decisiones estratégicas informadas en un mundo hiperconectado?",
  ],
  [
    "Les échanges se tiennent sous règle de Chatham House : libre circulation des idées, confidentialité absolue des prises de parole.",
    "Discussions are held under the Chatham House rule: free circulation of ideas, absolute confidentiality of contributions.",
    "Los intercambios se celebran bajo la regla de Chatham House: libre circulación de ideas y confidencialidad absoluta de las intervenciones.",
  ],
  [
    "Les inscriptions aux conférences publiques sont gratuites mais obligatoires (capacité limitée). Les séminaires fermés sont sur invitation nominative.",
    "Registration for public lectures is free but mandatory (limited capacity). Closed seminars are by named invitation.",
    "Las inscripciones para las conferencias públicas son gratuitas pero obligatorias (aforo limitado). Los seminarios cerrados son por invitación nominal.",
  ],
  ["Les modules clés du pilier.", "The pillar's key modules.", "Los módulos clave del pilar."],
  [
    "Les notes courtes sont publiées en accès libre. Les rapports thématiques sont disponibles à l'unité ou par abonnement annuel (Grand Public ou Corporate).",
    "Short notes are published in open access. Thematic reports are available individually or on an annual subscription (General or Corporate).",
    "Las notas cortas se publican en acceso libre. Los informes temáticos están disponibles por unidad o por suscripción anual (Público o Corporativo).",
  ],
  ["Les Offres", "The Offers", "Las Ofertas"],
  [
    "Les sessions sont conçues comme des résidences pédagogiques intensives de 3 à 10 jours, encadrées par les intervenants permanents de l'Institut et des experts régionaux invités.",
    "Sessions are designed as intensive teaching residencies of 3 to 10 days, led by the Institute's permanent speakers and invited regional experts.",
    "Las sesiones están concebidas como residencias pedagógicas intensivas de 3 a 10 días, dirigidas por los ponentes permanentes del Instituto y expertos regionales invitados.",
  ],
  [
    "Les territoires, qu'ils soient en Europe ou au cœur de l'Afrique, font face aux mêmes exigences de souveraineté, d'intégrité et de performance. C'est dans cette conviction qu'est né InPolitics Institute : bâtir un pont d'excellence entre les deux rives, former une élite publique capable de penser stratégiquement, d'agir éthiquement et de servir avec rigueur.",
    "Territories, whether in Europe or at the heart of Africa, face the same demands for sovereignty, integrity and performance. It is in this conviction that InPolitics Institute was born: to build a bridge of excellence between the two shores, and to train a public elite capable of thinking strategically, acting ethically and serving with rigour.",
    "Los territorios, ya sea en Europa o en el corazón de África, enfrentan las mismas exigencias de soberanía, integridad y desempeño. En esta convicción nació InPolitics Institute: construir un puente de excelencia entre las dos orillas, formar a una élite pública capaz de pensar estratégicamente, actuar éticamente y servir con rigor.",
  ],
  [
    "Les visites techniques permettent à nos auditeurs de confronter la théorie à la réalité opérationnelle. Chaque visite est organisée avec les opérateurs hôtes : présentation institutionnelle, visite de site, table ronde avec les équipes techniques, restitution analytique.",
    "Technical visits let our participants confront theory with operational reality. Each visit is organised with the host operators: institutional presentation, site visit, round table with the technical teams, analytical debriefing.",
    "Las visitas técnicas permiten a nuestros asistentes confrontar la teoría con la realidad operativa. Cada visita se organiza con los operadores anfitriones: presentación institucional, visita de la instalación, mesa redonda con los equipos técnicos, devolución analítica.",
  ],
  ["Lieu :", "Location:", "Lugar:"],
  [
    "Lobbying & Plaidoyer d'Influence",
    "Lobbying & Influence Advocacy",
    "Lobbying e Incidencia de Influencia",
  ],
  [
    "Lobbying & Réseau — Club Exec",
    "Advocacy & Network — Club Exec",
    "Incidencia y Red — Club Exec",
  ],
  [
    "Lobbying & Réseau — Entreprises",
    "Advocacy & Network — Companies",
    "Incidencia y Red — Empresas",
  ],
  ["Lobbying & Réseau — Méthode", "Advocacy & Network — Method", "Incidencia y Red — Método"],
  [
    "Lobbying d'intégrité et plaidoyer (3 jours).",
    "Integrity lobbying and advocacy (3 days).",
    "Lobbying de integridad e incidencia (3 días).",
  ],
  [
    "Maires, chefs de cabinet, chargés de coopération, responsables des relations internationales",
    "Mayors, chiefs of staff, cooperation officers, heads of international relations",
    "Alcaldes, jefes de gabinete, responsables de cooperación, responsables de relaciones internacionales",
  ],
  [
    "Maires, receveurs municipaux, contrôleurs de gestion, cadres financiers",
    "Mayors, municipal treasurers, management controllers, finance executives",
    "Alcaldes, tesoreros municipales, controladores de gestión, cuadros financieros",
  ],
  [
    "Maîtrise de la dette et soutenabilité à 10 ans.",
    "Debt management and 10-year sustainability.",
    "Control de la deuda y sostenibilidad a 10 años.",
  ],
  [
    "Maîtrise des outils financiers et budgétaires pour une gestion moderne des collectivités locales : transparence, efficacité, optimisation.",
    "Mastery of financial and budget tools for modern management of local authorities: transparency, efficiency, optimisation.",
    "Dominio de las herramientas financieras y presupuestarias para una gestión moderna de las colectividades locales: transparencia, eficiencia, optimización.",
  ],
  [
    "Mêler science politique, données et communication d'impact. La politique n'est pas qu'une affaire de discours, c'est une science de la donnée et de la stratégie. Chez InPolitics Institute, nous formons les décideurs à cette nouvelle ère technopolitique.",
    "Combine political science, data and impact communication. Politics is not just a matter of rhetoric, it is a science of data and strategy. At InPolitics Institute, we train decision-makers for this new political-technological era.",
    "Combinar ciencia política, datos y comunicación de impacto. La política no es solo cuestión de discursos, es una ciencia del dato y de la estrategia. En InPolitics Institute formamos a los decisores para esta nueva era tecnopolítica.",
  ],
  ["Mention Légale", "Legal Notice", "Aviso Legal"],
  ["Méthodologie", "Methodology", "Metodología"],
  ["Méthodologie de partage", "Sharing methodology", "Metodología de difusión"],
  [
    "Métropoles européennes en quête d'attractivité, collectivités africaines structurant leur diaspora économique, intercommunalités souhaitant capter des investissements stratégiques : la diplomatie territoriale s'adresse à tout exécutif local conscient que la compétition se joue désormais à l'échelle mondiale.",
    "European metropolises seeking attractiveness, African local authorities structuring their economic diaspora, intercommunalities wishing to attract strategic investment: territorial diplomacy addresses every local executive aware that competition is now played out at global scale.",
    "Metrópolis europeas en busca de atractivo, colectividades africanas que estructuran su diáspora económica, mancomunidades que desean captar inversión estratégica: la diplomacia territorial se dirige a todo ejecutivo local consciente de que la competencia se libra ahora a escala mundial.",
  ],
  [
    "Mise en place d'un tableau de bord temps réel à destination du maire et du directeur général : 36 indicateurs clés, alertes paramétrées, restitution mensuelle au conseil. Effet immédiat sur la qualité de la décision politique.",
    "Set-up of a real-time dashboard for the mayor and the director-general: 36 key indicators, configurable alerts, monthly reporting to the council. Immediate effect on the quality of political decision-making.",
    "Implantación de un cuadro de mando en tiempo real para el alcalde y el director general: 36 indicadores clave, alertas parametrizables, información mensual al consejo. Efecto inmediato en la calidad de la decisión política.",
  ],
  [
    "Mise en relation institutionnelle.",
    "Institutional introductions.",
    "Puesta en relación institucional.",
  ],
  [
    "Mobilisation d'une communauté internationale exclusive réunissant leaders économiques, industriels et décideurs publics, favorisant les synergies de haut niveau et l'ouverture de nouveaux marchés.",
    "Mobilising an exclusive international community bringing together economic leaders, industrial players and public decision-makers, fostering high-level synergies and opening new markets.",
    "Movilización de una comunidad internacional exclusiva que reúne a líderes económicos, industriales y decisores públicos, favoreciendo sinergias de alto nivel y la apertura de nuevos mercados.",
  ],
  [
    "Mobilités — optimisation des flux et de l'offre de transport.",
    "Mobility — optimising flows and transport provision.",
    "Movilidad — optimización de los flujos y de la oferta de transporte.",
  ],
  [
    "Mobilités décarbonées — région Occitanie.",
    "Low-carbon mobility — Occitanie region.",
    "Movilidad baja en carbono — región de Occitania.",
  ],
  ["Modalités d'inscription", "Registration details", "Modalidades de inscripción"],
  [
    "Module 1 — Cartographie d'influence et théorie des parties prenantes.",
    "Module 1 — Influence mapping and stakeholder theory.",
    "Módulo 1 — Cartografía de la influencia y teoría de las partes interesadas.",
  ],
  [
    "Module 2 — Rédaction de position papers et argumentaire institutionnel.",
    "Module 2 — Writing position papers and institutional argumentation.",
    "Módulo 2 — Redacción de position papers e argumentario institucional.",
  ],
  [
    "Module 3 — Conduite d'entretiens, négociation, médiation.",
    "Module 3 — Conducting interviews, negotiation, mediation.",
    "Módulo 3 — Realización de entrevistas, negociación, mediación.",
  ],
  [
    "Module 4 — Évaluation d'impact et mesure du retour d'influence.",
    "Module 4 — Impact evaluation and measuring return on influence.",
    "Módulo 4 — Evaluación de impacto y medición del retorno de la influencia.",
  ],
  [
    "Module final — Mémoire stratégique soutenu devant un jury d'État.",
    "Final module — Strategic dissertation defended before a panel of state officials.",
    "Módulo final — Trabajo estratégico defendido ante un tribunal de responsables públicos.",
  ],
  [
    "Montpellier, France / En ligne",
    "Montpellier, France / Online",
    "Montpellier, Francia / En línea",
  ],
  [
    "Nos programmes d'Influence Publique forment dirigeants, directeurs des affaires publiques et chargés de mission à pratiquer un lobbying conforme : conformité réglementaire, rédaction de position papers, conduite d'entretiens institutionnels, gestion des conflits d'intérêts.",
    "Our Public Influence programmes train leaders, directors of public affairs and project managers to practise compliant lobbying: regulatory compliance, writing position papers, running institutional interviews, managing conflicts of interest.",
    "Nuestros programas de Influencia Pública forman a directivos, directores de asuntos públicos y responsables de proyecto para practicar un lobby conforme: cumplimiento regulatorio, redacción de position papers, gestión de entrevistas institucionales y administración de conflictos de interés.",
  ],
  ["Nos Programmes Ouverts", "Our Open Programmes", "Nuestros Programas Abiertos"],
  [
    "Notes courtes — éclairages rapides sur l'actualité institutionnelle.",
    "Short notes — quick briefings on institutional news.",
    "Notas cortas — visiones rápidas sobre la actualidad institucional.",
  ],
  [
    "Notre action se déploie autour de trois priorités majeures qui redéfinissent l'exercice du pouvoir moderne :",
    "Our action unfolds around three major priorities that redefine the exercise of modern power:",
    "Nuestra acción se despliega en torno a tres prioridades principales que redefinen el ejercicio del poder moderno:",
  ],
  [
    "Notre ambition est claire : devenir le hub d'excellence de l'ingénierie politique en Afrique et à l'international, en offrant aux leaders les outils stratégiques et éthiques pour transformer la gouvernance de demain.",
    "Our ambition is clear: to become the hub of excellence for political engineering in Africa and internationally, offering leaders the strategic and ethical tools to transform the governance of tomorrow.",
    "Nuestra ambición es clara: convertirnos en el polo de excelencia de la ingeniería política en África y a nivel internacional, ofreciendo a los líderes las herramientas estratégicas y éticas para transformar la gobernanza del mañana.",
  ],
  [
    "Notre ambition est claire : devenir le hub d'excellence de l'ingénierie politique en Afrique et à l'international, en offrant aux leaders les outils stratégiques et éthiques pour transformer la gouvernance de demain. Avec InPolitics Institute, la politique retrouve sa précision scientifique et sa force d'impact.",
    "Our ambition is clear: to become the hub of excellence for political engineering in Africa and internationally, offering leaders the strategic and ethical tools to transform the governance of tomorrow. With InPolitics Institute, politics regains its scientific precision and its impact.",
    "Nuestra ambición es clara: convertirnos en el polo de excelencia de la ingeniería política en África y a nivel internacional, ofreciendo a los líderes las herramientas estratégicas y éticas para transformar la gobernanza del mañana. Con InPolitics Institute, la política recupera su precisión científica y su fuerza de impacto.",
  ],
  [
    "Notre ambition est d'ouvrir, à moyen terme, un site Afrique dédié à la diplomatie territoriale et à la gouvernance digitale, en lien étroit avec les pôles métropolitains du continent.",
    "Our ambition is to open, in the medium term, an Africa site dedicated to territorial diplomacy and digital governance, in close connection with the continent's metropolitan hubs.",
    "Nuestra ambición es abrir, a medio plazo, una sede África dedicada a la diplomacia territorial y la gobernanza digital, en estrecho vínculo con los polos metropolitanos del continente.",
  ],
  [
    "Notre approche s'appuie sur quatre axes opérationnels : diagnostic d'attractivité, cartographie d'influence, ingénierie de coopération, et évaluation d'impact.",
    "Our approach rests on four operational axes: attractiveness diagnosis, influence mapping, cooperation engineering and impact evaluation.",
    "Nuestro enfoque se apoya en cuatro ejes operativos: diagnóstico de atractivo, cartografía de la influencia, ingeniería de cooperación y evaluación de impacto.",
  ],
  ["Notre charte éthique", "Our ethical charter", "Nuestra carta ética"],
  [
    "Notre Impact & Nos Services",
    "Our Impact & Our Services",
    "Nuestro Impacto y Nuestros Servicios",
  ],
  [
    "Notre Institut n'est ni un think-tank de plus, ni une simple école de formation. C'est un écosystème intégré — académie, observatoire, cabinet d'influence et incubateur de solutions de gouvernance digitale — au service exclusif des décideurs publics et privés qui veulent transformer leurs territoires.",
    "Our Institute is neither just another think tank nor a mere training school. It is an integrated ecosystem — academy, observatory, influence firm and incubator of digital governance solutions — serving exclusively the public and private decision-makers who want to transform their territories.",
    "Nuestro Instituto no es ni un think tank más ni una simple escuela de formación. Es un ecosistema integrado — academia, observatorio, gabinete de influencia e incubadora de soluciones de gobernanza digital — al servicio exclusivo de los decisores públicos y privados que quieren transformar sus territorios.",
  ],
  [
    "Notre méthode distingue trois registres : le plaidoyer (cause publique), le lobbying (intérêt sectoriel régulé) et les affaires publiques (relations institutionnelles). Pour chacun, l'Institut applique le même socle : argumentaire factuel, traçabilité, déontologie.",
    "Our method distinguishes three registers: advocacy (public cause), lobbying (regulated sectoral interest) and public affairs (institutional relations). For each, the Institute applies the same foundation: factual argument, traceability, ethics.",
    "Nuestro método distingue tres registros: la incidencia (causa pública), el lobby (interés sectorial regulado) y los asuntos públicos (relaciones institucionales). Para cada uno, el Instituto aplica el mismo sustrato: argumento factual, trazabilidad, deontología.",
  ],
  [
    "Notre mission est d'apporter de la rigueur scientifique là où il n'y avait parfois que de l'empirisme. Nous croisons trois forces fondamentales :",
    "Our mission is to bring scientific rigour where there was sometimes only empiricism. We combine three fundamental strengths:",
    "Nuestra misión es aportar rigor científico donde a veces solo había empirismo. Combinamos tres fuerzas fundamentales:",
  ],
  [
    "Notre plateforme propriétaire propose des modules vidéo de 20 à 40 minutes, des cas pratiques interactifs, des classes virtuelles hebdomadaires et un tutorat individualisé. Accessible 24/7, sur tous supports.",
    "Our proprietary platform offers video modules of 20 to 40 minutes, interactive case studies, weekly virtual classes and individual tutoring. Available 24/7, on every device.",
    "Nuestra plataforma propia propone módulos de vídeo de 20 a 40 minutos, casos prácticos interactivos, clases virtuales semanales y tutoría individualizada. Accesible 24/7, en todos los dispositivos.",
  ],
  [
    "Notre site historique est implanté à Gigean, au cœur de la dynamique métropolitaine de Montpellier, à 25 minutes des institutions économiques de l'Hérault et du port de Sète. Ce positionnement stratégique permet à nos auditeurs de bénéficier d'un cadre républicain rigoureux tout en restant connectés à un tissu économique européen de premier plan.",
    "Our historic site is in Gigean, at the heart of the Montpellier metropolitan dynamic, 25 minutes from the economic institutions of the Hérault and the port of Sète. This strategic positioning lets our participants benefit from a rigorous republican environment while staying connected to a leading European economic fabric.",
    "Nuestra sede histórica está en Gigean, en el corazón de la dinámica metropolitana de Montpellier, a 25 minutos de las instituciones económicas del Hérault y del puerto de Sète. Este posicionamiento estratégico permite a nuestros asistentes beneficiarse de un entorno republicano riguroso y, a la vez, estar conectados con un tejido económico europeo de primer nivel.",
  ],
  [
    "Notre suite SaaS regroupe des modules conçus pour les communes, intercommunalités et métropoles : recouvrement intelligent, gestion des actes administratifs, portail citoyen, tableau de bord exécutif.",
    "Our SaaS suite brings together modules designed for municipalities, intercommunalities and metropolises: intelligent recovery, management of administrative documents, citizen portal, executive dashboard.",
    "Nuestra suite SaaS reúne módulos concebidos para municipios, mancomunidades y metrópolis: recaudación inteligente, gestión de actos administrativos, portal ciudadano, cuadro de mando ejecutivo.",
  ],
  [
    "Nous avons conçu cette institution non pas comme un simple institut de formation, mais comme une plateforme internationale de diplomatie territoriale, de lobbying d'intégrité, de recherche et de gouvernance digitale. À travers notre double ancrage stratégique — Europe à Gigean (Montpellier Métropole, France) et localisations en Afrique — nous opérons au point de convergence entre la haute décision politique et l'innovation technologique.",
    "We designed this institution not as a mere training institute, but as an international platform for territorial diplomacy, integrity lobbying, research and digital governance. Through our dual strategic anchor — Europe in Gigean (Montpellier Métropole, France) and locations in Africa — we operate at the convergence of high political decision-making and technological innovation.",
    "Diseñamos esta institución no como un simple instituto de formación, sino como una plataforma internacional de diplomacia territorial, lobby de integridad, investigación y gobernanza digital. A través de nuestro doble anclaje estratégico — Europa en Gigean (Montpellier Métropole, Francia) y localizaciones en África — operamos en el punto de convergencia entre la alta decisión política y la innovación tecnológica.",
  ],
  [
    "Nous concentrons nos efforts sur les cas d'usage à fort impact citoyen : anticipation des besoins en équipements publics, optimisation de la collecte des déchets, prévention des risques (inondations, sécheresse), maintenance prédictive du patrimoine.",
    "We focus our efforts on use cases with high citizen impact: anticipating the need for public facilities, optimising waste collection, preventing risks (floods, drought), predictive maintenance of heritage buildings.",
    "Concentramos nuestros esfuerzos en casos de uso de alto impacto ciudadano: anticipación de las necesidades de equipamientos públicos, optimización de la recogida de residuos, prevención de riesgos (inundaciones, sequía), mantenimiento predictivo del patrimonio.",
  ],
  [
    "Nous formons les agents publics à la lecture critique des outils d'IA, à la rédaction de cahiers des charges robustes et au pilotage éthique des partenariats avec les éditeurs.",
    "We train public servants in the critical reading of AI tools, in writing robust specifications and in the ethical steering of partnerships with software vendors.",
    "Formamos a los agentes públicos en la lectura crítica de las herramientas de IA, en la redacción de pliegos robustos y en la dirección ética de las alianzas con los editores.",
  ],
  [
    "Nous sommes un institut de référence spécialisé dans la formation de haut niveau, le conseil stratégique et l'analyse technopolitique.",
    "We are a benchmark institute specialising in high-level training, strategic advisory and political-technological analysis.",
    "Somos un instituto de referencia especializado en la formación de alto nivel, el asesoramiento estratégico y el análisis tecnopolítico.",
  ],
  ["Objectifs", "Objectives", "Objetivos"],
  ["Objectifs :", "Objectives:", "Objetivos:"],
  [
    "Optimisation fiscale dans le respect des conventions bilatérales.",
    "Tax optimisation in compliance with bilateral agreements.",
    "Optimización fiscal respetando los convenios bilaterales.",
  ],
  ["Où allons-nous ?", "Where are we going?", "¿A dónde vamos?"],
  [
    "Par Arnaud SIGHANO — Directeur Associé",
    "By Arnaud SIGHANO — Associate Director",
    "Por Arnaud SIGHANO — Director Asociado",
  ],
  ["Partenaire institutionnel", "Institutional partner", "Socio institucional"],
  [
    "Partenariats public-privé et montage institutionnel",
    "Public-private partnerships and institutional structuring",
    "Alianzas público-privadas y montaje institucional",
  ],
  [
    "Partie I — Cadre conceptuel et histoire de la communication politique.",
    "Part I — Conceptual framework and history of political communication.",
    "Parte I — Marco conceptual y historia de la comunicación política.",
  ],
  [
    "Partie II — Récit, image, plateformes : la nouvelle économie de l'attention.",
    "Part II — Narrative, image, platforms: the new attention economy.",
    "Parte II — Relato, imagen, plataformas: la nueva economía de la atención.",
  ],
  [
    "Partie III — Stratégie de campagne et conduite de mandat.",
    "Part III — Campaign strategy and management of the mandate.",
    "Parte III — Estrategia de campaña y conducción del mandato.",
  ],
  [
    "Partie IV — Gestion de crise et résilience institutionnelle.",
    "Part IV — Crisis management and institutional resilience.",
    "Parte IV — Gestión de crisis y resiliencia institucional.",
  ],
  [
    "Patrimoine — maintenance prédictive des bâtiments publics.",
    "Heritage buildings — predictive maintenance of public buildings.",
    "Patrimonio — mantenimiento predictivo de edificios públicos.",
  ],
  ["Perspectives — Site Afrique", "Outlook — Africa site", "Perspectivas — Sede África"],
  ["Phase 1 — Diagnostic", "Phase 1 — Diagnosis", "Fase 1 — Diagnóstico"],
  ["Phase 2 — Construction", "Phase 2 — Build", "Fase 2 — Construcción"],
  ["Phase 3 — Déploiement", "Phase 3 — Deployment", "Fase 3 — Despliegue"],
  ["Plaidoyer d'intérêt général", "General-interest advocacy", "Incidencia de interés general"],
  [
    "Portail citoyen — démarches en ligne et suivi de dossiers.",
    "Citizen portal — online procedures and file tracking.",
    "Portal ciudadano — trámites en línea y seguimiento de expedientes.",
  ],
  [
    "Position papers et plaidoyer sectoriel",
    "Position papers and sector advocacy",
    "Position papers e incidencia sectorial",
  ],
  [
    "Position papers, veille parlementaire, accès aux marchés publics, accompagnement réglementaire. Notre cabinet d'affaires publiques.",
    "Position papers, parliamentary monitoring, access to public procurement, regulatory support. Our public affairs firm.",
    "Position papers, seguimiento parlamentario, acceso a los contratos públicos, acompañamiento regulatorio. Nuestro gabinete de asuntos públicos.",
  ],
  [
    "Positionner les territoires — communes, métropoles, régions — comme acteurs à part entière de la scène internationale. Une discipline structurante de l'Institut.",
    "Positioning territories — municipalities, metropolises, regions — as full-fledged actors on the international stage. A structuring discipline of the Institute.",
    "Posicionar los territorios — municipios, metrópolis, regiones — como actores de pleno derecho en la escena internacional. Una disciplina estructurante del Instituto.",
  ],
  ["Pour qui ?", "For whom?", "¿Para quién?"],
  ["Pourquoi un label ?", "Why a label?", "¿Por qué un sello?"],
  ["Pourquoi une conciergerie ?", "Why a concierge service?", "¿Por qué una conserjería?"],
  [
    "Préparation de la mission de terrain.",
    "Preparation for the field mission.",
    "Preparación de la misión de terreno.",
  ],
  ["Présentation", "Presentation", "Presentación"],
  [
    "Présidente du groupe GEFI (Groupement Économique Francophone et International) et de l'agence de communication stratégique COM UNIC, elle a structuré un écosystème d'influence de haut niveau dédié à l'accompagnement des dirigeants, des institutions et des grands acteurs économiques. Son action vise à faire émerger des alliances stratégiques majeures et à sécuriser le positionnement des décideurs sur les marchés internationaux.",
    "Chair of the GEFI Group (Groupe Économique Francophone et International) and of the strategic communication agency COM UNIC, she has built a high-level influence ecosystem dedicated to supporting executives, institutions and major economic players. Her action aims to bring about major strategic alliances and to secure decision-makers' positioning on international markets.",
    "Presidenta del grupo GEFI (Groupement Économique Francophone et International) y de la agencia de comunicación estratégica COM UNIC, ha estructurado un ecosistema de influencia de alto nivel dedicado al acompañamiento de directivos, instituciones y grandes actores económicos. Su acción tiende a hacer emerger alianzas estratégicas relevantes y a asegurar el posicionamiento de los decisores en los mercados internacionales.",
  ],
  [
    "Prêt à intégrer ce pilier ?",
    "Ready to join this pillar?",
    "¿Listo para incorporarse a este pilar?",
  ],
  [
    "Principes de la gouvernance contemporaine, cadres juridiques, rôle des collectivités, outils de management public et participation citoyenne.",
    "Principles of contemporary governance, legal frameworks, the role of local authorities, public management tools and citizen participation.",
    "Principios de la gobernanza contemporánea, marcos jurídicos, papel de las colectividades, herramientas de gestión pública y participación ciudadana.",
  ],
  ["Prix :", "Price:", "Precio:"],
  ["Processus d'attribution", "Award process", "Proceso de atribución"],
  ["Prochaine session :", "Next session:", "Próxima sesión:"],
  [
    "Programme Individuel (sur-mesure)",
    "Individual Programme (tailor-made)",
    "Programa Individual (a medida)",
  ],
  ["Programmes — Afrique", "Programmes — Africa", "Programas — África"],
  ["Programmes — Cursus Hybrides", "Programmes — Hybrid Tracks", "Programas — Ciclos Híbridos"],
  [
    "Programmes — Programme Phare",
    "Programmes — Flagship Programme",
    "Programas — Programa Emblema",
  ],
  [
    "Programmes — Séminaires d'Immersion",
    "Programmes — Immersion Seminars",
    "Programas — Seminarios de Inmersión",
  ],
  [
    "Programmes — Visites Techniques",
    "Programmes — Technical Visits",
    "Programas — Visitas Técnicas",
  ],
  ["Programmes d'excellence", "Programmes of excellence", "Programas de excelencia"],
  [
    "Programmes d'excellence · Séminaires d'immersion · Direction scientifique rigoureuse",
    "Outstanding programmes · Immersion seminars · Rigorous academic direction",
    "Programas de excelencia · Seminarios de inmersión · Dirección científica rigurosa",
  ],
  [
    "Protocole d'État, accueil des délégations, diplomatie locale et montage de projets de coopération décentralisée.",
    "State protocol, hosting of delegations, local diplomacy and structuring decentralised cooperation projects.",
    "Protocolo de Estado, acogida de delegaciones, diplomacia local y montaje de proyectos de cooperación descentralizada.",
  ],
  ["Public", "Public", "Público"],
  ["Public concerné", "Target audience", "Público objetivo"],
  [
    "Qualité de la commande publique (taux de mise en concurrence, contrôle).",
    "Quality of public procurement (share of competitive tendering, oversight).",
    "Calidad de la contratación pública (tasa de concurrencia, control).",
  ],
  [
    "Rapports thématiques — analyses approfondies, recommandations chiffrées.",
    "Thematic reports — in-depth analysis, quantified recommendations.",
    "Informes temáticos — análisis en profundidad, recomendaciones cuantificadas.",
  ],
  [
    "Ready to take the next step?",
    "Ready to take the next step?",
    "¿Listo para dar el siguiente paso?",
  ],
  [
    "Recherche appliquée en Technopolitiques",
    "Applied research in Political Technology",
    "Investigación aplicada en Tecnopolíticas",
  ],
  ["Recommandation / Bouche-à-oreille", "Referral / Word of mouth", "Recomendación / Boca a boca"],
  [
    "Reconnu pour son exigence par les Architectes des Bâtiments de France (ABF), il a collaboré avec plusieurs architectes français de renom qui ont façonné l'image de Paris à travers ses édifices haussmanniens les plus emblématiques.",
    "Recognised for his exacting standards by the Bâtiments de France Architects (ABF), he has worked with several renowned French architects who shaped the image of Paris through its most emblematic Haussmannian buildings.",
    "Reconocido por su exigencia por los Arquitectos de Bâtiments de France (ABF), ha colaborado con varios arquitectos franceses de renombre que han moldeado la imagen de París a través de sus edificios haussmannianos más emblemáticos.",
  ],
  [
    "Recouvrement intelligent — sécurisation des recettes fiscales locales.",
    "Intelligent recovery — securing local tax revenues.",
    "Recaudación inteligente — seguridad de los ingresos fiscales locales.",
  ],
  [
    "Rédaction et déploiement de notes de position pour comptes d'entreprises, fédérations professionnelles ou consortiums. Chaque livrable s'appuie sur une analyse réglementaire rigoureuse et un argumentaire factuel.",
    "Writing and rolling out position notes on behalf of companies, professional federations or consortiums. Every deliverable rests on rigorous regulatory analysis and factual argumentation.",
    "Redacción y despliegue de notas de posición por cuenta de empresas, federaciones profesionales o consorcios. Cada entregable se apoya en un análisis regulatorio riguroso y en un argumentario factual.",
  ],
  [
    "Reddition de comptes citoyenne (rapports annuels, contrôle démocratique).",
    "Citizen accountability (annual reports, democratic scrutiny).",
    "Rendición de cuentas ciudadana (informes anuales, control democrático).",
  ],
  [
    "Refonte du portail citoyen d'une intercommunalité : convergence de 14 démarches éparpillées en un parcours unique, satisfaction usager mesurée trimestriellement, charge administrative recentrée sur les cas complexes.",
    "Overhaul of an intercommunal citizen portal: convergence of 14 scattered procedures into a single journey, user satisfaction measured quarterly, administrative load refocused on complex cases.",
    "Reforma del portal ciudadano de una mancomunidad: convergencia de 14 trámites dispersos en un único recorrido, satisfacción del usuario medida cada trimestre, carga administrativa recentrada en los casos complejos.",
  ],
  [
    "Règles du protocole institutionnel et mécanismes de coopération internationale des collectivités territoriales.",
    "Rules of institutional protocol and mechanisms for international cooperation between local authorities.",
    "Reglas del protocolo institucional y mecanismos de cooperación internacional de las colectividades territoriales.",
  ],
  [
    "Rejoindre InPolitics, c'est faire le choix de l'élite républicaine, de l'intégrité comme socle, et de l'influence comme discipline. Bienvenue dans la maison de ceux qui transforment.",
    "Joining InPolitics means choosing republican excellence, integrity as a foundation and influence as a discipline. Welcome to the house of those who transform.",
    "Incorporarse a InPolitics es elegir la excelencia republicana, la integridad como base y la influencia como disciplina. Bienvenido a la casa de quienes transforman.",
  ],
  [
    "Relations Institutionnelles Europe–Afrique",
    "Institutional Relations Europe–Africa",
    "Relaciones Institucionales Europa–África",
  ],
  [
    "Représentation administrative en cas d'absence.",
    "Administrative representation in the event of absence.",
    "Representación administrativa en caso de ausencia.",
  ],
  [
    "Réseaux de Cooptation & Diplomatie d'Affaires — GEFI Network",
    "Co-optation Networks & Business Diplomacy — GEFI Network",
    "Redes de Cooptación y Diplomacia de Negocios — GEFI Network",
  ],
  ["Réseaux sociaux", "Social media", "Redes sociales"],
  ["RÉSERVER MA PLACE", "SAVE MY SEAT", "RESERVAR MI PLAZA"],
  [
    "Réserviste du Ministère de l'Europe et des Affaires étrangères et Membre du Conseil d'administration de l'Association France-Canada, il conjugue analyse académique et compréhension pratique des enjeux internationaux.",
    "Reservist at the Ministry for Europe and Foreign Affairs and board member of the France-Canada Association, he combines academic analysis with a practical understanding of international issues.",
    "Reservista del Ministerio de Europa y Asuntos Exteriores y miembro del Consejo de Administración de la Asociación Francia-Canadá, combina el análisis académico con la comprensión práctica de los asuntos internacionales.",
  ],
  [
    "Responsable de collectivité, Chargé de mission en gouvernance, Conseiller en politique publique",
    "Head of a local authority, project manager in governance, public policy adviser",
    "Responsable de colectividad, Responsable de proyecto en gobernanza, Asesor en políticas públicas",
  ],
  [
    "Responsable financier territorial, Auditeur interne des collectivités",
    "Territorial finance manager, internal auditor for local authorities",
    "Responsable financiero territorial, Auditor interno de las colectividades",
  ],
  [
    "Retours d'expérience de municipalités partenaires : ce qui a fonctionné, ce qui a résisté, les enseignements pour les exécutifs locaux.",
    "Feedback from partner municipalities: what worked, what resisted, the lessons for local executives.",
    "Testimonios de municipios socios: lo que funcionó, lo que resistió, las enseñanzas para los ejecutivos locales.",
  ],
  [
    "Retours de terrain — récits d'expérience d'élus et de cadres.",
    "Field feedback — accounts of experience from elected officials and executives.",
    "Retornos del terreno — relatos de experiencia de electos y cuadros.",
  ],
  [
    "Rôle à l'InPolitics Institute & Forces du Groupe GEFI",
    "Role at InPolitics Institute & Strengths of the GEFI Group",
    "Rol en InPolitics Institute y Fortalezas del Grupo GEFI",
  ],
  ["Rubriques", "Sections", "Secciones"],
  ["S'INSCRIRE À CETTE FORMATION", "SIGN UP FOR THIS TRAINING", "INSCRIBIRSE EN ESTA FORMACIÓN"],
  [
    "Sans implantation permanente à ce jour, l'Institut déploie ses sessions de formation continue sur invitation d'institutions partenaires : écoles d'administration publique, ministères, collectivités, fondations.",
    "Without a permanent presence to date, the Institute runs its continuing education sessions at the invitation of partner institutions: schools of public administration, ministries, local authorities, foundations.",
    "Sin implantación permanente hasta la fecha, el Instituto despliega sus sesiones de formación continua por invitación de instituciones socias: escuelas de administración pública, ministerios, colectividades, fundaciones.",
  ],
  [
    "School of Politics is more than a program. It's your turning point. Walk out with the expertise, presence, and vision of a leader ready to make a real impact on society.",
    "School of Politics is more than a program. It's your turning point. Walk out with the expertise, presence, and vision of a leader ready to make a real impact on society.",
    "School of Politics es más que un programa. Es su punto de inflexión. Salga con la experiencia, la presencia y la visión de un líder preparado para marcar una diferencia real en la sociedad.",
  ],
  [
    "Sécurisation foncière (titrement, bornage, contentieux).",
    "Land security (titling, boundary survey, disputes).",
    "Seguridad de la tierra (titulación, deslinde, litigios).",
  ],
  [
    "Sécurisation juridique et fiscale du projet.",
    "Legal and tax security for the project.",
    "Seguridad jurídica y fiscal del proyecto.",
  ],
  [
    "Sécurisation numérique des recettes locales, traçabilité des actes administratifs, modernisation de la relation citoyenne. Notre pôle de solutions souveraines.",
    "Digital security of local revenues, traceability of administrative documents, modernisation of the citizen relationship. Our sovereign solutions hub.",
    "Seguridad digital de los ingresos locales, trazabilidad de los actos administrativos, modernización de la relación ciudadana. Nuestro polo de soluciones soberanas.",
  ],
  [
    "Sélection sur dossier et entretien. Hébergement organisé sur place ou en résidence partenaire à Montpellier. Frais de scolarité communiqués lors de l'entretien d'admission.",
    "Selection on application and interview. Accommodation arranged on site or in a partner residence in Montpellier. Tuition fees communicated at the admission interview.",
    "Selección por expediente y entrevista. Alojamiento organizado en el lugar o en una residencia socio en Montpellier. Honorarios comunicados en la entrevista de admisión.",
  ],
  [
    "Séminaires d'Immersion à Gigean",
    "Immersion Seminars in Gigean",
    "Seminarios de Inmersión en Gigean",
  ],
  [
    "Séminaires fermés — Club Exec et Alumni.",
    "Closed seminars — Club Exec and Alumni.",
    "Seminarios cerrados — Club Exec y Alumni.",
  ],
  [
    "Séminaires, colloques, revues d'actualité, conférences publiques. L'agenda institutionnel de l'Institut.",
    "Seminars, conferences, current-affairs reviews, public lectures. The Institute's institutional agenda.",
    "Seminarios, coloquios, revistas de actualidad, conferencias públicas. La agenda institucional del Instituto.",
  ],
  [
    "Service sur souscription, facturé au forfait selon le périmètre. Devis transparent après diagnostic initial gratuit. Tous les intervenants sont des professionnels réglementés.",
    "Subscription-based service, billed at a flat rate according to scope. Transparent quote after a free initial diagnostic. All speakers are regulated professionals.",
    "Servicio por suscripción, facturado a precio cerrado según el alcance. Presupuesto transparente tras el diagnóstico inicial gratuito. Todos los ponentes son profesionales regulados.",
  ],
  [
    "Ses travaux portent sur la diplomatie climatique, la transformation des villes, la gouvernance environnementale et l’infrapolitique des communautés locales face aux technologies numériques de surveillance.",
    "His work covers climate diplomacy, the transformation of cities, environmental governance and the infra-politics of local communities in the face of digital surveillance technologies.",
    "Sus trabajos versan sobre la diplomacia climática, la transformación de las ciudades, la gobernanza ambiental y la infrapolítica de las comunidades locales frente a las tecnologías digitales de vigilancia.",
  ],
  [
    "Sessions de mise à niveau délivrées en partenariat avec des institutions africaines de référence, pour les cadres et décideurs publics du continent.",
    "Gap-closing sessions delivered in partnership with leading African institutions, for the continent's executives and public decision-makers.",
    "Sesiones de puesta al nivel impartidas en alianza con instituciones africanas de referencia, para los cuadros y decisores públicos del continente.",
  ],
  [
    "Site Europe — Gigean, Montpellier Métropole",
    "European site — Gigean, Montpellier Métropole",
    "Sede europea — Gigean, Montpellier Métropole",
  ],
  ["Site web / Moteur de recherche", "Website / Search engine", "Sitio web / Motor de búsqueda"],
  [
    "Smart City Montpellier — plateforme open data métropolitaine.",
    "Smart City Montpellier — metropolitan open data platform.",
    "Smart City Montpellier — plataforma open data metropolitana.",
  ],
  ["Sommaire indicatif", "Indicative contents", "Índice orientativo"],
  [
    "Son approche s’appuie sur les leviers du soft power, avec une expertise singulière en Sport Diplomatie. Diplômé MIAGE de l’Université Picardie Jules Verne d’Amiens et formé en diplomatie a l’université Jean Moulin Lyon 3, il combine la Technologie et Politique dans les questions de relations internationales en alliant rigueur académique et action de terrain.",
    "His approach builds on the levers of soft power, with a distinctive expertise in Sport Diplomacy. A graduate in MIAGE from the Université Picardie Jules Verne in Amiens and trained in diplomacy at Jean Moulin Lyon 3 University, he combines Technology and Politics in international relations questions, bringing together academic rigour and field action.",
    "Su enfoque se apoya en las palancas del soft power, con una experiencia singular en Diplomacia Deportiva. Diplomado MIAGE por la Universidad Picardie Jules Verne de Amiens y formado en diplomacia en la Universidad Jean Moulin Lyon 3, combina la Tecnología y la Política en las cuestiones de relaciones internacionales uniendo rigor académico y acción de terreno.",
  ],
  [
    "Son parcours est marqué par un engagement fort dans les réseaux diplomatiques : Trésorier des Alumni de l'Académie Diplomatique d'Été, il évolue au contact direct des décideurs politiques européens.",
    "His career is marked by a strong commitment to diplomatic networks: Treasurer of the Alumni of the Summer Diplomatic Academy, he works in direct contact with European political decision-makers.",
    "Su trayectoria está marcada por un fuerte compromiso con las redes diplomáticas: Tesorero de los Alumni de la Academia Diplomática de Verano, evoluciona en contacto directo con los decisores políticos europeos.",
  ],
  [
    "Soutenance devant un comité InPolitics.",
    "Defence before an InPolitics committee.",
    "Defensa ante un comité de InPolitics.",
  ],
  [
    "Spécialiste de la diplomatie d'influence, de la communication institutionnelle et du conseil en affaires publiques, Aurélie SÉREL évolue au cœur des réseaux de décision francophones et internationaux.",
    "A specialist in influence diplomacy, institutional communication and public affairs advisory, Aurélie SÉREL operates at the heart of French-speaking and international decision-making networks.",
    "Especialista en diplomacia de influencia, comunicación institucional y consultoría en asuntos públicos, Aurélie SÉREL se mueve en el corazón de las redes de decisión francófonas e internacionales.",
  ],
  [
    "Step into the circle of tomorrow's decision-makers. Connect, collaborate, build alliances. The network you build today becomes your greatest power tomorrow.",
    "Step into the circle of tomorrow's decision-makers. Connect, collaborate, build alliances. The network you build today becomes your greatest power tomorrow.",
    "Dé el paso al círculo de los decisores del mañana. Conecte, colabore, construya alianzas. La red que construya hoy será mañana su mayor poder.",
  ],
  [
    "Stratégie Politique & Campagnes Électorales",
    "Political Strategy & Election Campaigns",
    "Estrategia Política y Campañas Electorales",
  ],
  [
    "Structuration patrimoniale et successorale.",
    "Wealth and estate structuring.",
    "Estructuración patrimonial y sucesoria.",
  ],
  ["Suite du parcours", "Continuing the path", "Continuación del itinerario"],
  [
    "Sur demande (tarif préférentiel groupes et administrations)",
    "On request (preferential rate for groups and public bodies)",
    "Bajo demanda (tarifa preferente para grupos y administraciones)",
  ],
  [
    "Sur la base du diagnostic, nous construisons l'architecture d'influence : message, supports, plan de mobilisation.",
    "Based on the diagnosis, we build the influence architecture: message, materials, mobilisation plan.",
    "A partir del diagnóstico, construimos la arquitectura de influencia: mensaje, soportes, plan de movilización.",
  ],
  ["Surround yourself with the elite", "Surround yourself with the elite", "Rodeate de la élite"],
  [
    "Tableau de bord exécutif — pilotage temps réel des indicateurs clés.",
    "Executive dashboard — real-time steering of key indicators.",
    "Cuadro de mando ejecutivo — dirección en tiempo real de los indicadores clave.",
  ],
  [
    "Technopolitique et intelligence artificielle appliquée à la gouvernance",
    "Political technology and artificial intelligence applied to governance",
    "Tecnopolítica e inteligencia artificial aplicadas a la gobernanza",
  ],
  ["Thématiques actuelles", "Current themes", "Temas actuales"],
  ["Thématiques privilégiées", "Priority themes", "Temas privilegiados"],
  [
    "Toute mission débute par un diagnostic stratégique : cartographie d'acteurs, analyse réglementaire, identification des fenêtres d'opportunité.",
    "Every mission starts with a strategic diagnosis: actor mapping, regulatory analysis, identification of windows of opportunity.",
    "Toda misión comienza con un diagnóstico estratégico: cartografía de actores, análisis regulatorio, identificación de las ventanas de oportunidad.",
  ],
  [
    "Toutes nos missions sont inscrites au registre de transparence applicable et conduites sous notre charte éthique. Refus de tout mandat contraire à l'intérêt général ou aux libertés publiques.",
    "All our missions are registered in the applicable transparency register and carried out under our ethical charter. We refuse any mandate contrary to the general interest or to public freedoms.",
    "Todas nuestras misiones están inscritas en el registro de transparencia aplicable y se llevan a cabo bajo nuestra carta ética. Rechazamos todo mandato contrario al interés general o a las libertades públicas.",
  ],
  [
    "Toutes nos publications obéissent à une méthodologie publique : sources documentées, données vérifiables, revue interne avant publication, distinction nette entre constat et préconisation.",
    "All our publications follow a public methodology: documented sources, verifiable data, internal review before publication, a clear distinction between finding and recommendation.",
    "Todas nuestras publicaciones obedecen a una metodología pública: fuentes documentadas, datos verificables, revisión interna antes de la publicación, distinción neta entre constatación y recomendación.",
  ],
  [
    "Traçabilité des subventions et politique anti-corruption.",
    "Traceability of grants and anti-corruption policy.",
    "Trazabilidad de las subvenciones y política anticorrupción.",
  ],
  [
    "Transparence budgétaire (publication open data, lisibilité des comptes).",
    "Budget transparency (open data publication, readable accounts).",
    "Transparencia presupuestaria (publicación open data, legibilidad de las cuentas).",
  ],
  [
    "Tribunes — points de vue argumentés signés.",
    "Op-eds — signed, argued viewpoints.",
    "Tribunas — puntos de vista argumentados y firmados.",
  ],
  [
    "Tribunes, analyses et décryptages signés par les chercheurs de l'Institut, ses intervenants invités et son réseau d'alumni.",
    "Op-eds, analyses and commentary signed by the Institute's researchers, its guest speakers and its alumni network.",
    "Tribunas, análisis y desciframientos firmados por los investigadores del Instituto, sus ponentes invitados y su red de alumni.",
  ],
  [
    "Trois étapes : auto-évaluation, audit terrain par le comité, délivrance ou refus motivé. Le label est attribué pour trois ans, renouvelable après contrôle. Toute irrégularité détectée entraîne une suspension immédiate.",
    "Three steps: self-assessment, on-site audit by the committee, award or reasoned refusal. The label is granted for three years and renewable after inspection. Any detected irregularity leads to immediate suspension.",
    "Tres pasos: autoevaluación, auditoría in situ por el comité, concesión o denegación motivada. El sello se otorga por tres años y es renovable tras el control. Cualquier irregularidad detectada conlleva la suspensión inmediata.",
  ],
  ["Trois formats éditoriaux", "Three editorial formats", "Tres formatos editoriales"],
  ["Trois leviers majeurs", "Three major levers", "Tres palancas principales"],
  ["Trois piliers majeurs", "Three major pillars", "Tres pilares principales"],
  [
    "Un bootcamp d'immersion de 5 jours à Gigean pour les talents de la diaspora qui veulent reconnecter leur trajectoire à leur territoire d'origine.",
    "A five-day immersion bootcamp in Gigean for diaspora talent who want to reconnect their trajectory with their home territory.",
    "Un bootcamp de inmersión de 5 días en Gigean para el talento de la diáspora que quiere reconectar su trayectoria con su territorio de origen.",
  ],
  [
    "Un ouvrage de référence sur la communication politique contemporaine, signé par la Direction de l'Institut.",
    "A reference work on contemporary political communication, signed by the Institute's leadership.",
    "Una obra de referencia sobre la comunicación política contemporánea, firmada por la Dirección del Instituto.",
  ],
  [
    "Un pôle de recherche appliquée qui produit des analyses prospectives sur les enjeux électoraux, la diplomatie d'influence et la gouvernance publique.",
    "An applied research hub producing forward-looking analyses of electoral challenges, influence diplomacy and public governance.",
    "Un polo de investigación aplicada que produce análisis prospectivos sobre los desafíos electorales, la diplomacia de influencia y la gobernanza pública.",
  ],
  [
    "Un site Europe à Gigean (Montpellier Métropole) et des perspectives d'extension en Afrique. Une seule exigence : former une élite publique et privée capable de transformer ses territoires.",
    "A European site in Gigean (Montpellier Métropole) and plans for expansion in Africa. One single demand: to train a public and private elite capable of transforming its territories.",
    "Una sede europea en Gigean (Montpellier Métropole) y perspectivas de extensión en África. Una sola exigencia: formar a una élite pública y privada capaz de transformar sus territorios.",
  ],
  [
    "Un standard inédit de transparence financière et de probité administrative, conçu pour distinguer les collectivités exemplaires.",
    "An unprecedented standard of financial transparency and administrative probity, designed to single out exemplary local authorities.",
    "Un estándar inédito de transparencia financiera y probidad administrativa, concebido para distinguir a las colectividades ejemplares.",
  ],
  ["Une discipline, pas un slogan", "A discipline, not a slogan", "Una disciplina, no un eslogan"],
  [
    "Une infrastructure pédagogique au service de l'État",
    "A teaching infrastructure at the service of the State",
    "Una infraestructura pedagógica al servicio del Estado",
  ],
  [
    "Une instance d'échange à huis clos",
    "A closed-door exchange forum",
    "Un foro de intercambio a puerta cerrada",
  ],
  ["Une ligne éditoriale exigeante", "A demanding editorial line", "Una línea editorial exigente"],
  ["Une offre itinérante", "A travelling offer", "Una oferta itinerante"],
  [
    "Une plateforme de mise en relation entre profils de la diaspora et besoins identifiés sur les territoires partenaires.",
    "A matchmaking platform between diaspora profiles and needs identified in partner territories.",
    "Una plataforma de conexión entre perfiles de la diáspora y necesidades identificadas en los territorios socios.",
  ],
  [
    "Une plateforme e-learning sécurisée accessible 24/7, combinée à des regroupements présentiels à Gigean. 80 % en ligne, 20 % en présentiel.",
    "A secure e-learning platform accessible 24/7, combined with in-person gatherings in Gigean. 80% online, 20% in person.",
    "Una plataforma e-learning segura accesible 24/7, combinada con encuentros presenciales en Gigean. 80% en línea, 20% presencial.",
  ],
  [
    "Une plateforme pensée pour les cadres en activité",
    "A platform designed for working professionals",
    "Una plataforma pensada para los profesionales en activo",
  ],
  [
    "Une programmation à plusieurs niveaux",
    "A multi-tier programme",
    "Una programación de varios niveles",
  ],
  [
    "Une suite pensée pour les collectivités",
    "A suite designed for local authorities",
    "Una suite pensada para las colectividades",
  ],
  [
    "Unlock the secrets of top political strategists. Our consultants and coaches — true architects of power — share their real-world experience to turn you into a player who matters.",
    "Unlock the secrets of top political strategists. Our consultants and coaches — true architects of power — share their real-world experience to turn you into a player who matters.",
    "Descubra los secretos de los mejores estrategas políticos. Nuestros consultores y coaches — verdaderos arquitectos del poder — comparten su experiencia real para convertirle en un jugador que cuenta.",
  ],
  [
    "Veille et accès aux marchés",
    "Monitoring and market access",
    "Vigilancia y acceso a los mercados",
  ],
  [
    "Veille hebdomadaire personnalisée.",
    "Personalised weekly monitoring.",
    "Vigilancia semanal personalizada.",
  ],
  [
    "Veille parlementaire et réglementaire UE/France, accompagnement des entreprises sur les appels d'offres publics, structuration de réponses consortium, accompagnement de l'innovation réglementaire (sandbox).",
    "EU/France parliamentary and regulatory monitoring, support for companies on public tenders, structuring of consortium bids, support for regulatory innovation (sandbox).",
    "Vigilancia parlamentaria y regulatoria UE/Francia, acompañamiento de las empresas en las licitaciones públicas, estructuración de respuestas en consorcio, acompañamiento de la innovación regulatoria (sandbox).",
  ],
  [
    "VOIR LE PROGRAMME / S'INSCRIRE",
    "VIEW THE PROGRAMME / SIGN UP",
    "VER EL PROGRAMA / INSCRIBIRSE",
  ],
  ["WHY SCHOOL OF POLITICS?", "WHY SCHOOL OF POLITICS?", "¿POR QUÉ SCHOOL OF POLITICS?"],
  // --- END page-content phrases (generated) ---
];

const dictionary = new Map<string, { fr: string; en: string; es: string }>();
for (const row of phrases) {
  // 3-item rows: [fr, en, es] → the key is the French source. 4-item rows: [source, fr, en, es].
  const base = row.length === 4 ? 1 : 0;
  dictionary.set(row[0], { fr: row[base], en: row[base + 1], es: row[base + 2] });
}
const normalize = (text: string) => text.replace(/\s+/g, " ").trim();

export function translateLanding(root: HTMLElement, language: LandingLanguage) {
  const applyToTextNode = (node: Node) => {
    if (node.parentElement?.closest("[data-language-picker]")) return;
    const original = originals.get(node) ?? node.textContent ?? "";
    const phrase = dictionary.get(normalize(original));
    if (!phrase) return;
    originals.set(node, original);
    const leading = original.match(/^\s*/)?.[0] ?? "";
    const trailing = original.match(/\s*$/)?.[0] ?? "";
    const translated = `${leading}${phrase[language]}${trailing}`;
    if (node.textContent !== translated) node.textContent = translated;
  };
  const walkText = (from: Node) => {
    const walker = document.createTreeWalker(from, NodeFilter.SHOW_TEXT);
    let node: Node | null;
    while ((node = walker.nextNode())) applyToTextNode(node);
  };
  walkText(root);
  // The browser tab title sits outside <body> (it is static in index.html) and must follow the language too.
  const title = document.querySelector("title");
  if (title && !root.contains(title)) walkText(title);
  root.querySelectorAll<HTMLElement>("[placeholder], [aria-label], [title]").forEach((element) => {
    (["placeholder", "aria-label", "title"] as const).forEach((attribute) => {
      const current = element.getAttribute(attribute);
      if (!current || element.closest("[data-language-picker]")) return;
      let stored = attributeOriginals.get(element);
      if (!stored) {
        stored = new Map();
        attributeOriginals.set(element, stored);
      }
      const original = stored.get(attribute) ?? current;
      const phrase = dictionary.get(normalize(original));
      if (!phrase) return;
      stored.set(attribute, original);
      const translated = phrase[language];
      if (current !== translated) element.setAttribute(attribute, translated);
    });
  });
  document.documentElement.lang = language;
}
const originals = new WeakMap<Node, string>();
const attributeOriginals = new WeakMap<Element, Map<string, string>>();
