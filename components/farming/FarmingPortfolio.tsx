"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

type PortfolioItem = {
  title: string;
  description: string;
  image: string;
};

const portfolioItems: PortfolioItem[] = [
  {
    title: "Premium Cocoa Beans",
    description:
      "From our estates and partner farms, we supply fermented and dried cocoa beans, traceable batches, and export-ready shipments.",
    image:
      "/images/other_section2.png",
  },
  {
    title: "Soybeans",
    description:
      "From irrigated farms, cleaned and graded soybeans with high protein content for processors.",
    image:
      "/images/other_section3.png",
  },
  {
    title: "Pepper",
    description:
      "Fresh, high-quality habanero peppers supplied to processors and retail chains.",
    image:
      "/images/other_section4.png",
  },
  {
    title: "Plantain Farms",
    description:
      "For the local market, we supply fresh, high‑quality habanero peppers to wholesalers, food processors, and retail supply chains.",
    image:
      "https://images.unsplash.com/photo-1604908554026-8f38d36b7f78?q=80&w=1200",
  },
  {
    title: "Maize",
    description:
      "Yellow and white maize varieties grown with climate-smart practices.",
    image:
      "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&w=1200",
  },
  {
    title: "Cassava",
    description:
      "High-yield cassava roots cultivated for starch, garri, and industrial use.",
    image:
      "https://images.unsplash.com/photo-1615484477778-ca3b77940c25?q=80&w=1200",
  },
];

export default function FarmingPortfolio() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const scrollAmount = 340;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const checkScrollPosition = () => {
    if (!scrollRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  useEffect(() => {
    checkScrollPosition();
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-20">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-[20px]  lg:text-[45px] xl:text-[50px] font-medium text-[#133F1E]">
            Our Farming Portfolio
          </h2>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`w-8 h-8 rounded-full border flex items-center justify-center transition
                ${
                  canScrollLeft
                    ? "border-[#CFE6D8] hover:bg-[#F7FDF9]"
                    : "border-gray-200 opacity-40 cursor-not-allowed"
                }`}
            >
              <ChevronLeft className="w-4 h-4 text-[#2D7A3E]" />
            </button>

            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`w-8 h-8 rounded-full border flex items-center justify-center transition
                ${
                  canScrollRight
                    ? "border-[#CFE6D8] hover:bg-[#F7FDF9]"
                    : "border-gray-200 opacity-40 cursor-not-allowed"
                }`}
            >
              <ChevronRight className="w-4 h-4 text-[#2D7A3E]" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          onScroll={checkScrollPosition}
          className="
          flex gap-4
            overflow-x-auto
            scroll-smooth
            scrollbar-hide
            snap-x snap-mandatory
          "
        >
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -15, transition: { duration: 0.3 } }}
              className="group relative overflow-hidden transition-all duration-300 min-w-[260px] md:min-w-[300px] lg:min-w-[320px] bg-white
                rounded-xl
                border border-gray-100
                shadow-sm
                snap-start
                
                "
            >
              <motion.div
                className="relative h-[160px] w-full overflow-hidden rounded-t-xl"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
              <div className="p-4">
                <h3 className="text-[18px] lg:text-[24px] font-medium mb-4 text-[#133F1E] group-hover:text-[#2D7A3E] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[#44464B] line-clamp-3 text-[14px] lg:text-[16px] text-justify leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
