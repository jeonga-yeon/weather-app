import React, { useState } from "react";
import { Button } from "react-bootstrap";

const WeatherButton = ({ current, setWeather }) => {
  const getWeatherByCity = async (city) => {
    if (city !== "current") {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`;
      const response = await fetch(url);
      const data = await response.json();
      setWeather(data);
    }
  };
  return (
    <div>
      <Button variant="warning" onClick={current}>
        내 위치
      </Button>
      <Button variant="warning" onClick={() => getWeatherByCity("new york")}>
        뉴욕
      </Button>
      <Button variant="warning" onClick={() => getWeatherByCity("paris")}>
        파리
      </Button>
      <Button variant="warning" onClick={() => getWeatherByCity("bangkok")}>
        방콕
      </Button>
    </div>
  );
};

export default WeatherButton;
