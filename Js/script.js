const searchPhone = () => {
    const inputField = document.getElementById('input');
    const searchText = inputField.value;
    searchText.value = '';
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhone(data.data))
}

const displayPhone = brands => {
    const result = document.getElementById('result');
    // console.log(brands)
    brands.forEach(brand => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML=` <div  class="card mt-5 ">
        <img src="${brand.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${brand.phone_name}</h5>
          <p class="card-text">${brand.brand}</p>
          <button onclick="('${brand.slug}')" class="btn btn-info">Explore</button>
        </div>
      </div>
    `;
      result.appendChild(div);

       
    });
}

const loadPhoneDetail=mealId =>{
    const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
    .then(res => res.json())
    .then(data =>displayMealDetail(data.meals[0]))
}
// const displayPhoneDetail = meal => {
//     console.log(meal)
// }