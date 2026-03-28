const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export async function fetchWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  const response = await fetch(url);

  if (!response.ok) {
    if (response.status === 401) {
      throw new Error("API key is invalid or not active yet");
    }

    if (response.status === 404) {
      throw new Error("City not found");
    }

    throw new Error("Something went wrong while fetching weather data");
  }

  const data = await response.json();

  return {
    city: data.name,
    country: data.sys.country,
    temperature: data.main.temp,
    condition: data.weather[0].main,
    humidity: data.main.humidity,
    windSpeed: data.wind.speed,
  };
}