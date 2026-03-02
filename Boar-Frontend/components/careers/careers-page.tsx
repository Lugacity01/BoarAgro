"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
    ArrowRight,
    Leaf,
    Globe2,
    Users,
    GraduationCap,
    Heart,
    TrendingUp,
    ChevronDown,
    Loader2
} from "lucide-react";
import { toast } from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { useCreateApplication } from "@/hooks/use-applications";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

const benefits = [
    {
        icon: Heart,
        title: "Comprehensive Health",
        description: "Premium health, dental, and vision coverage for you and your family.",
    },
    {
        icon: GraduationCap,
        title: "Continuous Learning",
        description: "Annual learning stipend and access to industry-leading training programs.",
    },
    {
        icon: Leaf,
        title: "Impactful Work",
        description: "Contribute directly to sustainable agriculture and food security.",
    },
    {
        icon: TrendingUp,
        title: "Career Growth",
        description: "Clear progression paths in a rapidly expanding global agribusiness.",
    },
    {
        icon: Globe2,
        title: "Global Exposure",
        description: "Work with international partners and processors across different markets.",
    },
    {
        icon: Users,
        title: "Vibrant Culture",
        description: "Join a diverse, inclusive team passionate about revolutionizing agriculture.",
    },
];

const formatDateAndDaysAgo = (dateString: string) => {
    const posted = new Date(dateString);
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - posted.getTime());
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    const formattedDate = posted.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric"
    });

    if (diffDays === 0) return `Posted today (${formattedDate})`;
    if (diffDays === 1) return `Posted 1 day ago (${formattedDate})`;
    return `Posted ${diffDays} days ago (${formattedDate})`;
};


export default function CareersPage() {
    const [openJobId, setOpenJobId] = useState<string | null>(null);
    const [openDialogId, setOpenDialogId] = useState<string | null>(null);
    const [jobs, setJobs] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const createApplicationMutation = useCreateApplication();
    const [isApplying, setIsApplying] = useState<string | null>(null);

    const handleApply = async (e: React.FormEvent<HTMLFormElement>, jobId: string) => {
        e.preventDefault();
        setIsApplying(jobId);

        const form = e.currentTarget;
        const formData = new FormData(form);
        formData.append('jobId', jobId);

        createApplicationMutation.mutate(formData, {
            onSuccess: () => {
                toast.success('Your application has been submitted successfully!');
                setIsApplying(null);
                setOpenDialogId(null);
                form.reset();
            },
            onError: (err: any) => {
                toast.error(err.message || 'Failed to submit application. Please try again.');
                setIsApplying(null);
            }
        });
    };

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/jobs`);
                if (res.ok) {
                    const data = await res.json();
                    setJobs(data);
                }
            } catch (error) {
                console.error("Failed to fetch jobs:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchJobs();
    }, []);

    const toggleJob = (id: string) => {
        setOpenJobId(openJobId === id ? null : id);
    };

    return (
        <div className=" pb-20">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-[#2D7A3E]/5 py-20 lg:py-32">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[#2D7A3E]/10 -skew-x-12 transform origin-top blur-3xl rounded-full opacity-50" />
                <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-[#FFD700]/10 rounded-full blur-3xl opacity-40" />

                <div className="container mx-auto px-4 md:px-6 lg:px-10 xl:px-20 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
                        >
                            Grow Your Career With <span className="text-[#2D7A3E]">BOAR Agro</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed"
                        >
                            Join us in our mission to revolutionize the agricultural supply chain.
                            We are connecting Nigerian farms to global markets through sustainable,
                            zero-middlemen direct trade.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <Button
                                onClick={() => {
                                    document.getElementById('open-positions')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="bg-[#2D7A3E] hover:bg-[#236530] text-white px-8 py-6 text-lg rounded-full"
                            >
                                View Open Positions <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Culture Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6 lg:px-10 xl:px-20">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl"
                        >
                            {/* Using a placeholder or generic agro image concept if applicable, assuming a placeholder pattern for now as per previous conversations */}
                            <div className="absolute inset-0 bg-[#2D7A3E]/20 mix-blend-multiply z-10" />
                            <Image
                                src="/farming/seed.webp" // Reusing an existing image based on typical project structure, or fallback to a solid color if needed.
                                alt="BOAR Agro Team Culture"
                                fill
                                className="object-cover"
                                // Fallback style if image doesn't exist
                                style={{ backgroundColor: '#236530' }}
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                                Why Build Your Future Here?
                            </h2>
                            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                                <p>
                                    At BOAR Agro, we don't just trade commodities; we build ecosystems.
                                    Our work directly impacts the livelihoods of local farmers while delivering
                                    premium, traceable products to global processors.
                                </p>
                                <p>
                                    We are a team of innovators, agronomists, logistics experts, and sustainability
                                    advocates. We value transparency, community impact, and excellence in everything we do.
                                </p>
                                <div className="pt-4 border-t border-gray-100">
                                    <blockquote className="italic text-xl text-gray-800 font-medium my-4 border-l-4 border-[#2D7A3E] pl-6 py-2">
                                        "We are cultivating more than crops; we are cultivating leaders who will shape the future of African agriculture."
                                    </blockquote>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 md:px-6 lg:px-10 xl:px-20">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Benefits & Perks
                        </h2>
                        <p className="text-lg text-gray-600">
                            We invest in our people because they are the foundation of our sustainable future.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={benefit.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
                            >
                                <div className="w-14 h-14 bg-[#2D7A3E]/10 rounded-2xl flex items-center justify-center mb-6 text-[#2D7A3E] group-hover:bg-[#2D7A3E] group-hover:text-white transition-colors">
                                    <benefit.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Positions Section */}
            <section id="open-positions" className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6 lg:px-10 xl:px-20">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                        <div className="max-w-2xl">
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                                Open Positions
                            </h2>
                            <p className="text-lg text-gray-600">
                                Ready to make an impact? Explore our current openings and find where you fit in our journey.
                            </p>
                        </div>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-4">
                        {isLoading ? (
                            <div className="text-center py-10 bg-white border border-gray-100 rounded-2xl shadow-sm">
                                <Loader2 className="animate-spin h-8 w-8 mx-auto text-[#2D7A3E] mb-4" />
                                <p className="text-gray-500 font-medium">Loading open positions...</p>
                            </div>
                        ) : jobs.length === 0 ? (
                            <div className="text-center py-10 bg-white border border-gray-100 rounded-2xl shadow-sm">
                                <p className="text-gray-500 font-medium text-lg">No open positions at the moment.</p>
                                <p className="text-gray-400 mt-2">Please check back later or send a speculative application.</p>
                            </div>
                        ) : jobs.map((job, index) => (
                            <motion.div
                                key={job.id}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Collapsible
                                    open={openJobId === job.id}
                                    onOpenChange={() => toggleJob(job.id)}
                                    className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:border-[#2D7A3E]/50 transition-colors"
                                >
                                    <CollapsibleTrigger className="w-full flex flex-col sm:flex-row sm:items-center justify-between p-6 md:p-8 text-left focus:outline-none">
                                        <div>
                                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                                                {job.title}
                                            </h3>
                                            <div className="flex flex-wrap items-center gap-3 md:gap-4 text-sm font-medium text-gray-600">
                                                <span className="bg-gray-100 px-3 py-1 rounded-full">{job.department}</span>
                                                <span className="bg-gray-100 px-3 py-1 rounded-full">{job.location}</span>
                                                <span className="bg-gray-100 px-3 py-1 rounded-full">{job.type}</span>
                                                <span className="bg-gray-100 px-3 py-1 rounded-full hidden lg:inline-flex">{job.experience}</span>
                                                <span className="bg-gray-50 border border-gray-100 px-3 py-1 rounded-full text-xs text-gray-500 w-full sm:w-auto mt-2 sm:mt-0">{formatDateAndDaysAgo(job.postedDate)}</span>
                                            </div>
                                        </div>
                                        <div className="mt-4 sm:mt-0 flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto">
                                            <span className="text-[#2D7A3E] font-medium hidden md:block">
                                                {openJobId === job.id ? 'Hide Details' : 'View Details'}
                                            </span>
                                            <div className={`p-2 rounded-full bg-gray-50 text-gray-500 transition-transform duration-300 ${openJobId === job.id ? 'rotate-180 bg-[#2D7A3E]/10 text-[#2D7A3E]' : ''}`}>
                                                <ChevronDown className="w-5 h-5" />
                                            </div>
                                        </div>
                                    </CollapsibleTrigger>

                                    <CollapsibleContent className="px-6 md:px-8 pb-8 pt-2 animate-in slide-in-from-top-2">
                                        <div className="border-t border-gray-100 pt-6">
                                            <div className="mb-6">
                                                <h4 className="text-lg font-bold text-gray-900 mb-3">About the Role</h4>
                                                <p className="text-gray-600 leading-relaxed">
                                                    {job.description}
                                                </p>
                                            </div>

                                            <div className="mb-8">
                                                <h4 className="text-lg font-bold text-gray-900 mb-3">Requirements</h4>
                                                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                                                    {job.requirements?.map((req: string, i: number) => (
                                                        <li key={i}>{req}</li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {job.responsibilities && job.responsibilities.length > 0 && (
                                                <div className="mb-8">
                                                    <h4 className="text-lg font-bold text-gray-900 mb-3">Responsibilities</h4>
                                                    <ul className="list-disc pl-5 space-y-2 text-gray-600">
                                                        {job.responsibilities.map((res: string, i: number) => (
                                                            <li key={i}>{res}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}

                                            {job.benefits && job.benefits.length > 0 && (
                                                <div className="mb-8">
                                                    <h4 className="text-lg font-bold text-gray-900 mb-3">Benefits</h4>
                                                    <ul className="list-disc pl-5 space-y-2 text-gray-600">
                                                        {job.benefits.map((benefit: string, i: number) => (
                                                            <li key={i}>{benefit}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}

                                            <Dialog open={openDialogId === job.id} onOpenChange={(open) => setOpenDialogId(open ? job.id : null)}>
                                                <DialogTrigger asChild>
                                                    <Button className="bg-[#2D7A3E] hover:bg-[#236530] text-white px-8 py-6 rounded-full w-full sm:w-auto">
                                                        Apply Now
                                                    </Button>
                                                </DialogTrigger>
                                                <DialogContent className="sm:max-w-[500px]">
                                                    <DialogHeader>
                                                        <DialogTitle>Apply for {job.title}</DialogTitle>
                                                        <DialogDescription>
                                                            Fill out the form below to apply for this position. We'll get back to you soon.
                                                        </DialogDescription>
                                                    </DialogHeader>
                                                    <form onSubmit={(e) => handleApply(e, job.id)} className="space-y-4 py-4">
                                                        <div className="space-y-2">
                                                            <label htmlFor={`name-${job.id}`} className="text-sm font-medium leading-none">Full Name</label>
                                                            <input id={`name-${job.id}`} name="name" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="John Doe" required />
                                                        </div>
                                                        <div className="space-y-2">
                                                            <label htmlFor={`email-${job.id}`} className="text-sm font-medium leading-none">Email address</label>
                                                            <input id={`email-${job.id}`} name="email" type="email" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="john@example.com" required />
                                                        </div>
                                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                            <div className="space-y-2">
                                                                <label htmlFor={`location-${job.id}`} className="text-sm font-medium leading-none">Current Location</label>
                                                                <input id={`location-${job.id}`} name="location" type="text" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="City, Country" required />
                                                            </div>
                                                            <div className="space-y-2">
                                                                <label htmlFor={`experience-${job.id}`} className="text-sm font-medium leading-none">Years of Experience</label>
                                                                <input id={`experience-${job.id}`} name="experience" type="number" min="0" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="e.g. 5" required />
                                                            </div>
                                                        </div>
                                                        <div className="space-y-2">
                                                            <label htmlFor={`document-${job.id}`} className="text-sm font-medium leading-none">Resume / CV (PDF or DOC)</label>
                                                            <input id={`document-${job.id}`} name="document" type="file" accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" required />
                                                        </div>
                                                        <div className="space-y-2">
                                                            <label htmlFor={`message-${job.id}`} className="text-sm font-medium leading-none">Cover Letter / Note (Optional)</label>
                                                            <textarea id={`message-${job.id}`} name="coverLetter" className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Tell us why you're a great fit..."></textarea>
                                                        </div>
                                                        <Button type="submit" disabled={isApplying === job.id} className="w-full bg-[#2D7A3E] hover:bg-[#236530] text-white">
                                                            {isApplying === job.id ? (
                                                                <>
                                                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                                    Submitting...
                                                                </>
                                                            ) : 'Submit Application'}
                                                        </Button>
                                                    </form>
                                                </DialogContent>
                                            </Dialog>
                                        </div>
                                    </CollapsibleContent>
                                </Collapsible>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-16 text-center bg-[#2D7A3E]/5 border border-[#2D7A3E]/10 rounded-3xl p-8 lg:p-12">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Don't see a perfect fit?</h3>
                        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                            We are always looking for talented individuals to join our team. Send your resume and a brief introduction to our team.
                        </p>
                        <Link href="/contact">
                            <Button variant="outline" className="border-[#2D7A3E] text-[#2D7A3E] hover:bg-[#2D7A3E] hover:text-white px-8 py-6 rounded-full text-lg">
                                Send Speculative Application
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
