import prisma from '../lib/prisma.js';

export const submitContactForm = async (req, res) => {
    try {
        const { fullName, email, countryCode, phone, companyName, role, inquiryType, message } = req.body;

        if (!fullName || !email || !countryCode || !phone || !inquiryType || !message) {
            return res.status(400).json({ error: 'Please provide all required fields' });
        }

        const contact = await prisma.contact.create({
            data: {
                fullName,
                email,
                countryCode,
                phone,
                companyName,
                role,
                inquiryType,
                message
            }
        });

        res.status(201).json({ message: 'Contact form submitted successfully', contact });
    } catch (error) {
        console.error('Contact form submission error:', error);
        res.status(500).json({ error: 'Failed to submit contact form' });
    }
};

export const getContacts = async (req, res) => {
    try {
        const contacts = await prisma.contact.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        });
        res.json(contacts);
    } catch (error) {
        console.error('Failed to fetch contacts:', error);
        res.status(500).json({ error: 'Failed to fetch contacts' });
    }
};

export const deleteContact = async (req, res) => {
    try {
        await prisma.contact.delete({
            where: { id: req.params.id },
        });
        res.status(204).send();
    } catch (error) {
        console.error('Failed to delete contact:', error);
        res.status(500).json({ error: 'Failed to delete contact' });
    }
};
