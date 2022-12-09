import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import City from './City';
// import { fetchCities } from '../redux/cities';

function Cities({ cities }) {
  const [input, setInput] = useState('');

  return (
    <div>
      <input
        type="search"
        value={input}
        placeholder="Enter the city name"
        onChange={(e) => setInput(e.target.value)}
      />
      <ul className="cities-container">
        {
          cities.filter((city) => (input.toLowerCase() === '' ? city : city.cityName.toLowerCase().includes(input))).map((city) => (
            <li key={city.id}>
              <City name={city.cityName} countryName={city.country} />
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default Cities;
