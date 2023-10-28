// modal pop-out
// Get the modal
const modal = document.getElementById("my-modal");

// Get the button that opens the modal
const btn = document.getElementById("events-btn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}

// slideshow hero-img
let index = 0;

displayImages();

function displayImages() {
  let i;
  const images = document.getElementsByClassName("slideshow-img");
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  index++;
  
  if (index > images.length) {
    index = 1;
  }
  images[index - 1].style.display = "block";

  setTimeout(displayImages, 4000); // Change image every 3.7 seconds
}

// nav-bar
const button = document.getElementById("nav-expand-button");
const nav = document.getElementById("main-nav");

button.addEventListener('click', () => {
  nav.classList.toggle('open');
});


// document.querySelector('#beer-button').addEventListener('click', function () {
//   fetch('https://api.punkapi.com/v2/beers/random')
//     .then((response) => {
//       return response.text();
//     })
//     .then((myContent) => {
//       document.querySelector('.par').innerHTML = myContent;
//       document.querySelector('.par').classList.add('box');
//     });

// }, false);