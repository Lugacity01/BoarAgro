"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";


export default function ProductsSection() {
  const products = [
     {
       image: "/images/other_section2.png",
       title: "Premium Cocoa Beans",
       description:
         "From our estates and partner farms, we supply fermented and dried cocoa beans, bulk bags, traceable blends, and specialty-grade options",
     },
     {
       image: "/images/other_section3.png",
       title: "Soybeans",
       description:
         "From irrigated Ofigiri farms with ultra-annual yields, we supply high-quality beans-cleaned, graded, and trade-ready.",
     },
     {
       image: "/images/other_section4.png",
       title: " Pepper",
       description:
         "For the local market, we supply fresh, high-quality  peppers to wholesale food processors, and chilli supply.",
     },
   ];
  return (
    <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="mx-auto px-4 md:px-6 lg:p-10 xl:px-20 bg-gradient-to-b from-white to-gray-50 relative"
      >
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, #2D7A3E 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="container xl:mx-auto  xl:px-8 relative z-10">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            {/* <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: "spring" }}
              className="inline-block mb-4"
            >
              <span className="bg-[#2D7A3E]/10 text-[#2D7A3E] px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
                Premium Quality
              </span>
            </motion.div> */}
            <h2 className="text-[20px] md:text-[50px] font-medium text-[#133F1E] ">
              Our Products
            </h2>
            <p className="lg:text-lg text-center text-md text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Rooted in Africa, sustainable by nature, traded across global markets
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-3 gap-4"
          >
            {products.map((product, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -15, transition: { duration: 0.3 } }}
                className="group relative bg-white rounded-2xl overflow-hidden transition-all duration-300 border border-gray-100"
              >
                <motion.div
                  className="relative h-60 w-full overflow-hidden bg-gray-100"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
                <div className="p-4">
                  <h3 className="text-[18px] lg:text-[24px] font-medium mb-4 text-[#133F1E] group-hover:text-[#2D7A3E] transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-[#44464B] line-clamp-3 text-[14px] lg:text-[16px] text-justify leading-relaxed mb-6">
                    {product.description}
                  </p>
                  <motion.div
                    className="flex items-center text-[#2D7A3E] font-semibold"
                    whileHover={{ x: 5 }}
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
  );
}
