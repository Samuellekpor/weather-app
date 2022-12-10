import React, { useState } from 'react';
import City from './City';

function Cities({ cities }) {
  const [input, setInput] = useState('');

  return (
    <div>
      <div className="inputWrapper">
        <input
          className="inputField"
          type="search"
          value={input}
          placeholder="Enter the city name"
          onChange={(e) => setInput(e.target.value)}
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
