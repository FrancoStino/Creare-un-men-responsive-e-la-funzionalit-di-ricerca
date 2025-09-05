const menuIcon = document.getElementById("menu-icon"),
  menuSlider = document.getElementById("menu-slider");

const searchIcon = document.getElementById("search-icon"),
  searchSlider = document.getElementById("search-slider"),
  searchInput = document.getElementById("search-input"),
  searchResult = document.getElementById("search-result"),
  audio = new Audio("assets/audio/digit.mp4"),
  content = [
    "Contenuto letteratura e filosofia",
    "Contenuto informatica e matematica",
    "Contenuto informatica e altro...",
  ];

searchIcon.addEventListener("click", toggleSearch);
searchInput.addEventListener("keyup", searchAction);

function searchAction(e) {
  if (e.keyCode === 13) {
    console.log("Avvia la ricerca");
    search(searchInput.value);
    searchInput.value = "";
  }
  if (e.keyCode === 27) {
    if (searchSlider.classList.contains("attiva")) {
      searchSlider.classList.add("chiudi");
      searchSlider.classList.remove("attiva");
    }
  }
}

async function search(str) {
  let result = [];
  searchResult.innerHTML = "";
  content.forEach((item, i) => {
    if (item.indexOf(str) !== -1) {
      result.push(item);
    }
  });

  if (result.length === 0) {
    return setResultItem("Nessun risultato");
  }

  result.forEach((risultato) => setResultItem(risultato));
}

function setResultItem(ris) {
  let newResult = document.createElement("p");
  newResult.appendChild(document.createTextNode(ris));
  searchResult.appendChild(newResult);
  audio.play();
}

function toggleSearch() {
  searchIcon.classList.toggle("trasforma");
  searchSlider.classList.toggle("attiva");
  searchSlider.classList.toggle("chiudi");

  if (searchSlider.classList.contains("attiva")) {
    searchInput.focus();
  }
}

menuIcon.addEventListener("click", toggleMenu);

function toggleMenu() {
  menuIcon.classList.toggle("trasforma");
  menuSlider.classList.toggle("attiva");
  menuSlider.classList.toggle("chiudi");
}
