const LENGTH_PASSWORD_INPUT = document.getElementById("length");
const NUMBERS_CHECKBOX = document.getElementById("numbers");
const SYMBOLS_CHECKBOX = document.getElementById("symbols");
const UPPERCASE_CHECKBOX = document.getElementById("uppercase");
const LOWERCASE_CHECKBOX = document.getElementById("lowercase");
const PASSWORD = document.getElementById("password");
const CONTAINER = document.getElementById("container");
const COPY_BUTTON = document.getElementById("copy-button");
const REGENERATE_PASSWORD_BUTTON = document.getElementById("regenerate-button");

function generatePassword() {
  const LENGTH_PASSWORD = LENGTH_PASSWORD_INPUT.value;
  const INCLUDE_NUMBERS = NUMBERS_CHECKBOX.checked ? "0123456789" : "";
  const INCLUDE_SYMBOLS = SYMBOLS_CHECKBOX.checked ? "!@#$%^&*()" : "";
  const INCLUDE_UPPERCASE = UPPERCASE_CHECKBOX.checked
    ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    : "";
  const INCLUDE_LOWERCASE = LOWERCASE_CHECKBOX.checked
    ? "abcdefghijklmnopqrstuvwxyz"
    : "";
  const ALLOWED_CHARACTERS =
    INCLUDE_NUMBERS + INCLUDE_SYMBOLS + INCLUDE_UPPERCASE + INCLUDE_LOWERCASE;

  let result = "";

  for (let i = 0; i < LENGTH_PASSWORD; i++) {
    const RANDOM_INDEX = Math.floor(Math.random() * ALLOWED_CHARACTERS.length);
    result += ALLOWED_CHARACTERS.charAt(RANDOM_INDEX);
  }

  PASSWORD.value = result;
}

function copyPassword() {
  const PASSWORD_VALUE = PASSWORD.value;

  if (PASSWORD_VALUE) {
    navigator.clipboard
      .writeText(PASSWORD_VALUE)
      .then(() => {
        alert("Password copied to clipboard!");
      })
      .catch((error) => {
        console.error(`Failed to copy password: ${error}`);
      });
  }
}

CONTAINER.addEventListener("change", generatePassword);
LENGTH_PASSWORD_INPUT.addEventListener("input", generatePassword);
CONTAINER.addEventListener("click", (event) => {
  const TARGET = event.target;

  if (TARGET.parentNode === COPY_BUTTON) {
    copyPassword();
  }
  else if (TARGET.parentNode === REGENERATE_PASSWORD_BUTTON) {
    generatePassword();
  }
});

generatePassword();
