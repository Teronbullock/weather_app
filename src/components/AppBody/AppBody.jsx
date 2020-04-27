import React from 'react';
import { Consumer } from '../AppContext';
import './AppBody.scss';
import getBackground from './bgChange.js';
import DetailCard from '../DetailCard';
import DetailCardInfo from '../DetailCardInfo';
import DetailCardHourlyInfo from '../DetailCardHourlyInfo';
import Hero from '../Hero';
import { getTime } from '../../assets/js/date';

export default () => {
  return (
    <Consumer>
      {({ currentWeatherData }) => {
        const {
          pressure,
          humidity,
          weatherCondition,
          sunrise,
          sunset,
          wind,
          realFeel,
        } = currentWeatherData;

        const backgroundURL = getBackground(weatherCondition, sunrise, sunset);
        const appBodyStyle = {
          backgroundImage: `url(${backgroundURL})`,
        };

        return (
          <div className="app-body" id="app-body" style={appBodyStyle}>
            <div className="container app-body__overlay">
              <div className="app-body__top-section">
                <Hero />
              </div>
              <div className="app-body__bottom-section">
                <DetailCard module={<DetailCardHourlyInfo />} />
                <DetailCard
                  module={
                    <DetailCardInfo
                      title_1="SUNRISE"
                      title_2="SUNSET"
                      info_1={getTime('opt3', sunrise)}
                      info_2={getTime('opt3', sunset)}
                    />
                  }
                />
                <DetailCard
                  module={
                    <DetailCardInfo
                      title_1="HUMIDITY"
                      title_2="PRESSURE"
                      info_1={humidity}
                      info_2={pressure}
                    />
                  }
                />
                <DetailCard
                  module={
                    <DetailCardInfo
                      title_1="WIND"
                      title_2="FEELS LIKE"
                      info_1={wind}
                      info_2={realFeel}
                    />
                  }
                />
              </div>
            </div>
          </div>
        );
      }}
    </Consumer>
  );
};
