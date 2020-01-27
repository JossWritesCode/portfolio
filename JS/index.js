let navWrapper = document.querySelector(".nav-wrapper");
let navToogler = document.querySelector(".nav-toogler");
let navigation = document.querySelector(".navigation");

navToogler.addEventListener("click", function(event) {
  navWrapper.classList.toggle("active");
});

if (!navWrapper.classList.contains("active")) {
  navigation.style.maxWidth = "100vw";
} else {
  navigation.style.maxWidth = "40px";
}

const processForm = form => {
  const data = new FormData(form);
  data.append("form-name", "contact");
  fetch("/", {
    method: "POST",
    body: data
  })
    .then(() => {
      form.innerHTML = `<div class="form--success">Thank you for your email! I'll get in touch with you shortly.</div>`;
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
