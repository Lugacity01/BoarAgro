"use client";

import { motion, Variants } from "framer-motion";

import { fadeInLeft, staggerContainer, scaleIn } from "@/lib/animations";

import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

import { Leaf, Truck, FileCheck } from "lucide-react";

const highlights = [
  {
    title: "Integrated, Sustainable Sourcing",
    description:
      "We combine our own farms with trusted partners, using climate-smart practices to deliver ethically sourced, high-quality commodities with full traceability.",
    icon: Leaf,
  },
  {
    title: "Reliable, Traceable Supply",
    description:
      "Mechanized, irrigated operations ensure dependable volumes across multiple cycles, with batch-level documentation for quality control from field to processor.",
    icon: Truck,
  },
  {
    title: "Flexible Specs, Export-Ready",
    description:
      "Buyer-specified grading and packaging, managed certifications (SGS / Soncap / Phyto), and complete export documentation for smooth, compliant shipments.",
    icon: FileCheck,
  },
];

export const WhyProcessor = () => {
  return (
    <div>
      {/* Who We Are / Mission Vision */}
      <section className="lg:py-20 py-10 mx-auto px-4 lg:px-10 xl:px-20  bg-white">
        <div className="container xl:mx-auto xl:px-8">
          <div className="flex justify-between items-start lg:gap-10 gap-2 mb-5 ">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
            >
              <h2 className="lg:text-[45px] xl:text-[50px] text-[20px] font-medium text-[#133F1E]">
                Why Processors & Traders <br /> Work With BOAR Agro.
              </h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className=" col-span-3 items-center lg:flex hidden"
            >
              {/* Contact Button */}
              <motion.div variants={scaleIn}>
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-[#2D7A3E] w-72 lg:w-fit hover:bg-[#236530] text-white px-8 py-6 text-lg rounded-full"
                  >
                    Partner With Us
                  </Button>
                </Link>
              </motion.div>

              {/* Connector line */}
              <div className="w-3 h-0.5 bg-[#236530]" />

              {/* Arrow Button */}
              <motion.div variants={scaleIn}>
                <Button
                  variant="ghost"
                  className="flex w-12 h-12 p-0 items-center justify-center bg-[#2D7A3E] hover:bg-[#236530] rounded-full"
                >
                  <Image
                    src="/icons/arrow_top.png"
                    width={14}
                    height={14}
                    alt="arrow up"
                  />
                </Button>
              </motion.div>
            </motion.div>
          </div>

          <section className="lg:py-6 scrollbar-display">
            {/* Wrapper */}
            <div className="max-w-7xl mx-auto">
              <div className="flex lg:gap-2 gap-4 overflow-x-auto snap-x snap-mandatory lg:px-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0">
                {highlights.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={index}
                      className="snap-start shrink-0  w-[90%] md:w-auto bg-[#F7FDF9] rounded-xl p-4 space-y-4"
                    >
                      <Icon className="w-6 h-6 text-[#133F1E]" />

                      {/* Title */}
                      <h3 className="lg:text-[22px] text-[14px] font-medium text-[#133F1E] ">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="lg:text-[18px] text-[14px] text-justify text-[#44464B] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};
