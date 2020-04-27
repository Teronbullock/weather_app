import { getDate, getTime } from '../../assets/js/date';
import clear01 from './img/clear01.jpg';
import clear02 from './img/clear02.jpg';
import clouds01 from './img/clouds01.jpg';
import clouds02 from './img/clouds02.jpg';
import rain01 from './img/rain01.jpg';
import rain02 from './img/rain02.jpg';
import drizzle01 from './img/drizzle01.jpg';
import drizzle02 from './img/drizzle02.jpg';
import thunderstorm01 from './img/thunderstorm01.jpg';
import thunderstorm02 from './img/thunderstorm02.jpg';
import snow01 from './img/snow01.jpg';
import snow02 from './img/snow02.jpg';
import fog01 from './img/fog01.jpg';
import fog02 from './img/fog02.jpg';
import atmosphere01 from './img/atmosphere01.jpg';

export default (weatherCondition, sunrise, sunset) => {
  let bgURL;

  if (
    getDate('opt4') > getTime('opt4', sunrise) &&
    getDate('opt4') < getTime('opt4', sunset)
  ) {
    switch (weatherCondition) {
      default:
        bgURL = clear01;
        break;
      case 'Clear':
        bgURL = clear01;
        break;
      case 'Clouds':
        bgURL = clouds01;
        break;
      case 'Rain':
        bgURL = rain01;
        break;
      case 'Drizzle':
        bgURL = drizzle01;
        break;
      case 'Thunderstorm':
        bgURL = thunderstorm01;
        break;
      case 'Snow':
        bgURL = snow01;
        break;
      case 'Mist':
      case 'Fog':
      case 'Haze':
      case 'Smoke':
        bgURL = fog01;
        break;
      case 'Squall':
      case 'Tornado':
      case 'Sand':
      case 'Dust':
        bgURL = atmosphere01;
        break;
    }
    return bgURL;
  } else {
    switch (weatherCondition) {
      default:
        bgURL = clear02;
        break;
      case 'Clear':
        bgURL = clear02;
        break;
      case 'Clouds':
        bgURL = clouds02;
        break;
      case 'Rain':
        bgURL = rain02;
        break;
      case 'Drizzle':
        bgURL = drizzle02;
        break;
      case 'Thunderstorm':
        bgURL = thunderstorm02;
        break;
      case 'Snow':
        bgURL = snow02;
        break;
      case 'Mist':
      case 'Fog':
      case 'Haze':
      case 'Smoke':
        bgURL = fog02;
        break;
      case 'Squall':
      case 'Tornado':
      case 'Sand':
      case 'Dust':
        bgURL = atmosphere01;
        break;
    }
    return bgURL;
  }
};
