const refs = {
  decrement: document.querySelector('[data-action="decrement"]'),
  increment: document.querySelector('[data-action="increment"]'),
  value: document.querySelector('#value'),
};

let counterValue = 0;

refs.decrement.addEventListener('click', onReduce);
refs.increment.addEventListener('click', onIncrease);

function onReduce() {
  counterValue -= 1;
  refs.value.textContent = counterValue;
}

function onIncrease() {
  counterValue += 1;
  refs.value.textContent = counterValue;
}
