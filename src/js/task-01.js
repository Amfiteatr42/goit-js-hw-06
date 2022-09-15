const categoriesEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesEl.length}`);

const animalsHeaderEL = document.querySelector(".item h2").textContent;
console.log(`Category: ${animalsHeaderEL}`);
console.log(`Elements: ${document.querySelector(".item ul").children.length}`);

const productsItemEl = document.querySelector(".item").nextElementSibling;
const productsHeaderEL = productsItemEl.querySelector("h2").textContent;
console.log(`Category: ${productsHeaderEL}`);
console.log(`Elements: ${productsItemEl.lastElementChild.children.length}`);

const techItemEl = document.querySelector("#categories").lastElementChild;
const techHeaderEL = techItemEl.querySelector("h2").textContent;
console.log(`Category: ${techHeaderEL}`);
console.log(`Elements: ${techItemEl.lastElementChild.children.length}`);
