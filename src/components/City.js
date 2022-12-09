import React from 'react';

function City(props) {
  const city = props;

  return (
    <div className="city-container">
      <a href={city.name}>
        <p className="city-name">{city.name}</p>
        <p className="city-temp">{city.temperature}</p>
      </a>
    </div>
  );
}

export default City;
