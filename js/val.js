const firstName = document.getElementById("first-name");

firstName.addEventListener("input", function (event) {
  if (firstName.validity.patternMismatch) {
    firstName.setCustomValidity("I am expecting at least 2 letters!");
    firstName.reportValidity();
  } else {
    firstName.setCustomValidity("");
  }
});

const lastName = document.getElementById("last-name");

lastName.addEventListener("input", function (event) {
  if (lastName.validity.patternMismatch) {
    lastName.setCustomValidity("I am expecting at least 2 letters!");
    lastName.reportValidity();
  } else {
    lastName.setCustomValidity("");
  }
});

const area = document.getElementById("area-code");


area.addEventListener("input", function (event) {
  if (area.validity.patternMismatch) {
    area.setCustomValidity("I am expecting 3 numbers!");
    area.reportValidity();
  } else {
    area.setCustomValidity("");
  }
});
