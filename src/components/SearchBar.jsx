import { useState } from "react";

function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  const handleClick = () => {
    if (!city.trim()) return;
    onSearch(city);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleClick}>Search</button>
    </div>
  );
}

export default SearchBar;