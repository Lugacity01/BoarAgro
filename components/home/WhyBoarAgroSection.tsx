"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  listItemVariant,
} from "@/lib/animations";
import Image from "next/image";

const advantages = [
  "From farmers directly to processors",
  "Pricing is higher and transparent",
  "Quality is controlled end to end",
  "Logistics are lower cost and faster",
  "Traceability offers full visibility",
];

const traditionalModel = [
  "Multiple intermediaries",
  "Pricing is obscure and opaque",
  "Quality standards are fragmented",
  "Logistics are higher cost and slower",
  "Traceability is limited to verification",
];

export default function WhyBoarAgroSection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="py-24bg-[#F7FBF9]"
    >
      <div className="container mx-auto py-10 px-4 md:px-6 lg:px-10 xl:px-20 ">
        {/* HEADER */}
        <motion.div variants={fadeInUp} className="text-center mb-20">
          <h2 className="text-[20px] md:text-[50px] font-bold mb-3 text-[#133F1E]">
            Why BOAR Agro?
          </h2>
          <p className="lg:text-lg text-center text-md text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our value chain links farmers directly to processors, delivering
            better prices, stronger quality, faster delivery, and full
            traceability.
          </p>
        </motion.div>

        {/* COMPARISON GRID */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* VS BADGE */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-14 h-14 rounded-full bg-[#2D7A3E] text-white flex items-center justify-center font-bold">
              VS
            </div>
          </div>

          {/* LEFT — BOAR AGRO ADVANTAGE */}
          <motion.div variants={fadeInLeft} className="space-y-4">
            {/* LABEL + DECORATION */}
            <div className="flex items-center gap-3">
              {/* <div className="w-1 h-6 bg-[#2D7A3E] rounded-full" /> */}
              <Image src="icons/threelines.svg" width={40} height={40} alt="threelines"/>
              <h3 className="lg:text-[24px] text-[14px] font-semibold text-[#133F1E]">
                The BOAR Agro Advantage
              </h3>
            </div>

            {/* CARD */}
            <div className="bg-white rounded-2xl py-10 px-5 lg:p-10  border border-green-100">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="lg:space-y-5 space-y-3"
              >
                {advantages.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={listItemVariant}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 text-[#2D7A3E] mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-[14px] lg:text-[20px] font-400 ">{item}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT — TRADITIONAL MODEL */}
          <motion.div variants={fadeInRight} className="space-y-4">
            {/* LABEL */}
            <h3 className="lg:text-[24px] text-[14px] font-semibold text-[#133F1E]">
              Traditional Model
            </h3>

            {/* CARD */}
            <div className="bg-white rounded-2xl py-10 px-5  border border-red-100">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="lg:space-y-5 space-y-3"
              >
                {traditionalModel.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={listItemVariant}
                    className="flex items-start gap-3"
                  >
                    <XCircle className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 lg:text-[20px] text-[14px] font-400 leading-8">{item}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
