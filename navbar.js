// Affichage hamburger nav bar sur petit ecran
// Verifier que DOM est complètement chargé avant d'exécuter le script
document.addEventListener('DOMContentLoaded', () => {
  // Sélectionner l'élément hamburger et la navbar
  const hamburger = document.querySelector('.hamburger');
  const menubar = document.querySelector('.menubar');

  const toggleNav = () => {
    menubar.classList.toggle("active");
    hamburger.classList.toggle("hamburger-active");
  };

  hamburger.addEventListener("click", () => toggleNav());
}
)
