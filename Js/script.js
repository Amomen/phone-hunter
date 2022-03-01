const searchPhone = () => {
    const inputField = document.getElementById('input');
    const searchText = inputField.value;
    searchText.value = '';
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhone(data.data.slice(0, 20)))
}

const displayPhone = brands => {
    const result = document.getElementById('result');
    // console.log(brands)
    brands.forEach(brand => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = ` <div  class="card mt-5 ">
        <img src="${brand.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${brand.phone_name}</h5>
          <p class="card-text">${brand.brand}</p>
          <button onclick="loadPhoneDetail('${brand.slug}')" class="btn btn-info">Explore</button>
        </div>
      </div>
    `;
        result.appendChild(div);


    });
}

const loadPhoneDetail = brand => {
    console.log(brand);
    const url = `https://openapi.programming-hero.com/api/phone/${brand}`
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
}
// const displayPhoneDetail = meal => {
//     console.log(meal)
// }