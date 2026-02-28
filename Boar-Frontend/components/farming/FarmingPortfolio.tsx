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
    title: "Cocoa Plantations",
    description:
      "Over 200 acres under a long-term model, using improved seedlings and CRIN-backed practices to produce export-grade fermented and dried beans.",
    image: "/images/cocoa.jpg",
  },
  {
    title: "Soybeans Farms",
    description:
      "100+ acres with mechanized, irrigated systems for multiple cycles each year. We grow food-grade and industrial-grade varieties.",
    image: "/images/other_section3.png",
  },
   {
    title: "Plantain Farms",
    description:
      "100 acres of plantain, serving domestic and regional markets. Plantain is integrated into our mixed-crop systems to enhance resilience and steady supply.",
    image:
      "/images/plantain.jpg",
  },
  {
    title: "Pepper Cultivation",
    description:
      "From habanero to chili and other pepper varieties, these short-cycle crops support cash flow while strengthening local supply chains.",
    image: "/images/bellpepper.jpg",
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
      <div className="container mx-auto px-4 md:px-6 lg:px-10 xl:px-20 ">
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
          {portfolioItems.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
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
                {isEven && (
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
                )}

                <div className="p-4">
                  <h3 className="text-[18px] lg:text-[24px] font-medium mb-4 text-[#133F1E] group-hover:text-[#2D7A3E] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[#44464B] text-[14px] lg:text-[16px] text-justify leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {!isEven && (
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
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
