import React from 'react';
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';
import RadialSeparators from '../components/RadialSeparators';
import 'react-circular-progressbar/dist/styles.css';

function CityWeather() {
  const state = [
    {
      id: 500,
      main: 'Rain',
      description: 'light rain',
      temperature: '23.98',
      visibility: 10000,
      humidity: 100,
      icon: '10n',
    },
  ];

  return (
    <div>
      {state.length > 0 && (
        <div className="weatherDetails" key={state[0].id}>
          <div className="detTitle">
            <h4 className="cityName">{state[0].name}</h4>
            <p className="temp">{`${state[0].temperature} °C`}</p>
          </div>
          <img className="weatherIcon" src={`https://openweathermap.org/img/wn/${state[0].icon}@2x.png`} alt="/" />
          <p className="mainWeather">
            {state[0].main}
            :
            {' '}
            {state[0].description}
          </p>
          <div className="humidity">
            <h4 className="humTitle">Humidity:</h4>
            <div className="humBar">
              <CircularProgressbarWithChildren
                value={state[0].humidity}
                text={`${state[0].humidity}%`}
                strokeWidth={10}
                styles={buildStyles({
                  strokeLinecap: 'butt',
                  pathColor: '#3f63a6',
                  width: '20px',
                  height: '20px',
                })}
              >
                <RadialSeparators
                  count={12}
                  style={{
                    background: '#fff',
                    width: '2px',
                    // This needs to be equal to props.strokeWidth
                    height: `${10}%`,
                  }}
                />
              </CircularProgressbarWithChildren>
            </div>
          </div>
          <div className="visibility">
            <h4 className="visTitle">Visibility:</h4>
            <span className="visibilityDetail">
              {state[0].visibility}
              {' km'}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default CityWeather;
