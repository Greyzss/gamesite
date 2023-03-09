const backgroundDiv = document.createElement("div")
backgroundDiv.classList.add("background-div")
const homeButton = document.createElement("p")
homeIcon = document.createElement("i")
homeIcon.classList.add("fa-solid")
homeIcon.classList.add("fa-house")
backgroundDiv.appendChild(homeButton)
homeButton.appendChild(homeIcon)
document.body.appendChild(backgroundDiv)
const homeButtonHtml = document.getElementsByClassName("home-button")
homeButtonHtml.style.display = "inline"
homeButtonHtml.style.color = "white"



