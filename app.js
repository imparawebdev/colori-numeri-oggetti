const coloriDOM = document.querySelector('.colori')
const numeriDOM = document.querySelector('.numeri')
const oggettiDOM = document.querySelector('.oggetti')
const listDOM = document.querySelector('.list')

const DOMelements = [
  coloriDOM,
  numeriDOM,
  oggettiDOM
]

function appendFirstItemTo(DOMelement) {
  const listElement = listDOM.firstElementChild;
  DOMelement.appendChild(listElement);
}

DOMelements.forEach(
  element => element.addEventListener('click', () => {
    appendFirstItemTo(element)
  })
)

const items = {
  colori: ['Blu', 'Rosso', 'Giallo', 'Verde', 'Viola'],
  numeri: [3124, 845, 524, 24, 435, 98, 249, 1390, 3099, 58],
  oggetti: ['Casa', 'Chitarra', 'Computer', 'Sedia']
}

items.numeri.forEach(
  numero => {
    const numeroLi = document.createElement('li')
    numeroLi.innerText = numero
    listDOM.appendChild(numeroLi)
  }
)

items.colori.forEach(
  colore => {
    const coloreLi = document.createElement('li')
    coloreLi.innerText = colore
    listDOM.appendChild(coloreLi)
  }
)

items.oggetti.forEach(
  oggetto => {
    const oggettoLi = document.createElement('li')
    oggettoLi.innerText = oggetto
    listDOM.appendChild(oggettoLi)
  }
)
