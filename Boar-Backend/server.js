import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import prisma from './lib/prisma.js';

import authRoutes from './routes/auth.js';
import productRoutes from './routes/products.js';
import jobRoutes from './routes/jobs.js';
import applicationRoutes from './routes/applications.js';
import userRoutes from './routes/users.js';
import contactRoutes from './routes/contacts.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

import path from 'path';

// Routes
app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));
app.use('/api', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/applications', applicationRoutes);
app.use('/api/users', userRoutes);
app.use('/api/contacts', contactRoutes);

// Basic health check route
app.get('/', (req, res) => {
    res.send('Backend Server is running');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
