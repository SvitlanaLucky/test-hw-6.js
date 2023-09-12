const refs = {
  input: document.querySelector('#font-size-control'),
  span: document.querySelector('#text'),
};

console.dir(refs.span);

refs.input.addEventListener('input', onChangeTextSize);

function onChangeTextSize(event) {
  refs.span.style.fontSize = event.currentTarget.value + 'px';
}
