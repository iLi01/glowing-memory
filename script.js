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

//slideshow of modal pages
let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  let i;
  let x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

//changing the src of the img if in mobile / desktop mode
if (window.screen.width <= 600 ) {
  // alert('testing')
  document.getElementById("container-event_img1").src="https://placehold.jp/150x80.png";
  document.getElementById("container-event_img2").src="https://placehold.jp/150x80.png";
  document.getElementById("container-event_img3").src="https://placehold.jp/150x80.png";
} ;