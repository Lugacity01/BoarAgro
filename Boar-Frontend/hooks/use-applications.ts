"use client";

import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";

const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export const useApplications = () => {
    return useQuery({
        queryKey: ["applications"],
        queryFn: async () => {
            const res = await fetch(`${apiUrl}/api/applications`, {
                credentials: "include"
            });
            if (!res.ok) throw new Error("Failed to fetch applications");
            return res.json();
        }
    });
};

export const useCreateApplication = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (formData: FormData) => {
            const res = await fetch(`${apiUrl}/api/applications`, {
                method: "POST",
                // Note: Do NOT set Content-Type header when sending FormData,
                // fetch will automatically set it to multipart/form-data with the correct boundary
                body: formData
            });

            if (!res.ok) {
                const errorData = await res.json().catch(() => null);
                throw new Error(errorData?.error || "Failed to submit application");
            }
            return res.json();
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["applications"] });
        }
    });
};

export const useDeleteApplication = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (id: string) => {
            const res = await fetch(`${apiUrl}/api/applications/${id}`, {
                method: "DELETE",
                credentials: "include"
            });

            if (!res.ok) {
                const errorData = await res.json().catch(() => null);
                throw new Error(errorData?.error || "Failed to delete application");
            }
            return true;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["applications"] });
        }
    });
};
