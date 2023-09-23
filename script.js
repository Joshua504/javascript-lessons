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

const deletEl = document.querySelectorAll('.trash')
const bodyEl = document.querySelector('.cont-container')

let fixedData = [];

window.addEventListener('load', async function () {
  await fetch('http://universities.hipolabs.com/search?country=United+States&limit=20')
    .then(response => response.json())
    .then(data => {
      //save to a fixed arrray for search
      data.forEach(single => {
        fixedData.push(single)
      })

      //show fetched data
      data.forEach(school => {
        bodyEl.innerHTML += `   
      <section class="content">
        <div>
          <h3>name - <span>${school.name}</span></h3>
          <h3>website -
            <a href="${school.web_pages}"target="blank">
              ${school.web_pages}
            </a>
          </h3>
          <h3>domain - <span>${school.domains}</span></h3>
          <h3>country - <span>${school.country}</span></h3>
        </div>
        <div>
          <ion-icon class="trash" name="trash-outline"></ion-icon>
        </div>
      </section>`
      });
    });
});

function handleSearch() {
  console.log('fixedData: ', fixedData);
  const inputEl = document.querySelector('.search')
  console.log('inputEl: ', inputEl.value);
  let search = fixedData.filter((element) => element.name.includes(inputEl.value));
  console.log('search: ', search);
  bodyEl.innerHTML = '';
  search.forEach(school => {
    bodyEl.innerHTML += `
      <section class="content">
        <div>
          <h3>name - <span>${school.name}</span></h3>
          <h3>website -
            <a href="${school.web_pages}"target="blank">
              ${school.web_pages}
            </a>
          </h3>
          <h3>domain - <span>${school.domains}</span></h3>
          <h3>country - <span>${school.country}</span></h3>
        </div>
        <div>
          <ion-icon class="trash" name="trash-outline"></ion-icon>
        </div>
      </section>`
  });
}