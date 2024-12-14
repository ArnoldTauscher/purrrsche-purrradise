import {
  LOAD_CITIES_REQUEST,
  LOAD_CITIES_SUCCESS,
  LOAD_CITIES_FAILURE,
  GET_WEATHER_REQUEST,
  GET_WEATHER_SUCCESS,
  GET_WEATHER_FAILURE,
} from '../actions/weatherActions';

const initialState = {
  citiesLoading: false,
  citiesOptions: [],
  citiesError: null,

  weatherLoading: false,
  weatherData: null,
  forecastData: null,
  weatherError: null,
};

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CITIES_REQUEST:
      return { ...state, citiesLoading: true, citiesError: null };
    case LOAD_CITIES_SUCCESS:
      return {
        ...state,
        citiesOptions: action.payload,
        citiesLoading: false
      };
    case LOAD_CITIES_FAILURE:
      return {
        ...state,
        citiesLoading: false,
        citiesError: action.payload
      };

    case GET_WEATHER_REQUEST:
      return { ...state, weatherLoading: true, weatherError: null };
    case GET_WEATHER_SUCCESS:
      return {
        ...state,
        weatherLoading: false,
        weatherData: action.payload.currentWeather,
        forecastData: action.payload.forecast,
        weatherError: null
      };
    case GET_WEATHER_FAILURE:
      return {
        ...state,
        weatherLoading: false,
        weatherData: null,
        forecastData: null,
        weatherError: action.payload
      };
      
    default:
      return state;
  }
};
  