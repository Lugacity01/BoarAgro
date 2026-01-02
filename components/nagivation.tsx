"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";

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
    // { href: "/about", label: "About" },
  ];

  const businessLinks = [
    { href: "/farming", label: "Farming" },
    { href: "/agro-commodities", label: "Agro Commodities" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md lg:max-w-[900px] lg:top-4 lg:rounded-2xl lg:mx-auto border border-gray-200"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-10 xl:px-20">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? "h-16" : "h-20"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div
              className={`relative transition-all duration-300 ${
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
            {/* Our Businesses Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className={`flex items-center gap-1 font-[400] transition-all duration-300 ${
                    isScrolled
                      ? "text-[16px] text-gray-700 hover:text-[#2D7A3E]"
                      : "text-base text-white hover:text-gray-200"
                  }`}
                >
                  Our Businesses
                  <ChevronDown className="w-4 h-4 transition-transform group-data-[state=open]:rotate-180" />
                </button>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                align="start"
                sideOffset={12}
                className="w-56 rounded-2xl border border-gray-100 bg-white/95 backdrop-blur-xl p-2 animate-in fade-in zoom-in-95"
              >
                {businessLinks.map((item) => (
                  <DropdownMenuItem
                    key={item.href}
                    asChild
                    className="group focus:bg-transparent"
                  >
                    <Link
                      href={item.href}
                      className="relative flex items-center rounded-xl px-4 py-3 lg:text-[16px] text-[14px] font-normal text-gray-700 transition-all hover:bg-[#2D7A3E]/10 hover:text-[#2D7A3E]"
                    >
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 h-0 w-1 rounded-full bg-[#2D7A3E] transition-all group-hover:h-6" />

                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Other links */}
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

          {/* Desktop CTA */}
          <Link className="hidden md:flex" href="/contact">
            <Button
              className={`rounded-full font-[400] transition-all duration-300 ${
                isScrolled
                  ? "border border-[#2D7A3E] bg-white text-[#236530] hover:bg-[#236530] hover:text-white px-6 py-5 text-[16px]"
                  : "bg-[#2D7A3E] hover:bg-[#236530] text-white px-8 py-6 text-base"
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
              {/* Our Businesses (Mobile) */}
              <Collapsible>
                <CollapsibleTrigger className="flex w-full items-center justify-between py-2 font-medium text-gray-700">
                  Our Businesses
                  <ChevronDown className="w-5 h-5" />
                </CollapsibleTrigger>

                <CollapsibleContent className="ml-4 mt-2 space-y-2">
                  {businessLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-gray-600 hover:text-[#2D7A3E]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </CollapsibleContent>
              </Collapsible>

              {/* Other Mobile Links */}
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
