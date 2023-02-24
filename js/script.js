// "use strict";

const fetchData = () => {
  fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => loadData(data))
}

const loadData = datas => {
  console.log(datas)
  const cardContainer = document.getElementById('card-container');
  for (const data of datas) {
    const div = document.createElement('div');
    div.innerHTML = `
      <div class="card bg-base-300 shadow-xl hover:shadow-2xl overflow-hidden">
        <div class="card-body">
          <h2 class="card-title">${data.name.common}</h2>
          <button class="btn btn-outline">Read More...</button>
        </div>
        <img src="${data.flags.png}" />
      </div>
    `;
    cardContainer.appendChild(div);
  }
}

fetchData();

