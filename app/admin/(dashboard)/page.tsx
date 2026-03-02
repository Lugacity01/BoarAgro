"use client";

import { Users as UsersIcon, Package, Briefcase, FileText, TrendingUp, TrendingDown, MoreHorizontal, Loader2 } from "lucide-react";
import Link from "next/link";
import { useUsers } from "@/hooks/use-users";
import { useJobs } from "@/hooks/use-jobs";
import { useProducts } from "@/hooks/use-products";
import { useApplications } from "@/hooks/use-applications";

export default function AdminDashboardOverview() {
    const { data: users = [], isLoading: loadingUsers } = useUsers();
    const { data: jobs = [], isLoading: loadingJobs } = useJobs();
    const { data: products = [], isLoading: loadingProducts } = useProducts();
    const { data: applications = [], isLoading: loadingApps } = useApplications();

    const isLoading = loadingUsers || loadingJobs || loadingProducts || loadingApps;

    const stats = [
        { name: "Total Users", value: users.length.toString(), change: "+0%", isPositive: true, icon: UsersIcon, color: "text-blue-600", bg: "bg-blue-100" },
        { name: "Active Products", value: products.length.toString(), change: "+0%", isPositive: true, icon: Package, color: "text-[#2D7A3E]", bg: "bg-[#2D7A3E]/10" },
        { name: "Open Jobs", value: jobs.filter((j: any) => j.status === 'Open' || j.isActive !== false).length.toString(), change: "+0%", isPositive: true, icon: Briefcase, color: "text-amber-600", bg: "bg-amber-100" },
        { name: "New Applications", value: applications.filter((a: any) => a.status === 'Pending' || a.status === 'PENDING').length.toString(), change: "+0%", isPositive: true, icon: FileText, color: "text-[#F5A623]", bg: "bg-[#F5A623]/10" },
    ];

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Dashboard Overview</h1>
                    <p className="text-sm text-gray-500 mt-1">Welcome back. Here's what's happening with BoarAgro today.</p>
                </div>

                <div className="mt-4 sm:mt-0 flex space-x-3">
                    <button className="px-4 py-2 bg-white border border-gray-200 text-sm font-medium text-gray-700 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2D7A3E] transition-colors">
                        Download Report
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {isLoading ? (
                    <div className="col-span-full py-12 flex justify-center items-center">
                        <Loader2 className="animate-spin w-8 h-8 text-[#2D7A3E]" />
                    </div>
                ) : stats.map((stat) => (
                    <div key={stat.name} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col group hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start">
                            <div className={`p-3 rounded-lg ${stat.bg}`}>
                                <stat.icon className={`w-6 h-6 ${stat.color}`} />
                            </div>
                            <span className={`inline-flex items-center space-x-1 text-sm font-medium ${stat.isPositive ? 'text-[#2D7A3E]' : 'text-red-600'}`}>
                                {stat.isPositive ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                                <span>{stat.change}</span>
                            </span>
                        </div>
                        <div className="mt-4">
                            <h3 className="text-3xl font-bold text-gray-900 tracking-tight">{stat.value}</h3>
                            <p className="text-sm font-medium text-gray-500 mt-1">{stat.name}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg font-bold text-gray-900">Recent Applications</h2>
                        <button className="text-sm font-medium text-[#2D7A3E] hover:text-[#236530]">View All</button>
                    </div>

                    <div className="space-y-4">
                        {isLoading ? (
                            <div className="py-8 flex justify-center">
                                <Loader2 className="animate-spin w-6 h-6 text-[#2D7A3E]" />
                            </div>
                        ) : applications.length === 0 ? (
                            <div className="py-8 text-center text-gray-500 text-sm">
                                No recent applications found.
                            </div>
                        ) : applications.slice(0, 4).map((app: any) => (
                            <div key={app.id} className="flex items-center justify-between p-4 rounded-lg border border-gray-50 hover:bg-gray-50 transition-colors">
                                <div className="flex items-center space-x-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-bold uppercase">
                                        {(app.firstName || app.email || "A").charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-gray-900">{app.firstName ? `${app.firstName} ${app.lastName || ''}` : app.email}</h4>
                                        <p className="text-xs text-gray-500 truncate max-w-[200px]">Applied for {app.job?.title || 'Job'}</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${app.status === 'REJECTED' ? 'bg-red-100 text-red-800' :
                                            app.status === 'HIRED' || app.status === 'ACCEPTED' ? 'bg-green-100 text-green-800' :
                                                'bg-yellow-100 text-yellow-800'
                                        }`}>
                                        {app.status || "Pending"}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg font-bold text-gray-900">Quick Actions</h2>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <Link href="/admin/products" className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-[#2D7A3E]/5 hover:text-[#2D7A3E] transition-colors group">
                            <Package size={32} className="text-gray-400 group-hover:text-[#2D7A3E] mb-3 transition-colors" />
                            <span className="text-sm font-medium text-gray-900 group-hover:text-[#2D7A3E]">Add Product</span>
                        </Link>
                        <Link href="/admin/jobs" className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-[#2D7A3E]/5 hover:text-[#2D7A3E] transition-colors group">
                            <Briefcase size={32} className="text-gray-400 group-hover:text-[#2D7A3E] mb-3 transition-colors" />
                            <span className="text-sm font-medium text-gray-900 group-hover:text-[#2D7A3E]">Post Job</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
