const userInputEl = document.querySelector("#controls input");
const createBtnEl = document.querySelector("[data-create]");
const destroyBtnEl = document.querySelector("[data-destroy]");
const boxEl = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onClickCreateBtnHandler() {
  function createBoxes(amount) {
    let markupBoxes = "";
    let boxSizes = 30;

    for (let i = 0; i < amount; i++) {
      let bgRandomColor = getRandomHexColor();

      markupBoxes += `<div style="width:${boxSizes}px; height:${boxSizes}px; background-color:${bgRandomColor}">${
        i + 1
      }</div>`;
      boxSizes += 10;
    }
    return markupBoxes;
  }
  // userInputEl.reset();
  boxEl.insertAdjacentHTML("beforeend", createBoxes(userInputEl.value));
}

destroyBtnEl.addEventListener("click", () => {
  boxEl.innerHTML = "";
});

createBtnEl.addEventListener("click", onClickCreateBtnHandler);
