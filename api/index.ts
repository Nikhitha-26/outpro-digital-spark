import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import contactRoutes from './routes/contact';

// Load environment variables
dotenv.config();

const app: Application = express();

// Middleware
app.use(cors()); // Allows your React frontend to communicate with this backend
app.use(express.json()); // Allows the server to accept JSON data from the frontend

// Routes
app.use('/api/contact', contactRoutes);

// Basic health check route
app.get('/api/health', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Outpro.India Backend is running smoothly!' });
});

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`Outpro.India Backend is live and listening on port ${PORT}`);
});

export default app;