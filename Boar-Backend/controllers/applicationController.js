import prisma from '../lib/prisma.js';

export const getApplications = async (req, res) => {
    try {
        const applications = await prisma.application.findMany({
            include: { job: true },
        });
        res.json(applications);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch applications' });
    }
};

export const getApplicationById = async (req, res) => {
    try {
        const application = await prisma.application.findUnique({
            where: { id: req.params.id },
            include: { job: true },
        });
        if (!application) return res.status(404).json({ error: 'Application not found' });
        res.json(application);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch application' });
    }
};

export const createApplication = async (req, res) => {
    try {
        const { jobId, name, email, location, experience, coverLetter } = req.body;

        let documentPath = null;
        if (req.file) {
            documentPath = `/uploads/${req.file.filename}`;
        }

        // Check for existing application
        const existingApp = await prisma.application.findFirst({
            where: {
                email,
                jobId: jobId || null,
            },
        });

        if (existingApp) {
            return res.status(400).json({ error: 'You have already submitted an application for this position.' });
        }

        const application = await prisma.application.create({
            data: {
                jobId: jobId || null,
                name,
                email,
                location,
                experience: experience ? parseInt(experience) : null,
                coverLetter,
                document: documentPath
            },
        });
        res.status(201).json(application);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message || 'Failed to submit application' });
    }
};

export const deleteApplication = async (req, res) => {
    try {
        await prisma.application.delete({
            where: { id: req.params.id },
        });
        res.status(204).send();
    } catch (error) {
        res.status(400).json({ error: 'Failed to delete application' });
    }
};
