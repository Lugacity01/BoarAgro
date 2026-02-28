"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import {
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  listItemVariant,
} from "@/lib/animations";
import Image from "next/image";
import ComparisonColumn from "../ComparisonColumn";

export default function FarmingApproach() {
  const highlights = [
    "Climate-Smart And Water-Efficient Practices",
    "Soil Health And Nutrient Management",
    "Minimal Waste And Residue Recycling",
    "Responsible Land Stewardship",
    "Employment And Training For Local Communities",
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="mx-auto px-4 md:px-6 lg:px-10 xl:px-20  py-10 bg-[#F7FDF9]"
    >
      <div className="container xl:mx-auto xl:px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-4">
            <ComparisonColumn title="Our Farming Approach" items={highlights} 
            wrapperClassName="bg-none border-0 border-none px-0"
            
            />
          </div>

          <motion.div
            variants={fadeInRight}
            className="group relative hidden lg:block h-[500px] rounded-lg overflow-hidden shadow-xl"
          >
            <Image
              src="/images/watering_farm.jpg"
              alt="BOAR Agro farmers in the field"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
