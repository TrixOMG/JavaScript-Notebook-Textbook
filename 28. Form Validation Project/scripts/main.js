// Get inputs
const firstName = document.getElementById(
  "first-name-input"
);
const lastName = document.getElementById("last-name-input");
const email = document.getElementById("email-input");
const password = document.getElementById("password-input");
const phone = document.getElementById("phone-input");
const bio = document.getElementById("bio-input");

// Get error paragraphs
const firstNameError = document.getElementById(
  "first-name-error"
);
const lastNameError = document.getElementById(
  "last-name-error"
);
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById(
  "password-error"
);
const phoneError = document.getElementById("phone-error");
const bioError = document.getElementById("bio-error");

//RegEx's
const firstNameRegEx = /^[a-zA-Z]{3,16}$/;
const lastNameRegEx = /^[a-zA-Z]{3,16}$/;
const emailRegEx =
  /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
const passwordRegEx = /^[a-zA-Z0-9_\-\.\@]{6,20}$/;
const phoneRegEx =
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
const bioRegEx = /^[a-z0-9_-]{8,50}$/;

function validate(){
  e.preventDefault();
  const validationArray = [];

}

function validateForm(e) {
  e.preventDefault();
  const validationArray = [];

  const inputsArray = [
    firstName,
    lastName,
    email,
    password,
    phone,
    bio,
  ];

  const errorMessagesArray = [
    firstNameError,
    lastNameError,
    emailError,
    passwordError,
    phoneError,
    bioError,
  ];

  const regexArray = [
    firstNameRegEx,
    lastNameRegEx,
    emailRegEx,
    passwordRegEx,
    phoneRegEx,
    bioRegEx,
  ];

  for (let i = 0; i < inputsArray.length; i++) {
    if (!inputsArray[i].value.match(regexArray[i])) {
      errorMessagesArray[i].style.display = "block";
      inputsArray[i].style.border = "2px solid #fd4841";
    } else {
      errorMessagesArray[i].style.display = "none";
      inputsArray[i].style.border = "2px solid gray";
      validationArray.push(true);
    }
  }

  if (!(validationArray.length === 6)) return;

  const allInputs = document.querySelectorAll("input");

  for (const input of allInputs) {
    input.style.border = "2px solid #21bf72";
  }
}
