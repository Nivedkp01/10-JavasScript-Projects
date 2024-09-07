const apiKey = 'e003d3d64f5d0d46f9f88f2ba32ee386';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchInput = document.querySelector('.input');
const searchBtn = document.querySelector('.btn');
const tempElement = document.querySelector('.temp');
const cityElement = document.querySelector('.city');
const humiElement = document.querySelector('.humi');
const winduElement = document.querySelector('.windu');
const imageElement=document.querySelector('.image')

async function checkWeather(city) {
    try {
        const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
        if (!response.ok) {
            console.log('Weather data not found.');
        }
        const data = await response.json();
        console.log(data)

        tempElement.textContent = `${Math.round(data.main.temp)} °C`;
        cityElement.textContent = data.name;
        humiElement.textContent = `${data.main.humidity} %`;
        winduElement.textContent = `${data.wind.speed} km/h`;
        if(data.weather[0].main=='Clouds'){
            imageElement.src='https://cdn2.iconfinder.com/data/icons/weather-365/64/weather-sun-cloud-rain-512.png'
        }
        else if(data.weather[0].main=='Clear')
        {
            imageElement.src='https://cdn-icons-png.flaticon.com/512/3917/3917805.png'
        }
        else if(data.weather[0].main=='Rain')
        {
            imageElement.src='https://cdn-icons-png.flaticon.com/512/4150/4150897.png'
        }
        else if(data.weather[0].main=='Drizzle')
        {
            imageElement='https://cdn-icons-png.flaticon.com/512/1458/1458966.png'
        }
        else if(data.weather[0].main=='Mist')
        {
            imageElement='https://cdn-icons-png.flaticon.com/512/1197/1197102.png'
        }
        document.querySelector('.weather').style.display='block'
        document.querySelector('.err').style.display='none'

    } catch (error) {
        document.querySelector('.err').style.display='block'
        document.querySelector('.weather').style.display='none'
        console.error('Error fetching weather data:', error);
    }
}

searchBtn.addEventListener('click', () => {
    const city = searchInput.value;
    if (city) {
        checkWeather(city);
    } else {
        console.error('City name cannot be empty.');
        
    }
});
