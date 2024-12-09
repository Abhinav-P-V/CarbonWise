import express from 'express';
import {
  saveCarbonFootprint,
  getCFPByFactor,
} from '../controller/carbonFootprintcontroller';
import { authMiddleware } from '../Middleware/authMiddleware';

const router = express.Router();

router.post('/save', authMiddleware, saveCarbonFootprint);
router.get('/factor', authMiddleware, getCFPByFactor);

export default router;
