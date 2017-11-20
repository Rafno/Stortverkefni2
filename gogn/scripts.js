// JavaScript source code
"use strict";

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

/**
 * @param {array of video id numbers} categoryVideoIds
 * @param {array of video objects} videos
 * @returns {array of video objects}
 */
const getVideosForCategory = (categoryVideoIds, videos) => {
  //https://docs.microsoft.com/en-us/scripting/javascript/reference/filter-method-array-javascript
  const filteredVideoArray = videos.filter((entryInArray) => {
    for (let i = 0; i < categoryVideoIds.length; i++) {
      if (categoryVideoIds[i] === entryInArray.id) {
        return true;
      }
    }
    return false;
  });
  return filteredVideoArray;

}

function runTheWorld(data) {
  console.log('let the world begin!');
  console.log(data);
  const main = document.querySelector("main");
  // const container = main.appendChild(createElement("div", "gridd"));
  const container = appendChild(main, "div", "gridd");
  /* Creating header */
  const containerHeader = appendChild(container, "header");
  const headerH2 = appendChild(containerHeader, "h2", "title");
  addTextToNode(headerH2, "Myndbandaleigan");
  const categories = data.categories;
  const videos = data.videos;

  // Map to iterate over categories
  categories.map((category) => {
    const filteredVideos = getVideosForCategory(category.videos, videos);

    //create header for category
    const h2 = appendChild(container, "h2", "category");
    addTextToNode(h2, category.title);
    const categoryContainer = appendChild(container, "div", "flex-Line");
    const seperator = appendChild(container, "div", "seperator");

    // Map to iterate over category videos
    filteredVideos.map((video, index) => {
      const leftyRighty = createElement("div", "");
      if (index % 2 === 0) {
        leftyRighty.setAttribute("Class", "flex-Line-Right");
      } else {
        leftyRighty.setAttribute("Class", "flex-Line-Left");
      }
      //By til timann
      const videoCreated = currDate(video.created);
      // Create video div
      const videoContainer = appendChild(categoryContainer, "div", "flex-Line-item");
      videoContainer.appendChild(leftyRighty);
      const aHref = createElement("a");
      aHref.setAttribute("href", "videos.html?id=" + index);
      const anImg = createElement("img");
      anImg.setAttribute("src", video.poster);
      const durDiv = appendChild(leftyRighty, "div", "durationDiv");
      aHref.appendChild(anImg);
      leftyRighty.appendChild(aHref);
      const videoTitle = appendChild(leftyRighty, "p", "flex-Line-title");
      const videoDate = appendChild(leftyRighty, "p", "flex-Line-daysAgo");
      console.log(video.duration);
      addTextToNode(durDiv, duration(video.duration));
      addTextToNode(videoTitle, video.title);
      addTextToNode(videoDate, videoCreated);
    });
  });
}
/**
 * TODO, klára.
 * @param {int} seconds
 * @returns formatted seconds for video player
 */

function currDate(created) {
  const currDate = new Date();
  const currmilli = currDate.getTime();
  const remaining = (currmilli - created);
  /*  Dagar */
  const totalSecs = remaining / 1000;
  const days = Math.floor(totalSecs / (60 * 60 * 24));
  if (days > 7) {
    return ("fyrir " + Math.floor(days / 7) + " vikum sidan");
  }
  if (days > 1) {
    return ("fyrir " + days + " dogum sidan ");
  }
  if (days === 1) {
    return ("fyrir " + days + " degi sidan ");
  }
  //klst
  const hours = Math.floor(totalSecs / 3600) % 24;
  if (hours < 25) {
    return ("fyrir " + hours + " klukkustundum sidan ");
  }
  //mínútur
  const minutes = Math.floor(totalSecs / 60) % 60;
  if (minutes < 61) {
    return ("fyrir " + minutes + " minutum sidan ");
  }
  //Sek
  const seconds = totalSecs % 60;
  if (minutes < 61) {
    return ("fyrir " + seconds + " sekundum sidan ");
  }
}
// Load the json data and then run the world
async function init() {
  let response = await fetch('videos.json');
  await response.json()
    .then(jsonData => runTheWorld(jsonData))
    .catch(error => { console.log(error); return [] });
}

init();