import React, { Component } from 'react';
import getApi from './getApi';
import { getDate } from '../../assets/js/date';

const currentForecast = 'weather';
const hourlyForecast = 'forecast';
const AppContext = React.createContext();

export class Provider extends Component {
  constructor() {
    super();
    this.state = {
      currentWeatherData: {
        currentTemp: [],
        highTemp: [],
        lowTemp: [],
        location: [],
        realFeel: [],
        pressure: [],
        humidity: [],
        weatherCondition: [],
        weatherTypeDes: [],
        weatherIcon: [],
        sunrise: [],
        sunset: [],
        wind: [],
        clouds: [],
        rain: [],
      },
      hourlyWeatherData: {
        listData: [],
      },
      formData: {
        value: '',
      },
      time: {
        currentTime: '',
      },
    };
  }

  handleFormChange = e => {
    this.setState({
      formData: { value: e.target.value },
    });
  };

  handleFormSubmit = e => {
    const formInput = this.state.formData.value;

    e.preventDefault();

    //Checks if form input is a Zip Code.
    if (isNaN(formInput) === false) {
      if (formInput.length === 5) {
        // fetch current weather data via Zip Code.

        getApi('zip', currentForecast, formInput)
          .then(data => {
            this.setState(data);
          })
          .then(
            this.setState({
              time: {
                currentTime: getDate('opt1'),
              },
            })
          )
          .catch(error => {
            console.log(
              'Error fetching current weather data via user input',
              error
            );
            alert(
              'Please verify that you have entered a valid US Zip Code.',
              error
            );
            console.log(getApi('zip', currentForecast, formInput));
          });

        // fetch Hourly weather data via Zip Code.
        getApi('zip', hourlyForecast, formInput)
          .then(data => {
            this.setState(data);
          })
          .catch(error => {
            console.log(
              'Error fetching hourly weather data via user input.',
              error
            );
          });
      } else {
        alert('Please enter a valid 5 digit Zip Code.');
      }
    }

    // Check if form input is a string for (city) input.
    else if (isNaN(formInput)) {
      // fetch current weather data via (city) input.
      getApi('city', currentForecast, formInput)
        .then(data => {
          this.setState(data);
        })
        .then(
          this.setState({
            time: {
              currentTime: getDate('opt1'),
            },
          })
        )
        .catch(error => {
          console.log('Error in fetching city name.', error);
          alert(
            'Please verify that you have entered a valid US city name.',
            error
          );
        });

      // fetch current weather data via (city) input.
      getApi('city', hourlyForecast, formInput).then(data => {
        this.setState(data);
      });
    }

    this.setState({
      formData: { value: '' },
    });
  };

  componentDidMount() {
    const apiInput = 10001;

    // Initial fetch of current weather data via Zip Code.
    getApi('zip', currentForecast, apiInput)
      .then(data => {
        this.setState(data);
      })
      .then(
        this.setState({
          time: {
            currentTime: getDate('opt1'),
          },
        })
      )
      .catch(error => {
        console.log(
          'Error in fetching the initial current weather data via Zip code.',
          error
        );
      });

    // Init fetch of Hourly weather data via Zip Code.
    getApi('zip', hourlyForecast, apiInput)
      .then(data => {
        this.setState(data);
      })
      .catch(error => {
        console.log(
          'Error in fetching the initial hourly weather data via Zip code.',
          error
        );
      });
  }

  render() {
    return (
      <AppContext.Provider
        value={{
          currentWeatherData: this.state.currentWeatherData,
          hourlyWeatherData: this.state.hourlyWeatherData.listData,
          form: this.state.formData,
          time: this.state.time.currentTime,
          actions: {
            formChange: this.handleFormChange,
            submitFormChange: this.handleFormSubmit,
          },
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export const Consumer = AppContext.Consumer;
