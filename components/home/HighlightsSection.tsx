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

export default function HighlightsSection() {
  const highlights = [
    {
      text: "Licensed Exporter",
      bold: "Of Cocoa, Soybeans & Other Agri Commodities",
    },
    {
      text: "Direct Supply To International Processors",
      bold: "In Amsterdam, Singapore & The UK",
    },
    { text: "200+ Acres Of Managed Farmland", bold: "With Expansion Plans" },
    { text: "Sustainable & Climate-Smart Farming Practices" },
    { text: "Traceable Value Chain", bold: "Farmer → Processor" },
    { text: "Year-Round Irrigated Soybeans Production" },
  ];
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="mx-auto px-4 md:px-6 lg:p-10 xl:px-20 py-10  bg-[#F7FDF9]"
    >
      <div className="container xl:mx-auto  xl:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={staggerContainer}>
            <motion.h2
              variants={fadeInLeft}
              className="text-[20px] md:text-[50px] font-bold mb-8 text-[#133F1E]"
            >
              Key Highlights
            </motion.h2>
            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  variants={listItemVariant}
                  className="flex lg:items-start items-center gap-3"
                >
                  <CheckCircle2 className="h-6 w-6 rounded-full bg-[#2D7A3E] text-white flex-shrink-0 mt-1" />
                  <p className="lg:text-[20px] text-[14px] text-[#44464B]">
                    {highlight.text}{" "}
                    {highlight.bold && (
                      <span className="font-semibold">{highlight.bold}</span>
                    )}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeInRight}
            className="group relative hidden lg:block h-[500px] rounded-lg overflow-hidden shadow-xl"
          >
            {/* Image */}
            <Image
              src="/images/other_section1.png"
              alt="BOAR Agro farmers in the field"
              fill
              className="object-cover"
            />

            {/* Hover Overlay */}
            <div
              className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100
       transition-opacity
       duration-300
     "
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
