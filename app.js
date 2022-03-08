const coloriDOM = document.querySelector('.colori')
const numeriDOM = document.querySelector('.numeri')
const oggettiDOM = document.querySelector('.oggetti')
const listDOM = document.querySelector('.list')

function appendTo(DOMelement) {
  const element = listDOM.firstElementChild;
  DOMelement.appendChild(element);
}

coloriDOM.addEventListener('click', () => {
  appendTo(coloriDOM);
})

numeriDOM.addEventListener('click', () => {
  appendTo(numeriDOM);
})

oggettiDOM.addEventListener('click', () => {
  appendTo(oggettiDOM);
})