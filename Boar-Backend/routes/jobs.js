import express from 'express';
import {
    getJobs,
    getJobById,
    createJob,
    updateJob,
    deleteJob,
} from '../controllers/jobController.js';
import { authenticateToken, authorizeRoles } from '../middleware/auth.js';

const router = express.Router();

router.get('/', getJobs);
router.get('/:id', getJobById);
router.post('/', authenticateToken, authorizeRoles('ADMIN', 'SUPERADMIN'), createJob);
router.put('/:id', authenticateToken, authorizeRoles('ADMIN', 'SUPERADMIN'), updateJob);
router.delete('/:id', authenticateToken, authorizeRoles('ADMIN', 'SUPERADMIN'), deleteJob);

export default router;
