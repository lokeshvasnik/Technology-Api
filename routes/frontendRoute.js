import express from 'express';
const router = express.Router();
import { frontEnd } from '../controllers/frontendController.js';

router.get('/frontend', frontEnd);  

export default router;
