import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import contactRoutes from './routes/contact.js';
import authRoutes from './routes/auth.js';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';




dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); 
app.use(cors({
  origin: 'https://kmanjunathportfolio.vercel.app',
  credentials: true, // required for cookies
}));
app.use(bodyParser.json());
app.use(cookieParser());


app.use('/api/contact', contactRoutes);
app.use('/', authRoutes);

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on http://0.0.0.0:${PORT}`);
});