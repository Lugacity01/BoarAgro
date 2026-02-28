import CareersPage from "@/components/careers/careers-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers at BOAR Agro | Join Our Sustainable Mission",
  description:
    "Grow your career with BOAR Agro. We are looking for passionate individuals to join us in revolutionizing the agricultural supply chain in Nigeria and connecting farms directly to global markets.",
  keywords: [
    "BOAR Agro careers",
    "agricultural jobs Nigeria",
    "agribusiness careers",
    "sustainable farming jobs",
    "export supply chain careers",
    "jobs at BOAR Agro",
  ],
  openGraph: {
    title: "Careers at BOAR Agro | Join Our Sustainable Mission",
    description:
      "Grow your career with BOAR Agro. Discover opportunities to make an impact in sustainable agriculture and global trade.",
    url: "https://boaragro.com/careers",
    siteName: "BOAR Agro",
    images: [
      {
        url: "/boar_logo.png",
        width: 1200,
        height: 630,
        alt: "BOAR Agro Careers",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at BOAR Agro | Sustainable Agriculture Jobs",
    description:
      "Join BOAR Agro and help us connect Nigerian farms to global markets through sustainable, traceable agricultural practices.",
    images: ["/boar_logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Careers() {
  return (
    <div className="min-h-screen">
      <CareersPage />
    </div>
  );
}
