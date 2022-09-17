const loginForm = document.querySelector(".login-form");
const labelsEl = document.querySelectorAll("label");

loginForm.addEventListener("submit", loginFormSubmitHandler);

function loginFormSubmitHandler(e) {
  e.preventDefault();
  const {
    elements: { email, password },
  } = e.currentTarget;
  // const emailValue = e.currentTarget.elements.email.value;

  if (email.value === "" || password.value === "") {
    alert("You must fill all the fields!");
  }

  const userInputData = [...labelsEl].reduce((accum, label, i) => {
    accum[label.innerText] = e.currentTarget.elements[i].value;
    return accum;
  }, {});
  console.log(userInputData);

  loginForm.reset();
}
