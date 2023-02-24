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
          <label id="modal-btn" for="my-modal-3" class="btn btn-outline">Read More...</label>
        </div>
        <img src="${data.flags.png}" />
      </div>
    `;
    cardContainer.appendChild(div);
  }

  document.getElementById('modal-btn').addEventListener('click', function () {
    const modalContainer = document.getElementById('modal-container');
  
    const div = document.createElement('div');
    div.innerHTML = `
      <input type="checkbox" id="my-modal-3" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative">
          <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 class="text-lg font-bold">Congratulations random Internet user!</h3>
          <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
        </div>
      </div>
    `;
    modalContainer.appendChild(div);
  });
}

// document.getElementById('modal-btn').addEventListener('click', function () {
//   const modalContainer = document.getElementById('modal-container');

//   const div = document.createElement('div');
//   div.innerHTML = `
//     <input type="checkbox" id="my-modal-3" class="modal-toggle" />
//     <div class="modal">
//       <div class="modal-box relative">
//         <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
//         <h3 class="text-lg font-bold">Congratulations random Internet user!</h3>
//         <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
//       </div>
//     </div>
//   `;
// });

fetchData();

