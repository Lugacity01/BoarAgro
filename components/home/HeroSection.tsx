"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { staggerContainer, scaleIn, fadeInUp } from "@/lib/animations";

export default function HeroSection() {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/home_hero.png"
          alt="Cocoa pods on tree"
          fill
          className="object-cover brightness-75"
          priority
        />
      </div>

      <div className=" absolute lg:bottom-10 bottom-15 z-10 container mx-auto px-4 md:px-12 lg:px-20 text-white ">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.08, delayChildren: 0.2 },
            },
          }}
          className="text-[20px] md:text-3xl lg:text-3xl xl:text-[45px] font-medium mb-6 text-balance leading-tight"
        >
          {[
            "Feeding The Future, Sustainably With",
            "Export-Grade Cocoa & Oilseed Production",
          ].map((line, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: "easeOut" },
                },
              }}
              className="block"
            >
              {line}
            </motion.span>
          ))}
        </motion.h1>

        <div className="lg:grid lg:grid-cols-12 items-center lg:gap-6">
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
            className="text-[14px] text-[#DBDBDB] font-normal text-justify col-span-9 md:text-[18px] mb-4 lg:mb-8 "
          >
            From our farms in Nigeria to processors across Europe, Asia, and the
            UK. We connect high-quality, agricultural to global markets through
            transparent, tech-driven and sustainably and ethical value chain
          </motion.p>

          
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex col-span-3 items-center "
          >
            {/* Contact Button */}
            <motion.div variants={scaleIn}>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-[#2D7A3E] w-72 lg:w-fit hover:bg-[#236530] text-white px-8 py-6 text-lg rounded-full"
                >
                  Contact Us
                </Button>
              </Link>
            </motion.div>

            {/* Connector line */}
            <div
              className="w-3 h-0.5 bg-[#236530]"/>

            {/* Arrow Button */}
            <motion.div variants={scaleIn}>
              <Button
                variant="ghost"
                className="
                  flex
                  w-12 h-12
                  p-0
                  items-center justify-center
                  bg-[#2D7A3E] hover:bg-[#236530]
                  rounded-full
                "
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
      </div>
    </motion.section>
  );
}
