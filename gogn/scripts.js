// JavaScript source code
document.write("Hallo!");

fetch('videos.json')
  .then(response => response.json())
  .then(data => {
    this.videos = data;
    console.log(videos);
  })
  .catch(error => console.log("We failed"));