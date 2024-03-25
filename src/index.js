function refreshWeather(response) {
    let temperatureElement =document.querySelector("#temperature");
    let temperature =response.data.temperature.current;
    let cityElement =document.querySelector("#city");
    let descriptionElement =document.querySelector("#description");
    let humidityElement =document.querySelector("humidity");
    let windSpeedElement =document.querySelector("wind-speed")
    let timeElement =document.querySelector("time");
    let date =newDate(response.data.time * 1000);
    let icon ='<img src="'${response.condition.icon_url}" class="weather-app-icon'"/>
    
    cityElement.innerHTML =searchInput.value;


  
    cityElement.innerHTHL =response.data.city;
    humidityElement.innerHTML ='${response.data.temperature.humidity}%';
    descriptionElement.innerHTML =response.data.condition.description;
    windSpeedElement.innerHTML ='${response.data.wind.speed}km/h';
    timeElement.innerHTML = formatDate(date);
    temperatureElement.innerHTML =math.round(temperature);
  iconElement.innerHTML ='<img src ="${response.data.condition.icon_url}" class="weather-app-icon" />';
}
function formatDate(date) {
    let day =date.getDay();
    let minutes =date.getMinutes();
    let hours =date.getHours();
    let days="Sunday","Monday","Tuesday", "Wednesday","Thursday", "Friday", "Saturday"
   if (minutes <10) {
    minutes ='0${minutes}';
   }
   
    return '${day} ${hours} ${minutes};

}


function searchCity (city) {
let apiKey ="660a5b4bo4fe638d6a4bbt380ff35a3b";
let apiUrl ='https://api.shecodes.io/weather/v1/current?query={$city}&key=${apikey}&units=metric';
axios.get(apiUrl).then(refreshWeather)
}




function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput =document.querySelector("#search-form-input");
    
    searchCity(searchInput.value);

}




let searchFormElement =document.querySelector("#search-form");
searchFormElement.addEventListener("submit",handlesearchsubmit);
searchCity =("Pretoria");
