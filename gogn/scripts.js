// JavaScript source code
<<<<<<< HEAD
/**
 * scripts.js tekur inn videos.json og gefur okkur a�gang
*  Sem fremur a� 
 */
=======
document.write("Hallo!");

<<<<<<< HEAD
fetch('videos.json')
  .then(response => response.json())
  .then(data => {
    this.videos = data;
    console.log(videos);
  })
  .catch(error => console.log("We failed"));
=======
>>>>>>> origin/master
/*
* fetch fall sem s�kir videos.json og parsear �a� fyrir okkur.
* Helgi, stop trying to make 'fetch' happen, it's not going to happen.
*/
function thatIsSoFetch() {
  return fetch('videos.json').then(function (data) {
    return data.json();
  }).then(function (json) {
    return json;
  });
}
/*�egar thatIsSoFetch er b�i� a� keyra, af�v� �a� er async, �� keyrir restin af k��anum.
*Annars n�um vi� aldrei � JSON.
*/

function runIt() {
  thatIsSoFetch().then(function (result) {
    var days = parseInt(result.videos[0].created);
    s = result.videos[0].title;
    //console.log(days);
  });
}
runIt();
/*----------Ekki k��a neitt sem b��ur ekki eftir thatIsSoFetch!!!---------------*/
>>>>>>> af9e384504bfd98977c64e4f654a018a2ac1ce08
