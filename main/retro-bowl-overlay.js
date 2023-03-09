document.addEventListener('DOMContentLoaded', function() {
// create a script element for Font Awesome
var faScript = document.createElement('script');
faScript.src = 'https://kit.fontawesome.com/66a6a9b4b6.js';
faScript.setAttribute('crossorigin', 'anonymous');

// append the Font Awesome script element to the head of the HTML document
document.head.appendChild(faScript);


// create a link element for the stylesheet
var link = document.createElement('link');
link.rel = 'stylesheet';
link.href = '/main/overlay.css';

// append the link element to the head of the HTML document
document.head.appendChild(link);


// create the overlay div

const overlay = document.createElement('div');
overlay.classList.add('overlay')
overlay.style.position = 'absolute';
overlay.style.top = '0';
overlay.style.left = '0';
overlay.style.width = '100%';
overlay.style.height = '100%';
overlay.style.zIndex = '9999';

const target = document.getElementById('gm4html5_div_id');



// create the home button
const homeButton = document.createElement('button');
homeButton.classList.add('home-button');
homeButton.innerHTML = '<i class="fa-solid fa-house"></i>';
homeButton.onclick = function() {
  window.location.href = '/main/index.html';
}

// create the incognito button
const incognitoButton = document.createElement('button');
incognitoButton.classList.add('incognito');
incognitoButton.innerHTML = '<i class="fa-solid fa-ghost"></i>';
incognitoButton.onclick = function() {
  var l = document.querySelector('link[rel*=\'icon\']') || document.createElement('link');
  l.type = 'image/x-icon';
  l.rel = 'shortcut icon';
  if (l.href && l.href === 'https://google.com/favicon.ico') {
    l.href = '';
    document.title = originalTitle;
  } else {
    l.href = 'https://google.com/favicon.ico';
    originalTitle = document.title;
    document.title = 'Google';
  }
  if (document.querySelector('link[rel*=\'icon\']')) {
    document.querySelector('link[rel*=\'icon\']').remove();
  }
  document.getElementsByTagName('head')[0].appendChild(l);
}

// append the buttons to the overlay div
overlay.appendChild(homeButton);
overlay.appendChild(incognitoButton);

// add the overlay to the page
target.appendChild(overlay);

});


