import React from 'react';
import City from '../components/City';

function Cities() {
  const cities = [
    {
      id: 2293538,
      cityName: 'Abidjan',
      country: 'Ivory Coast',
    },
    {
      id: 2306104,
      cityName: 'Accra',
      country: 'Ghana',
    },
  ];
  const input = 'acc';

  return (
    <div>
      <div className="inputWrapper">
        <input
          className="inputField"
          type="search"
          value={input}
          placeholder="Enter the city name"
          onChange={(e) => (e.target.value)}
        />
      </div>
      <ul className="cities-container">
        {
          cities.filter((city) => (input.toLowerCase() === '' ? city : city.cityName.toLowerCase().includes(input))).map((city) => (
            <li key={city.id}>
              <City
                name={city.cityName}
                countryName={city.country}
              />
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default Cities;
