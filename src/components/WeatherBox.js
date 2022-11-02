import React from "react";

const WeatherBox = ({ weather }) => {
  return (
    <div className="weather-box">
      <h4>{weather?.name}</h4>
      <h2>
        {weather?.main.temp}℃ /{" "}
        {weather && (weather.main.temp * 1.8 + 32).toFixed(2)}℉
      </h2>
      <h2 className="weather-box__desc">{weather?.weather[0].description}</h2>
    </div>
  );
};

export default WeatherBox;
