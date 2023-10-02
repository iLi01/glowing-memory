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
window.onclick = function(event) {
  if (event.target == modal) {
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
// Select the button that will expand the navigation
const navExpandButton = document.querySelector('#nav-expand-button')

// select the element that is your navigation
const nav = document.getElementById('main-nav')


// create a function to tell the 
// browser what to do when the button is clicked
function handleClick() {
    
    // toggle a class of 'open' on the nav element, this will 
    // change the visual style to `display: flex;` from `display: none;`
    nav.classList.toggle('open')
    

    // get the state of the 'aria-expanded' attribute
    const expandedState = nav.getAttribute('aria-expanded')
        
    // set the attribute of 'aria-expanded' to the opposite of what it currently is
    nav.setAttribute('aria-expanded', !eval(expandedState))

};


// tell the browser to listen for a click event 
// and to run "handleClick" when it is clicked
navExpandButton.addEventListener('click', handleClick)



