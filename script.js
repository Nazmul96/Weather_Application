window.addEventListener("DOMContentLoaded", (event) => {

    const search_location = document.querySelector("button");
    const location        = document.querySelector("#location");

    search_location.addEventListener("click", (event) => {
        document.querySelector("#class_remove").classList.add('d-none');
        const location_value = location.value;
        getWeatherData(location_value);
    });

    function getWeatherData(location){
;
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=171aa7c1b60314050807da7d7d82bca9`)
        .then(function(response) {
            if(response.data){

                document.querySelector("#class_remove").classList.remove('d-none');
                document.querySelector("#temperature").innerHTML=response.data.main.temp;
                document.querySelector("#description").innerHTML=response.data.weather[0].description;
                document.querySelector("#humidity").innerHTML=response.data.main.humidity;
            }
        })
        .catch(function(error) {
            console.error(error);
        });
 
    }

});