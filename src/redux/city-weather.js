import { getCityWeather } from './cities';

const getCityWeatherFromApi = (city) => async (dispatch) => {
  // prettier-ignore
  const API_KEY = 'aa909668cdf7e9f124b990fb33bf812e';
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
  const data = await response.json();

  const cityWeather = [];

  cityWeather.push({
    id: data.weather[0].id,
    main: data.weather[0].main,
    description: data.weather[0].description,
    temperature: (data.main.temp - 273.15).toFixed(2),
    visibility: data.visibility,
    humidity: data.main.humidity,
    icon: data.weather[0].icon,
  });

  dispatch(getCityWeather(cityWeather));
};

export default getCityWeatherFromApi;
