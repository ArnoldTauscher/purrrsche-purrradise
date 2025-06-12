import express from 'express';
import { getStockData } from '../controllers/stockController.js';
const router = express.Router();

// Route für das Abrufen der Aktien-Daten
router.get('/', getStockData);

export default router;