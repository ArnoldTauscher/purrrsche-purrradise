import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import weatherRoutes from './routes/weatherRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import stockRoutes from './routes/stockRoutes.js';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';

dotenv.config();

// Liste der benötigten Umgebungsvariablen, die zwingend gesetzt sein müssen
const REQUIRED_ENV_VARS = [
  'CONNECTION_URL',
  'OWM_API_KEY',
  'STOCK_API_KEY'
];

// Prüfen, ob alle benötigten Umgebungsvariablen vorhanden sind
const missingVars = REQUIRED_ENV_VARS.filter((key) => !process.env[key]);
if (missingVars.length > 0) {
  console.error(
    `Fehlende Umgebungsvariablen: ${missingVars.join(', ')}. Bitte .env prüfen!`
  );
  process.exit(1);
}

const app = express();

// Domains aus Umgebungsvariable lesen und als Array speichern (für CORS)
const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(',').map(origin => origin.trim())
  : [];

// CORS gezielt für bestimmte Domains erlauben
app.use(cors({
  origin: function(origin, callback) {
    // Bei fehlender Origin (z.B. bei Postman) oder erlaubter Origin freigeben
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      // Fehlerobjekt mit Statuscode 403 erzeugen, wenn Origin nicht erlaubt ist
      const err = new Error('Nicht erlaubte Origin');
      err.status = 403;
      callback(err);
    }
  }
}));

app.use(express.json()); // Body-Parser für JSON aktivieren
app.use(helmet()); // Zusätzliche HTTP-Header für Sicherheit setzen

// Rate Limiting: Limitiert die Anzahl der Requests pro IP
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 Minuten Zeitfenster
    max: 100 // Maximal 100 Requests pro IP und Zeitfenster
});

app.use(limiter);

// Spezieller Header für Wetter-API-Routen, um Cross-Origin-Resource-Policy zu setzen
app.use((req, res, next) => {
  if (req.url.includes('/api/weather')) {
    res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin');
  };
  next();
});

// Entfernt den X-Powered-By-Header (Sicherheitsmaßnahme)
app.disable('x-powered-by')

// Health-Check-Route, um zu prüfen, ob der Server läuft
app.get('/api/wake-up', (req, res) => {
    res.send('Server is awake!');
});

// Logging-Middleware: Loggt alle eingehenden Requests mit Zeitstempel
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  next();
});

// API-Routen einbinden
app.use('/api/stock-data', stockRoutes);
app.use('/api/weather', weatherRoutes);
app.use('/api/contact', contactRoutes);

// Zentrale Error-Handling-Middleware für alle Fehlerfälle
app.use((err, req, res, next) => {
  console.error('Globaler Fehler:', err);
  if (res.headersSent) {
    return next(err);
  }
  // Spezielle Behandlung für CORS-Fehler
  if (err.message === 'Nicht erlaubte Origin') {
    return res.status(err.status || 403).json({ message: err.message });
  }
  // Generische Fehlerbehandlung
  return res.status(err.status || 500).json({
    message: err.message || 'Interner Serverfehler',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
});

const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 5000;

// Funktion zur Verbindung mit MongoDB Atlas
const connectDB = async () => {
  try {
    await mongoose.connect(CONNECTION_URL);
    console.log('Verbindung zur MongoDB Atlas hergestellt');
  } catch (err) {
    console.error('Fehler bei der Verbindung zur MongoDB:', err);
    process.exit(1);
  }
};

// Server nur starten, wenn nicht im Test-Modus
if (process.env.NODE_ENV !== 'test') {
  connectDB().then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  });
}

export default app;