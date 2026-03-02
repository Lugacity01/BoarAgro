"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function OurBusinessesSection() {
  const paragraphs = [
    "At BOAR Agro Ltd, our operations are built around two complementary pillars: Farming and Agri-Commodities Trading.",

    "Together, they form an integrated value chain that allows us to control quality, ensure traceability, and reliably supply global markets with sustainably sourced agricultural commodities.",

    "Our business model combines primary production, aggregation, and export trading, enabling us to serve international processors while supporting local farming communities.",
  ];

  return (
    <section className="bg-[#F7FDF9] py-10 lg:py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-20">
        <div className="max-w-5xl mx-auto lg:text-center">
          {/* Heading */}
          <h2 className="text-[20px] text-left lg:text-center lg:text-[34px] font-medium text-[#133F1E] mb-6">
            Our Business
          </h2>

          {/* Paragraphs */}
          <div className="space-y-4 mb-10">
            {paragraphs.map((text, index) => (
              <p
                key={index}
                className="text-[14px] md:text-[18px] text-[#44464B] leading-relaxed"
              >
                {text}
              </p>
            ))}
          </div>

          {/* Buttons */}
          <div className="lg:flex lg:items-center lg:justify-center lg:gap-4 ">
            <Link href="/farming">
              <Button className="border w-full bg-[#2D7A3E] hover:bg-[#236530] text-white lg:text-[20px] mb-3 lg:mb-0 rounded-full px-8 py-6 text-[14px] font-medium">
                Explore Farming
              </Button>
            </Link>

            <Link href="/agro-commodities">
              <Button
                variant="outline"
                className="rounded-full w-full text-[14px] lg:text-[20px]  font-medium border-[#DDE5E1] text-[#0F3D2E] px-8 py-6  hover:bg-[#F0F5F2]"
              >
                Agri Commodities
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
