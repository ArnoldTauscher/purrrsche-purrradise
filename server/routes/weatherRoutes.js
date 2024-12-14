import express from 'express';
import { getCities, getCurrentWeather, getForecast, getTiles } from '../controllers/weatherController.js';

const router = express.Router();

router.get('/cities', getCities);
router.get('/current/:city', getCurrentWeather);
router.get('/forecast/:city', getForecast);
router.get('/:type/:z/:x/:y', getTiles);

export default router;