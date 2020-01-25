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

const processForm = form => {
  const data = new FormData(form);
  data.append("form-name", "contact");
  fetch("/", {
    method: "POST",
    body: data
  })
    .then(() => {
      form.innerHTML = `<div class="form--success">Almost there! Check your inbox for a confirmation e-mail.</div>`;
    })
    .catch(error => {
      form.innerHTML = `<div class="form--error">Error: ${error}</div>`;
    });
};

const emailForm = document.querySelector(".email-form");
if (emailForm) {
  emailForm.addEventListener("submit", e => {
    e.preventDefault();
    processForm(emailForm);
  });
}
