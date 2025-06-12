import axios from 'axios';
import NodeCache from 'node-cache';

// Hole den OpenWeatherMap API-Key aus den Umgebungsvariablen
const OWM_API_KEY = process.env.OWM_API_KEY;

// Initialisiere Cache für Wetterdaten (10 Minuten Standard-Lebensdauer)
const cache = new NodeCache({ stdTTL: 600 });

// Sucht Städte anhand eines Query-Strings.
export const getCities = async (req, res, next) => {
  const query = req.query.q;
  if (query && query.length > 2) {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(query)}&limit=5&appid=${OWM_API_KEY}`
      );
      return res.status(200).json(response.data);
    } catch (error) {
      console.error('Fehler in getCities:', error);
      next(error);
    }
  } else {
    // Query zu kurz
    return res.status(400).json({ error: "Query zu kurz" });
  }
};

// Holt das aktuelle Wetter für eine Stadt, nutzt Caching.
export const getCurrentWeather = async (req, res, next) => {
  const { city } = req.params;
  const cacheKey = `weather_${city}`;

  const cachedData = cache.get(cacheKey);
  if (cachedData) {
    return res.json(cachedData);
  }

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${OWM_API_KEY}&units=metric&lang=de`
    );
    cache.set(cacheKey, response.data);
    return res.status(200).json(response.data);
  } catch (error) {
    console.error('Fehler in getCurrentWeather:', error);
    next(error);
  }
};

// Holt die Wettervorhersage für eine Stadt, nutzt Caching.
export const getForecast = async (req, res, next) => {
  const { city } = req.params;
  const cacheKey = `forecast_${city}`;

  const cachedData = cache.get(cacheKey);
  if (cachedData) {
    return res.json(cachedData);
  }

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(city)}&appid=${OWM_API_KEY}&units=metric&lang=de`
    );
    cache.set(cacheKey, response.data, 1800); // 30 Minuten Cache für Forecast
    return res.status(200).json(response.data);
  } catch (error) {
    console.error('Fehler in getForecast:', error);
    next(error);
  }
};

// Holt Wetterkarten-Kacheln (Tiles) von OpenWeatherMap.
export const getTiles = async (req, res, next) => {
  const { type, z, x, y } = req.params;
  try {
    const response = await axios.get(
      `https://tile.openweathermap.org/map/${type}/${z}/${x}/${y}.png?appid=${OWM_API_KEY}`,
      { responseType: 'arraybuffer' }
    );
    res.set('Content-Type', 'image/png');
    return res.status(200).json(response.data);
  } catch (error) {
    console.error('Fehler in getTiles:', error);
    next(error);
  }
};
