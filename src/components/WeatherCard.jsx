function WeatherCard({ weather }) {
  if (!weather) return null;

  const { name, main, weather: details, wind } = weather;
  const icon = `https://openweathermap.org/img/wn/${details[0].icon}@2x.png`;

  return (
    <div className="bg-white shadow-md rounded-lg p-6 text-center">
      <h2 className="text-2xl font-bold text-blue-700">{name}</h2>
      <img src={icon} alt={details[0].description} className="mx-auto" />
      <p className="text-xl">{details[0].main}</p>
      <p className="text-3xl font-bold">{main.temp}°C</p>
      <div className="text-sm mt-2">
        <p>Humidity: {main.humidity}%</p>
        <p>Wind Speed: {wind.speed} km/h</p>
      </div>
    </div>
  );
}

export default WeatherCard;
