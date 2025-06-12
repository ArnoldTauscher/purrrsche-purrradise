import express from 'express';
import {
    getCities,
    getCurrentWeather,
    getForecast,
    getTiles
} from '../controllers/weatherController.js';

const router = express.Router();

// Route für die Städtesuche
router.get('/cities', getCities);
// Route für das aktuelle Wetter einer Stadt
router.get('/current/:city', getCurrentWeather);
// Route für die Wettervorhersage einer Stadt
router.get('/forecast/:city', getForecast);
// Route für Wetterkarten-Kacheln (Tiles)
router.get('/:type/:z/:x/:y', getTiles);

export default router;