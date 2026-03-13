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
  if (page === 'progression') renderProgression();
  if (page === 'exercices')   renderExercices();
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
    id: 0, name: 'Louissaint Molishka',
    email: 'demo@claudimyrlearn.ht',
    joinDate: new Date().toLocaleDateString('fr'),
    points: 120, streak: 7, quizCount: 3
  };
  etat.progress = {
    m1: ['l1-1', 'l1-2'],
    m2: ['l2-1'],
    m3: [], m4: [], m5: [], m6: []
  };
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

  // Charger clé API sauvegardée
  const savedKey = localStorage.getItem('cl_apikey');
  if (savedKey) {
    etat.apiKey = savedKey;
    document.getElementById('api-key-input').value = savedKey;
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
    if (!etat.apiKey) throw new Error('Pas de clé API');
    const reponse = await appelIA(texte);
    document.getElementById(typingId)?.remove();
    ajouterMessage(reponse, 'ai');
  } catch (err) {
    document.getElementById(typingId)?.remove();
    const msg = !etat.apiKey
      ? '⚠️ Configurez votre clé API dans Paramètres ⚙️ pour activer l\'IA.'
      : '⚠️ Erreur de connexion. Vérifiez votre clé API.';
    ajouterMessage(msg, 'ai');
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

async function appelIA(message) {
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': etat.apiKey,
      'anthropic-version': '2023-06-01',
      'anthropic-dangerous-direct-browser-access': 'true'
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1024,
      system: `Tu es un tuteur IA expert en science administrative
               pour étudiantes en Haïti. Tu réponds toujours en français,
               de façon claire, simple et pédagogique.`,
      messages: [{ role: 'user', content: message }]
    })
  });

  if (!res.ok) throw new Error('API error ' + res.status);
  const data = await res.json();
  return data.content[0]?.text || 'Désolée, je n\'ai pas pu répondre.';
}
/* ══════════════════════════════
   DONNÉES DES QUIZ
══════════════════════════════ */
const QUIZ_DATA = {
  m1: [
    {
      question: "Selon Fayol, combien y a-t-il de fonctions administratives ?",
      options: ["3", "4", "5", "6"],
      answer: 2,
      explication: "Fayol définit 5 fonctions : Prévoir, Organiser, Commander, Coordonner, Contrôler."
    },
    {
      question: "Quelle structure donne à chaque employé un seul supérieur direct ?",
      options: ["Matricielle", "Fonctionnelle", "Hiérarchique", "Horizontale"],
      answer: 2,
      explication: "La structure hiérarchique garantit l'unité de commandement : un seul chef par employé."
    },
    {
      question: "Qu'est-ce qu'un organigramme ?",
      options: [
        "Un tableau de chiffres",
        "Une représentation graphique de la structure",
        "Un document comptable",
        "Un formulaire de demande"
      ],
      answer: 1,
      explication: "L'organigramme représente visuellement la hiérarchie et les relations entre postes."
    },
    {
      question: "Le secret professionnel oblige l'assistante à :",
      options: [
        "Partager toutes les infos",
        "Ne divulguer aucune information confidentielle",
        "Publier les données de l'entreprise",
        "Transmettre les dossiers aux clients"
      ],
      answer: 1,
      explication: "Le secret professionnel est une obligation légale de confidentialité."
    },
    {
      question: "Quelle est la différence entre administration publique et privée ?",
      options: [
        "Le salaire des employés",
        "La taille de l'organisation",
        "La mission de service public vs but lucratif",
        "La langue utilisée"
      ],
      answer: 2,
      explication: "L'administration publique sert l'intérêt général, le privé cherche le profit."
    }
  ],
  m2: [
    {
      question: "Quelle formule utilise-t-on pour s'adresser à un supérieur ?",
      options: [
        "Cordialement",
        "Amicalement",
        "Veuillez agréer l'expression de ma respectueuse considération",
        "Bien à vous"
      ],
      answer: 2,
      explication: "Pour un supérieur hiérarchique, on utilise 'respectueuse considération'."
    },
    {
      question: "Que signifie N/Réf dans une lettre ?",
      options: [
        "Numéro de référence du client",
        "Notre référence interne",
        "Nouvelle réglementation",
        "Numéro de réponse"
      ],
      answer: 1,
      explication: "N/Réf = Notre Référence, c'est la référence interne de l'expéditeur."
    },
    {
      question: "La note de service est principalement :",
      options: [
        "Un document envoyé aux clients",
        "Un document interne au personnel",
        "Un contrat commercial",
        "Un rapport financier"
      ],
      answer: 1,
      explication: "La note de service est un outil de communication interne descendante."
    },
    {
      question: "Quelle est la longueur idéale d'une phrase en rédaction administrative ?",
      options: ["5 mots", "20 mots maximum", "50 mots", "Pas de limite"],
      answer: 1,
      explication: "Une phrase courte (max 20 mots) est plus claire et professionnelle."
    },
    {
      question: "Le rapport administratif se distingue de la note car il est :",
      options: [
        "Plus court",
        "Toujours confidentiel",
        "Envoyé à l'extérieur",
        "Détaillé avec des recommandations"
      ],
      answer: 3,
      explication: "Le rapport analyse en profondeur et propose des recommandations."
    }
  ],
  m3: [
    {
      question: "Quelle méthode est idéale pour classer des factures ?",
      options: ["Alphabétique", "Thématique", "Numérique", "Géographique"],
      answer: 2,
      explication: "Le classement numérique est parfait pour les factures qui ont chacune un numéro unique."
    },
    {
      question: "Le classement thématique regroupe les documents par :",
      options: ["Date", "Nom", "Sujet ou domaine", "Numéro"],
      answer: 2,
      explication: "Le classement thématique organise par sujet : RH, Comptabilité, Juridique…"
    },
    {
      question: "En combien de minutes maximum doit-on retrouver un document ?",
      options: ["1 minute", "3 minutes", "10 minutes", "30 minutes"],
      answer: 1,
      explication: "Un bon système de classement permet de retrouver tout document en moins de 3 minutes."
    },
    {
      question: "Quel est le format correct pour nommer un fichier numérique ?",
      options: [
        "document1.pdf",
        "2026-03-11_Facture_001.pdf",
        "facture finale FINAL.pdf",
        "truc.pdf"
      ],
      answer: 1,
      explication: "Un bon nom de fichier inclut la date, le type et le numéro pour un classement clair."
    },
    {
      question: "Le classement alphanumérique combine :",
      options: [
        "Dates et noms",
        "Couleurs et codes",
        "Lettres et numéros",
        "Alphabet arabe et latin"
      ],
      answer: 2,
      explication: "Alphanumérique = lettres pour les catégories + numéros pour les éléments (A001, B002)."
    }
  ],
  m4: [
    {
      question: "Dans la matrice d'Eisenhower, Q1 représente :",
      options: [
        "Important non urgent",
        "Urgent non important",
        "Urgent et important",
        "Non urgent non important"
      ],
      answer: 2,
      explication: "Q1 = Urgent ET Important → à traiter immédiatement en priorité absolue."
    },
    {
      question: "Les tâches Q2 (importantes non urgentes) doivent être :",
      options: ["Éliminées", "Déléguées", "Planifiées", "Faites immédiatement"],
      answer: 2,
      explication: "Q2 = planifier : formation, projets stratégiques, développement personnel."
    },
    {
      question: "Combien de temps avant faut-il confirmer un rendez-vous ?",
      options: ["1 semaine", "24 heures", "1 heure", "Le matin même"],
      answer: 1,
      explication: "Confirmer 24h avant laisse le temps de s'organiser en cas de changement."
    },
    {
      question: "Une to-do list est :",
      options: [
        "Un agenda de réunions",
        "Un inventaire quotidien des tâches",
        "Un carnet de contacts",
        "Un registre de courrier"
      ],
      answer: 1,
      explication: "La to-do list est l'outil simple pour ne rien oublier et prioriser ses actions."
    },
    {
      question: "Les distractions appartiennent à quel quadrant ?",
      options: ["Q1", "Q2", "Q3", "Q4"],
      answer: 3,
      explication: "Q4 = Non urgent ET Non important → à éliminer pour gagner du temps."
    }
  ],
  m5: [
    {
      question: "La règle des 4×20 parle des 20 premières :",
      options: [
        "Pages d'un rapport",
        "Secondes, gestes, mots et cm",
        "Minutes d'une réunion",
        "Appels téléphoniques"
      ],
      answer: 1,
      explication: "4×20 : 20 secondes, 20 gestes, 20 mots, 20 cm — les bases de l'accueil parfait."
    },
    {
      question: "Avant quelle sonnerie faut-il décrocher le téléphone ?",
      options: ["1ère", "2ème", "3ème", "5ème"],
      answer: 2,
      explication: "La norme professionnelle est de décrocher avant la 3e sonnerie."
    },
    {
      question: "Face à un interlocuteur mécontent, que faire en premier ?",
      options: [
        "Raccrocher",
        "Appeler la sécurité",
        "Rester calme et écouter",
        "Ignorer la personne"
      ],
      answer: 2,
      explication: "Toujours rester calme et laisser s'exprimer. La personne a besoin d'être entendue."
    },
    {
      question: "La formule standard au décroché est :",
      options: [
        "Allô, c'est qui ?",
        "Quoi ?",
        "[Organisation], [prénom], bonjour",
        "Ne pas parler, attendre"
      ],
      answer: 2,
      explication: "La formule identifie l'organisation, la personne et salue chaleureusement."
    },
    {
      question: "Un message téléphonique complet contient :",
      options: [
        "Seulement le nom",
        "Nom, coordonnées, objet et heure",
        "Seulement l'heure",
        "Le sujet uniquement"
      ],
      answer: 1,
      explication: "Un message complet permet de rappeler efficacement avec toutes les infos."
    }
  ],
  m6: [
    {
      question: "Si le prix HT est 5 000 HTG et la TVA 10%, quel est le TTC ?",
      options: ["4 500 HTG", "5 100 HTG", "5 500 HTG", "6 000 HTG"],
      answer: 2,
      explication: "TVA = 5000 × 10% = 500. Prix TTC = 5000 + 500 = 5 500 HTG."
    },
    {
      question: "Un bon de commande officialise :",
      options: [
        "La livraison d'une marchandise",
        "Un paiement effectué",
        "Une commande passée à un fournisseur",
        "Une offre de prix"
      ],
      answer: 2,
      explication: "Le bon de commande est le document officiel par lequel l'acheteur commande."
    },
    {
      question: "Un écart budgétaire favorable signifie que :",
      options: [
        "Les dépenses dépassent le budget",
        "Le budget est équilibré",
        "Les dépenses sont inférieures au budget",
        "Il faut couper des dépenses"
      ],
      answer: 2,
      explication: "Écart favorable = dépenses < prévisions. C'est une bonne nouvelle !"
    },
    {
      question: "La petite caisse sert à :",
      options: [
        "Payer les gros investissements",
        "Stocker les bilans",
        "Payer les salaires",
        "Régler les petites dépenses courantes"
      ],
      answer: 3,
      explication: "La petite caisse couvre les petits achats quotidiens en espèces."
    },
    {
      question: "Quelle mention N'est PAS obligatoire sur une facture ?",
      options: [
        "Numéro de facture",
        "Date d'émission",
        "Photo du vendeur",
        "Prix TTC"
      ],
      answer: 2,
      explication: "La photo n'est jamais requise. Les mentions obligatoires sont : numéro, date, parties, prix…"
    }
  ]
};

/* ══════════════════════════════
   ÉTAT DU QUIZ
══════════════════════════════ */
let quiz = {
  moduleId:  null,
  questions: [],
  current:   0,
  score:     0,
  repondu:   false,
  timer:     null,
  tempsLeft: 30
};

/* ══════════════════════════════
   RENDER EXERCICES
══════════════════════════════ */
function renderExercices() {
  const el = document.getElementById('quiz-content');
  el.innerHTML = `
    <div style="display:grid;
      grid-template-columns:repeat(auto-fill,minmax(220px,1fr));
      gap:16px">
      ${MODULES.map(m => {
        const meilleur = localStorage.getItem('cl_quiz_' + m.id) || 0;
        return `
          <div class="card" style="cursor:pointer;text-align:center;
            padding:28px;transition:all 0.25s"
            onmouseover="this.style.transform='translateY(-4px)'"
            onmouseout="this.style.transform='translateY(0)'"
            onclick="demarrerQuiz('${m.id}')">
            <div style="font-size:2.5rem;margin-bottom:12px">${m.icon}</div>
            <h4 style="font-size:0.95rem;margin-bottom:6px">${m.titre}</h4>
            <p style="font-size:0.82rem;margin-bottom:12px">
              ${QUIZ_DATA[m.id].length} questions
            </p>
            ${meilleur > 0 ? `
              <div style="background:rgba(255,209,102,0.2);
                color:#8A6A00;padding:4px 12px;border-radius:99px;
                font-size:0.8rem;font-weight:700;display:inline-block">
                🏆 Meilleur : ${meilleur}%
              </div>` : `
              <div style="background:rgba(91,79,207,0.08);
                color:var(--indigo-light);padding:4px 12px;
                border-radius:99px;font-size:0.8rem;
                font-weight:600;display:inline-block">
                Pas encore tenté
              </div>`}
          </div>`;
      }).join('')}
    </div>`;
}

/* ══════════════════════════════
   DÉMARRER UN QUIZ
══════════════════════════════ */
function demarrerQuiz(moduleId) {
  quiz = {
    moduleId,
    questions: QUIZ_DATA[moduleId],
    current:   0,
    score:     0,
    repondu:   false,
    timer:     null,
    tempsLeft: 30
  };
  afficherQuestion();
}

/* ══════════════════════════════
   AFFICHER UNE QUESTION
══════════════════════════════ */
function afficherQuestion() {
  const q      = quiz.questions[quiz.current];
  const lettre = ['A', 'B', 'C', 'D'];
  const el     = document.getElementById('quiz-content');

  el.innerHTML = `
    <div style="max-width:680px;margin:0 auto">

      <!-- Barre de progression -->
      <div style="background:white;border-radius:16px;padding:16px 24px;
        margin-bottom:20px;border:1px solid var(--border);
        display:flex;align-items:center;gap:16px">
        <span style="font-weight:700;color:var(--indigo);white-space:nowrap">
          ${quiz.current + 1} / ${quiz.questions.length}
        </span>
        <div style="flex:1;height:8px;background:var(--border);
          border-radius:99px;overflow:hidden">
          <div style="height:100%;border-radius:99px;
            background:linear-gradient(90deg,var(--indigo-light),var(--coral));
            width:${((quiz.current) / quiz.questions.length) * 100}%;
            transition:width 0.5s ease"></div>
        </div>
        <div id="quiz-timer" style="font-weight:700;color:var(--coral);
          white-space:nowrap">⏱ 30s</div>
      </div>

      <!-- Question -->
      <div class="card" style="padding:32px">
        <p style="font-family:'Fraunces',serif;font-size:1.2rem;
          color:var(--indigo);margin-bottom:28px;line-height:1.5">
          ${q.question}
        </p>

        <div style="display:flex;flex-direction:column;gap:12px"
          id="options-list">
          ${q.options.map((opt, i) => `
            <button id="opt-${i}"
              onclick="choisirReponse(${i})"
              style="padding:14px 20px;border:2px solid var(--border);
                border-radius:12px;background:white;cursor:pointer;
                font-family:'DM Sans',sans-serif;font-size:0.95rem;
                color:var(--text-dark);transition:all 0.2s;
                text-align:left;display:flex;align-items:center;gap:12px">
              <span style="width:28px;height:28px;border-radius:50%;
                background:var(--cream);font-weight:700;font-size:0.85rem;
                display:flex;align-items:center;justify-content:center;
                flex-shrink:0;color:var(--text-muted)">
                ${lettre[i]}
              </span>
              ${opt}
            </button>`).join('')}
        </div>

        <div id="quiz-explication" style="display:none;margin-top:20px"></div>

        <div style="margin-top:24px;text-align:right">
          <button id="btn-suivant" onclick="questionSuivante()"
            style="display:none" class="btn-primary"
            style="width:auto;padding:12px 28px">
            ${quiz.current + 1 < quiz.questions.length
              ? 'Question suivante →'
              : 'Voir les résultats 🏆'}
          </button>
        </div>
      </div>

      <div style="margin-top:14px;text-align:center">
        <button onclick="renderExercices()"
          class="btn-ghost" style="width:auto;padding:8px 20px;
          font-size:0.85rem">
          ← Quitter le quiz
        </button>
      </div>
    </div>`;

  demarrerTimer();
}

/* ══════════════════════════════
   TIMER
══════════════════════════════ */
function demarrerTimer() {
  quiz.tempsLeft = 30;
  clearInterval(quiz.timer);

  quiz.timer = setInterval(() => {
    quiz.tempsLeft--;
    const el = document.getElementById('quiz-timer');
    if (el) {
      el.textContent = '⏱ ' + quiz.tempsLeft + 's';
      el.style.color = quiz.tempsLeft <= 10
        ? 'var(--coral)' : 'var(--text-muted)';
    }
    if (quiz.tempsLeft <= 0) {
      clearInterval(quiz.timer);
      if (!quiz.repondu) choisirReponse(-1);
    }
  }, 1000);
}

/* ══════════════════════════════
   CHOISIR UNE RÉPONSE
══════════════════════════════ */
function choisirReponse(idx) {
  if (quiz.repondu) return;
  quiz.repondu = true;
  clearInterval(quiz.timer);

  const q       = quiz.questions[quiz.current];
  const correct = q.answer;

  // Colorer les boutons
  for (let i = 0; i < q.options.length; i++) {
    const btn = document.getElementById('opt-' + i);
    if (!btn) continue;
    btn.disabled = true;
    if (i === correct) {
      btn.style.borderColor = 'var(--mint)';
      btn.style.background  = 'rgba(6,214,160,0.1)';
      btn.style.color       = '#05A87D';
    } else if (i === idx && i !== correct) {
      btn.style.borderColor = 'var(--coral)';
      btn.style.background  = 'rgba(255,94,91,0.08)';
      btn.style.color       = 'var(--coral)';
    }
  }

  // Compter le score
  if (idx === correct) quiz.score++;

  // Afficher l'explication
  const expEl = document.getElementById('quiz-explication');
  if (expEl) {
    expEl.style.display = 'block';
    expEl.innerHTML = `
      <div style="padding:14px 18px;border-radius:10px;
        background:${idx === correct
          ? 'rgba(6,214,160,0.08)' : 'rgba(255,94,91,0.07)'};
        border-left:4px solid ${idx === correct
          ? 'var(--mint)' : 'var(--coral)'};
        font-size:0.9rem;line-height:1.6">
        ${idx === correct ? '✅ Bonne réponse !' : '❌ Incorrect.'} 
        ${q.explication}
      </div>`;
  }

  // Afficher bouton suivant
  const btnSuivant = document.getElementById('btn-suivant');
  if (btnSuivant) btnSuivant.style.display = 'inline-flex';
}

/* ══════════════════════════════
   QUESTION SUIVANTE
══════════════════════════════ */
function questionSuivante() {
  quiz.current++;
  quiz.repondu = false;

  if (quiz.current >= quiz.questions.length) {
    afficherResultat();
  } else {
    afficherQuestion();
  }
}

/* ══════════════════════════════
   RÉSULTAT FINAL
══════════════════════════════ */
function afficherResultat() {
  clearInterval(quiz.timer);

  const total  = quiz.questions.length;
  const score  = quiz.score;
  const pct    = Math.round((score / total) * 100);
  const mod    = MODULES.find(m => m.id === quiz.moduleId);

  // Sauvegarder meilleur score
  const ancien = parseInt(localStorage.getItem('cl_quiz_' + quiz.moduleId) || '0');
  if (pct > ancien) {
    localStorage.setItem('cl_quiz_' + quiz.moduleId, pct.toString());
    if (etat.user) {
      etat.user.quizCount = (etat.user.quizCount || 0) + 1;
      etat.user.points    = (etat.user.points    || 0) + score * 5;
    }
  }

  const msg = pct >= 80
    ? 'Excellent travail ! 🏆'
    : pct >= 60
    ? 'Bon résultat ! Continue 💪'
    : 'Continue à réviser ! 📖';

  const el = document.getElementById('quiz-content');
  el.innerHTML = `
    <div style="max-width:580px;margin:0 auto">
      <div style="background:linear-gradient(135deg,#2D1B69,#5B4FCF);
        border-radius:24px;padding:48px 40px;text-align:center;color:white">

        <div style="font-family:'Fraunces',serif;font-size:5rem;
          font-weight:700;color:var(--gold);line-height:1;
          margin-bottom:12px">${pct}%</div>

        <h2 style="color:white;margin-bottom:8px">${msg}</h2>
        <p style="color:rgba(255,255,255,0.8);margin-bottom:28px">
          ${mod.icon} ${mod.titre}
        </p>

        <div style="display:flex;justify-content:center;gap:32px;
          margin-bottom:32px">
          <div style="text-align:center">
            <div style="font-family:'Fraunces',serif;font-size:2rem;
              font-weight:700;color:var(--gold)">${score}</div>
            <div style="font-size:0.8rem;opacity:0.75">Bonnes réponses</div>
          </div>
          <div style="text-align:center">
            <div style="font-family:'Fraunces',serif;font-size:2rem;
              font-weight:700;color:var(--gold)">${total - score}</div>
            <div style="font-size:0.8rem;opacity:0.75">Erreurs</div>
          </div>
          <div style="text-align:center">
            <div style="font-family:'Fraunces',serif;font-size:2rem;
              font-weight:700;color:var(--gold)">${score * 5}</div>
            <div style="font-size:0.8rem;opacity:0.75">Points gagnés</div>
          </div>
        </div>

        <div style="display:flex;gap:12px;justify-content:center;
          flex-wrap:wrap">
          <button onclick="demarrerQuiz('${quiz.moduleId}')"
            class="btn-coral" style="width:auto;padding:12px 24px">
            🔄 Recommencer
          </button>
          <button onclick="renderExercices()"
            style="background:rgba(255,255,255,0.15);border:none;
              color:white;padding:12px 24px;border-radius:12px;
              cursor:pointer;font-family:'DM Sans',sans-serif;
              font-size:0.95rem;font-weight:600">
            ← Autres modules
          </button>
        </div>
      </div>
    </div>`;
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
