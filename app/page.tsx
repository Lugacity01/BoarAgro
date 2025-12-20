"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  Leaf,
  Users,
  Recycle,
  XCircle,
  TrendingUp,
} from "lucide-react";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  listItemVariant, scaleIn
} from "@/lib/animations";

export default function HomePage() {
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
        "From irrigated Ofigiri farms with ultra-annual yields, we supply high-quality beans—cleaned, graded, and trade-ready.",
    },
    {
      image: "/images/other_section4.png",
      title: " Pepper",
      description:
        "For the local market, we supply fresh, high-quality  peppers to wholesale food processors, and chilli supply.",
    },
  ];

  const highlights = [
    {
      text: "Licensed Exporter",
      bold: "Of Cocoa, Soybeans & Other Agri Commodities",
    },
    {
      text: "Direct Supply To International Processors",
      bold: "In Amsterdam, Singapore & The UK",
    },
    { text: "200+ Acres Of Managed Farmland", bold: "With Expansion Plans" },
    { text: "Sustainable & Climate-Smart Farming Practices" },
    { text: "Traceable Value Chain", bold: "Farmer → Processor" },
    { text: "Year-Round Irrigated Soybeans Production" },
  ];

  const advantages = [
    "From farmers directly to processors",
    "Pricing is higher and transparent",
    "Quality is controlled end to end",
    "Logistics are lower cost and faster",
    "Traceability offers full visibility",
  ];

  const traditionalModel = [
    "Multiple intermediaries",
    "Pricing is obscure and opaque",
    "Quality standards are fragmented",
    "Logistics are higher cost and slower",
    "Traceability is limited to verification",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
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

        <div className=" absolute lg:bottom-10 bottom-5 z-10 container mx-auto px-4 md:px-12 lg:px-20 text-white ">
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
            className="text-[32px] md:text-3xl lg:text-3xl xl:text-[40px] font-bold mb-6 text-balance leading-tight"
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

          <div className="lg:grid lg:grid-cols-5 items-center lg:gap-16">
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.6 }}
              className="text-md text-justify col-span-4 md:text-32 mb-4 lg:mb-8 "
            >
              From our farms in Nigeria to processors across Europe, Asia, and
              the UK. We connect high-quality, agricultural to global markets
              through transparent, tech-driven and sustainably and ethical value
              chain
            </motion.p>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex  col-span-1 gap-4 justify-center items-center"
            >
              <motion.div variants={scaleIn}>
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-[#2D7A3E] w-80 lg:w-fit hover:bg-[#236530] text-white px-8 py-6 text-lg rounded-full"
                  >
                    Contact Us
                  </Button>
                </Link>
              </motion.div>

              <motion.div variants={scaleIn}>
                <Button
                  size="lg"
                  variant="ghost"
                  className="bg-white/10  hidden lg:block hover:bg-white/20 text-white px-8 py-6 text-lg rounded-full backdrop-blur-sm border border-white/20"
                >
                  <ArrowRight className="ml-2  h-5 w-5" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Partners Section */}
      <section className="py-16 px-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-2xl font-semibold text-gray-700"
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

      {/* Products Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="lg:py-24 lg:px-20 bg-white relative"
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

        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: "spring" }}
              className="inline-block mb-4"
            >
              <span className="bg-[#2D7A3E]/10 text-[#2D7A3E] px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
                Premium Quality
              </span>
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Our Products
            </h2>
            <p className="lg:text-xl text-justify lg:text-center text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Export-grade agricultural commodities sourced directly from
              Nigerian farms, meeting international quality standards with full
              traceability.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {products.map((product, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -15, transition: { duration: 0.3 } }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100"
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
                  <h3 className="text-2xl  font-bold mb-4 text-gray-900 group-hover:text-[#2D7A3E] transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 text-justify leading-relaxed mb-6">
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

      {/* Key Highlights Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="py-20 lg:px-20 bg-white"
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={staggerContainer}>
              <motion.h2
                variants={fadeInLeft}
                className="text-4xl md:text-5xl font-bold mb-8 text-gray-900"
              >
                Key Highlights
              </motion.h2>
              <div className="space-y-4">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    variants={listItemVariant}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="h-6 w-6 text-[#2D7A3E] flex-shrink-0 mt-1" />
                    <p className="text-lg text-gray-700">
                      {highlight.text}{" "}
                      {highlight.bold && (
                        <span className="font-semibold">{highlight.bold}</span>
                      )}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="group relative hidden lg:block h-[500px] rounded-lg overflow-hidden shadow-xl"
            >
              {/* Image */}
              <Image
                src="/images/other_section1.png"
                alt="BOAR Agro farmers in the field"
                fill
                className="object-cover"
              />

              {/* Hover Overlay */}
              <div
                className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100
    transition-opacity
    duration-300
  "
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Why BOAR Agro Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-24bg-[#F7FBF9]"
      >
        <div className="container mx-auto  px-4 md:px-6  lg:px-20 ">
          {/* HEADER */}
          <motion.div variants={fadeInUp} className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#1E3A2F]">
              Why BOAR Agro?
            </h2>
            <p className="text-lg text-justify lg:text-center md:text-xl text-gray-600 max-w-3xl mx-auto">
              Our value chain links farmers directly to processors, delivering
              better prices, stronger quality, faster delivery, and full
              traceability.
            </p>
          </motion.div>

          {/* COMPARISON GRID */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* VS BADGE */}
            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-14 h-14 rounded-full bg-[#2D7A3E] text-white flex items-center justify-center font-bold shadow-lg">
                VS
              </div>
            </div>

            {/* LEFT — BOAR AGRO ADVANTAGE */}
            <motion.div variants={fadeInLeft} className="space-y-4">
              {/* LABEL + DECORATION */}
              <div className="flex items-center gap-3">
                <div className="w-1 h-6 bg-[#2D7A3E] rounded-full" />
                <h3 className="text-lg font-semibold text-[#2D7A3E]">
                  The BOAR Agro Advantage
                </h3>
              </div>

              {/* CARD */}
              <div className="bg-white rounded-2xl py-10 px-5 lg:p-10 shadow-md border border-green-100">
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-5"
                >
                  {advantages.map((item, index) => (
                    <motion.div
                      key={index}
                      variants={listItemVariant}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="h-5 w-5 text-[#2D7A3E] mt-1 flex-shrink-0" />
                      <p className="text-gray-700">{item}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>

            {/* RIGHT — TRADITIONAL MODEL */}
            <motion.div variants={fadeInRight} className="space-y-4">
              {/* LABEL */}
              <h3 className="text-lg font-semibold text-gray-700">
                Traditional Model
              </h3>

              {/* CARD */}
              <div className="bg-white rounded-2xl py-10 px-5 shadow-md border border-red-100">
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-5"
                >
                  {traditionalModel.map((item, index) => (
                    <motion.div
                      key={index}
                      variants={listItemVariant}
                      className="flex items-start gap-3"
                    >
                      <XCircle className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">{item}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Sustainability Section */}
      {/* <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="py-24 bg-gradient-to-br from-[#2D7A3E] to-[#1e5228] text-white relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeInLeft}>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", duration: 0.6 }}
                className="inline-block mb-6"
              >
                <span className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
                  Our Commitment
                </span>
              </motion.div>
              <h2 className="text-5xl md:text-6xl font-bold mb-8">
                Sustainability
              </h2>
              <p className="text-xl text-white/90 mb-10 leading-relaxed">
                BOAR Agro integrates sustainability into every stage of the
                value chain. From climate-smart agriculture to farmer
                empowerment, we're building a regenerative farming ecosystem.
              </p>

              <div className="space-y-6 mb-10">
                {[
                  {
                    icon: Leaf,
                    title: "Climate-Smart Agriculture",
                    desc: "Drought-resistant practices & soil conservation",
                  },
                  {
                    icon: TrendingUp,
                    title: "Zero-Waste Operations",
                    desc: "Composting & sustainable resource management",
                  },
                  {
                    icon: Users,
                    title: "Farmer Empowerment",
                    desc: "Fair pricing & capacity building programs",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors"
                  >
                    <div className="bg-white/20 rounded-lg p-3">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                      <p className="text-white/80 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/sustainability">
                  <Button
                    size="lg"
                    className="bg-white hover:bg-gray-100 text-[#2D7A3E] px-10 py-7 text-lg rounded-full font-semibold shadow-xl"
                  >
                    Learn More About Our Impact
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/home_hero.png"
                alt="Farmer with farming tool"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D7A3E]/40 to-transparent" />
            </motion.div>
          </div>
        </div>
      </motion.section> */}

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="py-24 lg:px-20 bg-[#FBF7F2] text-[#2D2A26] relative overflow-hidden"
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* LEFT CONTENT */}
            <motion.div variants={fadeInLeft}>
              <h2 className="text-5xl md:text-6xl font-bold mb-8">
                Sustainability
              </h2>

              <p className="text-lg text-gray-600 mb-10 max-w-xl leading-relaxed">
                BOAR Agro integrates sustainability into every stage of the
                value chain. Here are our sustainable farming principles.
              </p>

              <Link href="/contact">
                <Button className="bg-[#F4A43A] hover:bg-[#e3942f] text-white px-8 py-4 rounded-full font-semibold">
                  Contact Us
                </Button>
              </Link>
            </motion.div>

            {/* RIGHT TIMELINE */}
            {/* <motion.div variants={fadeInRight} className="relative"> */}

            {/* Vertical Line */}
            <motion.div variants={fadeInRight} className="relative">
              {/* TIMELINE */}
              <div className="absolute left-5 top-5 bottom-5 w-[2px] bg-[#F4A43A]" />

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
              ].map((item, index, arr) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className={`relative flex gap-8 ${
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
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-md leading-relaxed max-w-md">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="py-20 bg-[#2D7A3E] text-white relative overflow-hidden"
      >
        <div className="container mx-auto px-1 md:px-6 lg:px-8 text-center relative z-10">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 text-balance"
          >
            Let's Redefine Africa's Farming Value Chain.
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            className="flex justify-center items-center gap-4"
          >
            <motion.div
              variants={scaleIn}
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
              variants={scaleIn}
              className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center"
            >
              <ArrowRight className="h-6 w-6" />
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 right-0 w-64 h-64 opacity-20">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <path
              d="M 20,100 Q 60,20 100,100 T 180,100"
              stroke="white"
              strokeWidth="3"
              fill="none"
            />
          </svg>
        </div>{" "}
      </motion.section>
    </div>
  );
}
