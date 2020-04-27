import { windDir, pressure } from './weatherUtility';
import { getTime } from '../../../assets/js/date';

export const currentWeatherRes = res => {
  return {
    currentWeatherData: {
      location: res.data.name,
      currentTemp: `${Math.round(res.data.main.temp)}°`,
      highTemp: `${Math.round(res.data.main.temp_max)}°`,
      lowTemp: `${Math.round(res.data.main.temp_min)}°`,
      realFeel: `${Math.round(res.data.main.feels_like)}°`,
      pressure: `${pressure(res.data.main.pressure)} in`,
      humidity: `${res.data.main.humidity}%`,
      weatherCondition: res.data.weather[0].main,
      weatherTypeDes: res.data.weather[0].description,
      weatherIcon: res.data.weather[0].icon,
      sunrise: `${res.data.sys.sunrise}`,
      sunset: `${res.data.sys.sunset}`,
      wind: `${windDir(res.data.wind.deg)} ${res.data.wind.speed} mph `,
    },
  };
};

export const hourlyWeatherRes = res => {
  const data = res.data.list.slice(0, 5).map((list, index) => {
    return {
      time: getTime('opt2', list.dt),
      weatherIcon: list.weather[0].icon,
      temp: `${Math.round(list.main.temp)}°`,
      id: index.toString(),
    };
  });

  return {
    hourlyWeatherData: {
      listData: data,
    },
  };
};
