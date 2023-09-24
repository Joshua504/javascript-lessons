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
let updatedData = [];

window.addEventListener('load', async function () {
  await fetch('http://universities.hipolabs.com/search?country=United+States&limit=50')
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
          <ion-icon class="trash" onClick="deleteData('${school.name}')" name="trash-outline"></ion-icon>
        </div>
      </section>`
      });
    });
});

function handleSearch() {
  console.log('fixedData: ', fixedData);
  const inputEl = document.querySelector('.search')
  console.log('inputEl: ', inputEl.value);
  updatedData = fixedData.filter((element) => element.name.includes(inputEl.value));
  console.log('search: ', updatedData);
  bodyEl.innerHTML = '';
  updatedData.forEach(school => {
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
          <ion-icon class="trash" onClick="deleteData('${school.name}')" name="trash-outline"></ion-icon>
        </div>
      </section>`
  });
}

function deleteData(school) {
  // Get the index of the clicked element
  const index = fixedData.findIndex(s => s.name === school);

  // Remove the element from the array
  // Deep clone fixed Data array
  updatedData = updatedData.length > 0 ? updatedData : fixedData.map(school => ({ ...school }));

  updatedData = updatedData.slice(0, index).concat(updatedData.slice(index + 1));

  //save to a fixed arrray for search
  fixedData = []
  updatedData.forEach(single => {
    fixedData.push(single)
  })
  // Re-render the HTML
  bodyEl.innerHTML = '';
  updatedData.forEach(school => {
    // existing code to render each school
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
          <ion-icon class="trash" onClick="deleteData('${school.name}')" name="trash-outline"></ion-icon>
        </div>
      </section>`
  });

}

function handleReset() {
  // Reset search filters and data
  // Clear search input
  document.querySelector('.search').value = '';

  // Reset search array
  updatedData = []; 

  // Reload page
  window.location.reload();

}

