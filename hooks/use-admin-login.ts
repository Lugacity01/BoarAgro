"use client";

import { useMutation } from "@tanstack/react-query";

const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export const useAdminLogin = () => {
    return useMutation({
        mutationFn: async ({
            email,
            password,
        }: {
            email: string;
            password: string;
        }) => {
            const res = await fetch(`${apiUrl}/api/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(
                    data.error || "Failed to login. Please check your credentials."
                );
            }

            return data;
        },
    });
};