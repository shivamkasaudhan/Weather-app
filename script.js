const cityName = document.getElementById('cityName');
const temp = document.getElementById('temp');
const feels_like = document.getElementById('feels_like');
const humidity = document.getElementById('humidity');
const min_temp = document.getElementById('min_temp');
const max_temp = document.getElementById('max_temp');
const wind_speed = document.getElementById('wind_speed');
const wind_degrees = document.getElementById('wind_degrees');
const sunrise = document.getElementById('sunrise');
const sunset = document.getElementById('sunset');
const city = document.getElementById('city'); // assuming you have an input field with id 'city'
const submit = document.getElementById('submit'); // assuming you have a button with id 'submit'
const cityOptions = document.querySelectorAll('.city-option');


async function getWeather(city) {
    cityName.innerHTML = city;
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '4896e80498msh78f124a9478d37dp15984cjsnf5762109d15d',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();

        console.log(data);

        temp.innerHTML = data.temp;
        feels_like.innerHTML = data.feels_like;
        humidity.innerHTML = data.humidity;
        min_temp.innerHTML = data.min_temp;
        max_temp.innerHTML = data.max_temp;
        wind_speed.innerHTML = data.wind_speed;
        wind_degrees.innerHTML = data.wind_degrees;
        sunrise.innerHTML = data.sunrise;
        sunset.innerHTML = data.sunset;
    } catch (error) {
        console.error(error);
    }
}

submit.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(city.value);
});
cityOptions.forEach((option) => {
    option.addEventListener('click', (event) => {
        const selectedCity = event.target.dataset.city;
        getWeather(selectedCity);
    });
});

// Call the asynchronous function
getWeather('Delhi'); // You might want to remove this line if you don't want to make an initial request on page load

