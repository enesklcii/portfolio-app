import { Router } from 'express';
import { getEducation, createEducation } from '../controllers/educationController.js';

const router = Router();

router.get('/', getEducation);
router.post('/', createEducation);

export default router;
