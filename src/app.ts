import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import authRoutes from './modules/auth/auth.route';
import donationRoutes from './modules/donation/donation.route';
import requestRoutes from './modules/request/request.route';
import adminRoutes from './modules/admin/admin.route';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from Smart Blood Bank Backend!');
});

app.use('/api/auth', authRoutes);
app.use('/api/donations', donationRoutes);
app.use('/api/requests', requestRoutes);
app.use('/api/admin', adminRoutes);

app.listen(PORT, () => {
  console.log(`💉 Blood Bank Backend is running on port ${PORT}`);
  console.log(`✅ Server is accessible at: http://localhost:${PORT}`);
});
