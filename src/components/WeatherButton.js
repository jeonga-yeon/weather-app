/* eslint-disable no-use-before-define */
import { Button } from "react-bootstrap";

const WeatherButton = ({
  cities,
  setCity,
  current,
  clickedCity,
  clickedCurrent,
  setClickCurrent,
}) => {
  return (
    <div>
      <Button
        variant={clickedCurrent ? "info" : "warning"}
        onClick={() => {
          current();
          setClickCurrent(true);
          setCity("");
        }}
      >
        내 위치
      </Button>
      {cities.map((city, index) => (
        <Button
          variant={clickedCity === city ? "info" : "warning"}
          key={index}
          onClick={() => {
            setCity(city);
            setClickCurrent(false);
          }}
        >
          {city}
        </Button>
      ))}
    </div>
  );
};

export default WeatherButton;
