function validateForm(e) {
  e.preventDefault();

  // Get inputs
  const firstName = document.getElementById(
    "first-name-input"
  );
  const lastName = document.getElementById(
    "last-name-input"
  );
  const email = document.getElementById("email-input");
  const password = document.getElementById(
    "password-input"
  );
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

  // Validate inputs

  // TODO
  // [ ] generate regex for each input
}
