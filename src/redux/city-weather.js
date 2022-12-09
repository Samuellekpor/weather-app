import { getCityWeather } from './cities';

const getCityWeatherFromApi = (city) => async (dispatch) => {
  // prettier-ignore
  const API_KEY = 'aa909668cdf7e9f124b990fb33bf812e';
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${city.location.latitude}&lon=${city.location.longitude}&appid=${API_KEY}`);

  const data = await response.json();

  const cityWeather = [];

  data.forEach((city) => {
    cityWeather.push({
      id: city.weather[0].id,
      main: city.weather[0].main,
      description: city.weather[0].description,
      image: city.weather[0].icon,
    });
  });

  dispatch(getCityWeather(cityWeather));
};

export default getCityWeatherFromApi;
