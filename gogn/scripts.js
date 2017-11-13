// JavaScript source code


/**
 * scripts.js tekur inn videos.json og gefur okkur adgang
*  Sem fremur ad vid faum ad

bida eftir videos json.
 */
/*
* fetch fall sem saekir videos.json og parsear fyrir okkur.
* TODO, búa til INIT fall sem sendir request object og tekur inn tilbaka.
*/
function thatIsSoFetch() {
  return fetch('videos.json').then(function (data) {
    return data.json();
  }).then(function (json) {
    return json;
  });
}
/*
 * Þetta fall leyfir þér að skrifa kóða í því sem keyrir aðeins ef promise í fetch reynist satt.
 */
function runIt() {
  thatIsSoFetch().then(function (result) {
    var days = parseInt(result.videos[0].created);
    s = result.videos[0].title;
    console.log(days);
  });
}
runIt();
