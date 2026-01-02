"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { staggerContainer, scaleIn, fadeInUp } from "@/lib/animations";

export default function FarmingHeroSection() {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      className="relative min-h-150 lg:min-h-130 flex overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/farming_hero.jpg"
          alt="Cocoa pods on tree"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      {/* CONTENT */}
      <div
        className="
      relative z-10 w-full flex items-end
      lg:absolute lg:bottom-10 lg:left-0
    "
      >
        <div className="container mx-auto px-4 md:px-6 lg:p-10 xl:px-20 text-white pb-16 lg:pb-0">
          <motion.h1
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.08, delayChildren: 0.2 },
              },
            }}
            className="text-[22px] sm:text-3xl lg:text-3xl xl:text-[45px] font-medium mb-6 leading-tight"
          >
            {["Sustainable Farming at Scale."].map((line, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="block"
              >
                {line}
              </motion.span>
            ))}
          </motion.h1>

          <div className="lg:grid lg:grid-cols-12 items-center gap-6">
            <motion.p
              variants={fadeInUp}
              transition={{ delay: 0.6 }}
              className="text-[14px] sm:text-[16px] md:text-[18px] text-[#DBDBDB] col-span-9 mb-6 lg:mb-0"
            >
              We operate multiple farming sites across Nigeria, with a strong
              focus on sustainability, productivity, and long-term value
              creation. Our farming operations are designed to support
              export-grade quality while promoting responsible land use and
              community engagement.
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
                    Partner With Us
                  </Button>
                </Link>
              </motion.div>

              {/* Connector line */}
              <div className="w-3 h-0.5 bg-[#236530]" />

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
      </div>
    </motion.section>
  );
}
