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
  document.getElementById("container-event_img1").src="./assets/gallery-kite-events-mboile.jpg";
  document.getElementById("container-event_img2").src="./assets/types-of-kites-mobile.jpg";
  document.getElementById("container-event_img3").src="./assets/kite-picnic-mobile.jpg";
} ;

//weather api
const searchBtn = document.getElementById("search-btn_weather");
searchBtn.addEventListener("click", showData)

function showData() {
  const cityName = document.getElementById("inputField").value;
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=de9fca4c28fcfa367fb01b6cc7abd9d2`;

  fetch(api)
  .then(res => res.json())
  .then(data => {
      // const city = data.name;
      const temp = data.main.temp;
      const weather = data.weather[0].main;
      const icon = data.weather[0].icon;

      const celciusTemp = Math.round(temp - 273.15);

      // document.getElementById("city").innerText = city;
      document.getElementById("temp").innerText = celciusTemp;
      document.getElementById("weather").innerText = weather;
      document.getElementById("icon").setAttribute("src", `http://openweathermap.org/img/wn/${icon}@4x.png`);
  })
  .catch(err => console.log(err))
}

document.getElementById("inputField").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
      document.getElementById("searchBtn").click();
  }
})