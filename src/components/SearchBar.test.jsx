import { test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import SearchBar from "./SearchBar";

test("updates input when user types", () => {
  render(<SearchBar onSearch={() => {}} />);

  const input = screen.getByPlaceholderText(/enter city name/i);
  fireEvent.change(input, { target: { value: "Toronto" } });

  expect(input.value).toBe("Toronto");
});