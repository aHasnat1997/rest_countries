const fetchData = () => {
  fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => loadData(data))
}

const loadData = datas => {
  const cardContainer = document.getElementById('card-container');
  for (const data of datas) {
    const div = document.createElement('div');
    div.innerHTML = `
      <div class="card h-full bg-base-300 shadow-xl hover:shadow-2xl overflow-hidden">
        <div class="card-body">
          <h2 class="card-title">${data.name.common}</h2>
          <label id="modal-btn" onclick="loadCountryDetails('${data.cca2}')" for="my-modal" class="btn btn-outline">Read More...</label>
        </div>
        <img class="h-full" src="${data.flags.png}" />
      </div>
    `;
    cardContainer.appendChild(div);
  }

}

const loadCountryDetails = code => {
  const url = `https://restcountries.com/v3.1/alpha/${code}`;
  console.log(url);
  fetch(url)
    .then(res => res.json())
    .then(data => modal(data[0]))
}

const modal = data => {
  document.getElementById('flag').setAttribute('src', data.flags.png);
  document.getElementById('common').innerText = `Name : ${data.name.common}`;
  document.getElementById('official').innerText = `Official Name : ${data.name.official}`;
  document.getElementById('capital').innerText = `Capital : ${data.capital[0]}`;
  document.getElementById('region').innerText = `Region : ${data.region}`;
  document.getElementById('subregion').innerText = `Subregion : ${data.subregion}`;
  document.getElementById('startOfWeek').innerText = `Start Of Week : ${data.startOfWeek}`;
  document.getElementById('timezones').innerText = `Timezones : ${data.timezones[0]}`;
}

fetchData();
