import { getCities } from './cities';

const getCitiesFromApi = () => async (dispatch) => {
  const where = encodeURIComponent(JSON.stringify({
    population: {
      $gt: 3000000,
    },
  }));
  const response = await fetch(
    `https://parseapi.back4app.com/classes/Continentscountriescities_City?order=name,-population&include=country&keys=name,country,country.name,population,location,cityId&where=${where}`,
    {
      headers: {
        'X-Parse-Application-Id': '3Mp2Nec5au6UUgq8ehCcXkxU8aU2zENFz1tSTN5L', // This is your app's application id
        'X-Parse-REST-API-Key': 'E0eichzPXXU43AyLhKYVrsDqRhdQNVa0eIXv9glj', // This is your app's REST API key
      },
    },
  );
  const data = await response.json();
  const citiesData = [];

  data.results.forEach((city) => {
    citiesData.push({
      id: city.cityId,
      cityName: city.name,
      country: city.country.name,
    });
  });

  dispatch(getCities(citiesData));
};

export default getCitiesFromApi;
