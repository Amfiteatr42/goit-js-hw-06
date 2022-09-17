const rangeInputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

rangeInputEl.addEventListener("input", (event) => {
  const fontSize = event.currentTarget.value;
  textEl.style.fontSize = `${fontSize}px`;
  // textEl.style.fontSize = `${rangeInputEl.value}px`;
});
