function WeatherCard({ weather }) {
  return (
    <div>
      <h2>
        {weather.city}, {weather.country}
      </h2>
      <p>Temperature: {weather.temperature} °C</p>
      <p>Condition: {weather.condition}</p>
      <p>Humidity: {weather.humidity}%</p>
      <p>Wind Speed: {weather.windSpeed} m/s</p>
    </div>
  );
}

export default WeatherCard;