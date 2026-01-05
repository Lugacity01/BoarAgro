"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import {
  fadeInRight,
  staggerContainer,
  listItemVariant,
} from "@/lib/animations";

interface ComparisonColumnProps {
  title: string;
  items: string[];
  wrapperClassName?: string; 
}

export default function ComparisonColumn({
  title,
  items,
  wrapperClassName = "bg-white border border-red-100 px-5",
}: ComparisonColumnProps) {
  return (
    <motion.div variants={fadeInRight} className="space-y-4">
      {/* Title */}
      <h3 className="lg:text-[22px] text-[14px] font-medium text-[#1A1A1F]">
        {title}
      </h3>

      {/* Card */}
      <div
        className={`rounded-2xl py-10  ${wrapperClassName}`}
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="lg:space-y-4 space-y-3"
        >
          {items.map((text, index) => (
            <motion.div
              key={index}
              variants={listItemVariant}
              className="flex items-center gap-3"
            >
              <CheckCircle2 className="h-6 w-6 rounded-full bg-[#2D7A3E] text-white flex-shrink-0" />
              <p className="lg:text-[18px] text-[14px] text-[#44464B]">
                {text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
