import { Router } from 'express';
import { createDonation, getAllDonations } from './donation.controller';

const router = Router();

router.post('/', createDonation);
router.get('/', getAllDonations);

export default router;