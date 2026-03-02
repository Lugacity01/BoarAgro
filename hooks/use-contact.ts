"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export const useSubmitContact = () => {
    return useMutation({
        mutationFn: async (contactData: {
            fullName: string;
            email: string;
            countryCode: string;
            phone: string;
            companyName: string;
            role: string;
            inquiryType: string;
            message: string;
        }) => {
            const res = await fetch(`${apiUrl}/api/contacts`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(contactData),
            });

            if (!res.ok) {
                const errorData = await res.json().catch(() => null);
                throw new Error(errorData?.error || "Failed to submit contact form");
            }
            return res.json();
        }
    });
};

export const useContacts = () => {
    return useQuery({
        queryKey: ["contacts"],
        queryFn: async () => {
            const res = await fetch(`${apiUrl}/api/contacts`, {
                credentials: "include"
            });
            if (!res.ok) throw new Error("Failed to fetch contacts");
            return res.json();
        }
    });
};

export const useDeleteContact = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (id: string) => {
            const res = await fetch(`${apiUrl}/api/contacts/${id}`, {
                method: "DELETE",
                credentials: "include"
            });

            if (!res.ok) {
                const errorData = await res.json().catch(() => null);
                throw new Error(errorData?.error || "Failed to delete contact");
            }
            return true;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["contacts"] });
        }
    });
};
