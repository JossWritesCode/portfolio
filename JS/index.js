let navWrapper = document.querySelector(".nav-wrapper");
let navToogler = document.querySelector(".nav-toogler");

console.log(navToogler, "navToogler");
console.log(navWrapper, "navWrapper");
navToogler.addEventListener("click", function(event) {
  navWrapper.classList.toggle("active");
});
