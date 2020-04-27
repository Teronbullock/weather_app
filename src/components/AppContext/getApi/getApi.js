import { currentWeatherRes, hourlyWeatherRes } from './apiWeatherRes';
import axios from 'axios';

// Configs api call
export default (localType, forecastType, apiInput) => {
  const apiKey = process.env.REACT_APP_API_KEY;

  // Configs the api url based on zip or city input
  const apiUrl = {
    baseUrl: 'https://api.openweathermap.org/data/2.5/',
    zip: `${forecastType}?zip=${apiInput},us&units=imperial&appid=${apiKey}`,
    city: `${forecastType}?q=${apiInput},us&units=imperial&appid=${apiKey}`,
    getlocalType() {
      if (localType === 'zip') {
        return this.baseUrl + this.zip;
      } else if (localType === 'city') {
        return this.baseUrl + this.city;
      } else if (localType === 'geo') {
        return this.baseUrl + this.geo;
      }
    },
  };

  const getUrl = apiUrl.getlocalType();

  return axios.get(getUrl).then(res => {
    // returns api data obj based on forecast type
    if (forecastType === 'weather') {
      let data = currentWeatherRes(res);
      return data;
    } else if (forecastType === 'forecast') {
      let data_1 = hourlyWeatherRes(res);
      return data_1;
    }
  });
};
