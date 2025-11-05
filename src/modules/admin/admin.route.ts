import { Router } from 'express';
import { getDashboardStats } from './admin.controller';

const router = Router();

router.get('/stats', getDashboardStats);

export default router;