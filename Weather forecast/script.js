
document.addEventListener('DOMContentLoaded', function(){
    let text = document.querySelector('.cityText');
    async function getData(city) {
        const apiKey = '20d83d07166d7805dc59557e408874a3';
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    
        try{
            let respond = await fetch(apiUrl);
            if(respond.ok){
                return  respond.json();
            }
        }catch(error){
            alert('Error' + error)
        }
    }
    
    
    
    let city ;
    let submit = document.querySelector('button')
    submit.addEventListener('click', async function(){
        city = document.getElementById('input').value
       
       let objectJson =  await getData(city);
       let currentTemperature = Math.ceil(objectJson.main.temp - 273.15);
        
       
       text.innerHTML = `City: ${objectJson.name} <br>Country: ${objectJson.sys.country}<br>Temperature: ${currentTemperature} °C`

    })
})

 
