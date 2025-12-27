"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/products", label: "Products" },
    { href: "/sustainability", label: "Sustainability" },
    { href: "/about", label: "About" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md lg:max-w-[900px] lg:top-4 lg:rounded-2xl lg:mx-auto border-b border-gray-200"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-20">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? "h-16" : "h-20"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div
              className={`relative transition-all  duration-300 ${
                isScrolled ? "w-10 h-10" : "w-12 h-12"
              }`}
            >
              <Image
                src="/boar_logo.png"
                alt="BOAR Agro"
                fill
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-[400] transition-all duration-300 ${
                  isScrolled
                    ? "text-[16px] text-gray-700 hover:text-[#2D7A3E]"
                    : "text-base text-white hover:text-gray-200"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link className="hidden md:flex " href="/contact">
            <Button
              className={`rounded-full font-semibold transition-all duration-300 ${
                isScrolled
                  ? "border border-[#2D7A3E] hover:bg-[#236530] bg-white hover:text-white text-[#236530]  px-6 py-5 text-[16px] font-[400]"
                  : "bg-[#2D7A3E] hover:bg-[#236530] text-white   px-8 py-6 text-base"
              }`}
            >
              Contact Us
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 ${
              isScrolled ? "text-gray-900" : "text-white"
            }`}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : isScrolled ? (
              <Menu className="h-6 w-6" />
            ) : (
              <Image
                src="/icons/menubar.svg"
                width={24}
                height={24}
                alt="menubar"
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-gray-700 hover:text-[#2D7A3E] font-medium py-2"
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full bg-[#2D7A3E] hover:bg-[#236530] text-white rounded-full">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
