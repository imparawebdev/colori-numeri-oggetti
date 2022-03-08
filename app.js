const colori = document.querySelector('.colori')
const numeri = document.querySelector('.numeri')
const oggetti = document.querySelector('.oggetti')

function appendColore() {
  const element = document.querySelector('.list').firstElementChild;
  document.querySelector('.colori').appendChild(element);
}

colori.addEventListener('click', () => {
  appendColore();
}) 

function appendNumeri() {
  const element = document.querySelector('.list').firstElementChild;
  document.querySelector('.numeri').appendChild(element);
}

numeri.addEventListener('click', () => {
  appendNumeri(); 
})


function appendOggetti() {
  const element = document.querySelector('.list').firstElementChild;
  document.querySelector('.oggetti').appendChild(element);
}

oggetti.addEventListener('click', () => {
  appendOggetti();
})
