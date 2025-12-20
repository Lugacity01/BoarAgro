import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function CTASection() {
  return (
  
    <section className="py-20 bg-[#2D7A3E] text-white relative overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="container mx-auto px-3 md:px-6 lg:px-8 text-center relative z-10"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 text-balance"
        >
          Lets Redefine Africa
          <br />
          Farming Value Chain.
        </motion.h2>
        <motion.div
          variants={staggerContainer}
          className="flex justify-center items-center gap-4"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white hover:bg-gray-100 text-[#2D7A3E] px-8 py-6 text-lg rounded-full font-semibold"
              >
                Contact Us
              </Button>
            </Link>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
            }}
            className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center"
          >
            <ArrowRight className="h-6 w-6" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
