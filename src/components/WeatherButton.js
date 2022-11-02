/* eslint-disable no-use-before-define */
import { Button } from "react-bootstrap";

const WeatherButton = ({ cities, changeCity, selectedCity }) => {
  return (
    <div>
      <Button
        className="weather-button"
        variant={`${selectedCity === "" ? "info" : "warning"}`}
        onClick={() => changeCity("current")}
      >
        내 위치
      </Button>
      {cities.map((city, index) => (
        <Button
          className="weather-button"
          variant={`${selectedCity === city ? "info" : "warning"}`}
          key={index}
          onClick={() => changeCity(city)}
        >
          {city}
        </Button>
      ))}
    </div>
  );
};

export default WeatherButton;
