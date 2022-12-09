import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import RadialSeparators from "./RadialSeparators";
import "react-circular-progressbar/dist/styles.css";
import getCityWeatherFromApi from '../redux/city-weather';

function CityWeather() {
  const params = useParams();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cities.cityWeather);
  const { name } = params;
  const effectRan = useRef(false);

  useEffect(() => {
    if (effectRan.current || process.env.NODE_ENV !== 'development') {
      dispatch(getCityWeatherFromApi(name));
    }
    effectRan.current = true;
  }, [name, dispatch]);

  return (
    <div>
      {state.length > 0 && (
        <div className='weatherDetails'>
          <div className='detailsTitle'>
            <h4 className='cityName'>{name}</h4>
            <p className='temp'>{`${state[0].temperature} °C`}</p>
          </div>
          <img className='weatherIcon' src={`https://openweathermap.org/img/wn/${state[0].icon}@2x.png`} alt='/' />
          <p className='mainWeather'>{state[0].main}</p>
          <p className='weatherDescription'>{state[0].description}</p>
          <div className='humidity'>
            <h4 className='humTitle'>Humidity:</h4>
            <CircularProgressbarWithChildren
              value={80}
              text={`${80}%`}
              strokeWidth={10}
              styles={buildStyles({
                strokeLinecap: "butt"
              })}
            >
            <RadialSeparators
              count={12}
              style={{
                background: "#fff",
                width: "2px",
                // This needs to be equal to props.strokeWidth
                height: `${10}%`
              }}
            />
            </CircularProgressbarWithChildren>
          </div>
        </div>
      )}
    </div>
  )
}

export default CityWeather;