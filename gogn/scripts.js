// JavaScript source code
"use strict";

/**
 * scripts.js tekur inn videos.json og gefur okkur adgang
*  Sem fremur ad vid faum ad

bida eftir videos json.
 */
/*
* fetch fall sem saekir videos.json og parsear fyrir okkur.
* TODO, búa til INIT fall sem sendir request object og tekur inn tilbaka.
*/
const main = document.querySelector("main");
function makePic(imgSrcs) {
  const src = document.createElement("img");
  src.setAttribute("src", imgSrcs);
  return src;
}
function createElement( element, attribute){
  const div = document.createElement(element);
  div.setAttribute("class", attribute);
  return div;
}
/**
 * Byr til grid sem heldur utan um allt index hja okkur, baetir vid header, sem inniheldur
 * h2 sem hefur klasan category.
 *
 * grid
 *  ├ header
 *  │  └h2 - category
 *  ├ h2 - title
 *  └ div- flexLine
 */
const gridDiv = main.appendChild(createElement("div", "gridd"));
const header = gridDiv.appendChild(createElement("header", ""));
const h2Myndbandaleigan = header.appendChild(createElement("h2", "category"));
h2Myndbandaleigan.appendChild(document.createTextNode("Myndbandaleigan"));
const h2Title = gridDiv.appendChild(createElement("h2", "title"));
h2Title.appendChild(document.createTextNode("Nýleg Myndbönd"));

/**
* FlexLine1 heldur utan um fyrstu linuna okkar, thar sting eg inn 2 myndum.
 * asamt textanum sem er hardkodadur.
* Skipt nidur i 2 flex-Line-item thar sem mynd, title og daysAgo koma inn.
* TODO (Na ad leysa async vandarmal til ad saekja gogn ur videos.json)
* Fylgir alltaf sama formatti:
* bua til line ef ekki til
* bua til line item, vinstri eda haegri.
* baeta vid mynd
* svo title og daysAgo
*/
const flexLine1 = gridDiv.appendChild(createElement("div", "flex-Line"));

const flexLineItem1 = flexLine1.appendChild(createElement("div", "flex-Line-item"));
const flexLineLeft1 = flexLineItem1.appendChild(createElement("div", "flex-Line-Left"));

flexLineLeft1.appendChild(makePic("/videos/small.png"));

const pTitle1 = createElement("p", "flex-line-title");
flexLineLeft1.appendChild(pTitle1);
pTitle1.appendChild(document.createTextNode("PLACEHOLDER - Lego!"));
const pDaysAgo1 = createElement("p", "flex-line-daysAgo")
pDaysAgo1.appendChild(document.createTextNode("PLACEHOLDER - 300 ár síðan"));
flexLineLeft1.appendChild(pDaysAgo1);
/**
 * seinna flex-Line-item buid til.
 */
const flexLineItem2 = flexLine1.appendChild(createElement("div", "flex-Line-item"));
const flexLineRight1 = flexLineItem2.appendChild(createElement("div", "flex-Line-Right"));


flexLineRight1.appendChild(makePic("/videos/bunny.png"));

const pTitle2 = createElement("p", "flex-line-title");
flexLineRight1.appendChild(pTitle2);
pTitle2.appendChild(document.createTextNode("PLACEHOLDER-Bunny"));
const pDaysAgo2 = createElement("p", "flex-line-daysAgo")
pDaysAgo2.appendChild(document.createTextNode("PLACEHOLDER- 3 dögum fyrir krist"));
flexLineRight1.appendChild(pDaysAgo2);

/*
* div seperator gerdur sem heldur utan um linur fyrir okkur
* buum til header og naesta div sem heitir flex-line
*/
const seperatorDiv1 = gridDiv.appendChild(createElement("div", "seperator"));
const h2Kennslumyndbond = gridDiv.appendChild(createElement("h2", "category"));
h2Kennslumyndbond.appendChild(document.createTextNode("Kennslumyndbönd"));
const flexLine2 = gridDiv.appendChild(createElement("div", "flex-Line"));

/**
* Her eftir kemur kennslumyndbond, med nyju flex line, flex item. Sem fylgja sama formatti
* og tad sem var fyrir ofan.
*/

const flexLineItem3 = flexLine2.appendChild(createElement("div", "flex-Line-item"));
const flexLineRight2 = flexLineItem3.appendChild(createElement("div", "flex-Line-Right"));

flexLineRight2.appendChild(makePic("/videos/small.png"));

const pTitle3 = createElement("p", "flex-line-title");
flexLineRight2.appendChild(pTitle3);
pTitle3.appendChild(document.createTextNode("PLACEHOLDER - Lego!"));
const pDaysAgo3 = createElement("p", "flex-line-daysAgo")
pDaysAgo3.appendChild(document.createTextNode("PLACEHOLDER - 300 ár síðan"));
flexLineRight2.appendChild(pDaysAgo3);
/*
* Skiptum haegri og vinstri bara aftvi tad pirrar Rafnar -Helgi
*/
const flexLineItem4 = flexLine2.appendChild(createElement("div", "flex-Line-item"));
const flexLineLeft2 = flexLineItem4.appendChild(createElement("div", "flex-Line-Left"));

flexLineLeft2.appendChild(makePic("/videos/16-9.png"));

const pTitle4 = createElement("p", "flex-line-title");
flexLineLeft2.appendChild(pTitle4);
pTitle4.appendChild(document.createTextNode("PLACEHOLDER - Prufumyndband!"));
const pDaysAgo4 = createElement("p", "flex-line-daysAgo")
pDaysAgo4.appendChild(document.createTextNode("PLACEHOLDER - Trilljón ár síðan!"));
flexLineLeft2.appendChild(pDaysAgo4);
/*
* TODO(SKODA BETUR, EFLAUST BETRI LAUSN TIL EN AD BUA TIL SPES DIV.)
*/

const hvadErSingle = createElement("div", "single");
gridDiv.appendChild(hvadErSingle);

//eg vildi oska eg kynni a jquery til ad eg gaeti notad clone().

const flexLineItem5 = hvadErSingle.appendChild(createElement("div", "flex-Line-item"));
const flexLineRight3 = flexLineItem5.appendChild(createElement("div", "flex-Line-Right"));

flexLineRight3.appendChild(makePic("/videos/16-9.png"));

const pTitle5 = createElement("p", "flex-line-title");
flexLineRight3.appendChild(pTitle5);
pTitle5.appendChild(document.createTextNode("PLACEHOLDER - Prufumyndband!"));
const pDaysAgo5 = createElement("p", "flex-line-daysAgo")
pDaysAgo5.appendChild(document.createTextNode("PLACEHOLDER - 300 ár síðan"));
flexLineRight3.appendChild(pDaysAgo5);

/*
* div seperator gerdur sem heldur utan um linur fyrir okkur
* buum til header og naesta div sem heitir flex-line
*/
const seperatorDiv2 = gridDiv.appendChild(createElement("div", "seperator"));
const h2Skemmtimyndbond = gridDiv.appendChild(createElement("h2", "category"));
h2Skemmtimyndbond.appendChild(document.createTextNode("Skemmtimyndbönd"));
const flexLine3 = gridDiv.appendChild(createElement("div", "flex-Line"));

/**
* Her eftir kemur kennslumyndbond, med nyju flex line, flex item. Sem fylgja sama formatti
* og tad sem var fyrir ofan.
*/

const flexLineItem6 = flexLine3.appendChild(createElement("div", "flex-Line-item"));
const flexLineRight4 = flexLineItem6.appendChild(createElement("div", "flex-Line-Right"));

flexLineRight4.appendChild(makePic("/videos/bunny.png"));

const pTitle6 = createElement("p", "flex-line-title");
flexLineRight4.appendChild(pTitle6);
pTitle6.appendChild(document.createTextNode("PLACEHOLDER - Prufumyndband!"));
const pDaysAgo6 = createElement("p", "flex-line-daysAgo")
pDaysAgo6.appendChild(document.createTextNode("PLACEHOLDER - 300 ár síðan"));
flexLineRight4.appendChild(pDaysAgo6);

//<----------------Skipting a haegri og vinstri ---------left2----------->
const flexLineItem7 = flexLine3.appendChild(createElement("div", "flex-Line-item"));
const flexLineLeft3 = flexLineItem7.appendChild(createElement("div", "flex-Line-Left"));

flexLineLeft3.appendChild(makePic("/videos/16-9.png"));

const pTitle7 = createElement("p", "flex-line-title");
flexLineLeft3.appendChild(pTitle7);
pTitle7.appendChild(document.createTextNode("PLACEHOLDER - Prufumyndband!"));
const pDaysAgo7 = createElement("p", "flex-line-daysAgo")
pDaysAgo7.appendChild(document.createTextNode("PLACEHOLDER - 300 ár síðan"));
flexLineLeft3.appendChild(pDaysAgo7);


//<---------------Single and ready to mingle------------>
const singleDiv = createElement("div", "single");
gridDiv.appendChild(singleDiv);

const flexLineItem8 = singleDiv.appendChild(createElement("div", "flex-Line-item"));
const flexLineRight5 = flexLineItem8.appendChild(createElement("div", "flex-Line-Right"));
flexLineRight5.appendChild(makePic("/videos/16-9.png"));

const pTitle8 = createElement("p", "flex-line-title");
flexLineRight5.appendChild(pTitle8);
pTitle8.appendChild(document.createTextNode("PLACEHOLDER - Prufumyndband!"));
const pDaysAgo8 = createElement("p", "flex-line-daysAgo")
pDaysAgo8.appendChild(document.createTextNode("PLACEHOLDER - 300 ár síðan"));
flexLineRight5.appendChild(pDaysAgo8);

/**
 * Async, laga med hjalp
 */
async function fetchAsync() {
  let response = await fetch('videos.json');
  let data = await response.json();
  return data;
}

fetchAsync()
  .then(data => console.log(data))
  .catch(reason => console.log(reason.message))


/*function thatIsSoFetch() {
  return fetch('videos.json').then(function (data) {
    return data.json();
  }).then(function (json) {
    return json;
  });
}
*/
/*
 * Þetta fall leyfir þér að skrifa kóða í því sem keyrir aðeins ef promise í fetch reynist satt.
 */

 /*var videos = thatIsSoFetch().then(function (result) {
    const days = parseInt(result.videos[0].created);
  });
*/
