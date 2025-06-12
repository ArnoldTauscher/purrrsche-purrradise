import axios from 'axios';
import NodeCache from 'node-cache';

// Hole den API-Key aus den Umgebungsvariablen
const STOCK_API_KEY = process.env.STOCK_API_KEY;
// Aktien-Symbol, das abgefragt werden soll
const SYMBOL = 'PAH3.DE';
// Initialisiere Cache mit 30 Minuten Standard-Lebensdauer
const cache = new NodeCache({ stdTTL: 1800 });

// Holt aktuelle Aktien-Daten von der API oder aus dem Cache.

export const getStockData = async (req, res, next) => {
  const cacheKey = `stock_${SYMBOL}`;
  const cachedData = cache.get(cacheKey);

  // Wenn Daten im Cache sind, direkt zurückgeben
  if (cachedData) {
    return res.json(cachedData);
  }

  // Baue die URL für die externe Aktien-API
  const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${SYMBOL}&apikey=${STOCK_API_KEY}`;

  try {
    const response = await axios.get(url);
    
    // Prüfen, ob das erwartete Feld vorhanden ist
    if (!response.data || !response.data['Time Series (Daily)']) {
      const errorMessage = response.data && response.data['Error Message']
        ? response.data['Error Message']
        : 'Ungültige Antwort von der Aktien-API';
      return res.status(502).json({ error: errorMessage });
    }

    // Antwortdaten im Cache speichern
    cache.set(cacheKey, response.data);
    return res.status(200).json(response.data);
  } catch (error) {
    console.error('Fehler in getStockData:', error);
    next(error);
  }
};
