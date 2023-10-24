const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');
const weatherInfo = document.getElementById('weatherInfo');
const resetButton = document.getElementById('resetButton');
const weatherData = [];

const displayWeatherData = (data) => {
    weatherInfo.innerHTML = '';

    data.forEach((location) => {
        const locationContainer = document.createElement('div');

        const weatherImage = document.createElement('img');
        weatherImage.src = getWeatherImage(location.conditions);
        weatherImage.alt = location.conditions;

        const locationHeader = document.createElement('h2');
        locationHeader.textContent = location.location;

        const temperatureData = document.createElement('p');
        temperatureData.textContent = `Temperature: ${location.temperature} °C`;

        const humidityData = document.createElement('p');
        humidityData.textContent = `Humidity: ${location.humidity}%`;

        const conditionsData = document.createElement('p');
        conditionsData.textContent = `Conditions: ${location.conditions}`;

        locationContainer.appendChild(weatherImage);
        locationContainer.appendChild(locationHeader);
        locationContainer.appendChild(temperatureData);
        locationContainer.appendChild(humidityData);
        locationContainer.appendChild(conditionsData);

        weatherInfo.appendChild(locationContainer);
    });

    weatherInfo.style.display = 'block';
};

const displayError = (message) => {
    weatherInfo.innerHTML = '';
    const errorElement = document.createElement('p');
    errorElement.textContent = message;
    weatherInfo.appendChild(errorElement);
    weatherInfo.style.display = 'block';
};

const getWeatherData = async () => {
    try {
        const weatherUrl = "https://run.mocky.io/v3/97151f1d-37bd-4da0-b143-738b0bd1ec58";

        const response = await fetch(weatherUrl);
        if (response.ok) {
            const data = await response.json();
            weatherData.push(...data);
        } else {
            throw new Error('Failed to fetch data');
        }
    } catch (error) {
        console.error('Error:', error);
        displayError(error.message);
    }
};

const reset = () => {
    locationInput.value = '';
    weatherInfo.innerHTML = '';
    weatherInfo.style.display = 'none';
};

searchButton.addEventListener('click', () => {
    const location = locationInput.value;
    const locationData = weatherData.filter((data) => data.location.toLowerCase() === location.toLowerCase());
    if (locationData.length > 0) {
        displayWeatherData(locationData);
    } else {
        displayError('Location not found');
    }
});

resetButton.addEventListener('click', () => {
    reset();
});

const getWeatherImage = (condition) => {
    switch (condition) {
        case "Sunny":
            return "images/sunny.png";
        case "Partly Cloudy":
            return "images/partlycloudy.jpg";
        case "Rainy":
            return "images/rainingsky.png";
        case "Cloudy":
            return "images/cloudy.jpg"; 
        default:
            return "images/backgroundweatherproject2 (1).png";
    }
};

getWeatherData();
