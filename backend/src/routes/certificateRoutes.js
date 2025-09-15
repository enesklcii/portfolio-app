import express from 'express';
import { getCertificates, createCertificate } from '../controllers/certificateController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getCertificates);
router.post('/', protect, createCertificate);

export default router;
