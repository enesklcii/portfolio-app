import { Router } from 'express';
import profileRoutes from './profileRoutes.js';
import projectRoutes from './projectRoutes.js';
import messageRoutes from './messageRoutes.js';
import educationRoutes from './educationRoutes.js';
import authRoutes from './authRoutes.js';
import certificateRoutes from './certificateRoutes.js';



const router = Router();
router.use('/profile', profileRoutes);
router.use('/projects', projectRoutes);
router.use('/contact', messageRoutes);
router.use('/education', educationRoutes);
router.use('/auth', authRoutes);
router.use('/certificates', certificateRoutes);



export default router;