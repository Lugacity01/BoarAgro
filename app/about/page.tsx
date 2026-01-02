"use client";

import { motion, Variants } from "framer-motion";
// import { variants } from "framer-motion";
import Image from "next/image";

import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  listItemVariant,
} from "@/lib/animations";
import CTASection from "@/components/home/ctasection";

export default function AboutPage() {
  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="relative  lg:min-h-screen  min-h-[99vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/sustanability.png"
            alt="Farmer"
            fill
            className="object-cover brightness-50"
          />
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="absolute flex flex-col text-center z-10 container mx-auto px-4 md:px-6 lg:px-10 xl:px-20  text-white"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-[20px] lg:text-[56px] xl:text-[58px]  font-bold mb-2"
          >
            Feeding The Future, Sustainably.
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="  font-normal text-[14px] lg:text-[18px] xl:text-[20px]"
          >
            Export-grade cocoa and oilseeds backed by innovation, traceability,
            and responsible farming.
          </motion.p>
        </motion.div>
      </section>

      {/* Who We Are / Mission Vision */}
      <section className="lg:py-20 py-10 mx-auto px-4 md:px-6 lg:px-10 xl:px-20  bg-white">
        <div className="container xl:mx-auto  xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16 gap-2 mb-5 lg:mb-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
            >
              <h2 className="lg:text-[32px] text-[20px] font-medium text-[#133F1E]">
                Who We Are
              </h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4 lg:text-[16px] xl:text-[18px] text-[14px] text-justify text-[#44464B] leading-relaxed"
            >
              <motion.p variants={listItemVariant}>
                BOAR Agro Ltd is an export-focused agribusiness producing,
                aggregating, and shipping premium commodities cocoa, soybeans,
                and horticultural crops from Nigeria to international
                processors.
              </motion.p>
              <motion.p variants={listItemVariant}>
                Our direct supply model eliminates intermediaries, ensuring
                consistent quality, better pricing, and full traceability.
              </motion.p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.6 },
                },
              }}
              className=" max-w-md text-justify rounded-lg"
            >
              <h2 className="lg:text-[32px] text-[20px] font-medium mb-2 lg:mb-6 text-[#133F1E]">
                Our Vision
              </h2>
              <p className=" lg:text-[16px] xl:text-[18px] text-[14px] text-justify text-[#44464B] leading-relaxed">
                To become West Africa leading provider of premium, sustainably
                grown agricultural commodities, trusted by global processors for{" "}
                <span className="font-bold text-[#133F1E]">
                  quality, reliability, and transparent sourcing
                </span>
                .
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
              className="lg:mt-0 mt-3"
            >
              <h2 className="lg:text-[32px] text-[20px] font-medium lg:mb-6 mb-2 text-[#133F1E]">
                Our Mision
              </h2>
              <p className=" lg:text-[16px] xl:text-[18px] text-[14px] text-justify text-[#44464B] leading-relaxed">
                To transform Africa agricultural landscape through:
              </p>
              <motion.ul
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="  lg:text-[16px] xl:text-[18px] text-[14px] text-justify text-[#44464B] leading-relaxed"
              >
                {[
                  "Responsible farming",
                  "Direct trade partnerships",
                  "Supply chain innovation",
                  "Farmer empowerment",
                  "Export excellence",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    variants={listItemVariant}
                    className="flex items-start gap-2"
                  >
                    <span className="text-[#2D7A3E] font-bold">•</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
