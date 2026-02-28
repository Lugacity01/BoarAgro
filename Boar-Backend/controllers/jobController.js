import prisma from '../lib/prisma.js';

export const getJobs = async (req, res) => {
    try {
        const jobs = await prisma.job.findMany({
            include: {
                _count: {
                    select: { applications: true }
                }
            }
        });
        res.json(jobs);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch jobs' });
    }
};

export const getJobById = async (req, res) => {
    try {
        const job = await prisma.job.findUnique({
            where: { id: req.params.id },
        });
        if (!job) return res.status(404).json({ error: 'Job not found' });
        res.json(job);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch job' });
    }
};

export const createJob = async (req, res) => {
    try {
        const job = await prisma.job.create({
            data: req.body,
        });
        res.status(201).json(job);
    } catch (error) {
        res.status(400).json({ error: 'Failed to create job' });
    }
};

export const updateJob = async (req, res) => {
    try {
        const job = await prisma.job.update({
            where: { id: req.params.id },
            data: req.body,
        });
        res.json(job);
    } catch (error) {
        res.status(400).json({ error: 'Failed to update job' });
    }
};

export const deleteJob = async (req, res) => {
    try {
        await prisma.job.delete({
            where: { id: req.params.id },
        });
        res.status(204).send();
    } catch (error) {
        res.status(400).json({ error: 'Failed to delete job' });
    }
};
