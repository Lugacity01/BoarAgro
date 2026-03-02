import express from 'express';
import { getUsers, createUser, updateUser, deleteUser } from '../controllers/userController.js';
import { authenticateToken, authorizeRoles } from '../middleware/auth.js';

const router = express.Router();

router.get('/', authenticateToken, authorizeRoles('SUPERADMIN'), getUsers);
router.post('/', authenticateToken, authorizeRoles('SUPERADMIN'), createUser);
router.put('/:id', authenticateToken, authorizeRoles('SUPERADMIN'), updateUser);
router.delete('/:id', authenticateToken, authorizeRoles('SUPERADMIN'), deleteUser);

export default router;
