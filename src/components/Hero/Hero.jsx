import React from 'react';
import './Hero.scss';
import { Consumer } from '../AppContext/AppContext';

export default () => {
  return (
    <Consumer>
      {({ currentWeatherData, time }) => {
        const {
          location,
          weatherTypeDes,
          currentTemp,
          highTemp,
          lowTemp,
        } = currentWeatherData;

        return (
          <React.Fragment>
            <div className="hero-info">
              <p className="hero-info__info">{location}</p>
            </div>
            <div className="hero-info">
              <p className="hero-info__info">{weatherTypeDes}</p>
            </div>
            <div className="hero-info">
              <p className="hero-info__info hero-info__current-temp">
                {currentTemp}
              </p>
            </div>
            <div className="hero-info">
              <p className="hero-info__info">
                {highTemp} / {lowTemp}
              </p>
            </div>
            <div className="hero-info">
              <p className="hero-info__info">{time}</p>
            </div>
          </React.Fragment>
        );
      }}
    </Consumer>
  );
};
