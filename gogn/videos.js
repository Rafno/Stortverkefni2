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
let video;
let poster;
/* Create Element  that holds all the wideo media buttons together*/
const boxer = createElement("div","container");
appendChild(boxer,"div","boxer");

/*Fast back button created*/
const BackDiv = createElement("img", "pic");
BackDiv.setAttribute("src","/img/back.svg");
appendChild(BackDiv,"button","BackDiv");

/*Play and pause button created*/
const playPauseDiv = createElement("img", "pic");
playPauseDiv.setAttribute("src","/img/play.svg");
appendChild(playPauseDiv,"button","playPauseDiv");

/*  Container that says til baka */
const texti =" Til baka ";
const back = createElement("div","backContainer");
const texter = appendChild(back,"div","back");
addTextToNode(texter,texti);

 /* mute and unmute buttons */
 const muterDiv = createElement("img", "pic");
 muterDiv.setAttribute("src","/img/mute.svg");
 appendChild(muterDiv,"button","muterDiv");

 /* Full screen button  */
 const fulDiv = createElement("img", "pic");
 fulDiv.setAttribute("src","/img/fullscreen.svg");
 appendChild(fulDiv,"button","fulkDiv");

 /* Forward Button  */
 const forwardDiv = createElement("img", "pic");
 forwardDiv.setAttribute("src","/img/next.svg");
 appendChild(forwardDiv,"button","forwardDiv");

/* If the id is higher than 3 that means that there is now video awailable in the
  json file so the program just prints out the message as the title and shows the
  video media player  */
if(id > 3){
  let titill = "Myndabandaleigan";
  const skilabod = "Videóið er ekki til";
  const title = createElement("div","Fyrirsogn");
  const txt = appendChild(title,"h3","title");
  addTextToNode(txt,titill);
  main.appendChild(title);

  const textamsg = createElement("div","skilabod");
  const msg = appendChild(textamsg,"h3","textamsg");
  addTextToNode(msg,skilabod);

  main.appendChild(textamsg);
  main.appendChild(boxer);
  boxer.appendChild(BackDiv);
  boxer.appendChild(playPauseDiv);
  main.appendChild(back);
  boxer.appendChild(muterDiv);
  boxer.appendChild(fulDiv);
  boxer.appendChild(forwardDiv);

  back.addEventListener('click', function () {
    console.log("button has been pressed");
    window.location.href = ("index.html");
  });

}
/*  Otherwise the id was not to high and there is a video in the json file with
    this id */
else{
   video = data.videos[id].video;
   poster = data.videos[id].poster;
   let titill = data.videos[id].title;

   const title = createElement("div","Fyrirsogn");
   const txt = appendChild(title,"h3","title");
   addTextToNode(txt,titill);
   main.appendChild(title);


  /************************  Video   ****************************/
  const media = createElement("div", "media");
  main.appendChild(media);

  const owerlay = createElement("div","owerlay");
  media.appendChild(owerlay);

  const videoDiv = createElement("video", "videoDiv");
  videoDiv.setAttribute("src", video);


  const posterDiv = createElement("img", "videoDiv");
  posterDiv.setAttribute("src", poster);
  media.appendChild(posterDiv);
/************append container fyrir controls takkana*****************/
main.appendChild(boxer);

/********************** append Fast Back Button********************************/
boxer.appendChild(BackDiv);
/**************** Effect for Back Button ***********************/
BackDiv.addEventListener('click', function () {
  console.log("button has been pressed");
  videoDiv.currentTime = videoDiv.currentTime-3;
});

/************************ Play Button ****************************/
boxer.appendChild(playPauseDiv);
function player(){
  const mainreplace = main.childNodes[0];
  if(teljari ===1){
    media.removeChild(posterDiv);
    media.appendChild(videoDiv);
    main.appendChild(boxer);
    main.appendChild(back);
  }
  teljari +=1;
  console.log("button has been pressed");
  const repl = boxer.childNodes[1];
  if (videoDiv.paused) {
    console.log("ýtt á play");
    videoDiv.play();
    document.querySelector(".owerlay").style.zIndex="-1";
    playPauseDiv.setAttribute("src","/img/pause.svg");
    }
  else{
    console.log("ýtt á pause");
    videoDiv.pause();
    document.querySelector(".owerlay").style.zIndex="+1";
    playPauseDiv.setAttribute("src","/img/play.svg");
    console.log("ferðu hinfgar");
  }

}
/*  calling to addEventListener for 2 kind of play button.
    one is in the boxer and the other on the video  */

playPauseDiv.addEventListener('click', player);
owerlay.addEventListener('click',player);

/************append Kassin sem sér um að fara aftur um síðu*******/
main.appendChild(back);
/******** Efecct fyir kassan sem fer aftur um eina síðu ******/
back.addEventListener('click', function () {
  console.log("button has been pressed");
  window.location.href = ("index.html");
});
/************************append Unmute Button*********************************/
boxer.appendChild(muterDiv);

/**************** Effect for unMute Button ***********************/
muterDiv.addEventListener('click', function () {
  console.log("button has been pressed");
  const replace = boxer.childNodes[2];
  if(videoDiv.muted == false){
    console.log("ýtt á mute");
    videoDiv.muted = true;
    muterDiv.setAttribute("src","/img/unmute.svg");
      }
  else{
    videoDiv.muted = false;
    muterDiv.setAttribute("src","/img/mute.svg");
  }


});


/*  ********************** append Full Button*************************** */
boxer.appendChild(fulDiv);
/************************ Effect Full screen ********************** */
fulDiv.addEventListener('click', function () {
  const requestFullScreen = videoDiv.requestFullscreen ||
  videoDiv.msRequestFullscreen || videoDiv.mozRequestFullScreen
  || videoDiv.webkitRequestFullscreen;
  requestFullScreen.call(videoDiv);
});
/*  ********************* append Fast Forward Button ******************************* */
boxer.appendChild(forwardDiv);

/**************** Effect for Forward Button ***********************/
forwardDiv.addEventListener('click', function () {
  console.log("button has been pressed");
  videoDiv.currentTime = videoDiv.currentTime+3;
});
}
}

/*Append, addTetxt og create hjálparföll*/
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
async function init(){
  let response = await fetch('videos.json');
  await response.json()
  .then(jsonData => runTheWo(jsonData))
  .catch(error => { console.log(error); return []});
}
init();
