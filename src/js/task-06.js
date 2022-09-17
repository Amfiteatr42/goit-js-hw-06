const inputEl = document.querySelector("#validation-input");
const requiredInputLength = inputEl.getAttribute("data-length");

inputEl.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length == requiredInputLength) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
    return;
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
});
