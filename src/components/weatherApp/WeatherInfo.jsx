import React from 'react';
import PropTypes from 'prop-types';

export const WeatherInfo = ({ weatherData }) => {
  const currentDate = new Date();

  const formattedDate = currentDate.toLocaleDateString('de-DE', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className='weather-app-content-info'>
      <h2>Wetter in {weatherData.name}</h2>
      <h4>{formattedDate}</h4>
      <img 
        src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} 
        alt={weatherData.weather[0].description} 
      />
      <div className='weather-app-content-info-field'>
        <h4>Temperatur: </h4><h4 className='weather-app-content-info-value'>{weatherData.main.temp}°C</h4>
      </div> 
      <div className='weather-app-content-info-field'>
        <h4>Gefühlt: </h4><h4 className='weather-app-content-info-value'>{weatherData.main.feels_like}°C</h4>
      </div>
      <div className='weather-app-content-info-field'>
        <h4>Beschreibung: </h4><h4 className='weather-app-content-info-value'>{weatherData.weather[0].description}</h4>
      </div>
      <div className='weather-app-content-info-field'>
        <h4>Höchsttemperatur: </h4><h4 className='weather-app-content-info-value'>{weatherData.main.temp_max}°C</h4>
      </div>
      <div className='weather-app-content-info-field'>
        <h4>Luftfeuchtigkeit: </h4><h4 className='weather-app-content-info-value'>{weatherData.main.humidity}%</h4>
      </div>
      <div className='weather-app-content-info-field'>
        <h4>Luftdruck: </h4><h4 className='weather-app-content-info-value'>{weatherData.main.pressure} mbar</h4>
      </div>
      <div className='weather-app-content-info-field'>
        <h4>Windgeschwindigkeit: </h4><h4 className='weather-app-content-info-value'>{weatherData.wind.speed} m/s</h4>
      </div>
      <div className='weather-app-content-info-field'>
        <h4>Fernsicht: </h4><h4 className='weather-app-content-info-value'>{weatherData.visibility / 1000} km</h4>
      </div>
    </div>
  );
};

WeatherInfo.propTypes = {
  weatherData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    weather: PropTypes.arrayOf(PropTypes.shape({
      icon: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })).isRequired,
    main: PropTypes.shape({
      temp: PropTypes.number.isRequired,
      feels_like: PropTypes.number.isRequired,
      temp_max: PropTypes.number.isRequired,
      humidity: PropTypes.number.isRequired,
      pressure: PropTypes.number.isRequired,
    }).isRequired,
    wind: PropTypes.shape({
      speed: PropTypes.number.isRequired,
    }).isRequired,
    visibility: PropTypes.number.isRequired,
  }).isRequired,
};