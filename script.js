const API_key = "00c84d30bf78436b6d4573a431aed771";
const base_url = "https://api.openweathermap.org/data/2.5/weather"
const checkButton = document.querySelector(".check");

checkButton.addEventListener('click', function(){    
    const cityName = document.getElementById("user-input").value;
    getWeatherByLocation(cityName);
})

const endpoint_url = (cityName) =>{
    return `${base_url}?q=${cityName}&appid=${API_key}`
};

async function getWeatherByLocation(cityName){
    const resp = await fetch(endpoint_url(cityName));
    const respData = await resp.json()
    convertToCelsius(respData.main.temp)
}

function convertToCelsius(F){
    temp = (((F - 32)* 0.5556).toFixed(2))
    console.log(temp);
}

function addWeatherToPage(data){
    const weather = data.weather.id;
    console.log(weather);
}
