"use client";

import { Bell, Search, UserCircle } from "lucide-react";
import { useEffect, useState } from "react";

export function Header() {
    const [user, setUser] = useState<{ name?: string, email?: string, role?: string } | null>(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("adminUser");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    return (
        <header className="h-16 bg-white/80 backdrop-blur-md border-b border-gray-100 flex items-center justify-between px-8 sticky top-0 z-10 transition-all font-sans">
            <div className="flex items-center max-w-md w-full">
                <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                        type="text"
                        className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#2D7A3E] focus:border-[#2D7A3E] transition-shadow bg-gray-50"
                        placeholder="Search across dashboard..."
                    />
                </div>
            </div>

            <div className="flex items-center space-x-4">
                <button className="text-gray-400 hover:text-gray-600 relative p-2 rounded-full hover:bg-gray-100 transition-colors">
                    <Bell size={20} />
                    <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500 border-2 border-white"></span>
                </button>

                <div className="h-8 w-px bg-gray-200 mx-2"></div>

                <div className="flex items-center space-x-2 p-1.5 rounded-lg transition-colors">
                    <div className="h-9 w-9 rounded-full bg-[#2D7A3E] flex items-center justify-center text-white font-bold text-sm shadow-sm">
                        {user ? (user.name || user.email)?.charAt(0).toUpperCase() : <UserCircle size={28} className="text-white" />}
                    </div>
                    <div className="text-left hidden md:block ml-2">
                        <p className="text-[15px] font-bold text-gray-900 leading-none tracking-tight">
                            {user?.name || user?.email || "Admin User"}
                        </p>
                        <p className="text-xs font-medium text-[#2D7A3E] mt-1.5 capitalize">
                            {user?.role || "Superadmin"}
                        </p>
                    </div>
                </div>
            </div>
        </header>
    );
}
