document.addEventListener('DOMContentLoaded', function() {
    let text = document.querySelector('.cityText');
    let weatherInfo = document.getElementById('weatherInfo');
    let weatherIcon = document.getElementById('weatherIcon');
    
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
    
    let city;
    let submit = document.querySelector('button');
    submit.addEventListener('click', async function() {
        city = document.getElementById('input').value;
       
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
});
