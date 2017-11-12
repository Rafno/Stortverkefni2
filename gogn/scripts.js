// JavaScript source code


/**
 * scripts.js tekur inn videos.json og gefur okkur adgang
*  Sem fremur að við faum að bida eftir videos json.
 */
/*
* fetch fall sem saekir videos.json og parsear fyrir okkur.
* Helgi, stop trying to make 'fetch' happen, it's not going to happen.
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
