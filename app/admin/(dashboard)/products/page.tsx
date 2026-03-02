"use client";

import { useState } from "react";
import { Plus, Search, Edit2, Trash2, Loader2, Package, Image as ImageIcon } from "lucide-react";
import { useProducts, useCreateProduct, useUpdateProduct, useDeleteProduct } from "@/hooks/use-products";
import { toast } from "react-hot-toast";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function AdminProductsPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [isCreateOpen, setIsCreateOpen] = useState(false);
    const [editingProduct, setEditingProduct] = useState<any | null>(null);
    const [deleteId, setDeleteId] = useState<string | null>(null);

    const { data: products = [], isLoading, error } = useProducts();
    const createMutation = useCreateProduct();
    const updateMutation = useUpdateProduct();
    const deleteMutation = useDeleteProduct();

    // Form State
    const initialFormState = {
        name: "",
        slug: "",
        tagline: "",
        description: "",
        image: "",
        hero: "",
        specifications: [""],
        markets: [""],
        benefits: [""],
        variants: [{ name: "", desc: "" }],
    };
    const [formData, setFormData] = useState(initialFormState);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleArrayChange = (field: "specifications" | "markets" | "benefits", index: number, value: string) => {
        const newArray = [...formData[field]];
        newArray[index] = value;
        setFormData({ ...formData, [field]: newArray });
    };

    const addArrayItem = (field: "specifications" | "markets" | "benefits") => {
        setFormData({ ...formData, [field]: [...formData[field], ""] });
    };

    const removeArrayItem = (field: "specifications" | "markets" | "benefits", index: number) => {
        const newArray = formData[field].filter((_, i) => i !== index);
        setFormData({ ...formData, [field]: newArray });
    };

    const handleVariantChange = (index: number, field: "name" | "desc", value: string) => {
        const newVariants = [...formData.variants];
        newVariants[index] = { ...newVariants[index], [field]: value };
        setFormData({ ...formData, variants: newVariants });
    };

    const addVariant = () => {
        setFormData({ ...formData, variants: [...formData.variants, { name: "", desc: "" }] });
    };

    const removeVariant = (index: number) => {
        const newVariants = formData.variants.filter((_, i) => i !== index);
        setFormData({ ...formData, variants: newVariants });
    };

    const openCreate = () => {
        setFormData(initialFormState);
        setIsCreateOpen(true);
    };

    const openEdit = (product: any) => {
        setFormData({
            ...product,
            specifications: product.specifications?.length ? product.specifications : [""],
            markets: product.markets?.length ? product.markets : [""],
            benefits: product.benefits?.length ? product.benefits : [""],
            variants: product.variants?.length ? product.variants : [{ name: "", desc: "" }],
        });
        setEditingProduct(product);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Clean up empty array items before submitting
        const cleanData = {
            ...formData,
            specifications: formData.specifications.filter(s => s.trim() !== ""),
            markets: formData.markets.filter(m => m.trim() !== ""),
            benefits: formData.benefits.filter(b => b.trim() !== ""),
            variants: formData.variants.filter(v => v.name.trim() !== ""),
        };

        if (editingProduct) {
            updateMutation.mutate({ id: editingProduct.id, ...cleanData }, {
                onSuccess: () => {
                    toast.success("Product updated successfully");
                    setEditingProduct(null);
                },
                onError: (err: any) => toast.error(err.message || "Failed to update product")
            });
        } else {
            createMutation.mutate(cleanData, {
                onSuccess: () => {
                    toast.success("Product created successfully");
                    setIsCreateOpen(false);
                },
                onError: (err: any) => toast.error(err.message || "Failed to create product")
            });
        }
    };

    const confirmDelete = () => {
        if (!deleteId) return;
        deleteMutation.mutate(deleteId, {
            onSuccess: () => {
                toast.success("Product deleted successfully");
                setDeleteId(null);
            },
            onError: (err: any) => toast.error(err.message || "Failed to delete product")
        });
    };

    const filteredProducts = products.filter((p: any) => p.name.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Products Management</h1>
                    <p className="text-sm text-gray-500 mt-1">Manage all your agro-commodities listed on the website.</p>
                </div>
                <Button onClick={openCreate} className="mt-4 sm:mt-0 bg-[#2D7A3E] hover:bg-[#236530] text-white">
                    <Plus className="mr-2 h-4 w-4" /> Add Product
                </Button>
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
                            placeholder="Search products..."
                        />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Product</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Slug</th>
                                <th scope="col" className="px-6 py-3 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {isLoading ? (
                                <tr>
                                    <td colSpan={3} className="px-6 py-10 text-center">
                                        <Loader2 className="animate-spin h-6 w-6 text-[#2D7A3E] mx-auto mb-2" />
                                        <p className="text-gray-500 text-sm">Loading products...</p>
                                    </td>
                                </tr>
                            ) : error ? (
                                <tr>
                                    <td colSpan={3} className="px-6 py-10 text-center text-red-500">
                                        Failed to load products.
                                    </td>
                                </tr>
                            ) : filteredProducts.map((product: any) => (
                                <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 h-10 w-10 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600">
                                                <Package size={20} />
                                            </div>
                                            <div className="ml-4">
                                                <div className="text-sm font-bold text-gray-900">{product.name}</div>
                                                <div className="text-xs text-gray-500 truncate max-w-[200px]">{product.tagline}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {product.slug}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <div className="flex items-center justify-end space-x-2">
                                            <button
                                                onClick={() => openEdit(product)}
                                                className="text-indigo-600 hover:text-indigo-900 p-1.5 rounded-md hover:bg-indigo-50 transition-colors"
                                                title="Edit"
                                            >
                                                <Edit2 size={16} />
                                            </button>
                                            <button
                                                onClick={() => setDeleteId(product.id)}
                                                disabled={deleteMutation.isPending && deleteId === product.id}
                                                className="text-red-600 hover:text-red-900 p-1.5 rounded-md hover:bg-red-50 transition-colors"
                                                title="Delete"
                                            >
                                                {deleteMutation.isPending && deleteId === product.id ? <Loader2 className="animate-spin" size={16} /> : <Trash2 size={16} />}
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {filteredProducts.length === 0 && !isLoading && (
                        <div className="text-center py-10 text-gray-500">No products found.</div>
                    )}
                </div>
            </div>

            {/* Create/Edit Modal */}
            <Dialog open={isCreateOpen || !!editingProduct} onOpenChange={(open) => {
                if (!open) {
                    setIsCreateOpen(false);
                    setEditingProduct(null);
                }
            }}>
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle>{editingProduct ? "Edit Product" : "Add New Product"}</DialogTitle>
                        <DialogDescription>
                            {editingProduct ? "Update the details of your product below." : "Fill in the details to add a new product."}
                        </DialogDescription>
                    </DialogHeader>

                    <form onSubmit={handleSubmit} className="space-y-6 mt-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Basic Info */}
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Product Name *</label>
                                    <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full border-gray-300 rounded-lg shadow-sm focus:border-[#2D7A3E] focus:ring-[#2D7A3E]" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Slug (URL friendly) *</label>
                                    <input required type="text" name="slug" value={formData.slug} onChange={handleChange} className="w-full border-gray-300 rounded-lg shadow-sm focus:border-[#2D7A3E] focus:ring-[#2D7A3E]" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Tagline *</label>
                                    <input required type="text" name="tagline" value={formData.tagline} onChange={handleChange} className="w-full border-gray-300 rounded-lg shadow-sm focus:border-[#2D7A3E] focus:ring-[#2D7A3E]" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Description *</label>
                                    <textarea required name="description" rows={4} value={formData.description} onChange={handleChange} className="w-full border-gray-300 rounded-lg shadow-sm focus:border-[#2D7A3E] focus:ring-[#2D7A3E]" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Main Image URL *</label>
                                    <input required type="text" name="image" value={formData.image} onChange={handleChange} className="w-full border-gray-300 rounded-lg shadow-sm focus:border-[#2D7A3E] focus:ring-[#2D7A3E]" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Hero Image URL</label>
                                    <input type="text" name="hero" value={formData.hero || ""} onChange={handleChange} className="w-full border-gray-300 rounded-lg shadow-sm focus:border-[#2D7A3E] focus:ring-[#2D7A3E]" />
                                </div>
                            </div>

                            {/* Arrays & Complex Data */}
                            <div className="space-y-6">
                                {/* Specifications */}
                                <div className="p-4 bg-gray-50 border border-gray-100 rounded-xl">
                                    <div className="flex justify-between items-center mb-3">
                                        <label className="block text-sm font-bold text-gray-700">Specifications</label>
                                        <button type="button" onClick={() => addArrayItem("specifications")} className="text-xs text-[#2D7A3E] font-semibold hover:underline">+ Add Spec</button>
                                    </div>
                                    <div className="space-y-2">
                                        {formData.specifications.map((spec, i) => (
                                            <div key={i} className="flex items-center gap-2">
                                                <input type="text" value={spec} onChange={(e) => handleArrayChange("specifications", i, e.target.value)} className="w-full text-sm border-gray-300 rounded-md focus:border-[#2D7A3E]" placeholder="e.g., Moisture Content: 7-8%" />
                                                <button type="button" onClick={() => removeArrayItem("specifications", i)} className="text-red-500 hover:text-red-700 p-1"><Trash2 size={14} /></button>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Markets */}
                                <div className="p-4 bg-gray-50 border border-gray-100 rounded-xl">
                                    <div className="flex justify-between items-center mb-3">
                                        <label className="block text-sm font-bold text-gray-700">Target Markets</label>
                                        <button type="button" onClick={() => addArrayItem("markets")} className="text-xs text-[#2D7A3E] font-semibold hover:underline">+ Add Market</button>
                                    </div>
                                    <div className="space-y-2">
                                        {formData.markets.map((market, i) => (
                                            <div key={i} className="flex items-center gap-2">
                                                <input type="text" value={market} onChange={(e) => handleArrayChange("markets", i, e.target.value)} className="w-full text-sm border-gray-300 rounded-md focus:border-[#2D7A3E]" placeholder="e.g., United Kingdom" />
                                                <button type="button" onClick={() => removeArrayItem("markets", i)} className="text-red-500 hover:text-red-700 p-1"><Trash2 size={14} /></button>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Benefits */}
                                <div className="p-4 bg-gray-50 border border-gray-100 rounded-xl">
                                    <div className="flex justify-between items-center mb-3">
                                        <label className="block text-sm font-bold text-gray-700">Key Benefits</label>
                                        <button type="button" onClick={() => addArrayItem("benefits")} className="text-xs text-[#2D7A3E] font-semibold hover:underline">+ Add Benefit</button>
                                    </div>
                                    <div className="space-y-2">
                                        {formData.benefits.map((benefit, i) => (
                                            <div key={i} className="flex items-center gap-2">
                                                <input type="text" value={benefit} onChange={(e) => handleArrayChange("benefits", i, e.target.value)} className="w-full text-sm border-gray-300 rounded-md focus:border-[#2D7A3E]" placeholder="e.g., Direct sourcing eliminates markup" />
                                                <button type="button" onClick={() => removeArrayItem("benefits", i)} className="text-red-500 hover:text-red-700 p-1"><Trash2 size={14} /></button>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Variants */}
                                <div className="p-4 bg-indigo-50/50 border border-indigo-100 rounded-xl">
                                    <div className="flex justify-between items-center mb-3">
                                        <label className="block text-sm font-bold text-indigo-900">Product Variants</label>
                                        <button type="button" onClick={addVariant} className="text-xs text-indigo-600 font-semibold hover:underline">+ Add Variant</button>
                                    </div>
                                    <div className="space-y-3">
                                        {formData.variants.map((variant, i) => (
                                            <div key={i} className="p-3 bg-white rounded-lg border border-gray-200 relative group">
                                                <button type="button" onClick={() => removeVariant(i)} className="absolute top-2 right-2 text-gray-400 hover:text-red-500"><Trash2 size={14} /></button>
                                                <div className="space-y-2 pr-6">
                                                    <input type="text" value={variant.name} onChange={(e) => handleVariantChange(i, "name", e.target.value)} className="w-full text-sm border-gray-300 rounded-md focus:border-indigo-500" placeholder="Variant Name" />
                                                    <input type="text" value={variant.desc} onChange={(e) => handleVariantChange(i, "desc", e.target.value)} className="w-full text-sm border-gray-300 rounded-md focus:border-indigo-500" placeholder="Variant Description" />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end gap-3 pt-6 border-t border-gray-100">
                            <Button type="button" variant="outline" onClick={() => { setIsCreateOpen(false); setEditingProduct(null); }}>
                                Cancel
                            </Button>
                            <Button type="submit" className="bg-[#2D7A3E] hover:bg-[#236530] text-white" disabled={createMutation.isPending || updateMutation.isPending}>
                                {(createMutation.isPending || updateMutation.isPending) ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                                {editingProduct ? "Save Changes" : "Create Product"}
                            </Button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>

            {/* Delete Confirmation */}
            <Dialog open={!!deleteId} onOpenChange={(open) => !open && setDeleteId(null)}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle className="text-red-600 flex items-center gap-2">
                            <Trash2 className="h-5 w-5" /> Delete Product
                        </DialogTitle>
                        <DialogDescription className="pt-2">
                            Are you sure you want to delete this product? This action cannot be undone.
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
