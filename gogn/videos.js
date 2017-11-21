/* Append, addTetxt og create hjálparföll */
function createElement(element, className = '') {
  const div = document.createElement(element);
  div.setAttribute('class', className);
  return div;
}
function appendChild(node, elementType, className = '') {
  const div = document.createElement(elementType);
  div.setAttribute('class', className);
  return node.appendChild(div);
}
function addTextToNode(node, text) {
  node.appendChild(document.createTextNode(text));
}
/*  getting the id from the link  */
const urlSplit = window.location.href.split('=')[1];
let teljari = 1;
/* creating all the elements that are requuired, later on append them to their place  */

/*  Element for media */
const media = createElement('div', 'media');

/*  Get the location of main in HTML  */
const main = document.querySelector('main');

/* Hold the position of the video so that the play can be placed in the center  */
const owerlay = createElement('div', 'owerlay');

/*  Element for the container that holds til baka */
const back = createElement('div', 'backContainer');

/*  Element for the video */
const videoDiv = createElement('video', 'videoDiv');

/* Element for the poster before the video  */
const posterDiv = createElement('img', 'videoDiv');

/* Element for the play and pause button on the video media player */
const playPauseDiv = createElement('img', 'pic');

/*  Element for the mute and unmute button in the wideo media player  */
const muterDiv = createElement('img', 'pic');

/*  Element that holds all the wideo media buttons together */
const boxer = createElement('div', 'container');

/*  if id is to high this function starts and writes out error msg  */
function errormsg(str) {
  const errorTitle = createElement('div', 'Fyrirsogn');
  const errorTxt = appendChild(errorTitle, 'h3', 'errorTitle');
  addTextToNode(errorTxt, 'Myndbandaleigan');
  main.appendChild(errorTitle);

  const errorskilabod = createElement('div', 'errorSkilabod');
  const errorB = appendChild(errorskilabod, 'span', 'errorskilabod');
  addTextToNode(errorB, str);
  main.appendChild(errorskilabod);
}

/*  Go back is eventListener for Til baka */
function goBack() {
  window.location.href = ('index.html');
}

/*  eventListener for reverse  */
function currentminus() {
  videoDiv.currentTime -= 3;
}

/*  eventListener for mute  */
function mute() {
  if (videoDiv.muted === false) {
    videoDiv.muted = true;
    muterDiv.setAttribute('src', '/img/unmute.svg');
  } else {
    videoDiv.muted = false;
    muterDiv.setAttribute('src', '/img/mute.svg');
  }
}

/*  eventListener fyrir fullScreen  */
function full() {
  const requestFullScreen = videoDiv.requestFullscreen ||
  videoDiv.msRequestFullscreen || videoDiv.mozRequestFullScreen
  || videoDiv.webkitRequestFullscreen;
  requestFullScreen.call(videoDiv);
}
/*  eventListener fyrir forward */
function forward() {
  videoDiv.currentTime += 3;
}
/*  eventListener fyrir play and pause button  */
function player() {
  if (teljari === 1) {
    media.removeChild(posterDiv);
    media.appendChild(videoDiv);
    main.appendChild(boxer);
    main.appendChild(back);
  }
  teljari += 1;
  if (videoDiv.paused) {
    videoDiv.play();
    document.querySelector('.owerlay').style.zIndex = '-1';
    playPauseDiv.setAttribute('src', './img/pause.svg');
  } else {
    videoDiv.pause();
    document.querySelector('.owerlay').style.zIndex = '+1';
    playPauseDiv.setAttribute('src', './img/play.svg');
  }
}
/*  if Fetch is okay this function starts and this is the main function */
function mainFunction(data) {
  main.removeChild(main.childNodes[2]);
  const id = urlSplit;
  /* ************************* Title **************************** */
  let video;
  let poster;
  appendChild(boxer, 'div', 'boxer');

  /* Fast back button created */
  const BackDiv = createElement('img', 'pic');
  BackDiv.setAttribute('src', './img/back.svg');
  appendChild(BackDiv, 'button', 'BackDiv');

  /* appending playPause button and setting the setAttribute  */
  playPauseDiv.setAttribute('src', './img/play.svg');
  appendChild(playPauseDiv, 'button', 'playPauseDiv');

  /* appending the button that says til Baka */
  const texti = ' Til baka ';
  const texter = appendChild(back, 'div', 'back');
  addTextToNode(texter, texti);

  /* appending mute and unmute buttons */
  muterDiv.setAttribute('src', './img/mute.svg');
  appendChild(muterDiv, 'button', 'muterDiv');

  /* creating Full screen button  */
  const fulDiv = createElement('img', 'pic');
  fulDiv.setAttribute('src', './img/fullscreen.svg');
  appendChild(fulDiv, 'button', 'fulkDiv');

  /* creating Forward Button  */
  const forwardDiv = createElement('img', 'pic');
  forwardDiv.setAttribute('src', './img/next.svg');
  appendChild(forwardDiv, 'button', 'forwardDiv');

  /* If the id is higher than 3 that means that there is now video awailable in the
    json file so the program just prints out the message as the title and shows the
    video media player  */
  if (id > 3) {
    const titill = 'Myndabandaleigan';
    const skilabod = 'Videóið er ekki til';
    const title = createElement('div', 'Fyrirsogn');
    const txt = appendChild(title, 'h3', 'title');
    addTextToNode(txt, titill);
    main.appendChild(title);

    const textamsg = createElement('div', 'skilabod');
    const msg = appendChild(textamsg, 'h3', 'textamsg');
    addTextToNode(msg, skilabod);
    /*  all the video buttons apended */
    main.appendChild(textamsg);
    main.appendChild(boxer);
    boxer.appendChild(BackDiv);
    boxer.appendChild(playPauseDiv);
    main.appendChild(back);
    boxer.appendChild(muterDiv);
    boxer.appendChild(fulDiv);
    boxer.appendChild(forwardDiv);

    /*  eventListener for the button Til baka  */
    back.addEventListener('click', goBack);

  /*  Otherwise the id was not to high and there is a video in the json file with
      this id */
  } else {
    ({ video } = data.videos[id]);
    ({ poster } = data.videos[id]);
    const titill = data.videos[id].title;
    /*  creating the title element and the name is from the json file */
    const title = createElement('div', 'Fyrirsogn');
    const txt = appendChild(title, 'b', 'title');
    addTextToNode(txt, titill);

    main.appendChild(title);
    main.appendChild(media);
    media.appendChild(owerlay);
    videoDiv.setAttribute('src', video);
    posterDiv.setAttribute('src', poster);
    media.appendChild(posterDiv);
    main.appendChild(boxer);
    boxer.appendChild(BackDiv);
    BackDiv.addEventListener('click', currentminus);
    boxer.appendChild(playPauseDiv);
    main.appendChild(back);
    boxer.appendChild(muterDiv);
    boxer.appendChild(fulDiv);
    boxer.appendChild(forwardDiv);

    /*  if the media buttons are pressed than these lines activates the
        eventListeners above  */
    playPauseDiv.addEventListener('click', player);
    owerlay.addEventListener('click', player);
    back.addEventListener('click', goBack);
    muterDiv.addEventListener('click', mute);
    fulDiv.addEventListener('click', full);
    forwardDiv.addEventListener('click', forward);
  }
}

async function init() {
  const response = await fetch('videos.json');

  await response.json()
    .then(jsonData => mainFunction(jsonData))
    .catch(errormsg('Gat ekki hlaðið inn gögn'));
}
init();
