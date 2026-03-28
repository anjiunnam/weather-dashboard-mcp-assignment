import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import { fetchWeather } from "./services/weatherApi";
import "./App.css";

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (city) => {
    try {
      setLoading(true);
      setError("");
      const data = await fetchWeather(city);
      setWeather(data);
    } catch (err) {
      setWeather(null);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Weather Dashboard</h1>
      <SearchBar onSearch={handleSearch} />
      {loading && <p>Loading weather...</p>}
      {error && <p>{error}</p>}
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}

export default App;