let navWrapper = document.querySelector(".nav-wrapper");
let navToogler = document.querySelector(".nav-toogler");
let seeMyWork = document.querySelector(".portfolio-btn");
console.log(seeMyWork, "seeMyWork");
navToogler.addEventListener("click", function(event) {
  navWrapper.classList.toggle("active");
});

seeMyWork.addEventListener("click", function(event) {
  document.window.scrollTo(1000, 1000);
});
