import { Router } from 'express';
import { getProjects, createProject } from '../controllers/projectController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = Router();

router.get('/', getProjects);
router.post('/', protect, createProject); // ✅ sadece admin giriş yaptıysa ekleyebilir

export default router;
