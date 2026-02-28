"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
// import { ArrowRight } from "lucide-react";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";
import Image from "next/image";
import { useState } from "react";

export default function CTASection() {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInUp}
      className="py-20 bg-[#2D7A3E] relative text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 ">
        <Image
          src="/images/bg.png"
          alt="Cocoa pods on tree"
          fill
          className="object-cover brightness-75"
          priority
        />
      </div>
      <div className="container mx-auto px-1 md:px-6 lg:px-8 text-center relative z-10">
        <motion.h2
          variants={fadeInUp}
          className="text-[26px] lg:text-[45px] xl:text-[50px] font-bold mb-8 text-balance"
        >
          Let's Redefine Africa's{" "}
          <span className="lg:block ">Farming Value Chain.</span>
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex col-span-3 items-center justify-self-center"
        >
          {/* Contact Button */}
          <motion.div variants={scaleIn}>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-[#ffffff] w-60 lg:w-fit hover:text-[#ffffff] hover:bg-[#236530] text-[#000000] px-8 py-6 text-lg rounded-full"
              >
                Contact Us
              </Button>
            </Link>
          </motion.div>

          {/* Connector line */}
          <div className="w-3 h-0.5 bg-[#d2dfd5]" />

          {/* Arrow Button */}
          <motion.div variants={scaleIn}>
            <Button
              variant="ghost"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className="
                relative
                flex w-12 h-12 p-0
                items-center justify-center
                bg-white hover:bg-[#236530]
                rounded-full
              ">
              {/* Black arrow (default) */}
              <Image
                src="/icons/arrow_top_black.png"
                width={30}
                height={30}
                alt="arrow up"
                className={`absolute transition-opacity duration-200 ${
                  hovered ? "opacity-0" : "opacity-100"
                }`}
              />

              {/* White arrow (hover) — smaller asset, scaled */}
              <Image
                src="/icons/arrow_top.png"
                width={6}
                height={6}
                alt="arrow up"
                className={`absolute transition-opacity duration-200 ${
                  hovered
                    ? "opacity-100 scale-[2.15]"
                    : "opacity-0 scale-[2.15]"
                }`}
              />
            </Button>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute lg:-bottom-30 lg:right-70 -right-1 lg:w-50 w-30 lg:h-50 h-30 ">
        <Image
          src="icons/curve_arrow.svg"
          width={100}
          height={100}
          alt="leafybg"
        />
      </div>{" "}
    </motion.section>
  );
}
