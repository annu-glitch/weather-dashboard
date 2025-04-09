import { useState } from 'react';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

  const fetchWeather = async () => {
    if (!city) {
      setError('Please enter a city name.');
      return;
    }

    setLoading(true);
    setError('');
    setWeather(null);

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      if (!res.ok) throw new Error('City not found');
      const data = await res.json();
      setWeather(data);
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      fetchWeather();
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-200 to-blue-500 text-gray-800 px-4">
      <h1 className="text-4xl font-bold mb-6">🌤️ Weather Dashboard</h1>

      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={city}
          placeholder="Enter city name"
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={handleKeyPress}
          className="px-4 py-2 rounded border border-gray-300 shadow"
        />
        <button
          onClick={fetchWeather}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Search
        </button>
      </div>

      {loading && <p className="text-lg">Loading...</p>}

      {error && <p className="text-red-600 font-semibold">{error}</p>}

      {weather && (
        <div className="bg-white bg-opacity-80 rounded-lg p-6 shadow-md text-center max-w-md w-full">
          <h2 className="text-2xl font-bold mb-2">{weather.name}</h2>
          <p className="text-xl">{weather.weather[0].main}</p>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="Weather Icon"
            className="mx-auto"
          />
          <p className="text-3xl font-semibold mt-2">{weather.main.temp}°C</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind: {weather.wind.speed} km/h</p>
        </div>
      )}
    </div>
  );
}

export default App;
