"use client";

import { motion } from "framer-motion";
import { HeartHandshake, Leaf, Recycle, ScanSearch, Users } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  fadeInLeft,
  fadeInRight,
} from "@/lib/animations";

const timeline = [
  { icon: Leaf, title: "Climate-Smart Agriculture" },
  { icon: Recycle, title: "Zero-Waste Operations" },
  { icon: Users, title: "Farmer Empowerment" },
];

export default function SustainabilityTimeline() {
  return (
   <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto px-4 md:px-6 lg:px-10 xl:px-20 py-10  bg-[#FBF7F2] text-[#2D2A26] relative overflow-hidden"
      >
        <div className="container xl:mx-auto  xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20 gap-10 items-center">
            {/* LEFT CONTENT */}
            <motion.div variants={fadeInLeft}>
              <h2 className="text-[20px] lg:text-[45px] xl:text-[52px] text-[#4E2D03] font-bold mb-3">
                Sustainability
              </h2>

              <p className="text-[14px] lg:text-[16px] xl:text-[18px] text-[#44464B] mb-5 max-w-xl leading-relaxed">
                BOAR Agro integrates sustainability into every stage of the
                value chain. Here are our sustainable farming principles.
              </p>

              <Link href="/contact">
                <Button className="text-[14px] lg:w-fit w-full lg:text-[16px] xl:text-[20px] bg-[#F4A43A] hover:bg-[#e3942f] text-white  px-8 py-6 rounded-full font-medium">
                  Contact Us
                </Button>
              </Link>
            </motion.div>

            {/* RIGHT TIMELINE */}
            {/* <motion.div variants={fadeInRight} className="relative"> */}

            {/* Vertical Line */}
            <motion.div variants={fadeInRight} className="relative h-[500px] overflow-auto scrollbar-display">
              {/* TIMELINE */}
              <div className="absolute left-5 top-5 bottom-5 w-[2px]  bg-[#F4A43A]" />

              {[
                {
                  icon: Leaf,
                  title: "Climate-Smart Agriculture",
                  desc: "Our climate-smart approaches use irrigation to reduce rainfall dependence, drought-resilient seeds, and targeted soil nutrient management to sustain productivity.",
                },
                {
                  icon: Recycle,
                  title: "Zero-Waste Farm Operations",
                  desc: "We run zero-waste operations by composting farm residues, using mulching to retain soil moisture, and avoiding controlled field burning.",
                },
                {
                  icon: Users,
                  title: "Farmer Empowerment",
                  desc: "We empower farmers through fair pricing, access to seedlings, training and agronomy support, and digital tools that ensure transparent transactions.",
                },
                {
                  icon: ScanSearch,
                  title: "Traceability & Ethical Sourcing",
                  desc: "We maintain a transparent supply chain so buyers can verify product origin, review documented farm practices, and assess applied quality controls from aggregation to export.",
                },
                {
                  icon: HeartHandshake,
                  title: "Community Impact",
                  desc: "We create jobs in rural communities, empower them through training and market access, and collaborate with research institutions like CRIN to improve practices and outcomes.",
                },
              ].map((item, index, arr) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className={`relative  flex gap-8 ${
                    index !== arr.length - 1 ? "mb-16" : ""
                  }`}
                >
                  {/* ICON */}
                  <div className="relative z-10">
                    <div
                      className="
                        w-10 h-10
                        rounded-full
                        bg-[#F4A43A]
                        flex items-center justify-center
                        text-white
                        shadow-md
                "
                    >
                      <item.icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="pt-1">
                    <h3 className="text-[14px] lg:text-[20px] xl:text-[24px] text-[#4E2D03] font-medium mb-2">{item.title}</h3>
                    <p className="text-[14px] lg:text-[15px] xl:text-[16px] text-[#4F5559] font-normal leading-relaxed max-w-md">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>
  );
}
