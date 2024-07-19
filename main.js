const form = document.querySelector("#signup-form");
const firstNameInput = form.querySelector("#first-name");
const lastNameInput = form.querySelector("#last-name");
const emailInput = form.querySelector("#email");
const passwordInput = form.querySelector("#password");

const EMAIL_REGEX = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  firstName = firstNameInput.value.trim();
  lastName = lastNameInput.value.trim();
  email = emailInput.value.trim();
  password = passwordInput.value.trim();

  firstNameInput.parentElement.classList.toggle("error", firstName.length < 1);
  lastNameInput.parentElement.classList.toggle("error", lastName.length < 1);
  emailInput.parentElement.classList.toggle(
    "error",
    email.length < 1 || !EMAIL_REGEX.test(email)
  );
  passwordInput.parentElement.classList.toggle("error", password.length < 1);
});
