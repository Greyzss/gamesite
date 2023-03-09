document.addEventListener('DOMContentLoaded', function() {
  
  const head = document.head;
  const link = document.createElement('link');
  
  link.type = 'text/css';
  link.rel = 'stylesheet';
  link.href = '/main/overlay.css';

  head.appendChild(link);

  // create empty div
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  document.body.appendChild(overlay);

  // create background div
  const background = document.createElement('div');
  background.classList.add('background');
  overlay.appendChild(background);

  // create home button
  const homeButton = document.createElement('button');
  homeButton.onclick = function() {
    window.location.href = '/main/index.html';
  };
  homeButton.classList.add('home-button');
  const homeIcon = document.createElement('i');
  homeIcon.classList.add('fa-solid', 'fa-house');
  homeButton.appendChild(homeIcon);
  overlay.appendChild(homeButton);

  // create incognito button
  const incognitoButton = document.createElement('button');
  incognitoButton.onclick = function() {
    (function() {
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
    })();
  };
  incognitoButton.classList.add('incognito');
  const incognitoIcon = document.createElement('i');
  incognitoIcon.classList.add('fa-solid', 'fa-ghost');
  incognitoButton.appendChild(incognitoIcon);
  overlay.appendChild(incognitoButton);

  // make the background draggable
  let isDragging = false;
  let currentX;
  let currentY;
  let initialX;
  let initialY;
  let xOffset = 0;
  let yOffset = 0;

  background.addEventListener("mousedown", dragStart);
  background.addEventListener("mouseup", dragEnd);
  background.addEventListener("mousemove", drag);

  function dragStart(e) {
    initialX = e.clientX - xOffset;
    initialY = e.clientY - yOffset;

    if (e.target === background) {
      isDragging = true;
    }
  }

  function dragEnd(e) {
    initialX = currentX;
    initialY = currentY;

    isDragging = false;
  }

  function drag(e) {
    if (isDragging) {
      e.preventDefault();

      currentX = e.clientX - initialX;
      currentY = e.clientY - initialY;

      xOffset = currentX;
      yOffset = currentY;

      setTranslate(currentX, currentY, background);
    }
  }

  function setTranslate(xPos, yPos, el) {
    el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
  }

  // add fontawesome script
  const fontawesomeScript = document.createElement('script');
  fontawesomeScript.src = 'https://kit.fontawesome.com/66a6a9b4b6.js';
  document.head.appendChild(fontawesomeScript);
});
