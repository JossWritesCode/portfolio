let navWrapper = document.querySelector(".nav-wrapper");
let navToogler = document.querySelector(".nav-toogler");
let seeMyWork = document.querySelector(".portfolio-btn");
let mybutton = document.getElementById("myBtn");
console.log(seeMyWork, "seeMyWork");
navToogler.addEventListener("click", function(event) {
  navWrapper.classList.toggle("active");
});

function topFunction() {
  document.body.scrollBy(0, 1650); // For Safari
  document.documentElement.scrollBy(0, 1650);

  // look into "offsetTop" to set scrollBy to that
  // window.scrollBy(100, 0);// For Chrome, Firefox, IE and Opera
}
