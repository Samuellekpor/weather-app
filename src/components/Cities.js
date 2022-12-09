import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import City from './City';
// import { fetchCities } from '../redux/cities';

function Cities({ cities }) {
  const [input, setInput] = useState('');

  const filteredData = cities.filter((city) => {
    const data = Object.keys(city).some((key) => {
      const result = city[key].toLowerCase().includes(input.toLowerCase());
      return result;
    });
    return data;
  });

  return (
    <div>
      <input type="search" value={input} placeholder="Enter the city name" onChange={(e) => setInput(e.target.value)} />
      <ul className="cities-container">
        {
          filteredData.map((city) => (
            <li key={city.id}>
              <City name={city.name} temperature={city.temp} />
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default Cities;
