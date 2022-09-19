const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

// const listCreator = ingredients.map((ingredient) => {
//   const ingredientsItem = document.createElement("li");
//   ingredientsItem.textContent = ingredient;
//   ingredientsItem.classList.add("item");
//   return ingredientsItem;
// });

// ingredientsList.append(...listCreator);

const listCreator = (itemNames) => {
  return itemNames.map((ingredient) => {
    const ingredientsItem = document.createElement("li");
    ingredientsItem.textContent = ingredient;
    ingredientsItem.classList.add("item");
    return ingredientsItem;
  });
};

ingredientsList.append(...listCreator(ingredients));
