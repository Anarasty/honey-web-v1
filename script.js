const navLinks = document.getElementById("nav-links");
const barMenu = document.getElementById("bar-menu");

barMenu.addEventListener("click", function () {
    if (navLinks.style.display === 'flex') {
      navLinks.style.display = 'none';
      } else {
        navLinks.style.display = 'flex';
      }
});
