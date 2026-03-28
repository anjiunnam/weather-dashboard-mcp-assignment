import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import WeatherCard from "./WeatherCard";

test("renders weather details", () => {
  const mockWeather = {
    city: "Toronto",
    country: "CA",
    temperature: 10,
    condition: "Clouds",
    humidity: 65,
    windSpeed: 4.2,
  };

  render(<WeatherCard weather={mockWeather} />);

  expect(screen.getByText(/Toronto, CA/i)).toBeInTheDocument();
  expect(screen.getByText(/Temperature: 10 °C/i)).toBeInTheDocument();
  expect(screen.getByText(/Humidity: 65%/i)).toBeInTheDocument();
});