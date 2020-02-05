// or enable responsive functionality:

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
