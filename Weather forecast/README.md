# Weather Application Documentation

This documentation explains the functionality of a simple weather application that fetches and displays the current weather information for a specified city. The application utilizes the OpenWeatherMap API to retrieve weather data.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Functions](#functions)
  - [getData](#getdata)
- [Event Listeners](#event-listeners)
  - [DOMContentLoaded](#domcontentloaded)
  - [Button Click](#button-click)

## Installation

To use this application, include the provided HTML structure in your web page and add the JavaScript code to a file named `script.js`. Ensure that the OpenWeatherMap API key is correctly set.

## Usage

1. Enter the desired city name in the input field.
2. Click the "Get Weather" button to retrieve and display the weather information.

## Functions

### getData

Fetches weather data for a specified city from the OpenWeatherMap API.

**Parameters:**
- `city` (string): The name of the city for which to fetch weather data.

**Returns:**
- JSON object containing the weather data if the request is successful.

**Example:**
```javascript
async function getData(city) {
    const apiKey = '20d83d07166d7805dc59557e408874a3';
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        let response = await fetch(apiUrl);
        if (response.ok) {
            return response.json();
        }
    } catch (error) {
        alert('Error: ' + error);
    }
}
```

## Event Listeners

### DOMContentLoaded

This event listener ensures that the code runs only after the DOM has been fully loaded.

**Example:**
```javascript
document.addEventListener('DOMContentLoaded', function() {
    let text = document.querySelector('.cityText');
    let weatherInfo = document.getElementById('weatherInfo');
    let weatherIcon = document.getElementById('weatherIcon');
});
```

### Button Click

This event listener triggers when the button is clicked. It fetches the city name from the input field, retrieves weather data using the `getData` function, and updates the DOM with the fetched data.

**Example:**
```javascript
let submit = document.querySelector('button');
submit.addEventListener('click', async function() {
    let city = document.getElementById('input').value;
    let objectJson = await getData(city);
    if(objectJson) {
        let currentTemperature = Math.ceil(objectJson.main.temp);
        let weatherDescription = objectJson.weather[0].description;
        let weatherIconUrl = `http://openweathermap.org/img/wn/${objectJson.weather[0].icon}@2x.png`;

        weatherIcon.src = weatherIconUrl;
        weatherIcon.style.display = 'block';

        weatherInfo.innerHTML = `City: ${objectJson.name} <br>Country: ${objectJson.sys.country}<br>Temperature: ${currentTemperature} °C<br>Description: ${weatherDescription}`;
    }
});
```
![image](https://github.com/opoiasnik/JS/assets/122808904/63156533-24ed-457a-bebb-bde89184c906)
![image](https://github.com/opoiasnik/JS/assets/122808904/8242bae6-6b7c-4607-8181-0439d1dcab28)

