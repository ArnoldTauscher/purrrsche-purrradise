import axios from 'axios';
import NodeCache from 'node-cache';

const OWM_API_KEY = process.env.OWM_API_KEY;

const cache = new NodeCache({ stdTTL: 600 }); // Cache für 10 Minuten

export const getCities = async (req, res) => {
  const query = req.query.q;
  if (query && query.length > 2) {
    try {
      const response = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${OWM_API_KEY}`);
      res.json(response.data);
    } catch (error) {
      handleWeatherError(error, res);
    }
  } else {
    res.status(400).json({ error: "Query zu kurz" });
  }
};

export const getCurrentWeather = async (req, res) => {
  const { city } = req.params;
  const cacheKey = `weather_${city}`;

  const cachedData = cache.get(cacheKey);
  if (cachedData) {
    return res.json(cachedData);
  }

  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OWM_API_KEY}&units=metric&lang=de`);
    cache.set(cacheKey, response.data);
    res.json(response.data);
  } catch (error) {
    handleWeatherError(error, res);
  }
};

export const getForecast = async (req, res) => {
  const { city } = req.params;
  const cacheKey = `forecast_${city}`;

  const cachedData = cache.get(cacheKey);
  if (cachedData) {
    return res.json(cachedData);
  }

  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${OWM_API_KEY}&units=metric&lang=de`);
    cache.set(cacheKey, response.data);
    res.json(response.data);
  } catch (error) {
    handleWeatherError(error, res);
  }
};

export const getTiles = async (req, res) => {
  const { type, z, x, y } = req.params;
  try {
    const response = await axios.get(
      `https://tile.openweathermap.org/map/${type}/${z}/${x}/${y}.png?appid=${OWM_API_KEY}`,
      { responseType: 'arraybuffer' }
    );
    res.set('Content-Type', 'image/png');
    res.send(response.data);
  } catch (error) {
    handleWeatherError(error, res);
  }
};

const handleWeatherError = (error, res) => {
  if (axios.isAxiosError(error) && error.response) {
    switch (error.response.status) {
      case 401:
        res.status(401).json({ message: 'Ungültiger API-Schlüssel' });
        break;
      case 404:
        res.status(404).json({ message: 'Ressource nicht gefunden' });
        break;
      default:
        res.status(error.response.status).json({ message: 'Fehler beim OpenWeatherMap-Service', details: error.response.data });
    }
  } else {
    res.status(500).json({ message: 'Interner Serverfehler' });
  }
};