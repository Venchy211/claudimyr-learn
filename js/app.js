/* ================================
   CLAUDIMYRLEARN — JavaScript Complet
   ================================ */

"use strict";

/* ══════════════════════════════
   CONTENU DES LEÇONS
══════════════════════════════ */
const CONTENU_LECONS = {

  // MODULE 1
  "l1-1": `
    <h3>Qu'est-ce que l'administration ?</h3>
    <p>L'administration est l'ensemble des activités de
    <strong>planification, organisation, direction et contrôle</strong>
    des ressources d'une organisation pour atteindre ses objectifs.</p>

    <div class="info-box">
      <strong>💡 Définition de Fayol :</strong><br>
      Administrer c'est <em>prévoir, organiser, commander,
      coordonner et contrôler</em>.
    </div>

    <h3>Les 5 fonctions administratives</h3>
    <ul>
      <li><strong>Planifier :</strong> Fixer les objectifs et les moyens.</li>
      <li><strong>Organiser :</strong> Répartir les tâches et ressources.</li>
      <li><strong>Commander :</strong> Diriger et motiver le personnel.</li>
      <li><strong>Coordonner :</strong> Harmoniser les activités.</li>
      <li><strong>Contrôler :</strong> Vérifier les résultats obtenus.</li>
    </ul>

    <h3>Rôle de l'assistante administrative</h3>
    <p>En tant qu'assistante administrative, vous êtes
    <strong>l'interface centrale</strong> de l'organisation :</p>
    <ul>
      <li>Gestion du courrier et de la communication</li>
      <li>Organisation des réunions et de l'agenda</li>
      <li>Rédaction et traitement des documents</li>
      <li>Accueil des visiteurs et gestion des appels</li>
      <li>Archivage et classement des dossiers</li>
    </ul>`,

  "l1-2": `
    <h3>Qu'est-ce qu'une organisation ?</h3>
    <p>Une organisation est un groupe de personnes travaillant ensemble
    de façon coordonnée pour atteindre des objectifs communs.</p>

    <h3>Les types de structures</h3>

    <div class="info-box">
      <strong>1. Structure hiérarchique</strong><br>
      Chaque employé n'a qu'un seul supérieur direct.
      Simple mais rigide.
    </div>

    <div class="info-box info-coral">
      <strong>2. Structure fonctionnelle</strong><br>
      Basée sur la spécialisation : RH, Comptabilité, Ventes…
      Efficace mais risque de cloisonnement.
    </div>

    <div class="info-box info-mint">
      <strong>3. Structure matricielle</strong><br>
      Combine hiérarchie et fonctions. Flexible mais
      peut créer des conflits.
    </div>

    <h3>L'organigramme</h3>
    <p>Représentation graphique de la structure d'une organisation
    montrant les relations entre les postes. Il doit être
    <strong>clair, à jour et accessible</strong> à tous les employés.</p>`,

  "l1-3": `
    <h3>Le cadre juridique de l'administration</h3>
    <p>L'administration opère dans un cadre légal précis.
    Connaître ces bases vous protège et vous rend plus efficace.</p>

    <h3>Sources du droit administratif</h3>
    <ul>
      <li><strong>La Constitution :</strong> Loi fondamentale de l'État.</li>
      <li><strong>Les lois :</strong> Textes votés par le Parlement.</li>
      <li><strong>Les règlements :</strong> Décrets et arrêtés.</li>
      <li><strong>La jurisprudence :</strong> Décisions des tribunaux.</li>
    </ul>

    <div class="info-box info-gold">
      <strong>⚠️ Secret professionnel :</strong><br>
      En tant qu'assistante, vous avez accès à des informations
      confidentielles. Vous êtes légalement tenue de ne jamais
      les divulguer en dehors de vos fonctions.
    </div>`,

  // MODULE 2
  "l2-1": `
    <h3>Structure d'une lettre administrative</h3>
    <p>La lettre administrative obéit à des règles précises
    que tout professionnel doit maîtriser.</p>

    <ol>
      <li><strong>En-tête :</strong> Nom, adresse, téléphone, email.</li>
      <li><strong>Date et lieu :</strong> Port-au-Prince, le 11 mars 2026</li>
      <li><strong>Destinataire :</strong> Nom, fonction, adresse.</li>
      <li><strong>Références :</strong> N/Réf pour le classement.</li>
      <li><strong>Objet :</strong> Résumé court du sujet.</li>
      <li><strong>Formule d'appel :</strong> Monsieur, Madame…</li>
      <li><strong>Corps :</strong> Introduction, développement, conclusion.</li>
      <li><strong>Formule de politesse :</strong> Phrase de clôture.</li>
      <li><strong>Signature :</strong> Nom, prénom, fonction.</li>
    </ol>

    <div class="info-box">
      <strong>📌 Formules de politesse :</strong><br><br>
      • À un supérieur : <em>«Veuillez agréer, Monsieur le Directeur,
      l'expression de ma respectueuse considération.»</em><br><br>
      • À un égal : <em>«Veuillez agréer, Monsieur,
      l'expression de mes salutations distinguées.»</em>
    </div>

    <h3>Règles de rédaction</h3>
    <ul>
      <li>Style sobre, clair et précis</li>
      <li>Phrases courtes — maximum 20 mots</li>
      <li>Un paragraphe = une seule idée</li>
      <li>Toujours vérifier l'orthographe avant envoi</li>
    </ul>`,

  "l2-2": `
    <h3>La note de service</h3>
    <p>Document interne pour transmettre des informations
    ou instructions au personnel.</p>

    <div class="info-box">
      <strong>Structure d'une note de service :</strong><br>
      • En-tête : Logo, nom de l'organisation<br>
      • NOTE DE SERVICE N°… / Année<br>
      • De : (Expéditeur) | À : (Destinataires)<br>
      • Date | Objet<br>
      • Corps du texte bref et direct<br>
      • Signature
    </div>

    <h3>Le rapport administratif</h3>
    <p>Document détaillé qui présente une situation,
    analyse un problème et propose des solutions.</p>

    <ol>
      <li><strong>Page de garde :</strong> Titre, auteur, date.</li>
      <li><strong>Introduction :</strong> Contexte et objectif.</li>
      <li><strong>Développement :</strong> Faits et analyse.</li>
      <li><strong>Conclusion :</strong> Synthèse et recommandations.</li>
      <li><strong>Annexes :</strong> Documents complémentaires.</li>
    </ol>

    <div class="info-box info-mint">
      <strong>💡 Différences clés :</strong><br>
      • <strong>Note :</strong> brève, interne, directive.<br>
      • <strong>Rapport :</strong> détaillé, analytique, avec recommandations.<br>
      • <strong>Compte-rendu :</strong> narration factuelle d'une réunion.
    </div>`,

  // MODULE 3
  "l3-1": `
    <h3>Pourquoi bien classer ?</h3>
    <p>Un bon classement permet de retrouver n'importe quel document
    en moins de <strong>3 minutes</strong>. C'est une compétence
    centrale de l'assistante administrative.</p>

    <h3>Les 5 méthodes de classement</h3>

    <div class="lecon-grid">
      <div class="lecon-item">
        <strong>🔤 Alphabétique</strong><br>
        <span>Par ordre de lettres. Idéal pour les noms de clients.</span>
      </div>
      <div class="lecon-item">
        <strong>🔢 Numérique</strong><br>
        <span>Par numéro attribué. Idéal pour les factures.</span>
      </div>
      <div class="lecon-item">
        <strong>📅 Chronologique</strong><br>
        <span>Par date. Idéal pour les courriers et archives.</span>
      </div>
      <div class="lecon-item">
        <strong>📁 Thématique</strong><br>
        <span>Par sujet : RH, Comptabilité, Juridique…</span>
      </div>
      <div class="lecon-item">
        <strong>🔡 Alphanumérique</strong><br>
        <span>Lettres + numéros. Ex : A001, B002…</span>
      </div>
    </div>`,

  "l3-2": `
    <h3>L'archivage numérique</h3>
    <p>L'archivage numérique consiste à conserver les documents
    sous forme électronique de façon organisée et sécurisée.</p>

    <h3>Avantages du numérique</h3>
    <ul>
      <li>Gain de place — plus besoin de grandes armoires</li>
      <li>Recherche instantanée par mots-clés</li>
      <li>Accès depuis n'importe quel appareil</li>
      <li>Sauvegarde automatique</li>
      <li>Partage facile avec les collègues</li>
    </ul>

    <div class="info-box info-gold">
      <strong>🏆 Bonnes pratiques :</strong><br>
      • Nommer les fichiers clairement :
        <em>2026-03-11_Facture_001.pdf</em><br>
      • Créer une structure de dossiers logique<br>
      • Faire des sauvegardes régulières<br>
      • Ne jamais supprimer sans autorisation
    </div>`,

  // MODULE 4
  "l4-1": `
    <h3>Pourquoi gérer ses priorités ?</h3>
    <p>Sans gestion des priorités, on s'épuise sur des tâches
    secondaires en oubliant l'essentiel.</p>

    <h3>La matrice d'Eisenhower</h3>
    <p>Classez chaque tâche selon 2 critères :
    <strong>urgence</strong> et <strong>importance</strong>.</p>

    <div class="eisenhower">
      <div class="eis-q1">
        <strong>🔴 Q1 — Faire maintenant</strong><br>
        <span>Urgent + Important<br>Crises, urgences réelles</span>
      </div>
      <div class="eis-q2">
        <strong>🟣 Q2 — Planifier</strong><br>
        <span>Important + Non urgent<br>Projets, formation</span>
      </div>
      <div class="eis-q3">
        <strong>🟡 Q3 — Déléguer</strong><br>
        <span>Urgent + Non important<br>Certains appels, emails</span>
      </div>
      <div class="eis-q4">
        <strong>🟢 Q4 — Éliminer</strong><br>
        <span>Non urgent + Non important<br>Distractions</span>
      </div>
    </div>`,

  "l4-2": `
    <h3>Gérer l'agenda professionnel</h3>
    <p>L'agenda est votre outil central. Bien le maîtriser
    vous rend indispensable.</p>

    <h3>Règles d'or</h3>
    <ul>
      <li><strong>Confirmer</strong> tout rendez-vous 24h à l'avance.</li>
      <li><strong>Anticiper</strong> en préparant les dossiers avant les réunions.</li>
      <li><strong>Protéger</strong> les plages de travail concentré.</li>
      <li><strong>Gérer</strong> les conflits d'horaires avec diplomatie.</li>
    </ul>

    <div class="info-box">
      <strong>📋 Outils de planification :</strong><br>
      • <strong>Agenda :</strong> Rendez-vous et réunions<br>
      • <strong>To-do list :</strong> Tâches du jour<br>
      • <strong>Planning :</strong> Vue hebdomadaire des projets<br>
      • <strong>Rappels :</strong> Alertes pour les échéances
    </div>`,

  // MODULE 5
  "l5-1": `
    <h3>L'accueil — première image de l'organisation</h3>
    <p>Vous êtes souvent le <strong>premier contact</strong>
    d'un visiteur. Votre attitude crée l'image de toute l'organisation.</p>

    <div class="info-box">
      <strong>🎯 La règle des 4×20 :</strong><br>
      • 20 premières <strong>secondes</strong> : la 1ère impression<br>
      • 20 premiers <strong>gestes</strong> : posture ouverte<br>
      • 20 premiers <strong>mots</strong> : formule d'accueil<br>
      • 20 <strong>cm</strong> de distance : espace respectueux
    </div>

    <h3>Les 6 étapes de l'accueil parfait</h3>
    <ol>
      <li>Sourire et contact visuel dès l'arrivée</li>
      <li>Saluer en premier : <em>«Bonjour, puis-je vous aider ?»</em></li>
      <li>S'identifier et identifier le visiteur</li>
      <li>Orienter rapidement vers la bonne personne</li>
      <li>Proposer de s'asseoir en cas d'attente</li>
      <li>Tenir informé du délai d'attente</li>
    </ol>`,

  "l5-2": `
    <h3>La communication téléphonique professionnelle</h3>

    <div class="info-box">
      <strong>📞 Formule de décroché standard :</strong><br>
      <em>«[Nom de l'organisation], [votre prénom], bonjour.»</em>
    </div>

    <h3>Règles d'or</h3>
    <ul>
      <li>Décrocher avant la <strong>3e sonnerie</strong></li>
      <li>Écoute active — ne jamais interrompre</li>
      <li>Reformuler pour valider la compréhension</li>
      <li>Prendre un message complet : nom, numéro, objet, heure</li>
      <li>Conclure poliment : <em>«Merci de votre appel, bonne journée.»</em></li>
    </ul>

    <h3>Face à un interlocuteur difficile</h3>
    <ul>
      <li>Rester calme et professionnel en toutes circonstances</li>
      <li>Laisser exprimer le mécontentement sans interrompre</li>
      <li>Reconnaître : <em>«Je comprends votre préoccupation»</em></li>
      <li>Proposer des solutions concrètes</li>
      <li>Escalader vers un supérieur si nécessaire</li>
    </ul>`,

  // MODULE 6
  "l6-1": `
    <h3>Les documents comptables courants</h3>

    <div class="lecon-grid">
      <div class="lecon-item">
        <strong>🧾 Facture</strong><br>
        <span>Demande de paiement avec mentions obligatoires :
        numéro, date, parties, prix HT, TVA, TTC.</span>
      </div>
      <div class="lecon-item">
        <strong>📋 Bon de commande</strong><br>
        <span>Document officialisant une commande fournisseur.</span>
      </div>
      <div class="lecon-item">
        <strong>📦 Bon de livraison</strong><br>
        <span>Confirmation de réception d'une marchandise.</span>
      </div>
      <div class="lecon-item">
        <strong>✅ Reçu / Quittance</strong><br>
        <span>Preuve qu'un paiement a bien été effectué.</span>
      </div>
    </div>

    <div class="info-box">
      <strong>📐 Calcul TVA :</strong><br>
      Prix HT × Taux TVA = Montant TVA<br>
      Prix HT + TVA = Prix TTC<br><br>
      <em>Exemple : 10 000 HTG × 10% = 1 000 HTG → Total : 11 000 HTG</em>
    </div>`,

  "l6-2": `
    <h3>La facturation</h3>
    <p>Maîtriser la facturation est essentiel pour
    toute assistante administrative.</p>

    <h3>Éléments obligatoires d'une facture</h3>
    <ul>
      <li>Numéro de facture unique</li>
      <li>Date d'émission</li>
      <li>Coordonnées complètes du vendeur et de l'acheteur</li>
      <li>Description détaillée des produits ou services</li>
      <li>Prix unitaire, quantité, total HT</li>
      <li>Taux et montant de la TVA</li>
      <li>Prix TTC et conditions de paiement</li>
    </ul>

    <div class="info-box info-mint">
      <strong>📊 Écart budgétaire :</strong><br>
      • Écart <strong>favorable</strong> :
        dépenses inférieures au budget prévu ✅<br>
      • Écart <strong>défavorable</strong> :
        dépenses supérieures au budget prévu ❌
    </div>

    <p>La <strong>petite caisse</strong> sert à régler les petites
    dépenses courantes en espèces : fournitures, transport, café…</p>`
};

/* ══════════════════════════════
   DONNÉES DES MODULES
══════════════════════════════ */
const MODULES = [
  {
    id: "m1",
    titre: "Introduction à l'Administration",
    icon: "🏛️",
    couleur: "rgba(91,79,207,0.12)",
    description: "Concepts fondamentaux et rôle de l'administration.",
    lecons: [
      { id: "l1-1", titre: "Définition et concepts clés",  duree: "15 min" },
      { id: "l1-2", titre: "Organisation et structure",     duree: "20 min" },
      { id: "l1-3", titre: "Le cadre juridique",            duree: "18 min" }
    ]
  },
  {
    id: "m2",
    titre: "Communication Administrative",
    icon: "📝",
    couleur: "rgba(255,94,91,0.12)",
    description: "Rédaction professionnelle et correspondance.",
    lecons: [
      { id: "l2-1", titre: "La lettre administrative",      duree: "25 min" },
      { id: "l2-2", titre: "Note de service et rapport",    duree: "20 min" }
    ]
  },
  {
    id: "m3",
    titre: "Gestion des Documents",
    icon: "📂",
    couleur: "rgba(6,214,160,0.12)",
    description: "Classement, archivage et cycle de vie des documents.",
    lecons: [
      { id: "l3-1", titre: "Principes du classement",       duree: "20 min" },
      { id: "l3-2", titre: "Archivage numérique",           duree: "22 min" }
    ]
  },
  {
    id: "m4",
    titre: "Gestion du Temps",
    icon: "⏰",
    couleur: "rgba(255,209,102,0.2)",
    description: "Planification et gestion des priorités.",
    lecons: [
      { id: "l4-1", titre: "Gestion des priorités",         duree: "18 min" },
      { id: "l4-2", titre: "Organiser l'agenda",            duree: "16 min" }
    ]
  },
  {
    id: "m5",
    titre: "Accueil et Relations",
    icon: "🤝",
    couleur: "rgba(255,154,60,0.12)",
    description: "Accueil physique, téléphonique et protocole.",
    lecons: [
      { id: "l5-1", titre: "Techniques d'accueil",          duree: "22 min" },
      { id: "l5-2", titre: "Communication téléphonique",    duree: "18 min" }
    ]
  },
  {
    id: "m6",
    titre: "Comptabilité Administrative",
    icon: "💰",
    couleur: "rgba(155,89,182,0.12)",
    description: "Notions de base en comptabilité et facturation.",
    lecons: [
      { id: "l6-1", titre: "Notions comptables de base",    duree: "25 min" },
      { id: "l6-2", titre: "Facturation et budget",         duree: "20 min" }
    ]
  }
];

/* ══════════════════════════════
   ÉTAT DE L'APPLICATION
══════════════════════════════ */
let etat = {
  user:     null,
  apiKey:   '',
  page:     'dashboard',
  progress: {}
};

/* ══════════════════════════════
   UTILITAIRES
══════════════════════════════ */

// Notification toast
function toast(message, type = '') {
  let container = document.getElementById('toast-container');
  const el = document.createElement('div');
  el.className = 'toast ' + type;
  el.textContent = message;
  container.appendChild(el);
  setTimeout(() => {
    el.style.opacity = '0';
    el.style.transform = 'translateX(120%)';
    el.style.transition = 'all 0.3s ease';
    setTimeout(() => el.remove(), 300);
  }, 3000);
}

// Progression d'un module en %
function getProgression(moduleId) {
  const mod    = MODULES.find(m => m.id === moduleId);
  const total  = mod ? mod.lecons.length : 0;
  const faites = (etat.progress[moduleId] || []).length;
  return total > 0 ? Math.round((faites / total) * 100) : 0;
}

// Progression globale
function getProgressionGlobale() {
  let total = 0, faites = 0;
  MODULES.forEach(m => {
    total  += m.lecons.length;
    faites += (etat.progress[m.id] || []).length;
  });
  return total > 0 ? Math.round((faites / total) * 100) : 0;
}

// Total leçons terminées
function getTotalLecons() {
  return Object.values(etat.progress)
    .reduce((acc, arr) => acc + arr.length, 0);
}

/* ══════════════════════════════
   NAVIGATION
══════════════════════════════ */
function allerVers(page) {
  etat.page = page;

  // Mettre à jour liens actifs
  document.querySelectorAll('.nav-link').forEach(l => {
    l.classList.remove('active');
  });
  const lienActif = document.querySelector(`.nav-link[data-page="${page}"]`);
  if (lienActif) lienActif.classList.add('active');

  // Afficher bonne page
  document.querySelectorAll('.page-view').forEach(v => {
    v.classList.remove('active');
  });
  const pageEl = document.getElementById('page-' + page);
  if (pageEl) pageEl.classList.add('active');

  // Fermer sidebar mobile
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebar-overlay').classList.remove('visible');

  // Rendre le contenu
  if (page === 'dashboard')   renderDashboard();
  if (page === 'cours')       renderCours();
  if (page === 'exercices')   renderExercices();
  if (page === 'progression') renderProgression();
  if (page === 'profil')      renderProfil();
}

/* ══════════════════════════════
   AUTHENTIFICATION
══════════════════════════════ */

// Connexion → Inscription
document.getElementById('show-register').addEventListener('click', function(e) {
  e.preventDefault();
  document.getElementById('login-page').classList.add('hidden');
  document.getElementById('register-page').classList.add('visible');
});

// Inscription → Connexion
document.getElementById('show-login').addEventListener('click', function(e) {
  e.preventDefault();
  document.getElementById('register-page').classList.remove('visible');
  document.getElementById('login-page').classList.remove('hidden');
});

// Mode démo
document.getElementById('demo-btn').addEventListener('click', function() {
  etat.user = {
    id: 0, name: 'Marie Claire',
    email: 'demo@claudimyrlearn.ht',
    joinDate: new Date().toLocaleDateString('fr'),
    points: 120, streak: 7, quizCount: 3
  };
  etat.progress = {
    m1: ['l1-1', 'l1-2'],
    m2: ['l2-1'],
    m3: [], m4: [], m5: [], m6: []
  };
  // Charger la clé API si déjà sauvegardée
  const savedKey = localStorage.getItem('cl_apikey');
  if (savedKey) etat.apiKey = savedKey;

  toast('Connexion en mode démo 👩‍💼', 'success');
  setTimeout(() => lancerApplication(), 1000);
});

// Formulaire connexion
document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('login-email').value.trim();
  const pass  = document.getElementById('login-pass').value;

  if (!email || !pass) {
    toast('Veuillez remplir tous les champs', 'error');
    return;
  }

  const users = JSON.parse(localStorage.getItem('cl_users') || '[]');
  const user  = users.find(u => u.email === email && u.password === pass);

  if (!user) {
    toast('Email ou mot de passe incorrect', 'error');
    return;
  }

  etat.user     = user;
  etat.progress = JSON.parse(
    localStorage.getItem('cl_progress_' + user.id) || '{}'
  );

  toast('Bienvenue ' + user.name + ' ! 🎉', 'success');
  setTimeout(() => lancerApplication(), 1000);
});

// Formulaire inscription
document.getElementById('register-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const name  = document.getElementById('reg-name').value.trim();
  const email = document.getElementById('reg-email').value.trim();
  const pass  = document.getElementById('reg-pass').value;
  const pass2 = document.getElementById('reg-pass2').value;

  if (!name || !email || !pass || !pass2) {
    toast('Veuillez remplir tous les champs', 'error');
    return;
  }
  if (pass !== pass2) {
    toast('Les mots de passe ne correspondent pas ❌', 'error');
    return;
  }
  if (pass.length < 6) {
    toast('Mot de passe : minimum 6 caractères', 'error');
    return;
  }

  const users = JSON.parse(localStorage.getItem('cl_users') || '[]');
  if (users.find(u => u.email === email)) {
    toast('Cet email est déjà utilisé', 'error');
    return;
  }

  const newUser = {
    id: Date.now(), name, email, password: pass,
    joinDate: new Date().toLocaleDateString('fr'),
    points: 0, streak: 0, quizCount: 0
  };

  users.push(newUser);
  localStorage.setItem('cl_users', JSON.stringify(users));

  etat.user     = newUser;
  etat.progress = {};

  toast('Compte créé ! Bienvenue ' + name + ' 🎉', 'success');
  setTimeout(() => lancerApplication(), 1000);
});

/* ══════════════════════════════
   LANCER L'APPLICATION
══════════════════════════════ */
function lancerApplication() {
  // Cacher pages auth
  document.getElementById('login-page').classList.add('hidden');
  document.getElementById('register-page').classList.remove('visible');

  // Afficher l'app
  document.getElementById('app-shell').classList.add('visible');

  // Navigation
  document.querySelectorAll('.nav-link[data-page]').forEach(btn => {
    btn.addEventListener('click', function() {
      allerVers(this.dataset.page);
    });
  });

  // Burger menu mobile
  document.getElementById('burger-btn').addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('open');
    document.getElementById('sidebar-overlay').classList.toggle('visible');
  });

  document.getElementById('sidebar-overlay').addEventListener('click', function() {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('sidebar-overlay').classList.remove('visible');
  });

  // Déconnexion
  document.getElementById('logout-btn').addEventListener('click', function() {
    etat.user     = null;
    etat.progress = {};
    document.getElementById('app-shell').classList.remove('visible');
    document.getElementById('login-page').classList.remove('hidden');
    toast('Déconnecté avec succès');
  });

  // Sauvegarder clé API
  document.getElementById('save-api-key').addEventListener('click', function() {
    const key = document.getElementById('api-key-input').value.trim();
    if (!key) { toast('Entrez une clé API', 'error'); return; }
    etat.apiKey = key;
    localStorage.setItem('cl_apikey', key);
    toast('Clé API enregistrée ! 🔑', 'success');
  });

  // Chat IA
  document.getElementById('chat-send').addEventListener('click', envoyerMessage);
  document.getElementById('chat-input').addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      envoyerMessage();
    }
  });

  // Charger clé API sauvegardée — TOUJOURS au démarrage
  const savedKey = localStorage.getItem('cl_apikey');
  if (savedKey) {
    etat.apiKey = savedKey;
    const inputEl = document.getElementById('api-key-input');
    if (inputEl) inputEl.value = savedKey;
  }

  // Afficher le dashboard
  allerVers('dashboard');
}

/* ══════════════════════════════
   RENDER DASHBOARD
══════════════════════════════ */
function renderDashboard() {
  const u = etat.user;

  // Nom utilisateur
  document.getElementById('welcome-name').textContent =
    u.name.split(' ')[0];

  // Initiales avatar
  const initiales = u.name.split(' ')
    .map(n => n[0]).join('').toUpperCase().slice(0, 2);
  document.getElementById('user-avatar').textContent = initiales;

  // Stats
  document.getElementById('dash-progress').textContent =
    getProgressionGlobale() + '%';
  document.getElementById('dash-lessons').textContent  =
    getTotalLecons();
  document.getElementById('dash-points').textContent   =
    u.points || 0;
  document.getElementById('dash-quiz').textContent     =
    u.quizCount || 0;
  document.getElementById('dash-streak').textContent   =
    (u.streak || 0) + ' 🔥';
  document.getElementById('topbar-points').textContent =
    '✨ ' + (u.points || 0) + ' pts';

  // Liste modules
  const listEl = document.getElementById('modules-list');
  listEl.innerHTML = MODULES.map(m => {
    const pct = getProgression(m.id);
    return `
      <div class="module-item" onclick="allerVers('cours')">
        <div class="module-thumb" style="background:${m.couleur}">
          ${m.icon}
        </div>
        <div class="module-info">
          <h4>${m.titre}</h4>
          <div class="progress-wrap">
            <div class="progress-bar">
              <div class="progress-fill" style="width:${pct}%"></div>
            </div>
            <span class="progress-pct">${pct}%</span>
          </div>
        </div>
      </div>`;
  }).join('');
}

/* ══════════════════════════════
   RENDER COURS
══════════════════════════════ */
function renderCours() {
  const el = document.getElementById('cours-content');
  el.innerHTML = `
    <div style="display:grid;
      grid-template-columns:repeat(auto-fill,minmax(280px,1fr));
      gap:20px">
      ${MODULES.map(m => {
        const pct  = getProgression(m.id);
        const done = (etat.progress[m.id] || []).length;
        return `
          <div class="card" style="cursor:pointer;transition:all 0.25s"
            onmouseover="this.style.transform='translateY(-4px)'"
            onmouseout="this.style.transform='translateY(0)'"
            onclick="ouvrirModule('${m.id}')">
            <div style="display:flex;align-items:center;gap:14px;
              margin-bottom:16px">
              <div style="width:52px;height:52px;border-radius:14px;
                background:${m.couleur};display:flex;align-items:center;
                justify-content:center;font-size:1.6rem;flex-shrink:0">
                ${m.icon}
              </div>
              <div>
                <h3 style="font-size:1rem;margin-bottom:4px">${m.titre}</h3>
                <span style="font-size:0.78rem;color:var(--text-muted)">
                  ${m.lecons.length} leçons
                </span>
              </div>
            </div>
            <p style="font-size:0.85rem;margin-bottom:14px">
              ${m.description}
            </p>
            <div class="progress-bar" style="height:8px;margin-bottom:8px">
              <div class="progress-fill" style="width:${pct}%"></div>
            </div>
            <div style="display:flex;justify-content:space-between;
              align-items:center">
              <span style="font-size:0.8rem;color:var(--text-muted)">
                ${done}/${m.lecons.length} leçons
              </span>
              <span style="font-size:0.8rem;font-weight:700;
                color:${pct===100?'#05A87D':'var(--indigo-light)'}">
                ${pct}%
              </span>
            </div>
          </div>`;
      }).join('')}
    </div>`;
}

// Ouvrir un module
function ouvrirModule(moduleId) {
  const mod = MODULES.find(m => m.id === moduleId);
  if (!mod) return;

  const el = document.getElementById('cours-content');
  el.innerHTML = `
    <div style="margin-bottom:20px">
      <button onclick="renderCours()"
        style="background:none;border:none;cursor:pointer;
          color:var(--indigo-light);font-size:0.95rem;
          font-family:'DM Sans',sans-serif;display:flex;
          align-items:center;gap:6px;padding:0">
        ← Retour aux modules
      </button>
    </div>
    <div style="display:flex;align-items:center;gap:16px;margin-bottom:24px">
      <div style="width:56px;height:56px;border-radius:14px;
        background:${mod.couleur};display:flex;align-items:center;
        justify-content:center;font-size:1.8rem">${mod.icon}</div>
      <div>
        <h2 style="font-size:1.4rem;margin-bottom:4px">${mod.titre}</h2>
        <p style="font-size:0.85rem">
          ${mod.lecons.length} leçons · ${getProgression(mod.id)}% complété
        </p>
      </div>
    </div>
    <div style="display:flex;flex-direction:column;gap:12px;max-width:680px">
      ${mod.lecons.map((l, i) => {
        const isDone = (etat.progress[moduleId] || []).includes(l.id);
        return `
          <div class="card" style="padding:18px;cursor:pointer"
            onclick="ouvrirLecon('${moduleId}','${l.id}')">
            <div style="display:flex;align-items:center;gap:14px">
              <div style="width:42px;height:42px;border-radius:50%;
                background:${isDone
                  ? 'rgba(6,214,160,0.15)'
                  : 'rgba(91,79,207,0.1)'};
                display:flex;align-items:center;justify-content:center;
                font-size:1.1rem;flex-shrink:0">
                ${isDone ? '✅' : (i + 1)}
              </div>
              <div style="flex:1">
                <h4 style="font-size:0.95rem;margin-bottom:3px;
                  font-family:'DM Sans',sans-serif">${l.titre}</h4>
                <span style="font-size:0.8rem;color:var(--text-muted)">
                  ⏱ ${l.duree}
                </span>
              </div>
              <span style="color:var(--indigo-light);font-size:1.1rem">→</span>
            </div>
          </div>`;
      }).join('')}
    </div>`;
}

// Ouvrir une leçon
function ouvrirLecon(moduleId, leconId) {
  const mod   = MODULES.find(m => m.id === moduleId);
  const lecon = mod?.lecons.find(l => l.id === leconId);
  if (!lecon) return;

  const contenu = CONTENU_LECONS[leconId] || `
    <p>Le contenu de cette leçon arrive bientôt.</p>`;

  const el = document.getElementById('cours-content');
  el.innerHTML = `
    <div style="margin-bottom:20px">
      <button onclick="ouvrirModule('${moduleId}')"
        style="background:none;border:none;cursor:pointer;
          color:var(--indigo-light);font-size:0.95rem;
          font-family:'DM Sans',sans-serif;display:flex;
          align-items:center;gap:6px;padding:0">
        ← Retour au module
      </button>
    </div>
    <div style="max-width:720px;margin:0 auto">
      <div class="card" style="padding:36px">
        <div style="margin-bottom:28px;padding-bottom:20px;
          border-bottom:1px solid var(--border)">
          <p style="font-size:0.8rem;color:var(--text-muted);margin-bottom:6px">
            ${mod.icon} ${mod.titre}
          </p>
          <h2 style="font-size:1.5rem;margin-bottom:6px">${lecon.titre}</h2>
          <span style="font-size:0.85rem;color:var(--text-muted)">
            ⏱ ${lecon.duree}
          </span>
        </div>

        <div class="lecon-body">
          ${contenu}
        </div>

        <div style="margin-top:32px;padding-top:24px;
          border-top:1px solid var(--border);
          display:flex;justify-content:space-between;
          align-items:center;flex-wrap:wrap;gap:12px">
          <button onclick="ouvrirModule('${moduleId}')"
            class="btn-ghost" style="width:auto;padding:10px 20px">
            ← Retour
          </button>
          <div style="display:flex;gap:12px;flex-wrap:wrap">
            <button onclick="allerVers('assistant')"
              class="btn-ghost" style="width:auto;padding:10px 20px">
              🤖 Demander à l'IA
            </button>
            <button onclick="terminerLecon('${moduleId}','${leconId}')"
              class="btn-primary" style="width:auto;padding:10px 20px">
              ✅ Marquer comme terminé
            </button>
          </div>
        </div>
      </div>
    </div>`;
}

// Terminer une leçon
function terminerLecon(moduleId, leconId) {
  if (!etat.progress[moduleId]) etat.progress[moduleId] = [];

  if (!etat.progress[moduleId].includes(leconId)) {
    etat.progress[moduleId].push(leconId);
    etat.user.points = (etat.user.points || 0) + 10;

    if (etat.user.id !== 0) {
      localStorage.setItem(
        'cl_progress_' + etat.user.id,
        JSON.stringify(etat.progress)
      );
    }

    toast('Leçon terminée ! +10 points ✨', 'success');
  } else {
    toast('Leçon déjà complétée !', '');
  }

  ouvrirModule(moduleId);
}

/* ══════════════════════════════
   RENDER PROGRESSION
══════════════════════════════ */
function renderProgression() {
  const total = getProgressionGlobale();
  const el    = document.getElementById('progression-content');

  el.innerHTML = `
    <div class="card" style="margin-bottom:24px;padding:28px">
      <div style="display:flex;justify-content:space-between;
        align-items:center;margin-bottom:12px">
        <div class="section-title" style="margin:0">🎯 Progression globale</div>
        <span style="font-family:'Fraunces',serif;font-size:2.2rem;
          font-weight:700;color:var(--indigo)">${total}%</span>
      </div>
      <div class="progress-bar" style="height:14px">
        <div class="progress-fill" style="width:${total}%"></div>
      </div>
    </div>

    <div style="display:flex;flex-direction:column;gap:14px">
      ${MODULES.map(m => {
        const pct  = getProgression(m.id);
        const done = (etat.progress[m.id] || []).length;
        return `
          <div class="card" style="padding:20px">
            <div style="display:flex;align-items:center;gap:14px;
              margin-bottom:12px">
              <div style="width:44px;height:44px;border-radius:12px;
                background:${m.couleur};display:flex;align-items:center;
                justify-content:center;font-size:1.4rem">${m.icon}</div>
              <div style="flex:1">
                <h4 style="font-size:0.95rem;margin-bottom:3px;
                  font-family:'DM Sans',sans-serif">${m.titre}</h4>
                <span style="font-size:0.8rem;color:var(--text-muted)">
                  ${done}/${m.lecons.length} leçons complétées
                </span>
              </div>
              <span style="font-weight:700;
                color:${pct===100?'#05A87D':'var(--indigo-light)'}">
                ${pct === 100 ? '✅' : pct + '%'}
              </span>
            </div>
            <div class="progress-bar" style="height:8px">
              <div class="progress-fill" style="width:${pct}%"></div>
            </div>
          </div>`;
      }).join('')}
    </div>`;
}

/* ══════════════════════════════
   RENDER PROFIL
══════════════════════════════ */
function renderProfil() {
  const u        = etat.user;
  const initials = u.name.split(' ')
    .map(n => n[0]).join('').toUpperCase().slice(0, 2);

  document.getElementById('profil-content').innerHTML = `
    <div style="background:linear-gradient(135deg,#2D1B69,#5B4FCF);
      border-radius:20px;padding:36px;display:flex;align-items:center;
      gap:24px;margin-bottom:24px;color:white">
      <div style="width:80px;height:80px;border-radius:50%;
        background:rgba(255,255,255,0.2);display:flex;align-items:center;
        justify-content:center;font-size:1.8rem;font-weight:700;
        color:white;border:3px solid rgba(255,255,255,0.4)">
        ${initials}
      </div>
      <div>
        <h2 style="color:white;font-size:1.6rem;margin-bottom:4px">
          ${u.name}
        </h2>
        <p style="color:rgba(255,255,255,0.75);margin-bottom:8px">
          ${u.email}
        </p>
        <p style="color:rgba(255,255,255,0.6);font-size:0.85rem">
          Membre depuis ${u.joinDate}
        </p>
      </div>
    </div>

    <div style="display:grid;
      grid-template-columns:repeat(auto-fit,minmax(140px,1fr));
      gap:16px">
      <div class="stat-card">
        <div class="stat-icon" style="background:rgba(91,79,207,0.12)">✨</div>
        <div class="stat-value">${u.points || 0}</div>
        <div class="stat-label">Points</div>
      </div>
      <div class="stat-card">
        <div class="stat-icon" style="background:rgba(255,94,91,0.12)">📖</div>
        <div class="stat-value">${getTotalLecons()}</div>
        <div class="stat-label">Leçons</div>
      </div>
      <div class="stat-card">
        <div class="stat-icon" style="background:rgba(6,214,160,0.12)">📊</div>
        <div class="stat-value">${getProgressionGlobale()}%</div>
        <div class="stat-label">Complété</div>
      </div>
      <div class="stat-card">
        <div class="stat-icon" style="background:rgba(255,209,102,0.2)">🔥</div>
        <div class="stat-value">${u.streak || 0}</div>
        <div class="stat-label">Jours de suite</div>
      </div>
    </div>`;
}

/* ══════════════════════════════
   ASSISTANT IA
══════════════════════════════ */
async function envoyerMessage() {
  const input = document.getElementById('chat-input');
  const texte = input.value.trim();
  if (!texte) return;

  input.value = '';
  input.style.height = 'auto';

  ajouterMessage(texte, 'user');


  const typingId = 'typing-' + Date.now();
  ajouterTyping(typingId);

  try {
    const reponse = await appelIA(texte);
    document.getElementById(typingId)?.remove();
    ajouterMessage(reponse, 'ai');
  } catch (err) {
    document.getElementById(typingId)?.remove();
    let msg = '⚠️ Erreur : ';
    if (err.message.includes('401')) {
      msg += 'Clé API invalide. Vérifiez-la dans Paramètres.';
    } else if (err.message.includes('429')) {
      msg += 'Trop de requêtes. Attendez quelques secondes.';
    } else if (err.message.includes('Failed to fetch') || err.message.includes('NetworkError')) {
      msg += 'Erreur réseau. Vérifiez votre connexion internet.';
    } else {
      msg += err.message;
    }
    ajouterMessage(msg, 'ai');
    console.error('Erreur IA:', err);
  }
}

function ajouterMessage(texte, role) {
  const container = document.getElementById('chat-messages');
  const div = document.createElement('div');
  div.className = 'message ' + role;
  div.innerHTML = `
    <div class="message-avatar">${role === 'ai' ? '🤖' : '👤'}</div>
    <div class="message-bubble">${texte}</div>`;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function ajouterTyping(id) {
  const container = document.getElementById('chat-messages');
  const div = document.createElement('div');
  div.className = 'message ai';
  div.id = id;
  div.innerHTML = `
    <div class="message-avatar">🤖</div>
    <div class="message-bubble typing">
      <span></span><span></span><span></span>
    </div>`;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

/* ══════════════════════════════
   BASE DE CONNAISSANCES HORS LIGNE
══════════════════════════════ */
const BASE_IA = [
  { mots: ['bonjour','salut','aide','help','comment','quoi'],
    rep: `👋 <strong>Bonjour ! Je suis votre assistante IA.</strong><br><br>
Je peux vous aider sur tous les cours :<br>
- 🏛️ Administration et structures<br>
- ✉️ Lettres, notes et rapports<br>
- 📂 Classement et archivage<br>
- ⏰ Gestion du temps<br>
- 🤝 Accueil et téléphone<br>
- 💰 Facturation et comptabilité<br><br>
Posez votre question !` },

  { mots: ['administration','définition','concept','fayol'],
    rep: `📚 <strong>L'administration selon Fayol</strong><br><br>
5 fonctions : <strong>Prévoir, Organiser, Commander, Coordonner, Contrôler</strong>.<br><br>
L'assistante gère : courrier, agenda, documents, accueil, archivage.` },

  { mots: ['lettre','rédaction','correspondance','administrative'],
    rep: `✉️ <strong>La lettre administrative</strong><br><br>
9 éléments : En-tête → Date → Destinataire → Références → Objet → Formule d'appel → Corps → Politesse → Signature.<br><br>
📌 À un supérieur : <em>«Veuillez agréer l'expression de ma respectueuse considération.»</em>` },

  { mots: ['note','service','rapport','compte-rendu'],
    rep: `📝 <strong>Documents internes</strong><br><br>
- <strong>Note</strong> : brève, directive, interne.<br>
- <strong>Rapport</strong> : détaillé, avec recommandations.<br>
- <strong>Compte-rendu</strong> : narration factuelle d'une réunion.` },

  { mots: ['classement','classer','archivage','méthode'],
    rep: `📂 <strong>Les 5 méthodes de classement</strong><br><br>
- 🔤 Alphabétique — noms de clients<br>
- 🔢 Numérique — factures<br>
- 📅 Chronologique — courriers<br>
- 📁 Thématique — par sujet<br>
- 🔡 Alphanumérique — A001, B002<br><br>
🏆 Retrouver tout document en moins de <strong>3 minutes</strong> !` },

  { mots: ['priorité','eisenhower','urgent','important'],
    rep: `⏰ <strong>Matrice d'Eisenhower</strong><br><br>
🔴 Q1 — Urgent + Important → Faire maintenant<br>
🟣 Q2 — Important + Non urgent → Planifier<br>
🟡 Q3 — Urgent + Non important → Déléguer<br>
🟢 Q4 — Non urgent + Non important → Éliminer` },

  { mots: ['accueil','visiteur','4x20','règle'],
    rep: `🤝 <strong>Règle des 4×20</strong><br><br>
- 20 premières secondes : 1ère impression<br>
- 20 premiers gestes : posture ouverte<br>
- 20 premiers mots : formule d'accueil<br>
- 20 cm de distance : espace respectueux` },

  { mots: ['téléphone','appel','décrocher','sonnerie'],
    rep: `📞 <strong>Communication téléphonique</strong><br><br>
Formule : <em>«[Organisation], [prénom], bonjour.»</em><br><br>
- Décrocher avant la 3e sonnerie<br>
- Écoute active — ne jamais interrompre<br>
- Prendre message : nom, numéro, objet, heure` },

  { mots: ['facture','tva','ht','ttc','calcul'],
    rep: `💰 <strong>Calcul TVA</strong><br><br>
Prix HT × Taux = TVA<br>
Prix HT + TVA = Prix TTC<br><br>
Exemple : 10 000 HTG × 10% = 1 000 HTG → TTC = 11 000 HTG` },

  { mots: ['budget','écart','caisse','dépense'],
    rep: `📊 <strong>Budget</strong><br><br>
✅ Écart favorable : dépenses < budget<br>
❌ Écart défavorable : dépenses > budget<br><br>
Petite caisse = petites dépenses courantes en espèces.` }
];

function rechercherReponseLocale(message) {
  const msg = message.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  let meilleur = null;
  let maxScore = 0;

  for (const item of BASE_IA) {
    let score = 0;
    for (const mot of item.mots) {
      const motNorm = mot.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      if (msg.includes(motNorm)) score++;
    }
    if (score > maxScore) {
      maxScore = score;
      meilleur = item;
    }
  }

  if (meilleur && maxScore > 0) return meilleur.rep;

  return `🤔 Essayez ces mots-clés :<br>
<em>administration, lettre, note, rapport, classement, agenda, priorité, accueil, téléphone, facture, TVA, budget</em>`;
}

async function appelIA(message) {
  await new Promise(r => setTimeout(r, 600 + Math.random() * 400));
  return rechercherReponseLocale(message);
}

/* ══════════════════════════════
   DÉMARRAGE
══════════════════════════════ */
window.addEventListener('DOMContentLoaded', function() {
  const userSauvegarde = localStorage.getItem('cl_user');
  if (userSauvegarde) {
    try {
      etat.user     = JSON.parse(userSauvegarde);
      etat.progress = JSON.parse(
        localStorage.getItem('cl_progress_' + etat.user.id) || '{}'
      );
      lancerApplication();
    } catch(e) {
      localStorage.removeItem('cl_user');
    }
  }
});