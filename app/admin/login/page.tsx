"use client";


import { useRouter } from "next/navigation";
import Image from "next/image";
import { Lock, Mail, ArrowRight, ShieldCheck } from "lucide-react";
import { useAdminLogin } from "@/hooks/use-admin-login";
import { toast } from "react-hot-toast";

export default function AdminLogin() {
    const router = useRouter();
    const loginMutation = useAdminLogin();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget as HTMLFormElement);

        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        loginMutation.mutate(
            { email, password },
            {
                onSuccess: (data) => {
                    // Only handle UI logic here
                    toast.success("Login successful!");
                    localStorage.setItem("adminUser", JSON.stringify(data.user));
                    router.push("/admin");
                },
            }
        );
    };

    return (
        <div className="min-h-screen bg-gray-50 bg-gradient-to-br from-green-50 to-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">

            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-green-200/20 blur-3xl"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-200/20 blur-3xl"></div>
            </div>

            <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
                <div className="flex justify-center">
                    <div className="w-20 h-20 bg-white rounded-full shadow-xl flex items-center justify-center border border-gray-100 relative p-4">
                        <Image src="/boar_logo.png" alt="BOAR Agro" fill className="object-contain p-3" />
                    </div>
                </div>
                {/* <h2 className="mt-6 text-center text-3xl font-extrabold text-[#2D7A3E] tracking-tight font-sans">
                    Admin Portal
                </h2> */}
                {/* <p className="mt-2 text-center text-sm text-gray-600 font-medium">
                    Sign in to access your dashboard
                </p> */}
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10">
                <div className="bg-white py-10 px-6 shadow-2xl sm:rounded-2xl sm:px-10 border border-gray-100">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {loginMutation.isError && (
                            <div className="p-3 bg-red-50 border border-red-200 text-red-600 rounded-xl text-sm font-medium text-center">
                                {loginMutation.error.message}
                            </div>
                        )}
                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                                Email address
                            </label>
                            <div className="mt-2 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="appearance-none block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2D7A3E] focus:border-[#2D7A3E] sm:text-sm transition-all"
                                    placeholder="admin@boaragro.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-semibold text-gray-700">
                                Password
                            </label>
                            <div className="mt-2 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="appearance-none block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2D7A3E] focus:border-[#2D7A3E] sm:text-sm transition-all"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-[#2D7A3E] focus:ring-[#2D7A3E] border-gray-300 rounded"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <a href="#" className="font-semibold text-green-600 hover:text-green-500 transition-colors">
                                    Forgot your password?
                                </a>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                disabled={loginMutation.isPending}
                                className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-xl shadow-md text-sm font-bold text-white bg-[#2D7A3E] hover:bg-[#236530] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2D7A3E] transition-all disabled:opacity-70 group"
                            >
                                {loginMutation.isPending ? "Signing in..." : "Sign in"}
                                {!loginMutation.isPending && <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />}
                            </button>
                        </div>
                    </form>

                    <div className="mt-6 flex justify-center items-center text-xs text-gray-500 space-x-1">
                        <ShieldCheck size={14} className="text-green-500" />
                        <span>Secure encryption active</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
