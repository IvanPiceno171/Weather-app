const cityForm = document.querySelector('form');

const card = document.querySelector(".card");
const details = document.querySelector(".details");

const updateUi = (data) => {
    // const cityDets = data.cityDets;
    // const weather = data.weather;
    // console.log(data);
    const { cityDets, weather } = data;
    
    //update details template
    details.innerHTML = `
            <h5 class="my-3">${cityDets.EnglishName}</h5>h5>
            <div class="my-3">${weather.WeatherText}</div></div>
            <div class="display-3 my-4">
              <span>${weather.Temperature.Metric.Value}</span></span>
              <span>&deg;C</span>
            </div> `;

    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none');
        // document.querySelector('.card').classList.remove('d-none');
    }
    }


const updateCity = async (city) =>{
    const cityDets = await getCity(city);
    console.log(cityDets)
    const weather = await getWeather(cityDets.Key);

    return { cityDets: cityDets, weather: weather }
}
cityForm.addEventListener('submit', (e) => {
  // prevent default action
  e.preventDefault();
  // get city value
  // trim removes whitespace
    const city = cityForm.city.value.trim();
    cityForm.reset();

    //update ui with new city
    updateCity(city)
    .then(data => {
        updateUi(data)
    })
    .catch(err => 
        console.log(err)
        );
    
})


