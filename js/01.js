const categories = document.querySelector('#categories');
console.log(`Number of categories: ${categories.children.length}`);

const elementsOfCategory = document.querySelectorAll('.item');

elementsOfCategory.forEach(item => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
