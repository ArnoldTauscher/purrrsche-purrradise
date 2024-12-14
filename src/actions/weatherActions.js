import { fetchCities, fetchCurrentWeather, fetchForecast } from '../api/weatherApi';

export const LOAD_CITIES_REQUEST = 'LOAD_CITIES_REQUEST';
export const LOAD_CITIES_SUCCESS = 'LOAD_CITIES_SUCCESS';
export const LOAD_CITIES_FAILURE = 'LOAD_CITIES_FAILURE';

export const GET_WEATHER_REQUEST = 'GET_WEATHER_REQUEST';
export const GET_WEATHER_SUCCESS = 'GET_WEATHER_SUCCESS';
export const GET_WEATHER_FAILURE = 'GET_WEATHER_FAILURE';

export const loadCities = (query) => async (dispatch) => {
  dispatch({ type: LOAD_CITIES_REQUEST });

  if (query.length > 2) {
    try {
      const cities = await fetchCities(query);
      dispatch({
        type: LOAD_CITIES_SUCCESS,
        payload: cities
      });
    } catch (error) {
      dispatch({
      type: LOAD_CITIES_FAILURE, 
      payload: error.message || "Failed to loading cities"
      });
    }
  }
};

export const getWeather = (city) => async (dispatch) => {
  dispatch({ type: GET_WEATHER_REQUEST });

  try {
    const [currentWeather, forecast] = await Promise.all([
      fetchCurrentWeather(city),
      fetchForecast(city)
    ]);
    dispatch({ 
      type: GET_WEATHER_SUCCESS, 
      payload: { currentWeather, forecast } 
    });
  } catch (error) {
    dispatch({ 
      type: GET_WEATHER_FAILURE, 
      payload: error.message || "Failed to fetch weather data"
    });
  }
};