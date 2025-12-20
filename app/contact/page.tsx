"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight } from "lucide-react";
import {
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  formFieldVariant,
} from "@/lib/animations";
import CTASection from "@/components/home/ctasection";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    countryCode: "+234",
    companyName: "",
    role: "",
    inquiryType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="relative lg:min-h-[70vh] min-h-[99vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/home_hero.png"
            alt="Cocoa pod"
            fill
            className="object-cover brightness-50"
          />
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-5xl md:text-6xl font-bold text-white"
        >
          Contact
        </motion.h1>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We're here to connect. Reach out for exports, supply,
                partnerships, or careers. Processors, traders, farmers, and
                partners welcome.
              </p>
            </motion.div>

            <motion.form
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
              onSubmit={handleSubmit}
              className="bg-white rounded-lg p-8 shadow-lg"
            >
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                <motion.div variants={formFieldVariant}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <Input
                    placeholder="e.g Adesewa Afleck"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    className="rounded-lg"
                  />
                </motion.div>

                <motion.div variants={formFieldVariant}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    placeholder="e.g adesewa@boaragro.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="rounded-lg"
                  />
                </motion.div>

                <motion.div variants={formFieldVariant}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <div className="flex gap-2">
                    <select
                      value={formData.countryCode}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          countryCode: e.target.value,
                        })
                      }
                      className="w-24 rounded-lg border border-gray-300 px-3 py-2"
                    >
                      <option value="+234">🇳🇬</option>
                      <option value="+1">🇺🇸</option>
                      <option value="+44">🇬🇧</option>
                    </select>
                    <Input
                      placeholder="000 000 000"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="flex-1 rounded-lg"
                    />
                  </div>
                </motion.div>

                <motion.div
                  variants={formFieldVariant}
                  className="grid grid-cols-2 gap-4"
                >
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <Input
                      placeholder="XYZ Company"
                      value={formData.companyName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          companyName: e.target.value,
                        })
                      }
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Role
                    </label>
                    <Input
                      placeholder="XYZ"
                      value={formData.role}
                      onChange={(e) =>
                        setFormData({ ...formData, role: e.target.value })
                      }
                      className="rounded-lg"
                    />
                  </div>
                </motion.div>

                <motion.div variants={formFieldVariant}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    What is your inquiry type
                  </label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) =>
                      setFormData({ ...formData, inquiryType: e.target.value })
                    }
                    className="w-full rounded-lg border border-gray-300 px-3 py-2"
                  >
                    <option value="">Select an option</option>
                    <option value="export">Export Inquiry</option>
                    <option value="partnership">Partnership</option>
                    <option value="career">Career</option>
                    <option value="other">Other</option>
                  </select>
                </motion.div>

                <motion.div variants={formFieldVariant}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Information
                  </label>
                  <Textarea
                    placeholder="Type here..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={4}
                    className="rounded-lg resize-none"
                  />
                </motion.div>

                <motion.p
                  variants={formFieldVariant}
                  className="text-xs text-gray-500"
                >
                  By submitting this form, you agree to be contacted regarding
                  your inquiry
                </motion.p>

                <motion.div
                  variants={formFieldVariant}
                  className="flex items-center gap-2"
                >
                  <motion.div
                    className="flex-1"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      className="w-full bg-[#2D7A3E] hover:bg-[#236530] text-white py-6 rounded-full text-lg font-semibold"
                    >
                      Submit
                    </Button>
                  </motion.div>
                  <div className="w-12 h-12 bg-[#2D7A3E] rounded-full flex items-center justify-center flex-shrink-0">
                    <ArrowRight className="h-6 w-6 text-white" />
                  </div>
                </motion.div>
              </motion.div>
            </motion.form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
