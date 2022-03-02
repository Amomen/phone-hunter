//search phone 
const searchPhone = () => {
    const inputField = document.getElementById('input');
    const searchText = inputField.value;
    searchText.value = '';

    if (searchText == '') {
        alert('input your desired phone model')
        
    } else {
        const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
        fetch(url)
            .then(res => res.json())
            .then(data => displayPhone(data.data.slice(0, 20)))

    };

};
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

//phone or Device  sumery 
const displayDetails = phones => {
    // console.log(phones);
    const showDetails = document.getElementById('showSummery');
    const div = document.createElement('div');
    div.classList.add('col-12');
    div.innerHTML = ` 
        <div class="row">
        <div class="col-md-4"><img src="${phones.image}" class="card-img-top" alt="..."></div>
        <div class="col-md-7">
        <div  class="card  ">        
        <div class="card-body">
        <h5 class="card-title">${phones.brand}</h5>
          <p class="card-text">${phones.name}</p>
          <p class="card-text">${phones.releaseDate}</p>
          
        <h2>Main Features</h2>
          <h5 class="card-title"><strong>Chipset:</strong>${phones.mainFeatures.chipSet}</h5>
          <p class="card-text"><strong>memory:</strong>${phones.mainFeatures.memory}</p>
          <p class="card-text"><strong>Storage:</strong>${phones.mainFeatures.storage}</p>
          <p class="card-text"><strong>Display:</strong>${phones.mainFeatures.displaySize}</p>
          <p class="card-text"><strong>Sensors:</strong>${phones.mainFeatures.sensors}</p>
          
        <h2>other Features</h2>
        <strong>Bluetooth:</strong> <h5 class="card-title">${phones.others.Bluetooth}</h5>
           <p class="card-text"><strong>GPS:</strong> ${phones.others.GPS}</p>
           <p class="card-text"><strong>NFC:</strong>${phones.others.NFC}</p>
           <p class="card-text"><strong>Radio:</strong>${phones.others.Radio}</p>
           <p class="card-text"><strong>USB:</strong>${phones.others.USB}</p>
          <p class="card-text"><strong>WLAN:</strong>${phones.others.WLAN}</p>
          
          
        </div>
      </div>
        </div>
        </div>
    `;
    showSummery.appendChild(div);


}