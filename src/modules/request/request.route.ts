import { Router } from 'express';
import { createRequest, getAllRequests } from './request.controller';

const router = Router();

router.post('/', createRequest);
router.get('/', getAllRequests);

export default router;