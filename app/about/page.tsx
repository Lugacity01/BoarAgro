"use client"

import { motion, Variants  } from "framer-motion"
// import { variants } from "framer-motion";
import Image from "next/image"

import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  listItemVariant,
} from "@/lib/animations"
import CTASection from "@/components/home/ctasection"

export default function AboutPage() {
 

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="relative lg:min-h-[70vh] min-h-[99vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/home_hero.png" alt="Farmer" fill className="object-cover brightness-50" />
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="absolute bottom-15 z-10 container mx-auto px-4 md:px-6 lg:px-20  text-white"
        >
          <motion.h1 variants={fadeInUp} className="text-[32px] md:text-3xl lg:text-3xl xl:text-[40px]  font-bold mb-2">
            Feeding The Future, Sustainably.
          </motion.h1>
          <motion.p 
          variants={fadeInUp} transition={{ delay: 0.2 }} className="text-md mx-auto">
            Export-grade cocoa and oilseeds backed by innovation, traceability, and responsible farming.
          </motion.p>
        </motion.div>
      </section>

      {/* Who We Are / Mission Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInLeft}>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Who We Are</h2>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4 text-justify text-gray-600 leading-relaxed"
              >
                <motion.p variants={listItemVariant}>
                  BOAR Agro Ltd is an export-focused agribusiness producing, aggregating, and shipping premium
                  commodities cocoa, soybeans, and horticultural crops from Nigeria to international processors.
                </motion.p>
                <motion.p variants={listItemVariant}>
                  Our direct supply model eliminates intermediaries, ensuring consistent quality, better pricing, and
                  full traceability.
                </motion.p>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
              className="bg-gray-50 py-8 px-4 rounded-lg"
            >
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Mision</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                To transform Africa agricultural landscape through:
              </p>
              <motion.ul
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-3 text-gray-700"
              >
                {[
                  "Responsible farming",
                  "Direct trade partnerships",
                  "Supply chain innovation",
                  "Farmer empowerment",
                  "Export excellence",
                ].map((item, index) => (
                  <motion.li key={index} variants={listItemVariant} className="flex items-start gap-2">
                    <span className="text-[#2D7A3E] font-bold">•</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
            }}
            className="bg-[#2D7A3E] text-white lg:p-12 p-6 text-justify rounded-lg"
          >
            <h2 className="text-4xl font-bold mb-6">Our Vision</h2>
            <p className="text-xl leading-relaxed">
              To become West Africa leading provider of premium, sustainably grown agricultural commodities, trusted
              by global processors for <span className="font-bold">quality, reliability, and transparent sourcing</span>
              .
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection/>
    </div>
  )
}
