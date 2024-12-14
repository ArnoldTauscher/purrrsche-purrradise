import React, { useState, useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getWeather } from '../../actions/weatherActions';
import { ChartWrapper } from '../chartWrapper/ChartWrapper';
import { CityAutocomplete } from './CityAutocomplete';
import { WeatherMap } from './WeatherMap';
import { TemperatureLegend, PrecipitationLegend } from './WeatherLegends';
import { chartOptions, createChartData } from './weatherChartConfig';
import { LoadingMessage } from './LoadingMessage';
import { ErrorMessage } from './ErrorMessage';
import { WeatherInfo } from './WeatherInfo';

export const WeatherDisplay = () => {
  const [selectedCity, setSelectedCity] = useState(null);
  const dispatch = useDispatch();
  const { weatherLoading, weatherData, forecastData, weatherError } = useSelector(state => state.weather);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (selectedCity) {
      dispatch(getWeather(selectedCity.name));
    }
  }, [selectedCity, dispatch]);

  const chartData = useMemo(() => {
    if (!forecastData) return null;
    return createChartData(forecastData);
  }, [forecastData]);

  const renderWeatherData = () => {
    if (!weatherData || !forecastData) return null;

    return (
      <>
        <div className='weather-app-content'>
          <div className='weather-app-content-container'>
            <WeatherInfo weatherData={weatherData} />
            <div className='chart-wrapper'>
              <ChartWrapper data={chartData} options={chartOptions} />
            </div>
          </div>
          <div className='weather-map'>
            <WeatherMap lat={weatherData.coord.lat} lon={weatherData.coord.lon} />
            <div className='weather-map-legends'>
              <TemperatureLegend />
              <PrecipitationLegend />
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className='weather-display'>
      <form className='weather-app__input' onSubmit={handleSubmit}>
        <CityAutocomplete onSelectCity={setSelectedCity} />
        <button type="submit">Suchen</button>
      </form>

      {weatherLoading && <LoadingMessage />}
      {weatherError && <ErrorMessage message={weatherError} />}
      {!weatherLoading && !weatherError && renderWeatherData()}
    </div>
  );
};