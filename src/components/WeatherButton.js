import { Button } from "react-bootstrap";

const WeatherButton = ({ cities, setCity }) => {
  return (
    <div>
      <Button variant="warning">내 위치</Button>
      {cities.map((city, index) => (
        <Button variant="warning" key={index} onClick={() => setCity(city)}>
          {city}
        </Button>
      ))}
    </div>
  );
};

export default WeatherButton;
