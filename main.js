const $ = document.querySelector;

const input = $('input');
const init = (fn) => input.addEventListener('input', fn);
const listener = (event) => console.log(event.target.value);

init(listener);