"use client";

import { motion } from "framer-motion";
import Image from "next/image";


export default function PartnersSection() {
 const partners = [
    { name: "CMA CGM", url: "/partners/CMA_CGM_logo.png" },
    { name: "IITA", url: "/partners/iita_logo_transparent.png" },
    { name: "ICCO", url: "/partners/ICCO.png" },
    { name: "Sterling", url: "/partners/SterlingLogo.png" },
    {
      name: "Rainforest Alliance",
      url: "/partners/2019-Rainforest-Alliance.png",
    },
    { name: "NIHORT", url: "/partners/NIHORT.png" },
    { name: "msc", url: "/partners/path3659.png" },
  ];

  const duplicatedPartners = [...partners, ...partners, ...partners];
  return (
    <section className="pt-16 px-20  from-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 mb-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-[20px]  font-normal text-[#44464B] "
        >
          Our Partners
        </motion.h2>
      </div>

      <div className="relative">
        <motion.div
          className="flex items-center gap-16"
          animate={{
            x: [0, -1920],
          }}
          transition={{
            x: {
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {duplicatedPartners.map((partner, index) => (
            <div
              key={index}
              className="flex-shrink-0 hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={partner.url || "/placeholder.svg"}
                alt={partner.name}
                width={70}
                height={70}
                className="object-contain hover:opacity-60 transition-opacity"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
