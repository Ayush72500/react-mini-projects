import { useState } from "react";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  async function handleSearch() {
    if (city === "") {
      setError("Please enter a city");
      setWeather(null);
      return;
    }

    try {
      setError("");

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=your-api-key&units=metric`
      );

      if (!response.ok) {
        throw new Error("City not found");
      }

      const data = await response.json();

      setWeather(data);
    } catch (err) {
      setWeather(null);
      setError(err.message);
    }
  }

  return (
    <div>
      <h1>Weather App</h1>

      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={handleSearch}>Search</button>

      {error && <h3>{error}</h3>}

      {weather && (
        <ul>
          <li>📍 City : {weather.name}</li>
          <li>🌡 Temperature : {weather.main.temp}°C</li>
          <li>☁ Condition : {weather.weather[0].main}</li>
          <li>💧 Humidity : {weather.main.humidity}%</li>
          <li>🌬 Wind : {weather.wind.speed} m/s</li>
        </ul>
      )}
    </div>
  );
}

export default App;