"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductData } from "@/lib/products";
import CTASection from "../home/ctasection";

export default function ProductDetail({ product }: { product: ProductData }) {
    return (
        <div className="pt-24 lg:pt-32 pb-10 bg-white min-h-screen">
            <div className="container mx-auto px-4 md:px-6 lg:px-10 xl:px-20">

                {/* Breadcrumbs */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-sm text-gray-400 mb-6 flex items-center space-x-2"
                >
                    <Link href="/agro-commodities" className="hover:text-[#2D7A3E] transition-colors">
                        &lt; Our Products
                    </Link>
                    <span>/</span>
                    <span className="text-[#2D7A3E] font-medium">{product.name}</span>
                </motion.div>

                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-3xl md:text-4xl lg:text-[40px] xl:text-[45px] font-medium text-[#133F1E] mb-6"
                >
                    {product.name}
                </motion.h1>

                {/* Top Description */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-[#44464B] max-w-5xl text-[14px] lg:text-[18px] xl:text-[20px] mb-12 leading-relaxed"
                >
                    {product.descriptionPhase1}
                </motion.p>

                {/* Main Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="relative w-full h-[300px] md:h-[450px] lg:h-[550px] rounded-xl overflow-hidden mb-12 shadow-sm"
                >
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>

                {/* Mid Description */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-[#44464B] max-w-5xl text-[14px] lg:text-[18px] xl:text-[20px] mb-16 leading-relaxed"
                >
                    {product.descriptionPhase2}
                </motion.p>

                {/* Two Column Grid: Specifications */}
                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 mb-20">

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-xl lg:text-2xl font-bold text-[#133F1E] border-b pb-3 mb-6">
                            Key Characteristics
                        </h3>
                        <ul className="space-y-4">
                            {product.keyCharacteristics.map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#2D7A3E] mt-2.5 mr-3 flex-shrink-0" />
                                    <span className="text-[#44464B] text-[15px] lg:text-[17px] leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-xl lg:text-2xl font-bold text-[#133F1E] border-b pb-3 mb-6">
                            Typical Export Specifications
                        </h3>
                        <ul className="space-y-3">
                            {product.exportSpecifications.map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#2D7A3E] mt-2.5 mr-3 flex-shrink-0" />
                                    <span className="text-[#44464B] text-[15px] lg:text-[17px] leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                </div>

                {/* End Uses Section */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-24"
                >
                    <h3 className="text-xl lg:text-2xl font-bold text-[#133F1E] mb-4">
                        End Uses
                    </h3>
                    <p className="text-[#44464B] text-[15px] lg:text-[17px] border-l-4 border-[rgba(45,122,62,0.3)] pl-4 py-1">
                        {product.endUses}
                    </p>
                </motion.div>

            </div>

             {/* Edge-to-Edge CTA Section matching Reference Design */}
            <CTASection />

        </div>
    );
}
