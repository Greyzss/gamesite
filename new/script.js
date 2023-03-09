const volumeButton = document.getElementById("volume-button")
const minMaxGridButton = document.getElementById("grid-toggle")
const grid = document.getElementById("grid")
const gameCards = document.getElementsByClassName("game-card")
const gameNames = document.getElementsByClassName("game-name")
const playButtons = document.getElementsByClassName("play-now-button")
const gameDescriptions = document.getElementsByClassName("game-description")
const gameImage = document.getElementById("game-image")
let clicks = 0

localStorage.setItem("minMax Grid Button Clicks", clicks)
let clicksLocalStorage = localStorage.getItem("minMax Grid Button Clicks")

addEventListener('DOMContentLoaded', (event) => {
for (let i = 0; i < gameCards.length; i+= 1) {
  gameCards[i].classList.add("game-card-expanded")
  console.log(gameCards)
}
});

function toggleVolumeButtonLook() {
  volumeButton.classList.toggle("fa-volume-xmark")
}

function toggleGridView() {
  minMaxGridButton.classList.toggle("fa-minimize")
  clicks += 1
  clicksLocalStorage = clicks
  if (clicks% 2 === 0) {
    for (let i = 0; i < gameCards.length; i+= 1) {
      gameCards[i].classList.add("game-card-expanded")
      gameNames[i].classList.remove("visually-hidden")
      playButtons[i].classList.remove("visually-hidden")
      gameDescriptions[i].classList.remove("visually-hidden")
    }
    grid.classList.add("card-grid-expanded")
    grid.classList.remove("card-grid-condense")

  } else {
    for (let i = 0; i < gameCards.length; i+= 1) {
      gameCards[i].classList.remove("game-card-expanded")
      gameNames[i].classList.add("visually-hidden")
      playButtons[i].classList.add("visually-hidden")
      gameDescriptions[i].classList.add("visually-hidden")
  }
  grid.classList.remove("card-grid-expanded")
  grid.classList.add("card-grid-condense")
}
}

function searchGames() {
  var input = document.getElementById("game-search");
  var filter = input.value.toLowerCase();
  var nodes = document.getElementsByClassName("game-name");

  for (i = 0; i < nodes.length; i++) {
    if (nodes[i].innerText.toLowerCase().includes(filter)) {
      nodes[i].parentElement.style.display = "";
    } else {
      nodes[i].parentElement.style.display = "none";
    }
  }
}







