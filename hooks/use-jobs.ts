"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export const useJobs = () => {
    return useQuery({
        queryKey: ["jobs"],
        queryFn: async () => {
            const res = await fetch(`${apiUrl}/api/jobs`, {
                credentials: "include"
            });
            if (!res.ok) throw new Error("Failed to fetch jobs");
            return res.json();
        }
    });
};

export const useCreateJob = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (jobData: any) => {
            const payload = {
                ...jobData,
                experience: jobData.experience || "Not specified",
                description: jobData.description || "Default job description.",
                requirements: jobData.requirements || [],
                responsibilities: jobData.responsibilities || [],
                benefits: jobData.benefits || [],
            };

            const res = await fetch(`${apiUrl}/api/jobs`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify(payload)
            });

            if (!res.ok) {
                const errorData = await res.json().catch(() => null);
                throw new Error(errorData?.error || "Failed to create job");
            }
            return res.json();
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["jobs"] });
        }
    });
};

export const useUpdateJob = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({ id, ...jobData }: any) => {
            const res = await fetch(`${apiUrl}/api/jobs/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify(jobData)
            });

            if (!res.ok) {
                const errorData = await res.json().catch(() => null);
                throw new Error(errorData?.error || "Failed to update job");
            }
            return res.json();
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["jobs"] });
        }
    });
};

export const useDeleteJob = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (id: string) => {
            const res = await fetch(`${apiUrl}/api/jobs/${id}`, {
                method: "DELETE",
                credentials: "include"
            });

            if (!res.ok) {
                const errorData = await res.json().catch(() => null);
                throw new Error(errorData?.error || "Failed to delete job");
            }
            return res.json();
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["jobs"] });
        }
    });
};
