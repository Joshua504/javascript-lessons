/* -------------------------------- cat fact -------------------------------- */
// const display = document.querySelector('.show');
// const button = document.querySelector('.btn');

// const getItems = async () => {
//   const response = await fetch('https://catfact.ninja/fact');
//   const result = await response.json();

//   display.textContent = result.fact;
// };

// const handleClick = () => {
//   getItems();
// }

/* ----------------------------- college search ----------------------------- */

const deletEl = document.querySelector('.trash')
const bodyEl = document.querySelector('.cont-container')
console.log('bodyEl: ', bodyEl);


window.addEventListener('load', async function () {
  await fetch('http://universities.hipolabs.com/search?country=United+States&limit=100')
    .then(response => response.json())
    .then(data => {
      data.forEach(school => {
        bodyEl.innerHTML += `   
      <section class="content">
        <div>
          <h3>name - <span>${school.name}</span></h3>
          <h3>website - <a href=""></a></h3>
          <h3>domain - <span></span></h3>
          <h3>country - <span></span></h3>
        </div>
        <div>
          <ion-icon class="trash" name="trash-outline"></ion-icon>
        </div>
      </section>`
      });
    });
  });

function getAllSchool() {
  
}