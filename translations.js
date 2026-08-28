/**
 * translations.js
 * All bilingual (FR/EN) content for the portfolio, keyed by language.
 * script.js reads this object to populate the DOM and never hardcodes text.
 */

const translations = {
  fr: {
    meta: {
      title: "Bakary TOURE | Data Analyst Junior",
      description:
        "Portfolio de Bakary TOURE, Data Analyst Junior disponible pour tout projet de data analyse, visualisation et reporting décisionnel.",
    },
    nav: {
      home: "Accueil",
      about: "À propos",
      skills: "Compétences",
      projects: "Projets",
      services: "Services",
      timeline: "Parcours",
      testimonials: "Témoignages",
      contact: "Contact",
    },
    hero: {
      greeting: "Bonjour, je suis",
      name: "Bakary TOURE",
      roles: [
        "Junior Data Analyst",
        "Data Visualization",
        "Business Intelligence",
        "Reporting Décisionnel",
      ],
      description:
        "Disponible pour tout projet de data analyse, visualisation et reporting décisionnel.",
      btnProjects: "Voir mes projets",
      btnContact: "Me contacter",
      scrollDown: "Défiler vers le bas",
    },
    about: {
      title: "À propos de moi",
      subtitle: "Transformer les données en décisions",
      p1: "Data Analyst junior passionné, je me spécialise dans la transformation de données brutes en informations claires et exploitables pour la prise de décision. Curieux et rigoureux, j'aime explorer les chiffres pour en extraire des tendances utiles aux équipes métier.",
      p2: "Formé aux outils statistiques et de visualisation (SQL, R, Python, STATA, SPSS, Excel, Power BI, Tableau, MS Project, QGIS), j'accompagne les entreprises dans leurs projets de reporting décisionnel : nettoyage de données, analyse statistique, création de tableaux de bord et automatisation des rapports.",
      stats: [
        { value: "10", label: "outils maîtrisés" },
        { value: "12", label: "projets réalisés" },
        { value: "100%", label: "engagement qualité" },
      ],
    },
    skills: {
      title: "Compétences techniques",
      subtitle: "Les outils que j'utilise au quotidien",
    },
    projects: {
      title: "Projets",
      subtitle: "Une sélection de projets d'analyse de données",
      filters: {
        all: "Tous",
      },
      viewProject: "Voir le projet",
      viewCode: "Voir le code",
      viewDemo: "Voir la démo",
      items: {
        p1: {
          title: "Dashboard Power BI : Performance des Ventes",
          description:
            "Tableau de bord interactif Power BI analysant les performances de ventes d'une entreprise agroalimentaire fictive au Sénégal. Nettoyage des données via Power Query, création de mesures DAX (total ventes, panier moyen), et visualisations multiples avec filtres dynamiques par région, catégorie et canal de vente.",
        },
        p2: {
          title: "Analyse de Données Bancaires en SQL",
          description:
            "Base de données relationnelle et requêtes SQL analytiques pour une banque fictive multi-pays d'Afrique de l'Ouest. Modèle de données avec 7 tables reliées (clients, comptes, transactions, prêts), et 11 requêtes démontrant jointures, CTE, fonctions de fenêtrage (RANK, SUM OVER, LAG) et vues SQL.",
        },
        p3: {
          title: "Étude de Satisfaction Client du Secteur Télécom",
          description:
            "Analyse d'une enquête de satisfaction client fictive avec SPSS pour un opérateur télécom. Test de fiabilité d'échelle (Alpha de Cronbach), ANOVA, corrélations, régression linéaire et logistique pour identifier les déterminants de la satisfaction et prédire le risque de départ (churn).",
        },
        p4: {
          title: "Analyse des Performances de Vente en Afrique de l'Ouest",
          description:
            "Dashboard Excel avancé analysant les performances commerciales d'une entreprise multi-pays (Sénégal, Côte d'Ivoire, Mali, Togo). Modèle de données en étoile avec tableaux croisés dynamiques, Power Pivot, et segments interactifs pour un filtrage dynamique par région, produit et vendeur.",
        },
        p5: {
          title: "Déterminants du Salaire, Analyse Économétrique",
          description:
            "Analyse économétrique des déterminants du salaire à partir d'une enquête emploi fictive au Sénégal. Estimation d'une équation de gains à la Mincer avec Stata : effet de l'éducation, de l'expérience, du secteur d'activité et du genre sur les niveaux de salaire, avec tests de diagnostic (hétéroscédasticité, multicolinéarité).",
        },
        p6: {
          title: "Dashboard Logistique Chaîne d'Approvisionnement",
          description:
            "Dashboard Tableau analysant la performance logistique d'un réseau de distribution en Afrique de l'Ouest : ponctualité des livraisons par transporteur, coûts de transport par destination, et taux de casse par catégorie de produit, sur 6000 livraisons.",
        },
        p7: {
          title: "Prédiction de Rendement Agricole",
          description:
            "Modélisation prédictive du rendement agricole au Sénégal à partir de données de pluviométrie, température et usage d'engrais. Nettoyage d'un dataset de plus de 6 000 exploitations, entraînement d'un modèle de régression (R² de 0.93), et dashboard interactif avec simulateur de prédiction de rendement en temps réel.",
        },
        p8: {
          title: "Plan de Déploiement de la Plateforme d'Analyse de Données",
          description:
            "Plan de projet complet pour le déploiement d'une plateforme d'analyse de données en entreprise avec MS Project. 46 tâches réparties en 8 phases (cadrage, infrastructure, ETL, dashboards, tests, formation, déploiement, clôture), avec diagramme de Gantt, dépendances entre tâches, jalons de validation et ressources par rôle.",
        },
        p9: {
          title: "Accessibilité aux Centres de Santé (SIG)",
          description:
            "Analyse spatiale de l'accessibilité aux établissements de santé au Sénégal avec QGIS. Cartographie de 135 établissements sur le vrai contour national, calcul de zones de couverture (buffers 10km), et identification des zones sous-desservies : 87% du territoire national à plus de 10km de tout établissement de santé.",
        },
        p10: {
          title: "Dashboard d'Analyse de Santé Publique",
          description:
            "Analyse de données de consultations médicales en Afrique subsaharienne : nettoyage d'un dataset brut de plus de 10 000 lignes, calcul d'indicateurs clés (régions, diagnostics, coûts de traitement, couverture d'assurance), et création d'un dashboard interactif permettant d'explorer les données par région et par pathologie.",
        },
        p11: {
          title: "Détection de Fraude Mobile Money",
          description:
            "Détection de transactions frauduleuses sur des paiements mobile money en Afrique de l'Ouest. Nettoyage d'un dataset de plus de 8 000 transactions, entraînement d'un modèle de classification par régression logistique (93% de précision), et dashboard interactif avec simulateur de score de risque en temps réel.",
        },
        p12: {
          title: "Prédiction de Production d'Énergie Solaire par Machine Learning",
          description:
            "Pipeline complet de Machine Learning en Python pour prédire la production horaire d'une ferme solaire de 500 kW au Sénégal. Comparaison de 3 modèles (Régression Linéaire, Random Forest, XGBoost) avec split temporel strict, atteignant un R² de 0.99. Dashboard interactif Streamlit avec simulateur de prédiction en temps réel.",
        },
      },
    },
    services: {
      title: "Services",
      subtitle: "Ce que je peux faire pour votre entreprise",
      items: [
        {
          icon: "fa-magnifying-glass-chart",
          title: "Analyse de données",
          description:
            "Exploration et analyse approfondie de vos données pour en extraire des insights exploitables.",
        },
        {
          icon: "fa-chart-pie",
          title: "Création de dashboards",
          description:
            "Conception de tableaux de bord clairs et interactifs avec Power BI ou Tableau.",
        },
        {
          icon: "fa-file-invoice",
          title: "Reporting automatisé",
          description:
            "Automatisation de vos rapports périodiques pour gagner du temps et fiabiliser les chiffres.",
        },
        {
          icon: "fa-broom",
          title: "Nettoyage de données",
          description:
            "Préparation, nettoyage et structuration de vos jeux de données pour des analyses fiables.",
        },
        {
          icon: "fa-chart-line",
          title: "Visualisation de données",
          description:
            "Mise en forme visuelle percutante de vos données pour faciliter la prise de décision.",
        },
        {
          icon: "fa-calculator",
          title: "Analyse statistique",
          description:
            "Tests statistiques et modélisation avec SPSS, STATA ou R pour des conclusions solides.",
        },
      ],
    },
    timeline: {
      title: "Parcours & Expérience",
      subtitle: "Les étapes clés de mon évolution professionnelle",
      items: [
        {
          date: "2021",
          title: "Formation académique en statistiques",
          description:
            "Début du cursus universitaire en statistiques et informatique appliquée, premiers pas avec Excel et SQL.",
        },
        {
          date: "2022",
          title: "Certification en analyse de données",
          description:
            "Obtention d'une certification en analyse de données et data visualization, spécialisation sur SPSS et R.",
        },
        {
          date: "2023",
          title: "Premières missions freelance",
          description:
            "Réalisation de premières missions freelance : nettoyage de données et reporting Excel pour des PME.",
        },
        {
          date: "2024",
          title: "Spécialisation Business Intelligence",
          description:
            "Montée en compétence sur Power BI et Tableau, livraison de dashboards pour des clients internationaux.",
        },
        {
          date: "2025",
          title: "Projets d'analyse économétrique",
          description:
            "Conduite d'analyses STATA sur des données économiques et déploiement de rapports automatisés.",
        },
        {
          date: "2026",
          title: "Data Analyst Junior disponible",
          description:
            "Disponible pour tout projet de data analyse, visualisation et reporting décisionnel.",
        },
      ],
    },
    testimonials: {
      title: "Témoignages",
      subtitle: "Ce que mes clients et collaborateurs disent",
      items: [
        {
          role: "Responsable Marketing",
          quote:
            "Bakary a conçu un dashboard Power BI qui nous fait gagner un temps précieux chaque semaine. Ses rapports sont clairs, fiables et toujours livrés dans les délais.",
        },
        {
          role: "Directrice des Opérations",
          quote:
            "Un travail d'analyse SQL rigoureux qui nous a permis d'identifier nos meilleurs leviers de vente. Bakary sait vulgariser des résultats complexes.",
        },
        {
          role: "Chef de Projet Data",
          quote:
            "Son analyse statistique sous SPSS était précise et bien documentée. Une vraie valeur ajoutée pour notre étude de satisfaction client.",
        },
        {
          role: "Fondatrice de startup",
          quote:
            "Bakary a automatisé notre reporting mensuel sur Excel : nous avons divisé par trois le temps de préparation de nos rapports.",
        },
        {
          role: "Économiste, cabinet de conseil",
          quote:
            "Une modélisation STATA solide et bien expliquée. Bakary comprend aussi bien les données que les enjeux business derrière.",
        },
        {
          role: "Responsable Logistique",
          quote:
            "Le dashboard Tableau livré par Bakary a transformé notre suivi de performance. Interface intuitive et données toujours à jour.",
        },
      ],
    },
    contact: {
      title: "Contact",
      subtitle: "Discutons de votre prochain projet data",
      formName: "Nom complet",
      formEmail: "Adresse email",
      formMessage: "Votre message",
      formSend: "Envoyer le message",
      formSending: "Envoi en cours...",
      formSuccess: "Message envoyé avec succès. Je vous répondrai rapidement !",
      formError:
        "Une erreur est survenue. Merci de réessayer ou de me contacter directement par email.",
      infoTitle: "Mes coordonnées",
      availability: "Disponible pour missions freelance et projets ponctuels.",
      emailLabel: "Email",
      phoneLabel: "Téléphone / WhatsApp",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub",
    },
    footer: {
      tagline: "Transformer vos données en décisions stratégiques.",
      rights: "Tous droits réservés.",
    },
    misc: {
      loading: "Chargement...",
      backToTop: "Retour en haut",
      toggleDarkMode: "Basculer le mode sombre",
      toggleLang: "Changer de langue",
      openMenu: "Ouvrir le menu",
      closeMenu: "Fermer le menu",
      whatsappLabel: "Discuter sur WhatsApp",
      prevSlide: "Témoignage précédent",
      nextSlide: "Témoignage suivant",
    },
  },

  en: {
    meta: {
      title: "Bakary TOURE | Junior Data Analyst",
      description:
        "Portfolio of Bakary TOURE, Junior Data Analyst available for data analysis, visualization and business reporting projects.",
    },
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      services: "Services",
      timeline: "Journey",
      testimonials: "Testimonials",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      name: "Bakary TOURE",
      roles: [
        "Junior Data Analyst",
        "Data Visualization",
        "Business Intelligence",
        "Decision-making Reporting",
      ],
      description:
        "Available for any data analysis, visualization and business reporting project.",
      btnProjects: "View my projects",
      btnContact: "Contact me",
      scrollDown: "Scroll down",
    },
    about: {
      title: "About me",
      subtitle: "Turning data into decisions",
      p1: "Passionate junior Data Analyst, I specialize in turning raw data into clear, actionable insights for decision-making. Curious and rigorous, I enjoy digging into numbers to surface trends that matter to business teams.",
      p2: "Trained in statistical and visualization tools (SQL, R, Python, STATA, SPSS, Excel, Power BI, Tableau, MS Project, QGIS), I support companies with their business reporting projects: data cleaning, statistical analysis, dashboard creation and report automation.",
      stats: [
        { value: "10", label: "tools mastered" },
        { value: "12", label: "projects delivered" },
        { value: "100%", label: "quality commitment" },
      ],
    },
    skills: {
      title: "Technical skills",
      subtitle: "The tools I use every day",
    },
    projects: {
      title: "Projects",
      subtitle: "A selection of data analysis projects",
      filters: {
        all: "All",
      },
      viewProject: "View project",
      viewCode: "View code",
      viewDemo: "View demo",
      items: {
        p1: {
          title: "Power BI Dashboard: Sales Performance",
          description:
            "Interactive Power BI dashboard analyzing sales performance for a fictional agri-food company in Senegal. Data cleaning via Power Query, DAX measures (total sales, average basket), and multiple visualizations with dynamic filters by region, category and sales channel.",
        },
        p2: {
          title: "Banking Data Analysis in SQL",
          description:
            "Relational database and analytical SQL queries for a fictional multi-country West African bank. Data model with 7 related tables (customers, accounts, transactions, loans), and 11 queries demonstrating joins, CTEs, window functions (RANK, SUM OVER, LAG) and SQL views.",
        },
        p3: {
          title: "Customer Satisfaction Study of the Telecom Sector",
          description:
            "Analysis of a fictional customer satisfaction survey with SPSS for a telecom operator. Scale reliability testing (Cronbach's Alpha), ANOVA, correlations, linear and logistic regression to identify satisfaction determinants and predict churn risk.",
        },
        p4: {
          title: "West Africa Sales Performance Analysis",
          description:
            "Advanced Excel dashboard analyzing sales performance for a multi-country company (Senegal, Ivory Coast, Mali, Togo). Star-schema data model with pivot tables, Power Pivot, and interactive slicers for dynamic filtering by region, product and sales rep.",
        },
        p5: {
          title: "Wage Determinants, Econometric Analysis",
          description:
            "Econometric analysis of wage determinants using a fictional employment survey in Senegal. Mincer wage equation estimation with Stata: effects of education, experience, sector and gender on wage levels, with diagnostic tests (heteroskedasticity, multicollinearity).",
        },
        p6: {
          title: "Logistics Dashboard Supply Chain",
          description:
            "Tableau dashboard analyzing logistics performance for a West African distribution network: on-time delivery rate by carrier, freight costs by destination, and damage rate by product category, across 6,000 shipments.",
        },
        p7: {
          title: "Agricultural Yield Prediction",
          description:
            "Predictive modeling of agricultural yield in Senegal using rainfall, temperature and fertilizer data. Cleaning a dataset of over 6,000 farms, training a regression model (R² of 0.93), and an interactive dashboard with a real-time yield prediction simulator.",
        },
        p8: {
          title: "Data Analysis Platform Deployment Plan",
          description:
            "Complete project plan for deploying an enterprise data analytics platform with MS Project. 46 tasks across 8 phases (scoping, infrastructure, ETL, dashboards, testing, training, deployment, closure), with Gantt chart, task dependencies, validation milestones, and role-based resources.",
        },
        p9: {
          title: "Health Facility Accessibility (GIS Analysis)",
          description:
            "Spatial analysis of health facility accessibility in Senegal using QGIS. Mapping of 135 facilities on the real national boundary, 10km coverage buffer analysis, and identification of underserved areas: 87% of the national territory is more than 10km from any health facility.",
        },
        p10: {
          title: "Public Health Analytics Dashboard",
          description:
            "Analysis of medical consultation data across Sub-Saharan Africa: cleaning a raw dataset of over 10,000 records, computing key indicators (regions, diagnoses, treatment costs, insurance coverage), and building an interactive dashboard to explore the data by region and condition.",
        },
        p11: {
          title: "Mobile Money Fraud Detection",
          description:
            "Fraud detection on mobile money payments across West Africa. Cleaning a dataset of over 8,000 transactions, training a logistic regression classification model (93% accuracy), and an interactive dashboard with a real-time fraud risk score simulator.",
        },
        p12: {
          title: "Solar Energy Production Prediction with Machine Learning",
          description:
            "Complete Machine Learning pipeline in Python predicting hourly production of a 500 kW solar farm in Senegal. Comparison of 3 models (Linear Regression, Random Forest, XGBoost) with strict temporal split, achieving R² of 0.99. Interactive Streamlit dashboard with real-time prediction simulator.",
        },
      },
    },
    services: {
      title: "Services",
      subtitle: "What I can do for your business",
      items: [
        {
          icon: "fa-magnifying-glass-chart",
          title: "Data analysis",
          description:
            "In-depth exploration and analysis of your data to extract actionable insights.",
        },
        {
          icon: "fa-chart-pie",
          title: "Dashboard creation",
          description:
            "Design of clear, interactive dashboards with Power BI or Tableau.",
        },
        {
          icon: "fa-file-invoice",
          title: "Automated reporting",
          description:
            "Automation of your recurring reports to save time and improve data reliability.",
        },
        {
          icon: "fa-broom",
          title: "Data cleaning",
          description:
            "Preparation, cleaning and structuring of your datasets for reliable analysis.",
        },
        {
          icon: "fa-chart-line",
          title: "Data visualization",
          description:
            "Compelling visual presentation of your data to support decision-making.",
        },
        {
          icon: "fa-calculator",
          title: "Statistical analysis",
          description:
            "Statistical testing and modeling with SPSS, STATA or R for solid conclusions.",
        },
      ],
    },
    timeline: {
      title: "Journey & Experience",
      subtitle: "The key milestones of my professional path",
      items: [
        {
          date: "2021",
          title: "Academic training in statistics",
          description:
            "Started university studies in statistics and applied computing, first steps with Excel and SQL.",
        },
        {
          date: "2022",
          title: "Data analysis certification",
          description:
            "Earned a certification in data analysis and data visualization, specializing in SPSS and R.",
        },
        {
          date: "2023",
          title: "First freelance missions",
          description:
            "Completed first freelance missions: data cleaning and Excel reporting for small businesses.",
        },
        {
          date: "2024",
          title: "Business Intelligence specialization",
          description:
            "Built up expertise in Power BI and Tableau, delivering dashboards for international clients.",
        },
        {
          date: "2025",
          title: "Econometric analysis projects",
          description:
            "Conducted STATA analyses on economic data and deployed automated reports.",
        },
        {
          date: "2026",
          title: "Junior Data Analyst available",
          description:
            "Available for any data analysis, visualization and business reporting project.",
        },
      ],
    },
    testimonials: {
      title: "Testimonials",
      subtitle: "What my clients and collaborators say",
      items: [
        {
          role: "Marketing Manager",
          quote:
            "Bakary built a Power BI dashboard that saves us valuable time every week. His reports are clear, reliable and always delivered on time.",
        },
        {
          role: "Director of Operations",
          quote:
            "A rigorous SQL analysis that helped us identify our best sales drivers. Bakary knows how to make complex results easy to understand.",
        },
        {
          role: "Data Project Manager",
          quote:
            "His SPSS statistical analysis was precise and well documented. A real asset for our customer satisfaction study.",
        },
        {
          role: "Startup Founder",
          quote:
            "Bakary automated our monthly Excel reporting: we cut our report preparation time by three.",
        },
        {
          role: "Economist, consulting firm",
          quote:
            "A solid, well-explained STATA model. Bakary understands both the data and the business stakes behind it.",
        },
        {
          role: "Logistics Manager",
          quote:
            "The Tableau dashboard Bakary delivered transformed our performance tracking. Intuitive interface, always up-to-date data.",
        },
      ],
    },
    contact: {
      title: "Contact",
      subtitle: "Let's talk about your next data project",
      formName: "Full name",
      formEmail: "Email address",
      formMessage: "Your message",
      formSend: "Send message",
      formSending: "Sending...",
      formSuccess: "Message sent successfully. I'll get back to you shortly!",
      formError:
        "Something went wrong. Please try again or contact me directly by email.",
      infoTitle: "Get in touch",
      availability: "Available for freelance missions and one-off projects.",
      emailLabel: "Email",
      phoneLabel: "Phone / WhatsApp",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub",
    },
    footer: {
      tagline: "Turning your data into strategic decisions.",
      rights: "All rights reserved.",
    },
    misc: {
      loading: "Loading...",
      backToTop: "Back to top",
      toggleDarkMode: "Toggle dark mode",
      toggleLang: "Switch language",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      whatsappLabel: "Chat on WhatsApp",
      prevSlide: "Previous testimonial",
      nextSlide: "Next testimonial",
    },
  },
};

/**
 * Language-independent data (tech names, tags, media paths, fictional
 * identities) kept separate from translations.js text so it is not
 * duplicated between fr and en.
 */
const sharedData = {
  skills: [
    { key: "sql", name: "SQL", icon: "fa-database", level: 88 },
    { key: "r", name: "R", icon: "fa-r-project", level: 82 },
    { key: "python", name: "Python", icon: "fa-laptop-code", level: 85 },
    { key: "stata", name: "STATA", icon: "fa-chart-bar", level: 80 },
    { key: "spss", name: "SPSS", icon: "fa-chart-simple", level: 75 },
    { key: "excel", name: "Excel", icon: "fa-file-excel", level: 95 },
    { key: "powerbi", name: "Power BI", icon: "fa-chart-column", level: 90 },
    { key: "tableau", name: "Tableau", icon: "fa-table-cells", level: 85 },
    { key: "msproject", name: "MS Project", icon: "fa-diagram-project", level: 78 },
    { key: "qgis", name: "QGIS", icon: "fa-earth-africa", level: 75 },
  ],
  filterTags: ["SQL", "R", "STATA", "SPSS", "Excel", "Power BI", "Tableau", "MS Project", "QGIS"],
  projects: [
    {
      id: "p1",
      tags: ["Power BI", "DAX", "Power Query", "Business Intelligence"],
      image: "assets/projects/dashboard-ventes.svg",
      codeUrl: "https://github.com/tourebakary29/sales-powerbi-dashboard",
    },
    {
      id: "p2",
      tags: ["SQL", "PostgreSQL"],
      image: "assets/projects/sql-performance.svg",
      codeUrl: "https://github.com/tourebakary29/sql-banking-analysis",
    },
    {
      id: "p3",
      tags: ["SPSS", "ANOVA"],
      image: "assets/projects/spss-stats.svg",
      codeUrl: "https://github.com/tourebakary29/spss-satisfaction-study",
    },
    {
      id: "p4",
      tags: ["Excel", "Power Pivot"],
      image: "assets/projects/excel-auto.svg",
      codeUrl: "https://github.com/tourebakary29/sales-excel-analysis",
    },
    {
      id: "p5",
      tags: ["STATA"],
      image: "assets/projects/stata-eco.svg",
      codeUrl: "https://github.com/tourebakary29/stata-wage-analysis",
    },
    {
      id: "p6",
      tags: ["Tableau"],
      image: "assets/projects/tableau-viz.svg",
      codeUrl: "https://github.com/tourebakary29/tableau-logistics-dashboard",
      demoUrl:
        "https://public.tableau.com/app/profile/bakary.toure/viz/DashboardLogistique-ChainedApprovisionnement/Dashboard",
    },
    {
      id: "p7",
      tags: ["R", "tidyverse", "Machine Learning", "Shiny"],
      image: "assets/projects/r-model.svg",
      codeUrl: "https://github.com/tourebakary29/agri-yield-dashboard",
      demoUrl: "https://bakary-health-analytics.shinyapps.io/agri-project/",
    },
    {
      id: "p8",
      tags: ["MS Project"],
      image: "assets/projects/msproject-planning.svg",
      codeUrl: "https://github.com/tourebakary29/msproject-data-platform",
    },
    {
      id: "p9",
      tags: ["QGIS", "PyQGIS"],
      image: "assets/projects/qgis-cartographie.svg",
      codeUrl: "https://github.com/tourebakary29/qgis-health-accessibility",
    },
    {
      id: "p10",
      tags: ["R", "tidyverse", "Shiny"],
      image: "assets/projects/health-analytics.svg",
      codeUrl: "https://github.com/tourebakary29/health-analytics-dashboard",
      demoUrl: "https://bakary-health-analytics.shinyapps.io/health-clean/",
    },
    {
      id: "p11",
      tags: ["R", "tidyverse", "Classification", "Shiny"],
      image: "assets/projects/fraud-detection.svg",
      codeUrl: "https://github.com/tourebakary29/fraud-detection-dashboard",
      demoUrl: "https://bakary-health-analytics.shinyapps.io/fraud-project/",
    },
    {
      id: "p12",
      tags: ["Python", "Machine Learning", "Scikit-learn", "Streamlit"],
      image: "assets/projects/solar-energy.svg",
      codeUrl: "https://github.com/tourebakary29/solar-energy-prediction",
      demoUrl: "https://solar-energy-prediction-cripbyshdij7y94x9mitwm.streamlit.app",
    },
  ],
  testimonials: [
    {
      name: "Moussa Diop",
      company: "Sénégal Digital Solutions",
      country: "Sénégal",
      flag: "🇸🇳",
      photo: "assets/testimonials/1.svg",
    },
    {
      name: "Aïcha Kouassi",
      company: "Abidjan Business Group",
      country: "Côte d'Ivoire",
      flag: "🇨🇮",
      photo: "assets/testimonials/2.svg",
    },
    {
      name: "Grâce Mukendi",
      company: "Kinshasa Analytics",
      country: "RDC",
      flag: "🇨🇩",
      photo: "assets/testimonials/3.svg",
    },
    {
      name: "Emmanuel Ngono",
      company: "Douala Conseil & Stratégie",
      country: "Cameroun",
      flag: "🇨🇲",
      photo: "assets/testimonials/4.svg",
    },
    {
      name: "Camille Lefèvre",
      company: "Cabinet Lefèvre Économie",
      country: "France",
      flag: "🇫🇷",
      photo: "assets/testimonials/5.svg",
    },
    {
      name: "Julien Tremblay",
      company: "Montréal Logistique Inc.",
      country: "Canada",
      flag: "🇨🇦",
      photo: "assets/testimonials/6.svg",
    },
  ],
};
