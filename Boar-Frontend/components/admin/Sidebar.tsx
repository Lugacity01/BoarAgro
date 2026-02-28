"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useMutation } from "@tanstack/react-query";
import { usePathname, useRouter } from "next/navigation";
import {
    Users,
    Package,
    Briefcase,
    FileText,
    LayoutDashboard,
    LogOut,
    ChevronLeft,
    ChevronRight,
    MessageSquare
} from "lucide-react";
import { cn } from "@/lib/utils";

const sidebarLinks = [
    { name: "Overview", href: "/admin", icon: LayoutDashboard },
    { name: "Users", href: "/admin/users", icon: Users },
    { name: "Products", href: "/admin/products", icon: Package },
    { name: "Jobs", href: "/admin/jobs", icon: Briefcase },
    { name: "Applications", href: "/admin/applications", icon: FileText },
    { name: "Contacts", href: "/admin/contacts", icon: MessageSquare },
];

export function Sidebar() {
    const pathname = usePathname();
    const router = useRouter();
    const [collapsed, setCollapsed] = useState(false);
    const [userRole, setUserRole] = useState<string | null>(null);

    useEffect(() => {
        const userData = localStorage.getItem("adminUser");
        if (userData) {
            try {
                const user = JSON.parse(userData);
                setUserRole(user.role?.toLowerCase() || null);
            } catch (e) {
                console.error("Failed to parse user data", e);
            }
        }
    }, []);

    const logoutMutation = useMutation({
        mutationFn: async () => {
            const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
            return await fetch(`${apiUrl}/api/logout`, {
                method: "POST",
                credentials: "include"
            });
        },
        onSuccess: () => {
            localStorage.removeItem("adminUser");
            router.push("/admin/login");
        },
        onError: (error) => {
            console.error("Logout failed", error);
        }
    });

    const handleLogout = () => {
        logoutMutation.mutate();
    };

    return (
        <aside
            className={cn(
                "bg-white border-r border-gray-100 flex flex-col h-screen transition-all duration-300 relative",
                collapsed ? "w-20" : "w-64"
            )}
        >
            <div className="h-16 flex items-center justify-between px-4 border-b border-gray-100">
                {!collapsed && (
                    <div className="relative w-10 h-10 flex items-center gap-3">
                        <Image src="/boar_logo.png" alt="BOAR Agro" fill className="object-contain" />
                        <span className="text-2xl font-black font-sans text-[#2D7A3E] tracking-tighter ml-12 whitespace-nowrap">Admin</span>
                    </div>
                )}
                {collapsed && (
                    <div className="relative w-8 h-8 mx-auto">
                        <Image src="/boar_logo.png" alt="BOAR Agro" fill className="object-contain" />
                    </div>
                )}
            </div>

            <button
                onClick={() => setCollapsed(!collapsed)}
                className="absolute -right-3 top-20 bg-white border border-gray-200 rounded-full p-1 text-gray-500 hover:text-[#2D7A3E] shadow-sm transition-colors"
            >
                {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
            </button>

            <div className="flex-1 py-6 px-3 space-y-2 overflow-y-auto">
                {sidebarLinks.filter(link => {
                    if (userRole === "admin") {
                        return ["Overview", "Jobs", "Applications", "Contacts"].includes(link.name);
                    }
                    return true;
                }).map((link) => {
                    const Icon = link.icon;
                    const isActive = pathname === link.href;

                    return (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "flex items-center px-3 py-3 rounded-xl text-[15px] font-semibold font-sans tracking-wide transition-all group",
                                isActive
                                    ? "bg-[#2D7A3E]/10 text-[#2D7A3E] shadow-sm"
                                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                            )}
                        >
                            <Icon
                                className={cn(
                                    "flex-shrink-0",
                                    collapsed ? "mx-auto" : "mr-3",
                                    isActive ? "text-[#2D7A3E]" : "text-gray-400 group-hover:text-gray-600"
                                )}
                                size={20}
                            />
                            {!collapsed && <span>{link.name}</span>}
                        </Link>
                    );
                })}
            </div>

            <div className="p-4 border-t border-gray-100">
                <button
                    onClick={handleLogout}
                    disabled={logoutMutation.isPending}
                    className={cn(
                        "w-full flex items-center px-3 py-3 rounded-xl text-[15px] font-semibold font-sans tracking-wide text-red-600 hover:bg-red-50 transition-all group disabled:opacity-50",
                        collapsed && "justify-center"
                    )}
                >
                    <LogOut size={20} className={cn("flex-shrink-0 text-red-500 group-hover:text-red-600", !collapsed && "mr-3")} />
                    {!collapsed && <span>{logoutMutation.isPending ? "Logging out..." : "Logout"}</span>}
                </button>
            </div>
        </aside>
    );
}
