const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsUl = document.querySelector('#ingredients');

const ingredientsLi = ingredients.map( element => {
  const LiEl = document.createElement('li');
  LiEl.classList.add('item');
  LiEl.textContent = element;
  return LiEl;
})

ingredientsUl.append(...ingredientsLi);
console.log(ingredientsUl);



