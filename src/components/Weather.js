import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchWeather } from "../actions/weatherActions";

const Weather = () => {
  const [city, setCity] = useState("");
  const weather = useSelector((state) => state.weather.weatherData);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchWeather(city));
  };

  return (
    <div>
      <h2>Get Weather Information</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Get Weather</button>
      </form>

      {weather && (
        <div>
          <h3>{weather.city}</h3>
          <p>
            {weather.temperature} °C, {weather.description}
          </p>
          <img
            src={`http://openweathermap.org/img/w/${weather.icon}.png`}
            alt={weather.description}
          />
        </div>
      )}
    </div>
  );
};

export default Weather;
