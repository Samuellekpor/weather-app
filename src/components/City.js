import React from 'react';

function City(props) {
  const city = props;

  return (
    <div className="city-container">
      <p className="city-name">{city.name}</p>
      <p className="city-temp">{city.temperature}</p>
    </div>
  );
}

export default City;
