

"use client";

import HeroSection from "@/components/home/HeroSection";
import HighlightsSection from "@/components/home/HighlightsSection";
import OurBusinessesSection from "@/components/home/OurBusinessesSection";
import PartnersSection from "@/components/home/PartnersSection";
import ProductsSection from "@/components/home/ProductsSection";
import SustainabilityTimeline from "@/components/home/SustainabilityTimeline";
import WhyBoarAgroSection from "@/components/home/WhyBoarAgroSection";
import CTASection from "@/components/home/ctasection";


export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <PartnersSection />
      <ProductsSection />
      <OurBusinessesSection/>
      <WhyBoarAgroSection />
      <HighlightsSection />
      <SustainabilityTimeline />
      <CTASection />
    </div>
  );
}
