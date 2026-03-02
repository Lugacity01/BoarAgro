"use client";

import { useState } from "react";
import { Search, Filter, Eye, FileText, Loader2, Mail, Building, Phone, Trash2, MessageSquare } from "lucide-react";
import { useContacts, useDeleteContact } from "@/hooks/use-contact";
import { toast } from "react-hot-toast";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function ContactsPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedContact, setSelectedContact] = useState<any | null>(null);
    const [deleteId, setDeleteId] = useState<string | null>(null);
    const { data: contacts = [], isLoading, error } = useContacts();
    const deleteMutation = useDeleteContact();

    const confirmDelete = () => {
        if (!deleteId) return;
        deleteMutation.mutate(deleteId, {
            onSuccess: () => {
                toast.success("Contact deleted successfully");
                if (selectedContact?.id === deleteId) setSelectedContact(null);
                setDeleteId(null);
            },
            onError: (err: any) => {
                toast.error(err.message || "Failed to delete contact");
            }
        });
    };

    const filteredContacts = contacts.filter((contact: any) =>
        contact.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.companyName?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Contacts & Inquiries</h1>
                    <p className="text-sm text-gray-500 mt-1">Review messages, partnership requests, and export inquiries.</p>
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
                            placeholder="Search by Name or Email..."
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
                                    Contact Details
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                    Inquiry Type
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
                                        <p className="text-gray-500 text-sm">Loading contacts...</p>
                                    </td>
                                </tr>
                            ) : error ? (
                                <tr>
                                    <td colSpan={4} className="px-6 py-10 text-center text-red-500">
                                        Failed to load contacts.
                                    </td>
                                </tr>
                            ) : filteredContacts.map((contact: any) => (
                                <tr key={contact.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 h-10 w-10 bg-indigo-50 rounded-lg flex items-center justify-center border border-indigo-100 text-indigo-600">
                                                <MessageSquare size={20} />
                                            </div>
                                            <div className="ml-4">
                                                <div className="text-sm font-bold text-gray-900">{contact.fullName}</div>
                                                <div className="text-xs text-gray-500 flex items-center mt-0.5">
                                                    <Mail className="h-3 w-3 mr-1" />
                                                    {contact.email}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-800 capitalize`}>
                                            {contact.inquiryType}
                                        </span>
                                        {contact.companyName && (
                                            <div className="text-xs text-gray-500 mt-1 flex items-center">
                                                <Building className="h-3 w-3 mr-1" />
                                                {contact.companyName}
                                            </div>
                                        )}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {new Date(contact.createdAt).toLocaleDateString()}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <div className="flex items-center justify-end space-x-2">
                                            <button
                                                onClick={() => setSelectedContact(contact)}
                                                className="text-[#2D7A3E] hover:text-[#236530] p-1.5 rounded-md hover:bg-[#2D7A3E]/10 transition-colors border border-transparent hover:border-[#2D7A3E]/20"
                                                title="View message"
                                            >
                                                <Eye size={18} />
                                            </button>
                                            <button
                                                onClick={() => setDeleteId(contact.id)}
                                                disabled={deleteMutation.isPending && deleteId === contact.id}
                                                className="text-red-600 hover:text-red-800 p-1.5 rounded-md hover:bg-red-50 transition-colors"
                                                title="Delete Contact"
                                            >
                                                {deleteMutation.isPending && deleteId === contact.id ? <Loader2 className="animate-spin" size={16} /> : <Trash2 size={16} />}
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {filteredContacts.length === 0 && !isLoading && (
                        <div className="text-center py-10 text-gray-500">
                            No contacts found matching "{searchTerm}"
                        </div>
                    )}
                </div>

                <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between text-sm text-gray-500">
                    <div>Showing 1 to {filteredContacts.length} of {contacts.length} entries</div>
                </div>
            </div>

            {/* Contact Details Dialog */}
            <Dialog open={!!selectedContact} onOpenChange={(open) => !open && setSelectedContact(null)}>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold flex items-center gap-2">
                            <MessageSquare className="h-6 w-6 text-[#2D7A3E]" />
                            Message Details
                        </DialogTitle>
                        <DialogDescription>
                            Review the inquiry sent by {selectedContact?.fullName}.
                        </DialogDescription>
                    </DialogHeader>

                    {selectedContact && (
                        <div className="space-y-6 mt-4">
                            {/* Header Info */}
                            <div className="flex items-start justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900">{selectedContact.fullName}</h3>
                                    <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                                        <div className="flex items-center gap-1.5">
                                            <Mail className="h-4 w-4 text-gray-400" />
                                            <a href={`mailto:${selectedContact.email}`} className="text-indigo-600 hover:underline">{selectedContact.email}</a>
                                        </div>
                                        {selectedContact.phone && (
                                            <div className="flex items-center gap-1.5">
                                                <Phone className="h-4 w-4 text-gray-400" />
                                                {selectedContact.countryCode} {selectedContact.phone}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="text-right">
                                    <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800 capitalize">
                                        {selectedContact.inquiryType}
                                    </span>
                                    <div className="text-xs text-gray-500 mt-2">
                                        Sent {new Date(selectedContact.createdAt).toLocaleDateString()}
                                    </div>
                                </div>
                            </div>

                            {/* Additional Info */}
                            {(selectedContact.companyName || selectedContact.role) && (
                                <div className="grid grid-cols-2 gap-4">
                                    {selectedContact.companyName && (
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wider">Company Name</h4>
                                            <div className="p-3 bg-white border border-gray-200 rounded-lg">
                                                <div className="font-medium text-gray-700">{selectedContact.companyName}</div>
                                            </div>
                                        </div>
                                    )}
                                    {selectedContact.role && (
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wider">Your Role</h4>
                                            <div className="p-3 bg-white border border-gray-200 rounded-lg">
                                                <div className="font-medium text-gray-700">{selectedContact.role}</div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* Message */}
                            <div>
                                <h4 className="text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wider">Message</h4>
                                <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 whitespace-pre-wrap max-h-64 overflow-y-auto italic">
                                    "{selectedContact.message}"
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="pt-4 border-t border-gray-100 flex items-center justify-end">
                                <div className="flex gap-2">
                                    <Button variant="outline" onClick={() => setSelectedContact(null)}>Close</Button>
                                    <a href={`mailto:${selectedContact.email}?subject=RE: ${selectedContact.inquiryType.toUpperCase()} Inquiry to BOAR Agro`} target="_blank" rel="noopener noreferrer">
                                        <Button className="bg-[#2D7A3E] hover:bg-[#236530] text-white">Reply via Email</Button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>

            {/* Delete Confirmation Dialog */}
            <Dialog open={!!deleteId} onOpenChange={(open) => !open && setDeleteId(null)}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle className="text-red-600 flex items-center gap-2">
                            <Trash2 className="h-5 w-5" />
                            Delete Contact
                        </DialogTitle>
                        <DialogDescription className="pt-2">
                            Are you sure you want to delete this message? This action cannot be undone.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex justify-end gap-3 pt-4">
                        <Button variant="outline" onClick={() => setDeleteId(null)} disabled={deleteMutation.isPending}>
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
