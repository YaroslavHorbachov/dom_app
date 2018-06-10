/* Create constants */
const $ = document.querySelector.bind(document)
const create = document.createElement.bind(document);
const root = $('.root');
const input = create('input');
const text = create('p');

/* Configure elements */

input.type = 'text';
input.placeholder = 'Put your name';

text.innerText = 'Dimon'



/* Bind listeners  */

const listener = (event) => {
    text.innerText = event.target.value;
}

input.addEventListener('input', listener);

/*  Initialize  */

root.appendChild(input);
root.appendChild(text)
