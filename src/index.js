function refreshWeather(response) {
    let temperatureElement =document.querySelector("#temperature");
    let temperature =response.temperature.data.current;
    cityElement.innerHTHL =response.data.city;
    temperatureElement.innerHTML =math.round(temperature);
 let cityElement =document.querySelector("#city");
    cityElement.innerHTML =searchInput.value;
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
