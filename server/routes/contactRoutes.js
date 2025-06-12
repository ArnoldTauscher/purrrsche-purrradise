import express from 'express';
import { createContact }  from '../controllers/contactController.js';
const router = express.Router();

// Route für das Absenden einer Kontaktanfrage
router.post('/', createContact);

export default router;