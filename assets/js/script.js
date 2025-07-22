const menuIcon = document.getElementById("menu-icon"),
  menuSlider = document.getElementById("menu-slider");

menuIcon.addEventListener("click", toggleMenu);

function toggleMenu() {
  menuSlider.classList.toggle("attiva");
  menuSlider.classList.toggle("chiudi");
}
