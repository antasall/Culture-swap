// =============================
// === Culture Swap Script ===
// =============================

// 💎 Premium status (stocké localement)
let isPremium = localStorage.getItem("isPremium") === "true";

// =============================
// === GESTION PREMIUM
// =============================

// Activer Premium manuellement (simulé ici)
function activatePremium() {
  isPremium = true;
  localStorage.setItem("isPremium", "true");
  alert("🎉 Merci pour votre soutien ! Premium activé.");
}

// =============================
// === LIMITATION D'UTILISATION
// =============================

// Vérifie si l'utilisateur peut publier un témoignage
function canPostTestimony() {
  if (isPremium) return true;

  const lastPost = localStorage.getItem("lastPostDate");
  const today = new Date().toDateString();

  return lastPost !== today;
}

// Fonction pour publier un témoignage
function postTestimony(content) {
  if (!canPostTestimony()) {
    alert("⚠️ Version gratuite : 1 témoignage par jour.\nPassez en Premium pour publier librement !");
    return;
  }

  if (!content.trim()) {
    alert("⛔ Le témoignage ne peut pas être vide.");
    return;
  }

  // Simule l’enregistrement (à connecter à Firebase ou autre plus tard)
  console.log("Témoignage publié :", content);

  // Enregistre la date de publication
  localStorage.setItem("lastPostDate", new Date().toDateString());

  alert("✅ Témoignage publié avec succès !");
}

// =============================
// === UTILITAIRES TEST
// =============================

// Réinitialise les données locales (pour tests uniquement)
function resetLocalStorage() {
  localStorage.removeItem("isPremium");
  localStorage.removeItem("lastPostDate");
  alert("🧹 Données locales réinitialisées.");
}
