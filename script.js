
const display = document.querySelector('.show');
const button = document.querySelector('.btn');

function getItems = fetch('https://catfact.ninja/fact')
.then(response => response.json())
  .then(result => {
    button.addEventListener('click', () => {
    display.textContent = result.fact
  } )
})

