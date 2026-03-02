import express from 'express';
import { submitContactForm, getContacts, deleteContact } from '../controllers/contactController.js';
import { authenticateToken, authorizeRoles } from '../middleware/auth.js';

const router = express.Router();

router.post('/', submitContactForm); // Public route for anyone to submit
router.get('/', authenticateToken, authorizeRoles('SUPERADMIN', 'ADMIN'), getContacts); // Protected route for admins
router.delete('/:id', authenticateToken, authorizeRoles('SUPERADMIN', 'ADMIN'), deleteContact);

export default router;
