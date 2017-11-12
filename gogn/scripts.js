// JavaScript source code


/**
 * scripts.js tekur inn videos.json og gefur okkur adgang
*  Sem fremur a� vi� faum a� bida eftir videos json.
 */
/*
* fetch fall sem saekir videos.json og parsear fyrir okkur.
*/
function thatIsSoFetch() {
  return fetch('videos.json').then(function (data) {
    return data.json();
  }).then(function (json) {
    return json;
  });
}

function runIt() {
  thatIsSoFetch().then(function (result) {
    var days = parseInt(result.videos[0].created);
    s = result.videos[0].title;
    console.log(days);
  });
}
runIt();
