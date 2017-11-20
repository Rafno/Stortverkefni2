"use strict";
const url = window.location.href.split('?')[1];
const urlSplit = window.location.href.split('=')[1];
console.log(urlSplit);
function runTheWo(data) {
  const main = document.querySelector('main');
  console.log("Run the world!");
  const id = urlSplit;
  let teljari = 1;
  /************************** Title **************************** */
    const video = data.videos[id].video;
    const poster = data.videos[id].poster;
    const titill = data.videos[id].title;

    const title = createElement("div", "Fyrirsogn");
    const txt = appendChild(title, "h3", "title");
    addTextToNode(txt, titill);
    main.appendChild(title);



    /************************  Video   ****************************/
    const media = createElement("div", "media");
    main.appendChild(media);

    const owerlay = createElement("div", "owerlay");
    media.appendChild(owerlay);

    const videoDiv = createElement("video", "videoDiv");
    videoDiv.setAttribute("src", video);


    const posterDiv = createElement("img", "videoDiv");
    posterDiv.setAttribute("src", poster);
    media.appendChild(posterDiv);


    /************container fyrir controls takkana*****************/
    const boxer = createElement("div", "container");
    appendChild(boxer, "div", "boxer");
    main.appendChild(boxer);

    /********************** Fast Back Button********************************/

    const BackDiv = createElement("img", "pic");
    BackDiv.setAttribute("src", "/img/back.svg");
    appendChild(BackDiv, "button", "BackDiv");
    boxer.appendChild(BackDiv);

    /**************** Effect for Back Button ***********************/
    BackDiv.addEventListener('click', function () {
      console.log("button has been pressed");
      videoDiv.currentTime = videoDiv.currentTime - 3;
    });
    /************************ Play Button ****************************/
    const playPauseDiv = createElement("img", "pic");
    playPauseDiv.setAttribute("src", "/img/play.svg");
    appendChild(playPauseDiv, "button", "playPauseDiv");
    boxer.appendChild(playPauseDiv);

    function player() {
      const mainreplace = main.childNodes[0];
      if (teljari === 1) {
        media.removeChild(posterDiv);
        media.appendChild(videoDiv);
        main.appendChild(boxer);
        main.appendChild(back);
      }
      teljari += 1;
      console.log("button has been pressed");
      const repl = boxer.childNodes[1];
      if (videoDiv.paused) {
        console.log("ýtt á play");
        videoDiv.play();
        document.querySelector(".owerlay").style.zIndex = "-1";
        playPauseDiv.setAttribute("src", "/img/pause.svg");
      }
      else {
        console.log("ýtt á pause");
        videoDiv.pause();
        document.querySelector(".owerlay").style.zIndex = "+1";
        playPauseDiv.setAttribute("src", "/img/play.svg");
        console.log("ferðu hinfgar");
        //  owerlay.style.backgroundImage = "url('/img/play.svg')";
      }

    }
    /*****************Effect for play Button***********************/

    playPauseDiv.addEventListener('click', player);
    owerlay.addEventListener('click', player);

    /************ Kassin sem sér um að fara aftur um síðu*******/
    const texti = " Til baka ";
    const back = createElement("div", "backContainer");
    const texter = appendChild(back, "div", "back");
    addTextToNode(texter, texti);
    main.appendChild(back);
    /******** Efecct fyir kassan sem fer aftur um eina síðu ******/
    back.addEventListener('click', function () {
      console.log("button has been pressed");
      window.location.href = ("index.html");
    });
    /************************ Unmute Button*********************************/

    const muterDiv = createElement("img", "pic");
    muterDiv.setAttribute("src", "/img/mute.svg");
    appendChild(muterDiv, "button", "muterDiv");
    boxer.appendChild(muterDiv);

    /**************** Effect for unMute Button ***********************/
    muterDiv.addEventListener('click', function () {
      console.log("button has been pressed");
      const replace = boxer.childNodes[2];
      if (videoDiv.muted == false) {
        console.log("ýtt á mute");
        videoDiv.muted = true;
        muterDiv.setAttribute("src", "/img/unmute.svg");
        //muterDiv.replaceChild(replace, muterDiv.childNodes[2]);
      }
      else {
        videoDiv.muted = false;
        muterDiv.setAttribute("src", "/img/mute.svg");
        //  muterDiv.replaceChild(replace, muterDiv.childNodes[2]);
      }


    });


    /*********************** Full Button****************************/

    const fulDiv = createElement("img", "pic");
    fulDiv.setAttribute("src", "/img/fullscreen.svg");
    appendChild(fulDiv, "button", "fulkDiv");
    boxer.appendChild(fulDiv);
    /************************ Effect Full screen ***********************/
    fulDiv.addEventListener('click', function () {
      const requestFullScreen = videoDiv.requestFullscreen ||
        videoDiv.msRequestFullscreen || videoDiv.mozRequestFullScreen
        || videoDiv.webkitRequestFullscreen;
      requestFullScreen.call(videoDiv);
    });
    /********************** Fast Forward Button ********************************/


    const forwardDiv = createElement("img", "pic");
    forwardDiv.setAttribute("src", "/img/next.svg");
    appendChild(forwardDiv, "button", "forwardDiv");
    boxer.appendChild(forwardDiv);

    /**************** Effect for Forward Button ***********************/
    forwardDiv.addEventListener('click', function () {
      console.log("button has been pressed");
      videoDiv.currentTime = videoDiv.currentTime + 3;
    });
  
}

/*Appen, addTetxt og create hjálparföll*/
const createElement = function (element, className = "") {
  const div = document.createElement(element);
  div.setAttribute("class", className);
  return div;
}

const appendChild = function (node, elementType, className = "") {
  const div = document.createElement(elementType);
  div.setAttribute("class", className);
  return node.appendChild(div);
}

const addTextToNode = function (node, text) {
  node.appendChild(document.createTextNode(text));
}







async function init() {
  let response = await fetch('videos.json');
  await response.json()
    .then(jsonData => runTheWo(jsonData))
    .catch(error => { console.log(error); return [] });
}
init();