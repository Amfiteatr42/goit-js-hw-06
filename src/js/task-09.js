function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bgColorDisplayEl = document.querySelector(".color");
const bgChangeBtnEl = document.querySelector(".change-color");

bgChangeBtnEl.addEventListener("click", () => {
  document.body.style.backgroundColor = getRandomHexColor();
  bgColorDisplayEl.textContent = getRandomHexColor();
});
