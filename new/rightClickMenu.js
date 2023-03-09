
const rightClickMenu = document.querySelector(".menu")
const li = document.querySelector("li")
const eyeIcon = document.getElementById("cloak-icon")
let currentURL = getCurrentURL()
const orginalTitle = document.title
const cloakText = document.getElementById("cloak-page")
let cloakClicks = 0
const fontawesomeScript = document.createElement("script")
const gstaticFont = document.createElement("link")
const fontGoogleAPI = document.createElement("link")
const poppinsFont = document.createElement("link")
const mainCSS = document.createElement("link")
const rightClickMenuElements = document.createElement("div")



window.addEventListener("contextmenu" , e => {
  e.preventDefault();
  let x = e.offsetX, y = e.offsetY,
    winWidth = window.innerWidth,
    winHeight = window.innerHeight,
    cmWidth = rightClickMenu.offsetWidth,
    cmHeight = rightClickMenu.offsetHeight;
  x = x > winWidth - cmWidth ? winWidth - cmWidth - 5 : x;
  y = y > winHeight - cmHeight ? winHeight - cmHeight - 5 : y;
  
  rightClickMenu.style.left = `${x}px`;
  rightClickMenu.style.top = `${y}px`;
  rightClickMenu.style.visibility = "visible"
});

document.addEventListener("click", () => {
  rightClickMenu.style.visibility = "hidden"
});


function getCurrentURL() {
  return window.location.href
}

function getEmbedCode(url, title) {
  return navigator.clipboard.writeText(`<iframe src="${url}" title="${title}"></iframe>`)
    .then(() => {
      console.log('Embed code copied to clipboard successfully!');
      alert("Embed Code Copied to Clipboard Successfully!");
    })
    .catch(() => {
      console.error("Failed to copy embed code to clipboard!");
      alert("Failed to Copy Embed Code to Clipboard!");
    });
}



async function share() {
  await navigator.clipboard.writeText("Looking for some fun games to play? Check out Greyz's Games! Our website features a wide variety of games that are perfect for all ages. Visit us now at www.greyzsgames.com and start playing today! Share this post and challenge your friends to beat your high score!")
  alert("Share Text Copied to Clipboard Successfully!");
}

function cloakPage() {
  cloakClicks += 1
  if (cloakClicks% 2 === 0 ) { //is even
    document.title = orginalTitle
    cloakText.innerHTML = "Cloak Page " + '<i id="cloak-icon" class="fa-solid fa-eye"></i>'
  } else { //is odd first click
    document.title = "Google"
    cloakText.innerHTML = "Uncloak Page " + '<i id="cloak-icon" class="fa-solid fa-eye-slash"></i>'
  }
}

fontawesomeScript.src = 'https://kit.fontawesome.com/66a6a9b4b6.js';
document.head.appendChild(fontawesomeScript);
gstaticFont.href = 'https://fonts.gstatic.com'
gstaticFont.rel = 'preconnect'
document.head.appendChild(gstaticFont);
fontGoogleAPI.href = 'https://fonts.googleapis.com'
document.head.appendChild(fontGoogleAPI);
poppinsFont.href = "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
poppinsFont.rel = "stylesheet"
document.head.appendChild(poppinsFont);
mainCSS.href = '/new/style.css'
mainCSS.rel = "stylesheet"
document.head.appendChild(mainCSS);


//create menu 

rightClickMenuElements.innerHTML = "<ul class='menu'><li id='share-menu' onmousedown='share()'>Share <i class='fa-solid fa-share'></i></li><hr><li id='embed-menu'onmousedown='getEmbedCode(getCurrentURL(), document.title);'>Embed <i class='fa-solid fa-code'></i></li><hr><li id='cloak-page' onmousedown='cloakPage()'>Cloak Page <i id='cloak-icon' class='fa-solid fa-eye fa-eye-slash'></i></li></ul>"
