const coloriDOM = document.querySelector('.colori')
const numeriDOM = document.querySelector('.numeri')
const oggettiDOM = document.querySelector('.oggetti')
const listDOM = document.querySelector('.list')

const DOMelements = [
  coloriDOM,
  numeriDOM,
  oggettiDOM
]

// accoda il primo elemento della lista di elementi
// all'interno del div cliccato
function appendFirstItemTo(DOMelement) {
  const listElement = listDOM.firstElementChild;
  DOMelement.appendChild(listElement);
}

// aggiunge un listenere per 'click' a ciascun div
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

// aggiunge gli elementi di ciascun array alla lista
Object.keys(items).forEach(
  key => {
    const elements = items[key]
    elements.forEach(
      element => {
        const li = document.createElement('li')
        li.innerText = element
        listDOM.appendChild(li)    
      }
    )
  }
)