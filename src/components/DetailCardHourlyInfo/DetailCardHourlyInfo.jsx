import React from 'react';
import { Consumer } from '../AppContext';
import './DetailCardHourlyInfo.scss';
export default () => {
  return (
    <Consumer>
      {({ hourlyWeatherData, currentWeatherData }) => {
        const { weatherIcon, currentTemp } = currentWeatherData;

        return (
          <div className="hourly-weather">
            <div className="hourly-weather__item">
              <p className="hourly-weather__label">Now</p>
              <img
                className="hourly-weather__img"
                alt="Weather Icon"
                src={`
                  http://openweathermap.org/img/wn/${weatherIcon}@2x.png
                `}
              />
              <p className="hourly-weather__info">{currentTemp}</p>
            </div>

            {hourlyWeatherData.map(list => (
              <div key={list.id} className="hourly-weather__item">
                <p className="hourly-weather__label">{list.time}</p>
                <img
                  className="hourly-weather__img"
                  alt="Weather Icon"
                  src={`http://openweathermap.org/img/wn/${list.weatherIcon}@2x.png`}
                />
                <p className="hourly-weather__info">{list.temp}</p>
              </div>
            ))}
          </div>
        );
      }}
    </Consumer>
  );
};
