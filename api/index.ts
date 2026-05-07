import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import contactRoutes from './routes/contact';

// Load environment variables
dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Allows your React frontend to communicate with this backend
app.use(express.json()); // Allows the server to accept JSON data from the frontend

// Routes
app.use('/api/contact', contactRoutes);

// Basic health check route
app.get('/api/health', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Outpro.India Backend is running smoothly!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});