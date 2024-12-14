import React from 'react';
import { WeatherDisplay } from './WeatherDisplay';
import './weatherapp.css';

export const WeatherApp = () => {
  return (
    <div className='weather-app'>
      <h1>Wetter App</h1>
      <h4>Schauen Sie nach, ob es sinnvoll wäre, Ihr Cabrio aus der Garage zu holen.</h4>
      <WeatherDisplay />
    </div>
  );
};