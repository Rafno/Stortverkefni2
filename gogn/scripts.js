// JavaScript source code

/**
 * scripts.js tekur inn videos.json og gefur okkur aðgang
*  Sem fremur að við fáum að bíða eftir videos json.
 */

/*
* fetch fall sem sækir videos.json og parsear það fyrir okkur.
* Helgi, stop trying to make 'fetch' happen, it's not going to happen.
*/
function thatIsSoFetch() {
  return fetch('videos.json').then(function (data) {
    return data.json();
  }).then(function (json) {
    return json;
  });
}
/*Þegar thatIsSoFetch er búið að keyra, afþví það er async, þá keyrir restin af kóðanum.
*Annars náum við aldrei í JSON.
*/

function runIt() {
  thatIsSoFetch().then(function (result) {
    var days = parseInt(result.videos[0].created);
    s = result.videos[0].title;
    console.log(days);
  });
}
runIt();
/*----------Ekki kóða neitt sem bíður ekki eftir thatIsSoFetch!!!---------------*/

