const email = document.getElementById("mail");
const age = document.getElementById("age");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an e-mail address!");
    email.reportValidity();
  } else {
    email.setCustomValidity("");
  }
});

age.addEventListener("input", function (event) {
  if (age.validity.typeMismatch || (event.target.value < 0)) {
    age.setCustomValidity("I am expecting a number above zero!");
    age.reportValidity();
  } else {
    age.setCustomValidity("");
  }
});