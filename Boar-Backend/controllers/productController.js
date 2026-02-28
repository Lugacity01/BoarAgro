import prisma from '../lib/prisma.js';

export const getProducts = async (req, res) => {
    try {
        const products = await prisma.product.findMany();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch products' });
    }
};

export const getProductBySlug = async (req, res) => {
    try {
        const product = await prisma.product.findUnique({
            where: { slug: req.params.slug },
        });
        if (!product) return res.status(404).json({ error: 'Product not found' });
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch product' });
    }
};

export const createProduct = async (req, res) => {
    try {
        const product = await prisma.product.create({
            data: req.body,
        });
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ error: 'Failed to create product' });
    }
};

export const updateProduct = async (req, res) => {
    try {
        const product = await prisma.product.update({
            where: { id: req.params.id },
            data: req.body,
        });
        res.json(product);
    } catch (error) {
        res.status(400).json({ error: 'Failed to update product' });
    }
};

export const deleteProduct = async (req, res) => {
    try {
        await prisma.product.delete({
            where: { id: req.params.id },
        });
        res.status(204).send();
    } catch (error) {
        res.status(400).json({ error: 'Failed to delete product' });
    }
};
