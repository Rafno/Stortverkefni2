// JavaScript source code
"use strict";

const createElement = function(element, className = "") {
  const div = document.createElement(element);
  div.setAttribute("class", className);
  return div;
}

const appendChild = function (node, elementType, className = "") {
  // main.appendChild(createElement("div", "gridd"));
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
  // https://docs.microsoft.com/en-us/scripting/javascript/reference/filter-method-array-javascript
  const filteredVideoArray = videos.filter((entryInArray) => {
    for (let i = 0; i < categoryVideoIds.length; i++) {
      if (categoryVideoIds[i] === entryInArray.id) {
        return true;
      }
    }
    return false;
  });
  return filteredVideoArray;
  /*
   return videos.filter((video) => {
      if (category.videos.includes(video.id)) {
          return true;
        }
        return false;
      })
  */
}

function runTheWorld(data) {
  console.log('let the world begin!');
  console.log(data);
  const main = document.querySelector("main");
  // const container = main.appendChild(createElement("div", "gridd"));
  const container = appendChild(main, "div", "gridd");

  /* Creating header */
  const containerHeader = container.appendChild(createElement("header"));
  addTextToNode(containerHeader, "Myndbandaleigan");

  /* Map over all categories */
  /* for (let i = 0; i < data.categories.length; i++) {
    const category = data.categories[i];
    const h2 = container.appendChild(createElement("h2", "category"));
    h2.appendChild(document.createTextNode(category.title));
    const categoryContainer = container.appendChild(createElement("div", "flex-Line"));

    // Map over videos
    for (let j = 0; j < data.categories[i].videos.length; j++) {
      const videoContainer = categoryContainer.appendChild(createElement("div", "flex-line-item"));
    }
  } */

  const categories = data.categories;
  const videos = data.videos;

  // Map to iterate over categories
  categories.map((category) => {
    const filteredVideos = getVideosForCategory(category.videos, videos);

    // create header for category
    const h2 = appendChild(container, "h2", "category");
    addTextToNode(h2, category.title);
    // h2.appendChild(document.createTextNode(category.title));
    
    // create category div
    const categoryContainer = appendChild(container, "div", "flex-Line");2
    console.log('Has', filteredVideos.length, 'videos.');

    // Map to iterate over category videos
    filteredVideos.map((video, index) => {
      // Create video div
      const videoContainer = appendChild(categoryContainer, "div", "flex-line-item");
      const videoTitle = appendChild(videoContainer, "p", "flex-line-title");
      videoTitle.appendChild(document.createTextNode(video.title));
      console.log('video', index + 1, 'name =', video.title);
    });
  });
}

// Load the json data and then run the world
async function init() {
  let response = await fetch('videos.json');
  await response.json()
    .then(jsonData => runTheWorld(jsonData))
    .catch(error => { console.log(error); return [] });
}

init();