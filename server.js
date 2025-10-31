import 'dotenv/config';
import express from 'express';
import { dbconnect } from './src/db/index.js';
import mainRouter from './src/routes/index.js';
import { errorHandler } from './src/helper/errorHandler.js';

const app = express();

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', mainRouter);   
app.use(errorHandler);            

const PORT = process.env.PORT || 4000;

async function start() {
  try {
    await dbconnect();
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (err) {
    console.error('Failed to start server:', err);
    process.exit(1);
  }
}

start();