// JavaScript source code
/**
 * Tekur inn element og classname sem strin
 * @param {String} element
 * @param {String} className
* @returns node
 */
 main = document.querySelector('main');
function createElement(element, className = '') {
  const div = document.createElement(element);
  div.setAttribute('class', className);
  return div;
}
function errormsg(str){
  const errorTitle = createElement('div', 'Fyrirsogn');
  const errorTxt = appendChild(errorTitle, 'h3', 'errorTitle');
  addTextToNode(errorTxt, "Myndbandaleigan");
  main.appendChild(errorTitle);

  const errorskilabod = createElement("div","errorSkilabod");
  const errorB = appendChild(errorskilabod,"span","errorskilabod");
  addTextToNode(errorB, str);
  main.appendChild(errorskilabod);
}
/**
 *
 * @param {Node} node
 * @param {String} elementType
 * @param {String} className
* @returns {Node} appended with newly created div.
 */
function appendChild(node, elementType, className = '') {
  const div = document.createElement(elementType);
  div.setAttribute('class', className);
  return node.appendChild(div);
}
/**
 *
 * @param {Node} node
 * @param {String} text
* @returns node appended with text.
 */
function addTextToNode(node, text) {
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
    for (let i = 0; i < categoryVideoIds.length; i += 1) {
      if (categoryVideoIds[i] === entryInArray.id) {
        return true;
      }
    }
    return false;
  });
  return filteredVideoArray;
};
/**
 * Main fall sem keyrir allt skjalid
* Getur ekki keyrt nema ef data er parsed fra init.
 * @param {JSON} data
 */
function runTheWorld(data) {
  // const container = main.appendChild(createElement('div', 'gridd'));
  const container = appendChild(main, 'div', 'gridd');
  /* Creating header */
  const containerHeader = appendChild(container, 'header');
  const headerH2 = appendChild(containerHeader, 'h2', 'title');
  addTextToNode(headerH2, 'Myndbandaleigan');
  const { categories } = data;
  const { videos } = data;

  /**
 * map til ad iterate i gegnum category.
* Tekur a moti Category object.
 * @param {Object} Category
 * lika, eg disablea eslint i mappinu her fyrir nedan af tvi ad:
  *hvorug map eiga ad skila einhverju
  */
  /* eslint-disable */
  categories.map((category) => {
    const filteredVideos = getVideosForCategory(category.videos, videos);

    // create header for category
    const h2 = appendChild(container, 'h2', 'category');
    addTextToNode(h2, category.title);
    const categoryContainer = appendChild(container, 'div', 'flex-Line');

    // Map to iterate over category videos
    filteredVideos.map((video, index) => {
      const boxContainer = createElement('div', 'flex-Line-Box');

      // Kallar a Date fallid til ad bua til timann
      const videoCreated = daysSinceCreated(video.created);

      // Create video div
      const videoContainer = appendChild(categoryContainer, 'div', 'flex-Line-item');
      videoContainer.appendChild(boxContainer);

      // create 'a' element and add image to it.
      const aHref = createElement('a');
      aHref.setAttribute('href', `videos.html?id=${index}`);
      const anImg = createElement('img');
      anImg.setAttribute('src', video.poster);
      aHref.appendChild(anImg);
      boxContainer.appendChild(aHref);

      // AppendNation
      const durDiv = appendChild(boxContainer, 'div', 'durationDiv');
      const videoTitle = appendChild(boxContainer, 'p', 'flex-Line-title');
      const videoDate = appendChild(boxContainer, 'p', 'flex-Line-daysAgo');
      addTextToNode(durDiv, duration(video.duration));
      addTextToNode(videoTitle, video.title);
      addTextToNode(videoDate, videoCreated);
    });
  });
  /* eslint-enable */
}
/**
 * .
 * @param {int} seconds
 * @returns formatted seconds for video player
 */
function duration(seconds) {
  let x = Math.floor(seconds / 60);
  let y = seconds % 60;
  if (x < 10) {
    x = (`0${x}`);
  }
  if (y < 10) {
    y = (`0${y}`);
  }
  return (`${x}:${y}`);
}
/**
 * Fall sem tekur inn sekundur fra videos.json og skilar
* tima muninum a deginum i dag og tegar myndbandid var buid til
 * @param {int} created
 * @returns {String}
 */
function daysSinceCreated(created) {
  const currDate = new Date();
  const currmilli = currDate.getTime();
  const remaining = (currmilli - created);
  /*  Dagar */
  const totalSecs = remaining / 1000;
  const days = Math.floor(totalSecs / (60 * 60 * 24));
  if (days > 365 && days < 730) {
    return (`fyrir ${Math.floor(days / 365)}  ári síðan`);
  }
  if (days > 365) {
    return (`fyrir ${Math.floor(days / 365)} árum síðan`);
  }
  if (days > 30 && days < 60) {
    return (`fyrir ${Math.floor(days / 30)} mánuði síðan`);
  }
  if (days > 30) {
    return (`fyrir ${Math.floor(days / 30)} mánuðum síðan`);
  }
  if (days > 7 && days < 14) {
    return (`fyrir ${Math.floor(days / 7)} viku síðan`);
  }
  if (days > 7) {
    return (`fyrir ${Math.floor(days / 7)}  vikum síðan`);
  }
  if (days > 1) {
    return (`fyrir ${days} dögum síðan`);
  }
  if (days === 1) {
    return (`fyrir ${days} degi síðan`);
  }
  // klst
  const hours = Math.floor(totalSecs / 3600) % 24;
  if (hours < 25) {
    return (`fyrir ${hours} klukkustundum síðan`);
  }
  // minutur
  const minutes = Math.floor(totalSecs / 60) % 60;
  if (minutes < 61) {
    return (`fyrir ${minutes} mínutum síðan`);
  }
  // Sek
  const seconds = totalSecs % 60;
  if (minutes < 61) {
    return (`fyrir ${seconds} sekúndum síðan`);
  }
  return {};
}
// Load the json data and then run the world
async function init() {
  const response = await fetch('videos.json');
  errormsg("Hleð inn gögnum ...");
  await response.json()
    .then(jsonData => runTheWorld(jsonData))
    .catch(error => errormsg('Gat ekki hlaðið inn gögnum'));
}
init();
