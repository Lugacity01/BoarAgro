"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Leaf,
  Users,
  Recycle,
  Heart,
  Globe,
  ArrowRight,
  CheckCircle2,
  Target,
  Award,
} from "lucide-react";

import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
} from "@/lib/animations";

export default function SustainabilityPage() {
  const pillars = [
    {
      icon: Leaf,
      title: "Climate-Smart Agriculture",
      description:
        "We use climate-smart agricultural practices that reduce dependence on unpredictable rainfall and build resilience against climate change.",
      initiatives: [
        "Drip and sprinkler irrigation systems for year-round production",
        "Drought-resistant seed varieties and crop diversification",
        "Soil conservation through mulching and cover cropping",
        "Integrated pest management to reduce chemical inputs",
        "Agroforestry practices that sequester carbon and enhance biodiversity",
      ],
      image: "/images/other_section1.png",
      impact: {
        stat: "40% Reduction",
        desc: "in water usage through efficient irrigation",
      },
    },
    {
      icon: Recycle,
      title: "Zero-Waste Farm Operations",
      description:
        "Our commitment to zero waste means every byproduct is repurposed, creating a circular farming system that minimizes environmental impact.",
      initiatives: [
        "Composting all organic farm residues into nutrient-rich fertilizer",
        "Cocoa pod husks converted to organic mulch and animal feed",
        "Biogas production from farm waste for on-site energy needs",
        "Recycling of irrigation water through filtration systems",
        "Biodegradable packaging materials for product transport",
      ],
      image: "/images/home_hero.png",
      impact: {
        stat: "85% Waste",
        desc: "diverted from landfills through composting",
      },
    },
    {
      icon: Users,
      title: "Farmer Empowerment",
      description:
        "We believe thriving farmers are the foundation of sustainable agriculture. Our programs ensure farmers receive fair compensation, training, and support.",
      initiatives: [
        "Direct pricing that eliminates middlemen and increases farmer income by 30%",
        "Free access to quality seedlings and agro-inputs",
        "Regular training workshops on sustainable farming techniques",
        "Digital tools for transparent transactions and traceability",
        "Microfinance partnerships to provide farmers with working capital",
      ],
      image: "/images/sustanability.png",
      impact: {
        stat: "500+ Farmers",
        desc: "trained and supported annually",
      },
    },
  ];

  const sdgGoals = [
    {
      number: 1,
      title: "No Poverty",
      desc: "Fair farmer pricing and income growth",
    },
    {
      number: 2,
      title: "Zero Hunger",
      desc: "Increased food production capacity",
    },
    {
      number: 8,
      title: "Decent Work",
      desc: "Safe working conditions and fair wages",
    },
    {
      number: 12,
      title: "Responsible Consumption",
      desc: "Zero-waste circular economy",
    },
    {
      number: 13,
      title: "Climate Action",
      desc: "Climate-smart farming practices",
    },
    {
      number: 15,
      title: "Life on Land",
      desc: "Biodiversity and soil conservation",
    },
  ];

  const commitments = [
    {
      year: "2024",
      title: "Certification & Compliance",
      items: [
        "Achieve Rainforest Alliance certification for all cocoa farms",
        "Implement full farm-to-factory traceability systems",
        "Complete annual sustainability audits",
      ],
    },
    {
      year: "2026",
      title: "Scale & Impact",
      items: [
        "Expand irrigated farmland to 500+ acres",
        "Train 1,000+ smallholder farmers in sustainable practices",
        "Reduce carbon footprint by 50% across operations",
      ],
    },
    {
      year: "2030",
      title: "Regenerative Future",
      items: [
        "Transition to 100% regenerative agriculture practices",
        "Achieve carbon neutrality across the entire value chain",
        "Establish farmer cooperatives in 10 Nigerian states",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        className="relative  lg:min-h-[70vh] min-h-[99vh]  flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/sustanability.png"
            alt="Sustainable farming"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>

        <div className="absolute  bottom-5 z-10 container mx-auto px-4 md:px-6 lg:px-20 text-white">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-block mb-6"
          >
            <span className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
              Our Commitment
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-[32px] md:text-3xl lg:text-3xl xl:text-[40px]  font-bold mb-2 text-balance"
          >
            Building a Sustainable Future
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-lg  mb-4 text-balance mx-auto leading-relaxed"
          >
            BOAR Agro integrates sustainability into every stage of the value
            chain. Here are Our Sustainable Farming Principles for transparent,
            tech-driven and sustainably ethical farming.
          </motion.p>
        </div>
      </motion.section>

      {/* Mission Statement */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
            >
              Why Sustainability Matters
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-700 leading-relaxed mb-8"
            >
              Nigerian agriculture faces significant challenges—climate
              variability, soil degradation, unfair pricing, and limited farmer
              access to modern techniques. BOAR Agro was founded to address
              these issues head-on.
            </motion.p>
            <motion.p
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-700 leading-relaxed"
            >
              We're building a regenerative farming ecosystem that benefits
              farmers, processors, and the planet. Our approach combines
              climate-smart agriculture, zero-waste operations, and farmer
              empowerment to create lasting impact.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Three Pillars */}
      {pillars.map((pillar, index) => (
        <motion.section
          key={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className={`py-20 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
        >
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Content Side */}
              <motion.div
                variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                className={`${index % 2 === 1 ? "lg:order-2" : ""}`}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#2D7A3E]/10 rounded-full mb-6">
                  <pillar.icon className="w-8 h-8 text-[#2D7A3E]" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                  {pillar.title}
                </h2>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  {pillar.description}
                </p>

                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Our Initiatives
                </h3>
                <div className="space-y-3 mb-8">
                  {pillar.initiatives.map((initiative, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="h-5 w-5 text-[#2D7A3E] flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{initiative}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="bg-[#2D7A3E]/10 border-l-4 border-[#2D7A3E] p-6 rounded-r-lg">
                  <div className="flex items-center gap-4">
                    <Award className="w-10 h-10 text-[#2D7A3E]" />
                    <div>
                      <p className="text-3xl font-bold text-[#2D7A3E]">
                        {pillar.impact.stat}
                      </p>
                      <p className="text-gray-700">{pillar.impact.desc}</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Image Side */}
              <motion.div
                variants={index % 2 === 0 ? fadeInRight : fadeInLeft}
                className={`${index % 2 === 1 ? "lg:order-1" : ""}`}
              >
                <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={pillar.image || "/placeholder.svg"}
                    alt={pillar.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      ))}

      {/* UN SDG Goals */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20 bg-gradient-to-br from-[#2D7A3E] to-[#1e5228] text-white relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
              <Globe className="w-8 h-8" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Aligned with UN Sustainable Development Goals
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-white/90">
              Our sustainability initiatives directly contribute to the United
              Nations' 2030 Agenda for Sustainable Development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sdgGoals.map((goal, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-[#2D7A3E]">
                      {goal.number}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{goal.title}</h3>
                    <p className="text-white/80">{goal.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Roadmap */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#2D7A3E]/10 rounded-full mb-6">
              <Target className="w-8 h-8 text-[#2D7A3E]" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our Sustainability Roadmap
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Clear milestones guiding our journey toward regenerative
              agriculture and carbon neutrality
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {commitments.map((commitment, index) => (
              <motion.div
                key={index}
                variants={fadeInLeft}
                className="relative pl-8 pb-12 border-l-4 border-[#2D7A3E] last:border-l-0 last:pb-0"
              >
                <div className="absolute -left-4 top-0 w-8 h-8 bg-[#2D7A3E] rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <div className="bg-gray-50 rounded-xl p-8 ml-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-4xl font-bold text-[#2D7A3E]">
                      {commitment.year}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {commitment.title}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {commitment.items.map((item, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2 className="h-5 w-5 text-[#2D7A3E] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-lg">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="py-24 bg-gradient-to-br from-[#2D7A3E] to-[#1e5228] text-white relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 0.6 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6"
          >
            <Heart className="w-8 h-8" />
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Partner with Us for Sustainable Agriculture
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            transition={{ delay: 0.1 }}
            className="text-xl mb-8 max-w-3xl mx-auto text-white/90"
          >
            Whether you are a processor seeking sustainable sourcing or a farmer
            looking to adopt climate-smart practices, we love to work together.
          </motion.p>
          <motion.div variants={fadeInUp} transition={{ delay: 0.2 }}>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-[#2D7A3E] hover:bg-gray-100 px-8 py-6 text-lg rounded-full font-semibold"
              >
                Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
