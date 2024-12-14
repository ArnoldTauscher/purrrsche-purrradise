import axios from 'axios';
import NodeCache from 'node-cache';

const STOCK_API_KEY = process.env.STOCK_API_KEY;
const SYMBOL = 'PAH3.DE';
const cache = new NodeCache({ stdTTL: 300 }); // Cache für 5 Minuten

export const getStockData = async (req, res) => {
  const cacheKey = `stock_${SYMBOL}`;
  const cachedData = cache.get(cacheKey);

  if (cachedData) {
    return res.json(cachedData);
  }

  const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${SYMBOL}&apikey=${STOCK_API_KEY}`;

  try {
    const response = await axios.get(url);
    cache.set(cacheKey, response.data);
    res.json(response.data);
  } catch (error) {
    if (error.response) {
      res.status(401).json({ message: 'Ungültiger API-Schlüssel' });
    } else {
      res.status(500).json({ message: 'Fehler beim Abrufen der Börsendaten' });
    }
  }
};
