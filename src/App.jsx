import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import { fetchWeather } from "./services/weatherApi";
import "./App.css";

function App() {
  const [weather, setWeather] = useState(null);

  const handleSearch = async (city) => {
    const data = await fetchWeather(city);
    setWeather(data);
  };

  return (
    <div>
      <h1>Weather Dashboard</h1>
      <SearchBar onSearch={handleSearch} />
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}

export default App;