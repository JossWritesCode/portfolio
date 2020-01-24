let navWrapper = document.querySelector(".nav-wrapper");
let navToogler = document.querySelector(".nav-toogler");

// let myBtn = document.getElementById("myBtn");
// myBtn.href = "#section-portfolio";

// let body = document.body,
//   html = document.documentElement;

// let height = Math.max(
//   body.scrollHeight,
//   body.offsetHeight,
//   html.clientHeight,
//   html.scrollHeight,
//   html.offsetHeight
// );

navToogler.addEventListener("click", function(event) {
  navWrapper.classList.toggle("active");
});
