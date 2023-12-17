// kanpurWeather.js

// Define the function to get weather information for Kanpur
async function getBhopalWeather() {
    const temp = document.getElementById('tempBhopal');
    const cloud_pct = document.getElementById('cloud_pctBhopal');
    const humidity = document.getElementById('humidityBhopal');
    const wind_speed = document.getElementById('wind_SpeedBhopal');
    
    try {
        const response = await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=bhopal', {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '4896e80498msh78f124a9478d37dp15984cjsnf5762109d15d',
                'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
            }
        });

        const data = await response.json();

        // Update HTML elements with weather data
        temp.innerHTML = data.temp;
        cloud_pct.innerHTML = data.cloud_pct;
        humidity.innerHTML = data.humidity;
        wind_speed.innerHTML = data.wind_speed;
    } catch (error) {
        console.error(error);
    }
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', getBhopalWeather);
