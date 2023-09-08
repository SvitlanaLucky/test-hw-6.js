const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');
const newElement = [];

for (const obj of ingredients) {
  const element = document.createElement('li');
  element.textContent = obj;
  element.classList.add('item');

  newItem.push(element);
}

list.append(...newItem);
