"use client";

import { useState } from "react";
import { Search, Filter, Eye, FileText, Loader2, Mail, MapPin, Trash2 } from "lucide-react";
import { useApplications, useDeleteApplication } from "@/hooks/use-applications";
import { toast } from "react-hot-toast";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function ApplicationsPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedApp, setSelectedApp] = useState<any | null>(null);
    const [deleteAppId, setDeleteAppId] = useState<string | null>(null);
    const { data: applications = [], isLoading, error } = useApplications();
    const deleteMutation = useDeleteApplication();

    const confirmDelete = () => {
        if (!deleteAppId) return;
        deleteMutation.mutate(deleteAppId, {
            onSuccess: () => {
                toast.success("Application deleted successfully");
                if (selectedApp?.id === deleteAppId) setSelectedApp(null);
                setDeleteAppId(null);
            },
            onError: (err: any) => {
                toast.error(err.message || "Failed to delete application");
            }
        });
    };

    const filteredApps = applications.filter((app: any) =>
        app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.id.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Applications</h1>
                    <p className="text-sm text-gray-500 mt-1">Review candidates for jobs and farming programs.</p>
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
                            placeholder="Search by ID or Name..."
                        />
                    </div>

                    <div className="flex space-x-2 w-full sm:w-auto">
                        <button className="flex-1 sm:flex-none flex items-center space-x-2 px-3 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors justify-center">
                            <span>Type: All</span>
                        </button>
                        <button className="flex-1 sm:flex-none flex items-center space-x-2 px-3 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors justify-center">
                            <Filter size={16} />
                            <span>Filter</span>
                        </button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                    Candidate Details
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                    Applied For
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                    Date
                                </th>
                                <th scope="col" className="px-6 py-3 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {isLoading ? (
                                <tr>
                                    <td colSpan={4} className="px-6 py-10 text-center">
                                        <Loader2 className="animate-spin h-6 w-6 text-[#2D7A3E] mx-auto mb-2" />
                                        <p className="text-gray-500 text-sm">Loading applications...</p>
                                    </td>
                                </tr>
                            ) : error ? (
                                <tr>
                                    <td colSpan={4} className="px-6 py-10 text-center text-red-500">
                                        Failed to load applications.
                                    </td>
                                </tr>
                            ) : filteredApps.map((app: any) => (
                                <tr key={app.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 h-10 w-10 bg-purple-50 rounded-lg flex items-center justify-center border border-purple-100 text-purple-600">
                                                <FileText size={20} />
                                            </div>
                                            <div className="ml-4">
                                                <div className="text-sm font-bold text-gray-900">{app.name}</div>
                                                <div className="text-xs text-gray-500 flex items-center mt-0.5">
                                                    <Mail className="h-3 w-3 mr-1" />
                                                    {app.email}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-sm text-gray-900 font-medium">{app.job?.title || 'General Application'}</div>
                                        <div className="text-xs text-gray-500 mt-0.5 whitespace-nowrap overflow-hidden text-ellipsis max-w-[150px]">
                                            {app.job?.location || 'Remote'} &bull; Exp: {app.experience || 0} yrs
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {new Date(app.submittedAt).toLocaleDateString()}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <div className="flex items-center justify-end space-x-2">
                                            <button
                                                onClick={() => setSelectedApp(app)}
                                                className="text-[#2D7A3E] hover:text-[#236530] p-1.5 rounded-md hover:bg-[#2D7A3E]/10 transition-colors border border-transparent hover:border-[#2D7A3E]/20"
                                                title="View full details"
                                            >
                                                <Eye size={18} />
                                            </button>
                                            {app.document ? (
                                                <a href={`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}${app.document}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 p-1.5 rounded-md hover:bg-blue-50 transition-colors border border-transparent hover:border-blue-200" title="View CV / Document">
                                                    <FileText size={18} />
                                                </a>
                                            ) : (
                                                <button className="text-gray-300 p-1.5 rounded-md cursor-not-allowed border border-transparent" title="No Document Attached">
                                                    <FileText size={18} />
                                                </button>
                                            )}
                                            <button
                                                onClick={() => setDeleteAppId(app.id)}
                                                disabled={deleteMutation.isPending && deleteAppId === app.id}
                                                className="text-red-600 hover:text-red-800 p-1.5 rounded-md hover:bg-red-50 transition-colors"
                                                title="Delete Application"
                                            >
                                                {deleteMutation.isPending && deleteAppId === app.id ? <Loader2 className="animate-spin" size={16} /> : <Trash2 size={16} />}
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {filteredApps.length === 0 && (
                        <div className="text-center py-10 text-gray-500">
                            No applications found matching "{searchTerm}"
                        </div>
                    )}
                </div>

                <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between text-sm text-gray-500">
                    <div>Showing 1 to {filteredApps.length} of {applications.length} entries</div>
                    <div className="flex space-x-1">
                        <button className="px-3 py-1 border border-gray-200 rounded-md hover:bg-gray-50 disabled:opacity-50" disabled>Previous</button>
                        <button className="px-3 py-1 bg-[#2D7A3E] text-white rounded-md">1</button>
                        <button className="px-3 py-1 border border-gray-200 rounded-md hover:bg-gray-50">Next</button>
                    </div>
                </div>
            </div>

            {/* Application Details Dialog */}
            <Dialog open={!!selectedApp} onOpenChange={(open) => !open && setSelectedApp(null)}>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold flex items-center gap-2">
                            <FileText className="h-6 w-6 text-[#2D7A3E]" />
                            Application Details
                        </DialogTitle>
                        <DialogDescription>
                            Review the full application profile for {selectedApp?.name}.
                        </DialogDescription>
                    </DialogHeader>

                    {selectedApp && (
                        <div className="space-y-6 mt-4">
                            {/* Header Info */}
                            <div className="flex items-start justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900">{selectedApp.name}</h3>
                                    <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                                        <div className="flex items-center gap-1.5">
                                            <Mail className="h-4 w-4 text-gray-400" />
                                            <a href={`mailto:${selectedApp.email}`} className="text-indigo-600 hover:underline">{selectedApp.email}</a>
                                        </div>
                                        {selectedApp.location && (
                                            <div className="flex items-center gap-1.5">
                                                <MapPin className="h-4 w-4 text-gray-400" />
                                                {selectedApp.location}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-xs text-gray-500 mt-2">
                                        Submitted {new Date(selectedApp.submittedAt).toLocaleDateString()}
                                    </div>
                                </div>
                            </div>

                            {/* Applied Position */}
                            <div>
                                <h4 className="text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wider">Applied Position</h4>
                                <div className="p-3 bg-white border border-gray-200 rounded-lg">
                                    <div className="font-medium text-[#2D7A3E]">{selectedApp.job?.title || 'General Application'}</div>
                                    <div className="text-sm text-gray-500 mt-1">
                                        {selectedApp.experience ? `${selectedApp.experience} Years Experience` : 'Entry Level / Not Specified'}
                                    </div>
                                </div>
                            </div>

                            {/* Cover Letter */}
                            <div>
                                <h4 className="text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wider">Cover Letter</h4>
                                <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 whitespace-pre-wrap max-h-64 overflow-y-auto italic">
                                    {selectedApp.coverLetter ? `"${selectedApp.coverLetter}"` : 'No cover letter provided.'}
                                </div>
                            </div>

                            {/* Document & Actions */}
                            <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                                <div>
                                    {selectedApp.document ? (
                                        <a href={`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}${selectedApp.document}`} target="_blank" rel="noopener noreferrer">
                                            <Button variant="outline" className="gap-2 text-[#2D7A3E] border-[#2D7A3E] hover:bg-[#2D7A3E] hover:text-white">
                                                <FileText className="h-4 w-4" />
                                                View Attached CV
                                            </Button>
                                        </a>
                                    ) : (
                                        <p className="text-sm text-gray-500 italic">No document attached to this application.</p>
                                    )}
                                </div>

                                <div className="flex gap-2">
                                    <Button variant="outline" onClick={() => setSelectedApp(null)}>Close</Button>
                                </div>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
            {/* Delete Confirmation Dialog */}
            <Dialog open={!!deleteAppId} onOpenChange={(open) => !open && setDeleteAppId(null)}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle className="text-red-600 flex items-center gap-2">
                            <Trash2 className="h-5 w-5" />
                            Delete Application
                        </DialogTitle>
                        <DialogDescription className="pt-2">
                            Are you sure you want to delete this application? This action cannot be undone and the attached document will be permanently removed.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex justify-end gap-3 pt-4">
                        <Button variant="outline" onClick={() => setDeleteAppId(null)} disabled={deleteMutation.isPending}>
                            Cancel
                        </Button>
                        <Button variant="destructive" onClick={confirmDelete} disabled={deleteMutation.isPending}>
                            {deleteMutation.isPending ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Deleting...</> : "Delete"}
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}
