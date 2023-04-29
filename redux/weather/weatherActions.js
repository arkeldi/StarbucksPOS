import axios from 'axios';


export const FETCH_WEATHER_REQUEST = 'FETCH_WEATHER_REQUEST';
export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';
export const FETCH_WEATHER_FAILURE = 'FETCH_WEATHER_FAILURE';

export const fetchWeatherRequest = () => {
  return {
    type: FETCH_WEATHER_REQUEST,
  };
};

export const fetchWeatherSuccess = (weather) => {
  return {
    type: FETCH_WEATHER_SUCCESS,
    payload: weather,
  };
};

export const fetchWeatherFailure = (error) => {
  return {
    type: FETCH_WEATHER_FAILURE,
    payload: error,
  };
};

export const fetchWeather = (city) => {
  return (dispatch) => {
    dispatch(fetchWeatherRequest());
    axios
      .get(`http://localhost:8000/api/v1/weather/${city}/`)
      .then((response) => {
        const weather = response.data;
        dispatch(fetchWeatherSuccess(weather));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchWeatherFailure(errorMsg));
      });
  };
};
