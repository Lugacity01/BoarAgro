import AboutDetails from "@/components/about/about-details";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About BOAR Agro | Traceable Agricultural Supply Chain",
  description:
    "Learn about BOAR Agro Ltd, a Nigeria-based export agribusiness delivering premium cocoa, oilseeds, and horticultural crops to global markets through sustainable farming, traceability, and direct trade partnerships.",
  keywords: [
    "BOAR Agro",
    "About BOAR Agro",
    "Nigerian agribusiness exporter",
    "export-grade cocoa Nigeria",
    "sustainable agriculture Africa",
    "oilseed export company",
    "direct farm to market agriculture",
    "traceable agricultural supply chain",
  ],
  openGraph: {
    title: "About BOAR Agro | Feeding the Future Sustainably",
    description:
      "BOAR Agro is an export-focused agribusiness connecting sustainably grown Nigerian cocoa and oilseeds to global processors through innovation, transparency, and responsible farming.",
    url: "https://boaragro.com/about",
    siteName: "BOAR Agro",
    images: [
      {
        url: "/boar_logo.png",
        width: 1200,
        height: 630,
        alt: "BOAR Agro – Sustainable Agricultural Exports",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About BOAR Agro | Sustainable Agricultural Exports",
    description:
      "Discover how BOAR Agro delivers premium, traceable cocoa and oilseeds from Nigeria to international markets through sustainable farming practices.",
    images: ["/boar_logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen ">
      <AboutDetails />
    </div>
  );
}
