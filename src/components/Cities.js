import React from 'react';
import City from './City';

function Cities() {
  const cities = [
    {
      id: 1,
      name: 'Bagdad',
      temp: '12 °C',
    },
    {
      id: 2,
      name: 'Lomé',
      temp: '12 °C',
    },
    {
      id: 3,
      name: 'Accra',
      temp: '12 °C',
    },
  ];

  return (
    <div>
      <ul className="cities-container">
        {
          cities.map((city) => (
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
