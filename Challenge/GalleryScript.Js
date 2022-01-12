(() => {

const KEY = 'WWQ3cvXPMck6R2S7hmb72lDJY5mfjD6L8BOTnNIDA8M';    
let page =1;

async function displayImages() {
   const result = await fetch('https://api.unplash.com/photos/?client_id=${KEY}&{page}');
   const images = await result.json();

   const galleryElem = document.querySelector('.gallery');
  
   images.forEach(image => {
       const imgElem = document.createElement('img');
       imgElem.src = image.urls.small;


      galletyElem.appendChild(imgElem);
   });
}

function run(){
   displayImages();
}

run();
})();