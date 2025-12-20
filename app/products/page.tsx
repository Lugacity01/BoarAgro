"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowRight, Leaf, Shield, Globe, Truck } from "lucide-react"
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  
} from "@/lib/animations"
export default function ProductsPage() {


  const products = [
    {
      id: "cocoa",
      name: "Premium Cocoa Beans",
      image: "/images/cocoa_beans.jpeg",
      hero: "/images/cocoa_beans.jpeg",
      tagline: "From Farm to Global Chocolate Makers",
      description:
        "Our premium cocoa beans are sourced from carefully managed estates and partner farms across Nigeria's cocoa belt. Each batch undergoes proper fermentation and sun-drying to develop rich flavor profiles that meet international standards.",
      specifications: [
        "Moisture Content: 7-8%",
        "Bean Count: 90-100 beans/100g",
        "Fermentation: Fully fermented (5-7 days)",
        "Defective Beans: Less than 3%",
        "Origin: Ondo, Cross River, Delta States",
        "Certifications: Rainforest Alliance Ready",
      ],
      variants: [
        {
          name: "Bulk Fermented Beans",
          desc: "Standard grade fermented and dried cocoa beans in jute bags",
        },
        {
          name: "Traceable Premium Blends",
          desc: "Single-origin beans with full farm-to-factory traceability",
        },
        {
          name: "Specialty Grade",
          desc: "Fine flavor cocoa beans for premium chocolate production",
        },
      ],
      markets: ["Netherlands (Amsterdam)", "United Kingdom", "Singapore", "Belgium"],
      benefits: [
        "Direct sourcing eliminates middlemen markup",
        "Consistent quality through controlled fermentation",
        "Full traceability from specific farm clusters",
        "Year-round supply with proper storage facilities",
      ],
    },
    {
      id: "soybeans",
      name: "High-Yield Soybeans",
      image: "/images/soya_beans.jpg",
      hero: "/images/soya_beans.jpg",
      tagline: "Year-Round Irrigated Production",
      description:
        "Our soybeans are cultivated on irrigated farmland in Ofigiri, enabling year-round production with ultra-high yields. Advanced agronomic practices ensure protein-rich beans that meet international food and feed industry standards.",
      specifications: [
        "Moisture Content: 12-14%",
        "Protein Content: 38-40%",
        "Oil Content: 18-20%",
        "Foreign Matter: Less than 2%",
        "Production System: Irrigated year-round",
        "Certifications: Non-GMO, USDA Export Grade",
      ],
      variants: [
        {
          name: "Food Grade Soybeans",
          desc: "Clean, graded beans for tofu, soy milk, and food processing",
        },
        {
          name: "Animal Feed Grade",
          desc: "High-protein beans for livestock and poultry feed production",
        },
        {
          name: "Soybean Meal & Oil",
          desc: "Processed soy products for industrial use",
        },
      ],
      markets: ["West Africa Regional Markets", "Asia (Malaysia, Thailand)", "Middle East"],
      benefits: [
        "Irrigation system ensures consistent quality",
        "Multiple harvests per year increase supply reliability",
        "Advanced cleaning and grading facilities",
        "Competitive pricing through direct-to-processor model",
      ],
    },
    {
      id: "habanero",
      name: "Fresh  Peppers",
      image: "/images/other_section4.png",
      hero: "/images/other_section4.png",
      tagline: "Premium Heat for West African Markets",
      description:
        "Our fresh  peppers are grown for the local and regional markets, supplying food processors, restaurants, and chili product manufacturers with consistent, high-quality peppers known for their intense heat and fruity flavor.",
      specifications: [
        "Scoville Heat Units: 100,000-350,000",
        "Size: Medium to Large pods",
        "Color: Vibrant orange-red when ripe",
        "Shelf Life: 7-10 days fresh, longer when processed",
        "Harvest: Year-round availability",
        "Growing Method: Sustainable open-field cultivation",
      ],
      variants: [
        {
          name: "Fresh Whole Peppers",
          desc: "Hand-picked, sorted peppers for immediate use",
        },
        {
          name: "Dried Habanero",
          desc: "Sun-dried or dehydrated peppers for extended shelf life",
        },
        {
          name: "Habanero Mash",
          desc: "Fresh pepper mash for sauce and spice manufacturers",
        },
      ],
      markets: ["Lagos Metro Area", "Abuja FCT", "Port Harcourt", "Regional West African Markets"],
      benefits: [
        "Daily harvest ensures maximum freshness",
        "Consistent supply to food processors",
        "Competitive wholesale pricing",
        "Quality sorting and grading before delivery",
      ],
    },
  ]

  const features = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Every batch is tested and certified to meet international export standards",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Direct connections to processors in Amsterdam, Singapore, and the UK",
    },
    {
      icon: Leaf,
      title: "Sustainable Sourcing",
      description: "All products sourced through climate-smart and ethical farming practices",
    },
    {
      icon: Truck,
      title: "Reliable Logistics",
      description: "Efficient supply chain from farm to port with proper storage and handling",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        className="relative lg:min-h-[70vh] min-h-[99vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#2D7A3E] to-[#1e5228]"
      >
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle at 2px 2px, white 2px, transparent 0)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <div className="absolute bottom-5 z-10 container mx-auto px-4 md:px-6 lg:px-20 text-white ">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-block mb-6"
          >
            <span className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
              Premium Quality
            </span>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-[32px] md:text-3xl lg:text-3xl xl:text-[40px]  font-bold mb-3 text-balance">
            Export-Grade Agricultural Products
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-lg mb-8 text-balance max-w-4xl text-white/90"
          >
            From Nigerian farms to international processors. Premium cocoa beans, high-yield soybeans, and fresh
             peppers with full traceability.
          </motion.p>
        </div>
      </motion.section>

      {/* Features Grid */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#2D7A3E]/10 rounded-full mb-4">
                  <feature.icon className="w-8 h-8 text-[#2D7A3E]" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Product Details */}
      {products.map((product, index) => (
        <motion.section
          key={product.id}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className={`py-20 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
        >
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              {/* Image Side */}
              <motion.div
                variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                className={`${index % 2 === 1 ? "lg:order-2" : ""}`}
              >
                <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image src={product.hero || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                  <div className="absolute top-6 left-6 bg-[#2D7A3E] text-white px-4 py-2 rounded-full font-semibold">
                    Export Grade
                  </div>
                </div>
              </motion.div>

              {/* Content Side */}
              <motion.div
                variants={index % 2 === 0 ? fadeInRight : fadeInLeft}
                className={`${index % 2 === 1 ? "lg:order-1" : ""}`}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">{product.name}</h2>
                <p className="text-xl text-[#2D7A3E] mb-6 font-semibold">{product.tagline}</p>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">{product.description}</p>

                {/* Specifications */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Specifications</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {product.specifications.map((spec, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-start gap-2"
                      >
                        <CheckCircle2 className="h-5 w-5 text-[#2D7A3E] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{spec}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Product Variants */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Available Variants</h3>
                  <div className="space-y-3">
                    {product.variants.map((variant, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-white border border-gray-200 rounded-lg p-4 hover:border-[#2D7A3E] transition-colors"
                      >
                        <h4 className="font-bold text-gray-900 mb-1">{variant.name}</h4>
                        <p className="text-gray-600 text-sm">{variant.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Key Benefits */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Key Benefits</h3>
                  <div className="space-y-2">
                    {product.benefits.map((benefit, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2 className="h-5 w-5 text-[#2D7A3E] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Target Markets */}
                <div>
                  <h3 className="text-lg font-bold mb-3 text-gray-900">Target Markets</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.markets.map((market, idx) => (
                      <span
                        key={idx}
                        className="bg-[#2D7A3E]/10 text-[#2D7A3E] px-4 py-2 rounded-full text-sm font-semibold"
                      >
                        {market}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      ))}

      {/* CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="lg:py-24 py-15 bg-gradient-to-br from-[#2D7A3E] to-[#1e5228] text-white relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center relative z-10">
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Source Premium Agricultural Products?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            transition={{ delay: 0.1 }}
            className="text-xl  mb-8 max-w-3xl mx-auto text-white/90"
          >
            Connect with us to discuss your sourcing needs. We supply processors, traders, and export buyers with
            consistent quality and reliable delivery.
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
  )
}
