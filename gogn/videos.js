// JavaScript source code
"use strict";

init();

function runTheWo(data){
const main = document.querySelector('main');
console.log("Run the world!");
console.log(data.videos[1].title);
/************************** Title**************************** */
const bunny = data.videos[1].title;
const title = createElement("div","Fyrirsogn");
const txt = appendChild(title,"p","title");
addTextToNode(txt,bunny);
main.appendChild(title);

/************************  Video   ****************************/

const videoDiv = createElement("video", "videoDiv");
videoDiv.setAttribute("src", "videos/bunny.mp4");
videoDiv.setAttribute("width", "400");
main.appendChild(videoDiv);

/************************ Play Button ****************************/


const playDiv = createElement("img", "img1");
playDiv.setAttribute("src","/img/play.svg");
appendChild(playDiv,"button","playDiv");
main.appendChild(playDiv);

/*****************Effect for play Button***********************/
playDiv.addEventListener('click', function () {
  console.log("button has been pressed");
  videoDiv.play();
});
/*************** pause button *********************/











const textpause = "Pause";
const pauseDiv = createElement("button", "pause");
//buttonDiv.setAttribute("src","img/play.svg");
const nodepause = appendChild(pauseDiv,"button","pauseDiv");
addTextToNode(nodepause,textpause);
pauseDiv.setAttribute("width","200");
main.appendChild(pauseDiv);

/**************** Effect for Pause Button ***********************/
pauseDiv.addEventListener('click', function () {
  console.log("button has been pressed");
  videoDiv.pause();
});
/**************** Mute Button **********************************/

const textMute = "Mute";
const muteDiv = createElement("buttoon", "buttonDiv");
//buttonDiv.setAttribute("src","img/play.svg");
const nodeMute = appendChild(muteDiv,"button","muteDiv");
addTextToNode(nodeMute,textMute);
muteDiv.setAttribute("width","200");
main.appendChild(muteDiv);

/**************** Effect for Muse Button ***********************/
muteDiv.addEventListener('click', function () {
  console.log("button has been pressed");
  videoDiv.muted=true;



});

/************************ Unmute Button*********************************/


const textUnMute = "UnMute";
const UnmuteDiv = createElement("buttoon", "buttonDiv");
//buttonDiv.setAttribute("src","img/play.svg");
const nodeUnMute = appendChild(UnmuteDiv,"button","UnmuteDiv");
addTextToNode(nodeUnMute,textUnMute);
UnmuteDiv.setAttribute("width","200");
main.appendChild(UnmuteDiv);

/**************** Effect for unMute Button ***********************/
UnmuteDiv.addEventListener('click', function () {
  console.log("button has been pressed");
videoDiv.muted=false;

});

/********************** Fast Forward Button ********************************/

const textForward = " --> ";
const forwardDiv = createElement("buttoon", "buttonDiv");
//buttonDiv.setAttribute("src","img/play.svg");
const nodeForward = appendChild(forwardDiv,"button","forwardDiv");
addTextToNode(nodeForward,textForward);
forwardDiv.setAttribute("width","200");
main.appendChild(forwardDiv);

/**************** Effect for Forward Button ***********************/
forwardDiv.addEventListener('click', function () {
  console.log("button has been pressed");
  videoDiv.currentTime = videoDiv.currentTime+3;
});

/********************** Fast Back Button********************************/

const textBack = " <-- ";
const BackDiv = createElement("buttoon", "buttonDiv");
//buttonDiv.setAttribute("src","img/play.svg");
const nodeBack = appendChild(BackDiv,"button","BackDiv");
addTextToNode(nodeBack,textBack);
BackDiv.setAttribute("width","200");
main.appendChild(BackDiv);

/**************** Effect for Back Button ***********************/
BackDiv.addEventListener('click', function () {
  console.log("button has been pressed");
  videoDiv.currentTime = videoDiv.currentTime-3;
});
/*********************** Full Button****************************/

const textFull = " + ";
const fulDiv = createElement("buttoon", "buttonDiv");
//buttonDiv.setAttribute("src","img/play.svg");
const nodeFul = appendChild(fulDiv,"button","fulkDiv");
addTextToNode(nodeFul,textFull);
fulDiv.setAttribute("width","200");
main.appendChild(fulDiv);
/************************ Effect Full screen ***********************/
fulDiv.addEventListener('click', function () {
  const requestFullScreen = videoDiv.requestFullscreen ||
  videoDiv.msRequestFullscreen || videoDiv.mozRequestFullScreen
  || videoDiv.webkitRequestFullscreen;
  requestFullScreen.call(videoDiv);
  });
}

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
