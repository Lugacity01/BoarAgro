import express from 'express';
import {
    getProducts,
    getProductBySlug,
    createProduct,
    updateProduct,
    deleteProduct,
} from '../controllers/productController.js';
import { authenticateToken, authorizeRoles } from '../middleware/auth.js';

const router = express.Router();

router.get('/', getProducts);
router.get('/:slug', getProductBySlug);


router.post('/', authenticateToken, authorizeRoles('SUPERADMIN'), createProduct);
router.put('/:id', authenticateToken, authorizeRoles('SUPERADMIN'), updateProduct);
router.delete('/:id', authenticateToken, authorizeRoles('SUPERADMIN'), deleteProduct);

export default router;
