//search phone 
const searchPhone = () => {
    const inputField = document.getElementById('input');
    const searchText = inputField.value;
    searchText.value = '';
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhone(data.data.slice(0, 20)))
}
/// display phone after search
const displayPhone = brands => {
    const result = document.getElementById('result');
    // console.log(brands)
    brands.forEach(brand => {
        const div = document.createElement('div');
        div.classList.add('col-12');
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
//phone Details Api
const loadPhoneDetail = brand => {
    // console.log(brand);
    const url = `https://openapi.programming-hero.com/api/phone/${brand}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayDetails(data.data))
}

//phone sumery 
const displayDetails = phones => {
    // console.log(phones);
    const showDetails= document.getElementById('showSummery');
    const div = document.createElement('div');
        div.classList.add('col-12');
        div.innerHTML = ` 
        <div class="row">
        <div class="col-md-5"><img src="${phones.image}" class="card-img-top" alt="..."></div>
        <div class="col-md-7">
        <div  class="card  ">        
        <div class="card-body">
        <h5 class="card-title">${phones.mainFeatures.chipSet}</h5>
          <p class="card-text">${phones.mainFeatures.memory}</p>
          <p class="card-text">${phones.mainFeatures.storage}</p>
          <p class="card-text">${phones.mainFeatures.displaySize}</p>
          <p class="card-text">${phones.mainFeatures.sensors}</p>
        <h2>Main Features</h2>
          <h5 class="card-title">${phones.mainFeatures.chipSet}</h5>
          <p class="card-text">${phones.mainFeatures.memory}</p>
          <p class="card-text">${phones.mainFeatures.storage}</p>
          <p class="card-text">${phones.mainFeatures.displaySize}</p>
          <p class="card-text">${phones.mainFeatures.sensors}</p>
          
          
        </div>
      </div>
        </div>
        </div>
    `;
        showSummery.appendChild(div);

    
}



