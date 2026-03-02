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
import ComparisonColumn from "../ComparisonColumn";
// import Image from "next/image";

const shipping = [
  "Commercial Invoice",
  "Packing List",
  "Bill of Lading (BL)",
  "Certificate of Origin",
  "Phytosanitary Certificate",
  "Quality / Weight Certificate (SGS, BV or equivalent)",
  "Insurance Certificate (where applicable)",
  "Export Permit / NEPC Registration",
];

const tradeDelivery = [
  "Incoterms: FOB, CFR, CIF",
  "Shipment Mode: Containerized / Bulk",
  "Inspection: SGS / Bureau Veritas (buyer-nominated)",
  "Payment Terms: Irrevocable LC at sight / negotiated terms",
];

export default function ExportDocSHipping() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="py-24bg-[#F7FBF9] bg-[#F7FDF9] "
    >
      <div className="container mx-auto py-10 px-4 md:px-6 lg:px-10 xl:px-20 ">
        {/* HEADER */}
        <motion.div variants={fadeInUp} className="text-center mb-20">
          <h2 className="text-[20px] lg:text-[50px] xl:text-[52px] font-medium mb-3 text-[#133F1E]">
            Export Document & Shipping
          </h2>
          <p className="lg:text-[20px] xl:text-[24px] text-[14px] text-center text-md text-[#44464B] max-w-3xl mx-auto leading-relaxed">
            BOAR Agro manages the full export documentation process to ensure
            smooth clearance and delivery at the destination.
          </p>
        </motion.div>

        {/* COMPARISON GRID */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <ComparisonColumn
            title="Standard Shipping & Export Documents"
            items={shipping}
            wrapperClassName="bg-white px-5"
          />

          <ComparisonColumn
            title="Trade & Delivery Terms"
            items={tradeDelivery}
            wrapperClassName="bg-white px-5"
          />
        </div>
      </div>
    </motion.section>
  );
}
