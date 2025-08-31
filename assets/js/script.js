const menuIcon = document.getElementById("menu-icon"),
  menuSlider = document.getElementById("menu-slider");

menuIcon.addEventListener("click", toggleMenu);

function toggleMenu() {
  menuIcon.classList.toggle("trasforma");
  menuSlider.classList.toggle("attiva");
  menuSlider.classList.toggle("chiudi");
}
