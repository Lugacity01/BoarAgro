import express from 'express';
import {
    getApplications,
    getApplicationById,
    createApplication,
    deleteApplication,
} from '../controllers/applicationController.js';
import { authenticateToken } from '../middleware/auth.js';
import { upload } from '../middleware/upload.js';

const router = express.Router();

router.get('/', authenticateToken, getApplications);
router.get('/:id', authenticateToken, getApplicationById);
router.post('/', upload.single('document'), createApplication); // Public route for users to submit applications
router.delete('/:id', authenticateToken, deleteApplication);

export default router;
