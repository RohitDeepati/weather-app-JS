const apiKey = "39f939c5c90b7c99a037f6f73e21b37b";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// async function checkWeather() {
//   const response = await fetch(apiUrl + `&appid=${apiKey}`);
//   var data = await response.json();
//   console.log(data);
// }

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

const checkWeather = async (city) => {
  try {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (response.status == 404) {
      document.querySelector(".error").style.display = "block";
      document.querySelector(".weather").style.display = "none";
    } else {
      const data = await response.json();
      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".temp").innerHTML =
        Math.round(data.main.temp) + "°C";

      document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
      document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

      //images
      if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/images/clouds.png";
      } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "images/images/clear.png";
      } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "images/images/rain.png";
      } else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "images/images/drizzle.png";
      } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "images/images/mist.png";
      }

      document.querySelector(".weather").style.display = "block";
      document.querySelector(".error").style.display = "none";
    }
  } catch (err) {
    console.error(err);
  }
};

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
