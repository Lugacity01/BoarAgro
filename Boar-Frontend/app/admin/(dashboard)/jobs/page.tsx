"use client";

import { useState } from "react";
import { Plus, Search, Filter, MoreVertical, Edit, Trash2, MapPin, Briefcase, X, Loader2 } from "lucide-react";
import { toast } from "react-hot-toast";
import { useJobs, useCreateJob, useUpdateJob, useDeleteJob } from "@/hooks/use-jobs";

export default function JobsPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingJobId, setEditingJobId] = useState<string | null>(null);
    const [jobToDelete, setJobToDelete] = useState<string | null>(null);


    const [title, setTitle] = useState("");
    const [department, setDepartment] = useState("");
    const [location, setLocation] = useState("");
    const [type, setType] = useState("Full-time");
    const [experience, setExperience] = useState("");
    const [description, setDescription] = useState("");
    const [requirements, setRequirements] = useState("");
    const [responsibilities, setResponsibilities] = useState("");
    const [benefits, setBenefits] = useState("");

    const { data: jobs = [], isLoading } = useJobs();
    const createJobMutation = useCreateJob();
    const updateJobMutation = useUpdateJob();
    const deleteJobMutation = useDeleteJob();

    const filteredJobs = jobs.filter((job: any) =>
        job.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.department?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const openCreateModal = () => {
        setEditingJobId(null);
        setTitle("");
        setDepartment("");
        setLocation("");
        setType("Full-time");
        setExperience("");
        setDescription("");
        setRequirements("");
        setResponsibilities("");
        setBenefits("");
        setIsModalOpen(true);
    };

    const openEditModal = (job: any) => {
        setEditingJobId(job.id);
        setTitle(job.title);
        setDepartment(job.department || "");
        setLocation(job.location || "");
        setType(job.type || "Full-time");
        setExperience(job.experience || "");
        setDescription(job.description || "");
        setRequirements(job.requirements?.join(", ") || "");
        setResponsibilities(job.responsibilities?.join(", ") || "");
        setBenefits(job.benefits?.join(", ") || "");
        setIsModalOpen(true);
    };

    const confirmDelete = (id: string) => {
        setJobToDelete(id);
    };

    const executeDelete = () => {
        if (jobToDelete) {
            deleteJobMutation.mutate(jobToDelete, {
                onSuccess: () => {
                    setJobToDelete(null);
                    toast.success('The job posting was successfully deleted.');
                },
                onError: (error: any) => {
                    setJobToDelete(null);
                    toast.error(error.message || 'There was an error deleting this job.');
                }
            });
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const payload = {
            title,
            department,
            location,
            type,
            experience,
            description,
            requirements: requirements.split(",").filter(Boolean).map(req => req.trim()),
            responsibilities: responsibilities.split(",").filter(Boolean).map(res => res.trim()),
            benefits: benefits.split(",").filter(Boolean).map(b => b.trim()),
        };

        if (editingJobId) {
            updateJobMutation.mutate({ id: editingJobId, ...payload }, {
                onSuccess: () => {
                    setIsModalOpen(false);
                    toast.success('The job posting has been successfully updated.');
                },
                onError: (error: any) => {
                    setIsModalOpen(false);
                    toast.error(error.message || 'There was an error updating the job.');
                }
            });
        } else {
            createJobMutation.mutate(payload, {
                onSuccess: () => {
                    setIsModalOpen(false);
                    toast.success('The new job posting has been successfully created.');
                },
                onError: (error: any) => {
                    setIsModalOpen(false);
                    toast.error(error.message || 'There was an error creating the new job.');
                }
            });
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Job Listings</h1>
                    <p className="text-sm text-gray-500 mt-1">Manage career opportunities and job postings.</p>
                </div>

                <div className="mt-4 sm:mt-0 flex space-x-3">
                    <button
                        onClick={openCreateModal}
                        className="flex items-center space-x-2 px-4 py-2 bg-[#2D7A3E] text-sm font-bold text-white rounded-lg shadow-sm hover:bg-[#236530] transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-[#2D7A3E]"
                    >
                        <Plus size={16} />
                        <span>Post New Job</span>
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
                    <div className="relative w-full sm:w-64">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search className="h-4 w-4 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#2D7A3E] focus:border-[#2D7A3E] bg-gray-50"
                            placeholder="Search jobs..."
                        />
                    </div>

                    <button className="flex items-center space-x-2 px-3 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors w-full sm:w-auto justify-center">
                        <Filter size={16} />
                        <span>Filter List</span>
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                    Role Details
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                    Location & Type
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                    Applicants
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                    Status
                                </th>
                                <th scope="col" className="px-6 py-3 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {isLoading ? (
                                <tr>
                                    <td colSpan={5} className="px-6 py-10 text-center text-gray-500">
                                        <Loader2 className="animate-spin h-6 w-6 mx-auto mb-2 text-[#2D7A3E]" />
                                        Loading jobs...
                                    </td>
                                </tr>
                            ) : filteredJobs.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="px-6 py-10 text-center text-gray-500">
                                        No jobs found matching "{searchTerm}"
                                    </td>
                                </tr>
                            ) : (
                                filteredJobs.map((job: any) => (
                                    <tr key={job.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 h-10 w-10 bg-amber-50 rounded-lg flex items-center justify-center border border-amber-100 text-amber-600">
                                                    <Briefcase size={20} />
                                                </div>
                                                <div className="ml-4">
                                                    <div className="text-sm font-bold text-gray-900">{job.title}</div>
                                                    <div className="text-sm text-gray-500">{job.department}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900 flex items-center space-x-1">
                                                <MapPin size={14} className="text-gray-400" />
                                                <span>{job.location}</span>
                                            </div>
                                            <div className="text-sm text-gray-500 mt-1">{job.type}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <span className="text-sm font-bold text-gray-900">{job._count?.applications || 0}</span>
                                                <span className="text-sm text-gray-500 ml-1">candidates</span>
                                            </div>
                                            {(job._count?.applications || 0) > 0 && (
                                                <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2 max-w-[80px]">
                                                    <div className="bg-[#2D7A3E] h-1.5 rounded-full" style={{ width: `${Math.min((job._count?.applications || 0) * 10, 100)}%` }}></div>
                                                </div>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-semibold ${job.status === 'Active' ? 'bg-[#2D7A3E]/10 text-[#2D7A3E]' :
                                                job.status === 'Closed' ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'
                                                }`}>
                                                {job.status || 'Active'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <div className="flex items-center justify-end space-x-2">
                                                <button onClick={() => openEditModal(job)} className="text-blue-600 hover:text-blue-900 p-1 rounded-md hover:bg-blue-50 transition-colors">
                                                    <Edit size={16} />
                                                </button>
                                                <button onClick={() => confirmDelete(job.id)} className="text-red-600 hover:text-red-900 p-1 rounded-md hover:bg-red-50 transition-colors" disabled={deleteJobMutation.isPending}>
                                                    {deleteJobMutation.isPending && jobToDelete === job.id ? <Loader2 size={16} className="animate-spin" /> : <Trash2 size={16} />}
                                                </button>
                                                <button className="text-gray-400 hover:text-gray-600 p-1 rounded-md hover:bg-gray-100 transition-colors">
                                                    <MoreVertical size={16} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>

                <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between text-sm text-gray-500">
                    <div>Showing {jobs.length > 0 ? '1' : '0'} to {filteredJobs.length} of {jobs.length} entries</div>
                    <div className="flex space-x-1">
                        <button className="px-3 py-1 border border-gray-200 rounded-md hover:bg-gray-50 disabled:opacity-50" disabled>Previous</button>
                        <button className="px-3 py-1 bg-[#2D7A3E] text-white rounded-md">1</button>
                        <button className="px-3 py-1 border border-gray-200 rounded-md hover:bg-gray-50">Next</button>
                    </div>
                </div>
            </div>

            {/* Post/Edit Job Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                    <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl overflow-y-auto max-h-[90vh]">
                        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center sticky top-0 bg-white z-10">
                            <h2 className="text-lg font-bold text-gray-900">{editingJobId ? "Edit Job" : "Post New Job"}</h2>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-md hover:bg-gray-100"
                            >
                                <X size={20} />
                            </button>
                        </div>
                        <form className="p-6 space-y-4" onSubmit={handleSubmit}>
                            {(createJobMutation.isError || updateJobMutation.isError) && (
                                <div className="p-3 bg-red-50 border border-red-200 text-red-600 rounded-xl text-sm font-medium text-center mb-3">
                                    {createJobMutation.error?.message || updateJobMutation.error?.message || "Failed to save job"}
                                </div>
                            )}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
                                <input type="text" value={title} onChange={e => setTitle(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D7A3E] focus:border-transparent text-sm" placeholder="e.g. Senior Agronomist" required />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                                <input type="text" value={department} onChange={e => setDepartment(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D7A3E] focus:border-transparent text-sm" placeholder="e.g. Field Operations" required />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                                    <input type="text" value={location} onChange={e => setLocation(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D7A3E] focus:border-transparent text-sm" placeholder="e.g. Lagos, Nigeria" required />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                                    <select value={type} onChange={e => setType(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D7A3E] focus:border-transparent text-sm" required>
                                        <option value="Full-time">Full-time</option>
                                        <option value="Part-time">Part-time</option>
                                        <option value="Contract">Contract</option>
                                        <option value="Remote">Remote</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Experience Required</label>
                                <input type="text" value={experience} onChange={e => setExperience(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D7A3E] focus:border-transparent text-sm" placeholder="e.g. 5+ years" required />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Job Description</label>
                                <textarea
                                    value={description}
                                    onChange={e => setDescription(e.target.value)}
                                    rows={4}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D7A3E] focus:border-transparent text-sm resize-none"
                                    placeholder="Enter the detailed job description here..."
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Requirements (Comma-separated)</label>
                                <textarea
                                    value={requirements}
                                    onChange={e => setRequirements(e.target.value)}
                                    rows={3}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D7A3E] focus:border-transparent text-sm resize-none"
                                    placeholder="e.g. B.Sc Agriculture, 5 years experience, Strong communication"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Responsibilities (Comma-separated)</label>
                                <textarea
                                    value={responsibilities}
                                    onChange={e => setResponsibilities(e.target.value)}
                                    rows={3}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D7A3E] focus:border-transparent text-sm resize-none"
                                    placeholder="e.g. Manage field operations, Oversee quality control"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Benefits (Comma-separated)</label>
                                <textarea
                                    value={benefits}
                                    onChange={e => setBenefits(e.target.value)}
                                    rows={3}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D7A3E] focus:border-transparent text-sm resize-none"
                                    placeholder="e.g. Health Insurance, Annual Leave, Performance Bonus"
                                    required
                                />
                            </div>

                            <div className="pt-4 flex justify-end space-x-3 sticky bottom-0 bg-white py-2 border-t border-gray-100 mt-4">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2D7A3E]"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={createJobMutation.isPending || updateJobMutation.isPending}
                                    className="px-4 py-2 text-sm font-bold text-white bg-[#2D7A3E] rounded-lg hover:bg-[#236530] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2D7A3E] disabled:opacity-70"
                                >
                                    {createJobMutation.isPending || updateJobMutation.isPending ? "Saving..." : (editingJobId ? "Save Changes" : "Post Job")}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Delete Confirmation Modal */}
            {jobToDelete && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                    <div className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200">
                        <div className="p-6 text-center space-y-4">
                            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto text-red-600 mb-2">
                                <Trash2 size={32} />
                            </div>
                            <h2 className="text-xl font-bold text-gray-900">Delete Job?</h2>
                            <p className="text-gray-500 text-sm">
                                Are you sure you want to permanently delete this job posting? This action cannot be undone and will remove all associated applications.
                            </p>
                        </div>
                        <div className="bg-gray-50 px-6 py-4 flex justify-end space-x-3 border-t border-gray-100">
                            <button
                                onClick={() => setJobToDelete(null)}
                                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={executeDelete}
                                disabled={deleteJobMutation.isPending}
                                className="px-4 py-2 text-sm font-bold text-white bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 disabled:opacity-70 transition-colors flex items-center"
                            >
                                {deleteJobMutation.isPending ? (
                                    <>
                                        <Loader2 size={16} className="animate-spin mr-2" />
                                        Deleting...
                                    </>
                                ) : (
                                    "Yes, Delete Job"
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
