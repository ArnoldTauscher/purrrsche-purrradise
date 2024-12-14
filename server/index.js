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

const app = express();

app.use(cors());
app.use(express.json());
app.use(helmet());

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 1000 // Limit each IP to 100 requests per `window`
});

app.use(limiter);

app.use((req, res, next) => {
  if (req.url.includes('/api/weather')) {
    res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin');
  };
  next();
});

app.disable('x-powered-by')

app.get('/api/wake-up', (req, res) => {
    res.send('Server is awake!');
});

app.use('/api/stock-data', stockRoutes);
app.use('/api/weather', weatherRoutes);
app.use('/api/contact', contactRoutes);

const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 5000;

const connectDB = async () => {
  try {
    await mongoose.connect(CONNECTION_URL);
    console.log('Verbindung zur MongoDB Atlas hergestellt');
  } catch (err) {
    console.error('Fehler bei der Verbindung zur MongoDB:', err);
    process.exit(1);
  }
};

connectDB();

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));