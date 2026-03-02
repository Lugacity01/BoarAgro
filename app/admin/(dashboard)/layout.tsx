import { Sidebar } from "@/components/admin/Sidebar";
import { Header } from "@/components/admin/Header";

export default function AdminDashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen overflow-hidden bg-gray-50 bg-gradient-to-br from-gray-50 to-gray-100/50">
            <Sidebar />
            <div className="flex-1 flex flex-col h-screen overflow-hidden relative">
                <Header />
                <main className="flex-1 overflow-x-hidden overflow-y-auto">
                    <div className="max-w-7xl mx-auto px-6 py-8">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
